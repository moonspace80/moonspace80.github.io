/* ==========================================================================
   KOKORO-JS NEURAL TTS ENGINE -- v2
   --------------------------------------------------------------------------
   Architecture :
   - Francais (Yuki, exercices)  -> Kokoro neural ff_siwis
       via tts.model() direct : bypass _validate_voice totalement
   - Francais masculin (Julien)  -> Kokoro blende ff_siwis + em_alex 50/50
   - Anglais                     -> Web Speech API en-GB
   - Japonais                    -> Web Speech API ja-JP
   - Chinois                     -> Web Speech API zh-CN
   - Fallback                    -> Web Speech API fr-FR

   Astuce cle : generate() appelle _validate_voice() qui rejette ff_siwis,
   mais tts.model() ne l appelle JAMAIS. On tokenize directement avec
   tts.tokenizer(), on calcule la tranche de style manuellement, et on
   appelle tts.model() avec nos propres tenseurs.
   ========================================================================== */

class KokoroTTSEngine {
  constructor() {
    this.tts           = null;
    this.isLoaded      = false;
    this.isLoading     = false;
    this.loadError     = null;
    this.currentPlayer = null;
    this._voiceCache   = new Map();

    this.loadModel();
  }

  async loadModel() {
    if (this.isLoaded || this.isLoading) return;
    this.isLoading = true;
    this._updateStatus('loading');

    try {
      console.log('[KokoroTTS] Importing kokoro-js from CDN...');
      const module    = await import('https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/+esm');
      const KokoroTTS = module.KokoroTTS;
      if (!KokoroTTS) throw new Error('KokoroTTS class not found');

      this._updateStatus('downloading');
      console.log('[KokoroTTS] Loading ONNX model...');

      this.tts = await KokoroTTS.from_pretrained(
        'onnx-community/Kokoro-82M-v1.0-ONNX',
        { dtype: 'q8', device: 'wasm' }
      );

      this.isLoaded  = true;
      this.isLoading = false;
      this.loadError = null;
      this._updateStatus('ready');
      console.log('[KokoroTTS] Model loaded! Preloading voice vectors...');

      this._loadVoiceVec('ff_siwis').catch(() => {});
      this._loadVoiceVec('em_alex').catch(() => {});

    } catch (err) {
      this.isLoading = false;
      this.loadError = err;
      this._updateStatus('fallback');
      console.warn('[KokoroTTS] Model load failed, Web Speech fallback active:', err.message);
    }
  }

  async _loadVoiceVec(voiceName) {
    if (this._voiceCache.has(voiceName)) return this._voiceCache.get(voiceName);

    const url = 'https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/main/voices/' + voiceName + '.bin';
    let buf;

    try {
      const c = await caches.open('kokoro-voices');
      const r = await c.match(url);
      if (r) buf = await r.arrayBuffer();
    } catch (_) {}

    if (!buf) {
      const r = await fetch(url);
      if (!r.ok) throw new Error('Voice ' + voiceName + ': HTTP ' + r.status);
      buf = await r.arrayBuffer();
      try {
        const c = await caches.open('kokoro-voices');
        await c.put(url, new Response(buf.slice(0), { headers: { 'Content-Type': 'application/octet-stream' } }));
      } catch (_) {}
    }

    const vec = new Float32Array(buf);
    this._voiceCache.set(voiceName, vec);
    console.log('[KokoroTTS] Voice vector loaded: ' + voiceName + ' (' + vec.length + ' floats)');
    return vec;
  }

  async _blendVoices(nameA, nameB, wA, wB) {
    wA = wA || 0.5; wB = wB || 0.5;
    const key = 'blend:' + nameA + ':' + wA + ':' + nameB + ':' + wB;
    if (this._voiceCache.has(key)) return this._voiceCache.get(key);

    const va = await this._loadVoiceVec(nameA);
    const vb = await this._loadVoiceVec(nameB);
    const len = Math.min(va.length, vb.length);
    const blended = new Float32Array(len);
    for (let i = 0; i < len; i++) blended[i] = va[i] * wA + vb[i] * wB;
    this._voiceCache.set(key, blended);
    return blended;
  }

