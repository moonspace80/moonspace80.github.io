/* ==========================================================================
   MODULE 3: LISTENING COMPREHENSION ENGINE (RFI PODCAST PLAYER & TRANSCRIPTS)
   ========================================================================== */

class ListeningModule {
  constructor() {
    this.dataset = window.listeningDataset || [];
    this.currentTrackIndex = 0;
    this.isPlaying = false;
    this.isSeeking = false; // true while user drags the seek bar

    // Search and filter states
    this.searchQuery = '';
    this.selectedLevel = 'all';
    this.selectedSource = 'all';
    this.sortOrder = 'newest';
    this.disabledLevels = new Set(); // Set of CEFR levels whose highlights are hidden ('A1', 'A2', etc.)

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
    this.trackDate = document.getElementById('compact-track-date');
    this.sourceBadge = document.getElementById('compact-source-badge');
    this.levelBadge = document.getElementById('compact-level-badge');
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

    // Subtabs Elements
    this.subtabBtnTranscript = document.getElementById('subtab-btn-transcript');
    this.subtabBtnQuiz = document.getElementById('subtab-btn-quiz');
    this.subtabPanelTranscript = document.getElementById('subtab-panel-transcript');
    this.subtabPanelQuiz = document.getElementById('subtab-panel-quiz');
    this.episodesCountBadge = document.getElementById('episodes-count-badge');

    // Episodes Toolbar Elements
    this.episodeSearchInput = document.getElementById('listening-search-input');
    this.levelFilter = document.getElementById('listening-level-filter');
    this.sourceFilter = document.getElementById('listening-source-filter');
    this.sortOrderSelect = document.getElementById('listening-sort-order');
    this.ariaAnnouncer = document.getElementById('listening-aria-announcer');

    // Transcript Controls
    this.fontMinusBtn = document.getElementById('transcript-font-minus');
    this.fontPlusBtn = document.getElementById('transcript-font-plus');
    this.fontLabel = document.getElementById('transcript-font-label');
    this.searchInput = document.getElementById('transcript-search-input');
    this.currentFontSize = 16;
  }

