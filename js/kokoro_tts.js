/* ==========================================================================
   KOKORO-JS NEURAL TTS ENGINE
   Proper ESM import via CDN + toBlob() audio playback
   Fallback: Web Speech API (SpeechSynthesisUtterance)
   ========================================================================== */

class KokoroTTSEngine {
  constructor() {
    this.tts = null;
    this.isLoaded = false;
    this.isLoading = false;
    this.loadError = null;
    this.currentPlayer = null; // tracks currently playing Audio element

    // Attempt to load the model immediately in the background
    this.loadModel();
  }

  /**
   * Dynamically import kokoro-js ESM from jsDelivr and load the ONNX model.
   * The model is ~300MB on first load (cached by the browser afterwards).
   */
  async loadModel() {
    if (this.isLoaded || this.isLoading) return;
    this.isLoading = true;
    this._updateStatus("loading");

    try {
      console.log("[KokoroTTS] Importing kokoro-js from CDN...");

      // ESM dynamic import from jsDelivr
      const module = await import(
        "https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/+esm"
      );
      const KokoroTTS = module.KokoroTTS;

      if (!KokoroTTS) {
        throw new Error("KokoroTTS class not found in imported module");
      }

      console.log("[KokoroTTS] Loading ONNX model (onnx-community/Kokoro-82M-v1.0-ONNX)...");
      this._updateStatus("downloading");

      this.tts = await KokoroTTS.from_pretrained(
        "onnx-community/Kokoro-82M-v1.0-ONNX",
        {
          dtype: "q8",     // Quantized 8-bit for smaller download (~80MB vs 300MB fp32)
          device: "wasm",  // WebAssembly fallback (works everywhere; WebGPU may not be available)
        }
      );

      this.isLoaded = true;
      this.isLoading = false;
      this.loadError = null;
      this._updateStatus("ready");
      console.log("[KokoroTTS] Model loaded successfully! Ready to speak.");
    } catch (err) {
      this.isLoading = false;
      this.loadError = err;
      this._updateStatus("fallback");
      console.warn("[KokoroTTS] Failed to load model, will use Web Speech API fallback:", err.message);
    }
  }

  /**
   * Update a status indicator element in the DOM if it exists.
   */
  _updateStatus(status) {
    const el = document.getElementById("tts-status");
    if (!el) return;

    const statusMap = {
      loading: { text: "⏳ Chargement du moteur vocal Kokoro...", color: "#f59e0b" },
      downloading: { text: "⬇️ Téléchargement du modèle neural (~80 Mo)...", color: "#3b82f6" },
      ready: { text: "🟢 Kokoro Neural TTS prêt", color: "#10b981" },
      fallback: { text: "⚠️ Voix système (fallback)", color: "#ef4444" },
    };

    const info = statusMap[status] || { text: status, color: "#888" };
    el.textContent = info.text;
    el.style.color = info.color;
  }

  /**
   * Speak text using Kokoro neural TTS, with Web Speech API fallback.
   * @param {string} text - The French text to speak.
   * @param {object} options - { rate: number }
   * @returns {Promise<void>}
   */
  async speak(text, options = { rate: 1.0 }) {
    if (!text || text.trim() === "") return;

    // Stop any currently playing audio
    this.stop();

    // Clean HTML tags from text
    const cleanText = text.replace(/<[^>]*>?/gm, "").trim();
    if (!cleanText) return;

    // Try Kokoro first
    if (this.isLoaded && this.tts) {
      try {
        console.log("[KokoroTTS] Generating speech for:", cleanText.substring(0, 60) + "...");

        const audio = await this.tts.generate(cleanText, {
          voice: "ff_siwis", // French female voice
        });

        // Use toBlob() if available, otherwise try raw data
        let blob;
        if (typeof audio.toBlob === "function") {
          blob = audio.toBlob();
        } else if (audio.data) {
          blob = new Blob([audio.data], { type: "audio/wav" });
        } else {
          throw new Error("Cannot extract audio data from Kokoro output");
        }

        const url = URL.createObjectURL(blob);
        const player = new Audio(url);
        player.playbackRate = options.rate || 1.0;
        this.currentPlayer = player;

        return new Promise((resolve) => {
          player.onended = () => {
            URL.revokeObjectURL(url);
            this.currentPlayer = null;
            resolve();
          };
          player.onerror = (e) => {
            console.warn("[KokoroTTS] Audio playback error:", e);
            URL.revokeObjectURL(url);
            this.currentPlayer = null;
            // Fall through to Web Speech API
            this._speakWithWebSpeech(cleanText, options.rate).then(resolve);
          };
          player.play().catch((e) => {
            console.warn("[KokoroTTS] play() rejected:", e);
            URL.revokeObjectURL(url);
            this.currentPlayer = null;
            this._speakWithWebSpeech(cleanText, options.rate).then(resolve);
          });
        });
      } catch (err) {
        console.warn("[KokoroTTS] Generation error, falling back to Web Speech:", err.message);
      }
    }

    // Fallback: Web Speech API
    return this._speakWithWebSpeech(cleanText, options.rate);
  }

  /**
   * Web Speech API fallback — uses the best available French voice,
   * explicitly excluding robotic Desktop/SAPI voices like Hortense.
   */
  _speakWithWebSpeech(text, rate = 0.95) {
    return new Promise((resolve) => {
      if (!("speechSynthesis" in window)) {
        console.warn("[KokoroTTS] No speechSynthesis available.");
        resolve();
        return;
      }

      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "fr-FR";
      utterance.rate = rate;
      utterance.pitch = 1.0;

      // Pick best French voice, avoiding Desktop/SAPI/Hortense
      const voices = speechSynthesis.getVoices();
      const premiumVoice = voices.find(
        (v) =>
          v.lang.startsWith("fr") &&
          (v.name.includes("Natural") ||
            v.name.includes("Online") ||
            v.name.includes("Google") ||
            v.name.includes("Premium") ||
            v.name.includes("Enhanced"))
      );
      const anyFrench = voices.find(
        (v) =>
          v.lang.startsWith("fr") &&
          !v.name.includes("Hortense") &&
          !v.name.includes("Desktop")
      );
      const lastResort = voices.find((v) => v.lang.startsWith("fr"));

      const selectedVoice = premiumVoice || anyFrench || lastResort;
      if (selectedVoice) {
        utterance.voice = selectedVoice;
        console.log("[KokoroTTS] Using Web Speech voice:", selectedVoice.name);
      }

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();
      speechSynthesis.speak(utterance);
    });
  }

  /**
   * Stop any currently playing audio.
   */
  stop() {
    // Stop Kokoro audio player
    if (this.currentPlayer) {
      this.currentPlayer.pause();
      this.currentPlayer.currentTime = 0;
      this.currentPlayer = null;
    }
    // Stop Web Speech API
    if ("speechSynthesis" in window) {
      speechSynthesis.cancel();
    }
  }
}

// Create the global TTS engine instance
window.aiTTS = new KokoroTTSEngine();
