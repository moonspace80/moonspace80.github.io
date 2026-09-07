/* ==========================================================================
   MODULE 3: LISTENING COMPREHENSION ENGINE (RFI PODCAST PLAYER & TRANSCRIPTS)
   ========================================================================== */

class ListeningModule {
  constructor() {
    this.dataset = window.listeningDataset || [];
    this.currentTrackIndex = 0;
    this.isPlaying = false;
    this.isSeeking = false; // true while user drags the seek bar

    this.initDOM();
    this.bindEvents();
    this.render();
    this.loadTrack(0);
  }

  render() {
    if (window.listeningDataset && window.listeningDataset.length > 0) {
      this.dataset = window.listeningDataset;
    }
    this.renderEpisodesList();
  }

  initDOM() {
    this.audioElement = document.getElementById('main-audio-element');
    this.trackTitle = document.getElementById('audio-track-title');
    this.trackDate = document.getElementById('audio-track-date');
    this.playPauseBtn = document.getElementById('audio-play-pause-btn');
    this.rewindBtn = document.getElementById('audio-rewind-btn');
    this.forwardBtn = document.getElementById('audio-forward-btn');
    this.seekBar = document.getElementById('audio-seek-bar');
    this.currentTimeEl = document.getElementById('audio-current-time');
    this.durationEl = document.getElementById('audio-duration');
    this.episodesListEl = document.getElementById('listening-episodes-list');
    this.transcriptBody = document.getElementById('listening-transcript-body');
    this.toggleTranscriptBtn = document.getElementById('toggle-transcript-btn');
    this.quizQuestionsEl = document.getElementById('listening-quiz-questions');
    this.submitBtn = document.getElementById('submit-listening-quiz-btn');
    this.scoreDisplay = document.getElementById('listening-quiz-score');

    // Transcript Controls
    this.fontMinusBtn = document.getElementById('transcript-font-minus');
    this.fontPlusBtn = document.getElementById('transcript-font-plus');
    this.fontLabel = document.getElementById('transcript-font-label');
    this.searchInput = document.getElementById('transcript-search-input');
    this.currentFontSize = 16;
  }

