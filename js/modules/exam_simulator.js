/* ==========================================================================
   MODULE: DELF B2 OFFICIAL EXAM SIMULATOR (France Éducation International)
   2h30 Synchronized Timer, 5-Phase CO Audio Sequencer, Split-Screen CE Reader,
   Intelligent PE Atelier (Word Counter & Connector Highlighter), FEI Rubric,
   Instant Scoring Engine /100, Pass/Fail & Pedagogical Diagnostic
   ========================================================================== */

class ExamSimulatorModule {
  constructor() {
    this.dataset = window.officialExamsDataset || {};
    this.currentExamId = 'delf-b2-fei-ex1';
    this.currentExam = this.getExamData(this.currentExamId);
    
    // Exam Global State
    this.currentSection = 'intro'; // 'intro' | 'co' | 'ce' | 'pe' | 'bilan'
    this.totalDurationSeconds = 150 * 60; // 2h30:00 = 9000 seconds
    this.remainingSeconds = this.totalDurationSeconds;
    this.isTimerRunning = false;
    this.timerInterval = null;
    this.isExamStarted = false;
    this.isExamFinished = false;
    this.isFocusMode = false;

    // User Answers
    this.userAnswers = {
      co: {},
      ce: {},
      pe: {
        text: '',
        rubric: {
          'crit-1': 3,
          'crit-2': 3,
          'crit-3': 3,
          'crit-4': 3,
          'crit-5': 3
        }
      },
      po: {
        score: 0,
        notes: ''
      }
    };

    // Sub-navigation state
    this.activeExercise = {
      co: 0,
      ce: 0
    };

    // CE Reader settings
    this.ceFontSize = 16;
    this.ceHighlights = {}; // { [exerciseId]: Array of text snippets }

    // CO Audio Orchestrator State Machine (5 Phases)
    this.audioState = {
      phase: 'ready', // 'ready' | 'reading' | 'listening_1' | 'pause' | 'listening_2' | 'answering' | 'completed'
      exerciseIdx: 0,
      listeningsCount: 2,
      listeningsDone: 0,
      phaseSecondsRemaining: 0,
      phaseTotalSeconds: 0,
      phaseInterval: null,
      isPlayingAudio: false,
      audioElement: null
    };

    // 50+ B2/C1 Argumentative Logical Connectors for live analysis
    this.connectorCatalogue = [
      // Introduction & Cadrage
      { text: "En premier lieu", category: "Hiérarchie & Ordre", regex: /\ben premier lieu\b/gi },
      { text: "En premier point", category: "Hiérarchie & Ordre", regex: /\ben premier point\b/gi },
      { text: "En second lieu", category: "Hiérarchie & Ordre", regex: /\ben second lieu\b/gi },
      { text: "En deuxième lieu", category: "Hiérarchie & Ordre", regex: /\ben deuxi[èe]me lieu\b/gi },
      { text: "D'une part", category: "Hiérarchie & Ordre", regex: /\bd['’]une part\b/gi },
      { text: "D'autre part", category: "Hiérarchie & Ordre", regex: /\bd['’]autre part\b/gi },
      { text: "Premièrement", category: "Hiérarchie & Ordre", regex: /\bpremi[èe]rement\b/gi },
      { text: "Deuxièmement", category: "Hiérarchie & Ordre", regex: /\bdeuxi[èe]mement\b/gi },
      { text: "Pour commencer", category: "Hiérarchie & Ordre", regex: /\bpour commencer\b/gi },
      { text: "Tout d'abord", category: "Hiérarchie & Ordre", regex: /\btout d['’]abord\b/gi },
      { text: "À l'ère de", category: "Introduction & Cadrage", regex: /(?:^|[\s\b.,;!?:«»"()])[àa] l['’][èe]re de\b/gi },
      { text: "Il est indéniable que", category: "Introduction & Cadrage", regex: /\bil est ind[ée]niable que\b/gi },
      { text: "Force est de constater que", category: "Introduction & Cadrage", regex: /\bforce est de constater que\b/gi },
      { text: "Il convient de souligner que", category: "Introduction & Cadrage", regex: /\bil convient de souligner que\b/gi },
      { text: "Dans cette optique", category: "Introduction & Cadrage", regex: /\bdans cette optique\b/gi },
      { text: "À cet égard", category: "Introduction & Cadrage", regex: /(?:^|[\s\b.,;!?:«»"()])[àa] cet [ée]gard\b/gi },
      { text: "Quant à", category: "Introduction & Cadrage", regex: /\bquant [àa](?![a-zA-ZÀ-ÿ0-9])/gi },

      // Addition & Renforcement
      { text: "De surcroît", category: "Addition & Renforcement", regex: /\bde surcro[îi]t\b/gi },
      { text: "En outre", category: "Addition & Renforcement", regex: /\ben outre\b/gi },
      { text: "Par ailleurs", category: "Addition & Renforcement", regex: /\bpar ailleurs\b/gi },
      { text: "De plus", category: "Addition & Renforcement", regex: /\bde plus\b/gi },
      { text: "Qui plus est", category: "Addition & Renforcement", regex: /\bqui plus est\b/gi },
      { text: "D'ailleurs", category: "Addition & Renforcement", regex: /\bd['’]ailleurs\b/gi },
      { text: "Non seulement", category: "Addition & Renforcement", regex: /\bnon seulement\b/gi },
      { text: "Mais encore", category: "Addition & Renforcement", regex: /\bmais encore\b/gi },
      { text: "Mais aussi", category: "Addition & Renforcement", regex: /\bmais aussi\b/gi },

      // Opposition, Concession & Nuance
      { text: "Certes", category: "Opposition & Concession", regex: /\bcertes\b/gi },
      { text: "Néanmoins", category: "Opposition & Concession", regex: /\bn[ée]anmoins\b/gi },
      { text: "Toutefois", category: "Opposition & Concession", regex: /\btoutefois\b/gi },
      { text: "Cependant", category: "Opposition & Concession", regex: /\bcependant\b/gi },
      { text: "En revanche", category: "Opposition & Concession", regex: /\ben revanche\b/gi },
      { text: "Au contraire", category: "Opposition & Concession", regex: /\bau contraire\b/gi },
      { text: "Bien que", category: "Opposition & Concession", regex: /\bbien que\b/gi },
      { text: "Quoique", category: "Opposition & Concession", regex: /\bquoique\b/gi },
      { text: "Il n'en demeure pas moins que", category: "Opposition & Concession", regex: /\bil n['’]en demeure pas moins que\b/gi },
      { text: "Loin s'en faut", category: "Opposition & Concession", regex: /\bloin s['’]en faut\b/gi },
      { text: "Tant s'en faut", category: "Opposition & Concession", regex: /\btant s['’]en faut\b/gi },
      { text: "Quand bien même", category: "Opposition & Concession", regex: /\bquand bien m[êe]me\b/gi },
      { text: "Pour peu que", category: "Opposition & Concession", regex: /\bpour peu que\b/gi },
      { text: "Malgré tout", category: "Opposition & Concession", regex: /\bmalgr[ée] tout\b/gi },

      // Cause & Justification
      { text: "Étant donné que", category: "Cause & Justification", regex: /(?:^|[\s\b.,;!?:«»"()])[ée]tant donn[ée] que\b/gi },
      { text: "Dans la mesure où", category: "Cause & Justification", regex: /\bdans la mesure o[ùu](?![a-zA-ZÀ-ÿ0-9])/gi },
      { text: "Vu que", category: "Cause & Justification", regex: /\bvu que\b/gi },
      { text: "En effet", category: "Cause & Justification", regex: /\ben effet\b/gi },
      { text: "Puisque", category: "Cause & Justification", regex: /\bpuisque\b/gi },
      { text: "En raison de", category: "Cause & Justification", regex: /\ben raison de\b/gi },
      { text: "Du fait de", category: "Cause & Justification", regex: /\bdu fait de\b/gi },
      { text: "Sous prétexte que", category: "Cause & Justification", regex: /\bsous pr[ée]texte que\b/gi },

      // Conséquence & Déduction
      { text: "Par conséquent", category: "Conséquence & Déduction", regex: /\bpar cons[ée]quent\b/gi },
      { text: "C'est pourquoi", category: "Conséquence & Déduction", regex: /\bc['’]est pourquoi\b/gi },
      { text: "Dès lors", category: "Conséquence & Déduction", regex: /(?:^|[\s\b.,;!?:«»"()])d[èe]s lors\b/gi },
      { text: "Ainsi", category: "Conséquence & Déduction", regex: /\bainsi\b/gi },
      { text: "Il s'ensuit que", category: "Conséquence & Déduction", regex: /\bil s['’]ensuit que\b/gi },
      { text: "Par voie de conséquence", category: "Conséquence & Déduction", regex: /\bpar voie de cons[ée]quence\b/gi },
      { text: "De ce fait", category: "Conséquence & Déduction", regex: /\bde ce fait\b/gi },

      // Conclusion & Synthèse
      { text: "En définitive", category: "Conclusion & Synthèse", regex: /\ben d[ée]finitive\b/gi },
      { text: "Tout bien considéré", category: "Conclusion & Synthèse", regex: /\btout bien consid[ée]r[ée](?![a-zA-Z0-9À-ÿ])/gi },
      { text: "En somme", category: "Conclusion & Synthèse", regex: /\ben somme\b/gi },
      { text: "En conclusion", category: "Conclusion & Synthèse", regex: /\ben conclusion\b/gi },
      { text: "Pour conclure", category: "Conclusion & Synthèse", regex: /\bpour conclure\b/gi },
      { text: "Au vu de ce qui précède", category: "Conclusion & Synthèse", regex: /\bau vu de ce qui pr[ée]c[èe]de\b/gi }
    ];

    // Initialize UI on creation
    this.init();
  }

  // --------------------------------------------------------------------------
  // INITIALIZATION & DOM MOUNTING
  // --------------------------------------------------------------------------
  init() {
    if (typeof document === 'undefined') return;

    this.ensureContainer();
    this.restoreActiveState(true);
    this.render();
    this.bindGlobalEvents();
  }

  getExamData(examId) {
    if (!this.dataset) return null;
    if (this.dataset[examId]) return this.dataset[examId];
    if (this.dataset.exam1 && this.dataset.exam1.id === examId) return this.dataset.exam1;
    if (this.dataset.exam2 && this.dataset.exam2.id === examId) return this.dataset.exam2;
    if (Array.isArray(window.officialExamsList)) {
      const found = window.officialExamsList.find(e => e.id === examId);
      if (found) return found;
    }
    return this.dataset.exam1 || null;
  }

  ensureContainer() {
    if (typeof document === 'undefined') return;

    let container = document.getElementById('view-exam-simulator');
    if (!container) {
      const mainContent = document.getElementById('main-content') || document.body;
      container = document.createElement('section');
      container.id = 'view-exam-simulator';
      container.className = 'view-panel';
      mainContent.appendChild(container);
    }
    this.container = container;

    // Inject Styles if needed
    if (!document.getElementById('exam-simulator-custom-styles')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'exam-simulator-custom-styles';
      styleEl.textContent = this.getCustomStyles();
      document.head.appendChild(styleEl);
    }
  }

  getCustomStyles() {
    return `
      /* DELF B2 Exam Simulator Custom Styles */
      .exam-sim-root {
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: var(--md-sys-color-on-background);
        font-family: var(--md-font-family);
      }
      .exam-header-bar {
        background: var(--md-sys-color-surface);
        border: 1px solid var(--md-sys-color-outline-variant);
        border-radius: var(--md-shape-large);
        padding: 16px 20px;
        box-shadow: var(--md-elevation-1);
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .exam-header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
      .exam-brand-title {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .exam-brand-title h2 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--md-sys-color-primary);
        font-family: var(--md-font-serif);
      }
      .exam-header-controls {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
      }
      .exam-global-timer {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--md-sys-color-surface-variant);
        padding: 6px 14px;
        border-radius: var(--md-shape-full);
        font-weight: 700;
        font-size: 1.1rem;
        color: var(--md-sys-color-primary);
        border: 1px solid var(--md-sys-color-outline-variant);
      }
      .exam-global-timer.timer-warning {
        background: #FEF3C7;
        color: #92400E;
        border-color: #F59E0B;
        animation: pulseWarning 1.5s infinite;
      }
      .exam-global-timer.timer-danger {
        background: #FEE2E2;
        color: #991B1B;
        border-color: #EF4444;
        animation: pulseDanger 1s infinite;
      }
      @keyframes pulseWarning {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.03); }
      }
      @keyframes pulseDanger {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      .exam-section-nav {
        display: flex;
        gap: 8px;
        border-top: 1px solid var(--md-sys-color-outline-variant);
        padding-top: 12px;
        overflow-x: auto;
      }
      .exam-nav-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 16px;
        border-radius: var(--md-shape-full);
        border: 1px solid var(--md-sys-color-outline-variant);
        background: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface-variant);
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
      }
      .exam-nav-pill:hover {
        background: var(--md-sys-color-surface-variant);
      }
      .exam-nav-pill.active {
        background: var(--md-sys-color-primary);
        color: var(--md-sys-color-on-primary);
        border-color: var(--md-sys-color-primary);
      }
      .exam-nav-pill.completed::after {
        content: "✓";
        margin-left: 4px;
        font-size: 0.8rem;
      }
      .exam-workspace {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
      }
      .exam-split-layout {
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: 20px;
      }
      @media (max-width: 900px) {
        .exam-split-layout {
          grid-template-columns: 1fr;
        }
      }
      .exam-dossier-card {
        background: var(--md-sys-color-surface);
        border: 1px solid var(--md-sys-color-outline-variant);
        border-radius: var(--md-shape-large);
        padding: 24px;
        line-height: 1.7;
      }
      .exam-dossier-text {
        font-family: var(--md-font-serif);
        font-size: 1.05rem;
        color: var(--md-sys-color-on-surface);
      }
      .exam-dossier-text p {
        margin-bottom: 1rem;
      }
      .exam-highlighted-text {
        background-color: #FEF08A;
        color: #1F2937;
        padding: 2px 4px;
        border-radius: 3px;
      }
      .exam-questions-panel {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .exam-q-card {
        background: var(--md-sys-color-surface);
        border: 1px solid var(--md-sys-color-outline-variant);
        border-radius: var(--md-shape-medium);
        padding: 16px;
        transition: border-color 0.2s ease;
      }
      .exam-q-card.answered {
        border-left: 4px solid var(--md-sys-color-primary);
      }
      .exam-q-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
      }
      .exam-q-title {
        font-weight: 600;
        font-size: 0.95rem;
        margin-bottom: 12px;
      }
      .exam-opt-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .exam-opt-item {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 10px 14px;
        border-radius: var(--md-shape-small);
        border: 1px solid var(--md-sys-color-outline-variant);
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .exam-opt-item:hover {
        background: var(--md-sys-color-surface-variant);
      }
      .exam-opt-item.selected {
        background: var(--md-sys-color-primary-container);
        color: var(--md-sys-color-on-primary-container);
        border-color: var(--md-sys-color-primary);
        font-weight: 600;
      }
      .exam-opt-item input[type="radio"] {
        margin-top: 3px;
      }
      /* CO Sequencer Phase Banner */
      .co-phase-banner {
        background: linear-gradient(135deg, var(--md-sys-color-primary-container) 0%, var(--md-sys-color-surface-variant) 100%);
        border: 1px solid var(--md-sys-color-primary);
        border-radius: var(--md-shape-large);
        padding: 18px 24px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .co-phase-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
      .co-phase-steps {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
      }
      .co-step-dot {
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 600;
        background: var(--md-sys-color-surface);
        border: 1px solid var(--md-sys-color-outline-variant);
        color: var(--md-sys-color-on-surface-variant);
      }
      .co-step-dot.active {
        background: var(--md-sys-color-primary);
        color: var(--md-sys-color-on-primary);
        border-color: var(--md-sys-color-primary);
      }
      .co-step-dot.done {
        background: var(--md-sys-color-secondary-container);
        color: var(--md-sys-color-on-secondary-container);
      }
      /* PE Analyzer Badges */
      .pe-word-badge {
        padding: 4px 12px;
        border-radius: var(--md-shape-full);
        font-size: 0.85rem;
        font-weight: 700;
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }
      .pe-word-badge.ideal {
        background: #D1FAE5;
        color: #065F46;
      }
      .pe-word-badge.short {
        background: #FEF3C7;
        color: #92400E;
      }
      .pe-word-badge.long {
        background: #FEE2E2;
        color: #991B1B;
      }
      .pe-word-badge.eliminatory {
        background: #991B1B;
        color: #FFFFFF;
      }
      .pe-connectors-bar {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 8px;
      }
      .pe-conn-chip {
        background: var(--md-sys-color-surface-variant);
        color: var(--md-sys-color-primary);
        padding: 3px 10px;
        border-radius: 12px;
        font-size: 0.78rem;
        font-weight: 600;
        border: 1px solid var(--md-sys-color-outline-variant);
      }
      .pe-rubric-slider-card {
        background: var(--md-sys-color-surface);
        border: 1px solid var(--md-sys-color-outline-variant);
        border-radius: var(--md-shape-medium);
        padding: 14px 18px;
        margin-bottom: 12px;
      }
      /* Focus Mode */
      body.exam-focus-mode .md-top-app-bar,
      body.exam-focus-mode .app-footer,
      body.exam-focus-mode #journey-status-bar {
        display: none !important;
      }
      body.exam-focus-mode #main-content {
        padding-top: 10px;
      }
    `;
  }

  // --------------------------------------------------------------------------
  // MAIN RENDER CONTROLLER
  // --------------------------------------------------------------------------
  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="exam-sim-root" id="exam-simulator-app">
        ${this.renderHeaderBar()}
        <div class="exam-main-container" id="exam-section-container">
          ${this.renderActiveSection()}
        </div>
      </div>
    `;

    this.bindDOMEvents();
    this.updateGlobalTimerDisplay();
  }

  renderHeaderBar() {
    const exam = this.currentExam || {};
    const title = exam.title || "DELF B2 Tout Public — Examen Blanc Officiel 1";
    const code = exam.code || "SUJET_DÉMO_B2TP_02";

    const isRunning = this.isTimerRunning;
    const isPaused = !this.isTimerRunning && this.isExamStarted && !this.isExamFinished;

    const coAnsCount = Object.keys(this.userAnswers.co || {}).length;
    const ceAnsCount = Object.keys(this.userAnswers.ce || {}).length;
    const peWordCount = this.countWords(this.userAnswers.pe ? this.userAnswers.pe.text : '');

    return `
      <div class="exam-header-bar md-card">
        <div class="exam-header-top">
          <div class="exam-brand-title">
            <span class="material-icons-round" style="color:var(--md-sys-color-primary); font-size:28px;">school</span>
            <div>
              <h2>${title}</h2>
              <div style="font-size:0.8rem; color:var(--md-sys-color-on-surface-variant);">
                Code officiel : <strong>${code}</strong> • Format Réformé France Éducation International (2h30)
              </div>
            </div>
          </div>

          <div class="exam-header-controls">
            <!-- Exam Selector -->
            <select id="exam-subject-select" class="level-select-input" style="padding:6px 12px; font-size:0.85rem;" title="Changer d'examen blanc">
              <option value="delf-b2-fei-ex1" ${this.currentExamId === 'delf-b2-fei-ex1' ? 'selected' : ''}>Sujet 1 (Réformé 100% QCM)</option>
              <option value="delf-b2-fei-ex2" ${this.currentExamId === 'delf-b2-fei-ex2' ? 'selected' : ''}>Sujet 2 (Format Classique)</option>
            </select>

            <!-- Global Timer -->
            <div class="exam-global-timer" id="exam-global-timer-display" title="Temps restant officiel">
              <span class="material-icons-round" style="font-size:20px;">timer</span>
              <span id="exam-timer-text">02:30:00</span>
            </div>

            <!-- Timer Action Buttons -->
            ${!this.isExamStarted ? `
              <button class="md-button md-button--filled" id="exam-start-btn" style="padding:6px 14px;">
                <span class="material-icons-round">play_arrow</span> Démarrer l'épreuve
              </button>
            ` : isRunning ? `
              <button class="md-button md-button--outlined" id="exam-pause-btn" style="padding:6px 12px;" title="Suspendre temporairement le chronomètre">
                <span class="material-icons-round">pause</span> Suspendre
              </button>
            ` : `
              <button class="md-button md-button--filled" id="exam-resume-btn" style="padding:6px 12px; background:var(--md-sys-color-tertiary);">
                <span class="material-icons-round">play_arrow</span> Reprendre
              </button>
            `}

            <!-- Focus Mode Button -->
            <button class="md-button md-button--outlined" id="exam-focus-toggle-btn" title="Activer/Désactiver le mode plein écran et concentration" style="padding:6px 12px;">
              <span class="material-icons-round">${this.isFocusMode ? 'fullscreen_exit' : 'fullscreen'}</span>
              ${this.isFocusMode ? 'Quitter Focus' : 'Mode Focus'}
            </button>

            <!-- Submit Button -->
            <button class="md-button md-button--filled" id="exam-finish-btn" style="background:#059669; color:#FFF; padding:6px 14px;">
              <span class="material-icons-round">check_circle</span> Terminer & Noter
            </button>
          </div>
        </div>

        <!-- Section Navigation Tabs -->
        <div class="exam-section-nav">
          <button class="exam-nav-pill ${this.currentSection === 'intro' ? 'active' : ''}" data-section="intro">
            <span class="material-icons-round" style="font-size:18px;">info</span> Présentation
          </button>
          <button class="exam-nav-pill ${this.currentSection === 'co' ? 'active' : ''} ${coAnsCount >= 20 ? 'completed' : ''}" data-section="co">
            <span class="material-icons-round" style="font-size:18px;">headphones</span> 1. Écoute (CO - 25 pts)
            <span style="font-size:0.75rem; opacity:0.8;">(${coAnsCount}/20 Qs)</span>
          </button>
          <button class="exam-nav-pill ${this.currentSection === 'ce' ? 'active' : ''} ${ceAnsCount >= 20 ? 'completed' : ''}" data-section="ce">
            <span class="material-icons-round" style="font-size:18px;">menu_book</span> 2. Lecture (CE - 25 pts)
            <span style="font-size:0.75rem; opacity:0.8;">(${ceAnsCount}/20 Qs)</span>
          </button>
          <button class="exam-nav-pill ${this.currentSection === 'pe' ? 'active' : ''} ${peWordCount >= 225 ? 'completed' : ''}" data-section="pe">
            <span class="material-icons-round" style="font-size:18px;">history_edu</span> 3. Rédaction (PE - 25 pts)
            <span style="font-size:0.75rem; opacity:0.8;">(${peWordCount} mots)</span>
          </button>
          <button class="exam-nav-pill ${this.currentSection === 'bilan' ? 'active' : ''}" data-section="bilan">
            <span class="material-icons-round" style="font-size:18px;">analytics</span> 4. Bilan & Diagnostic /100
          </button>
        </div>
      </div>
    `;
  }

  renderActiveSection() {
    switch (this.currentSection) {
      case 'intro':
        return this.renderIntroSection();
      case 'co':
        return this.renderCOSection();
      case 'ce':
        return this.renderCESection();
      case 'pe':
        return this.renderPESection();
      case 'bilan':
        return this.renderBilanSection();
      default:
        return this.renderIntroSection();
    }
  }

  // --------------------------------------------------------------------------
  // SECTION 0: INTRO & CONSIGNES OFFICIELLES
  // --------------------------------------------------------------------------
  renderIntroSection() {
    const exam = this.currentExam || {};
    return `
      <div class="md-card" style="padding:32px; display:flex; flex-direction:column; gap:24px;">
        <div style="text-align:center; max-width:760px; margin:0 auto;">
          <span class="badge" style="background:var(--md-sys-color-primary-container); color:var(--md-sys-color-primary); font-size:0.9rem; padding:4px 14px;">
            Épreuve Collective Officielle DELF B2
          </span>
          <h2 style="font-family:var(--md-font-serif); font-size:1.8rem; margin:16px 0 8px 0; color:var(--md-sys-color-primary);">
            Conditions Réelles d'Examen France Éducation International
          </h2>
          <p style="font-size:1.05rem; color:var(--md-sys-color-on-surface-variant); line-height:1.6;">
            Bienvenue dans le simulateur certifié DELF B2. Vous allez passer l'ensemble des 3 épreuves collectives dans les conditions rigoureuses du diplôme officiel.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:18px; margin:12px 0;">
          <div class="md-card" style="padding:18px; border-top:4px solid #3B5B75;">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
              <span class="material-icons-round" style="color:#3B5B75;">headphones</span>
              <strong style="font-size:1.05rem;">Compréhension Oral (CO)</strong>
            </div>
            <p style="font-size:0.875rem; color:var(--md-sys-color-on-surface-variant); margin:0;">
              <strong>30 minutes • 25 points</strong><br>
              3 exercices d'écoute séquencés (Sport & sommeil, Flex-office, Presse/Jeux/Robots) avec pauses officielles de lecture et de réponse.
            </p>
          </div>

          <div class="md-card" style="padding:18px; border-top:4px solid #346856;">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
              <span class="material-icons-round" style="color:#346856;">menu_book</span>
              <strong style="font-size:1.05rem;">Compréhension Écrite (CE)</strong>
            </div>
            <p style="font-size:0.875rem; color:var(--md-sys-color-on-surface-variant); margin:0;">
              <strong>1 heure • 25 points</strong><br>
              3 grands dossiers documentaires (Portables à l'école, Mobilité vélo, Adaptations cinéma) avec 20 questions d'analyse fine.
            </p>
          </div>

          <div class="md-card" style="padding:18px; border-top:4px solid #B86B35;">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
              <span class="material-icons-round" style="color:#B86B35;">history_edu</span>
              <strong style="font-size:1.05rem;">Production Écrite (PE)</strong>
            </div>
            <p style="font-size:0.875rem; color:var(--md-sys-color-on-surface-variant); margin:0;">
              <strong>1 heure • 25 points</strong><br>
              Lettre formelle argumentative au maire (zone piétonne). Compteur dynamique (225-275 mots) et grille FEI à 5 critères.
            </p>
          </div>
        </div>

        <div class="md-card" style="padding:20px; background:var(--md-sys-color-surface-variant); border-left:4px solid var(--md-sys-color-primary);">
          <h4 style="margin:0 0 8px 0; color:var(--md-sys-color-primary);">📋 Barème et Règles d'Évaluation FEI :</h4>
          <ul style="margin:0; padding-left:20px; font-size:0.9rem; line-height:1.6; color:var(--md-sys-color-on-surface);">
            <li><strong>Total de l'épreuve :</strong> 75 points épreuves collectives (restitué sur 100 points avec la PO).</li>
            <li><strong>Seuil d'admission :</strong> Minimum 50 / 100 points pour obtenir le diplôme.</li>
            <li><strong>Note éliminatoire :</strong> Une note strictement inférieure à <strong>5,0 / 25 points</strong> dans l'une des épreuves entraîne automatiquement l'ajournement.</li>
            <li><strong>Sauvegarde en continu :</strong> Vos réponses et votre temps restant sont sauvegardés à chaque seconde.</li>
          </ul>
        </div>

        <div style="display:flex; justify-content:center; gap:16px; margin-top:12px;">
          <button class="md-button md-button--filled" id="start-exam-intro-btn" style="padding:12px 32px; font-size:1rem;">
            <span class="material-icons-round">play_arrow</span> Commencer par la Compréhension Orale (CO)
          </button>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // SECTION 1: COMPRÉHENSION DE L'ORAL (CO - 25 POINTS)
  // --------------------------------------------------------------------------
  renderCOSection() {
    const coData = (this.currentExam && this.currentExam.sections && this.currentExam.sections.co) || {};
    const exercises = coData.exercises || [];
    const activeEx = exercises[this.activeExercise.co] || exercises[0] || {};
    const exIdx = this.activeExercise.co;

    return `
      <div class="exam-workspace">
        <!-- Audio State Machine Controller Banner -->
        ${this.renderCOAudioBanner(activeEx, exIdx)}

        <!-- Exercise Sub-Tabs -->
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px;">
          ${exercises.map((ex, idx) => {
            const isCurrent = idx === this.activeExercise.co;
            const exQuestions = ex.questions || [];
            const answeredInEx = exQuestions.filter(q => this.userAnswers.co[q.id] !== undefined).length;
            return `
              <button class="exam-nav-pill ${isCurrent ? 'active' : ''}" onclick="examSimulatorModule.switchCOExercise(${idx})">
                <span>${ex.title.split(':')[0]} (${ex.points} pts)</span>
                <span style="font-size:0.75rem; opacity:0.8;">[${answeredInEx}/${exQuestions.length}]</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Questions Area -->
        <div class="exam-questions-panel">
          <div class="md-card" style="padding:20px; margin-bottom:16px; background:var(--md-sys-color-surface);">
            <h3 style="font-family:var(--md-font-serif); margin:0 0 6px 0; color:var(--md-sys-color-primary);">
              ${activeEx.title}
            </h3>
            <div style="font-size:0.85rem; color:var(--md-sys-color-on-surface-variant); margin-bottom:12px;">
              ${activeEx.instructions || "Écoutez le document et répondez aux questions."}
            </div>
            
            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--md-sys-color-outline-variant); padding-top:10px;">
              <span class="badge" style="background:var(--md-sys-color-surface-variant);">Écoutes prévues : ${activeEx.listeningsCount || 2}</span>
              <span style="font-weight:700; color:var(--md-sys-color-primary);">${activeEx.points} points</span>
            </div>
          </div>

          <!-- Question Cards -->
          ${(activeEx.questions || []).map((q, qIdx) => {
            const selectedVal = this.userAnswers.co[q.id];
            const isAnswered = selectedVal !== undefined;
            return `
              <div class="exam-q-card md-card ${isAnswered ? 'answered' : ''}" id="co-qcard-${q.id}">
                <div class="exam-q-header">
                  <span class="badge" style="background:var(--md-sys-color-primary-container); color:var(--md-sys-color-primary); font-weight:700;">
                    Question ${q.number || (qIdx + 1)}
                  </span>
                  <span style="font-size:0.8rem; font-weight:600; color:var(--md-sys-color-on-surface-variant);">
                    ${q.points} pt${q.points > 1 ? 's' : ''}
                  </span>
                </div>
                <div class="exam-q-title">${q.prompt || q.question}</div>
                <div class="exam-opt-list">
                  ${(q.options || []).map((opt, optIdx) => {
                    const isChecked = selectedVal === optIdx;
                    const letter = String.fromCharCode(65 + optIdx);
                    return `
                      <label class="exam-opt-item ${isChecked ? 'selected' : ''}" onclick="examSimulatorModule.selectCOAnswer('${q.id}', ${optIdx})">
                        <input type="radio" name="co_${q.id}" value="${optIdx}" ${isChecked ? 'checked' : ''}>
                        <div><strong>${letter}.</strong> ${opt}</div>
                      </label>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Bottom Navigation Controls -->
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px;">
          <button class="md-button md-button--outlined" ${exIdx === 0 ? 'disabled' : ''} onclick="examSimulatorModule.switchCOExercise(${exIdx - 1})">
            <span class="material-icons-round">navigate_before</span> Exercice précédent
          </button>
          ${exIdx < exercises.length - 1 ? `
            <button class="md-button md-button--filled" onclick="examSimulatorModule.switchCOExercise(${exIdx + 1})">
              Exercice suivant <span class="material-icons-round">navigate_next</span>
            </button>
          ` : `
            <button class="md-button md-button--filled" onclick="examSimulatorModule.switchSection('ce')" style="background:var(--md-sys-color-primary);">
              Passer à la Compréhension Écrite (CE) <span class="material-icons-round">arrow_forward</span>
            </button>
          `}
        </div>
      </div>
    `;
  }

  renderCOAudioBanner(activeEx, exIdx) {
    const p = this.audioState.phase;
    const isPlaying = this.audioState.isPlayingAudio;
    const count = activeEx.listeningsCount || 2;
    const audioUrl = activeEx.audioUrl || activeEx.audioFile || "";

    let phaseTitle = "Prêt à démarrer l'écoute officielle";
    let phaseDesc = "Cliquez sur 'Lancer la séquence officielle' pour respecter le protocole d'examen FEI (Lecture -> 1ère écoute -> Pause -> 2nde écoute -> Réponse).";
    let badgeClass = "co-step-dot";

    if (p === 'reading') {
      phaseTitle = `Phase 1 : Lecture des questions (${this.audioState.phaseSecondsRemaining}s restants)`;
      phaseDesc = "Prenez connaissance des questions avant la première diffusion de l'enregistrement sonore.";
    } else if (p === 'listening_1') {
      phaseTitle = `Phase 2 : Première écoute du document sonore`;
      phaseDesc = "Écoutez attentivement le document et commencez à repérer les éléments clés.";
    } else if (p === 'pause') {
      phaseTitle = `Phase 3 : Pause intermédiaire de réflexion (${this.audioState.phaseSecondsRemaining}s)`;
      phaseDesc = "Vous avez un temps de pause pour commencer à répondre aux questions avant la 2nde écoute.";
    } else if (p === 'listening_2') {
      phaseTitle = `Phase 4 : Seconde écoute du document sonore`;
      phaseDesc = "Complétez et vérifiez vos réponses lors de cette deuxième diffusion.";
    } else if (p === 'answering') {
      phaseTitle = `Phase 5 : Temps de réponse final (${this.audioState.phaseSecondsRemaining}s)`;
      phaseDesc = "Finalisez vos réponses avant de passer à l'exercice suivant.";
    } else if (p === 'completed') {
      phaseTitle = `Séquence audio terminée`;
      phaseDesc = "Toutes les écoutes officielles de cet exercice sont achevées.";
    }

    return `
      <div class="co-phase-banner md-card">
        <div class="co-phase-top">
          <div style="display:flex; align-items:center; gap:12px;">
            <span class="material-icons-round" style="font-size:32px; color:var(--md-sys-color-primary);">
              ${isPlaying ? 'volume_up' : p === 'reading' || p === 'pause' || p === 'answering' ? 'hourglass_top' : 'headphones'}
            </span>
            <div>
              <div style="font-weight:700; font-size:1.1rem; color:var(--md-sys-color-on-surface);">${phaseTitle}</div>
              <div style="font-size:0.85rem; color:var(--md-sys-color-on-surface-variant);">${phaseDesc}</div>
            </div>
          </div>

          <div style="display:flex; align-items:center; gap:10px;">
            ${p === 'ready' || p === 'completed' ? `
              <button class="md-button md-button--filled" onclick="examSimulatorModule.startCOSequence()" style="background:var(--md-sys-color-primary);">
                <span class="material-icons-round">play_arrow</span> Lancer la séquence officielle
              </button>
            ` : `
              <button class="md-button md-button--outlined" onclick="examSimulatorModule.skipCOPhase()" title="Passer directement à la phase suivante">
                <span class="material-icons-round">skip_next</span> Phase suivante
              </button>
              <button class="md-button md-button--text" onclick="examSimulatorModule.resetCOSequence()" style="color:var(--md-sys-color-error);" title="Réinitialiser la séquence">
                <span class="material-icons-round">replay</span>
              </button>
            `}
          </div>
        </div>

        <!-- Steps Indicators -->
        <div class="co-phase-steps">
          <span class="co-step-dot ${p === 'reading' ? 'active' : p !== 'ready' ? 'done' : ''}">1. Lecture (${count === 1 ? '15s' : '60s'})</span>
          <span class="co-step-dot ${p === 'listening_1' ? 'active' : (p === 'pause' || p === 'listening_2' || p === 'answering' || p === 'completed') ? 'done' : ''}">2. 1ère Écoute</span>
          ${count > 1 ? `
            <span class="co-step-dot ${p === 'pause' ? 'active' : (p === 'listening_2' || p === 'answering' || p === 'completed') ? 'done' : ''}">3. Pause (30s-1m)</span>
            <span class="co-step-dot ${p === 'listening_2' ? 'active' : (p === 'answering' || p === 'completed') ? 'done' : ''}">4. 2nde Écoute</span>
          ` : ''}
          <span class="co-step-dot ${p === 'answering' ? 'active' : p === 'completed' ? 'done' : ''}">
            ${count > 1 ? '5' : '3'}. Réponse (${count === 1 ? '20s' : '60s'})
          </span>
        </div>

        <!-- Hidden Audio Element with Fallback Handler -->
        <audio id="exam-co-audio-element" src="${audioUrl}" preload="auto" style="display:none;"></audio>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // SECTION 2: COMPRÉHENSION DES ÉCRITS (CE - 25 POINTS)
  // --------------------------------------------------------------------------
  renderCESection() {
    const ceData = (this.currentExam && this.currentExam.sections && this.currentExam.sections.ce) || {};
    const exercises = ceData.exercises || [];
    const activeEx = exercises[this.activeExercise.ce] || exercises[0] || {};
    const exIdx = this.activeExercise.ce;
    const questions = activeEx.questions || [];

    return `
      <div class="exam-workspace">
        <!-- CE Navigation Header -->
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:12px;">
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            ${exercises.map((ex, idx) => {
              const isCurrent = idx === this.activeExercise.ce;
              const exQuestions = ex.questions || [];
              const answeredInEx = exQuestions.filter(q => this.userAnswers.ce[q.id] !== undefined).length;
              return `
                <button class="exam-nav-pill ${isCurrent ? 'active' : ''}" onclick="examSimulatorModule.switchCEExercise(${idx})">
                  <span>${ex.title.split(':')[0]} (${ex.points} pts)</span>
                  <span style="font-size:0.75rem; opacity:0.8;">[${answeredInEx}/${exQuestions.length}]</span>
                </button>
              `;
            }).join('')}
          </div>

          <!-- Reading Tool Actions -->
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:0.8rem; font-weight:600; color:var(--md-sys-color-on-surface-variant);">Police :</span>
            <button class="md-icon-button" onclick="examSimulatorModule.adjustCEFontSize(-2)" title="Réduire la police" style="width:32px; height:32px;">A-</button>
            <span style="font-size:0.85rem; font-weight:700;">${this.ceFontSize}px</span>
            <button class="md-icon-button" onclick="examSimulatorModule.adjustCEFontSize(2)" title="Agrandir la police" style="width:32px; height:32px;">A+</button>
            
            <button class="md-button md-button--outlined" onclick="examSimulatorModule.highlightSelectedText()" style="padding:4px 10px; font-size:0.8rem;" title="Surligner le passage sélectionné dans le texte">
              <span class="material-icons-round" style="font-size:16px;">brush</span> Surligner
            </button>
            <button class="md-button md-button--text" onclick="examSimulatorModule.clearCEHighlights('${activeEx.id}')" style="padding:4px 8px; font-size:0.8rem; color:var(--md-sys-color-error);">
              Effacer surlignages
            </button>
          </div>
        </div>

        <!-- Split Screen Layout: Left Dossier / Right Questions -->
        <div class="exam-split-layout">
          <!-- Left Column: Reading Dossier -->
          <div class="exam-dossier-card md-card" id="ce-dossier-container">
            <div style="margin-bottom:14px; border-bottom:1px solid var(--md-sys-color-outline-variant); padding-bottom:10px;">
              <h3 style="font-family:var(--md-font-serif); font-size:1.3rem; margin:0 0 6px 0; color:var(--md-sys-color-primary);">
                ${activeEx.title}
              </h3>
              <div style="font-size:0.8rem; color:var(--md-sys-color-on-surface-variant); font-style:italic;">
                Source : ${activeEx.source || "France Presse / FEI"}
              </div>
            </div>

            <div class="exam-dossier-text" id="ce-dossier-text-body" style="font-size:${this.ceFontSize}px;">
              ${this.renderDossierContent(activeEx)}
            </div>
          </div>

          <!-- Right Column: Questionnaire -->
          <div class="exam-questions-panel">
            <div class="md-card" style="padding:14px 18px; background:var(--md-sys-color-surface-variant);">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong style="color:var(--md-sys-color-primary);">Questionnaire d'analyse (${questions.length} questions)</strong>
                <span style="font-size:0.85rem; font-weight:600;">Total : ${activeEx.points} points</span>
              </div>
            </div>

            ${questions.map((q, qIdx) => {
              const selectedVal = this.userAnswers.ce[q.id];
              const isAnswered = selectedVal !== undefined;
              return `
                <div class="exam-q-card md-card ${isAnswered ? 'answered' : ''}" id="ce-qcard-${q.id}">
                  <div class="exam-q-header">
                    <span class="badge" style="background:var(--md-sys-color-primary-container); color:var(--md-sys-color-primary); font-weight:700;">
                      Question ${q.number || (qIdx + 1)}
                    </span>
                    <span style="font-size:0.8rem; font-weight:600; color:var(--md-sys-color-on-surface-variant);">
                      ${q.points} pt${q.points > 1 ? 's' : ''}
                    </span>
                  </div>
                  <div class="exam-q-title">${q.prompt || q.question}</div>
                  <div class="exam-opt-list">
                    ${(q.options || []).map((opt, optIdx) => {
                      const isChecked = selectedVal === optIdx;
                      const letter = String.fromCharCode(65 + optIdx);
                      return `
                        <label class="exam-opt-item ${isChecked ? 'selected' : ''}" onclick="examSimulatorModule.selectCEAnswer('${q.id}', ${optIdx})">
                          <input type="radio" name="ce_${q.id}" value="${optIdx}" ${isChecked ? 'checked' : ''}>
                          <div><strong>${letter}.</strong> ${opt}</div>
                        </label>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Bottom Navigation Controls -->
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px;">
          <button class="md-button md-button--outlined" ${exIdx === 0 ? 'disabled' : ''} onclick="examSimulatorModule.switchCEExercise(${exIdx - 1})">
            <span class="material-icons-round">navigate_before</span> Exercice précédent
          </button>
          ${exIdx < exercises.length - 1 ? `
            <button class="md-button md-button--filled" onclick="examSimulatorModule.switchCEExercise(${exIdx + 1})">
              Exercice suivant <span class="material-icons-round">navigate_next</span>
            </button>
          ` : `
            <button class="md-button md-button--filled" onclick="examSimulatorModule.switchSection('pe')" style="background:var(--md-sys-color-primary);">
              Passer à la Production Écrite (PE) <span class="material-icons-round">arrow_forward</span>
            </button>
          `}
        </div>
      </div>
    `;
  }

  renderDossierContent(activeEx) {
    let content = activeEx.text || "";
    const highlights = this.ceHighlights[activeEx.id] || [];
    highlights.forEach(h => {
      if (h && content.includes(h)) {
        content = content.split(h).join(`<mark class="exam-highlighted-text">${h}</mark>`);
      }
    });
    return content;
  }

  // --------------------------------------------------------------------------
  // SECTION 3: PRODUCTION ÉCRITE (PE - 25 POINTS)
  // --------------------------------------------------------------------------
  renderPESection() {
    const peData = (this.currentExam && this.currentExam.sections && this.currentExam.sections.pe) || {};
    const text = (this.userAnswers.pe && this.userAnswers.pe.text) || '';
    const wordCount = this.countWords(text);
    const wordStatus = this.getWordCountStatus(wordCount, peData);
    const detectedConnectors = this.detectConnectors(text);

    return `
      <div class="exam-workspace">
        <!-- Topic Prompt Card -->
        <div class="md-card" style="padding:24px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
            <div>
              <span class="badge" style="background:var(--md-sys-color-tertiary-container); color:var(--md-sys-color-on-tertiary-container); font-weight:700;">
                Épreuve de Production Écrite (1h00 • 25 points)
              </span>
              <h3 style="font-family:var(--md-font-serif); font-size:1.3rem; margin:8px 0 4px 0; color:var(--md-sys-color-primary);">
                ${peData.promptTitle || "Lettre au maire : Contestation d'aménagement urbain"}
              </h3>
            </div>
            <span class="badge" style="background:var(--md-sys-color-surface-variant); font-size:0.85rem;">
              Objectif : 250 mots (225 - 275 mots)
            </span>
          </div>

          <div style="font-size:0.95rem; line-height:1.6; color:var(--md-sys-color-on-surface); background:var(--md-sys-color-surface-variant); padding:16px; border-radius:var(--md-shape-medium); border-left:4px solid var(--md-sys-color-primary); margin-bottom:16px;">
            ${peData.prompt || "Consigne officielle..."}
          </div>

          <!-- Step-by-Step Methodology Accordion -->
          <details class="md-card" style="padding:12px 18px; margin-bottom:12px; background:var(--md-sys-color-surface);">
            <summary style="cursor:pointer; font-weight:700; color:var(--md-sys-color-primary); display:flex; align-items:center; gap:8px;">
              <span class="material-icons-round">lightbulb</span> Guide méthodologique pas-à-pas (Lettre formelle B2)
            </summary>
            <div style="padding-top:12px; font-size:0.875rem; line-height:1.6;">
              <ol style="margin:0; padding-left:20px; display:flex; flex-direction:column; gap:6px;">
                ${(peData.methodologyGuide || [
                  "1. Analyse du sujet : identifier votre rôle, le destinataire et le problème déclencheur.",
                  "2. Plan tripartite : Introduction, 2 arguments développés avec exemples, Conclusion avec proposition alternative.",
                  "3. Formules épistolaires : En-tête, objet, 'Monsieur le Maire,', formule de politesse protocolaire.",
                  "4. Relecture ciblée : vérifier les accords du participe passé et la variété des connecteurs."
                ]).map(step => `<li>${step}</li>`).join('')}
              </ol>
            </div>
          </details>
        </div>

        <!-- Intelligent Editor & Real-time Diagnostics -->
        <div class="md-card" style="padding:24px;">
          <!-- Editor Toolbar with Live Word Counter & Connector Stats -->
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:12px;">
            <div style="display:flex; align-items:center; gap:10px;">
              <span class="material-icons-round" style="color:var(--md-sys-color-primary);">edit_note</span>
              <strong style="font-size:1rem;">Espace de Rédaction Candidat</strong>
            </div>

            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
              <span id="pe-live-word-badge" class="pe-word-badge ${wordStatus.badgeClass}">
                <span class="material-icons-round" style="font-size:16px;">pin</span>
                <span id="pe-word-count-display">${wordCount} mot${wordCount > 1 ? 's' : ''}</span> — ${wordStatus.label}
              </span>
              <span id="pe-autosave-indicator" style="font-size:0.75rem; color:#059669;">✓ Sauvegardé</span>
            </div>
          </div>

          <!-- Connector Analysis Bar -->
          <div style="background:var(--md-sys-color-surface-variant); padding:10px 14px; border-radius:var(--md-shape-small); margin-bottom:12px;">
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.8rem; font-weight:600; color:var(--md-sys-color-primary);">
              <span>🔍 Analyseur de connecteurs logiques détectés en temps réel :</span>
              <span id="pe-connectors-count-label">${detectedConnectors.length} connecteur(s) repéré(s)</span>
            </div>
            <div class="pe-connectors-bar" id="pe-detected-connectors-list">
              ${detectedConnectors.length > 0 ? detectedConnectors.map(c => `
                <span class="pe-conn-chip" title="Catégorie : ${c.category}">✓ ${c.text}</span>
              `).join('') : '<span style="font-size:0.75rem; color:var(--md-sys-color-on-surface-variant); font-style:italic;">Aucun connecteur formel détecté pour l\'instant. Intégrez des structures de transition (En premier lieu, De surcroît, Certes, Néanmoins...).</span>'}
            </div>
          </div>

          <!-- Main Textarea -->
          <textarea id="exam-pe-textarea" class="writing-textarea" placeholder="Rédigez votre lettre formelle ici... Votre texte est analysé en direct pour le décompte de mots et les connecteurs logiques." style="min-height:360px; font-family:var(--md-font-serif); font-size:1.05rem; line-height:1.7; width:100%; box-sizing:border-box;">${text}</textarea>

          <!-- Bottom Actions & Sample Solution Toggle -->
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-top:14px;">
            <div style="display:flex; gap:8px;">
              <button class="md-button md-button--outlined" onclick="examSimulatorModule.exportPEText()">
                <span class="material-icons-round">download</span> Exporter (.txt)
              </button>
              <button class="md-button md-button--text" onclick="examSimulatorModule.clearPEText()" style="color:var(--md-sys-color-error);">
                <span class="material-icons-round">delete_sweep</span> Effacer
              </button>
            </div>

            <button class="md-button md-button--filled" id="toggle-pe-sample-btn" onclick="examSimulatorModule.togglePESample()">
              <span class="material-icons-round">visibility</span> Consulter le corrigé modèle d'excellence
            </button>
          </div>

          <!-- Sample Solution Dropdown -->
          <div id="exam-pe-sample-solution-box" style="display:none; margin-top:16px; background:var(--md-sys-color-surface-variant); padding:20px; border-radius:var(--md-shape-medium); border-left:4px solid #059669;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <strong style="color:#059669; font-size:1rem;">Corrigé type d'excellence (Production notée 25/25) :</strong>
              <span class="badge" style="background:#D1FAE5; color:#065F46;">Modèle certifié FEI</span>
            </div>
            <pre style="white-space:pre-wrap; font-family:var(--md-font-serif); font-size:0.95rem; line-height:1.7; margin:0;">${peData.sampleAnswer || "Modèle de production..."}</pre>
          </div>
        </div>

        <!-- Official FEI Self-Evaluation Rubric (/25 points) -->
        <div class="md-card" style="padding:24px;">
          <div style="margin-bottom:16px;">
            <h3 style="font-family:var(--md-font-serif); margin:0 0 4px 0; color:var(--md-sys-color-primary);">
              Grille d'Évaluation Officielle France Éducation International (/25 points)
            </h3>
            <p style="font-size:0.85rem; color:var(--md-sys-color-on-surface-variant); margin:0;">
              Évaluez votre production selon les 5 critères officiels du barème DELF B2 (0 / 1 / 3 / 5 points par compétence) :
            </p>
          </div>

          <div class="pe-rubric-container">
            ${(peData.criteria || [
              { id: 'crit-1', label: 'Réalisation de la tâche (Pragmatique)', maxPoints: 5, descriptors: { 0: 'Hors-sujet ou < 125 mots', 1: 'Consigne partiellement respectée', 3: 'Format lettre respecté et arguments clairs (B2)', 5: 'Excellente persuasion et diplomatie (B2+)' } },
              { id: 'crit-2', label: 'Cohérence et cohésion (Pragmatique)', maxPoints: 5, descriptors: { 0: 'Incohérent', 1: 'Articulateurs basiques', 3: 'Bonne organisation en paragraphes (B2)', 5: 'Logique irréprochable et connecteurs variés (B2+)' } },
              { id: 'crit-3', label: 'Adéquation sociolinguistique (Sociolinguistique)', maxPoints: 5, descriptors: { 0: 'Inadapté', 1: 'Formules maladroites', 3: 'Formules de politesse protocolaires exactes (B2)', 5: 'Diplomatie épistolaire exemplaire (B2+)' } },
              { id: 'crit-4', label: 'Lexique & Orthographe lexicale (Linguistique)', maxPoints: 5, descriptors: { 0: 'Indigent', 1: 'Vocabulaire limité', 3: 'Large éventail lexical et bonne orthographe (B2)', 5: 'Lexique riche, précis et nuancé (B2+)' } },
              { id: 'crit-5', label: 'Morphosyntaxe & Correction grammaticale (Linguistique)', maxPoints: 5, descriptors: { 0: 'Bloquant', 1: 'Phrases simples uniquement', 3: 'Bon contrôle des structures complexes (B2)', 5: 'Variété syntaxique remarquable sans faute (B2+)' } }
            ]).map((crit, idx) => {
              const currentScore = (this.userAnswers.pe.rubric && this.userAnswers.pe.rubric[crit.id] !== undefined) ? this.userAnswers.pe.rubric[crit.id] : 3;
              return `
                <div class="pe-rubric-slider-card">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <strong>${idx + 1}. ${crit.label}</strong>
                    <span style="font-weight:700; color:var(--md-sys-color-primary); font-size:1.05rem;" id="crit-val-display-${crit.id}">
                      ${currentScore} / ${crit.maxPoints} pts
                    </span>
                  </div>

                  <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px; margin-top:8px;">
                    ${[0, 1, 3, 5].map(scoreVal => {
                      const desc = (crit.descriptors && crit.descriptors[scoreVal]) || `${scoreVal} pts`;
                      const isSelected = currentScore === scoreVal;
                      return `
                        <button type="button" class="exam-opt-item ${isSelected ? 'selected' : ''}" style="display:flex; flex-direction:column; align-items:flex-start; padding:8px 10px; font-size:0.78rem;" onclick="examSimulatorModule.setPERubricScore('${crit.id}', ${scoreVal})">
                          <strong>${scoreVal} point${scoreVal > 1 ? 's' : ''}</strong>
                          <span style="opacity:0.85; margin-top:2px;">${desc}</span>
                        </button>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div style="display:flex; justify-content:flex-end; align-items:center; margin-top:12px; padding-top:10px; border-top:1px solid var(--md-sys-color-outline-variant);">
            <div style="font-size:1.1rem; font-weight:700; color:var(--md-sys-color-primary);">
              Total Auto-Évaluation PE : <span id="pe-rubric-total-score">${this.calculatePEScore()}</span> / 25 points
            </div>
          </div>
        </div>

        <!-- Section Navigation -->
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px;">
          <button class="md-button md-button--outlined" onclick="examSimulatorModule.switchSection('ce')">
            <span class="material-icons-round">navigate_before</span> Retour à la Compréhension Écrite
          </button>
          <button class="md-button md-button--filled" onclick="examSimulatorModule.switchSection('bilan')" style="background:#059669; color:#FFF;">
            Consulter le Bilan & Diagnostic Global /100 <span class="material-icons-round">analytics</span>
          </button>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // SECTION 4: BILAN & DIAGNOSTIC GLOBAL SUR 100 POINTS
  // --------------------------------------------------------------------------
  renderBilanSection() {
    const scores = this.calculateFullScores();
    const isPassed = scores.isPassed;
    const hasEliminatory = scores.hasEliminatory;

    return `
      <div class="exam-workspace">
        <!-- Top Result Banner -->
        <div class="md-card" style="padding:32px; text-align:center; background:${isPassed ? 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)' : '#FEF2F2'}; border:2px solid ${isPassed ? '#10B981' : '#EF4444'};">
          <div style="display:inline-flex; align-items:center; justify-content:center; width:64px; height:64px; border-radius:50%; background:${isPassed ? '#10B981' : '#EF4444'}; color:#FFF; margin-bottom:12px;">
            <span class="material-icons-round" style="font-size:36px;">${isPassed ? 'emoji_events' : 'priority_high'}</span>
          </div>

          <h2 style="font-family:var(--md-font-serif); font-size:1.8rem; margin:0 0 6px 0; color:${isPassed ? '#065F46' : '#991B1B'};">
            ${isPassed ? 'DIPLÔME DELF B2 VALIDÉ ! (ADMIS)' : 'RÉSULTAT DU SIMULATEUR : AJOURNÉ'}
          </h2>

          <div style="font-size:2.4rem; font-weight:800; color:${isPassed ? '#047857' : '#B91C1C'}; margin:12px 0;">
            ${scores.total100.toFixed(1)} / 100 points
          </div>

          <p style="font-size:1rem; color:var(--md-sys-color-on-surface-variant); max-width:640px; margin:0 auto;">
            ${isPassed ? 
              'Félicitations ! Vous franchissez avec succès le seuil des 50/100 points sans note éliminatoire. Vous êtes sur une excellente dynamique pour le 08/11/2026.' : 
              hasEliminatory ? 
              'Attention : Une note éliminatoire (< 5/25) a été détectée dans l\'une des compétences, ce qui invalide l\'obtention du diplôme selon le règlement FEI.' :
              'Le total obtenu est inférieur au seuil d\'admission de 50/100 points. Consultez les axes de travail prioritaires ci-dessous pour combler vos lacunes.'}
          </p>
        </div>

        ${hasEliminatory ? `
          <div class="md-card" style="padding:16px 20px; background:#FEE2E2; border-left:4px solid #B91C1C; color:#7F1D1D;">
            <strong>⚠️ ALERTE RÈGLEMENT FEI (NOTE ÉLIMINATOIRE) :</strong>
            <p style="margin:4px 0 0 0; font-size:0.875rem;">
              Vous avez obtenu une note inférieure à 5/25 en <strong>${scores.eliminatorySections.join(', ')}</strong>. Conformément aux critères de France Éducation International, l'épreuve doit impérativement être compensée avec au moins 5,0 points dans chacune des 4 compétences.
            </p>
          </div>
        ` : ''}

        <!-- Breakdown per Competency -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:16px;">
          <!-- CO Card -->
          <div class="md-card" style="padding:18px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span class="badge" style="background:#E4EDF4; color:#1C3549; font-weight:700;">Compréhension Orale</span>
              <span style="font-size:0.75rem; color:${scores.coScore < 5 ? '#B91C1C' : '#059669'}; font-weight:700;">
                ${scores.coScore < 5 ? '⚠️ < 5/25' : '✓ Conforme'}
              </span>
            </div>
            <div style="font-size:1.6rem; font-weight:800; color:#1C3549;">${scores.coScore.toFixed(1)} / 25</div>
            <div style="font-size:0.8rem; color:var(--md-sys-color-on-surface-variant); margin-top:4px;">
              ${scores.coCorrectCount} / 20 réponses exactes (${Math.round((scores.coScore / 25) * 100)}%)
            </div>
          </div>

          <!-- CE Card -->
          <div class="md-card" style="padding:18px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span class="badge" style="background:#E5F0EB; color:#1B4336; font-weight:700;">Compréhension Écrite</span>
              <span style="font-size:0.75rem; color:${scores.ceScore < 5 ? '#B91C1C' : '#059669'}; font-weight:700;">
                ${scores.ceScore < 5 ? '⚠️ < 5/25' : '✓ Conforme'}
              </span>
            </div>
            <div style="font-size:1.6rem; font-weight:800; color:#1B4336;">${scores.ceScore.toFixed(1)} / 25</div>
            <div style="font-size:0.8rem; color:var(--md-sys-color-on-surface-variant); margin-top:4px;">
              ${scores.ceCorrectCount} / 20 réponses exactes (${Math.round((scores.ceScore / 25) * 100)}%)
            </div>
          </div>

          <!-- PE Card -->
          <div class="md-card" style="padding:18px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span class="badge" style="background:#FAEDE4; color:#703B15; font-weight:700;">Production Écrite</span>
              <span style="font-size:0.75rem; color:${scores.peScore < 5 ? '#B91C1C' : '#059669'}; font-weight:700;">
                ${scores.peScore < 5 ? '⚠️ < 5/25' : '✓ Conforme'}
              </span>
            </div>
            <div style="font-size:1.6rem; font-weight:800; color:#703B15;">${scores.peScore.toFixed(1)} / 25</div>
            <div style="font-size:0.8rem; color:var(--md-sys-color-on-surface-variant); margin-top:4px;">
              ${scores.peWordCount} mots • Grille FEI (${Math.round((scores.peScore / 25) * 100)}%)
            </div>
          </div>

          <!-- Total Collectif -->
          <div class="md-card" style="padding:18px; background:var(--md-sys-color-surface-variant);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span class="badge" style="background:var(--md-sys-color-primary); color:#FFF; font-weight:700;">Épreuves Collectives</span>
              <span style="font-size:0.75rem; font-weight:700;">Seuil : 37.5/75</span>
            </div>
            <div style="font-size:1.6rem; font-weight:800; color:var(--md-sys-color-primary);">${scores.collectiveScore.toFixed(1)} / 75</div>
            <div style="font-size:0.8rem; color:var(--md-sys-color-on-surface-variant); margin-top:4px;">
              Extrapolé sur 100 pts : <strong>${scores.total100.toFixed(1)}/100</strong>
            </div>
          </div>
        </div>

        <!-- Pedagogical Diagnostic Report & Targeted Advice for 08/11/2026 -->
        <div class="md-card" style="padding:24px;">
          <h3 style="font-family:var(--md-font-serif); margin:0 0 16px 0; color:var(--md-sys-color-primary);">
            📊 Diagnostic Pédagogique & Plan de Révision Personnalisé (Cible 08/11/2026)
          </h3>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
            <!-- Points Forts -->
            <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:var(--md-shape-medium); padding:16px;">
              <h4 style="margin:0 0 8px 0; color:#166534; display:flex; align-items:center; gap:6px;">
                <span class="material-icons-round">check_circle</span> Points Forts Maîtrisés :
              </h4>
              <ul style="margin:0; padding-left:20px; font-size:0.875rem; color:#14532D; line-height:1.6;">
                ${scores.strengths.map(s => `<li>${s}</li>`).join('')}
              </ul>
            </div>

            <!-- Axes de Progrès Prioritaires -->
            <div style="background:#FFFBEB; border:1px solid #FDE68A; border-radius:var(--md-shape-medium); padding:16px;">
              <h4 style="margin:0 0 8px 0; color:#92400E; display:flex; align-items:center; gap:6px;">
                <span class="material-icons-round">trending_up</span> Axes de Travail Prioritaires :
              </h4>
              <ul style="margin:0; padding-left:20px; font-size:0.875rem; color:#78350F; line-height:1.6;">
                ${scores.weaknesses.map(w => `<li>${w}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Recommendations Action Bar -->
          <div style="margin-top:20px; padding-top:16px; border-top:1px solid var(--md-sys-color-outline-variant);">
            <h4 style="margin:0 0 10px 0;">🎯 Recommandations d'entraînement direct :</h4>
            <div style="display:flex; flex-wrap:wrap; gap:10px;">
              <button class="md-button md-button--outlined" onclick="if(window.app) window.app.switchTab('grammar')">
                <span class="material-icons-round">quiz</span> Réviser la Grammaire B2
              </button>
              <button class="md-button md-button--outlined" onclick="if(window.app) window.app.switchTab('reading')">
                <span class="material-icons-round">menu_book</span> Entraînement Lecture
              </button>
              <button class="md-button md-button--outlined" onclick="if(window.app) window.app.switchTab('listening')">
                <span class="material-icons-round">headphones</span> Podcasts RFI
              </button>
              <button class="md-button md-button--outlined" onclick="if(window.app) window.app.switchTab('writing')">
                <span class="material-icons-round">history_edu</span> Atelier Rédaction
              </button>
            </div>
          </div>
        </div>

        <!-- Restart / Retake Options -->
        <div style="display:flex; justify-content:center; gap:16px; margin-top:20px;">
          <button class="md-button md-button--outlined" onclick="examSimulatorModule.resetExam()">
            <span class="material-icons-round">replay</span> Recommencer un Examen Blanc
          </button>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // USER ACTIONS & LOGIC HANDLERS
  // --------------------------------------------------------------------------
  switchSection(sectionId) {
    this.currentSection = sectionId;
    this.saveActiveState();
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  switchCOExercise(idx) {
    this.activeExercise.co = idx;
    this.resetCOSequence();
    this.saveActiveState();
    this.render();
  }

  switchCEExercise(idx) {
    this.activeExercise.ce = idx;
    this.saveActiveState();
    this.render();
  }

  selectCOAnswer(questionId, optionIdx) {
    this.userAnswers.co[questionId] = optionIdx;
    this.saveActiveState();
    
    // Quick DOM update to prevent full re-render flickering
    const card = document.getElementById(`co-qcard-${questionId}`);
    if (card) {
      card.classList.add('answered');
      card.querySelectorAll('.exam-opt-item').forEach((item, idx) => {
        if (idx === optionIdx) {
          item.classList.add('selected');
          const rad = item.querySelector('input[type="radio"]');
          if (rad) rad.checked = true;
        } else {
          item.classList.remove('selected');
        }
      });
    }
  }

  selectCEAnswer(questionId, optionIdx) {
    this.userAnswers.ce[questionId] = optionIdx;
    this.saveActiveState();
    
    const card = document.getElementById(`ce-qcard-${questionId}`);
    if (card) {
      card.classList.add('answered');
      card.querySelectorAll('.exam-opt-item').forEach((item, idx) => {
        if (idx === optionIdx) {
          item.classList.add('selected');
          const rad = item.querySelector('input[type="radio"]');
          if (rad) rad.checked = true;
        } else {
          item.classList.remove('selected');
        }
      });
    }
  }

  adjustCEFontSize(delta) {
    this.ceFontSize = Math.max(12, Math.min(26, this.ceFontSize + delta));
    const textEl = document.getElementById('ce-dossier-text-body');
    if (textEl) textEl.style.fontSize = `${this.ceFontSize}px`;
  }

  highlightSelectedText() {
    if (typeof window === 'undefined' || !window.getSelection) return;
    const selection = window.getSelection();
    const text = selection.toString().trim();
    if (!text || text.length < 3) return;

    const ceData = (this.currentExam && this.currentExam.sections && this.currentExam.sections.ce) || {};
    const exercises = ceData.exercises || [];
    const activeEx = exercises[this.activeExercise.ce] || {};
    if (!activeEx.id) return;

    if (!this.ceHighlights[activeEx.id]) this.ceHighlights[activeEx.id] = [];
    if (!this.ceHighlights[activeEx.id].includes(text)) {
      this.ceHighlights[activeEx.id].push(text);
      this.saveActiveState();
      this.render();
    }
  }

  clearCEHighlights(exerciseId) {
    if (this.ceHighlights[exerciseId]) {
      delete this.ceHighlights[exerciseId];
      this.saveActiveState();
      this.render();
    }
  }

  setPERubricScore(criterionId, scoreVal) {
    if (!this.userAnswers.pe.rubric) this.userAnswers.pe.rubric = {};
    this.userAnswers.pe.rubric[criterionId] = scoreVal;
    this.saveActiveState();
    
    // Update live DOM
    const disp = document.getElementById(`crit-val-display-${criterionId}`);
    if (disp) disp.textContent = `${scoreVal} / 5 pts`;
    const totDisp = document.getElementById('pe-rubric-total-score');
    if (totDisp) totDisp.textContent = this.calculatePEScore();
    this.render();
  }

  togglePESample() {
    const box = document.getElementById('exam-pe-sample-solution-box');
    const btn = document.getElementById('toggle-pe-sample-btn');
    if (!box) return;
    const isHidden = box.style.display === 'none' || !box.style.display;
    box.style.display = isHidden ? 'block' : 'none';
    if (btn) {
      btn.innerHTML = isHidden ? 
        '<span class="material-icons-round">visibility_off</span> Masquer le corrigé modèle' :
        '<span class="material-icons-round">visibility</span> Consulter le corrigé modèle d\'excellence';
    }
  }

  clearPEText() {
    if (typeof confirm !== 'undefined' && !confirm('Voulez-vous vraiment effacer votre texte de production écrite ?')) return;
    this.userAnswers.pe.text = '';
    const textarea = document.getElementById('exam-pe-textarea');
    if (textarea) textarea.value = '';
    this.handlePETextInput('');
  }

  exportPEText() {
    const text = this.userAnswers.pe ? this.userAnswers.pe.text : '';
    if (!text.trim()) {
      alert("Votre texte est vide. Écrivez votre rédaction avant de l'exporter.");
      return;
    }
    const filename = `DELF_B2_Production_Ecrite_${new Date().toISOString().slice(0, 10)}.txt`;
    const fullContent = `======================================================
SIMULATEUR DELF B2 — PRODUCTION ÉCRITE
Examen : ${this.currentExam ? this.currentExam.title : 'Examen Blanc B2'}
Date : ${new Date().toLocaleDateString('fr-FR')}
Nombre de mots : ${this.countWords(text)}
Score Auto-Évaluation : ${this.calculatePEScore()} / 25 points
======================================================

${text}
`;
    const blob = new Blob([fullContent], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // --------------------------------------------------------------------------
  // CO AUDIO STATE MACHINE ORCHESTRATION
  // --------------------------------------------------------------------------
  startCOSequence() {
    const coData = (this.currentExam && this.currentExam.sections && this.currentExam.sections.co) || {};
    const exercises = coData.exercises || [];
    const activeEx = exercises[this.activeExercise.co] || {};
    const count = activeEx.listeningsCount || 2;

    this.audioState.listeningsCount = count;
    this.audioState.listeningsDone = 0;

    // Start Phase 1: Reading (60s for 2-listening, 15s for 1-listening)
    const readingSec = count === 1 ? 15 : 60;
    this.setAudioPhase('reading', readingSec);
  }

  startCOPhaseSequence(idx) {
    if (idx !== undefined) {
      this.activeExercise.co = idx;
    }
    this.startCOSequence();
  }

  setAudioPhase(phase, durationSec = 0) {
    if (this.audioState.phaseInterval) {
      clearInterval(this.audioState.phaseInterval);
      this.audioState.phaseInterval = null;
    }

    this.audioState.phase = phase;
    this.audioState.phaseSecondsRemaining = durationSec;
    this.audioState.phaseTotalSeconds = durationSec;

    const audioEl = document.getElementById('exam-co-audio-element');

    if (phase === 'reading' || phase === 'pause' || phase === 'answering') {
      this.audioState.isPlayingAudio = false;
      if (audioEl) {
        audioEl.pause();
        audioEl.currentTime = 0;
      }

      this.audioState.phaseInterval = setInterval(() => {
        if (this.audioState.phaseSecondsRemaining > 0) {
          this.audioState.phaseSecondsRemaining--;
          this.updateCOPhaseDOM();
        } else {
          clearInterval(this.audioState.phaseInterval);
          this.audioState.phaseInterval = null;
          this.advanceCOPhase();
        }
      }, 1000);
    } else if (phase === 'listening_1' || phase === 'listening_2') {
      this.audioState.isPlayingAudio = true;
      if (audioEl) {
        audioEl.currentTime = 0;
        const playPromise = audioEl.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Browser autoplay prevention or missing audio file fallback
            console.log("Audio play fallback activated");
            // Simulate track duration if audio fails to play
            const simDuration = activeExTrackDuration(this);
            this.simulateAudioPlay(simDuration);
          });
        }
      } else {
        this.simulateAudioPlay(60);
      }
    } else if (phase === 'completed') {
      this.audioState.isPlayingAudio = false;
      if (audioEl) audioEl.pause();
    }

    this.saveActiveState();
    this.render();
  }

  advanceCOPhase() {
    const p = this.audioState.phase;
    const count = this.audioState.listeningsCount || 2;

    if (p === 'reading') {
      this.setAudioPhase('listening_1', 0);
    } else if (p === 'listening_1') {
      this.audioState.listeningsDone = 1;
      if (count > 1) {
        this.setAudioPhase('pause', 30);
      } else {
        this.setAudioPhase('answering', 20);
      }
    } else if (p === 'pause') {
      this.setAudioPhase('listening_2', 0);
    } else if (p === 'listening_2') {
      this.audioState.listeningsDone = 2;
      this.setAudioPhase('answering', 60);
    } else if (p === 'answering') {
      this.setAudioPhase('completed', 0);
    }
  }

  skipCOPhase() {
    if (this.audioState.phaseInterval) {
      clearInterval(this.audioState.phaseInterval);
      this.audioState.phaseInterval = null;
    }
    const audioEl = document.getElementById('exam-co-audio-element');
    if (audioEl) audioEl.pause();
    this.advanceCOPhase();
  }

  resetCOSequence() {
    if (this.audioState.phaseInterval) {
      clearInterval(this.audioState.phaseInterval);
      this.audioState.phaseInterval = null;
    }
    const audioEl = document.getElementById('exam-co-audio-element');
    if (audioEl) {
      audioEl.pause();
      audioEl.currentTime = 0;
    }
    this.audioState.phase = 'ready';
    this.audioState.isPlayingAudio = false;
    this.audioState.listeningsDone = 0;
    this.saveActiveState();
    this.render();
  }

  simulateAudioPlay(durationSec = 30) {
    setTimeout(() => {
      if (this.audioState.isPlayingAudio) {
        this.advanceCOPhase();
      }
    }, durationSec * 1000);
  }

  updateCOPhaseDOM() {
    const banner = document.querySelector('.co-phase-banner');
    if (banner) {
      // Light update of banner without full re-render
      const secRem = this.audioState.phaseSecondsRemaining;
      const titleEl = banner.querySelector('div[style*="font-weight:700"]');
      if (titleEl) {
        titleEl.textContent = `Phase en cours (${secRem}s restants)`;
      }
    }
  }

  // --------------------------------------------------------------------------
  // GLOBAL 2h30 TIMER & FOCUS MODE
  // --------------------------------------------------------------------------
  startExam() {
    this.startTimer();
    this.currentSection = 'co';
    this.saveActiveState();
    this.render();
  }

  pauseExam() {
    this.pauseTimer();
  }

  resumeExam() {
    this.resumeTimer();
  }

  switchExam(examId) {
    this.currentExamId = examId;
    this.currentExam = this.getExamData(examId);
    this.saveActiveState();
    this.render();
  }

  startTimer() {
    if (this.isTimerRunning) return;
    this.isExamStarted = true;
    this.isTimerRunning = true;

    this.timerInterval = setInterval(() => {
      if (this.remainingSeconds > 0) {
        this.remainingSeconds--;
        this.updateGlobalTimerDisplay();
        if (this.remainingSeconds % 5 === 0) {
          this.saveActiveState();
        }
      } else {
        this.pauseTimer();
        this.finishExam();
      }
    }, 1000);

    this.render();
  }

  pauseTimer() {
    this.isTimerRunning = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.saveActiveState();
    this.render();
  }

  resumeTimer() {
    this.startTimer();
  }

  updateGlobalTimerDisplay() {
    const textEl = document.getElementById('exam-timer-text');
    const timerDisplay = document.getElementById('exam-global-timer-display');
    if (!textEl) return;

    const hrs = Math.floor(this.remainingSeconds / 3600);
    const mins = Math.floor((this.remainingSeconds % 3600) / 60);
    const secs = this.remainingSeconds % 60;
    textEl.textContent = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (timerDisplay) {
      timerDisplay.classList.remove('timer-warning', 'timer-danger');
      if (this.remainingSeconds <= 300) { // < 5 mins
        timerDisplay.classList.add('timer-danger');
      } else if (this.remainingSeconds <= 900) { // < 15 mins
        timerDisplay.classList.add('timer-warning');
      }
    }
  }

  toggleFocusMode() {
    this.isFocusMode = !this.isFocusMode;
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('exam-focus-mode', this.isFocusMode);
    }
    this.render();
  }

  finishExam() {
    this.pauseTimer();
    this.isExamFinished = true;
    this.currentSection = 'bilan';
    this.saveCompletedResult();
    this.saveActiveState();
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  resetExam() {
    if (typeof confirm !== 'undefined' && !confirm('Voulez-vous réinitialiser l\'ensemble de l\'examen blanc ? Toutes vos réponses actuelles seront effacées.')) return;
    this.pauseTimer();
    this.remainingSeconds = this.totalDurationSeconds;
    this.isExamStarted = false;
    this.isExamFinished = false;
    this.currentSection = 'intro';
    this.userAnswers = {
      co: {},
      ce: {},
      pe: {
        text: '',
        rubric: { 'crit-1': 3, 'crit-2': 3, 'crit-3': 3, 'crit-4': 3, 'crit-5': 3 }
      },
      po: { score: 0, notes: '' }
    };
    this.ceHighlights = {};
    this.resetCOSequence();
    this.clearActiveState();
    this.render();
  }

  // --------------------------------------------------------------------------
  // TEXT & CONNECTOR ANALYZER ENGINE
  // --------------------------------------------------------------------------
  countWords(text) {
    if (!text || typeof text !== 'string') return 0;
    const trimmed = text.trim();
    if (!trimmed) return 0;
    // Split by whitespace
    const words = trimmed.split(/\s+/).filter(w => w.length > 0);
    return words.length;
  }

  getWordCountStatus(count, peData = {}) {
    const min = peData.minWords || 225;
    const max = peData.maxWords || 275;
    const hardMin = peData.hardMinimumWords || 125;

    if (count === 0) {
      return { status: 'empty', label: 'En attente de rédaction (cible : 250 mots)', badgeClass: 'ideal' };
    }
    if (count < hardMin) {
      return { status: 'eliminatory', label: 'Alerte éliminatoire (< 125 mots = note 0/25 FEI)', badgeClass: 'eliminatory' };
    }
    if (count < min) {
      return { status: 'short', label: `Longueur insuffisante (${count}/${min} min - Pénalité FEI)`, badgeClass: 'short' };
    }
    if (count > max) {
      return { status: 'long', label: `Dépassement de longueur (${count}/${max} max - Risque de synthèse)`, badgeClass: 'long' };
    }
    return { status: 'ideal', label: `Zone idéale conforme (${count} mots • 225-275)`, badgeClass: 'ideal' };
  }

  detectConnectors(text) {
    if (!text || typeof text !== 'string') return [];
    const detected = [];
    const seenTexts = new Set();

    this.connectorCatalogue.forEach(item => {
      if (item.regex) item.regex.lastIndex = 0;
      if (item.regex && item.regex.test(text)) {
        if (!seenTexts.has(item.text.toLowerCase())) {
          seenTexts.add(item.text.toLowerCase());
          detected.push({ text: item.text, category: item.category });
        }
      }
    });

    return detected;
  }

  handlePETextInput(val) {
    this.userAnswers.pe.text = val;
    this.saveActiveState();

    const count = this.countWords(val);
    const peData = (this.currentExam && this.currentExam.sections && this.currentExam.sections.pe) || {};
    const status = this.getWordCountStatus(count, peData);
    const detected = this.detectConnectors(val);

    // Live DOM update
    const badgeEl = document.getElementById('pe-live-word-badge');
    const countDisplay = document.getElementById('pe-word-count-display');
    if (badgeEl && countDisplay) {
      badgeEl.className = `pe-word-badge ${status.badgeClass}`;
      badgeEl.innerHTML = `<span class="material-icons-round" style="font-size:16px;">pin</span> <span>${count} mot${count > 1 ? 's' : ''}</span> — ${status.label}`;
    }

    const connListEl = document.getElementById('pe-detected-connectors-list');
    const connLabelEl = document.getElementById('pe-connectors-count-label');
    if (connListEl && connLabelEl) {
      connLabelEl.textContent = `${detected.length} connecteur(s) repéré(s)`;
      if (detected.length > 0) {
        connListEl.innerHTML = detected.map(c => `<span class="pe-conn-chip" title="Catégorie : ${c.category}">✓ ${c.text}</span>`).join('');
      } else {
        connListEl.innerHTML = '<span style="font-size:0.75rem; color:var(--md-sys-color-on-surface-variant); font-style:italic;">Aucun connecteur formel détecté pour l\'instant.</span>';
      }
    }
  }

  // --------------------------------------------------------------------------
  // SCORING ENGINE & DIAGNOSTIC GENERATION (/100 POINTS)
  // --------------------------------------------------------------------------
  calculatePEScore() {
    const rubric = (this.userAnswers.pe && this.userAnswers.pe.rubric) || {};
    const sum = Object.values(rubric).reduce((a, b) => a + Number(b || 0), 0);
    return Math.min(25, Math.max(0, sum));
  }

  calculateFullScores() {
    const exam = this.currentExam || {};
    const coData = (exam.sections && exam.sections.co) || {};
    const ceData = (exam.sections && exam.sections.ce) || {};
    const peData = (exam.sections && exam.sections.pe) || {};

    // 1. CO Score
    let coScore = 0;
    let coCorrectCount = 0;
    (coData.exercises || []).forEach(ex => {
      (ex.questions || []).forEach(q => {
        if (this.userAnswers.co[q.id] === q.correct) {
          coScore += Number(q.points || 1);
          coCorrectCount++;
        }
      });
    });
    coScore = Math.min(25.0, coScore);

    // 2. CE Score
    let ceScore = 0;
    let ceCorrectCount = 0;
    (ceData.exercises || []).forEach(ex => {
      (ex.questions || []).forEach(q => {
        if (this.userAnswers.ce[q.id] === q.correct) {
          ceScore += Number(q.points || 1);
          ceCorrectCount++;
        }
      });
    });
    ceScore = Math.min(25.0, ceScore);

    // 3. PE Score
    const peWordCount = this.countWords(this.userAnswers.pe ? this.userAnswers.pe.text : '');
    let peScore = this.calculatePEScore();
    // Rule: < 125 words = note 0/25
    if (peWordCount < 125 && peWordCount > 0) {
      peScore = 0;
    }

    // 4. Totals
    const collectiveScore = coScore + ceScore + peScore; // /75.0
    const total100 = (collectiveScore / 75.0) * 100.0; // Scaled to 100

    // 5. Eliminatory Note Check (< 5.0 / 25 on any section)
    const eliminatorySections = [];
    if (coScore < 5.0) eliminatorySections.push("Compréhension Orale (CO)");
    if (ceScore < 5.0) eliminatorySections.push("Compréhension Écrite (CE)");
    if (peScore < 5.0) eliminatorySections.push("Production Écrite (PE)");
    const hasEliminatory = eliminatorySections.length > 0;

    // 6. Pass / Fail status
    const isPassed = total100 >= 50.0 && !hasEliminatory;

    // 7. Strengths & Weaknesses Diagnostic
    const strengths = [];
    const weaknesses = [];

    if (coScore >= 18.0) {
      strengths.push("Excellente écoute active : capacité à repérer rapidement les informations implicites et les nuances d'opinions.");
    } else if (coScore >= 12.5) {
      strengths.push("Compréhension orale solide sur les thématiques d'actualité générale.");
    } else {
      weaknesses.push("Compréhension orale fragile : travaillez l'écoute des débats sociologiques et des nuances de registres sur les podcasts RFI.");
    }

    if (ceScore >= 18.0) {
      strengths.push("Analyse textuelle fine : maîtrise de l'argumentation de presse et identification aisée des prises de position.");
    } else if (ceScore >= 12.5) {
      strengths.push("Bonne compréhension globale des articles de presse et des dossiers documentaires.");
    } else {
      weaknesses.push("Difficulté à distinguer les subtilités d'opinion : pratiquez l'analyse des textes d'idées et le repérage des thèses opposées.");
    }

    if (peScore >= 18.0 && peWordCount >= 225) {
      strengths.push("Rédaction formelle d'excellence : respect exemplaire des codes épistolaires, variété syntaxique et connecteurs pertinents.");
    } else if (peScore >= 12.5) {
      strengths.push("Structure argumentative claire et respect global de la consigne officielle.");
    } else {
      weaknesses.push("Production écrite perfectible : enrichissez vos connecteurs logiques de concession et soignez la mise en page de la lettre formelle.");
    }

    return {
      coScore,
      coCorrectCount,
      ceScore,
      ceCorrectCount,
      peScore,
      peWordCount,
      collectiveScore,
      total100,
      hasEliminatory,
      eliminatorySections,
      isPassed,
      strengths,
      weaknesses
    };
  }

  // --------------------------------------------------------------------------
  // PERSISTENCE (localStorage)
  // --------------------------------------------------------------------------
  saveActiveState() {
    if (typeof localStorage === 'undefined') return;
    const state = {
      currentExamId: this.currentExamId,
      currentSection: this.currentSection,
      remainingSeconds: this.remainingSeconds,
      isExamStarted: this.isExamStarted,
      isExamFinished: this.isExamFinished,
      userAnswers: this.userAnswers,
      activeExercise: this.activeExercise,
      ceHighlights: this.ceHighlights,
      savedAt: new Date().toISOString()
    };
    try {
      localStorage.setItem('delf_exam_active_state', JSON.stringify(state));
    } catch (e) {
      console.warn("Could not save exam state to localStorage", e);
    }
  }

  restoreActiveState(auto = false) {
    if (typeof localStorage === 'undefined') return;
    const saved = localStorage.getItem('delf_exam_active_state');
    if (!saved) return;
    try {
      const state = JSON.parse(saved);
      if (state && state.currentExamId) {
        this.currentExamId = state.currentExamId;
        this.currentExam = this.getExamData(this.currentExamId);
        this.currentSection = state.currentSection || 'intro';
        this.remainingSeconds = state.remainingSeconds !== undefined ? state.remainingSeconds : this.totalDurationSeconds;
        this.isExamStarted = !!state.isExamStarted;
        this.isExamFinished = !!state.isExamFinished;
        if (state.userAnswers) this.userAnswers = state.userAnswers;
        if (state.activeExercise) this.activeExercise = state.activeExercise;
        if (state.ceHighlights) this.ceHighlights = state.ceHighlights;
      }
    } catch (e) {
      console.warn("Could not parse saved exam state", e);
    }
  }

  clearActiveState() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('delf_exam_active_state');
    }
  }

  saveCompletedResult() {
    if (typeof localStorage === 'undefined') return;
    const scores = this.calculateFullScores();
    const resultEntry = {
      id: `result-${Date.now()}`,
      examId: this.currentExamId,
      examTitle: this.currentExam ? this.currentExam.title : 'DELF B2 Exam',
      date: new Date().toISOString(),
      scores: scores,
      isPassed: scores.isPassed
    };

    try {
      // Save last result
      localStorage.setItem('delf_exam_results', JSON.stringify(resultEntry));

      // Append to history list
      const history = JSON.parse(localStorage.getItem('delf_exam_history') || '[]');
      history.unshift(resultEntry);
      localStorage.setItem('delf_exam_history', JSON.stringify(history.slice(0, 10)));
    } catch (e) {
      console.warn("Could not save completed exam result", e);
    }
  }

  // --------------------------------------------------------------------------
  // DOM EVENT BINDINGS
  // --------------------------------------------------------------------------
  bindDOMEvents() {
    if (typeof document === 'undefined') return;

    // Start Intro Button
    const startIntroBtn = document.getElementById('start-exam-intro-btn');
    if (startIntroBtn) {
      startIntroBtn.addEventListener('click', () => {
        this.startTimer();
        this.switchSection('co');
      });
    }

    // Top Bar Timer Buttons
    const startBtn = document.getElementById('exam-start-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => this.startTimer());
    }

    const pauseBtn = document.getElementById('exam-pause-btn');
    if (pauseBtn) {
      pauseBtn.addEventListener('click', () => this.pauseTimer());
    }

    const resumeBtn = document.getElementById('exam-resume-btn');
    if (resumeBtn) {
      resumeBtn.addEventListener('click', () => this.resumeTimer());
    }

    const focusBtn = document.getElementById('exam-focus-toggle-btn');
    if (focusBtn) {
      focusBtn.addEventListener('click', () => this.toggleFocusMode());
    }

    const finishBtn = document.getElementById('exam-finish-btn');
    if (finishBtn) {
      finishBtn.addEventListener('click', () => {
        if (confirm("Voulez-vous soumettre votre examen et calculer votre score officiel sur 100 points ?")) {
          this.finishExam();
        }
      });
    }

    // Exam Select Dropdown
    const subjectSelect = document.getElementById('exam-subject-select');
    if (subjectSelect) {
      subjectSelect.addEventListener('change', (e) => {
        if (confirm("Changer de sujet réinitialisera l'épreuve en cours. Continuer ?")) {
          this.currentExamId = e.target.value;
          this.currentExam = this.getExamData(this.currentExamId);
          this.resetExam();
        } else {
          subjectSelect.value = this.currentExamId;
        }
      });
    }

    // Section Nav Pills
    const navPills = document.querySelectorAll('.exam-nav-pill[data-section]');
    navPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        const sec = e.currentTarget.getAttribute('data-section');
        this.switchSection(sec);
      });
    });

    // PE Textarea Input
    const peTextarea = document.getElementById('exam-pe-textarea');
    if (peTextarea) {
      peTextarea.addEventListener('input', (e) => {
        this.handlePETextInput(e.target.value);
      });
    }

    // Audio Element event listener for phase progression
    const audioEl = document.getElementById('exam-co-audio-element');
    if (audioEl) {
      audioEl.addEventListener('ended', () => {
        this.advanceCOPhase();
      });
    }
  }

  bindGlobalEvents() {
    // Listen for tab switch if integrated with main app router
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => {
        this.saveActiveState();
      });
    }
  }
}

// Helpers
function activeExTrackDuration(mod) {
  const coData = (mod.currentExam && mod.currentExam.sections && mod.currentExam.sections.co) || {};
  const exercises = coData.exercises || [];
  const activeEx = exercises[mod.activeExercise.co] || {};
  return (activeEx.listeningsCount === 1) ? 20 : 35;
}

// Auto-instantiate
if (typeof window !== 'undefined') {
  window.ExamSimulatorModule = ExamSimulatorModule;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.examSimulatorModule = new ExamSimulatorModule();
    });
  } else {
    window.examSimulatorModule = new ExamSimulatorModule();
  }
}

if (typeof global !== 'undefined') {
  global.ExamSimulatorModule = ExamSimulatorModule;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ExamSimulatorModule };
}
