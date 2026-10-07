/* ==========================================================================
   SESSIONS MODULE — DOUBLE PARCOURS DE SESSIONS INTENSIVES (> 2H) SANS STRESS
   Parcours A : Séquences Dynamiques Alternées (Anti-Fatigue)
   Parcours B : Immersion Thématique Approfondie (4 Grands Piliers DELF B2)
   ========================================================================== */

class SessionsModule {
  constructor() {
    this.dataset = (typeof window !== 'undefined' && window.journeyDataset) ? window.journeyDataset : {
      parcoursA: (typeof parcoursA_Data !== 'undefined' ? parcoursA_Data : null),
      parcoursB: (typeof parcoursB_Data !== 'undefined' ? parcoursB_Data : null)
    };

    this.storageKeyProgress = 'delf_session_progress';
    this.storageKeyHistory = 'delf_session_history';
    this.storageKeyStats = 'delf_session_stats';

    this.activeMode = 'parcours-a'; // 'parcours-a' | 'parcours-b'
    this.activePillarId = 'pilier-1-travail-economie';
    this.activePillarStation = 0; // 0: vocab, 1: connecteurs, 2: presse, 3: oral, 4: ecrit, 5: drill

    // Runtime session state
    this.sessionActive = false;
    this.sessionPaused = false;
    this.currentBlockIndex = 0;
    this.globalSecondsRemaining = 120 * 60; // 7200s (2h)
    this.blockSecondsRemaining = 20 * 60;
    this.timerInterval = null;

    // Micro-pause state
    this.inMicroPause = false;
    this.microPauseSecondsRemaining = 0;
    this.microPauseInterval = null;
    this.breathingPhase = 'inhale'; // 'inhale' (4s), 'hold' (7s), 'exhale' (8s)
    this.breathingTimer = 0;
    this.breathingCycleCount = 1;
    this.breathingInterval = null;

    // Answers and scores for active session
    this.sessionAnswers = {};
    this.sessionScores = { correct: 0, total: 0 };
    this.sessionXpEarned = 0;
    this.draftText = '';

    // Load persisted state
    this.stats = this.loadStats();
    this.history = this.loadHistory();

    if (typeof document !== 'undefined') {
      this.initDOM();
    }
  }

  // =========================================================================
  // PERSISTENCE & STATS
  // =========================================================================

  loadStats() {
    if (typeof localStorage === 'undefined') return { totalSessions: 0, totalMinutes: 0, totalXp: 0, streak: 1, lastDate: '', badges: [] };
    try {
      const saved = localStorage.getItem(this.storageKeyStats);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Erreur chargement delf_session_stats:', e);
    }
    return { totalSessions: 0, totalMinutes: 0, totalXp: 0, streak: 1, lastDate: '', badges: [] };
  }

