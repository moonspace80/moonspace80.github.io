/* ==========================================================================
   MODULE QUIZ DE VOCABULAIRE CHRONOMÉTRÉ (10 MIN)
   FrenchDELFB2C1 - Apprentissage doux, structuré et rigoureux.
   ========================================================================== */

(function () {
  'use strict';

  class VocabQuizModule {
    constructor() {
      this.containerId = 'view-vocab-quiz';
      this.selectedLevel = 'B1';
      this.selectedLang = 'anglais'; // 'anglais', 'japonais', 'chinois'
      this.currentPhase = 'config'; // 'config', 'playing', 'result'
      
      // Timer state (10 minutes = 600 secondes)
      this.totalTimeSeconds = 600;
      this.timeRemaining = 600;
      this.timerInterval = null;
      this.startTime = null;

      // Questions progression
      this.questions = [];
      this.currentIndex = 0;
      this.answers = [];
      this.userSelections = new Set(); // Pour les choix multiples (ex: synonymes)
      this.isCurrentAnswered = false;

      // Configuration des libellés et drapeaux
      this.languagesConfig = {
        anglais: {
          name: "Anglais",
          nativeName: "English",
          flag: "🇬🇧",
          propKey: "traduction_anglais"
        },
        japonais: {
          name: "Japonais",
          nativeName: "日本語",
          flag: "🇯🇵",
          propKey: "traduction_japonais"
        },
        chinois: {
          name: "Chinois",
          nativeName: "中文",
          flag: "🇨🇳",
          propKey: "traduction_chinois"
        }
      };

      this.levelsConfig = [
        { level: "A1", label: "Découverte", color: "#4CAF50" },
        { level: "A2", label: "Survie", color: "#2E7D32" },
        { level: "B1", label: "Seuil", color: "#1976D2" },
        { level: "B2", label: "Avancé", color: "#F57C00" },
        { level: "C1", label: "Autonome", color: "#7B1FA2" },
        { level: "C2", label: "Maîtrise", color: "#C2185B" }
      ];
    }

    init() {
      this.render();
    }

    render() {
      const container = document.getElementById(this.containerId);
      if (!container) return;

      if (this.currentPhase === 'config') {
        this.renderConfigScreen(container);
      } else if (this.currentPhase === 'playing') {
        this.renderPlayingScreen(container);
      } else if (this.currentPhase === 'result') {
        this.renderResultScreen(container);
      }
    }

    // ------------------------------------------------------------------------
    // ÉCRAN 1 : CONFIGURATION (Choix Langue & Niveau)
    // ------------------------------------------------------------------------
    renderConfigScreen(container) {
      container.innerHTML = `
        <div class="vocab-quiz-container">
          <div class="quiz-hero-card">
            <div class="quiz-hero-badge">
              <span class="material-icons-round">timer</span>
              <span>Défi Chronométré • 10 Minutes</span>
            </div>
            <h1 class="quiz-title">Quiz d'Évaluation de Vocabulaire</h1>
            <p class="quiz-subtitle">
              Testez votre maîtrise lexicale à travers 4 épreuves progressives pour évaluer vos réflexes, votre précision sémantique et votre sens des nuances.
            </p>

            <div class="quiz-breakdown-grid">
              <div class="breakdown-card">
                <div class="breakdown-num">15</div>
                <div class="breakdown-label">Partie 1 : Du Français vers votre langue</div>
                <div class="breakdown-desc">QCM rapide de traduction directe</div>
              </div>
              <div class="breakdown-card">
                <div class="breakdown-num">3</div>
                <div class="breakdown-label">Partie 2 : Paires de Synonymes</div>
                <div class="breakdown-desc">Repérer les 2 mots synonymes parmi 5</div>
              </div>
              <div class="breakdown-card">
                <div class="breakdown-num">3</div>
                <div class="breakdown-label">Partie 3 : Chassez l'Intrus</div>
                <div class="breakdown-desc">Identifier le mot hors catégorie parmi 4</div>
              </div>
              <div class="breakdown-card">
                <div class="breakdown-num">10</div>
                <div class="breakdown-label">Partie 4 : De votre langue vers le Français</div>
                <div class="breakdown-desc">Restitution active du mot français</div>
              </div>
            </div>
          </div>

          <div class="quiz-setup-card">
            <!-- 1. SÉLECTION DE LA LANGUE -->
            <div class="setup-section">
              <label class="setup-section-title">
                <span class="material-icons-round">translate</span>
                1. Choisissez votre langue maternelle :
              </label>
              <div class="lang-selector-grid">
                ${Object.entries(this.languagesConfig).map(([key, lang]) => `
                  <button type="button" class="lang-choice-card ${this.selectedLang === key ? 'active' : ''}" 
                          onclick="vocabQuizModule.setLanguage('${key}')">
                    <span class="lang-flag">${lang.flag}</span>
                    <span class="lang-name">${lang.name}</span>
                    <span class="lang-native">(${lang.nativeName})</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- 2. SÉLECTION DU NIVEAU DELF -->
            <div class="setup-section">
              <label class="setup-section-title">
                <span class="material-icons-round">school</span>
                2. Choisissez le niveau DELF / DALF visé :
              </label>
              <div class="level-selector-grid">
                ${this.levelsConfig.map(lvl => `
                  <button type="button" class="level-choice-card ${this.selectedLevel === lvl.level ? 'active' : ''}" 
                          onclick="vocabQuizModule.setLevel('${lvl.level}')"
                          style="--lvl-accent: ${lvl.color};">
                    <span class="level-tag">${lvl.level}</span>
                    <span class="level-label">${lvl.label}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- BOUTON DÉMARRER -->
            <div class="setup-actions">
              <button class="md-button md-button--filled quiz-start-btn" onclick="vocabQuizModule.startQuiz()">
                <span class="material-icons-round">play_arrow</span>
                <span>Démarrer le Quiz (10:00)</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    setLanguage(langKey) {
      this.selectedLang = langKey;
      this.render();
    }

    setLevel(levelKey) {
      this.selectedLevel = levelKey;
      this.render();
    }

    // ------------------------------------------------------------------------
    // GÉNÉRATION DU QUIZ (31 questions au total)
    // ------------------------------------------------------------------------
    startQuiz() {
      this.generateQuizData();
      if (!this.questions || this.questions.length === 0) {
        alert("Impossible de charger les questions pour ce niveau. Veuillez vérifier vos données de vocabulaire.");
        return;
      }

      this.currentPhase = 'playing';
      this.currentIndex = 0;
      this.answers = [];
      this.timeRemaining = this.totalTimeSeconds;
      this.isCurrentAnswered = false;
      this.userSelections.clear();

      this.startTimer();
      this.render();
    }

    startTimer() {
      if (this.timerInterval) clearInterval(this.timerInterval);
      this.startTime = Date.now();
      
      this.timerInterval = setInterval(() => {
        this.timeRemaining--;
        this.updateTimerDisplay();

        if (this.timeRemaining <= 0) {
          clearInterval(this.timerInterval);
          this.timeRemaining = 0;
          this.endQuiz("time_out");
        }
      }, 1000);
    }

    stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    }

    formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    updateTimerDisplay() {
      const timerEl = document.getElementById('quiz-live-timer');
      const progressEl = document.getElementById('quiz-timer-bar');
      if (timerEl) {
        timerEl.textContent = this.formatTime(this.timeRemaining);
        if (this.timeRemaining <= 120) {
          timerEl.classList.add('urgent');
        } else {
          timerEl.classList.remove('urgent');
        }
      }
      if (progressEl) {
        const pct = (this.timeRemaining / this.totalTimeSeconds) * 100;
        progressEl.style.width = `${pct}%`;
      }
    }

    getDatasetForLevel(lvl) {
      if (window[`vocab_${lvl}_Dataset`]) {
        return window[`vocab_${lvl}_Dataset`];
      }
      if (window.vocabDataset) {
        return window.vocabDataset.filter(w => w.level === lvl);
      }
      return [];
    }

    shuffleArray(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    generateQuizData() {
      const questions = [];
      const langProp = this.languagesConfig[this.selectedLang].propKey;
      const vocabList = this.getDatasetForLevel(this.selectedLevel).filter(w => w[langProp] && w.word);

      // Part 1: 15 questions (Français -> Traduction)
      const part1Pool = this.shuffleArray(vocabList);
      const part1Count = Math.min(15, part1Pool.length);

      for (let i = 0; i < part1Count; i++) {
        const target = part1Pool[i];
        // Distracteurs de même niveau avec une traduction valide et différente
        const distractors = this.shuffleArray(
          vocabList.filter(w => w.id !== target.id && w[langProp] !== target[langProp])
        ).slice(0, 3).map(w => w[langProp]);

        const options = this.shuffleArray([target[langProp], ...distractors]);
        questions.push({
          phaseNumber: 1,
          phaseTitle: "Partie 1 : Du Français vers votre langue",
          type: "single_choice",
          promptWord: target.word,
          phonetic: target.phonetique || "",
          definition: target.definition || "",
          theme: target.theme || "",
          targetLanguage: this.selectedLang,
          correctAnswer: target[langProp],
          options: options,
          fullWordObj: target
        });
      }

      // Part 2: 3 séries de Synonymes
      const synBank = (window.vocabQuizData && window.vocabQuizData.synonyms && window.vocabQuizData.synonyms[this.selectedLevel]) || [];
      const synSeries = this.shuffleArray(synBank).slice(0, 3);
      synSeries.forEach((series, idx) => {
        questions.push({
          phaseNumber: 2,
          phaseTitle: "Partie 2 : Trouver la paire de Synonymes",
          type: "synonym_pair",
          promptText: "Identifiez les 2 mots synonymes parmi les 5 propositions :",
          words: this.shuffleArray(series.words),
          correctPair: series.pair,
          explanation: series.explanation
        });
      });

      // Part 3: 3 séries d'Intrus
      const oddBank = (window.vocabQuizData && window.vocabQuizData.oddOneOut && window.vocabQuizData.oddOneOut[this.selectedLevel]) || [];
      const oddSeries = this.shuffleArray(oddBank).slice(0, 3);
      oddSeries.forEach((series, idx) => {
        questions.push({
          phaseNumber: 3,
          phaseTitle: "Partie 3 : Trouver l'Intrus sémantique",
          type: "odd_one_out",
          promptText: "3 mots partagent un point commun sémantique, 1 est un intrus. Chassez l'intrus :",
          words: this.shuffleArray(series.words),
          oddWord: series.odd,
          category: series.category,
          explanation: series.explanation
        });
      });

      // Part 4: 10 questions (Traduction -> Français)
      // On tire d'autres mots ou on mélange le réservoir
      const part4Pool = this.shuffleArray(vocabList);
      const part4Count = Math.min(10, part4Pool.length);

      for (let i = 0; i < part4Count; i++) {
        const target = part4Pool[i];
        const distractors = this.shuffleArray(
          vocabList.filter(w => w.id !== target.id && w.word !== target.word)
        ).slice(0, 3).map(w => w.word);

        const options = this.shuffleArray([target.word, ...distractors]);
        questions.push({
          phaseNumber: 4,
          phaseTitle: "Partie 4 : De votre langue vers le Français",
          type: "single_choice_reverse",
          promptWord: target[langProp],
          nativeLanguageName: this.languagesConfig[this.selectedLang].name,
          correctAnswer: target.word,
          phonetic: target.phonetique || "",
          options: options,
          fullWordObj: target
        });
      }

      this.questions = questions;
    }

    // ------------------------------------------------------------------------
    // ÉCRAN 2 : JEU EN COURS (Questions 1 à 31)
    // ------------------------------------------------------------------------
    renderPlayingScreen(container) {
      if (this.currentIndex >= this.questions.length) {
        this.endQuiz("completed");
        return;
      }

      const q = this.questions[this.currentIndex];
      const totalQ = this.questions.length;
      const progressPercent = Math.round(((this.currentIndex) / totalQ) * 100);

      container.innerHTML = `
        <div class="vocab-quiz-container">
          <!-- TOP HEADER BAR -->
          <div class="quiz-header-bar">
            <div class="quiz-info-meta">
              <span class="quiz-level-pill" style="--accent: ${this.levelsConfig.find(l => l.level === this.selectedLevel)?.color || '#3B5B75'}">
                Niveau ${this.selectedLevel}
              </span>
              <span class="quiz-lang-pill">
                ${this.languagesConfig[this.selectedLang].flag} ${this.languagesConfig[this.selectedLang].name}
              </span>
              <span class="quiz-phase-pill">
                ${q.phaseTitle}
              </span>
            </div>

            <!-- CHRONO & ACTIONS -->
            <div class="quiz-timer-box">
              <span class="material-icons-round">alarm</span>
              <span id="quiz-live-timer" class="quiz-timer-text">${this.formatTime(this.timeRemaining)}</span>
              <button class="md-button md-button--text quiz-abort-btn" onclick="vocabQuizModule.confirmQuit()" title="Abandonner">
                <span class="material-icons-round">close</span>
              </button>
            </div>
          </div>

          <!-- TIME PROGRESS BAR -->
          <div class="quiz-progress-track">
            <div id="quiz-timer-bar" class="quiz-progress-fill" style="width: ${(this.timeRemaining / this.totalTimeSeconds) * 100}%;"></div>
          </div>

          <!-- QUESTION PROGRESSION INDICATOR -->
          <div class="quiz-stepper-header">
            <span>Question ${this.currentIndex + 1} sur ${totalQ}</span>
            <span>${progressPercent}% complété</span>
          </div>

          <!-- QUESTION CARD MAIN CONTAINER -->
          <div class="quiz-card-wrapper" id="quiz-question-container">
            ${this.renderQuestionContent(q)}
          </div>
        </div>
      `;
    }

    renderQuestionContent(q) {
      if (q.type === 'single_choice') {
        return this.renderPart1Content(q);
      } else if (q.type === 'synonym_pair') {
        return this.renderPart2Content(q);
      } else if (q.type === 'odd_one_out') {
        return this.renderPart3Content(q);
      } else if (q.type === 'single_choice_reverse') {
        return this.renderPart4Content(q);
      }
      return '';
    }

    // PARTIE 1 : FR -> NATALE
    renderPart1Content(q) {
      return `
        <div class="question-main-card">
          <div class="question-prompt-header">
            <span class="question-phase-badge">Partie 1 • Traduction Directe</span>
            <span class="question-theme-tag">${q.theme || 'Vocabulaire général'}</span>
          </div>

          <div class="prompt-word-display">
            <div class="prompt-word-primary">
              <span class="word-french">${q.promptWord}</span>
              <button class="quiz-audio-btn" onclick="vocabQuizModule.playAudio('${this.escapeQuotes(q.promptWord)}')" title="Écouter la prononciation">
                <span class="material-icons-round">volume_up</span>
              </button>
            </div>
            ${q.phonetic ? `<span class="word-phonetic">${q.phonetic}</span>` : ''}
            <div class="prompt-subtext">Quel est le sens de ce mot en <strong>${this.languagesConfig[this.selectedLang].name}</strong> ?</div>
          </div>

          <!-- CHOICES GRID (4 propositions) -->
          <div class="choices-grid choices-grid--2x2">
            ${q.options.map((opt, idx) => `
              <button type="button" class="choice-btn" id="choice-btn-${idx}" 
                      onclick="vocabQuizModule.handleSingleChoice('${this.escapeQuotes(opt)}', ${idx})"
                      ${this.isCurrentAnswered ? 'disabled' : ''}>
                <span class="choice-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="choice-text">${opt}</span>
              </button>
            `).join('')}
          </div>

          <!-- FEEDBACK BANNER (si répondu) -->
          <div id="quiz-feedback-box" class="quiz-feedback-box" style="display:none;"></div>
        </div>
      `;
    }

    // PARTIE 2 : PAIRE DE SYNONYMES
    renderPart2Content(q) {
      return `
        <div class="question-main-card">
          <div class="question-prompt-header">
            <span class="question-phase-badge">Partie 2 • Nuances & Synonymes</span>
            <span class="question-instruction-hint">Cliquez sur 2 cartes</span>
          </div>

          <div class="prompt-instruction-display">
            <h2 class="instruction-title">Trouvez la paire de synonymes</h2>
            <p class="instruction-desc">Parmi les 5 mots ci-dessous, deux ont un sens très proche. Sélectionnez les deux mots correspondants :</p>
          </div>

          <!-- 5 CARTES SÉLECTIONNABLES -->
          <div class="synonym-cards-grid">
            ${q.words.map((w, idx) => `
              <div class="synonym-card ${this.userSelections.has(w) ? 'selected' : ''}" 
                   id="syn-card-${idx}"
                   onclick="vocabQuizModule.toggleSynonymSelection('${this.escapeQuotes(w)}', ${idx})">
                <span class="syn-word">${w}</span>
                <button class="quiz-audio-mini" onclick="event.stopPropagation(); vocabQuizModule.playAudio('${this.escapeQuotes(w)}')" title="Prononcer">
                  <span class="material-icons-round">volume_up</span>
                </button>
              </div>
            `).join('')}
          </div>

          <!-- ACTION VALIDATION -->
          <div class="synonym-action-bar">
            <div class="syn-selection-counter">
              Mots sélectionnés : <strong>${this.userSelections.size} / 2</strong>
            </div>
            <button class="md-button md-button--filled" id="syn-validate-btn"
                    onclick="vocabQuizModule.validateSynonymPair()"
                    ${this.userSelections.size !== 2 || this.isCurrentAnswered ? 'disabled' : ''}>
              <span class="material-icons-round">done_all</span>
              <span>Valider la paire</span>
            </button>
          </div>

          <div id="quiz-feedback-box" class="quiz-feedback-box" style="display:none;"></div>
        </div>
      `;
    }

    // PARTIE 3 : TROUVER L'INTRUS
    renderPart3Content(q) {
      return `
        <div class="question-main-card">
          <div class="question-prompt-header">
            <span class="question-phase-badge">Partie 3 • Chassez l'Intrus</span>
            <span class="question-instruction-hint">1 seul mot ne correspond pas</span>
          </div>

          <div class="prompt-instruction-display">
            <h2 class="instruction-title">Quel mot est l'intrus ?</h2>
            <p class="instruction-desc">Trois mots partagent une catégorie ou un champ sémantique commun. Cliquez sur celui qui n'a pas sa place :</p>
          </div>

          <!-- 4 CARTES D'INTRUS -->
          <div class="odd-cards-grid">
            ${q.words.map((w, idx) => `
              <button type="button" class="odd-choice-btn" id="odd-card-${idx}"
                      onclick="vocabQuizModule.handleOddSelection('${this.escapeQuotes(w)}', ${idx})"
                      ${this.isCurrentAnswered ? 'disabled' : ''}>
                <span class="odd-word">${w}</span>
                <span class="quiz-audio-mini" onclick="event.stopPropagation(); vocabQuizModule.playAudio('${this.escapeQuotes(w)}')" title="Prononcer">
                  <span class="material-icons-round">volume_up</span>
                </span>
              </button>
            `).join('')}
          </div>

          <div id="quiz-feedback-box" class="quiz-feedback-box" style="display:none;"></div>
        </div>
      `;
    }

    // PARTIE 4 : NATALE -> FR
    renderPart4Content(q) {
      return `
        <div class="question-main-card">
          <div class="question-prompt-header">
            <span class="question-phase-badge">Partie 4 • Restitution en Français</span>
            <span class="question-theme-tag">${q.fullWordObj?.theme || 'Vocabulaire cible'}</span>
          </div>

          <div class="prompt-word-display">
            <div class="prompt-native-badge">Mot en ${q.nativeLanguageName}</div>
            <div class="word-native-target">${q.promptWord}</div>
            <div class="prompt-subtext">Retrouvez le mot équivalent en <strong>français</strong> :</div>
          </div>

          <!-- CHOICES GRID (4 propositions en français) -->
          <div class="choices-grid choices-grid--2x2">
            ${q.options.map((opt, idx) => `
              <button type="button" class="choice-btn" id="choice-btn-${idx}" 
                      onclick="vocabQuizModule.handleSingleChoiceReverse('${this.escapeQuotes(opt)}', ${idx})"
                      ${this.isCurrentAnswered ? 'disabled' : ''}>
                <span class="choice-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="choice-text choice-text--french">${opt}</span>
              </button>
            `).join('')}
          </div>

          <div id="quiz-feedback-box" class="quiz-feedback-box" style="display:none;"></div>
        </div>
      `;
    }

    // ------------------------------------------------------------------------
    // INTERACTIONS & VALIDATION PAR TYPE DE QUESTION
    // ------------------------------------------------------------------------

    // Gestion Partie 1
    handleSingleChoice(selectedText, btnIndex) {
      if (this.isCurrentAnswered) return;
      this.isCurrentAnswered = true;

      const q = this.questions[this.currentIndex];
      const isCorrect = (selectedText.trim() === q.correctAnswer.trim());
      
      this.answers.push({
        questionIndex: this.currentIndex,
        phaseNumber: 1,
        isCorrect: isCorrect,
        userAnswer: selectedText,
        correctAnswer: q.correctAnswer,
        word: q.promptWord
      });

      // Visuels sur les boutons
      q.options.forEach((opt, idx) => {
        const btn = document.getElementById(`choice-btn-${idx}`);
        if (!btn) return;
        btn.disabled = true;
        if (opt.trim() === q.correctAnswer.trim()) {
          btn.classList.add('btn-correct');
        } else if (idx === btnIndex && !isCorrect) {
          btn.classList.add('btn-wrong');
        }
      });

      this.showFeedbackBanner({
        isCorrect: isCorrect,
        title: isCorrect ? "Excellent !" : "À retenir :",
        detail: `« <strong>${q.promptWord}</strong> » se traduit par « <strong>${q.correctAnswer}</strong> ».`,
        definition: q.definition
      });
    }

    // Gestion Partie 2 (Synonymes)
    toggleSynonymSelection(word, cardIdx) {
      if (this.isCurrentAnswered) return;

      if (this.userSelections.has(word)) {
        this.userSelections.delete(word);
      } else {
        if (this.userSelections.size < 2) {
          this.userSelections.add(word);
        }
      }

      // Re-render partiel de la grille de synonymes
      const q = this.questions[this.currentIndex];
      q.words.forEach((w, idx) => {
        const el = document.getElementById(`syn-card-${idx}`);
        if (el) {
          if (this.userSelections.has(w)) {
            el.classList.add('selected');
          } else {
            el.classList.remove('selected');
          }
        }
      });

      const validateBtn = document.getElementById('syn-validate-btn');
      if (validateBtn) {
        validateBtn.disabled = (this.userSelections.size !== 2);
      }
      const counterEl = document.querySelector('.syn-selection-counter strong');
      if (counterEl) {
        counterEl.textContent = `${this.userSelections.size} / 2`;
      }
    }

    validateSynonymPair() {
      if (this.isCurrentAnswered || this.userSelections.size !== 2) return;
      this.isCurrentAnswered = true;

      const q = this.questions[this.currentIndex];
      const selectedArr = Array.from(this.userSelections);
      const isCorrect = (
        q.correctPair.includes(selectedArr[0]) &&
        q.correctPair.includes(selectedArr[1])
      );

      this.answers.push({
        questionIndex: this.currentIndex,
        phaseNumber: 2,
        isCorrect: isCorrect,
        userAnswer: selectedArr.join(' & '),
        correctAnswer: q.correctPair.join(' & '),
        explanation: q.explanation
      });

      // Coloration des cartes
      q.words.forEach((w, idx) => {
        const card = document.getElementById(`syn-card-${idx}`);
        if (!card) return;
        if (q.correctPair.includes(w)) {
          card.classList.add('card-correct');
        } else if (this.userSelections.has(w) && !isCorrect) {
          card.classList.add('card-wrong');
        }
      });

      const validateBtn = document.getElementById('syn-validate-btn');
      if (validateBtn) validateBtn.disabled = true;

      this.showFeedbackBanner({
        isCorrect: isCorrect,
        title: isCorrect ? "Bien vu !" : "Paire correcte :",
        detail: `La paire de synonymes était : <strong>${q.correctPair.join(' ↔ ')}</strong>.`,
        definition: q.explanation
      });
    }

    // Gestion Partie 3 (Intrus)
    handleOddSelection(selectedWord, cardIdx) {
      if (this.isCurrentAnswered) return;
      this.isCurrentAnswered = true;

      const q = this.questions[this.currentIndex];
      const isCorrect = (selectedWord.trim() === q.oddWord.trim());

      this.answers.push({
        questionIndex: this.currentIndex,
        phaseNumber: 3,
        isCorrect: isCorrect,
        userAnswer: selectedWord,
        correctAnswer: q.oddWord,
        category: q.category,
        explanation: q.explanation
      });

      q.words.forEach((w, idx) => {
        const card = document.getElementById(`odd-card-${idx}`);
        if (!card) return;
        card.disabled = true;
        if (w.trim() === q.oddWord.trim()) {
          card.classList.add('card-odd-detected');
        } else if (idx === cardIdx && !isCorrect) {
          card.classList.add('card-wrong');
        } else {
          card.classList.add('card-category-peer');
        }
      });

      this.showFeedbackBanner({
        isCorrect: isCorrect,
        title: isCorrect ? "Bravo, intrus débusqué !" : `L'intrus était : ${q.oddWord}`,
        detail: `Catégorie commune : <strong>${q.category}</strong>.`,
        definition: q.explanation
      });
    }

    // Gestion Partie 4 (Inverse)
    handleSingleChoiceReverse(selectedText, btnIndex) {
      if (this.isCurrentAnswered) return;
      this.isCurrentAnswered = true;

      const q = this.questions[this.currentIndex];
      const isCorrect = (selectedText.trim() === q.correctAnswer.trim());

      this.answers.push({
        questionIndex: this.currentIndex,
        phaseNumber: 4,
        isCorrect: isCorrect,
        userAnswer: selectedText,
        correctAnswer: q.correctAnswer,
        nativeWord: q.promptWord
      });

      q.options.forEach((opt, idx) => {
        const btn = document.getElementById(`choice-btn-${idx}`);
        if (!btn) return;
        btn.disabled = true;
        if (opt.trim() === q.correctAnswer.trim()) {
          btn.classList.add('btn-correct');
        } else if (idx === btnIndex && !isCorrect) {
          btn.classList.add('btn-wrong');
        }
      });

      this.showFeedbackBanner({
        isCorrect: isCorrect,
        title: isCorrect ? "Excellent !" : "Le mot exact :",
        detail: `« <strong>${q.promptWord}</strong> » correspond à « <strong>${q.correctAnswer}</strong> ».`,
        definition: q.phonetic ? `Prononciation : ${q.phonetic}` : ''
      });
    }

    showFeedbackBanner({ isCorrect, title, detail, definition }) {
      const box = document.getElementById('quiz-feedback-box');
      if (!box) return;

      const isLast = (this.currentIndex === this.questions.length - 1);
      const nextBtnLabel = isLast ? "Voir mon bilan final" : "Question suivante";

      box.className = `quiz-feedback-box ${isCorrect ? 'feedback-success' : 'feedback-error'}`;
      box.innerHTML = `
        <div class="feedback-content">
          <div class="feedback-icon-row">
            <span class="material-icons-round feedback-icon">
              ${isCorrect ? 'check_circle' : 'cancel'}
            </span>
            <span class="feedback-title">${title}</span>
          </div>
          <div class="feedback-detail">${detail}</div>
          ${definition ? `<div class="feedback-subnote">${definition}</div>` : ''}
        </div>
        <div class="feedback-actions">
          <button class="md-button md-button--filled feedback-next-btn" onclick="vocabQuizModule.nextQuestion()">
            <span>${nextBtnLabel}</span>
            <span class="material-icons-round">arrow_forward</span>
          </button>
        </div>
      `;
      box.style.display = 'flex';
      box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    nextQuestion() {
      this.currentIndex++;
      this.isCurrentAnswered = false;
      this.userSelections.clear();
      this.render();
    }

    // ------------------------------------------------------------------------
    // ÉCRAN 3 : BILAN ET ANALYSE DU SCORE
    // ------------------------------------------------------------------------
    endQuiz(reason) {
      this.stopTimer();
      this.currentPhase = 'result';

      // Si abandon ou time out avant la fin, remplir les réponses manquantes
      while (this.answers.length < this.questions.length) {
        const q = this.questions[this.answers.length];
        this.answers.push({
          questionIndex: this.answers.length,
          phaseNumber: q.phaseNumber,
          isCorrect: false,
          userAnswer: "(Non répondu - temps écoulé)",
          correctAnswer: q.correctAnswer || (q.correctPair && q.correctPair.join(' & ')) || q.oddWord,
          timedOut: true
        });
      }

      this.render();
    }

    renderResultScreen(container) {
      const totalScore = this.answers.filter(a => a.isCorrect).length;
      const totalQuestions = this.questions.length;
      const percentage = Math.round((totalScore / totalQuestions) * 100);
      const timeSpent = this.totalTimeSeconds - this.timeRemaining;

      // Calcul par phase
      const phaseStats = [1, 2, 3, 4].map(pNum => {
        const pAnswers = this.answers.filter(a => a.phaseNumber === pNum);
        const pCorrect = pAnswers.filter(a => a.isCorrect).length;
        const pTotal = pAnswers.length;
        return {
          phase: pNum,
          correct: pCorrect,
          total: pTotal,
          pct: pTotal > 0 ? Math.round((pCorrect / pTotal) * 100) : 0
        };
      });

      let appreciation = "Bel effort d'entraînement !";
      let appreciationColor = "#1976D2";
      if (percentage >= 85) {
        appreciation = "Remarquable ! Maîtrise lexicale excellente.";
        appreciationColor = "#2E7D32";
      } else if (percentage >= 65) {
        appreciation = "Très solide ! Bonne acquisition du niveau visé.";
        appreciationColor = "#4CAF50";
      } else if (percentage < 50) {
        appreciation = "Vocabulaire à consolider avec des cartes mémoires.";
        appreciationColor = "#D32F2F";
      }

      container.innerHTML = `
        <div class="vocab-quiz-container">
          <div class="result-hero-card">
            <span class="result-tag" style="background:${appreciationColor}; color:#fff;">
              ${this.selectedLevel} • ${this.languagesConfig[this.selectedLang].name}
            </span>
            <h1 class="result-title">${appreciation}</h1>
            <p class="result-subtitle">Quiz de 10 minutes complété en <strong>${this.formatTime(timeSpent)}</strong>.</p>

            <div class="result-score-circle" style="border-color: ${appreciationColor};">
              <span class="score-number">${totalScore}</span>
              <span class="score-total">/ ${totalQuestions}</span>
              <span class="score-percent">${percentage}% de réussite</span>
            </div>

            <!-- PHASES DETAIL -->
            <div class="result-phases-row">
              <div class="phase-res-box">
                <span class="phase-res-title">Partie 1 (FR ➔ ${this.languagesConfig[this.selectedLang].name})</span>
                <span class="phase-res-score">${phaseStats[0].correct} / ${phaseStats[0].total}</span>
                <span class="phase-res-bar"><span style="width: ${phaseStats[0].pct}%;"></span></span>
              </div>
              <div class="phase-res-box">
                <span class="phase-res-title">Partie 2 (Synonymes)</span>
                <span class="phase-res-score">${phaseStats[1].correct} / ${phaseStats[1].total}</span>
                <span class="phase-res-bar"><span style="width: ${phaseStats[1].pct}%;"></span></span>
              </div>
              <div class="phase-res-box">
                <span class="phase-res-title">Partie 3 (Intrus)</span>
                <span class="phase-res-score">${phaseStats[2].correct} / ${phaseStats[2].total}</span>
                <span class="phase-res-bar"><span style="width: ${phaseStats[2].pct}%;"></span></span>
              </div>
              <div class="phase-res-box">
                <span class="phase-res-title">Partie 4 (${this.languagesConfig[this.selectedLang].name} ➔ FR)</span>
                <span class="phase-res-score">${phaseStats[3].correct} / ${phaseStats[3].total}</span>
                <span class="phase-res-bar"><span style="width: ${phaseStats[3].pct}%;"></span></span>
              </div>
            </div>

            <div class="result-actions">
              <button class="md-button md-button--filled" onclick="vocabQuizModule.startQuiz()">
                <span class="material-icons-round">replay</span>
                <span>Rejouer une nouvelle série (${this.selectedLevel})</span>
              </button>
              <button class="md-button md-button--outlined" onclick="vocabQuizModule.resetToConfig()">
                <span class="material-icons-round">tune</span>
                <span>Changer de niveau ou de langue</span>
              </button>
              <button class="md-button md-button--text" onclick="app.switchTab('vocabulary')">
                <span class="material-icons-round">style</span>
                <span>Consulter les fiches mémoires</span>
              </button>
            </div>
          </div>

          <!-- DÉTAIL DES RÉPONSES (ACCORDÉON DE CORRECTION) -->
          <div class="review-answers-card">
            <h2 class="review-title">
              <span class="material-icons-round">fact_check</span>
              Corrigé détaillé de votre session
            </h2>
            <div class="review-list">
              ${this.answers.map((ans, idx) => {
                const q = this.questions[idx];
                return `
                  <div class="review-item ${ans.isCorrect ? 'item-correct' : 'item-error'}">
                    <div class="review-item-icon">
                      <span class="material-icons-round">${ans.isCorrect ? 'check' : 'close'}</span>
                    </div>
                    <div class="review-item-body">
                      <div class="review-item-header">
                        <span class="review-qnum">#${idx + 1} • ${q.phaseTitle}</span>
                        ${ans.isCorrect ? '<span class="status-badge-ok">+1 pt</span>' : '<span class="status-badge-err">0 pt</span>'}
                      </div>
                      <div class="review-item-prompt">
                        ${q.promptWord ? `Mot cible : <strong>${q.promptWord}</strong>` : (q.promptText || '')}
                      </div>
                      <div class="review-item-answers">
                        <span>Votre réponse : <strong class="${ans.isCorrect ? 'text-ok' : 'text-err'}">${ans.userAnswer}</strong></span>
                        ${!ans.isCorrect ? `<span>Réponse attendue : <strong class="text-expected">${ans.correctAnswer}</strong></span>` : ''}
                      </div>
                      ${q.explanation ? `<div class="review-item-expl">${q.explanation}</div>` : ''}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;
    }

    resetToConfig() {
      this.stopTimer();
      this.currentPhase = 'config';
      this.render();
    }

    confirmQuit() {
      if (confirm("Voulez-vous vraiment interrompre le quiz ? Votre progression sera clôturée.")) {
        this.endQuiz("aborted");
      }
    }

    // ------------------------------------------------------------------------
    // SYNTHÈSE VOCALE (AUDIO)
    // ------------------------------------------------------------------------
    playAudio(text) {
      if (!text) return;
      if (window.KokoroTTS && typeof window.KokoroTTS.speak === 'function') {
        window.KokoroTTS.speak(text, 'fr');
        return;
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR';
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
      }
    }

    escapeQuotes(str) {
      if (!str) return '';
      return String(str).replace(/'/g, "\\'").replace(/"/g, '&quot;');
    }
  }

  // Instanciation globale
  window.vocabQuizModule = new VocabQuizModule();

  // Initialisation au chargement du DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.vocabQuizModule.init();
    });
  } else {
    window.vocabQuizModule.init();
  }
})();