  bindEvents() {
    // Font size adjustments
    if (this.fontMinusBtn) {
      this.fontMinusBtn.addEventListener('click', () => {
        if (this.currentFontSize > 12) {
          this.currentFontSize -= 2;
          this.updateTranscriptFontSize();
        }
      });
    }

    if (this.fontPlusBtn) {
      this.fontPlusBtn.addEventListener('click', () => {
        if (this.currentFontSize < 26) {
          this.currentFontSize += 2;
          this.updateTranscriptFontSize();
        }
      });
    }

    // Live search inside transcript
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchInTranscript(e.target.value.trim().toLowerCase());
      });
    }
    if (this.playPauseBtn) {
      this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
    }

    if (this.rewindBtn) {
      this.rewindBtn.addEventListener('click', () => {
        if (this.audioElement) this.audioElement.currentTime -= 10;
      });
    }

    if (this.forwardBtn) {
      this.forwardBtn.addEventListener('click', () => {
        if (this.audioElement) this.audioElement.currentTime += 10;
      });
    }

    if (this.audioElement) {
      this.audioElement.addEventListener('timeupdate', () => this.updateProgress());
      this.audioElement.addEventListener('loadedmetadata', () => {
        if (this.durationEl) this.durationEl.textContent = this.formatTime(this.audioElement.duration);
      });
      this.audioElement.addEventListener('ended', () => {
        this.isPlaying = false;
        if (this.playPauseBtn) this.playPauseBtn.innerHTML = '<span class="material-icons-round">play_arrow</span>';
      });
    }

    if (this.seekBar) {
      // While dragging: update time display in real time but don't overwrite seekBar from timeupdate
      this.seekBar.addEventListener('mousedown',  () => { this.isSeeking = true; });
      this.seekBar.addEventListener('touchstart', () => { this.isSeeking = true; }, { passive: true });

      // On release: actually seek the audio
      const commitSeek = () => {
        if (this.audioElement && this.audioElement.duration) {
          this.audioElement.currentTime = (this.seekBar.value / 100) * this.audioElement.duration;
          if (this.currentTimeEl) {
            this.currentTimeEl.textContent = this.formatTime(this.audioElement.currentTime);
          }
        }
        this.isSeeking = false;
        this._updateSeekFill();
      };
      this.seekBar.addEventListener('mouseup',  commitSeek);
      this.seekBar.addEventListener('touchend', commitSeek);

      // Live preview of time while dragging (without actually seeking)
      this.seekBar.addEventListener('input', () => {
        if (this.audioElement && this.audioElement.duration && this.currentTimeEl) {
          const previewTime = (this.seekBar.value / 100) * this.audioElement.duration;
          this.currentTimeEl.textContent = this.formatTime(previewTime);
        }
        this._updateSeekFill();
      });
    }

    // Speed Controls
    document.querySelectorAll('.speed-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const speed = parseFloat(e.currentTarget.getAttribute('data-speed'));
        if (this.audioElement) this.audioElement.playbackRate = speed;
      });
    });

    if (this.toggleTranscriptBtn) {
      this.toggleTranscriptBtn.addEventListener('click', () => {
        if (this.transcriptBody) {
          this.transcriptBody.style.display = this.transcriptBody.style.display === 'none' ? 'block' : 'none';
        }
      });
    }

    if (this.submitBtn) {
      this.submitBtn.addEventListener('click', () => this.evaluateQuiz());
    }
  }

  renderEpisodesList() {
    if (!this.episodesListEl) return;
    this.episodesListEl.innerHTML = this.dataset.map((ep, idx) => `
      <div class="example-item ${idx === this.currentTrackIndex ? 'active' : ''}" style="cursor:pointer" onclick="listeningModule.loadTrack(${idx})">
        <strong>${ep.title}</strong>
        <div style="font-size:0.75rem; color:var(--md-sys-color-on-surface-variant)">${ep.date} • Durée : ${ep.duration}</div>
      </div>
    `).join('');
  }

  loadTrack(index) {
    this.currentTrackIndex = index;
    const track = this.dataset[index];
    if (!track) return;

    if (this.trackTitle) this.trackTitle.textContent = track.title;
    if (this.trackDate) this.trackDate.textContent = track.date;
    if (this.audioElement && track.audioUrl) this.audioElement.src = track.audioUrl;

    // Render transcript with highlighted non-mastered dictionary words
    this.renderHighlightedTranscript(track.transcript);

    this.renderQuiz(track.questions);
    this.renderEpisodesList();
  }

  renderHighlightedTranscript(rawTranscript) {
    if (!this.transcriptBody) return;
    if (!rawTranscript) {
      this.transcriptBody.innerHTML = "<em>Aucune transcription disponible pour cet épisode.</em>";
      return;
    }

    const vocabData = window.vocabDataset || [];
    const learnedIds = JSON.parse(localStorage.getItem('delf_learned_vocab') || '[]');

    // Build map of non-mastered words in dictionary: lowercase -> item
    const unmasteredMap = new Map();
    vocabData.forEach(item => {
      if (!learnedIds.includes(item.id)) {
        const cleanW = item.word.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (cleanW.length >= 3) {
          unmasteredMap.set(cleanW, item);
        }
      }
    });

    // Parse HTML transcript nodes safely without breaking tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = rawTranscript;

    const processTextNode = (textNode) => {
      const text = textNode.nodeValue;
      if (!text || text.trim() === '') return;

      // Regex matching French words (letters with accents)
      const regex = /([a-zA-Zà-ÿÀ-ŸêëîïôûùüçÉÈÊËÎÏÔÛÙÜÇæœÆŒ-]+)/g;
      let match;
      let lastIndex = 0;
      const frag = document.createDocumentFragment();
      let hasMatches = false;

      while ((match = regex.exec(text)) !== null) {
        const wordStr = match[1];
        const normalized = wordStr.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (unmasteredMap.has(normalized)) {
          hasMatches = true;
          // Append preceding unhighlighted text
          if (match.index > lastIndex) {
            frag.appendChild(document.createTextNode(text.substring(lastIndex, match.index)));
          }

          const item = unmasteredMap.get(normalized);
          const lvlClass = `highlight-${(item.level || 'B2').toLowerCase()}`;

          const span = document.createElement('span');
          span.className = `transcript-word-highlight ${lvlClass}`;
          span.textContent = wordStr;
          span.setAttribute('data-word-id', item.id);
          span.title = `Niveau ${item.level} • Cliquer pour voir la définition`;

          span.addEventListener('click', (e) => {
            e.stopPropagation();
            this.showWordPopover(e.currentTarget, item);
          });

          frag.appendChild(span);
          lastIndex = regex.lastIndex;
        }
      }

      if (hasMatches) {
        if (lastIndex < text.length) {
          frag.appendChild(document.createTextNode(text.substring(lastIndex)));
        }
        textNode.parentNode.replaceChild(frag, textNode);
      }
    };

    const walkTree = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        processTextNode(node);
      } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') {
        Array.from(node.childNodes).forEach(walkTree);
      }
    };

    Array.from(tempDiv.childNodes).forEach(walkTree);
    this.transcriptBody.innerHTML = tempDiv.innerHTML;

    // Re-attach click handlers on parsed transcript DOM spans
    this.transcriptBody.querySelectorAll('.transcript-word-highlight').forEach(span => {
      const id = parseInt(span.getAttribute('data-word-id'));
      const item = vocabData.find(v => v.id === id);
      if (item) {
        span.addEventListener('click', (e) => {
          e.stopPropagation();
          this.showWordPopover(e.currentTarget, item);
        });
      }
    });
  }

  showWordPopover(targetEl, item) {
    // Remove existing popover if any
    const existing = document.querySelector('.dict-popover-card');
    if (existing) existing.remove();

    const rect = targetEl.getBoundingClientRect();
    const popover = document.createElement('div');
    popover.className = 'dict-popover-card';

    // Calculate position
    let top = rect.bottom + window.scrollY + 8;
    let left = Math.max(16, rect.left + window.scrollX - 120);

    popover.style.top = `${top}px`;
    popover.style.left = `${left}px`;

    const badgeClass = item.level === 'B2' ? 'badge-b2' : item.level === 'C1' ? 'badge-c1' : 'badge-b1';
    const firstEx = (item.examples && item.examples[0]) ? item.examples[0].fr : '';

    popover.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
        <h4 style="font-size:1.1rem; color:var(--md-sys-color-primary); margin:0;">${item.word}</h4>
        <span class="target-badge ${badgeClass}" style="font-size:0.75rem; padding:2px 8px;">${item.level}</span>
      </div>
      <div style="font-size:0.75rem; color:var(--md-sys-color-on-surface-variant); margin-bottom:8px; font-weight:500;">${item.type || 'nom'}</div>
      <p style="font-size:0.875rem; color:var(--md-sys-color-on-surface); margin-bottom:10px; line-height:1.4;">${item.definition}</p>
      ${firstEx ? `<div style="font-size:0.8rem; font-style:italic; color:var(--md-sys-color-on-surface-variant); padding:6px 8px; background:var(--md-sys-color-surface-variant); border-radius:6px; margin-bottom:12px;">"${firstEx}"</div>` : ''}
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <button class="md-button md-button--text" style="padding:4px 8px; font-size:0.8rem;" id="popover-speak-btn">
          <span class="material-icons-round" style="font-size:16px;">volume_up</span> Écouter
        </button>
        <button class="md-button md-button--outlined" style="padding:4px 8px; font-size:0.75rem;" id="popover-close-btn">Fermer</button>
      </div>
    `;

    document.body.appendChild(popover);

    // Bind speech and close buttons
    const speakBtn = popover.querySelector('#popover-speak-btn');
    if (speakBtn) {
      speakBtn.addEventListener('click', () => {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance(item.word);
          u.lang = 'fr-FR';
          window.speechSynthesis.speak(u);
        }
      });
    }

    const closeBtn = popover.querySelector('#popover-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => popover.remove());
    }

    // Dismiss popover on outside click
    const dismissHandler = (e) => {
      if (!popover.contains(e.target) && e.target !== targetEl) {
        popover.remove();
        document.removeEventListener('click', dismissHandler);
      }
    };
    setTimeout(() => document.addEventListener('click', dismissHandler), 100);
  }

  async togglePlayPause() {
    if (!this.audioElement) return;

    if (this.isPlaying) {
      this.audioElement.pause();
      if (this.playPauseBtn) this.playPauseBtn.innerHTML = '<span class="material-icons-round">play_arrow</span>';
      this.isPlaying = false;
    } else {
      const track = this.dataset[this.currentTrackIndex];
      const hasAudioUrl = track && track.audioUrl && track.audioUrl.trim() !== '';

      if (hasAudioUrl) {
        try {
          this.isPlaying = true;
          if (this.playPauseBtn) this.playPauseBtn.innerHTML = '<span class="material-icons-round">pause</span>';
          await this.audioElement.play();
        } catch (err) {
          console.warn('Audio playback error on audio element, falling back to TTS:', err);
          await this.playSpeechFallback();
        }
      } else {
        this.isPlaying = true;
        if (this.playPauseBtn) this.playPauseBtn.innerHTML = '<span class="material-icons-round">pause</span>';
        await this.playSpeechFallback();
      }
    }
  }

  async playSpeechFallback() {
    if (!window.aiTTS) return;
    const track = this.dataset[this.currentTrackIndex];
    if (!track) return;

    const speed = parseFloat(document.querySelector('.speed-btn.active')?.getAttribute('data-speed') || '1.0');
    
    // Create animated progress simulation for synthesized audio
    let fakeTime = 0;
    const totalSimulatedDuration = Math.max(10, Math.round(track.transcript.length / 15));
    if (this.durationEl) this.durationEl.textContent = this.formatTime(totalSimulatedDuration);

    const timer = setInterval(() => {
      if (!this.isPlaying) {
        clearInterval(timer);
        return;
      }
      fakeTime += 1;
      if (this.currentTimeEl) this.currentTimeEl.textContent = this.formatTime(fakeTime);
      if (this.seekBar) this.seekBar.value = Math.min(100, (fakeTime / totalSimulatedDuration) * 100);
      if (fakeTime >= totalSimulatedDuration) clearInterval(timer);
    }, 1000);

    await window.aiTTS.speak(track.transcript, { rate: speed });

    clearInterval(timer);
    this.isPlaying = false;
    if (this.playPauseBtn) this.playPauseBtn.innerHTML = '<span class="material-icons-round">play_arrow</span>';
  }

  updateProgress() {
    if (!this.audioElement || !this.audioElement.duration) return;
    // Don't overwrite the seekBar while the user is actively dragging it
    if (!this.isSeeking) {
      const pct = (this.audioElement.currentTime / this.audioElement.duration) * 100;
      if (this.seekBar) {
        this.seekBar.value = pct;
        this._updateSeekFill();
      }
      if (this.currentTimeEl) this.currentTimeEl.textContent = this.formatTime(this.audioElement.currentTime);
    }
  }

  /** Update the CSS custom property that drives the seek bar's filled track colour */
  _updateSeekFill() {
    if (!this.seekBar) return;
    const pct = parseFloat(this.seekBar.value) || 0;
    this.seekBar.style.setProperty('--seek-fill', `${pct}%`);
  }

  formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  renderQuiz(questions) {
    if (!this.quizQuestionsEl) return;
    if (this.scoreDisplay) this.scoreDisplay.textContent = "";

    this.quizQuestionsEl.innerHTML = questions.map((q, qIdx) => `
      <div class="quiz-question-item">
        <p><strong>Q${qIdx + 1}.</strong> ${q.question}</p>
        <div class="quiz-options">
          ${q.options.map((opt, optIdx) => `
            <label class="quiz-option-label">
              <input type="radio" name="listening-q-${qIdx}" value="${optIdx}">
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
        <div class="quiz-explanation" id="listening-exp-${qIdx}" style="display:none; margin-top:8px; font-size:0.875rem; color:var(--md-sys-color-primary);"></div>
      </div>
    `).join('');
  }

  evaluateQuiz() {
    const track = this.dataset[this.currentTrackIndex];
    if (!track) return;

    let score = 0;
    track.questions.forEach((q, qIdx) => {
      const selected = document.querySelector(`input[name="listening-q-${qIdx}"]:checked`);
      const expEl = document.getElementById(`listening-exp-${qIdx}`);

      if (selected && parseInt(selected.value) === q.correct) {
        score++;
        if (expEl) {
          expEl.style.display = 'block';
          expEl.style.color = '#059669';
          expEl.innerHTML = `✓ Bon choix ! ${q.explanation}`;
        }
      } else {
        if (expEl) {
          expEl.style.display = 'block';
          expEl.style.color = 'var(--md-sys-color-error)';
          expEl.innerHTML = `✗ Réponse erronée. ${q.explanation}`;
        }
      }
    });

    if (this.scoreDisplay) {
      this.scoreDisplay.textContent = `Score d'écoute : ${score} / ${track.questions.length}`;
    }

    let listened = JSON.parse(localStorage.getItem('delf_listened_episodes') || '[]');
    if (!listened.includes(track.id)) {
      listened.push(track.id);
      localStorage.setItem('delf_listened_episodes', JSON.stringify(listened));
    }
    if (window.app) window.app.updateStats();
  }

  updateTranscriptFontSize() {
    if (this.transcriptBody) {
      this.transcriptBody.style.setProperty('--transcript-font-size', `${this.currentFontSize}px`);
    }
    if (this.fontLabel) {
      this.fontLabel.textContent = `${this.currentFontSize}px`;
    }
  }

  searchInTranscript(query) {
    if (!this.transcriptBody) return;
    
    // Clear previous search highlights
    this.transcriptBody.querySelectorAll('.transcript-search-match').forEach(matchSpan => {
      const parent = matchSpan.parentNode;
      parent.replaceChild(document.createTextNode(matchSpan.textContent), matchSpan);
      parent.normalize();
    });

    if (!query || query === '') return;

    // Search and highlight text nodes inside transcript
    const walkTree = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.nodeValue;
        const lower = text.toLowerCase();
        let pos = lower.indexOf(query);

        if (pos !== -1) {
          const frag = document.createDocumentFragment();
          let lastIdx = 0;

          while (pos !== -1) {
            if (pos > lastIdx) {
              frag.appendChild(document.createTextNode(text.substring(lastIdx, pos)));
            }

            const markSpan = document.createElement('span');
            markSpan.className = 'transcript-search-match';
            markSpan.textContent = text.substring(pos, pos + query.length);
            frag.appendChild(markSpan);

            lastIdx = pos + query.length;
            pos = lower.indexOf(query, lastIdx);
          }

          if (lastIdx < text.length) {
            frag.appendChild(document.createTextNode(text.substring(lastIdx)));
          }

          node.parentNode.replaceChild(frag, node);
        }
      } else if (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains('transcript-search-match')) {
        Array.from(node.childNodes).forEach(walkTree);
      }
    };

    Array.from(this.transcriptBody.childNodes).forEach(walkTree);
  }
}

// Global exposure
if (typeof window !== 'undefined') {
  window.ListeningModule = ListeningModule;
}
if (typeof global !== 'undefined') {
  global.ListeningModule = ListeningModule;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ListeningModule };
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.listeningModule) {
      window.listeningModule = new ListeningModule();
    }
  });
}