  async speak(text, options) {
    options = options || {};
    if (!text || !text.trim()) return;

    const rate   = options.rate || 1.0;
    const lang   = (options.lang || 'fr').toLowerCase();
    const isMale = options.gender === 'male' ||
                   (options.speaker && options.speaker.toLowerCase() === 'julien');

    this.stop();

    const cleanText = text
      .replace(/<[^>]*>?/gm, ' ')
      .replace(/_{2,}/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (!cleanText) return;

    // Routage multilingue -> Web Speech natif (meilleure phonemisation)
    if (lang === 'en' || lang.startsWith('en')) {
      return this._speakWebSpeech(cleanText, 'en-GB', 'female', rate);
    }
    if (lang === 'ja' || lang === 'jp' || lang.startsWith('ja')) {
      return this._speakWebSpeech(cleanText, 'ja-JP', 'female', rate);
    }
    if (lang === 'zh' || lang === 'cn' || lang.startsWith('zh')) {
      const cleanZh = cleanText.replace(/\([^)]+\)/g, '').replace(/\uff08[^\uff09]+\uff09/g, '').trim();
      return this._speakWebSpeech(cleanZh || cleanText, 'zh-CN', 'female', rate);
    }

    // FRANCAIS : Kokoro neural via tts.model() direct (bypass _validate_voice)
    const playSessionId = Symbol('tts');
    this._currentSessionId = playSessionId;
    const chunks = this._splitSentences(cleanText);

    if (this.isLoaded && this.tts) {
      try {
        const styleVec = isMale
          ? await this._blendVoices('ff_siwis', 'em_alex', 0.5, 0.5)
          : await this._loadVoiceVec('ff_siwis');

        for (let i = 0; i < chunks.length; i++) {
          if (this._currentSessionId !== playSessionId) break;
          const chunk = chunks[i];
          console.log('[KokoroTTS] (' + (isMale ? 'Male blend' : 'ff_siwis') + ') Chunk ' + (i+1) + '/' + chunks.length + ': ' + chunk.substring(0, 60));

          // Tokenisation directe (pas de _validate_voice implique)
          const tokenized = this.tts.tokenizer(chunk, { truncation: true });
          const input_ids = tokenized.input_ids;

          // Calcul de la tranche de style (256 floats)
          const tokenCount = input_ids.dims.at(-1);
          const styleIdx   = 256 * Math.min(Math.max(tokenCount - 2, 0), 509);
          const styleSlice = styleVec.slice(styleIdx, styleIdx + 256);

          // Appel direct au modele ONNX avec notre vecteur de style injecte
          // (bypass complet de generate() et de _validate_voice)
          const modelInput = {
            input_ids: input_ids,
            style: { type: 'float32', data: styleSlice, dims: [1, 256] },
            speed: { type: 'float32', data: new Float32Array([rate]), dims: [1] }
          };
          const result = await this.tts.model(modelInput);
          const waveform = result.waveform;

          if (this._currentSessionId !== playSessionId) break;

          const blob   = this._float32ToWav(waveform.data, 24000);
          const url    = URL.createObjectURL(blob);
          const player = new Audio(url);
          player.playbackRate = 1.0;
          this.currentPlayer  = player;

          await new Promise((resolve, reject) => {
            player.onended = function() { URL.revokeObjectURL(url); resolve(); };
            player.onerror = function() { URL.revokeObjectURL(url); reject(new Error('audio error')); };
            player.play().catch(function(e) { URL.revokeObjectURL(url); reject(e); });
          });
          this.currentPlayer = null;

          if (i < chunks.length - 1 && this._currentSessionId === playSessionId) {
            await new Promise(function(r) { setTimeout(r, 220); });
          }
        }

        if (this._currentSessionId === playSessionId) this._currentSessionId = null;
        return;

      } catch (err) {
        console.warn('[KokoroTTS] Neural TTS error, falling back to Web Speech:', err.message);
      }
    }

    return this._speakWebSpeech(cleanText, 'fr-FR', isMale ? 'male' : 'female', rate);
  }