  bindEvents() {
    // Interactive CEFR legend chips (click to toggle highlights on/off)
    const legendContainer = document.getElementById('transcript-legend-chips');
    if (legendContainer) {
      legendContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.cefr-chip');
        if (btn) {
          const lvl = btn.getAttribute('data-level');
          if (lvl) {
            this.toggleLevelHighlight(lvl, btn);
          }
        }
      });
    }

    // Subtabs toggle (Transcription vs Exercices)
    if (this.subtabBtnTranscript && this.subtabBtnQuiz) {
      this.subtabBtnTranscript.addEventListener('click', () => this.switchSubtab('transcript'));
      this.subtabBtnQuiz.addEventListener('click', () => this.switchSubtab('quiz'));
    }

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

    // Episode search & filters toolbar
    if (this.episodeSearchInput) {
      this.episodeSearchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderEpisodesList();
      });
    }

    if (this.levelFilter) {
      this.levelFilter.addEventListener('change', (e) => {
        this.selectedLevel = e.target.value;
        this.renderEpisodesList();
      });
    }

    if (this.sourceFilter) {
      this.sourceFilter.addEventListener('change', (e) => {
        this.selectedSource = e.target.value;
        this.renderEpisodesList();
      });
    }

    if (this.sortOrderSelect) {
      this.sortOrderSelect.addEventListener('change', (e) => {
        this.sortOrder = e.target.value;
        this.renderEpisodesList();
      });
    }

    if (this.playPauseBtn) {
      this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
    }

    if (this.rewindBtn) {
      this.rewindBtn.addEventListener('click', () => {
        if (this.audioElement) this.audioElement.currentTime = Math.max(0, this.audioElement.currentTime - 10);
      });
    }

    if (this.forwardBtn) {
      this.forwardBtn.addEventListener('click', () => {
        if (this.audioElement) this.audioElement.currentTime = Math.min(this.audioElement.duration || 0, this.audioElement.currentTime + 10);
      });
    }

    if (this.audioElement) {
      this.audioElement.addEventListener('timeupdate', () => this.updateProgress());
      this.audioElement.addEventListener('loadedmetadata', () => {
        const durFormatted = this.formatTime(this.audioElement.duration);
        if (this.durationEl) this.durationEl.textContent = durFormatted;
      });
      this.audioElement.addEventListener('play', () => {
        this.isPlaying = true;
        this.syncPlayStateUI();
      });
      this.audioElement.addEventListener('pause', () => {
        this.isPlaying = false;
        this.syncPlayStateUI();
      });
      this.audioElement.addEventListener('ended', () => {
        this.isPlaying = false;
        this.syncPlayStateUI();
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

    // Keyboard Shortcuts (Space/k: play-pause, j: -10s, l: +10s) when not focused on an input
    document.addEventListener('keydown', (e) => {
      // Only active if Listening view is visible
      const listeningView = document.getElementById('view-listening');
      if (!listeningView || !listeningView.classList.contains('view-panel--active')) return;

      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') return;

      if (e.code === 'Space' || e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.togglePlayPause();
      } else if (e.key.toLowerCase() === 'j') {
        e.preventDefault();
        if (this.audioElement) this.audioElement.currentTime = Math.max(0, this.audioElement.currentTime - 10);
      } else if (e.key.toLowerCase() === 'l') {
        e.preventDefault();
        if (this.audioElement) this.audioElement.currentTime = Math.min(this.audioElement.duration || 0, this.audioElement.currentTime + 10);
      }
    });
  }

  setLevelFilter(level) {
    this.selectedLevel = level;
    if (this.levelFilter) {
      this.levelFilter.value = level;
    }
    this.renderEpisodesList();
  }

  switchSubtab(tabName) {
    if (!this.subtabBtnTranscript) this.subtabBtnTranscript = document.getElementById('subtab-btn-transcript');
    if (!this.subtabBtnQuiz) this.subtabBtnQuiz = document.getElementById('subtab-btn-quiz');
    if (!this.subtabPanelTranscript) this.subtabPanelTranscript = document.getElementById('subtab-panel-transcript');
    if (!this.subtabPanelQuiz) this.subtabPanelQuiz = document.getElementById('subtab-panel-quiz');

    if (tabName === 'transcript') {
      if (this.subtabBtnTranscript) {
        this.subtabBtnTranscript.classList.add('active');
        this.subtabBtnTranscript.setAttribute('aria-selected', 'true');
      }
      if (this.subtabBtnQuiz) {
        this.subtabBtnQuiz.classList.remove('active');
        this.subtabBtnQuiz.setAttribute('aria-selected', 'false');
      }
      if (this.subtabPanelTranscript) {
        this.subtabPanelTranscript.classList.add('active');
        this.subtabPanelTranscript.style.display = 'block';
      }
      if (this.subtabPanelQuiz) {
        this.subtabPanelQuiz.classList.remove('active');
        this.subtabPanelQuiz.style.display = 'none';
      }
    } else if (tabName === 'quiz') {
      if (this.subtabBtnQuiz) {
        this.subtabBtnQuiz.classList.add('active');
        this.subtabBtnQuiz.setAttribute('aria-selected', 'true');
      }
      if (this.subtabBtnTranscript) {
        this.subtabBtnTranscript.classList.remove('active');
        this.subtabBtnTranscript.setAttribute('aria-selected', 'false');
      }
      if (this.subtabPanelTranscript) {
        this.subtabPanelTranscript.classList.remove('active');
        this.subtabPanelTranscript.style.display = 'none';
      }
      if (this.subtabPanelQuiz) {
        this.subtabPanelQuiz.classList.add('active');
        this.subtabPanelQuiz.style.display = 'block';
      }

      // Ensure quiz questions are rendered if container is empty
      if (this.quizQuestionsEl && (!this.quizQuestionsEl.children || this.quizQuestionsEl.children.length === 0)) {
        const track = this.dataset[this.currentTrackIndex];
        if (track && track.questions) {
          this.renderQuiz(track.questions);
        }
      }
    }
  }

  syncPlayStateUI() {
    const playIcon = this.isPlaying ? '<span class="material-icons-round">pause</span>' : '<span class="material-icons-round">play_arrow</span>';
    if (this.playPauseBtn) this.playPauseBtn.innerHTML = playIcon;

    // Update equalizer animation state
    const currentCard = document.querySelector(`.episode-card[data-index="${this.currentTrackIndex}"]`);
    if (currentCard) {
      const eq = currentCard.querySelector('.now-playing-badge');
      if (eq) {
        if (this.isPlaying) eq.classList.remove('is-paused');
        else eq.classList.add('is-paused');
      }
    }
  }

  getFilteredEpisodes() {
    let list = this.dataset.map((ep, originalIndex) => ({ ...ep, originalIndex }));

    // Filter by CEFR Level
    if (this.selectedLevel && this.selectedLevel !== 'all') {
      list = list.filter(ep => (ep.level || 'B2').toUpperCase() === this.selectedLevel.toUpperCase());
    }

    // Filter by Source
    if (this.selectedSource && this.selectedSource !== 'all') {
      list = list.filter(ep => (ep.source || 'RFI').toUpperCase() === this.selectedSource.toUpperCase());
    }

    // Filter by text search query
    if (this.searchQuery && this.searchQuery !== '') {
      list = list.filter(ep => {
        const titleMatch = (ep.title || '').toLowerCase().includes(this.searchQuery);
        const topicMatch = (ep.topic || '').toLowerCase().includes(this.searchQuery);
        const dateMatch = (ep.date || '').toLowerCase().includes(this.searchQuery);
        return titleMatch || topicMatch || dateMatch;
      });
    }

    // Sort order
    if (this.sortOrder === 'newest') {
      list.sort((a, b) => new Date(b.isoDate || 0) - new Date(a.isoDate || 0));
    } else if (this.sortOrder === 'oldest') {
      list.sort((a, b) => new Date(a.isoDate || 0) - new Date(b.isoDate || 0));
    } else if (this.sortOrder === 'level') {
      const levelRank = { 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6 };
      list.sort((a, b) => (levelRank[a.level || 'B2'] || 4) - (levelRank[b.level || 'B2'] || 4));
    }

    return list;
  }

  renderEpisodesList() {
    if (!this.episodesListEl) return;
    const episodes = this.getFilteredEpisodes();
    const savedProgress = JSON.parse(localStorage.getItem('delf_listening_progress') || '{}');
    const listenedEpisodes = JSON.parse(localStorage.getItem('delf_listened_episodes') || '[]');

    if (this.episodesCountBadge) {
      this.episodesCountBadge.textContent = episodes.length;
    }

    if (this.ariaAnnouncer) {
      this.ariaAnnouncer.textContent = `${episodes.length} épisode${episodes.length > 1 ? 's' : ''} trouvé${episodes.length > 1 ? 's' : ''}`;
    }

    if (episodes.length === 0) {
      this.episodesListEl.innerHTML = `
        <div style="padding: 24px; text-align: center; color: var(--md-sys-color-on-surface-variant); grid-column: 1 / -1;">
          <span class="material-icons-round" style="font-size: 32px; opacity: 0.6; display:block; margin-bottom:8px;">search_off</span>
          <p style="font-weight: 600; margin-bottom: 4px;">Aucun épisode trouvé</p>
          <p style="font-size: var(--font-size-caption);">Modifiez vos filtres ou termes de recherche pour afficher des émissions.</p>
        </div>
      `;
      return;
    }

    this.episodesListEl.innerHTML = episodes.map(ep => {
      const isCurrent = ep.originalIndex === this.currentTrackIndex;
      const isListened = listenedEpisodes.includes(ep.id);
      const prog = savedProgress[ep.id] || 0;
      const progressPercent = ep.duration ? Math.min(100, Math.round((prog / this.parseDuration(ep.duration)) * 100)) : 0;
      const lvl = (ep.level || 'B2').toLowerCase();

      return `
        <article class="episode-card ${isCurrent ? 'active' : ''} ${isListened ? 'listened' : ''}" 
                 data-index="${ep.originalIndex}" 
                 role="listitem"
                 tabindex="0"
                 aria-label="${ep.title} - Niveau ${ep.level || 'B2'}">
          <div class="episode-card__top">
            <div class="episode-badges">
              <span class="source-badge">${ep.source || 'RFI'}</span>
              <span class="cefr-chip cefr-chip--${lvl}">${ep.level || 'B2'}</span>
            </div>
            ${isCurrent ? `
              <div class="now-playing-badge ${this.isPlaying ? '' : 'is-paused'}" title="Lecture en cours">
                <div class="eq-bar eq-bar--1"></div>
                <div class="eq-bar eq-bar--2"></div>
                <div class="eq-bar eq-bar--3"></div>
              </div>
            ` : (isListened ? `<span class="material-icons-round" style="font-size: 18px; color: var(--md-sys-color-primary);" title="Épisode écouté">task_alt</span>` : '')}
          </div>

          <h4 class="episode-card__title">${ep.title}</h4>

          <div class="episode-card__meta">
            <div class="episode-meta-tags">
              <span><span class="material-icons-round" style="font-size:14px; vertical-align:middle;">schedule</span> ${ep.duration || '10:00'}</span>
              ${ep.topic ? `<span>• ${ep.topic}</span>` : ''}
            </div>

            ${prog > 15 && !isCurrent ? `
              <button class="resume-btn" data-resume-index="${ep.originalIndex}" data-resume-time="${prog}" title="Reprendre la lecture">
                <span class="material-icons-round" style="font-size:14px;">play_arrow</span> Reprendre à ${this.formatTime(prog)}
              </button>
            ` : ''}
          </div>

          ${progressPercent > 0 ? `
            <div class="episode-card-progress">
              <div class="episode-card-progress__fill" style="width: ${progressPercent}%;"></div>
            </div>
          ` : ''}
        </article>
      `;
    }).join('');

    // Attach card click handlers and resume handlers
    this.episodesListEl.querySelectorAll('.episode-card').forEach(card => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      card.addEventListener('click', (e) => {
        const resumeBtn = e.target.closest('.resume-btn');
        if (resumeBtn) {
          e.stopPropagation();
          const resumeTime = parseFloat(resumeBtn.getAttribute('data-resume-time'));
          this.loadTrack(idx, resumeTime);
          this.togglePlayPause(true);
          return;
        }
        this.loadTrack(idx);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.loadTrack(idx);
        }
      });
    });
  }

  parseDuration(durationStr) {
    if (!durationStr) return 600;
    const parts = durationStr.split(':').map(Number);
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    return 600;
  }

  loadTrack(index, startTime = null) {
    this.currentTrackIndex = index;
    const track = this.dataset[index];
    if (!track) return;

    const initialTime = startTime !== null ? startTime : (track.startTime || 0);

    if (this.trackTitle) this.trackTitle.textContent = track.title;
    if (this.trackDate) this.trackDate.textContent = track.date;
    if (this.sourceBadge) this.sourceBadge.textContent = track.source || 'RFI';
    if (this.levelBadge) {
      this.levelBadge.textContent = track.level || 'B2';
      this.levelBadge.className = `cefr-chip cefr-chip--${(track.level || 'B2').toLowerCase()}`;
    }

    if (this.audioElement && track.audioUrl) {
      this.audioElement.src = track.audioUrl;
      const applyStartTime = () => {
        if (initialTime > 0) {
          try {
            this.audioElement.currentTime = initialTime;
          } catch (e) {
            // Ignore if seeking fails before metadata
          }
        }
      };

      // Set immediately and also listen once on loadedmetadata to ensure accurate seeking
      if (initialTime > 0) {
        applyStartTime();
        this.audioElement.addEventListener('loadedmetadata', applyStartTime, { once: true });
      }
    }

    // Render transcript with highlighted non-mastered dictionary words
    this.renderHighlightedTranscript(track.transcript);

    this.renderQuiz(track.questions);
    this.renderEpisodesList();
  }

  toggleLevelHighlight(level, chipBtn) {
    const normLevel = level.toUpperCase();
    if (this.disabledLevels.has(normLevel)) {
      this.disabledLevels.delete(normLevel);
      if (chipBtn) {
        chipBtn.classList.remove('disabled');
        chipBtn.classList.add('active');
        chipBtn.setAttribute('aria-pressed', 'true');
      }
    } else {
      this.disabledLevels.add(normLevel);
      if (chipBtn) {
        chipBtn.classList.add('disabled');
        chipBtn.classList.remove('active');
        chipBtn.setAttribute('aria-pressed', 'false');
      }
    }
    this.updateHighlightVisibility();
  }

  updateHighlightVisibility() {
    if (!this.transcriptBody) return;
    this.transcriptBody.querySelectorAll('.transcript-word-highlight').forEach(span => {
      const lvl = (span.getAttribute('data-level') || '').toUpperCase();
      if (this.disabledLevels.has(lvl)) {
        span.classList.add('highlight-disabled');
      } else {
        span.classList.remove('highlight-disabled');
      }
    });
  }

  renderHighlightedTranscript(rawTranscript) {
    if (!this.transcriptBody) return;
    if (!rawTranscript) {
      this.transcriptBody.innerHTML = "<em>Aucune transcription disponible pour cet épisode.</em>";
      return;
    }

    const vocabData = window.vocabDataset || [];
    const learnedIds = JSON.parse(localStorage.getItem('delf_learned_vocab') || '[]');

    // Build list of non-mastered items sorted by word length descending (multi-word phrases first)
    const activeItems = [];
    const seenWords = new Set();
    vocabData.forEach(item => {
      if (!learnedIds.includes(item.id)) {
        const cleanW = (item.word || '').trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (cleanW.length >= 3 && !seenWords.has(cleanW)) {
          seenWords.add(cleanW);
          activeItems.push({
            item,
            clean: cleanW,
            isMultiWord: cleanW.includes(' ') || cleanW.includes('-')
          });
        }
      }
    });

    // Sort longer phrases first so "extrême droite" matches before "extrême" or "droite"
    activeItems.sort((a, b) => b.clean.length - a.clean.length);

    // Fast map for single words
    const singleWordMap = new Map();
    const multiWordList = [];
    activeItems.forEach(entry => {
      if (entry.isMultiWord) {
        multiWordList.push(entry);
      } else {
        singleWordMap.set(entry.clean, entry.item);
      }
    });

    // Parse HTML transcript nodes safely without breaking tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = rawTranscript;

    const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const processTextNode = (textNode) => {
      let text = textNode.nodeValue;
      if (!text || text.trim() === '') return;

      // First check for multi-word phrases (e.g. "extrême droite", "contre-intelligence", "avoir ordonné")
      const matches = []; // { start, end, text, item }

      multiWordList.forEach(({ item, clean }) => {
        // Construct flexible regex that handles accents and case
        const pattern = new RegExp(`\\b${escapeRegex(clean)}\\b`, 'gi');
        // Normalize text temporarily for searching
        const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let m;
        while ((m = pattern.exec(normalizedText)) !== null) {
          const start = m.index;
          const end = start + m[0].length;
          // Check collision with already matched ranges
          const collides = matches.some(r => Math.max(start, r.start) < Math.min(end, r.end));
          if (!collides) {
            matches.push({
              start,
              end,
              text: text.substring(start, end),
              item
            });
          }
        }
      });

      // Next check for single words in regions not already matched
      const wordRegex = /([a-zA-Zà-ÿÀ-ŸêëîïôûùüçÉÈÊËÎÏÔÛÙÜÇæœÆŒ-]+)/g;
      let wm;
      while ((wm = wordRegex.exec(text)) !== null) {
        const start = wm.index;
        const end = start + wm[0].length;
        const collides = matches.some(r => Math.max(start, r.start) < Math.min(end, r.end));
        if (!collides) {
          const normalized = wm[1].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          if (singleWordMap.has(normalized)) {
            matches.push({
              start,
              end,
              text: wm[1],
              item: singleWordMap.get(normalized)
            });
          }
        }
      }

      if (matches.length === 0) return;

      // Sort matches by start position
      matches.sort((a, b) => a.start - b.start);

      const frag = document.createDocumentFragment();
      let curIndex = 0;

      matches.forEach(m => {
        if (m.start > curIndex) {
          frag.appendChild(document.createTextNode(text.substring(curIndex, m.start)));
        }

        const item = m.item;
        const lvl = (item.level || 'B2').toUpperCase();
        const lvlClass = `highlight-${lvl.toLowerCase()}`;
        const isDisabled = this.disabledLevels.has(lvl);

        const span = document.createElement('span');
        span.className = `transcript-word-highlight ${lvlClass}${isDisabled ? ' highlight-disabled' : ''}`;
        span.textContent = m.text;
        span.setAttribute('data-word-id', item.id);
        span.setAttribute('data-level', lvl);
        span.title = `Niveau ${lvl} • Cliquer pour voir la définition`;

        span.addEventListener('click', (e) => {
          e.stopPropagation();
          this.showWordPopover(e.currentTarget, item);
        });

        frag.appendChild(span);
        curIndex = m.end;
      });

      if (curIndex < text.length) {
        frag.appendChild(document.createTextNode(text.substring(curIndex)));
      }

      textNode.parentNode.replaceChild(frag, textNode);
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

    // Synchronize current disabled levels with newly rendered transcript
    this.updateHighlightVisibility();
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
    const curTime = this.audioElement.currentTime;
    const dur = this.audioElement.duration;

    // Don't overwrite the seekBar while the user is actively dragging it
    if (!this.isSeeking) {
      const pct = (curTime / dur) * 100;
      if (this.seekBar) {
        this.seekBar.value = pct;
        this._updateSeekFill();
      }
      const formattedCurTime = this.formatTime(curTime);
      if (this.currentTimeEl) this.currentTimeEl.textContent = formattedCurTime;
    }

    // Persist playback position to localStorage for resume functionality (throttled every ~2s)
    const track = this.dataset[this.currentTrackIndex];
    if (track && curTime > 5) {
      const nowSec = Math.floor(curTime);
      if (!this._lastSavedSec || Math.abs(nowSec - this._lastSavedSec) >= 2) {
        this._lastSavedSec = nowSec;
        try {
          const progMap = JSON.parse(localStorage.getItem('delf_listening_progress') || '{}');
          progMap[track.id] = Math.round(curTime);
          localStorage.setItem('delf_listening_progress', JSON.stringify(progMap));
        } catch (e) {
          // Ignore storage quota errors
        }
      }
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
