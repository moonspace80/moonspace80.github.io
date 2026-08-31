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
          <span class="material-icons-round" style="font-size:16px;">map</span> Mon Parcours (65 Ch.)
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
                  Chapitre ${chap.chapterNumber} / 65
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
    if (this.modalEl) this.modalEl.classList.remove('open');
    this.currentQuest = null;
  }

  renderStep() {
    if (!this.currentQuest || !this.modalBody) return;
    const step = this.currentQuest.steps[this.currentStepIdx];
    const totalSteps = this.currentQuest.steps.length;

    // Update Progress bar
    if (this.progressBar) {
      const pct = Math.round(((this.currentStepIdx + 1) / totalSteps) * 100);
      this.progressBar.style.width = `${pct}%`;
    }

    if (step.type === 'vocab_drill') {
      this.modalBody.innerHTML = `
        <h3 class="step-card-title">${step.title}</h3>
        <p style="font-size:0.9rem; color:var(--md-sys-color-on-surface-variant); margin-bottom:16px;">
          Écoutez et mémorisez ces mots clés avant de passer à l'épreuve de compréhension.
        </p>
        <div class="drill-vocab-grid">
          ${step.details.map(d => `
            <div class="drill-word-card">
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
        <h3 class="step-card-title">${step.title}</h3>
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
        <h3 class="step-card-title">${step.title}</h3>
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
    }
  }

  speak(text) {
    if (window.aiTTS) {
      window.aiTTS.speak(text, { rate: 1.0 });
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
