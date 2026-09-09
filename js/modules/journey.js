/* ==========================================================================
   JOURNEY & GAMIFICATION CONTROLLER — LE GRAND PARCOURS PÉDAGOGIQUE FLE
   CECRL A1 à C2 (5 Ans / 65 Chapitres) & Quest Runner Engine
   ========================================================================== */

class JourneyModule {
  constructor() {
    this.dataset = window.journeyDataset || [];
    this.storageKey = 'delf_journey_progress_v2';
    this.state = this.loadState();
    this.currentLevelFilter = 'all';
    
    // Quest runner state
    this.currentQuest = null;
    this.currentStepIdx = 0;
    this.currentErrors = 0;

    this.initDOM();
    this.render();
  }

  loadState() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.completedQuests) parsed.completedQuests = {};
        return parsed;
      } catch (e) {
        console.warn('Error loading journey state:', e);
      }
    }
    return {
      xp: 0,
      streak: 1,
      lastDate: new Date().toISOString().slice(0, 10),
      completedQuests: {
        quest_1: { stars: 0, completed: false } // First quest unlocked
      }
    };
  }

  saveState() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    this.updateStatusBar();
  }

  getLevelInfo(xp) {
    const levels = [
      { level: 1, name: 'Initié A1', minXp: 0, maxXp: 400, icon: '🌱' },
      { level: 2, name: 'Élémentaire A2', minXp: 400, maxXp: 1000, icon: '🌿' },
      { level: 3, name: 'Indépendant B1', minXp: 1000, maxXp: 2000, icon: '🧭' },
      { level: 4, name: 'Explorateur B2', minXp: 2000, maxXp: 3400, icon: '🏛️' },
      { level: 5, name: 'Orateur B2+', minXp: 3400, maxXp: 4800, icon: '🎙️' },
      { level: 6, name: 'Stratège C1', minXp: 4800, maxXp: 6200, icon: '📜' },
      { level: 7, name: 'Érudit C1-C2', minXp: 6200, maxXp: 7800, icon: '🖋️' },
      { level: 8, name: 'Maître Francophone C2', minXp: 7800, maxXp: 10000, icon: '👑' }
    ];

    for (let i = 0; i < levels.length; i++) {
      if (xp < levels[i].maxXp || i === levels.length - 1) {
        const cur = levels[i];
        const range = cur.maxXp - cur.minXp;
        const currentInLevel = Math.max(0, xp - cur.minXp);
        const pct = Math.min(100, Math.round((currentInLevel / range) * 100));
        return { ...cur, currentInLevel, range, pct };
      }
    }
    return levels[0];
  }

  initDOM() {
    this.mapContainer = document.getElementById('journey-map-root');
    this.statusBarContainer = document.getElementById('journey-status-bar');
    this.modalEl = document.getElementById('quest-runner-modal');
    this.modalCard = this.modalEl ? this.modalEl.querySelector('.quest-runner-card') : null;
    this.modalBody = document.getElementById('quest-runner-body');
    this.modalTitle = document.getElementById('quest-modal-title');
    this.progressBar = document.getElementById('runner-progress-fill');
    this.nextStepBtn = document.getElementById('quest-next-step-btn');
    this.closeModalBtn = document.getElementById('quest-close-modal-btn');

    if (this.closeModalBtn) {
      this.closeModalBtn.addEventListener('click', () => this.closeQuestModal());
    }

    // Check streak
    const today = new Date().toISOString().slice(0, 10);
    if (this.state.lastDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      if (this.state.lastDate === yesterday) {
        this.state.streak = (this.state.streak || 1) + 1;
      }
      this.state.lastDate = today;
      this.saveState();
    }
  }

  updateStatusBar() {
    if (!this.statusBarContainer) return;
    const lvl = this.getLevelInfo(this.state.xp || 0);

    this.statusBarContainer.innerHTML = `
      <div class="status-stat-group">
        <div class="user-level-badge">
          <span>${lvl.icon}</span>
          <span>Niv. ${lvl.level} • ${lvl.name}</span>
        </div>
        <div class="user-streak-badge">
          <span>🔥</span>
          <span>${this.state.streak} ${this.state.streak > 1 ? 'Jours de suite' : 'Jour actif'}</span>
        </div>
        <div class="xp-progress-wrapper">
          <span class="xp-label">⭐ ${this.state.xp || 0} XP</span>
          <div class="xp-track">
            <div class="xp-fill" style="width: ${lvl.pct}%;"></div>
          </div>
        </div>
      </div>

      <div class="view-mode-toggle">
        <button class="view-mode-btn active" id="btn-show-journey">
          <span class="material-icons-round" style="font-size:16px;">map</span> Mon Parcours (${this.dataset.length} Ch.)
        </button>
        <button class="view-mode-btn" id="btn-show-library">
          <span class="material-icons-round" style="font-size:16px;">local_library</span> Bibliothèque
        </button>
      </div>
    `;

    document.getElementById('btn-show-journey')?.addEventListener('click', () => this.toggleView('journey'));
    document.getElementById('btn-show-library')?.addEventListener('click', () => this.toggleView('library'));
  }

  toggleView(mode) {
    const journeyRoot = document.getElementById('journey-view-container');
    const libraryRoot = document.getElementById('library-modules-container');
    const btnJ = document.getElementById('btn-show-journey');
    const btnL = document.getElementById('btn-show-library');

    if (mode === 'journey') {
      if (journeyRoot) journeyRoot.style.display = 'block';
      if (libraryRoot) libraryRoot.style.display = 'none';
      if (btnJ) btnJ.classList.add('active');
      if (btnL) btnL.classList.remove('active');
    } else {
      if (journeyRoot) journeyRoot.style.display = 'none';
      if (libraryRoot) libraryRoot.style.display = 'block';
      if (btnJ) btnJ.classList.remove('active');
      if (btnL) btnL.classList.add('active');
    }
  }

  filterByLevel(level) {
    this.currentLevelFilter = level;
    this.render();
  }

  render() {
    this.updateStatusBar();
    if (!this.mapContainer) return;

    // Filter Dataset based on Level
    const filteredChapters = this.currentLevelFilter === 'all'
      ? this.dataset
      : this.dataset.filter(c => c.level === this.currentLevelFilter);

    // Level Filter Bar HTML
    const levelCounts = {
      all: this.dataset.length,
      A1: this.dataset.filter(c => c.level === 'A1').length,
      A2: this.dataset.filter(c => c.level === 'A2').length,
      B1: this.dataset.filter(c => c.level === 'B1').length,
      B2: this.dataset.filter(c => c.level === 'B2').length,
      C1: this.dataset.filter(c => c.level === 'C1').length,
      C2: this.dataset.filter(c => c.level === 'C2').length
    };

    const filterBarHtml = `
      <div class="journey-level-filter-bar">
        <button class="level-filter-chip ${this.currentLevelFilter === 'all' ? 'active' : ''}" onclick="window.journeyModule.filterByLevel('all')">
          Tous (${levelCounts.all})
        </button>
        <button class="level-filter-chip ${this.currentLevelFilter === 'A1' ? 'active' : ''}" onclick="window.journeyModule.filterByLevel('A1')" style="--chip-color:#2E7D32;">
          🟢 A1 (${levelCounts.A1})
        </button>
        <button class="level-filter-chip ${this.currentLevelFilter === 'A2' ? 'active' : ''}" onclick="window.journeyModule.filterByLevel('A2')" style="--chip-color:#388E3C;">
          🟡 A2 (${levelCounts.A2})
        </button>
        <button class="level-filter-chip ${this.currentLevelFilter === 'B1' ? 'active' : ''}" onclick="window.journeyModule.filterByLevel('B1')" style="--chip-color:#D97706;">
          🟠 B1 (${levelCounts.B1})
        </button>
        <button class="level-filter-chip ${this.currentLevelFilter === 'B2' ? 'active' : ''}" onclick="window.journeyModule.filterByLevel('B2')" style="--chip-color:#2E6171;">
          🔴 B2 (${levelCounts.B2})
        </button>
        <button class="level-filter-chip ${this.currentLevelFilter === 'C1' ? 'active' : ''}" onclick="window.journeyModule.filterByLevel('C1')" style="--chip-color:#5E35B1;">
          🟣 C1 (${levelCounts.C1})
        </button>
        <button class="level-filter-chip ${this.currentLevelFilter === 'C2' ? 'active' : ''}" onclick="window.journeyModule.filterByLevel('C2')" style="--chip-color:#7928CA;">
          👑 C2 (${levelCounts.C2})
        </button>
      </div>
    `;

    let previousCompleted = true;

    const chaptersHtml = filteredChapters.map(chap => {
      const questsHtml = chap.quests.map((q, idx) => {
        const qState = this.state.completedQuests[q.id];
        const isCompleted = qState && qState.completed;
        const isActive = !isCompleted;
        const isLocked = false;

        if (isCompleted) previousCompleted = true;
        else previousCompleted = false;

        const stars = qState ? qState.stars || 0 : 0;
        const starsHtml = `
          <div class="quest-stars-display">
            <span class="${stars >= 1 ? 'star-earned' : ''}">★</span>
            <span class="${stars >= 2 ? 'star-earned' : ''}">★</span>
            <span class="${stars >= 3 ? 'star-earned' : ''}">★</span>
          </div>
        `;

        let statusClass = 'status-locked';
        let actionBtn = `<span class="material-icons-round" style="color:var(--md-sys-color-outline);">lock</span>`;

        if (isCompleted) {
          statusClass = 'status-completed';
          actionBtn = `<button class="quest-action-btn" style="background:#E2F0D9; color:#385E38;"><span class="material-icons-round">refresh</span> Rejouer</button>`;
        } else if (isActive) {
          statusClass = 'status-active';
          actionBtn = `<button class="quest-action-btn"><span class="material-icons-round">play_arrow</span> Démarrer</button>`;
        }

        return `
          <div class="quest-node-wrapper" onclick="window.journeyModule.openQuest('${q.id}', ${isLocked})">
            <div class="quest-node-card ${statusClass}">
              <div class="quest-node-icon">
                <span class="material-icons-round">${isCompleted ? 'check_circle' : q.icon}</span>
              </div>
              <div class="quest-info-body">
                <h4>${q.title}</h4>
                <div class="quest-meta-line">
                  <span class="badge level-badge" style="background:${chap.color}; color:#fff;">${q.level || chap.level || '?'}</span>
                  <span class="quest-xp-pill">+${q.xp} XP</span>
                  <span>• ${(q.steps || []).length} étape${(q.steps || []).length > 1 ? 's' : ''}</span>
                </div>
              </div>
              <div style="display:flex; flex-direction:column; align-items:flex-end; gap:6px;">
                ${starsHtml}
                ${actionBtn}
              </div>
            </div>
            ${idx < chap.quests.length - 1 ? `<div class="node-connector-line ${isCompleted ? 'completed' : ''}"></div>` : ''}
          </div>
        `;
      }).join('');

      return `
        <div class="journey-chapter" id="chapter-node-${chap.chapterNumber}">
          <div class="chapter-header">
            <div class="chapter-icon-badge" style="background: ${chap.color};">
              <span class="material-icons-round">${chap.icon}</span>
            </div>
            <div class="chapter-title-group" style="flex:1;">
              <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px; flex-wrap:wrap;">
                <span class="badge level-badge" style="background:${chap.color}; color:#fff; font-weight:700; font-size:0.75rem; padding:3px 10px; border-radius:12px;">
                  Niveau ${chap.level || '?'} • Année ${chap.year || '?'}
                </span>
                <span style="font-size:0.78rem; color:var(--md-sys-color-on-surface-variant); font-weight:600;">
                  Chapitre ${chap.chapterNumber} / ${this.dataset.length}
                </span>
              </div>
              <h3>${chap.chapterTitle}</h3>
              <p>${chap.chapterSubtitle}</p>
            </div>
          </div>
          <div class="quests-flow-grid">
            ${questsHtml}
          </div>
        </div>
      `;
    }).join('');

    this.mapContainer.innerHTML = filterBarHtml + chaptersHtml;
  }

  openQuest(questId, isLocked) {
    if (isLocked) {
      // Afficher un message doux, sans alerte agressive
      const toast = document.createElement('div');
      toast.style.cssText = 'position:fixed; bottom:24px; left:50%; transform:translateX(-50%); background:var(--md-sys-color-surface); border:1px solid var(--md-sys-color-outline-variant); padding:12px 24px; border-radius:16px; box-shadow:0 4px 16px rgba(0,0,0,0.12); font-size:0.9rem; color:var(--md-sys-color-on-surface); z-index:9999; display:flex; align-items:center; gap:8px;';
      toast.innerHTML = '<span style="font-size:1.2rem;">🌱</span> Continuez votre parcours pour débloquer cette étape.';
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2800);
      return;
    }

    let targetQuest = null;
    for (const chap of this.dataset) {
      for (const q of chap.quests) {
        if (q.id === questId) {
          targetQuest = q;
          break;
        }
      }
      if (targetQuest) break;
    }

    if (!targetQuest) return;

    this.currentQuest = targetQuest;
    this.currentStepIdx = 0;
    this.currentErrors = 0;

    if (this.modalTitle) this.modalTitle.textContent = targetQuest.title;
    if (this.modalEl) this.modalEl.classList.add('open');

    this.renderStep();
  }

  closeQuestModal() {
    this.stopTTS();
    if (this.modalEl) this.modalEl.classList.remove('open');
    if (this.modalCard) this.modalCard.classList.remove('is-wide');
    this.currentQuest = null;
    this.matchingState = null;
  }

  formatStepTitle(title) {
    if (!title) return '';
    return title.replace(/^(?:[ÉEe]tape\s+\d+|\d+\.)\s*[:\-–]?\s*/i, '').trim();
  }

  renderStep() {
    this.stopTTS();
    if (!this.currentQuest || !this.modalBody) return;
    const step = this.currentQuest.steps[this.currentStepIdx];
    const totalSteps = this.currentQuest.steps.length;
    const stepTitle = this.formatStepTitle(step.title);

    // Ajustement de la largeur : large et horizontal pour les articles, cours, vidéos et documents longs
    const isWideStep = step.type === 'lesson';
    if (this.modalCard) {
      this.modalCard.classList.toggle('is-wide', isWideStep);
    }

    // Update Progress bar
    if (this.progressBar) {
      const pct = Math.round(((this.currentStepIdx + 1) / totalSteps) * 100);
      this.progressBar.style.width = `${pct}%`;
    }

    if (step.type === 'vocab_drill') {
      this.modalBody.innerHTML = `
        <h3 class="step-card-title">${stepTitle}</h3>
        <p style="font-size:0.9rem; color:var(--md-sys-color-on-surface-variant); margin-bottom:16px;">
          Écoutez et mémorisez ces mots clés avant de passer à l'épreuve de compréhension.
        </p>
        <div class="drill-vocab-grid">
          ${step.details.map(d => `
            <div class="drill-word-card">
              ${d.color ? `
                <div style="width:100%; height:120px; border-radius:10px; overflow:hidden; margin-bottom:8px; background:${d.color}; border:1px solid rgba(0,0,0,0.08); box-shadow:0 1px 3px rgba(0,0,0,0.06);"></div>
              ` : (d.imageUrl ? `
                <div style="width:100%; height:120px; border-radius:10px; overflow:hidden; margin-bottom:8px; background:rgba(0,0,0,0.04);">
                  <img src="${d.imageUrl}" alt="${d.word}" style="width:100%; height:100%; object-fit:cover; display:block;" onerror="this.parentElement.style.display='none';" />
                </div>
              ` : '')}
              <div class="drill-word-head">
                <strong>${d.word}</strong>
                <button class="md-icon-button" style="width:32px; height:32px;" onclick="window.journeyModule.speak('${d.word.replace(/'/g, "\\'")}')" title="Écouter">
                  <span class="material-icons-round" style="font-size:18px; color:var(--md-sys-color-primary);">volume_up</span>
                </button>
              </div>
              <p>${d.def}</p>
              <div class="drill-ex">« ${d.example} »</div>
            </div>
          `).join('')}
        </div>
      `;

      if (this.nextStepBtn) {
        this.nextStepBtn.disabled = false;
        this.nextStepBtn.innerHTML = `Étape Suivante <span class="material-icons-round">navigate_next</span>`;
        this.nextStepBtn.onclick = () => this.goToNextStep();
      }
    } else if (step.type === 'quiz_drill' || step.type === 'connector_drill') {
      this.modalBody.innerHTML = `
        <h3 class="step-card-title">${stepTitle}</h3>
        <div class="quest-question-text">${step.question}</div>
        <div class="quest-options-list" id="quest-options-group">
          ${step.options.map((opt, idx) => `
            <button class="quest-opt-btn" onclick="window.journeyModule.handleAnswer(${idx})">
              <span class="material-icons-round" style="font-size:20px; color:var(--md-sys-color-primary);">radio_button_unchecked</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="quest-feedback-box" id="quest-feedback-box"></div>
      `;

      if (this.nextStepBtn) {
        this.nextStepBtn.disabled = true;
        this.nextStepBtn.innerHTML = `Valider <span class="material-icons-round">check</span>`;
      }
    } else if (step.type === 'lesson') {
      // Rendu du contenu "lesson" : cours ou article de lecture
      let content = step.content || '';
      // Transform markdown-like syntax
      content = content
        // Titres en gras
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Italique
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Listes à puces
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        // Regrouper les <li> consécutifs en <ul> avec un retrait à droite (indentation)
        .replace(/(<li>.*?<\/li>)+/gs, (m) => `<ul style="padding-left:28px; margin-top:8px; margin-bottom:12px;">${m}</ul>`)
        // Séparateurs
        .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid var(--md-sys-color-outline-variant);margin:16px 0;"')
        // Sauts de ligne doubles → paragraphes
        .replace(/\n\n/g, '</p><p>')
        // Sauts simples → <br>
        .replace(/\n/g, '<br>')
        // Images markdown ![alt](url)
        .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<div style="text-align:center; margin:16px auto; max-width:320px;"><img src="$2" alt="$1" style="width:100%; max-width:320px; height:auto; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1); border:1px solid var(--md-sys-color-outline-variant); object-fit:cover;" /><div style="font-size:0.78rem; color:var(--md-sys-color-on-surface-variant); margin-top:6px; font-style:italic;">$1</div></div>')
        // Liens markdown [texte](url)
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:var(--md-sys-color-primary); font-weight:600; text-decoration:underline;">$1</a>')
        // Listes numérotées
        .replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
      // Add vocab links (words highlighted in yellow and bold)
      if (Array.isArray(window.vocabDataset)) {
        const vocabWords = window.vocabDataset.map(v => v.fr).filter(Boolean).sort((a,b)=>b.length-a.length);
        vocabWords.forEach(word => {
          if (!word || word.length < 2) return;
          const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(`\\b(${escaped})\\b`, 'gi');
          if (regex.test(content)) {
            const href = `index.html?tab=vocabulary&word=${encodeURIComponent(word)}`;
            content = content.replace(regex, `<a href="${href}" target="_blank" class="vocab-link" style="background:yellow; font-weight:bold; color:inherit; text-decoration:none; padding:0 2px; border-radius:2px;">$1</a>`);
          }
        });
      }
      // Link official resources
      content = content
        .replace(/Code du travail/g, '<a href="ressources/code-du-travail.html" target="_blank" style="text-decoration:underline; font-weight:bold; color:var(--md-sys-color-primary);">Code du travail</a>')
        .replace(/Sécurité [sS]ociale/g, '<a href="ressources/securite-sociale.html" target="_blank" style="text-decoration:underline; font-weight:bold; color:var(--md-sys-color-primary);">Sécurité sociale</a>')
        .replace(/\bANSM\b/g, '<a href="ressources/ansm.html" target="_blank" style="text-decoration:underline; font-weight:bold; color:var(--md-sys-color-primary);">ANSM</a>');
      const htmlContent = content;

      this.modalBody.innerHTML = `
        <h3 class="step-card-title">${stepTitle}</h3>
        ${step.youtubeId ? `
          <div class="lesson-video-card">
            <div class="lesson-video-wrapper">
              <iframe src="https://www.youtube.com/embed/${step.youtubeId}?rel=0&cc_load_policy=1&hl=fr" 
                      title="Vidéo pédagogique" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowfullscreen>
              </iframe>
            </div>
            <div class="lesson-video-hint">
              <span class="material-icons-round" style="font-size:20px; color:#2563EB;">subtitles</span>
              <div>
                <strong>Conseil pédagogique :</strong> Familiarisez-vous avec le contenu médiatique authentique. 
                Activez les <strong>sous-titres en français</strong> directement dans le lecteur YouTube (bouton <code>[CC]</code> ou ⚙️ Paramètres ➔ Sous-titres ➔ Français).
              </div>
            </div>
          </div>
        ` : ''}
        ${step.documentUrl ? `
          <div class="lesson-doc-banner" style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            background: #F0FDF4;
            border: 1px solid #BBF7D0;
            border-left: 4px solid #16A34A;
            border-radius: 12px;
            padding: 12px 18px;
            margin-bottom: 16px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.03);
          ">
            <div style="display:flex; align-items:center; gap:10px; font-size:0.9rem; color:#166534; font-weight:600;">
              <span class="material-icons-round" style="font-size:24px; color:#16A34A;">description</span>
              <span>${step.documentLabel || 'Document officiel original disponible'}</span>
            </div>
            <a href="${step.documentUrl}" target="_blank" rel="noopener noreferrer" style="
              display: inline-flex;
              align-items: center;
              gap: 6px;
              background: #16A34A;
              color: #ffffff;
              padding: 7px 14px;
              border-radius: 20px;
              font-size: 0.825rem;
              font-weight: 600;
              text-decoration: none;
              transition: all 0.2s ease;
            ">
              <span>Ouvrir dans un nouvel onglet</span>
              <span class="material-icons-round" style="font-size:16px;">open_in_new</span>
            </a>
          </div>
        ` : ''}
        ${step.audioText ? `
          <div class="lesson-audio-bar">
            <div class="lesson-audio-info">
              <span class="material-icons-round" style="color:var(--md-sys-color-primary); font-size:24px;">record_voice_over</span>
              <span>Lecture audio intégrale du texte (TTS haute fidélité)</span>
            </div>
            <button class="lesson-tts-btn" id="lesson-tts-toggle-btn" onclick="window.journeyModule.toggleLessonAudio()">
              <span class="material-icons-round">play_arrow</span>
              <span>Écouter le texte</span>
            </button>
          </div>
        ` : ''}
        <div style="
          background: var(--md-sys-color-surface-variant);
          border-radius: 12px;
          padding: 20px;
          font-size: 0.92rem;
          line-height: 1.75;
          color: var(--md-sys-color-on-surface);
          max-height: 55vh;
          overflow-y: auto;
        ">
          <p>${htmlContent}</p>
        </div>
      `;

      if (this.nextStepBtn) {
        this.nextStepBtn.disabled = false;
        this.nextStepBtn.innerHTML = `Continuer <span class="material-icons-round">navigate_next</span>`;
        this.nextStepBtn.onclick = () => this.goToNextStep();
      }
    } else if (step.type === 'matching_drill') {
      this.renderMatchingDrill(step);
    } else if (step.type === 'image_scene') {
      this.renderImageScene(step);
    } else if (step.type === 'dialogue_view') {
      this.renderDialogueView(step);
    } else if (step.type === 'synthesis_prompt') {
      this.renderSynthesisPrompt(step);
    } else if (step.type === 'essay_prompt') {
      this.renderEssayPrompt(step);
    }
  }

  renderImageScene(step) {
    const words = step.words || [];
    const stepTitle = this.formatStepTitle(step.title);
    this.modalBody.innerHTML = `
      <h3 class="step-card-title">${stepTitle}</h3>
      <div style="text-align:center; margin:16px 0;">
        <img src="${step.imageUrl}" alt="${step.caption || 'Scène thématique'}" 
             style="max-width:100%; max-height:360px; object-fit:cover; border-radius:14px; box-shadow:0 4px 16px rgba(0,0,0,0.12); border:1px solid var(--md-sys-color-outline-variant);" 
             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
        <div style="display:none; padding:32px 16px; background:var(--md-sys-color-surface-variant); border-radius:14px; font-style:italic; color:var(--md-sys-color-on-surface-variant);">
          🖼️ Scène visuelle libre de droit : ${step.caption || stepTitle}
        </div>
        ${step.caption ? `<p style="font-size:0.92rem; color:var(--md-sys-color-on-surface-variant); margin-top:10px; font-weight:500;">${step.caption}</p>` : ''}
      </div>
      ${words.length > 0 ? `
        <div style="margin-top:18px;">
          <h4 style="font-size:0.88rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--md-sys-color-primary); margin-bottom:10px;">
            Mots à découvrir dans cette scène :
          </h4>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            ${words.map(w => `
              <span class="vocab-chip" style="display:inline-flex; align-items:center; gap:6px; background:var(--md-sys-color-surface-variant); border:1px solid var(--md-sys-color-outline-variant); padding:6px 12px; border-radius:20px; font-weight:600; cursor:pointer;" onclick="window.journeyModule.speak('${w.replace(/'/g, "\\'")}')">
                <span class="material-icons-round" style="font-size:16px; color:var(--md-sys-color-primary);">volume_up</span>
                <span>${w}</span>
              </span>
            `).join('')}
          </div>
        </div>
      ` : ''}
    `;
    if (this.nextStepBtn) {
      this.nextStepBtn.disabled = false;
      this.nextStepBtn.innerHTML = `Étape Suivante <span class="material-icons-round">navigate_next</span>`;
      this.nextStepBtn.onclick = () => this.goToNextStep();
    }
  }

  renderDialogueView(step) {
    const lines = step.lines || [];
    const stepTitle = this.formatStepTitle(step.title);
    this.modalBody.innerHTML = `
      <h3 class="step-card-title">${stepTitle}</h3>
      ${step.context ? `
        <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-left:4px solid #16A34A; border-radius:10px; padding:10px 14px; margin-bottom:16px; font-size:0.9rem; color:#166534;">
          <strong>Situation :</strong> ${step.context}
        </div>
      ` : ''}
      <div style="display:flex; flex-direction:column; gap:12px; max-height:50vh; overflow-y:auto; padding:4px;">
        ${lines.map((l, idx) => `
          <div style="display:flex; flex-direction:column; gap:4px; align-self:${idx % 2 === 0 ? 'flex-start' : 'flex-end'}; max-width:82%;">
            <span style="font-size:0.75rem; font-weight:700; color:var(--md-sys-color-primary); padding-left:6px;">${l.speaker}</span>
            <div style="display:flex; align-items:center; gap:8px; background:${idx % 2 === 0 ? 'var(--md-sys-color-surface-variant)' : 'var(--md-sys-color-primary-container)'}; color:${idx % 2 === 0 ? 'var(--md-sys-color-on-surface)' : 'var(--md-sys-color-on-primary-container)'}; padding:10px 14px; border-radius:14px; font-size:0.95rem; line-height:1.4;">
              <span>${l.text}</span>
              <button class="md-icon-button" style="width:28px; height:28px; min-width:28px; flex-shrink:0;" onclick="window.journeyModule.speak('${l.text.replace(/'/g, "\\'")}')" title="Écouter">
                <span class="material-icons-round" style="font-size:16px;">volume_up</span>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    if (this.nextStepBtn) {
      this.nextStepBtn.disabled = false;
      this.nextStepBtn.innerHTML = `Étape Suivante <span class="material-icons-round">navigate_next</span>`;
      this.nextStepBtn.onclick = () => this.goToNextStep();
    }
  }

  renderSynthesisPrompt(step) {
    const stepTitle = this.formatStepTitle(step.title);
    this.modalBody.innerHTML = `
      <h3 class="step-card-title">${stepTitle}</h3>
      <div style="background:var(--md-sys-color-surface-variant); border-radius:12px; padding:18px; margin-bottom:16px;">
        <div style="display:flex; align-items:center; gap:8px; font-weight:700; color:var(--md-sys-color-primary); margin-bottom:8px;">
          <span class="material-icons-round">assignment</span>
          <span>Consigne Officielle DALF C1 (Synthèse ~220 mots)</span>
        </div>
        <p style="font-size:0.92rem; line-height:1.6; margin:0;">${step.prompt}</p>
      </div>
      ${step.suggestedPlan ? `
        <div style="margin-top:14px;">
          <h4 style="font-size:0.88rem; color:var(--md-sys-color-primary); text-transform:uppercase; margin-bottom:6px;">Plan de confrontation suggéré :</h4>
          <ul style="padding-left:22px; font-size:0.88rem; line-height:1.6; color:var(--md-sys-color-on-surface-variant);">
            ${step.suggestedPlan.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      ${step.keyVocab ? `
        <div style="margin-top:14px;">
          <h4 style="font-size:0.88rem; color:var(--md-sys-color-primary); text-transform:uppercase; margin-bottom:6px;">Lexique conceptuel requis :</h4>
          <div style="display:flex; flex-wrap:wrap; gap:6px;">
            ${step.keyVocab.map(v => `<span class="badge" style="background:var(--md-sys-color-primary-container); color:var(--md-sys-color-on-primary-container); padding:4px 10px; border-radius:12px; font-size:0.82rem;">${v}</span>`).join('')}
          </div>
        </div>
      ` : ''}
    `;
    if (this.nextStepBtn) {
      this.nextStepBtn.disabled = false;
      this.nextStepBtn.innerHTML = `Étape Suivante <span class="material-icons-round">navigate_next</span>`;
      this.nextStepBtn.onclick = () => this.goToNextStep();
    }
  }

  renderEssayPrompt(step) {
    const stepTitle = this.formatStepTitle(step.title);
    this.modalBody.innerHTML = `
      <h3 class="step-card-title">${stepTitle}</h3>
      <div style="background:var(--md-sys-color-surface-variant); border-radius:12px; padding:18px; margin-bottom:16px;">
        <div style="display:flex; align-items:center; gap:8px; font-weight:700; color:var(--md-sys-color-primary); margin-bottom:8px;">
          <span class="material-icons-round">draw</span>
          <span>Consigne d'Essai Argumenté DALF C2</span>
        </div>
        <p style="font-size:0.95rem; font-weight:600; line-height:1.6; margin:8px 0;">« ${step.topic || step.prompt} »</p>
        ${step.targetWords ? `<span class="badge" style="background:#EDE9FE; color:#5B21B6; padding:3px 8px; border-radius:10px; font-size:0.75rem;">Volume conseillé : ${step.targetWords} mots</span>` : ''}
      </div>
      ${step.citations ? `
        <div style="margin-top:14px;">
          <h4 style="font-size:0.88rem; color:var(--md-sys-color-primary); text-transform:uppercase; margin-bottom:6px;">Citations et références à exploiter :</h4>
          <ul style="padding-left:22px; font-size:0.88rem; font-style:italic; line-height:1.6; color:var(--md-sys-color-on-surface-variant);">
            ${step.citations.map(c => `<li>« ${c} »</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      ${step.suggestedPlan ? `
        <div style="margin-top:14px;">
          <h4 style="font-size:0.88rem; color:var(--md-sys-color-primary); text-transform:uppercase; margin-bottom:6px;">Démarche dialectique suggérée :</h4>
          <ol style="padding-left:22px; font-size:0.88rem; line-height:1.6; color:var(--md-sys-color-on-surface-variant);">
            ${step.suggestedPlan.map(p => `<li>${p}</li>`).join('')}
          </ol>
        </div>
      ` : ''}
    `;
    if (this.nextStepBtn) {
      this.nextStepBtn.disabled = false;
      this.nextStepBtn.innerHTML = `Étape Suivante <span class="material-icons-round">navigate_next</span>`;
      this.nextStepBtn.onclick = () => this.goToNextStep();
    }
  }

  renderMatchingDrill(step) {
    if (!this.matchingState || this.matchingState.stepIdx !== this.currentStepIdx) {
      const items = step.pairs || [];
      const leftItems = items.map(p => ({ id: p.id, fr: p.fr }));
      const rightItems = items.map(p => ({
        id: p.id,
        en: p.en,
        cn: p.cn,
        jp: p.jp,
        text: `${p.en} • ${p.jp} • ${p.cn}`
      })).sort(() => Math.random() - 0.5);

      this.matchingState = {
        stepIdx: this.currentStepIdx,
        pairs: items,
        leftItems,
        rightItems,
        selectedLeft: null,
        selectedRight: null,
        matchedIds: new Set(),
        mistakes: 0
      };
    }

    const state = this.matchingState;
    const totalPairs = state.pairs.length;
    const matchedCount = state.matchedIds.size;
    const stepTitle = this.formatStepTitle(step.title);

    this.modalBody.innerHTML = `
      <h3 class="step-card-title">${stepTitle}</h3>
      <p style="font-size:0.9rem; color:var(--md-sys-color-on-surface-variant); margin-bottom:12px;">
        ${step.instructions || "Associez chaque mot en français à sa traduction trilingue (anglais, japonais, chinois). Cliquez sur un mot français puis sur sa traduction correspondante."}
      </p>
      
      <div class="matching-status-bar">
        <span>Progression : <strong id="matching-score">${matchedCount} / ${totalPairs}</strong> paires trouvées</span>
        <span style="font-size:0.8rem; color:var(--md-sys-color-primary);">🎯 Mémorisation active</span>
      </div>

      <div class="matching-drill-container" style="margin-top:14px;">
        <div class="matching-pairs-grid">
          <!-- Colonne Mots Français -->
          <div class="matching-col">
            <div class="matching-col-title">
              <span class="material-icons-round" style="font-size:16px;">translate</span>
              <span>Mots en Français</span>
            </div>
            ${state.leftItems.map(item => {
              const isMatched = state.matchedIds.has(item.id);
              const isSelected = state.selectedLeft === item.id;
              return `
                <button class="matching-card ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}"
                        data-id="${item.id}"
                        data-side="left"
                        ${isMatched ? 'disabled' : ''}
                        onclick="window.journeyModule.handleMatchingClick('left', '${item.id}')">
                  <span style="font-weight:600;">${item.fr}</span>
                  <span class="material-icons-round" style="font-size:18px; color: ${isMatched ? '#1B4336' : 'var(--md-sys-color-primary)'};">
                    ${isMatched ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                </button>
              `;
            }).join('')}
          </div>

          <!-- Colonne Traductions Japonaises -->
          <div class="matching-col">
            <div class="matching-col-title">
              <span class="material-icons-round" style="font-size:16px;">language</span>
              <span>Équivalent en Japonais (日本語)</span>
            </div>
            ${state.rightItems.map(item => {
              const isMatched = state.matchedIds.has(item.id);
              const isSelected = state.selectedRight === item.id;
              return `
                <button class="matching-card ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}"
                        data-id="${item.id}"
                        data-side="right"
                        ${isMatched ? 'disabled' : ''}
                        onclick="window.journeyModule.handleMatchingClick('right', '${item.id}')">
                  <div style="display:flex; flex-direction:column; gap:2px; font-size:0.9rem; line-height:1.35;">
                    <div><strong style="color:var(--md-sys-color-primary); font-size:0.95rem;">${item.jp || item.text}</strong></div>
                    ${item.en ? `<div style="font-size:0.78rem; color:var(--md-sys-color-on-surface-variant); opacity:0.85;">${item.en} ${item.cn ? `• ${item.cn}` : ''}</div>` : ''}
                  </div>
                  <span class="material-icons-round" style="font-size:18px; color: ${isMatched ? '#1B4336' : 'var(--md-sys-color-outline)'};">
                    ${isMatched ? 'check_circle' : 'swap_horiz'}
                  </span>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      </div>
      <div class="quest-feedback-box" id="quest-feedback-box"></div>
    `;

    if (this.nextStepBtn) {
      if (matchedCount === totalPairs) {
        this.nextStepBtn.disabled = false;
        const isLastStep = this.currentStepIdx === this.currentQuest.steps.length - 1;
        this.nextStepBtn.innerHTML = isLastStep
          ? `Terminer la Quête <span class="material-icons-round">emoji_events</span>`
          : `Étape Suivante <span class="material-icons-round">navigate_next</span>`;
        this.nextStepBtn.onclick = () => this.goToNextStep();
      } else {
        this.nextStepBtn.disabled = true;
        this.nextStepBtn.innerHTML = `Associez toutes les paires (${matchedCount}/${totalPairs})`;
      }
    }
  }

  handleMatchingClick(side, id) {
    if (!this.matchingState) return;
    const state = this.matchingState;
    if (state.matchedIds.has(id)) return;

    if (side === 'left') {
      state.selectedLeft = state.selectedLeft === id ? null : id;
      this.speak(state.leftItems.find(it => it.id === id)?.fr || '');
    } else {
      state.selectedRight = state.selectedRight === id ? null : id;
    }

    if (state.selectedLeft && state.selectedRight) {
      const leftId = state.selectedLeft;
      const rightId = state.selectedRight;
      const isCorrect = leftId === rightId;

      const leftBtn = this.modalBody.querySelector(`.matching-card[data-side="left"][data-id="${leftId}"]`);
      const rightBtn = this.modalBody.querySelector(`.matching-card[data-side="right"][data-id="${rightId}"]`);
      const feedbackBox = document.getElementById('quest-feedback-box');

      if (isCorrect) {
        state.matchedIds.add(leftId);
        state.selectedLeft = null;
        state.selectedRight = null;

        if (leftBtn) {
          leftBtn.classList.remove('selected');
          leftBtn.classList.add('matched');
          leftBtn.disabled = true;
        }
        if (rightBtn) {
          rightBtn.classList.remove('selected');
          rightBtn.classList.add('matched');
          rightBtn.disabled = true;
        }

        const scoreEl = document.getElementById('matching-score');
        if (scoreEl) scoreEl.textContent = `${state.matchedIds.size} / ${state.pairs.length}`;

        if (feedbackBox) {
          feedbackBox.classList.add('show');
          feedbackBox.style.background = '#E5F0EB';
          feedbackBox.style.color = '#1B4336';
          feedbackBox.innerHTML = `<strong>✨ Exact !</strong> Mémorisation réussie pour ce mot.`;
        }

        if (state.matchedIds.size === state.pairs.length) {
          if (feedbackBox) {
            feedbackBox.innerHTML = `<strong>🏆 Bravo !</strong> Toutes les correspondances lexicales ont été validées avec succès !`;
          }
          if (this.nextStepBtn) {
            this.nextStepBtn.disabled = false;
            const isLastStep = this.currentStepIdx === this.currentQuest.steps.length - 1;
            this.nextStepBtn.innerHTML = isLastStep
              ? `Terminer la Quête <span class="material-icons-round">emoji_events</span>`
              : `Étape Suivante <span class="material-icons-round">navigate_next</span>`;
            this.nextStepBtn.onclick = () => this.goToNextStep();
          }
        }
      } else {
        state.mistakes += 1;
        this.currentErrors += 1;
        if (leftBtn) leftBtn.classList.add('wrong');
        if (rightBtn) rightBtn.classList.add('wrong');

        if (feedbackBox) {
          feedbackBox.classList.add('show');
          feedbackBox.style.background = '#FDF0F0';
          feedbackBox.style.color = '#721C24';
          feedbackBox.innerHTML = `<strong>🍃 Attention :</strong> Cette association ne correspond pas, essayez à nouveau.`;
        }

        setTimeout(() => {
          if (leftBtn) leftBtn.classList.remove('wrong', 'selected');
          if (rightBtn) rightBtn.classList.remove('wrong', 'selected');
          state.selectedLeft = null;
          state.selectedRight = null;
        }, 600);
      }
    } else {
      // Re-render visual selection
      const allLeft = this.modalBody.querySelectorAll('.matching-card[data-side="left"]');
      allLeft.forEach(btn => {
        if (!state.matchedIds.has(btn.dataset.id)) {
          btn.classList.toggle('selected', btn.dataset.id === state.selectedLeft);
        }
      });
      const allRight = this.modalBody.querySelectorAll('.matching-card[data-side="right"]');
      allRight.forEach(btn => {
        if (!state.matchedIds.has(btn.dataset.id)) {
          btn.classList.toggle('selected', btn.dataset.id === state.selectedRight);
        }
      });
    }
  }

  toggleLessonAudio() {
    const step = this.currentQuest ? this.currentQuest.steps[this.currentStepIdx] : null;
    if (!step || !step.audioText) return;
    const btn = document.getElementById('lesson-tts-toggle-btn');

    if (this.isLessonAudioPlaying) {
      this.stopTTS();
      return;
    }

    this.isLessonAudioPlaying = true;
    if (btn) {
      btn.classList.add('playing');
      btn.innerHTML = `<span class="material-icons-round">stop</span><span>Arrêter la lecture</span>`;
    }

    this.speak(step.audioText);

    // Watch for audio finish
    const checkAudioEnd = setInterval(() => {
      if (!window.aiTTS || (!window.aiTTS.currentPlayer && !('speechSynthesis' in window && window.speechSynthesis.speaking))) {
        clearInterval(checkAudioEnd);
        this.isLessonAudioPlaying = false;
        if (btn) {
          btn.classList.remove('playing');
          btn.innerHTML = `<span class="material-icons-round">play_arrow</span><span>Écouter le texte</span>`;
        }
      }
    }, 400);
  }

  stopTTS() {
    if (window.aiTTS) {
      window.aiTTS.stop();
    }
    this.isLessonAudioPlaying = false;
    const btn = document.getElementById('lesson-tts-toggle-btn');
    if (btn) {
      btn.classList.remove('playing');
      btn.innerHTML = `<span class="material-icons-round">play_arrow</span><span>Écouter le texte</span>`;
    }
  }

  speak(text) {
    if (!text) return;
    let textToSpeak = text;

    // Adaptation phonétique vocale Kokoro TTS UNIQUEMENT pour les 3 modules de prononciation :
    // Chapitre 1 Module 3 (Phonétique 1/3), Module 4 (Phonétique 2/3) et Module 5 (Phonétique 3/3)
    const isPronunciationQuest = this.currentQuest && (
      ['quest_ch1_phonetique_1', 'quest_ch1_phonetique_2', 'quest_ch1_phonetique_3'].includes(this.currentQuest.id) ||
      /^Phon[ée]tique\s+[123]\/3/i.test(this.currentQuest.title || '')
    );

    if (isPronunciationQuest && typeof textToSpeak === 'string') {
      let t = textToSpeak.trim();

      // Table de correspondance exacte ou sous-chaînes pour les cartes phonétiques
      // [u] -> ou
      // [y] -> u
      // [e] -> é
      // [ɛ] -> è
      // [ø] -> œu
      // [o] -> o
      // [ɔ] -> o
      // [a] -> a
      // [i] -> i
      // [œ] -> œu
      // [ə] -> e
      // [ɑ̃] -> an
      // [ɔ̃] -> on
      // [ɛ̃] -> ain
      // [œ̃] -> un
      // [ʁ] -> r
      // [ʃ] -> ch
      // [ʒ] -> j
      // [s] -> s
      // [z] -> z
      // [j] -> y
      // [w] -> ou
      // [ɥ] -> u
      // [t] -> t
      // [n] -> n

      // 1. Suppression de tout ce qui est entre parenthèses
      // Ex: "[u] (ou, où, oû)" -> "[u]"
      // Ex: "[ə] (e (sans accent))" -> "[ə]"
      // Ex: "[e] (é, -er, -ez, -et)" -> "[e]"
      // Ex: "[œ] (eu, œu (ouvert))" -> "[œ]"
      if (t.includes('(')) {
        t = t.replace(/\s*\(.*$/g, '').trim();
      }

      const phonemeMap = {
        '[u]': 'ou',
        '[y]': 'u',
        '[e]': 'é',
        '[ɛ]': 'è',
        '[ø]': 'eux',
        '[œ]': 'eu',
        '[ə]': 'e',
        '[ɑ̃]': 'an',
        '[ɔ̃]': 'on',
        '[ɛ̃]': 'ain',
        '[œ̃]': 'un',
        '[a]': 'a',
        '[i]': 'i',
        '[o]': 'o',
        '[ɔ]': 'o',
        '[ʁ]': 'r',
        '[ʃ]': 'ch',
        '[ʒ]': 'j',
        '[s]': 's',
        '[z]': 'z',
        '[j]': 'y',
        '[w]': 'ou',
        '[ɥ]': 'u',
        '[t]': 't',
        '[n]': 'n',
        '[s] vs [z]': 's ou z'
      };

      const directMap = {
        ...phonemeMap,
        'û': 'u',
        'ez': 'é',
        '-ez': 'é',
        'ei': 'è',
        'eu': 'eux',
        'oeu': 'eux',
        'œu': 'eux',
        'am': 'an',
        'en': 'an',
        'em': 'an',
        'om': 'on',
        'in': 'ain',
        'im': 'ain',
        'ein': 'ain',
        'um': 'un',
        'un': 'un',
        'y': 'i',
        ' y': 'i',
        'Liaison en [z]': 'Liaison en z',
        'Liaison en [t]': 'Liaison en t',
        'Liaison en [n]': 'Liaison en n',
        "L'Élision": "L'élision",
        "L'Élision avec apostrophe": "L'élision",
        "↗ ↘": 'Intonation montante et descendante',
        "Intonation & Rythme Syllabique": "Intonation et rythme syllabique",
        "CaReFuL": "Careful"
      };

      // Si le texte correspond directement ou contient un phonème entre crochets isolé
      const bracketMatch = t.match(/\[([^\]]+)\]/);
      if (directMap[t]) {
        textToSpeak = directMap[t];
      } else if (bracketMatch && directMap[bracketMatch[0]]) {
        // Si le texte est un libellé ou contient un phonème comme "[e]" ou "[œ]"
        textToSpeak = directMap[bracketMatch[0]];
      } else {
        // Remplacements des phonèmes entre crochets dans les chaînes résiduelles
        textToSpeak = t
          .replace(/\[u\]/g, 'ou')
          .replace(/\[y\]/g, 'u')
          .replace(/û/g, 'u')
          .replace(/\[e\]/g, 'é')
          .replace(/\[ɛ\]/g, 'è')
          .replace(/\[ø\]/g, 'eux')
          .replace(/\[œ\]/g, 'eu')
          .replace(/\[ə\]/g, 'e')
          .replace(/\[ɑ̃\]/g, 'an')
          .replace(/\[ɔ̃\]/g, 'on')
          .replace(/\[ɛ̃\]/g, 'ain')
          .replace(/\[œ̃\]/g, 'un')
          .replace(/\[a\]/g, 'a')
          .replace(/\[i\]/g, 'i')
          .replace(/\[o\]/g, 'o')
          .replace(/\[ɔ\]/g, 'o')
          .replace(/\[ʁ\]/g, 'r')
          .replace(/\[ʃ\]/g, 'ch')
          .replace(/\[ʒ\]/g, 'j')
          .replace(/\[j\]/g, 'y')
          .replace(/\[w\]/g, 'ou')
          .replace(/\[ɥ\]/g, 'u');
      }
    }

    // Protection supplémentaire pour Kokoro TTS / Web Speech :
    // Lorsqu'on doit prononcer un "é" isolé, certains moteurs de synthèse vocale (comme Web Speech ou SAPI)
    // épellent "e accent aigu" au lieu de prononcer le son [e].
    // En phonétique française, le mot "et" ou la graphie "eh" force la prononciation du son pur [e] sans épeler le nom de la lettre.
    if (textToSpeak === 'é') {
      textToSpeak = 'et';
    }

    if (window.aiTTS) {
      window.aiTTS.speak(textToSpeak, { rate: 1.0 });
    }
  }

  handleAnswer(selectedIdx) {
    const step = this.currentQuest ? this.currentQuest.steps[this.currentStepIdx] : null;
    if (!step) return;
    const correctIdx = step.correctIndex;
    const explanation = step.explanation || '';

    const optionsGroup = document.getElementById('quest-options-group');
    const feedbackBox = document.getElementById('quest-feedback-box');
    if (!optionsGroup || !feedbackBox) return;

    const buttons = optionsGroup.querySelectorAll('.quest-opt-btn');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIdx) {
        btn.classList.add('correct');
        btn.querySelector('.material-icons-round').textContent = 'check_circle';
      } else if (idx === selectedIdx && selectedIdx !== correctIdx) {
        btn.classList.add('wrong');
        btn.querySelector('.material-icons-round').textContent = 'cancel';
      }
    });

    feedbackBox.classList.add('show');
    if (selectedIdx === correctIdx) {
      feedbackBox.style.background = '#E5F0EB';
      feedbackBox.style.color = '#1B4336';
      feedbackBox.innerHTML = `<strong>✨ Parfait !</strong> ${explanation}`;
    } else {
      this.currentErrors += 1;
      feedbackBox.style.background = '#FDF0F0';
      feedbackBox.style.color = '#721C24';
      feedbackBox.innerHTML = `<strong>🍃 À retenir :</strong> ${explanation}`;
    }

    if (this.nextStepBtn) {
      this.nextStepBtn.disabled = false;
      const isLastStep = this.currentStepIdx === this.currentQuest.steps.length - 1;
      this.nextStepBtn.innerHTML = isLastStep 
        ? `Terminer la Quête <span class="material-icons-round">emoji_events</span>` 
        : `Étape Suivante <span class="material-icons-round">navigate_next</span>`;
      this.nextStepBtn.onclick = () => this.goToNextStep();
    }
  }

  goToNextStep() {
    if (!this.currentQuest) return;

    if (this.currentStepIdx + 1 < this.currentQuest.steps.length) {
      this.currentStepIdx += 1;
      this.renderStep();
    } else {
      this.finishQuest();
    }
  }

  finishQuest() {
    const quest = this.currentQuest;
    if (!quest) return;

    // Calculate stars
    let stars = 3;
    if (this.currentErrors === 1) stars = 2;
    else if (this.currentErrors > 1) stars = 1;

    // Award XP
    const earnedXp = quest.xp;
    this.state.xp = (this.state.xp || 0) + earnedXp;

    // Mark completed
    if (!this.state.completedQuests) this.state.completedQuests = {};
    const prevStars = this.state.completedQuests[quest.id]?.stars || 0;
    this.state.completedQuests[quest.id] = {
      completed: true,
      stars: Math.max(stars, prevStars)
    };

    this.saveState();
    this.render();

    // Show Victory Screen in Modal
    if (this.modalCard) this.modalCard.classList.remove('is-wide');
    if (this.modalBody) {
      this.modalBody.innerHTML = `
        <div class="victory-modal-card">
          <div class="victory-icon">🏆</div>
          <h2 class="victory-title">Quête Accomplie avec Succès !</h2>
          <p style="color:var(--md-sys-color-on-surface-variant); font-size:1rem; max-width:440px; margin:0 auto;">
            Félicitations, vous avez brillamment validé <strong>« ${quest.title} »</strong>.
          </p>
          
          <div class="victory-rewards-row">
            <div class="reward-pill" style="color:#B86B35;">
              <span>⭐</span> +${earnedXp} XP
            </div>
            <div class="reward-pill" style="color:#F59E0B;">
              <span>${'★'.repeat(stars)}</span> ${stars}/3 Étoiles
            </div>
          </div>
        </div>
      `;
    }

    if (this.nextStepBtn) {
      this.nextStepBtn.innerHTML = `Continuer mon Parcours <span class="material-icons-round">arrow_forward</span>`;
      this.nextStepBtn.onclick = () => this.closeQuestModal();
    }
  }
}

// Global exposure
if (typeof window !== 'undefined') {
  window.JourneyModule = JourneyModule;
}
if (typeof global !== 'undefined') {
  global.JourneyModule = JourneyModule;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { JourneyModule };
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.journeyModule) {
      window.journeyModule = new JourneyModule();
    }
  });
}