  _speakWebSpeech(text, langTag, gender, rate) {
    langTag = langTag || 'fr-FR';
    gender  = gender  || 'female';
    rate    = rate    || 0.95;

    return new Promise(function(resolve) {
      if (!('speechSynthesis' in window)) { resolve(); return; }
      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang  = langTag;
      utterance.rate  = rate;
      utterance.pitch = gender === 'male' ? 0.82 : 1.0;

      const voices = speechSynthesis.getVoices();
      const prefix = langTag.substring(0, 2).toLowerCase();
      const pool   = voices.filter(function(v) { return v.lang.toLowerCase().startsWith(prefix); });

      let chosen = null;
      if (langTag === 'fr-FR') {
        chosen =
          pool.find(function(v) { return /natural|online|google|premium|enhanced/i.test(v.name); }) ||
          pool.find(function(v) { return !/hortense|desktop/i.test(v.name); }) ||
          pool[0] || null;
      } else {
        chosen = pool[0] || null;
      }

      if (chosen) {
        utterance.voice = chosen;
        console.log('[KokoroTTS] Web Speech [' + langTag + ']:' , chosen.name);
      }

      utterance.onend  = function() { resolve(); };
      utterance.onerror = function() { resolve(); };
      speechSynthesis.speak(utterance);
    });
  }

  _splitSentences(input) {
    const regex  = /([^.?!;:\n]+[.?!;:]*)/g;
    const parts  = input.match(regex) || [input];
    const chunks = [];
    let current  = '';
    for (let j = 0; j < parts.length; j++) {
      const t = parts[j].trim();
      if (!t) continue;
      if ((current + ' ' + t).trim().length > 250 && current.length > 0) {
        chunks.push(current.trim());
        current = t;
      } else {
        current = current ? current + ' ' + t : t;
      }
    }
    if (current.trim()) chunks.push(current.trim());
    return chunks.length > 0 ? chunks : [input];
  }

  _float32ToWav(samples, sampleRate) {
    sampleRate = sampleRate || 24000;
    const buf  = new ArrayBuffer(44 + samples.length * 2);
    const view = new DataView(buf);
    const ws   = function(off, str) { for (let i = 0; i < str.length; i++) view.setUint8(off + i, str.charCodeAt(i)); };
    ws(0, 'RIFF'); view.setUint32(4, 36 + samples.length * 2, true);
    ws(8, 'WAVE'); ws(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    ws(36, 'data'); view.setUint32(40, samples.length * 2, true);
    let off = 44;
    for (let i = 0; i < samples.length; i++, off += 2) {
      const s = Math.max(-1, Math.min(1, samples[i]));
      view.setInt16(off, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    }
    return new Blob([view], { type: 'audio/wav' });
  }

  _updateStatus(status) {
    const map = {
      loading:     { text: '\u23F3 Chargement du moteur vocal Kokoro\u2026',       color: '#f59e0b' },
      downloading: { text: '\u2B07\uFE0F T\u00E9l\u00E9chargement du mod\u00E8le neural (~80 Mo)\u2026', color: '#3b82f6' },
      ready:       { text: '\uD83D\uDFE2 Kokoro Neural TTS pr\u00EAt',              color: '#10b981' },
      fallback:    { text: '\u26A0\uFE0F Voix syst\u00E8me (fallback)',             color: '#ef4444' }
    };
    const info = map[status] || { text: status, color: '#888' };
    const els = document.querySelectorAll('#tts-status, #dict-tts-status, .tts-status-badge');
    els.forEach(function(el) { el.textContent = info.text; el.style.color = info.color; });
  }

  stop() {
    this._currentSessionId = null;
    if (this.currentPlayer) {
      this.currentPlayer.pause();
      this.currentPlayer.currentTime = 0;
      this.currentPlayer = null;
    }
    if ('speechSynthesis' in window) speechSynthesis.cancel();
  }
}

window.aiTTS     = new KokoroTTSEngine();
window.kokoroTTS = window.aiTTS;
window.ttsEngine = window.aiTTS;
