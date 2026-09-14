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
      return userLevel;
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
      this.levelSelect.value = this.selectedLevel;
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

    // Ensure header quick lookup button
    this.ensureHeaderLookupButton();

    // Delegated click listener for contextual conjugaison links (.conj-inline-link)
    document.addEventListener('click', (e) => {
      const linkBtn = e.target.closest('.conj-inline-link, .verb-lookup');
      if (linkBtn) {
        e.preventDefault();
        e.stopPropagation();
        const verb = linkBtn.getAttribute('data-verb') || linkBtn.dataset.verb || linkBtn.textContent.trim();
        if (verb && window.ConjugaisonManager && typeof window.ConjugaisonManager.open === 'function') {
          window.ConjugaisonManager.open(verb);
        }
      }
    });

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
    const targetLevel = this.selectedLevel;
    const normalizeStr = s => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
    const normalizedQuery = normalizeStr(this.searchQuery);

    this.filteredDataset = this.dataset.filter(item => {
      const matchLevel = targetLevel === 'ALL' || item.levelCode === targetLevel;
      const matchCategory = this.selectedCategory === 'ALL' || 
                            item.category === this.selectedCategory ||
                            (this.selectedCategory === 'grammaire' && (item.category === 'syntaxe' || item.category === 'stylistique'));
      
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
      this.levelSelect.value = this.selectedLevel;
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
                       item.category === 'conjugaison' ? '⚙️ Conjugaison' : 
                       item.category === 'orthographe' ? '✍️ Orthographe' :
                       item.category === 'syntaxe' ? '🏛️ Syntaxe' :
                       item.category === 'stylistique' ? '🎭 Stylistique' :
                       '📖 ' + (item.category || 'Grammaire');

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
    this.stopAudio();
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
      const cleanEx = example.replace(/<[^>]*>?/gm, '').replace(/'/g, "\\'").replace(/"/g, '&quot;').trim();
      return `
        <div class="grammar-example-callout">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <div class="example-tag"><span class="material-icons-round" style="font-size:14px;">lightbulb</span> Exemple</div>
            <button class="md-icon-button" style="width:28px; height:28px; padding:0;" onclick="window.grammarModule.speakText('${cleanEx}')" title="Écouter l'exemple avec Kokoro TTS" type="button">
              <span class="material-icons-round" style="font-size:16px; color:var(--md-sys-color-primary);">volume_up</span>
            </button>
          </div>
          <div>${example}</div>
        </div>
      `;
    });

    // 4. Encadrés d'exemples dans les listes <li>
    enhanced = enhanced.replace(/<li>(.*?)(?:<strong>)?(?:Ex|Exemple)\s*:\s*(?:<\/strong>)?\s*(<i>.*?<\/i>|.*?)(?:<\/li>)/gi, (match, prefix, example) => {
      const cleanEx = example.replace(/<[^>]*>?/gm, '').replace(/'/g, "\\'").replace(/"/g, '&quot;').trim();
      return `
        <li>
          ${prefix ? `<span>${prefix}</span>` : ''}
          <div class="grammar-example-callout">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <div class="example-tag"><span class="material-icons-round" style="font-size:14px;">lightbulb</span> Exemple</div>
              <button class="md-icon-button" style="width:28px; height:28px; padding:0;" onclick="window.grammarModule.speakText('${cleanEx}')" title="Écouter l'exemple avec Kokoro TTS" type="button">
                <span class="material-icons-round" style="font-size:16px; color:var(--md-sys-color-primary);">volume_up</span>
              </button>
            </div>
            <div>${example}</div>
          </div>
        </li>
      `;
    });

    // 5. Contextual Verb Linkification (Bescherelle Integration):
    // Transforms parenthesized verb infinitives (ex: (prendre), (aller), écrire,)
    // into interactive buttons: <button class="conj-inline-link" data-verb="<verb>" title="Consulter la conjugaison"><text></button>
    // Strictly prevents double-wrapping: does NOT nest <button> inside <button> or <a>
    // Extracts the clean infinitive for data-verb: removes parentheses, removes trailing commas/periods, and converts to lowercase via .toLowerCase()
    // Excludes common non-verb function words (le, la, les, un, une, des, dans, pour, avec, sans, sous, sur, par, etc.)
    enhanced = this.linkifyVerbs(enhanced);

    return enhanced;
  }

  /**
   * Scans text for verbs and parenthesized verb infinitives, transforming them into
   * interactive buttons: <button class="conj-inline-link" data-verb="<verb>" title="Consulter la conjugaison"><text></button>
   * Cleanly extracts the infinitive without parentheses, trailing commas or periods, and normalizes to lowercase.
   * Prevents double-wrapping: does NOT nest <button> inside <button> or <a>.
   */
  linkifyVerbs(html) {
    if (!html || typeof html !== 'string') return '';

    // Split HTML by tags, buttons, and anchors so we never modify attributes or content inside buttons/anchors
    // This strictly prevents double-wrapping: does NOT nest <button> inside <button> or <a>
    const tokens = html.split(/(<button[\s\S]*?<\/button>|<a[\s\S]*?<\/a>|<[^>]+>)/gi);

    const pass1Tokens = tokens.map(token => {
      if (!token || token.startsWith('<')) {
        return token;
      }

      // 1. Pass 1: Parenthesized verb infinitives (ex: (prendre), (aller), (Aller), (se souvenir), (écrire))
      return token.replace(/\(([a-zA-ZàâäéèêëîïôöùûüçœæÀÂÄÉÈÊËÎÏÔÖÙÛÜÇŒÆ\s'-]+)\)([,.;:!?]*)/g, (fullMatch, inner, trailingPunct) => {
        // Strip parentheses, remove trailing punctuation, and convert to lowercase via toLowerCase()
        const cleanVerb = inner.replace(/[()]/g, '').replace(/[,.;:!?]+$/g, '').toLowerCase().trim();

        // Exclude common non-verb function words from linking (le, la, dans, pour, avec, etc.)
        if (GrammarModule.isStopWord(cleanVerb)) {
          return fullMatch;
        }

        // Verify that the token is a recognized verb or valid French verb infinitive
        if (GrammarModule.isVerb(cleanVerb)) {
          const punct = trailingPunct || '';
          return `<button class="conj-inline-link" data-verb="${cleanVerb}" title="Consulter la conjugaison">(${inner})</button>${punct}`;
        }
        return fullMatch;
      });
    });

    const intermediateHtml = pass1Tokens.join('');

    // Re-split before Pass 2 to ensure newly injected <button> elements are protected from re-processing
    const pass2Tokens = intermediateHtml.split(/(<button[\s\S]*?<\/button>|<a[\s\S]*?<\/a>|<[^>]+>)/gi);

    const finalTokens = pass2Tokens.map(token => {
      if (!token || token.startsWith('<')) {
        return token;
      }

      // 2. Pass 2: Standalone registered verbs with optional trailing punctuation (ex: "écrire,", "finir.", "prendre")
      return token.replace(/\b([a-zA-ZàâäéèêëîïôöùûüçœæÀÂÄÉÈÊËÎÏÔÖÙÛÜÇŒÆ'-]+)([,.;:!?]*)/g, (fullMatch, word, trailingPunct) => {
        // Strip parentheses, remove trailing commas/periods, and convert to lowercase via toLowerCase()
        const cleanVerb = word.replace(/[()]/g, '').replace(/[,.;:!?]+$/g, '').toLowerCase().trim();

        // Exclude common non-verb function words from linking
        if (GrammarModule.isStopWord(cleanVerb)) {
          return fullMatch;
        }

        // Only registered verbs should be transformed into conjugation links
        if (GrammarModule.isRegisteredVerb(cleanVerb)) {
          const punct = trailingPunct || '';
          return `<button class="conj-inline-link" data-verb="${cleanVerb}" title="Consulter la conjugaison">${word}</button>${punct}`;
        }
        return fullMatch;
      });
    });

    return finalTokens.join('');
  }

  /**
   * Injects or binds the quick-action conjugation lookup button in the grammar lesson rule header.
   * Button displays educational book icon (auto_stories), accessible title, and stopPropagation handler.
   */
  ensureHeaderLookupButton() {
    let btn = document.getElementById('grammar-conj-lookup-btn');
    const header = document.querySelector('.rule-summary-card__header') ||
                   (this.ruleContentEl && this.ruleContentEl.parentElement ? this.ruleContentEl.parentElement.querySelector('.rule-summary-card__header') : null);

    if (!btn && header) {
      btn = document.createElement('button');
      btn.id = 'grammar-conj-lookup-btn';
      btn.className = 'md-button md-button--outlined grammar-conj-btn conj-lookup-btn';
      btn.type = 'button';
      btn.title = 'Consulter la conjugaison';
      btn.setAttribute('aria-label', 'Consulter la conjugaison');
      btn.innerHTML = `<span class="material-icons-round">auto_stories</span> Conjugaison`;
      btn.style.display = 'inline-flex';
      btn.style.alignItems = 'center';
      btn.style.gap = '6px';
      btn.style.marginLeft = '8px';
      header.appendChild(btn);
    }

    if (btn) {
      btn.title = 'Consulter la conjugaison';
      btn.onclick = (e) => {
        // e.stopPropagation() prevents toggling accordion or other parent handlers
        e.preventDefault();
        e.stopPropagation();

        const topic = this.currentTopic;
        let topicVerb = null;
        if (topic) {
          if (topic.verb && typeof topic.verb === 'string') {
            topicVerb = topic.verb;
          } else if (topic.infinitive && typeof topic.infinitive === 'string') {
            topicVerb = topic.infinitive;
          } else if (topic.title && typeof topic.title === 'string') {
            topicVerb = topic.title;
          }
        }

        if (window.ConjugaisonManager && typeof window.ConjugaisonManager.open === 'function') {
          if (topicVerb && typeof topicVerb === 'string' && topicVerb.trim()) {
            window.ConjugaisonManager.open(topic.verb || topic.title);
          } else {
            window.ConjugaisonManager.open(); // Defaults to opening search focus cleanly
          }
        } else if (window.ConjugaisonManager && typeof window.ConjugaisonManager.toggle === 'function') {
          window.ConjugaisonManager.toggle();
        }
      };
    }
  }

  /**
   * Question prompt renderer: passes question prompt through enhanceRuleContent
   * so parenthesized infinitive clues (e.g. (aller)) become interactive .conj-inline-link buttons.
   */
  renderQuestion(currentQ, answerInfo) {
    if (!currentQ || !currentQ.prompt) return '';
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

    // Linkify parenthesized verbs (e.g. (aller)) and contextual verbs in question prompt
    return this.enhanceRuleContent(formattedPrompt);
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

    this.ensureHeaderLookupButton();
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

    let formattedPrompt = this.renderQuestion(currentQ, answerInfo);

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
     SYNTHÈSE VOCALE (TTS) AVEC PAUSES ET DÉVELOPPEMENT DES ABRÉVIATIONS
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

  speakCurrentRule() {
    const topic = this.filteredDataset[this.currentTopicIndex];
    if (!topic) return;

    const ruleBtn = document.getElementById('grammar-tts-rule-btn');
    if (this._activeAudioSession) {
      this.stopAudio();
      return;
    }

    // Build clear audio text combining title and cleaned rule explanation
    let ruleIntro = (topic.ruleTitle || topic.title || '') + '. ';
    let ruleBody = (topic.ruleContent || '')
      .replace(/<[^>]*>?/gm, ' ')
      .replace(/\s+/g, ' ')
      .replace(/Ex\s*:\s*/gi, 'Par exemple : ')
      .trim();

    const fullRuleText = (ruleIntro + ruleBody).trim();
    this.speakText(fullRuleText, ruleBtn);
  }

  /**
   * Nettoie et prépare le texte grammatical pour la synthèse vocale :
   * 1. Remplacement des abréviations :
   *    - "masc." -> "masculin"
   *    - "sing." -> "singulier"
   *    - "plur." -> "pluriel"
   *    - "fém." -> "féminin"
   * 2. Découpage en segments aux ponctuations spécifiées :
   *    - "(", ")", ":", " '", "!", ",", ";"
   *    afin de marquer une courte pause de 0,8 seconde entre chaque segment.
   */
  prepareGrammarSpeechSegments(text) {
    if (!text) return [];

    let s = text
      .replace(/<[^>]*>?/gm, ' ')
      .replace(/_{2,}/g, ' ')
      .replace(/Ex\s*:\s*/gi, 'Par exemple : ');

    // Substitutions grammaticales
    s = s.replace(/\bmasc\./gi, 'masculin');
    s = s.replace(/\bfém\./gi, 'féminin');
    s = s.replace(/\bsing\./gi, 'singulier');
    s = s.replace(/\bplur\./gi, 'pluriel');

    // Token de pause pour les séparateurs demandés : (, ), :, !, ,, ;, ainsi que ' isolé ou précédé d'un espace
    const pauseToken = '___PAUSE_0_8___';
    s = s.replace(/[\(\):!;,]/g, ' ' + pauseToken + ' ');
    s = s.replace(/(?:^|\s)'(?:\s|$)/g, ' ' + pauseToken + ' ');

    const rawSegments = s.split(pauseToken);
    return rawSegments
      .map(seg => seg.replace(/\s+/g, ' ').trim())
      .filter(seg => seg.length > 0);
  }

  async speakText(text, callerBtn = null) {
    if (!text) return;

    // Arrêter toute lecture précédente
    this.stopAudio();

    const segments = this.prepareGrammarSpeechSegments(text);
    if (segments.length === 0) return;

    // Identifiant de session d'écoute pour pouvoir interrompre proprement si l'utilisateur change ou clique stop
    const currentAudioId = Symbol('grammar_audio_session');
    this._activeAudioSession = currentAudioId;
    this._activeCallerBtn = callerBtn;

    if (callerBtn) {
      callerBtn.classList.add('playing');
      callerBtn.innerHTML = `<span class="material-icons-round">stop</span> Arrêter`;
    }

    const tts = window.kokoroTTS || window.aiTTS || window.ttsEngine;

    try {
      for (let i = 0; i < segments.length; i++) {
        if (this._activeAudioSession !== currentAudioId) break;

        const seg = segments[i];

        // Lecture du segment
        if (tts && typeof tts.speak === 'function') {
          await tts.speak(seg, { rate: 0.95 });
        } else if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis) {
          await new Promise((resolve) => {
            try {
              window.speechSynthesis.cancel();
              const u = new SpeechSynthesisUtterance(seg);
              u.lang = 'fr-FR';
              u.rate = 0.92;
              u.onend = () => resolve();
              u.onerror = () => resolve();
              window.speechSynthesis.speak(u);
            } catch (e) {
              resolve();
            }
          });
        }

        if (this._activeAudioSession !== currentAudioId) break;

        // Courte pause de 0,8 seconde entre chaque segment (si ce n'est pas le dernier)
        if (i < segments.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 800));
        }
      }
    } finally {
      if (this._activeAudioSession === currentAudioId) {
        this._activeAudioSession = null;
        if (callerBtn) {
          callerBtn.classList.remove('playing');
          callerBtn.innerHTML = `<span class="material-icons-round">volume_up</span> Écouter la règle`;
        }
      }
    }
  }

  stopAudio() {
    this._activeAudioSession = null;
    if (this._activeCallerBtn) {
      this._activeCallerBtn.classList.remove('playing');
      this._activeCallerBtn.innerHTML = `<span class="material-icons-round">volume_up</span> Écouter la règle`;
      this._activeCallerBtn = null;
    }
    const tts = window.kokoroTTS || window.aiTTS || window.ttsEngine;
    if (tts && typeof tts.stop === 'function') {
      tts.stop();
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
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

// --------------------------------------------------------------------------
// Grammatical Static Helpers & Morphological Lexicon for Contextual Linking
// --------------------------------------------------------------------------
GrammarModule.STOP_WORDS = new Set([
  'le', 'la', 'les', 'un', 'une', 'des', 'dans', 'pour', 'avec', 'sans', 'sous', 'sur', 'par', 'chez',
  'mais', 'ou', 'et', 'donc', 'or', 'ni', 'car', 'que', 'qui', 'quoi', 'dont', 'où', 'ce', 'cet', 'cette', 'ces',
  'du', 'de', 'd', "d'", 'l', "l'", 'qu', "qu'", 'se', 's', "s'",
  'ceux', 'celles', 'celui', 'celle', 'mon', 'ma', 'mes', 'ton', 'ta', 'tes', 'son', 'sa', 'ses',
  'notre', 'nos', 'votre', 'vos', 'leur', 'leurs',
  'je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles',
  'me', 'te', 'lui', 'en', 'y', 'moi', 'toi', 'soi',
  'ne', 'pas', 'plus', 'jamais', 'rien', 'personne', 'aucun', 'aucune',
  'tout', 'tous', 'toute', 'toutes', 'très', 'trop', 'bien', 'mal', 'mieux',
  'ici', 'là', 'alors', 'puis', 'après', 'avant', 'pendant', 'comme', 'si',
  'aussi', 'tant', 'autant', 'quel', 'quelle', 'quels', 'quelles', 'quelque', 'quelques'
]);

GrammarModule.CORE_VERBS = new Set([
  'être', 'etre', 'avoir', 'aller', 'faire', 'dire', 'pouvoir', 'voir', 'savoir', 'vouloir',
  'venir', 'falloir', 'devoir', 'croire', 'trouver', 'donner', 'prendre', 'parler', 'aimer',
  'passer', 'mettre', 'demander', 'tenir', 'sembler', 'laisser', 'rester', 'penser', 'entendre',
  'regarder', 'répondre', 'repondre', 'rendre', 'attendre', 'perdre', 'vendre', 'descendre',
  'connaître', 'connaitre', 'paraître', 'paraitre', 'apparaître', 'apparaitre', 'disparaître',
  'disparaitre', 'reconnaître', 'reconnaitre', 'arriver', 'sentir', 'vivre', 'sortir',
  'comprendre', 'écrire', 'ecrire', 'lire', 'courir', 'choisir', 'finir', 'agir', 'réussir',
  'reussir', 'ouvrir', 'dormir', 'offrir', 'servir', 'partir', 'mourir', 'naître', 'naitre',
  'plaire', 'rire', 'sourire', 'suivre', 'valoir', 'boire', 'peindre', 'joindre', 'craindre',
  'détruire', 'detruire', 'conduire', 'traduire', 'produire', 'construire', 'suffire', 'vaincre',
  'convaincre', 'asseoir', 'coudre', 'moudre', 'rompre', 'interrompre', 'corrompre', 'distraire',
  'absoudre', 'battre', 'clore', 'éclore', 'eclore', 'gésir', 'gesir', 'choir', 'pleuvoir',
  'commencer', 'avancer', 'placer', 'prononcer', 'menacer', 'effacer', 'balancer', 'forcer',
  'agacer', 'percer', 'remplacer', 'relancer', 'devancer', 'renoncer', 'manger', 'voyager',
  'changer', 'partager', 'ranger', 'nager', 'bouger', 'juger', 'obliger', 'plonger', 'songer',
  'corriger', 'diriger', 'exiger', 'loger', 'rédiger', 'rediger', 'soigner', 'travailler',
  'acheter', 'jeter', 'appeler', 'payer', 'envoyer', 'espérer', 'esperer', 'céder', 'ceder',
  'lever', 'mener', 'peser', 'semer', 'préférer', 'preferer', 'répéter', 'repeter', 'acquérir',
  'acquerir', 'conquérir', 'conquerir', 'cueillir', 'accueillir', 'recueillir', 'tressaillir',
  'assaillir', 'bouillir', 'fuir', "s'enfuir", 'senfuir', 'vêtir', 'vetir', 'recevoir',
  'apercevoir', 'concevoir', 'décevoir', 'decevoir', 'percevoir', 'émouvoir', 'emouvoir',
  'promouvoir', 'mouvoir', 'faillir', 'déchoir', 'dechoir', 'échoir', 'echoir', 'seoir',
  'messeoir', 'surseoir', 'traire', 'extraire', 'soustraire', 'abstraire', 'déplaire',
  'deplaire', 'complaire', 'taire', 'prévaloir', 'prevaloir', 'équivaloir', 'equivaloir',
  'oser', 'lancer', 'plaindre', 'teindre', 'restreindre', 'astreindre', 'contraindre'
]);

GrammarModule._knownVerbsCache = null;

GrammarModule._ensureVerbsCache = function() {
  if (GrammarModule._knownVerbsCache && GrammarModule._knownVerbsCache.size > 0) {
    return;
  }
  GrammarModule._knownVerbsCache = new Set();

  let dataset = null;
  if (typeof window !== 'undefined' && window.conjugaisonVerbsDataset) {
    dataset = window.conjugaisonVerbsDataset;
  } else if (typeof global !== 'undefined' && global.conjugaisonVerbsDataset) {
    dataset = global.conjugaisonVerbsDataset;
  } else if (typeof require !== 'undefined') {
    try {
      const fs = require('fs');
      const path = require('path');
      const candidates = [
        path.resolve(__dirname, '../../data/conjugaison_verbs.json'),
        path.resolve(process.cwd(), 'data/conjugaison_verbs.json'),
        'c:/FrenchDELFB2C1/data/conjugaison_verbs.json'
      ];
      for (let i = 0; i < candidates.length; i++) {
        if (fs.existsSync(candidates[i])) {
          dataset = JSON.parse(fs.readFileSync(candidates[i], 'utf8'));
          break;
        }
      }
    } catch (e) {}
  }

  if (dataset) {
    if (Array.isArray(dataset.index)) {
      dataset.index.forEach(item => {
        if (item.verb) GrammarModule._knownVerbsCache.add(item.verb.toLowerCase());
        if (item.id) GrammarModule._knownVerbsCache.add(item.id.toLowerCase());
        if (item.infinitive) GrammarModule._knownVerbsCache.add(item.infinitive.toLowerCase());
      });
    }
    if (dataset.verbs) {
      Object.keys(dataset.verbs).forEach(k => {
        GrammarModule._knownVerbsCache.add(k.toLowerCase());
        const v = dataset.verbs[k];
        if (v && v.verb) GrammarModule._knownVerbsCache.add(v.verb.toLowerCase());
      });
    }
  }
};

GrammarModule.isStopWord = function(word) {
  if (!word || typeof word !== 'string') return true;
  const clean = word.toLowerCase().trim();
  return GrammarModule.STOP_WORDS.has(clean);
};

GrammarModule.isVerb = function(word) {
  if (!word || typeof word !== 'string') return false;
  const clean = word.replace(/[()]/g, '').replace(/[,.;:!?]+$/g, '').toLowerCase().trim();
  if (!clean || clean.length < 2) return false;
  if (GrammarModule.isStopWord(clean)) return false;

  const nonPronominal = clean.replace(/^(?:se\s+|s['’])/, '');
  if (GrammarModule.isRegisteredVerb(clean) || GrammarModule.isRegisteredVerb(nonPronominal)) {
    return true;
  }

  if (clean.endsWith('er') || clean.endsWith('ir') || clean.endsWith('re') || clean.endsWith('oir')) {
    return true;
  }

  return false;
};

GrammarModule.isRegisteredVerb = function(word) {
  if (!word || typeof word !== 'string') return false;
  const clean = word.replace(/[()]/g, '').replace(/[,.;:!?]+$/g, '').toLowerCase().trim();
  if (!clean || clean.length < 2) return false;
  if (GrammarModule.isStopWord(clean)) return false;

  GrammarModule._ensureVerbsCache();
  if (GrammarModule._knownVerbsCache && GrammarModule._knownVerbsCache.has(clean)) {
    return true;
  }

  return GrammarModule.CORE_VERBS.has(clean);
};

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
