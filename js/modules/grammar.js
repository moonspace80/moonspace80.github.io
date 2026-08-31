/* ==========================================================================
   MODULE 4: GRAMMAIRE, CONJUGAISON & ORTHOGRAPHE ENGINE
   Refonte interactive : Mode Pas-à-Pas, Validation Immédiate, Jauge XP,
   Typographie littéraire soignée & Persistance par niveau
   ========================================================================== */

class GrammarModule {
  constructor() {
    this.dataset = window.grammarDataset || [];
    this.scores = this.loadScores();
    this.detailedProgress = this.loadDetailedProgress();
    this.syncLegacyScores();

    this.selectedLevel = this.getInitialLevel();
    this.selectedCategory = 'ALL';
    this.searchQuery = '';

    this.currentTopicIndex = 0;
    this.currentQuestionIdx = 0;
    this.currentLessonAnswers = {};
    this.filteredDataset = [];

    this.initDOM();
    this.applyFilters();
  }

  /* ------------------------------------------------------------------------
     PERSISTANCE & GESTION DES SCORES (localStorage)
     ------------------------------------------------------------------------ */
  loadScores() {
    try {
      const saved = localStorage.getItem('delf_grammar_scores');
      if (!saved) return {};
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        const cleanScores = {};
        Object.entries(parsed).forEach(([k, v]) => {
          let num = typeof v === 'number' ? v : (v && typeof v.percent === 'number' ? v.percent : parseInt(v, 10));
          if (!isNaN(num)) {
            cleanScores[k] = Math.max(0, Math.min(100, Math.round(num)));
          }
        });
        return cleanScores;
      }
      return {};
    } catch (e) {
      console.warn('Erreur chargement delf_grammar_scores:', e);
      return {};
    }
  }

  loadDetailedProgress() {
    try {
      const saved = localStorage.getItem('delf_grammar_progress');
      if (!saved) return { scores: {}, totalXp: 0, completedCount: 0 };
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        return {
          scores: (parsed.scores && typeof parsed.scores === 'object' && !Array.isArray(parsed.scores)) ? parsed.scores : {},
          totalXp: typeof parsed.totalXp === 'number' ? parsed.totalXp : 0,
          completedCount: typeof parsed.completedCount === 'number' ? parsed.completedCount : 0
        };
      }
      return { scores: {}, totalXp: 0, completedCount: 0 };
    } catch (e) {
      console.warn('Erreur chargement delf_grammar_progress:', e);
      return { scores: {}, totalXp: 0, completedCount: 0 };
    }
  }

  /**
   * Synchronise les scores legacy (présents dans delf_grammar_scores mais pas dans detailedProgress)
   */
  syncLegacyScores() {
    if (!this.detailedProgress.scores || typeof this.detailedProgress.scores !== 'object') {
      this.detailedProgress.scores = {};
    }

    let modified = false;
    Object.entries(this.scores).forEach(([topicId, rawPct]) => {
      let pct = typeof rawPct === 'number' ? rawPct : (rawPct && typeof rawPct.percent === 'number' ? rawPct.percent : parseInt(rawPct, 10));
      if (isNaN(pct)) pct = 0;

      if (!this.detailedProgress.scores[topicId]) {
        const topic = this.dataset.find(d => d.id === topicId);
        const qCount = (topic && topic.questions && topic.questions.length > 0) ? topic.questions.length : 1;
        const correctCount = Math.round((pct / 100) * qCount);
        const isPerfect = (pct === 100);
        const xp = (correctCount * 10) + (isPerfect ? 5 : 0);

        this.detailedProgress.scores[topicId] = {
          score: correctCount,
          total: qCount,
          percent: pct,
          xp: xp,
          completedAt: new Date().toISOString(),
          completed: true
        };
        modified = true;
      }
    });

    if (modified) {
      this.saveScores();
    }
  }

  getInitialLevel() {
    const userLevel = localStorage.getItem('delf_user_level');
    if (userLevel && ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'ALL'].includes(userLevel)) {
      return (userLevel === 'C2') ? 'C1' : userLevel;
    }
    return 'B2';
  }

  saveScores() {
    try {
      localStorage.setItem('delf_grammar_scores', JSON.stringify(this.scores));
      
      let totalXp = 0;
      Object.keys(this.detailedProgress.scores || {}).forEach(k => {
        totalXp += (this.detailedProgress.scores[k].xp || 0);
      });
      this.detailedProgress.totalXp = totalXp;
      this.detailedProgress.completedCount = Object.keys(this.scores).length;

      localStorage.setItem('delf_grammar_progress', JSON.stringify(this.detailedProgress));

      if (window.app && typeof window.app.updateStats === 'function') {
        window.app.updateStats();
      }
    } catch (e) {
      console.warn('Erreur sauvegarde scores grammaire:', e);
    }
  }

  /* ------------------------------------------------------------------------
     INITIALISATION DU DOM & ÉCOUTEURS D'ÉVÉNEMENTS
     ------------------------------------------------------------------------ */
  initDOM() {
    this.xpBannerContainer = document.getElementById('grammar-xp-banner');
    this.topicListContainer = document.getElementById('grammar-topic-list');
    this.levelSelect = document.getElementById('grammar-level-select');
    this.categorySelect = document.getElementById('grammar-category-select');
    this.searchInput = document.getElementById('grammar-search-input');

    // Alias pour la compatibilité avec app.js
    this.levelFilter = this.levelSelect;

    this.ruleTitleEl = document.getElementById('grammar-rule-title');
    this.ruleContentEl = document.getElementById('grammar-rule-content');
    this.levelTagEl = document.getElementById('grammar-level-tag');
    this.drillQuestionsEl = document.getElementById('grammar-drill-questions');
    this.submitBtn = document.getElementById('submit-grammar-btn');
    this.resetBtn = document.getElementById('reset-grammar-btn');
    this.scoreDisplay = document.getElementById('grammar-score-display');

    if (this.levelSelect) {
      const normalizedLevel = (this.selectedLevel === 'C2') ? 'C1' : this.selectedLevel;
      this.levelSelect.value = normalizedLevel;
      this.levelSelect.addEventListener('change', (e) => {
        this.selectedLevel = e.target.value;
        this.applyFilters();
      });
    }

    if (this.categorySelect) {
      this.categorySelect.addEventListener('change', (e) => {
        this.selectedCategory = e.target.value;
        this.applyFilters();
      });
    }

    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.applyFilters(true);
      });
    }

    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => this.retryCurrentTopic());
    }
    if (this.submitBtn) {
      this.submitBtn.style.display = 'none';
    }

    const prevBtn = document.getElementById('grammar-prev-btn');
    const nextBtn = document.getElementById('grammar-next-btn');
    if (prevBtn) {
      prevBtn.onclick = () => this.prevTopic();
    }
    if (nextBtn) {
      nextBtn.onclick = () => this.nextTopic();
    }

    // Navigation Clavier Accessible & Fluide
    document.addEventListener('keydown', (e) => {
      const grammarPanel = document.getElementById('view-grammar');
      if (!grammarPanel || !grammarPanel.classList.contains('view-panel--active')) return;
      
      const questModal = document.getElementById('quest-runner-modal');
      if (questModal && questModal.style.display !== 'none' && questModal.offsetParent !== null) return;

      const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

      const topic = this.filteredDataset[this.currentTopicIndex];
      if (!topic || !topic.questions) return;
      const currentQ = topic.questions[this.currentQuestionIdx];
      const isAnswered = (this.currentLessonAnswers[this.currentQuestionIdx] !== undefined);

      if (!isAnswered && currentQ && currentQ.options) {
        let optIdx = -1;
        if (e.key === '1' || e.key === 'a' || e.key === 'A') optIdx = 0;
        else if (e.key === '2' || e.key === 'b' || e.key === 'B') optIdx = 1;
        else if (e.key === '3' || e.key === 'c' || e.key === 'C') optIdx = 2;
        else if (e.key === '4' || e.key === 'd' || e.key === 'D') optIdx = 3;
        
        if (optIdx >= 0 && optIdx < currentQ.options.length) {
          e.preventDefault();
          this.handleOptionClick(this.currentQuestionIdx, optIdx);
          return;
        }
      }

      if (isAnswered && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        const totalQuestions = topic.questions.length;
        if (this.currentQuestionIdx < totalQuestions - 1) {
          this.nextQuestion();
        } else if (this.currentQuestionIdx === totalQuestions - 1) {
          this.finishLesson();
        }
      }
    });
  }

  /* ------------------------------------------------------------------------
     FILTRAGE ET SYNCHRONISATION
     ------------------------------------------------------------------------ */
  applyFilters(isSearching = false) {
    const targetLevel = (this.selectedLevel === 'C2') ? 'C1' : this.selectedLevel;
    const normalizeStr = s => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
    const normalizedQuery = normalizeStr(this.searchQuery);

    this.filteredDataset = this.dataset.filter(item => {
      const matchLevel = targetLevel === 'ALL' || item.levelCode === targetLevel;
      const matchCategory = this.selectedCategory === 'ALL' || item.category === this.selectedCategory;
      
      let matchSearch = true;
      if (normalizedQuery) {
        const titleStr = normalizeStr(item.title);
        const ruleTitleStr = normalizeStr(item.ruleTitle);
        const categoryStr = normalizeStr(item.category);
        const ruleContentStr = normalizeStr(item.ruleContent);
        matchSearch = titleStr.includes(normalizedQuery) || 
                      ruleTitleStr.includes(normalizedQuery) ||
                      categoryStr.includes(normalizedQuery) ||
                      ruleContentStr.includes(normalizedQuery);
      }

      return matchLevel && matchCategory && matchSearch;
    });

    if (!isSearching || this.currentTopicIndex >= this.filteredDataset.length) {
      this.currentTopicIndex = 0;
    }

    this.currentQuestionIdx = 0;
    this.currentLessonAnswers = {};

    this.renderXpBanner();
    this.renderTopicList();
    this.renderTopic();
  }

  render() {
    if (this.levelSelect && this.selectedLevel) {
      const normalizedLevel = (this.selectedLevel === 'C2') ? 'C1' : this.selectedLevel;
      this.levelSelect.value = normalizedLevel;
    }
    this.applyFilters();
  }

  /* ------------------------------------------------------------------------
     RENDU DE LA BANNIÈRE XP & PROGRESSION
     ------------------------------------------------------------------------ */
  renderXpBanner() {
    if (!this.xpBannerContainer) return;

    const targetLevel = this.selectedLevel;
    let levelTopics = this.dataset;
    let levelLabel = 'Tous les niveaux (A1 à C2)';
    let levelIcon = 'school';

    if (targetLevel !== 'ALL') {
      levelTopics = this.dataset.filter(d => d.levelCode === targetLevel);
      const levelNames = {
        'A1': 'Niveau A1 (Découverte)',
        'A2': 'Niveau A2 (Élémentaire)',
        'B1': 'Niveau B1 (Intermédiaire)',
        'B2': 'Niveau B2 (Avancé)',
        'C1': 'Niveau C1 (Autonomie)',
        'C2': 'Niveau C2 (Expert)'
      };
      levelLabel = levelNames[targetLevel] || ('Niveau ' + targetLevel);
      levelIcon = 'emoji_events';
    }

    const totalInLevel = levelTopics.length;
    let completedInLevel = 0;
    let totalXpEarned = 0;

    levelTopics.forEach(t => {
      if (this.scores[t.id] !== undefined) {
        completedInLevel++;
      }
    });

    Object.keys(this.detailedProgress.scores || {}).forEach(k => {
      totalXpEarned += (this.detailedProgress.scores[k].xp || 0);
    });

    const completionPct = totalInLevel > 0 ? Math.round((completedInLevel / totalInLevel) * 100) : 0;

    this.xpBannerContainer.innerHTML = `
      <div class="grammar-xp-banner__top">
        <div class="grammar-xp-banner__level-info">
          <div class="grammar-level-avatar">
            <span class="material-icons-round">${levelIcon}</span>
          </div>
          <div class="grammar-level-texts">
            <h3>${levelLabel}</h3>
            <p>Maîtrise grammaticale, précision linguistique & conjugaison CECRL</p>
          </div>
        </div>

        <div class="grammar-xp-banner__stats">
          <div class="grammar-stat-chip" title="Leçons validées dans ce palier">
            <span class="material-icons-round chip-icon">check_circle</span>
            <span>${completedInLevel} / ${totalInLevel} leçon${totalInLevel > 1 ? 's' : ''} validée${completedInLevel > 1 ? 's' : ''}</span>
          </div>
          <div class="grammar-stat-chip chip-xp" title="Points d'expérience cumulés en grammaire">
            <span class="material-icons-round chip-icon">stars</span>
            <span>${totalXpEarned} XP</span>
          </div>
        </div>
      </div>

      <div class="grammar-xp-banner__gauge">
        <div class="grammar-progress-track">
          <div class="grammar-progress-fill" style="width: ${completionPct}%;"></div>
        </div>
        <span class="grammar-progress-pct">${completionPct}%</span>
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     RENDU DE LA LISTE DES LEÇONS (SIDEBAR)
     ------------------------------------------------------------------------ */
  renderTopicList() {
    if (!this.topicListContainer) return;

    const countPill = document.querySelector('.grammar-menu-header .lessons-count-pill');
    if (countPill) {
      countPill.textContent = `${this.filteredDataset.length} leçon${this.filteredDataset.length > 1 ? 's' : ''}`;
    }

    if (this.filteredDataset.length === 0) {
      this.topicListContainer.innerHTML = `
        <div style="padding: 24px 16px; font-size:0.875rem; color:var(--md-sys-color-on-surface-variant); text-align:center; display:flex; flex-direction:column; align-items:center; gap:8px;">
          <span class="material-icons-round" style="font-size:32px; color:var(--md-sys-color-outline);">search_off</span>
          <span>Aucune leçon ne correspond aux critères sélectionnés.</span>
        </div>
      `;
      return;
    }

    this.topicListContainer.innerHTML = this.filteredDataset.map((item, idx) => {
      const isCompleted = this.scores[item.id] !== undefined;
      const score = isCompleted ? this.scores[item.id] : null;
      const isActive = idx === this.currentTopicIndex;
      
      const catBadge = item.category === 'grammaire' ? '📖 Grammaire' : 
                       item.category === 'conjugaison' ? '⚙️ Conjugaison' : '✍️ Orthographe';

      const statusIcon = isCompleted ? 'check_circle' : (isActive ? 'radio_button_checked' : 'radio_button_unchecked');

      // Titre nettoyé et numéro de leçon distinct
      const cleanTitle = item.title.replace(/^[A-C][12]\.\d+\s*/i, '');
      const lessonNumber = item.title.match(/^[A-C][12]\.\d+/i) ? item.title.match(/^[A-C][12]\.\d+/i)[0] : `${item.levelCode}.${idx + 1}`;

      return `
        <button class="grammar-topic-btn ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
                onclick="window.grammarModule.selectTopic(${idx})"
                title="${item.title}">
          <div class="topic-status-wrapper">
            <span class="material-icons-round topic-status-icon">${statusIcon}</span>
          </div>
          <div class="topic-info">
            <div class="topic-title">${cleanTitle}</div>
            <div class="topic-meta">
              <span class="meta-level-tag">${lessonNumber}</span>
              <span class="meta-cat-tag">${catBadge}</span>
              ${isCompleted ? `<span class="meta-score-tag">${score}%</span>` : ''}
            </div>
          </div>
        </button>
      `;
    }).join('');
  }

  selectTopic(index) {
    if (index < 0 || index >= this.filteredDataset.length) return;
    this.currentTopicIndex = index;
    this.currentQuestionIdx = 0;
    this.currentLessonAnswers = {};

    this.renderTopicList();
    this.renderTopic();

    const ruleCard = document.getElementById('grammar-rule-card');
    if (ruleCard) {
      ruleCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  prevTopic() {
    if (this.currentTopicIndex > 0) {
      this.selectTopic(this.currentTopicIndex - 1);
    }
  }

  nextTopic() {
    if (this.currentTopicIndex < this.filteredDataset.length - 1) {
      this.selectTopic(this.currentTopicIndex + 1);
    }
  }

  retryCurrentTopic() {
    this.currentQuestionIdx = 0;
    this.currentLessonAnswers = {};
    this.renderDrill();
  }

  /* ------------------------------------------------------------------------
     MISE EN VALEUR ET RENDU DE LA FICHE DE RÈGLE
     ------------------------------------------------------------------------ */
  enhanceRuleContent(rawHtml) {
    if (!rawHtml) return '';

    let enhanced = rawHtml;

    // 1. Alertes préfixées par ⚠️
    enhanced = enhanced.replace(/<p>\s*⚠️\s*(.*?)<\/p>/gi, (match, content) => {
      return `
        <div class="grammar-callout">
          <div class="callout-header">
            <span class="material-icons-round">warning_amber</span>
            <span>Point d'attention :</span>
          </div>
          <div>${content}</div>
        </div>
      `;
    });

    // 2. Encadrés d'alertes & remarques avec mot-clé (Attention, Remarque, Exception, Piège, etc.)
    enhanced = enhanced.replace(/<p>\s*(?:<strong>)?\s*(Attention|Remarque|Exception|Piège|Important|Règle d'or|Irréguliers|Pièges de régie prépositive)(?: [^:<]+)?\s*:\s*(?:<\/strong>)?(.*?)(?:<\/p>|$)/gi, (match, type, content) => {
      const isWarn = type.toLowerCase().includes('attention') || type.toLowerCase().includes('piège');
      const icon = isWarn ? 'warning_amber' : 'lightbulb';
      return `
        <div class="grammar-callout">
          <div class="callout-header">
            <span class="material-icons-round">${icon}</span>
            <span>${type} :</span>
          </div>
          <div>${content}</div>
        </div>
      `;
    });

    // 3. Encadrés d'exemples de niveau paragraphe standalone (<p>Ex: ...</p> ou <p>Exemples : ...</p>)
    enhanced = enhanced.replace(/<p>\s*(?:<strong>)?\s*(?:Ex|Exemple|Exemples)\s*:\s*(?:<\/strong>)?\s*(.*?)<\/p>/gi, (match, example) => {
      return `
        <div class="grammar-example-callout">
          <div class="example-tag"><span class="material-icons-round" style="font-size:14px;">lightbulb</span> Exemple</div>
          <div>${example}</div>
        </div>
      `;
    });

    // 4. Encadrés d'exemples dans les listes <li>
    enhanced = enhanced.replace(/<li>(.*?)(?:<strong>)?(?:Ex|Exemple)\s*:\s*(?:<\/strong>)?\s*(<i>.*?<\/i>|.*?)(?:<\/li>)/gi, (match, prefix, example) => {
      return `
        <li>
          ${prefix ? `<span>${prefix}</span>` : ''}
          <div class="grammar-example-callout">
            <div class="example-tag"><span class="material-icons-round" style="font-size:14px;">lightbulb</span> Exemple</div>
            <div>${example}</div>
          </div>
        </li>
      `;
    });

    return enhanced;
  }

  /* ------------------------------------------------------------------------
     RENDU GLOBAL DU SUJET ACTIF
     ------------------------------------------------------------------------ */
  renderTopic() {
    const topic = this.filteredDataset[this.currentTopicIndex];

    if (!topic) {
      if (this.ruleTitleEl) this.ruleTitleEl.textContent = 'Aucune leçon sélectionnée';
      if (this.ruleContentEl) this.ruleContentEl.innerHTML = '<p>Veuillez sélectionner une leçon dans le menu latéral.</p>';
      if (this.levelTagEl) this.levelTagEl.textContent = '';
      if (this.drillQuestionsEl) this.drillQuestionsEl.innerHTML = '';
      if (this.scoreDisplay) this.scoreDisplay.textContent = '';
      
      const breadcrumbTitle = document.getElementById('grammar-breadcrumb-title');
      if (breadcrumbTitle) breadcrumbTitle.textContent = 'Aucune leçon';

      const prevBtn = document.getElementById('grammar-prev-btn');
      const nextBtn = document.getElementById('grammar-next-btn');
      if (prevBtn) prevBtn.disabled = true;
      if (nextBtn) nextBtn.disabled = true;
      return;
    }

    if (this.ruleTitleEl) this.ruleTitleEl.textContent = topic.ruleTitle || topic.title;
    if (this.ruleContentEl) this.ruleContentEl.innerHTML = this.enhanceRuleContent(topic.ruleContent);
    if (this.levelTagEl) this.levelTagEl.textContent = `${topic.level} • ${topic.category.toUpperCase()}`;

    const prevBtn = document.getElementById('grammar-prev-btn');
    const nextBtn = document.getElementById('grammar-next-btn');
    if (prevBtn) prevBtn.disabled = (this.currentTopicIndex <= 0);
    if (nextBtn) nextBtn.disabled = (this.currentTopicIndex >= this.filteredDataset.length - 1);

    const breadcrumbTitle = document.getElementById('grammar-breadcrumb-title');
    if (breadcrumbTitle) breadcrumbTitle.textContent = topic.title;

    this.renderDrill();
  }

  /* ------------------------------------------------------------------------
     RENDU DU DRILL INTERACTIF PAS-À-PAS
     ------------------------------------------------------------------------ */
  renderDrill() {
    const topic = this.filteredDataset[this.currentTopicIndex];
    if (!topic || !this.drillQuestionsEl) return;

    const questions = topic.questions || [];
    if (questions.length === 0) {
      this.drillQuestionsEl.innerHTML = '<p style="color:var(--md-sys-color-on-surface-variant); padding:16px 0;">Aucun exercice disponible pour cette leçon.</p>';
      return;
    }

    const totalQuestions = questions.length;
    const answeredCount = Object.keys(this.currentLessonAnswers).length;
    const allAnswered = (answeredCount === totalQuestions);

    // Écran de Bilan & Complétion
    if (allAnswered && this.currentQuestionIdx >= totalQuestions) {
      let correctCount = 0;
      Object.values(this.currentLessonAnswers).forEach(ans => {
        if (ans.isCorrect) correctCount++;
      });

      const percent = Math.round((correctCount / totalQuestions) * 100);
      const isPerfect = (percent === 100);
      const xpEarned = (correctCount * 10) + (isPerfect ? 5 : 0);

      this.drillQuestionsEl.innerHTML = `
        <div class="lesson-completion-card">
          <span class="material-icons-round completion-trophy">${isPerfect ? 'military_tech' : 'verified'}</span>
          <h4>${isPerfect ? 'Parcours Parfait !' : 'Exercice Terminé !'}</h4>
          <div class="completion-score-badge">Score : ${correctCount} / ${totalQuestions} (${percent}%)</div>
          <div class="completion-xp-awarded">⭐ +${xpEarned} XP Gagnés</div>
          <p style="font-size:0.9rem; color:var(--md-sys-color-on-surface-variant); max-width:460px; line-height:1.6;">
            ${isPerfect ? 'Félicitations, vous avez maîtrisé l\'ensemble des règles de cette leçon avec brio !' : 'Bravo pour votre entraînement ! Vous pouvez recommencer pour viser les 100% ou passer à la leçon suivante.'}
          </p>
          <div class="completion-actions">
            <button class="md-button md-button--outlined" onclick="window.grammarModule.retryCurrentTopic()" type="button">
              <span class="material-icons-round">replay</span> Recommencer
            </button>
            ${this.currentTopicIndex < this.filteredDataset.length - 1 ? `
              <button class="md-button md-button--filled" onclick="window.grammarModule.nextTopic()" type="button">
                Leçon Suivante <span class="material-icons-round">navigate_next</span>
              </button>
            ` : ''}
          </div>
        </div>
      `;
      return;
    }

    if (this.currentQuestionIdx >= totalQuestions) {
      this.currentQuestionIdx = totalQuestions - 1;
    }

    const currentQ = questions[this.currentQuestionIdx];
    const answerInfo = this.currentLessonAnswers[this.currentQuestionIdx];
    const isAnswered = (answerInfo !== undefined);

    let formattedPrompt = currentQ.prompt;
    if (isAnswered) {
      const correctOptText = currentQ.options[currentQ.correct] || '';
      const parts = correctOptText.split(/\s*\/\s*/);
      let partIdx = 0;
      formattedPrompt = formattedPrompt.replace(/_{2,}/g, () => {
        const seg = parts[partIdx++] || '___';
        const fillClass = answerInfo.isCorrect ? 'filled' : 'filled incorrect';
        return `<span class="blank-slot ${fillClass}">${seg}</span>`;
      });
    } else {
      formattedPrompt = formattedPrompt.replace(/_{2,}/g, '<span class="blank-slot">___</span>');
    }

    const letters = ['A', 'B', 'C', 'D', 'E'];

    const stepDotsHtml = questions.map((_, qIdx) => {
      const isStepActive = qIdx === this.currentQuestionIdx;
      const isStepDone = this.currentLessonAnswers[qIdx] !== undefined;
      return `<span class="drill-step-dot ${isStepActive ? 'active' : ''} ${isStepDone ? 'completed' : ''}"></span>`;
    }).join('');

    const optionsHtml = currentQ.options.map((opt, optIdx) => {
      const letter = letters[optIdx] || (optIdx + 1);
      let btnClass = 'drill-option-btn';
      let iconName = 'radio_button_unchecked';

      if (isAnswered) {
        const isSelected = (answerInfo.selected === optIdx);
        const isCorrectOpt = (optIdx === currentQ.correct);

        if (isSelected && answerInfo.isCorrect) {
          btnClass += ' correct';
          iconName = 'check_circle';
        } else if (isSelected && !answerInfo.isCorrect) {
          btnClass += ' incorrect';
          iconName = 'cancel';
        } else if (isCorrectOpt) {
          btnClass += ' correct';
          iconName = 'check_circle';
        } else {
          btnClass += ' dimmed';
        }
      }

      return `
        <button class="${btnClass}" 
                ${isAnswered ? 'disabled' : ''} 
                onclick="window.grammarModule.handleOptionClick(${this.currentQuestionIdx}, ${optIdx})"
                type="button">
          <div class="drill-option-letter">${letter}</div>
          <div class="drill-option-text">${opt}</div>
          <span class="material-icons-round drill-option-status-icon">${iconName}</span>
        </button>
      `;
    }).join('');

    let feedbackHtml = '';
    if (isAnswered) {
      if (answerInfo.isCorrect) {
        feedbackHtml = `
          <div class="drill-feedback-box feedback-success">
            <div class="feedback-title-row">
              <span class="material-icons-round">check_circle</span>
              <span>Bravo ! Réponse exacte.</span>
              <span class="feedback-xp-gain">+10 XP ⭐</span>
            </div>
            <div class="feedback-explanation">${currentQ.explanation}</div>
          </div>
        `;
      } else {
        feedbackHtml = `
          <div class="drill-feedback-box feedback-error">
            <div class="feedback-title-row">
              <span class="material-icons-round">info</span>
              <span>Point de règle à retenir :</span>
            </div>
            <div class="feedback-explanation">${currentQ.explanation}</div>
          </div>
        `;
      }
    }

    let actionsHtml = '';
    if (isAnswered) {
      if (this.currentQuestionIdx < totalQuestions - 1) {
        actionsHtml = `
          <div class="drill-actions-row">
            <button class="md-button md-button--text" onclick="window.grammarModule.retryCurrentTopic()" type="button">
              <span class="material-icons-round">replay</span> Recommencer la leçon
            </button>
            <button class="md-button md-button--filled" id="grammar-next-step-btn" onclick="window.grammarModule.nextQuestion()" type="button">
              Question Suivante <span class="material-icons-round">arrow_forward</span>
            </button>
          </div>
        `;
      } else {
        actionsHtml = `
          <div class="drill-actions-row">
            <button class="md-button md-button--text" onclick="window.grammarModule.retryCurrentTopic()" type="button">
              <span class="material-icons-round">replay</span> Recommencer la leçon
            </button>
            <button class="md-button md-button--filled" id="grammar-finish-btn" onclick="window.grammarModule.finishLesson()" type="button">
              Voir le Bilan <span class="material-icons-round">emoji_events</span>
            </button>
          </div>
        `;
      }
    }

    this.drillQuestionsEl.innerHTML = `
      <div class="drill-step-progress-row">
        <div class="drill-step-counter">Question ${this.currentQuestionIdx + 1} / ${totalQuestions}</div>
        <div class="drill-step-dots">${stepDotsHtml}</div>
      </div>

      <div class="drill-question-box">
        <div class="drill-prompt-wrap">
          <div class="drill-prompt">${formattedPrompt}</div>
          <button class="grammar-tts-btn" title="Écouter la phrase résolue" onclick="window.grammarModule.speakPrompt(${this.currentQuestionIdx})" type="button">
            <span class="material-icons-round">volume_up</span>
          </button>
        </div>
        
        <div class="drill-options-grid ${currentQ.options.length > 2 ? 'two-cols' : ''}">
          ${optionsHtml}
        </div>
        ${feedbackHtml}
        ${actionsHtml}
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     VALIDATION INSTANTANÉE D'UNE OPTION
     ------------------------------------------------------------------------ */
  handleOptionClick(questionIdx, selectedOptIdx) {
    const topic = this.filteredDataset[this.currentTopicIndex];
    if (!topic || !topic.questions) return;

    if (this.currentQuestionIdx !== questionIdx) return;

    const question = topic.questions[questionIdx];
    if (!question) return;

    if (this.currentLessonAnswers[questionIdx] !== undefined) return;

    const isCorrect = (selectedOptIdx === question.correct);
    this.currentLessonAnswers[questionIdx] = {
      selected: selectedOptIdx,
      isCorrect: isCorrect
    };

    const totalQuestions = topic.questions.length;
    const answeredCount = Object.keys(this.currentLessonAnswers).length;

    if (answeredCount === totalQuestions) {
      let correctCount = 0;
      Object.values(this.currentLessonAnswers).forEach(ans => {
        if (ans.isCorrect) correctCount++;
      });

      const percent = Math.round((correctCount / totalQuestions) * 100);
      const isPerfect = (percent === 100);
      const lessonXp = (correctCount * 10) + (isPerfect ? 5 : 0);

      this.scores[topic.id] = percent;

      if (!this.detailedProgress.scores) this.detailedProgress.scores = {};
      this.detailedProgress.scores[topic.id] = {
        score: correctCount,
        total: totalQuestions,
        percent: percent,
        xp: lessonXp,
        completedAt: new Date().toISOString(),
        completed: true
      };

      this.saveScores();
      this.renderXpBanner();
      this.renderTopicList();
    }

    this.renderDrill();
  }

  nextQuestion() {
    const topic = this.filteredDataset[this.currentTopicIndex];
    if (!topic || !topic.questions) return;

    if (this.currentQuestionIdx < topic.questions.length - 1) {
      this.currentQuestionIdx++;
      this.renderDrill();
    }
  }

  finishLesson() {
    const topic = this.filteredDataset[this.currentTopicIndex];
    if (!topic || !topic.questions) return;

    this.currentQuestionIdx = topic.questions.length;
    this.renderDrill();
  }

  /* ------------------------------------------------------------------------
     SYNTHÈSE VOCALE (TTS)
     ------------------------------------------------------------------------ */
  speakPrompt(questionIdx) {
    const topic = this.filteredDataset[this.currentTopicIndex];
    if (!topic || !topic.questions) return;
    const question = topic.questions[questionIdx];
    if (!question || !question.prompt) return;

    let textToSpeak = question.prompt;
    if (textToSpeak.includes('___') || /_{2,}/.test(textToSpeak)) {
      const correctOptText = question.options[question.correct] || '';
      const parts = correctOptText.split(/\s*\/\s*/);
      let partIdx = 0;
      textToSpeak = textToSpeak.replace(/_{2,}/g, () => parts[partIdx++] || '');
    }
    this.speakText(textToSpeak);
  }

  speakText(text) {
    if (!text) return;
    const clean = text.replace(/<[^>]*>?/gm, '').replace(/_{2,}/g, ' ').replace(/[()]/g, '').trim();
    if (!clean) return;

    if (window.ttsEngine && typeof window.ttsEngine.speak === 'function') {
      window.ttsEngine.speak(clean);
    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis && typeof window.speechSynthesis.speak === 'function') {
      try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(clean);
        u.lang = 'fr-FR';
        u.rate = 0.92;
        window.speechSynthesis.speak(u);
      } catch (e) {
        console.warn('Synthèse vocale Web Speech non disponible:', e);
      }
    }
  }

  /* ------------------------------------------------------------------------
     MÉTHODES D'ACCÈS ET ALIAS POUR LES SUITES DE TESTS ET INTÉGRATIONS
     ------------------------------------------------------------------------ */
  filterTopics() {
    this.applyFilters();
  }

  get filteredLessons() {
    return this.filteredDataset;
  }

  get currentTopic() {
    return this.filteredDataset[this.currentTopicIndex] || this.dataset[this.currentTopicIndex] || null;
  }

  loadTopic(topicOrIndex) {
    if (typeof topicOrIndex === 'number') {
      this.selectTopic(topicOrIndex);
    } else if (topicOrIndex && typeof topicOrIndex === 'object') {
      const idx = this.filteredDataset.findIndex(t => t.id === topicOrIndex.id);
      if (idx !== -1) {
        this.selectTopic(idx);
      } else {
        const fullIdx = this.dataset.findIndex(t => t.id === topicOrIndex.id);
        if (fullIdx !== -1) {
          this.filteredDataset = [topicOrIndex];
          this.selectTopic(0);
        }
      }
    }
  }

  handleAnswer(questionIdx, selectedOptIdx) {
    this.handleOptionClick(questionIdx, selectedOptIdx);
  }

  get userAnswers() {
    const answers = {};
    Object.keys(this.currentLessonAnswers).forEach(k => {
      answers[k] = this.currentLessonAnswers[k].selected;
    });
    return answers;
  }

  /* ------------------------------------------------------------------------
     COMPATIBILITÉ AVEC L'ANCIENNE MÉTHODE evaluateDrill()
     ------------------------------------------------------------------------ */
  evaluateDrill() {
    this.renderDrill();
  }
}

// Exposer la classe au scope global
if (typeof window !== 'undefined') {
  window.GrammarModule = GrammarModule;
}
if (typeof global !== 'undefined') {
  global.GrammarModule = GrammarModule;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GrammarModule };
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.grammarModule) {
      window.grammarModule = new GrammarModule();
    }
  });
}