  saveStats() {
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(this.storageKeyStats, JSON.stringify(this.stats));
    } catch (e) {
      console.warn('Erreur sauvegarde delf_session_stats:', e);
    }
  }

  loadHistory() {
    if (typeof localStorage === 'undefined') return [];
    try {
      const saved = localStorage.getItem(this.storageKeyHistory);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Erreur chargement delf_session_history:', e);
    }
    return [];
  }

  saveHistory() {
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(this.storageKeyHistory, JSON.stringify(this.history));
    } catch (e) {
      console.warn('Erreur sauvegarde delf_session_history:', e);
    }
  }

  saveOngoingProgress() {
    if (typeof localStorage === 'undefined') return;
    if (!this.sessionActive) {
      localStorage.removeItem(this.storageKeyProgress);
      return;
    }
    const state = {
      activeMode: this.activeMode,
      activePillarId: this.activePillarId,
      activePillarStation: this.activePillarStation,
      currentBlockIndex: this.currentBlockIndex,
      globalSecondsRemaining: this.globalSecondsRemaining,
      blockSecondsRemaining: this.blockSecondsRemaining,
      sessionXpEarned: this.sessionXpEarned,
      sessionAnswers: this.sessionAnswers,
      sessionScores: this.sessionScores,
      draftText: this.draftText,
      timestamp: Date.now()
    };
    try {
      localStorage.setItem(this.storageKeyProgress, JSON.stringify(state));
    } catch (e) {
      console.warn('Erreur sauvegarde delf_session_progress:', e);
    }
  }

  loadOngoingProgress() {
    if (typeof localStorage === 'undefined') return null;
    try {
      const saved = localStorage.getItem(this.storageKeyProgress);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Erreur lecture delf_session_progress:', e);
    }
    return null;
  }

  clearOngoingProgress() {
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.removeItem(this.storageKeyProgress);
    } catch (e) {
      console.warn('Erreur suppression delf_session_progress:', e);
    }
  }

  // =========================================================================
  // INITIALISATION DU DOM & ÉVÉNEMENTS
  // =========================================================================

  initDOM() {
    this.injectStyles();
    this.container = document.getElementById('sessions-root-container') ||
                     document.getElementById('view-intensive-sessions') ||
                     document.getElementById('view-sessions');

    // If container not present in index.html, create or mount in main container
    if (!this.container) {
      const main = document.getElementById('main-content');
      if (main) {
        this.container = document.createElement('section');
        this.container.id = 'view-intensive-sessions';
        this.container.className = 'view-panel';
        main.appendChild(this.container);
      }
    }

    if (this.container) {
      this.render();
    }
  }

  injectStyles() {
    if (typeof document === 'undefined') return;
    if (document.getElementById('sessions-module-custom-styles')) return;

    const style = document.createElement('style');
    style.id = 'sessions-module-custom-styles';
    style.textContent = `
      /* ============================================================
         SESSIONS MODULE DESIGN SYSTEM (Sérénité Palette & MD3)
         ============================================================ */
      .sessions-wrapper {
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        padding-bottom: 60px;
        font-family: var(--md-font-sans, 'Plus Jakarta Sans', sans-serif);
      }
      
      .sessions-hero-card {
        background: linear-gradient(135deg, rgba(74, 98, 89, 0.08) 0%, rgba(93, 114, 133, 0.12) 100%);
        border: 1px solid rgba(74, 98, 89, 0.2);
        border-radius: 20px;
        padding: 28px 32px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        position: relative;
        overflow: hidden;
      }

      .sessions-hero-card::before {
        content: '';
        position: absolute;
        top: -50px;
        right: -50px;
        width: 180px;
        height: 180px;
        background: radial-gradient(circle, rgba(74, 98, 89, 0.15) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
      }

      .sessions-mode-nav {
        display: flex;
        gap: 12px;
        background: var(--md-sys-color-surface-variant, #eceff1);
        padding: 6px;
        border-radius: 14px;
        margin-top: 18px;
        width: fit-content;
      }

      .sessions-mode-tab {
        padding: 10px 22px;
        border-radius: 10px;
        border: none;
        background: transparent;
        font-family: var(--md-font-sans, inherit);
        font-weight: 600;
        font-size: 0.95rem;
        color: var(--md-sys-color-on-surface-variant, #455a64);
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .sessions-mode-tab.active {
        background: var(--md-sys-color-surface, #ffffff);
        color: var(--md-sys-color-primary, #2e5a44);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      }

      /* Runner top bar */
      .session-runner-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--md-sys-color-surface, #ffffff);
        border: 1px solid rgba(0,0,0,0.08);
        border-radius: 16px;
        padding: 16px 24px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        position: sticky;
        top: 64px;
        z-index: 20;
        backdrop-filter: blur(10px);
      }

      .timer-badge {
        display: flex;
        align-items: center;
        gap: 8px;
        background: #f1f5f3;
        padding: 8px 16px;
        border-radius: 12px;
        font-family: var(--md-font-mono, monospace);
        font-weight: 700;
        font-size: 1.15rem;
        color: #2e5a44;
        border: 1px solid rgba(46, 90, 68, 0.2);
      }

      .timer-badge.warning {
        background: #fff8e1;
        color: #b78103;
        border-color: #ffe082;
      }

      .stepper-timeline {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        margin: 20px 0 10px 0;
      }

      .stepper-timeline::before {
        content: '';
        position: absolute;
        top: 20px;
        left: 30px;
        right: 30px;
        height: 3px;
        background: #e0e0e0;
        z-index: 1;
      }

      .stepper-step {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 2;
        gap: 6px;
        flex: 1;
        cursor: pointer;
      }

      .step-circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #ffffff;
        border: 2px solid #bdbdbd;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.9rem;
        color: #757575;
        transition: all 0.25s ease;
      }

      .stepper-step.active .step-circle {
        border-color: #2e5a44;
        background: #2e5a44;
        color: #ffffff;
        box-shadow: 0 0 0 4px rgba(46, 90, 68, 0.2);
      }

      .stepper-step.completed .step-circle {
        border-color: #388e3c;
        background: #e8f5e9;
        color: #2e7d32;
      }

      .step-label {
        font-size: 0.8rem;
        font-weight: 600;
        color: #616161;
        text-align: center;
        max-width: 120px;
      }

      .stepper-step.active .step-label {
        color: #2e5a44;
      }

      /* Micro-Pause Modal */
      .micro-pause-modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(18, 30, 26, 0.85);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        padding: 20px;
      }

      .micro-pause-card {
        background: var(--md-sys-color-surface, #ffffff);
        border-radius: 24px;
        padding: 36px 40px;
        max-width: 680px;
        width: 100%;
        box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        text-align: center;
        animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      }

      @keyframes scaleIn {
        from { transform: scale(0.92); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }

      /* Animated Visual Breathing Circle 4-7-8 */
      .breathing-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 28px 0;
        height: 240px;
      }

      .breathing-circle {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        background: radial-gradient(circle, #e0f2f1 0%, #b2dfdb 100%);
        border: 4px solid #26a69a;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 30px rgba(38, 166, 154, 0.3);
        transition: transform 0.8s ease-in-out, background 0.8s ease, border-color 0.8s ease;
      }

      .breathing-circle.inhale {
        transform: scale(1.35);
        background: radial-gradient(circle, #c8e6c9 0%, #a5d6a7 100%);
        border-color: #2e7d32;
        box-shadow: 0 10px 40px rgba(46, 125, 50, 0.4);
      }

      .breathing-circle.hold {
        transform: scale(1.35);
        background: radial-gradient(circle, #fff9c4 0%, #fff59d 100%);
        border-color: #fbc02d;
        box-shadow: 0 10px 40px rgba(251, 192, 45, 0.4);
      }

      .breathing-circle.exhale {
        transform: scale(0.85);
        background: radial-gradient(circle, #e1f5fe 0%, #b3e5fc 100%);
        border-color: #0288d1;
        box-shadow: 0 6px 20px rgba(2, 136, 209, 0.3);
      }

      .breathing-phase-text {
        font-size: 1.25rem;
        font-weight: 700;
        color: #1b5e20;
        margin-bottom: 4px;
      }

      .breathing-timer-text {
        font-family: var(--md-font-mono, monospace);
        font-size: 1.5rem;
        font-weight: 800;
        color: #2e5a44;
      }

      /* Activity containers */
      .activity-card {
        background: var(--md-sys-color-surface, #ffffff);
        border-radius: 18px;
        padding: 28px 32px;
        border: 1px solid rgba(0,0,0,0.08);
        box-shadow: 0 4px 16px rgba(0,0,0,0.03);
      }

      .vocab-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 16px;
        margin-top: 16px;
      }

      .vocab-chip-card {
        background: #f8faf9;
        border: 1px solid #e0e8e4;
        border-radius: 14px;
        padding: 16px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .vocab-chip-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        border-color: #81c784;
      }

      .interactive-option {
        background: #ffffff;
        border: 1.5px solid #cfd8dc;
        border-radius: 12px;
        padding: 14px 18px;
        margin-bottom: 10px;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 0.98rem;
        color: #37474f;
      }

      .interactive-option:hover {
        border-color: #2e5a44;
        background: #f1f8f5;
      }

      .interactive-option.correct {
        background: #e8f5e9 !important;
        border-color: #2e7d32 !important;
        color: #1b5e20 !important;
        font-weight: 600;
      }

      .interactive-option.incorrect {
        background: #fff3e0 !important;
        border-color: #ef6c00 !important;
        color: #e65100 !important;
      }

      .feedback-box {
        margin-top: 12px;
        padding: 14px 18px;
        border-radius: 12px;
        font-size: 0.92rem;
        line-height: 1.5;
        animation: fadeIn 0.25s ease;
      }

      .feedback-box.correct {
        background: #e8f5e9;
        border: 1px solid #a5d6a7;
        color: #1b5e20;
      }

      .feedback-box.incorrect {
        background: #fff3e0;
        border: 1px solid #ffcc80;
        color: #e65100;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(4px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .word-count-badge {
        font-weight: 700;
        padding: 6px 14px;
        border-radius: 20px;
        font-size: 0.85rem;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }

      .word-count-badge.under {
        background: #ffebee;
        color: #c62828;
        border: 1px solid #ffcdd2;
      }

      .word-count-badge.optimal {
        background: #e8f5e9;
        color: #2e7d32;
        border: 1px solid #c8e6c9;
      }

      .word-count-badge.over {
        background: #fff8e1;
        color: #f57f17;
        border: 1px solid #fff59d;
      }

      .pillar-selector-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
        gap: 16px;
        margin: 20px 0;
      }

      .pillar-card {
        background: var(--md-sys-color-surface, #ffffff);
        border: 2px solid #e0e0e0;
        border-radius: 16px;
        padding: 20px;
        cursor: pointer;
        transition: all 0.25s ease;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .pillar-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
      }

      .pillar-card.selected {
        border-color: var(--pillar-color, #2e5a44);
        background: linear-gradient(180deg, #ffffff 0%, rgba(46, 90, 68, 0.05) 100%);
        box-shadow: 0 6px 20px rgba(46, 90, 68, 0.15);
      }

      /* Completion recap */
      .completion-modal {
        background: #ffffff;
        border-radius: 24px;
        padding: 40px;
        max-width: 600px;
        width: 100%;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0,0,0,0.25);
      }

      .badge-reward-display {
        background: linear-gradient(135deg, #fff9c4 0%, #fff176 100%);
        border: 2px solid #fbc02d;
        border-radius: 20px;
        padding: 20px;
        margin: 20px 0;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        box-shadow: 0 6px 20px rgba(251, 192, 45, 0.3);
      }
    `;
    document.head.appendChild(style);
  }

  // =========================================================================
  // RENDERING PRINCIPAL
  // =========================================================================

  render() {
    if (!this.container) return;

    if (this.sessionActive) {
      this.renderSessionRunner();
    } else {
      this.renderOverview();
    }
  }

  renderOverview() {
    const parcoursA = this.dataset?.parcoursA || window.journeyDataset?.parcoursA;
    const parcoursB = this.dataset?.parcoursB || window.journeyDataset?.parcoursB;

    this.container.innerHTML = `
      <div class="sessions-wrapper">
        <!-- Hero Header -->
        <div class="sessions-hero-card">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px;">
            <div>
              <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
                <span class="material-icons-round" style="color:var(--md-sys-color-primary, #2e5a44); font-size:28px;">self_improvement</span>
                <span style="font-size:0.85rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:var(--md-sys-color-primary, #2e5a44);">Entraînement Intensif & Sérénité</span>
              </div>
              <h2 style="margin:0 0 10px 0; font-family:var(--md-font-serif, 'Lora', serif); font-size:1.85rem; color:var(--md-sys-color-on-surface, #1e293b);">
                Double Parcours Anti-Stress (> 2h)
              </h2>
              <p style="margin:0; font-size:1rem; color:var(--md-sys-color-on-surface-variant, #475569); max-width:680px; line-height:1.5;">
                Préparez le DELF B2 en toute fluidité grâce à deux approches complémentaires : le séquençage dynamique alterné (anti-fatigue) et l'immersion sociétale thématique.
              </p>
            </div>
            
            <!-- Quick Stats Pill -->
            <div style="background:rgba(255,255,255,0.8); border:1px solid rgba(0,0,0,0.08); border-radius:16px; padding:14px 20px; display:flex; gap:18px; align-items:center;">
              <div style="text-align:center;">
                <div style="font-size:1.3rem; font-weight:800; color:#2e5a44;">${this.stats.totalSessions || 0}</div>
                <div style="font-size:0.75rem; color:#64748b; font-weight:600;">Sessions 2h</div>
              </div>
              <div style="width:1px; height:32px; background:#cbd5e1;"></div>
              <div style="text-align:center;">
                <div style="font-size:1.3rem; font-weight:800; color:#b78103;">+${this.stats.totalXp || 0} XP</div>
                <div style="font-size:0.75rem; color:#64748b; font-weight:600;">Gagnés</div>
              </div>
              <div style="width:1px; height:32px; background:#cbd5e1;"></div>
              <div style="text-align:center;">
                <div style="font-size:1.3rem; font-weight:800; color:#e11d48;">🔥 ${this.stats.streak || 1}</div>
                <div style="font-size:0.75rem; color:#64748b; font-weight:600;">Jours série</div>
              </div>
            </div>
          </div>

          <!-- Mode Selector Tabs -->
          <div class="sessions-mode-nav">
            <button class="sessions-mode-tab ${this.activeMode === 'parcours-a' ? 'active' : ''}" id="tab-mode-parcours-a">
              <span class="material-icons-round" style="font-size:20px;">autorenew</span>
              Parcours A : Séquences Alternées (Anti-Fatigue)
            </button>
            <button class="sessions-mode-tab ${this.activeMode === 'parcours-b' ? 'active' : ''}" id="tab-mode-parcours-b">
              <span class="material-icons-round" style="font-size:20px;">public</span>
              Parcours B : Immersion Thématique Sociétale
            </button>
          </div>
        </div>

        <!-- Mode Content Overview -->
        <div id="sessions-mode-detail-container">
          ${this.activeMode === 'parcours-a' ? this.getParcoursAOverviewHTML(parcoursA) : this.getParcoursBOverviewHTML(parcoursB)}
        </div>
      </div>
    `;

    this.bindOverviewEvents();
  }

  getParcoursAOverviewHTML(parcoursA) {
    if (!parcoursA) return '<p>Données Parcours A en cours de chargement...</p>';

    return `
      <div class="activity-card" style="display:flex; flex-direction:column; gap:24px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px;">
          <div>
            <span style="background:#e8f5e9; color:#2e7d32; font-weight:700; font-size:0.8rem; padding:4px 12px; border-radius:12px;">5 BLOCS • 120 MINUTES • 4 MICRO-PAUSES</span>
            <h3 style="margin:8px 0 4px 0; font-size:1.4rem; color:#1e293b;">${parcoursA.title}</h3>
            <p style="margin:0; font-size:0.95rem; color:#64748b;">${parcoursA.description}</p>
          </div>
          <button class="md-button md-button--filled" id="start-session-btn" style="background:#2e5a44; color:#ffffff; padding:12px 28px; font-size:1rem; border-radius:14px; font-weight:700; display:flex; align-items:center; gap:8px; cursor:pointer;">
            <span class="material-icons-round">play_arrow</span> Démarrer la session de 2h
          </button>
        </div>

        <!-- Timeline preview -->
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px; padding:20px;">
          <h4 style="margin:0 0 16px 0; font-size:1rem; color:#334155; display:flex; align-items:center; gap:8px;">
            <span class="material-icons-round" style="color:#2e5a44;">schedule</span> Programme chronométré de la session
          </h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:14px;">
            ${parcoursA.blocks.map((b, idx) => `
              <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:14px; border-left:4px solid #2e5a44;">
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:700; color:#64748b; margin-bottom:4px;">
                  <span>BLOC ${idx + 1}</span>
                  <span style="color:#2e5a44;">⏱️ ${b.durationMin} min</span>
                </div>
                <div style="font-weight:700; font-size:0.92rem; color:#1e293b; margin-bottom:6px;">${b.name}</div>
                <div style="font-size:0.8rem; color:#64748b; line-height:1.4;">${b.description.slice(0, 75)}...</div>
                ${b.microPauseAfter ? `
                  <div style="margin-top:10px; padding:6px 8px; background:#e0f2f1; border-radius:8px; font-size:0.75rem; color:#00695c; font-weight:600; display:flex; align-items:center; gap:4px;">
                    <span class="material-icons-round" style="font-size:14px;">spa</span> Pause ${b.microPauseAfter.durationMin}m (${b.microPauseAfter.type})
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Anti-stress benefits -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:16px;">
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <span class="material-icons-round" style="color:#2e5a44; font-size:24px; background:#e8f5e9; padding:8px; border-radius:10px;">psychology</span>
            <div>
              <strong style="font-size:0.92rem; color:#1e293b;">Zéro Saturation Cognitive</strong>
              <p style="margin:2px 0 0 0; font-size:0.82rem; color:#64748b;">Alternance continue des compétences (oral, grammaire, écrit, lecture) pour stimuler différents centres cérébraux.</p>
            </div>
          </div>
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <span class="material-icons-round" style="color:#0288d1; font-size:24px; background:#e1f5fe; padding:8px; border-radius:10px;">air</span>
            <div>
              <strong style="font-size:0.92rem; color:#1e293b;">Micro-Pauses Actives 4-7-8</strong>
              <p style="margin:2px 0 0 0; font-size:0.82rem; color:#64748b;">Respiration guidée, pauses oculaires 20-20-20 et hydratation pour maintenir une concentration maximale.</p>
            </div>
          </div>
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <span class="material-icons-round" style="color:#b78103; font-size:24px; background:#fff9c4; padding:8px; border-radius:10px;">military_tech</span>
            <div>
              <strong style="font-size:0.92rem; color:#1e293b;">+400 XP & Badges</strong>
              <p style="margin:2px 0 0 0; font-size:0.82rem; color:#64748b;">+50 XP par bloc validé + un bonus triomphal de +150 XP à la fin de la session de 2 heures.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  getParcoursBOverviewHTML(parcoursB) {
    if (!parcoursB) return '<p>Données Parcours B en cours de chargement...</p>';

    return `
      <div class="activity-card" style="display:flex; flex-direction:column; gap:24px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px;">
          <div>
            <span style="background:#e3f2fd; color:#1565c0; font-weight:700; font-size:0.8rem; padding:4px 12px; border-radius:12px;">4 PILIERS MAJEURS • 120 MINUTES PAR MODULE</span>
            <h3 style="margin:8px 0 4px 0; font-size:1.4rem; color:#1e293b;">${parcoursB.title}</h3>
            <p style="margin:0; font-size:0.95rem; color:#64748b;">${parcoursB.description}</p>
          </div>
          <button class="md-button md-button--filled" id="start-session-btn" style="background:#1565c0; color:#ffffff; padding:12px 28px; font-size:1rem; border-radius:14px; font-weight:700; display:flex; align-items:center; gap:8px; cursor:pointer;">
            <span class="material-icons-round">play_arrow</span> Démarrer ce Pilier (2h)
          </button>
        </div>

        <!-- Pillar Selector Cards -->
        <div>
          <div style="font-size:0.9rem; font-weight:700; color:#475569; margin-bottom:12px;">Choisissez votre grand débat thématique :</div>
          <div class="pillar-selector-grid">
            ${parcoursB.pillars.map(p => `
              <div class="pillar-card ${this.activePillarId === p.id ? 'selected' : ''}" data-pillar-id="${p.id}" style="--pillar-color:${p.color};">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="material-icons-round" style="color:${p.color}; font-size:28px;">${p.icon}</span>
                  <span style="font-size:0.75rem; font-weight:700; color:${p.color}; background:${p.color}15; padding:3px 8px; border-radius:8px;">120 MIN</span>
                </div>
                <div style="font-weight:700; font-size:1rem; color:#1e293b; line-height:1.3;">${p.title}</div>
                <div style="font-size:0.8rem; color:#64748b; line-height:1.4;">${p.description}</div>
                <div style="margin-top:auto; font-size:0.78rem; font-weight:600; color:${p.color}; display:flex; align-items:center; gap:4px;">
                  <span class="material-icons-round" style="font-size:14px;">check_circle</span> 16 termes • Presse • Débat • PE
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  bindOverviewEvents() {
    const tabA = document.getElementById('tab-mode-parcours-a');
    const tabB = document.getElementById('tab-mode-parcours-b');
    const startBtn = document.getElementById('start-session-btn');

    if (tabA) {
      tabA.addEventListener('click', () => {
        this.activeMode = 'parcours-a';
        this.render();
      });
    }

    if (tabB) {
      tabB.addEventListener('click', () => {
        this.activeMode = 'parcours-b';
        this.render();
      });
    }

    const pillarCards = this.container.querySelectorAll('.pillar-card');
    pillarCards.forEach(card => {
      card.addEventListener('click', () => {
        this.activePillarId = card.getAttribute('data-pillar-id');
        this.render();
      });
    });

    if (startBtn) {
      startBtn.addEventListener('click', () => {
        this.startSession(this.activeMode, this.activePillarId);
      });
    }
  }

  // =========================================================================
  // CONTRÔLEUR DE SESSION (TIMER & RUNNER)
  // =========================================================================

  startSession(mode = 'parcours-a', pillarId = 'pilier-1-travail-economie') {
    this.activeMode = mode;
    this.activePillarId = pillarId;
    this.sessionActive = true;
    this.sessionPaused = false;
    this.currentBlockIndex = 0;
    this.activePillarStation = 0;
    this.globalSecondsRemaining = 120 * 60; // 2h = 7200s
    this.sessionXpEarned = 0;
    this.sessionAnswers = {};
    this.sessionScores = { correct: 0, total: 0 };
    this.draftText = '';

    if (this.activeMode === 'parcours-a') {
      const parcoursA = this.dataset?.parcoursA || window.journeyDataset?.parcoursA;
      this.blockSecondsRemaining = (parcoursA?.blocks[0]?.durationMin || 20) * 60;
    } else {
      this.blockSecondsRemaining = 25 * 60;
    }

    this.startTimers();
    this.saveOngoingProgress();
    this.render();
  }

  startTimers() {
    this.stopTimers();
    this.timerInterval = setInterval(() => {
      if (!this.sessionPaused && !this.inMicroPause) {
        if (this.globalSecondsRemaining > 0) {
          this.globalSecondsRemaining--;
        }

        if (this.blockSecondsRemaining > 0) {
          this.blockSecondsRemaining--;
        } else {
          // Block completed, trigger micro pause or advance
          this.onBlockTimeExpired();
        }

        this.updateTimerDisplays();

        if (this.globalSecondsRemaining === 0) {
          this.completeSession();
        }
      }
    }, 1000);
  }

  stopTimers() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  togglePause() {
    this.sessionPaused = !this.sessionPaused;
    this.renderSessionRunner();
  }

  updateTimerDisplays() {
    const globalEl = document.getElementById('session-global-timer');
    const blockEl = document.getElementById('session-block-timer');

    if (globalEl) {
      const hrs = Math.floor(this.globalSecondsRemaining / 3600);
      const mins = Math.floor((this.globalSecondsRemaining % 3600) / 60);
      const secs = this.globalSecondsRemaining % 60;
      globalEl.textContent = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    if (blockEl) {
      const mins = Math.floor(this.blockSecondsRemaining / 60);
      const secs = this.blockSecondsRemaining % 60;
      blockEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  }

  onBlockTimeExpired() {
    // Check if micro-pause is defined after this block
    if (this.activeMode === 'parcours-a') {
      const parcoursA = this.dataset?.parcoursA || window.journeyDataset?.parcoursA;
      const currentBlock = parcoursA?.blocks[this.currentBlockIndex];
      if (currentBlock?.microPauseAfter) {
        this.triggerMicroPause(currentBlock.microPauseAfter);
        return;
      }
    }
    this.nextBlock();
  }

  nextBlock() {
    if (this.activeMode === 'parcours-a') {
      const parcoursA = this.dataset?.parcoursA || window.journeyDataset?.parcoursA;
      if (this.currentBlockIndex < (parcoursA?.blocks?.length || 5) - 1) {
        this.sessionXpEarned += 50; // +50 XP per block
        this.currentBlockIndex++;
        const nextBlock = parcoursA.blocks[this.currentBlockIndex];
        this.blockSecondsRemaining = (nextBlock.durationMin || 20) * 60;
        this.saveOngoingProgress();
        this.renderSessionRunner();
      } else {
        this.completeSession();
      }
    } else {
      if (this.activePillarStation < 5) {
        this.sessionXpEarned += 50;
        this.activePillarStation++;
        this.blockSecondsRemaining = 20 * 60;
        this.saveOngoingProgress();
        this.renderSessionRunner();
      } else {
        this.completeSession();
      }
    }
  }

  // =========================================================================
  // MICRO-PAUSES ACTIVES & RESPIRATION GUIDÉE 4-7-8
  // =========================================================================

  triggerMicroPause(pauseData) {
    this.inMicroPause = true;
    this.microPauseSecondsRemaining = (pauseData?.durationMin || 2) * 60;
    this.breathingPhase = 'inhale';
    this.breathingTimer = 4;
    this.breathingCycleCount = 1;

    this.renderMicroPauseModal(pauseData);
    this.startMicroPauseTimers(pauseData);
  }

  startMicroPauseTimers(pauseData) {
    if (this.microPauseInterval) clearInterval(this.microPauseInterval);
    if (this.breathingInterval) clearInterval(this.breathingInterval);

    // Global pause countdown
    this.microPauseInterval = setInterval(() => {
      if (this.microPauseSecondsRemaining > 0) {
        this.microPauseSecondsRemaining--;
        const timerEl = document.getElementById('micro-pause-countdown');
        if (timerEl) {
          const mins = Math.floor(this.microPauseSecondsRemaining / 60);
          const secs = this.microPauseSecondsRemaining % 60;
          timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
      } else {
        this.closeMicroPause();
      }
    }, 1000);

    // 4-7-8 Breathing state machine
    this.breathingInterval = setInterval(() => {
      this.breathingTimer--;
      const timerText = document.getElementById('breathing-timer-count');
      if (timerText) timerText.textContent = `${this.breathingTimer}s`;

      if (this.breathingTimer <= 0) {
        const circle = document.getElementById('breathing-visual-circle');
        const phaseText = document.getElementById('breathing-phase-name');

        if (this.breathingPhase === 'inhale') {
          this.breathingPhase = 'hold';
          this.breathingTimer = 7;
          if (circle) circle.className = 'breathing-circle hold';
          if (phaseText) phaseText.textContent = 'Retenez votre souffle (7s)';
        } else if (this.breathingPhase === 'hold') {
          this.breathingPhase = 'exhale';
          this.breathingTimer = 8;
          if (circle) circle.className = 'breathing-circle exhale';
          if (phaseText) phaseText.textContent = 'Expirez lentement par la bouche (8s)';
        } else {
          this.breathingPhase = 'inhale';
          this.breathingTimer = 4;
          this.breathingCycleCount++;
          const cycleEl = document.getElementById('breathing-cycle-counter');
          if (cycleEl) cycleEl.textContent = `Cycle ${this.breathingCycleCount} / 4`;
          if (circle) circle.className = 'breathing-circle inhale';
          if (phaseText) phaseText.textContent = 'Inspirez profondément par le nez (4s)';
        }
      }
    }, 1000);
  }

  closeMicroPause() {
    if (this.microPauseInterval) clearInterval(this.microPauseInterval);
    if (this.breathingInterval) clearInterval(this.breathingInterval);
    this.inMicroPause = false;

    const modal = document.getElementById('session-micro-pause-modal');
    if (modal) modal.remove();

    this.nextBlock();
  }

  renderMicroPauseModal(pauseData) {
    const existing = document.getElementById('session-micro-pause-modal');
    if (existing) existing.remove();

    const backdrop = document.createElement('div');
    backdrop.id = 'session-micro-pause-modal';
    backdrop.className = 'micro-pause-modal-backdrop';

    backdrop.innerHTML = `
      <div class="micro-pause-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span style="background:#e0f2f1; color:#00695c; font-weight:700; font-size:0.8rem; padding:4px 12px; border-radius:12px;">
            MICRO-PAUSE SÉRÉNITÉ
          </span>
          <div style="font-family:var(--md-font-mono, monospace); font-weight:700; font-size:1.1rem; color:#00695c;" id="micro-pause-countdown">
            0${pauseData.durationMin}:00
          </div>
        </div>

        <h3 style="margin:0 0 8px 0; font-size:1.4rem; color:#1e293b;">${pauseData.title}</h3>

        <!-- Breathing Animated Visualizer -->
        <div class="breathing-container">
          <div id="breathing-visual-circle" class="breathing-circle inhale">
            <div id="breathing-phase-name" class="breathing-phase-text">Inspirez (4s)</div>
            <div id="breathing-timer-count" class="breathing-timer-text">4s</div>
            <div id="breathing-cycle-counter" style="font-size:0.75rem; color:#37474f; margin-top:4px;">Cycle 1 / 4</div>
          </div>
        </div>

        <!-- Guidance details -->
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:14px; padding:16px; text-align:left; margin-bottom:20px;">
          <div style="font-weight:700; font-size:0.88rem; color:#334155; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
            <span class="material-icons-round" style="color:#00897b; font-size:18px;">lightbulb</span> Consignes & Bienfaits
          </div>
          <ul style="margin:0 0 10px 0; padding-left:20px; font-size:0.85rem; color:#475569; line-height:1.5;">
            ${pauseData.instructions.map(ins => `<li>${ins}</li>`).join('')}
          </ul>
          <div style="font-size:0.8rem; color:#00695c; font-style:italic; border-top:1px dashed #cbd5e1; padding-top:6px;">
            💡 ${pauseData.tip}
          </div>
        </div>

        <!-- Action Button -->
        <button id="resume-after-pause-btn" class="md-button md-button--filled" style="background:#2e5a44; color:#ffffff; width:100%; padding:14px; font-size:1rem; border-radius:14px; font-weight:700; cursor:pointer;">
          Reprendre la session vers le bloc suivant <span class="material-icons-round" style="vertical-align:middle;">arrow_forward</span>
        </button>
      </div>
    `;

    document.body.appendChild(backdrop);

    document.getElementById('resume-after-pause-btn')?.addEventListener('click', () => {
      this.closeMicroPause();
    });
  }

  // =========================================================================
  // RUNNER UI & ACTIVITÉS INTERACTIVES
  // =========================================================================

  renderSessionRunner() {
    const isParcoursA = this.activeMode === 'parcours-a';
    const datasetA = this.dataset?.parcoursA || window.journeyDataset?.parcoursA;
    const datasetB = this.dataset?.parcoursB || window.journeyDataset?.parcoursB;
    const currentPillar = datasetB?.pillars?.find(p => p.id === this.activePillarId) || datasetB?.pillars?.[0];

    const currentBlock = isParcoursA ? datasetA?.blocks[this.currentBlockIndex] : null;

    this.container.innerHTML = `
      <div class="sessions-wrapper">
        <!-- Top Runner Bar -->
        <div class="session-runner-bar">
          <div style="display:flex; align-items:center; gap:12px;">
            <button class="md-icon-button" id="quit-session-btn" title="Quitter la session" style="background:#f1f5f9; border-radius:10px; border:none; padding:8px; cursor:pointer;">
              <span class="material-icons-round" style="color:#64748b;">close</span>
            </button>
            <div>
              <div style="font-size:0.75rem; font-weight:700; color:#64748b; text-transform:uppercase;">
                ${isParcoursA ? 'PARCOURS A • SÉQUENCES ALTERNÉES' : `PARCOURS B • ${currentPillar?.title}`}
              </div>
              <h3 style="margin:0; font-size:1.15rem; color:#1e293b;">
                ${isParcoursA ? currentBlock?.name : this.getPillarStationTitle(this.activePillarStation)}
              </h3>
            </div>
          </div>

          <!-- Timers & XP -->
          <div style="display:flex; align-items:center; gap:16px;">
            <!-- Block timer -->
            <div class="timer-badge" title="Temps restant sur ce bloc">
              <span class="material-icons-round" style="font-size:18px;">hourglass_top</span>
              <span id="session-block-timer">--:--</span>
            </div>

            <!-- Global 2h timer -->
            <div class="timer-badge warning" title="Temps global restant (Session 2h)">
              <span class="material-icons-round" style="font-size:18px;">timer</span>
              <span id="session-global-timer">02:00:00</span>
            </div>

            <!-- Session XP Badge -->
            <div style="background:#fff9c4; border:1px solid #fbc02d; padding:8px 14px; border-radius:12px; font-weight:800; color:#b78103; font-size:0.95rem;">
              +${this.sessionXpEarned} XP
            </div>

            <!-- Controls -->
            <button class="md-button" id="session-pause-btn" style="background:#e2e8f0; border:none; padding:8px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
              ${this.sessionPaused ? 'Reprendre' : 'Pause'}
            </button>
            <button class="md-button" id="session-skip-block-btn" style="background:#2e5a44; color:#fff; border:none; padding:8px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
              Suivant <span class="material-icons-round" style="font-size:16px; vertical-align:middle;">skip_next</span>
            </button>
          </div>
        </div>

        <!-- Stepper timeline -->
        <div class="stepper-timeline">
          ${isParcoursA ? datasetA.blocks.map((b, idx) => `
            <div class="stepper-step ${idx === this.currentBlockIndex ? 'active' : (idx < this.currentBlockIndex ? 'completed' : '')}">
              <div class="step-circle">${idx < this.currentBlockIndex ? '✓' : idx + 1}</div>
              <div class="step-label">${b.name.split('&')[0]}</div>
            </div>
          `).join('') : [
            '1. Vocabulaire', '2. Connecteurs', '3. Dossier Presse', '4. Débat Oral', '5. Production Écrite', '6. Défi Validation'
          ].map((st, idx) => `
            <div class="stepper-step ${idx === this.activePillarStation ? 'active' : (idx < this.activePillarStation ? 'completed' : '')}">
              <div class="step-circle">${idx < this.activePillarStation ? '✓' : idx + 1}</div>
              <div class="step-label">${st}</div>
            </div>
          `).join('')}
        </div>

        <!-- Activity Dynamic Container -->
        <div id="session-activity-body">
          ${isParcoursA ? this.renderParcoursABlockActivity(currentBlock) : this.renderParcoursBPillarStation(currentPillar, this.activePillarStation)}
        </div>
      </div>
    `;

    this.bindRunnerEvents();
    this.updateTimerDisplays();
  }

  getPillarStationTitle(stationIdx) {
    const titles = [
      'Station 1 : Vocabulaire spécialisé (16 termes B2)',
      'Station 2 : Boîte à connecteurs argumentatifs',
      'Station 3 : Compréhension écrite & Analyse de presse',
      'Station 4 : Compréhension orale & Débat radiophonique',
      'Station 5 : Atelier de Production Écrite & Modèle d\'Excellence',
      'Station 6 : Défi de validation & Consolidation thématique'
    ];
    return titles[stationIdx] || 'Station active';
  }

  renderParcoursABlockActivity(block) {
    if (!block) return '<p>Bloc introuvable.</p>';

    if (block.module === 'listening') {
      return `
        <div class="activity-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <h3 style="margin:0; font-size:1.3rem; color:#1e293b;">1. Lexique B2 & Écoute active</h3>
            <span style="font-size:0.85rem; color:#2e5a44; font-weight:700;">4 Questions • 10 Flashcards</span>
          </div>

          <!-- Vocab chips -->
          <div style="margin-bottom:24px;">
            <div style="font-size:0.9rem; font-weight:700; color:#475569; margin-bottom:8px;">Vocabulaire clé du bloc :</div>
            <div class="vocab-grid">
              ${block.vocabulary.map(v => `
                <div class="vocab-chip-card">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <strong style="color:#1e293b; font-size:0.95rem;">${v.term}</strong>
                    <span style="font-size:0.75rem; color:#64748b; font-style:italic;">${v.type}</span>
                  </div>
                  <div style="font-size:0.85rem; color:#475569; margin:6px 0;">${v.definition}</div>
                  <div style="font-size:0.8rem; color:#2e7d32; font-style:italic;">« ${v.example} »</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Listening Transcript & Questions -->
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px; padding:20px; margin-bottom:24px;">
            <div style="font-weight:700; font-size:1rem; color:#1e293b; margin-bottom:6px;">📻 ${block.listening.title}</div>
            <p style="font-size:0.85rem; color:#64748b; margin-bottom:14px;">${block.listening.context}</p>
            ${block.listening.transcript}
          </div>

          <!-- Interactive Questions -->
          <div>
            <div style="font-size:1rem; font-weight:700; color:#1e293b; margin-bottom:14px;">Questions de compréhension fine :</div>
            ${block.listening.questions.map((q, qIdx) => this.renderInteractiveQuestionHTML(q, qIdx, 'pa_b1')).join('')}
          </div>
        </div>
      `;
    }

    if (block.module === 'grammar') {
      return `
        <div class="activity-card">
          <h3 style="margin:0 0 16px 0; font-size:1.3rem; color:#1e293b;">2. Grammaire ciblée & Précision morphosyntaxique B2</h3>
          
          <!-- Rules fiches -->
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:14px; margin-bottom:24px;">
            ${block.ruleSummaries.map(r => `
              <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px; padding:16px;">
                <div style="font-weight:700; font-size:0.92rem; color:#166534; margin-bottom:6px;">${r.title}</div>
                <div style="font-size:0.85rem; color:#14532d; line-height:1.5;">${r.content}</div>
              </div>
            `).join('')}
          </div>

          <!-- Questions -->
          <div>
            <div style="font-size:1rem; font-weight:700; color:#1e293b; margin-bottom:14px;">Drill de validation immédiate (6 questions) :</div>
            ${block.questions.map((q, qIdx) => this.renderInteractiveQuestionHTML(q, qIdx, 'pa_b2')).join('')}
          </div>
        </div>
      `;
    }

    if (block.module === 'reading') {
      return `
        <div class="activity-card">
          <h3 style="margin:0 0 16px 0; font-size:1.3rem; color:#1e293b;">3. Compréhension écrite & Analyse de presse</h3>
          
          <!-- Article Box -->
          <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:16px; padding:24px; margin-bottom:24px; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
            <div style="font-size:0.8rem; color:#64748b; font-weight:600; text-transform:uppercase;">${block.article.source} • ${block.article.wordCount} mots</div>
            <h4 style="margin:6px 0 14px 0; font-family:var(--md-font-serif, 'Lora', serif); font-size:1.35rem; color:#0f172a;">${block.article.title}</h4>
            <div style="font-size:0.95rem; line-height:1.7; color:#334155; font-family:var(--md-font-serif, 'Lora', serif);">
              ${block.article.text}
            </div>
          </div>

          <!-- Questions -->
          <div>
            <div style="font-size:1rem; font-weight:700; color:#1e293b; margin-bottom:14px;">Questionnaire d'analyse de presse :</div>
            ${block.article.questions.map((q, qIdx) => this.renderInteractiveQuestionHTML(q, qIdx, 'pa_b3')).join('')}
          </div>
        </div>
      `;
    }

    if (block.module === 'writing') {
      return `
        <div class="activity-card">
          <h3 style="margin:0 0 16px 0; font-size:1.3rem; color:#1e293b;">4. Atelier d'argumentation écrite (PE B2)</h3>
          
          <!-- Topic Box -->
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px; padding:20px; margin-bottom:20px;">
            <div style="font-weight:700; font-size:1.05rem; color:#1e293b; margin-bottom:8px;">${block.writingTopic.title}</div>
            ${block.writingTopic.prompt}
          </div>

          <!-- Methodological & Connector chips -->
          <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:16px;">
            <span style="font-size:0.85rem; font-weight:700; color:#475569; align-self:center;">Connecteurs recommandés :</span>
            ${block.writingTopic.connectors.map(c => `
              <span style="background:#e0f2fe; color:#0369a1; padding:4px 10px; border-radius:12px; font-size:0.8rem; font-weight:600;">${c}</span>
            `).join('')}
          </div>

          <!-- Live Textarea with word counter -->
          <div style="margin-bottom:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <label style="font-weight:700; font-size:0.9rem; color:#334155;">Votre rédaction :</label>
              <div id="session-word-counter" class="word-count-badge under">0 mot (Objectif : 250 mots)</div>
            </div>
            <textarea id="session-writing-textarea" style="width:100%; min-height:220px; padding:16px; border:1.5px solid #cbd5e1; border-radius:14px; font-family:inherit; font-size:0.95rem; line-height:1.6; resize:vertical;" placeholder="Rédigez votre lettre ou article argumenté ici...">${this.draftText}</textarea>
          </div>

          <!-- Toggle Sample Solution -->
          <div>
            <button id="toggle-sample-solution-btn" class="md-button" style="background:#f1f5f9; border:1px solid #cbd5e1; padding:8px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
              👁️ Consulter le modèle d'excellence corrigé (255 mots)
            </button>
            <div id="sample-solution-box" style="display:none; margin-top:14px; background:#f0fdf4; border:1px solid #86efac; border-radius:14px; padding:20px; font-family:var(--md-font-serif, 'Lora', serif); line-height:1.7; font-size:0.92rem; white-space:pre-wrap; color:#14532d;">
${block.writingTopic.sampleAnswer}
            </div>
          </div>
        </div>
      `;
    }

    if (block.module === 'synthesis') {
      return `
        <div class="activity-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <div>
              <span style="background:#fef3c7; color:#92400e; font-weight:700; font-size:0.8rem; padding:4px 10px; border-radius:10px;">SPRINT FINAL</span>
              <h3 style="margin:6px 0 0 0; font-size:1.3rem; color:#1e293b;">5. Défi récapitulatif & Consolidation</h3>
            </div>
            <div style="font-size:0.9rem; font-weight:700; color:#b45309;">Bonus : +150 XP 🏆</div>
          </div>

          <p style="font-size:0.9rem; color:#64748b; margin-bottom:20px;">
            Validez les 6 questions transversales pour couronner votre session de 2 heures et débloquer le badge d'endurance B2.
          </p>

          <div>
            ${block.questions.map((q, qIdx) => this.renderInteractiveQuestionHTML(q, qIdx, 'pa_b5')).join('')}
          </div>
        </div>
      `;
    }

    return '';
  }

  renderParcoursBPillarStation(pillar, stationIdx) {
    if (!pillar) return '<p>Pilier introuvable.</p>';

    if (stationIdx === 0) {
      return `
        <div class="activity-card">
          <h3 style="margin:0 0 8px 0; font-size:1.3rem; color:#1e293b;">1. Vocabulaire spécialisé : ${pillar.title}</h3>
          <p style="font-size:0.9rem; color:#64748b; margin-bottom:18px;">Maîtrisez les 16 notions décisives du débat.</p>
          <div class="vocab-grid">
            ${pillar.vocabulary.map(v => `
              <div class="vocab-chip-card">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <strong style="color:#1e293b; font-size:0.95rem;">${v.term}</strong>
                  <span style="font-size:0.75rem; color:#64748b; font-style:italic;">${v.type}</span>
                </div>
                <div style="font-size:0.85rem; color:#475569; margin:6px 0;">${v.definition}</div>
                <div style="font-size:0.8rem; color:#2e7d32; font-style:italic;">« ${v.example} »</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (stationIdx === 1) {
      return `
        <div class="activity-card">
          <h3 style="margin:0 0 8px 0; font-size:1.3rem; color:#1e293b;">2. Boîte à connecteurs d'idées & Nuances B2</h3>
          <p style="font-size:0.9rem; color:#64748b; margin-bottom:18px;">Les articulateurs logiques clés pour enrichir vos argumentations.</p>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:14px;">
            ${pillar.connectors.map(c => `
              <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:12px; padding:16px;">
                <div style="font-weight:700; font-size:1.05rem; color:#0369a1; margin-bottom:4px;">${c.connector}</div>
                <div style="font-size:0.85rem; color:#475569; margin-bottom:6px;">${c.usage}</div>
                <div style="font-size:0.82rem; color:#15803d; font-style:italic;">Exemple : « ${c.example} »</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (stationIdx === 2) {
      return `
        <div class="activity-card">
          <h3 style="margin:0 0 8px 0; font-size:1.3rem; color:#1e293b;">3. Compréhension écrite : Dossier de presse</h3>
          <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:16px; padding:24px; margin:16px 0 24px 0;">
            <div style="font-size:0.8rem; color:#64748b; font-weight:600;">${pillar.pressArticle.source} • ${pillar.pressArticle.wordCount} mots</div>
            <h4 style="margin:6px 0 14px 0; font-family:var(--md-font-serif, 'Lora', serif); font-size:1.35rem; color:#0f172a;">${pillar.pressArticle.title}</h4>
            <div style="font-size:0.95rem; line-height:1.7; color:#334155; font-family:var(--md-font-serif, 'Lora', serif);">
              ${pillar.pressArticle.text}
            </div>
          </div>
          <div>
            <div style="font-size:1rem; font-weight:700; color:#1e293b; margin-bottom:14px;">Questions de compréhension fine :</div>
            ${pillar.pressArticle.questions.map((q, qIdx) => this.renderInteractiveQuestionHTML(q, qIdx, `pb_p${pillar.pillarIndex}_art`)).join('')}
          </div>
        </div>
      `;
    }

    if (stationIdx === 3) {
      return `
        <div class="activity-card">
          <h3 style="margin:0 0 8px 0; font-size:1.3rem; color:#1e293b;">4. Compréhension orale : Débat radiophonique</h3>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px; padding:20px; margin:16px 0 24px 0;">
            <div style="font-weight:700; font-size:1.05rem; color:#1e293b; margin-bottom:6px;">🎙️ ${pillar.listeningDebate.title} (${pillar.listeningDebate.duration})</div>
            ${pillar.listeningDebate.transcript}
          </div>
          <div>
            <div style="font-size:1rem; font-weight:700; color:#1e293b; margin-bottom:14px;">Questions sur le débat :</div>
            ${pillar.listeningDebate.questions.map((q, qIdx) => this.renderInteractiveQuestionHTML(q, qIdx, `pb_p${pillar.pillarIndex}_co`)).join('')}
          </div>
        </div>
      `;
    }

    if (stationIdx === 4) {
      return `
        <div class="activity-card">
          <h3 style="margin:0 0 8px 0; font-size:1.3rem; color:#1e293b;">5. Atelier de Production Écrite & Modèle d'Excellence</h3>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px; padding:20px; margin:16px 0;">
            <div style="font-weight:700; font-size:1.05rem; color:#1e293b; margin-bottom:8px;">${pillar.writingSubject.title}</div>
            ${pillar.writingSubject.prompt}
          </div>
          <div style="margin-bottom:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <label style="font-weight:700; font-size:0.9rem; color:#334155;">Votre rédaction :</label>
              <div id="session-word-counter" class="word-count-badge under">0 mot (Objectif : 250 mots)</div>
            </div>
            <textarea id="session-writing-textarea" style="width:100%; min-height:220px; padding:16px; border:1.5px solid #cbd5e1; border-radius:14px; font-family:inherit; font-size:0.95rem; line-height:1.6; resize:vertical;" placeholder="Rédigez votre texte argumenté...">${this.draftText}</textarea>
          </div>
          <div>
            <button id="toggle-sample-solution-btn" class="md-button" style="background:#f1f5f9; border:1px solid #cbd5e1; padding:8px 16px; border-radius:10px; font-weight:600; cursor:pointer;">
              👁️ Consulter le corrigé modèle d'excellence (250+ mots)
            </button>
            <div id="sample-solution-box" style="display:none; margin-top:14px; background:#f0fdf4; border:1px solid #86efac; border-radius:14px; padding:20px; font-family:var(--md-font-serif, 'Lora', serif); line-height:1.7; font-size:0.92rem; white-space:pre-wrap; color:#14532d;">
${pillar.writingSubject.sampleAnswer}
            </div>
          </div>
        </div>
      `;
    }

    if (stationIdx === 5) {
      return `
        <div class="activity-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <div>
              <span style="background:#fef3c7; color:#92400e; font-weight:700; font-size:0.8rem; padding:4px 10px; border-radius:10px;">VALIDATION DU PILIER</span>
              <h3 style="margin:6px 0 0 0; font-size:1.3rem; color:#1e293b;">6. Défi de validation & Consolidation</h3>
            </div>
            <div style="font-size:0.9rem; font-weight:700; color:#b45309;">Bonus : +150 XP 🏆</div>
          </div>
          <div>
            ${pillar.thematicDrill.map((q, qIdx) => this.renderInteractiveQuestionHTML(q, qIdx, `pb_p${pillar.pillarIndex}_drill`)).join('')}
          </div>
        </div>
      `;
    }

    return '';
  }

  renderInteractiveQuestionHTML(q, qIdx, prefix) {
    const qKey = `${prefix}_${q.id || qIdx}`;
    const answered = this.sessionAnswers[qKey] !== undefined;
    const selectedIdx = this.sessionAnswers[qKey];

    return `
      <div class="session-q-block" data-qkey="${qKey}" data-correct="${q.correct}" style="margin-bottom:20px; background:#ffffff; border:1px solid #e2e8f0; border-radius:14px; padding:18px;">
        <div style="font-weight:700; font-size:0.95rem; color:#1e293b; margin-bottom:12px;">
          ${qIdx + 1}. ${q.prompt || q.question}
        </div>
        <div class="options-container">
          ${q.options.map((opt, optIdx) => {
            let cls = 'interactive-option';
            if (answered) {
              if (optIdx === q.correct) cls += ' correct';
              else if (optIdx === selectedIdx) cls += ' incorrect';
            }
            return `
              <div class="${cls}" data-opt-idx="${optIdx}" ${answered ? 'style="pointer-events:none;"' : ''}>
                <span style="font-weight:700; font-size:0.85rem; color:#64748b; width:22px;">${String.fromCharCode(65 + optIdx)}.</span>
                <span>${opt}</span>
              </div>
            `;
          }).join('')}
        </div>
        ${answered ? `
          <div class="feedback-box ${selectedIdx === q.correct ? 'correct' : 'incorrect'}">
            <strong>${selectedIdx === q.correct ? '✓ Bravo ! Réponse exacte.' : '✗ Attention.'}</strong> ${q.explanation}
          </div>
        ` : ''}
      </div>
    `;
  }

  bindRunnerEvents() {
    const pauseBtn = document.getElementById('session-pause-btn');
    const skipBtn = document.getElementById('session-skip-block-btn');
    const quitBtn = document.getElementById('quit-session-btn');
    const textarea = document.getElementById('session-writing-textarea');
    const toggleSolBtn = document.getElementById('toggle-sample-solution-btn');
    const solBox = document.getElementById('sample-solution-box');

    if (pauseBtn) {
      pauseBtn.addEventListener('click', () => this.togglePause());
    }

    if (skipBtn) {
      skipBtn.addEventListener('click', () => this.nextBlock());
    }

    if (quitBtn) {
      quitBtn.addEventListener('click', () => {
        if (confirm('Voulez-vous vraiment interrompre la session de 2h en cours ? Votre progression sera sauvegardée.')) {
          this.stopTimers();
          this.sessionActive = false;
          this.saveOngoingProgress();
          this.render();
        }
      });
    }

    if (toggleSolBtn && solBox) {
      toggleSolBtn.addEventListener('click', () => {
        const isHidden = solBox.style.display === 'none';
        solBox.style.display = isHidden ? 'block' : 'none';
        toggleSolBtn.textContent = isHidden ? '🙈 Masquer le modèle d\'excellence' : '👁️ Consulter le modèle d\'excellence corrigé (250+ mots)';
      });
    }

    if (textarea) {
      textarea.addEventListener('input', (e) => {
        this.draftText = e.target.value;
        this.updateWordCounter(this.draftText);
        this.saveOngoingProgress();
      });
      this.updateWordCounter(this.draftText);
    }

    // Option clicks
    const qBlocks = this.container.querySelectorAll('.session-q-block');
    qBlocks.forEach(qb => {
      const qKey = qb.getAttribute('data-qkey');
      const correctIdx = parseInt(qb.getAttribute('data-correct'), 10);
      const options = qb.querySelectorAll('.interactive-option');

      options.forEach(opt => {
        opt.addEventListener('click', () => {
          if (this.sessionAnswers[qKey] !== undefined) return;
          const optIdx = parseInt(opt.getAttribute('data-opt-idx'), 10);
          this.sessionAnswers[qKey] = optIdx;

          if (optIdx === correctIdx) {
            this.sessionScores.correct++;
          }
          this.sessionScores.total++;

          this.saveOngoingProgress();
          this.renderSessionRunner();
        });
      });
    });
  }

  updateWordCounter(text) {
    const badge = document.getElementById('session-word-counter');
    if (!badge) return;

    const words = (text || '').trim().split(/\s+/).filter(w => w.length > 0);
    const count = words.length;

    badge.className = 'word-count-badge';
    if (count < 225) {
      badge.classList.add('under');
      badge.textContent = `${count} mots (Minimum requis : 225 mots)`;
    } else if (count <= 275) {
      badge.classList.add('optimal');
      badge.textContent = `✓ ${count} mots (Zone optimale DELF B2)`;
    } else {
      badge.classList.add('over');
      badge.textContent = `⚠️ ${count} mots (Attention au dépassement)`;
    }
  }

  // =========================================================================
  // CLÔTURE DE SESSION & RÉCOMPENSES
  // =========================================================================

  completeSession() {
    this.stopTimers();
    this.sessionActive = false;

    // Award +150 XP bonus for completion
    this.sessionXpEarned += 150;

    // Identify earned badge
    let earnedBadge = 'Grand Maître de l\'Endurance B2';
    if (this.activeMode === 'parcours-b') {
      const datasetB = this.dataset?.parcoursB || window.journeyDataset?.parcoursB;
      const pillar = datasetB?.pillars?.find(p => p.id === this.activePillarId);
      earnedBadge = pillar?.badge || 'Expert DELF B2';
    }

    // Update global stats
    this.stats.totalSessions = (this.stats.totalSessions || 0) + 1;
    this.stats.totalMinutes = (this.stats.totalMinutes || 0) + 120;
    this.stats.totalXp = (this.stats.totalXp || 0) + this.sessionXpEarned;

    if (!this.stats.badges) this.stats.badges = [];
    if (!this.stats.badges.includes(earnedBadge)) {
      this.stats.badges.push(earnedBadge);
    }

    // Check streak
    const today = new Date().toISOString().slice(0, 10);
    if (this.stats.lastDate !== today) {
      this.stats.streak = (this.stats.streak || 1) + 1;
      this.stats.lastDate = today;
    }

    this.saveStats();

    // Log history record
    const record = {
      date: new Date().toISOString(),
      mode: this.activeMode,
      pillarId: this.activePillarId,
      xpGained: this.sessionXpEarned,
      accuracy: this.sessionScores.total > 0 ? Math.round((this.sessionScores.correct / this.sessionScores.total) * 100) : 100,
      badge: earnedBadge
    };
    this.history.unshift(record);
    this.saveHistory();

    this.clearOngoingProgress();

    this.renderCompletionModal(record);
  }

  renderCompletionModal(record) {
    const backdrop = document.createElement('div');
    backdrop.className = 'micro-pause-modal-backdrop';
    backdrop.innerHTML = `
      <div class="completion-modal">
        <div style="font-size:3.5rem; margin-bottom:10px;">🎉</div>
        <span style="background:#e8f5e9; color:#2e7d32; font-weight:800; font-size:0.85rem; padding:4px 16px; border-radius:20px;">
          SESSION DE 2H TERMINÉE AVEC SUCCÈS !
        </span>
        <h2 style="margin:14px 0 6px 0; font-family:var(--md-font-serif, 'Lora', serif); font-size:1.8rem; color:#1e293b;">
          Félicitations pour votre endurance !
        </h2>
        <p style="margin:0 0 20px 0; font-size:0.95rem; color:#64748b;">
          Vous venez de franchir une étape déterminante vers l'obtention de votre diplôme DELF B2.
        </p>

        <!-- Badge Display -->
        <div class="badge-reward-display">
          <span class="material-icons-round" style="font-size:40px; color:#b78103;">military_tech</span>
          <div style="font-weight:800; font-size:1.15rem; color:#78350f;">${record.badge}</div>
          <div style="font-size:0.8rem; color:#92400e; font-weight:600;">Badge de maîtrise B2 débloqué</div>
        </div>

        <!-- Stats Grid -->
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-bottom:24px;">
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:12px;">
            <div style="font-size:1.25rem; font-weight:800; color:#2e5a44;">+${record.xpGained} XP</div>
            <div style="font-size:0.75rem; color:#64748b; font-weight:600;">XP Gagnés</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:12px;">
            <div style="font-size:1.25rem; font-weight:800; color:#0288d1;">${record.accuracy}%</div>
            <div style="font-size:0.75rem; color:#64748b; font-weight:600;">Précision quiz</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:12px;">
            <div style="font-size:1.25rem; font-weight:800; color:#e11d48;">🔥 ${this.stats.streak}</div>
            <div style="font-size:0.75rem; color:#64748b; font-weight:600;">Jours de suite</div>
          </div>
        </div>

        <button id="close-completion-modal-btn" class="md-button md-button--filled" style="background:#2e5a44; color:#ffffff; width:100%; padding:14px; font-size:1rem; border-radius:14px; font-weight:700; cursor:pointer;">
          Sauvegarder et retourner à l'accueil
        </button>
      </div>
    `;

    document.body.appendChild(backdrop);

    document.getElementById('close-completion-modal-btn')?.addEventListener('click', () => {
      backdrop.remove();
      this.render();
    });
  }
}

// Auto-instanciation globale pour la plateforme SPA
if (typeof window !== 'undefined') {
  window.SessionsModule = SessionsModule;
  window.sessionsModule = new SessionsModule();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SessionsModule };
}
