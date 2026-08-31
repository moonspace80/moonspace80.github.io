/* ==========================================================================
   MAIN APPLICATION ROUTER, COUNTDOWN CONTROLLER & STATE MANAGER
   ========================================================================== */

class App {
  constructor() {
    this.initTheme();
    this.initLevelSelector();
    this.initTabs();
    this.initCountdowns();
    this.initModules();
    this.updateStats();
    this.loadQuoteOfTheDay();
  }

  initLevelSelector() {
    const levelSelect = document.getElementById('user-cefr-level-select');
    if (!levelSelect) return;

    const savedLevel = localStorage.getItem('delf_user_level') || 'B2';
    levelSelect.value = savedLevel;

    levelSelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      localStorage.setItem('delf_user_level', selected);
      
      // Auto-adapt filters in other modules if instantiated
      if (window.vocabModule && window.vocabModule.levelFilter) {
        window.vocabModule.levelFilter.value = selected;
        window.vocabModule.currentLevel = selected;
        window.vocabModule.render();
      }

      if (window.grammarModule && window.grammarModule.levelFilter) {
        window.grammarModule.levelFilter.value = selected;
        window.grammarModule.selectedLevel = selected;
        window.grammarModule.render();
      }

      if (window.writingModule && window.writingModule.levelFilter) {
        window.writingModule.levelFilter.value = selected;
        window.writingModule.selectedLevel = selected;
        window.writingModule.renderTopicList();
      }
    });
  }

  initTheme() {
    // Migrate to calm light theme by default
    let savedTheme = localStorage.getItem('delf_theme_v2');
    if (!savedTheme) {
      savedTheme = 'light';
      localStorage.setItem('delf_theme_v2', 'light');
      localStorage.setItem('delf_theme', 'light');
    }
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      const icon = themeToggleBtn.querySelector('.material-icons-round');
      if (icon) icon.textContent = savedTheme === 'light' ? 'dark_mode' : 'light_mode';

      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('delf_theme_v2', newTheme);
        localStorage.setItem('delf_theme', newTheme);
        
        if (icon) icon.textContent = newTheme === 'light' ? 'dark_mode' : 'light_mode';
      });
    }
  }

  initTabs() {
    const tabs = document.querySelectorAll('.md-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const targetTab = e.currentTarget.getAttribute('data-tab');
        this.switchTab(targetTab);
      });
    });
  }

  switchTab(tabId) {
    if (!tabId) return;

    // Update Tab buttons
    document.querySelectorAll('.md-tab').forEach(tab => {
      if (tab.getAttribute('data-tab') === tabId) {
        tab.classList.add('md-tab--active');
      } else {
        tab.classList.remove('md-tab--active');
      }
    });

    // Update Views
    document.querySelectorAll('.view-panel').forEach(panel => {
      if (panel.id === `view-${tabId}`) {
        panel.classList.add('view-panel--active');
      } else {
        panel.classList.remove('view-panel--active');
      }
    });

    // Module lifecycle triggers
    if (tabId === 'exam-simulator' && window.examSimulatorModule) {
      if (typeof window.examSimulatorModule.render === 'function') {
        window.examSimulatorModule.render();
      }
    } else if (tabId === 'sessions' && window.sessionsModule) {
      if (typeof window.sessionsModule.render === 'function') {
        window.sessionsModule.render();
      }
    }

    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  openExamSimulator(examId) {
    if (examId && window.examSimulatorModule && typeof window.examSimulatorModule.switchExam === 'function') {
      window.examSimulatorModule.switchExam(examId);
    }
    this.switchTab('exam-simulator');
  }

  openSessions(mode = 'parcours-a', pillarId = null) {
    if (window.sessionsModule) {
      if (mode) window.sessionsModule.activeMode = mode;
      if (pillarId) window.sessionsModule.activePillarId = pillarId;
      if (typeof window.sessionsModule.render === 'function') {
        window.sessionsModule.render();
      }
    }
    this.switchTab('sessions');
  }

  initCountdowns() {
    // Target B2: December 31, 2026
    // Target C1: March 31, 2027
    const b2Target = new Date('2026-12-31T23:59:59');
    const c1Target = new Date('2027-03-31T23:59:59');

    const updateTimer = () => {
      const now = new Date();
      
      const b2Diff = Math.max(0, b2Target - now);
      const b2Days = Math.ceil(b2Diff / (1000 * 60 * 60 * 24));
      
      const c1Diff = Math.max(0, c1Target - now);
      const c1Days = Math.ceil(c1Diff / (1000 * 60 * 60 * 24));

      const b2TimeEl = document.getElementById('b2-time');
      const c1TimeEl = document.getElementById('c1-time');

      if (b2TimeEl) b2TimeEl.textContent = `${b2Days} jours`;
      if (c1TimeEl) c1TimeEl.textContent = `${c1Days} jours`;

      // Roadmap Progress Bar Calculation
      const startDate = new Date('2026-01-01');
      const b2TotalDuration = b2Target - startDate;
      const b2Elapsed = now - startDate;
      const b2Pct = Math.min(100, Math.max(0, Math.round((b2Elapsed / b2TotalDuration) * 100)));

      const c1TotalDuration = c1Target - startDate;
      const c1Elapsed = now - startDate;
      const c1Pct = Math.min(100, Math.max(0, Math.round((c1Elapsed / c1TotalDuration) * 100)));

      const b2Bar = document.getElementById('b2-progress-bar');
      const b2Text = document.getElementById('b2-progress-text');
      if (b2Bar) b2Bar.style.width = `${b2Pct}%`;
      if (b2Text) b2Text.textContent = `Temps écoulé : ${b2Pct}% (${b2Days} jours restants)`;

      const c1Bar = document.getElementById('c1-progress-bar');
      const c1Text = document.getElementById('c1-progress-text');
      if (c1Bar) c1Bar.style.width = `${c1Pct}%`;
      if (c1Text) c1Text.textContent = `Temps écoulé : ${c1Pct}% (${c1Days} jours restants)`;
    };

    updateTimer();
    setInterval(updateTimer, 60000);
  }

  initModules() {
    if (!window.journeyModule && typeof JourneyModule !== 'undefined') window.journeyModule = new JourneyModule();
    if (!window.vocabModule && typeof VocabularyModule !== 'undefined') window.vocabModule = new VocabularyModule();
    if (!window.dictionaryModule && typeof DictionaryModule !== 'undefined') window.dictionaryModule = new DictionaryModule();
    if (!window.expressionsModule && typeof ExpressionsModule !== 'undefined') window.expressionsModule = new ExpressionsModule();
    if (!window.readingModule && typeof ReadingModule !== 'undefined') window.readingModule = new ReadingModule();
    if (!window.listeningModule && typeof ListeningModule !== 'undefined') window.listeningModule = new ListeningModule();
    if (!window.grammarModule && typeof GrammarModule !== 'undefined') window.grammarModule = new GrammarModule();
    if (!window.writingModule && typeof WritingModule !== 'undefined') window.writingModule = new WritingModule();
    if (!window.examSimulatorModule && typeof ExamSimulatorModule !== 'undefined') window.examSimulatorModule = new ExamSimulatorModule();
    if (!window.sessionsModule && typeof SessionsModule !== 'undefined') window.sessionsModule = new SessionsModule();
  }

  updateStats() {
    const learnedVocab = JSON.parse(localStorage.getItem('delf_learned_vocab') || '[]');
    const readArticles = JSON.parse(localStorage.getItem('delf_read_articles') || '[]');
    const listenedEpisodes = JSON.parse(localStorage.getItem('delf_listened_episodes') || '[]');
    const grammarScores = JSON.parse(localStorage.getItem('delf_grammar_scores') || '{}');

    const totalVocab = window.vocabDataset ? window.vocabDataset.length : 15000;
    const vocabStatEl = document.getElementById('stat-vocab-count');
    if (vocabStatEl) vocabStatEl.textContent = `${learnedVocab.length} / ${totalVocab.toLocaleString()}`;

    const readingStatEl = document.getElementById('stat-reading-count');
    if (readingStatEl) readingStatEl.textContent = `${readArticles.length} / 14`;

    const listeningStatEl = document.getElementById('stat-listening-count');
    if (listeningStatEl) listeningStatEl.textContent = `${listenedEpisodes.length}`;

    const grammarStatEl = document.getElementById('stat-grammar-score');
    const scoreValues = Object.values(grammarScores);
    if (scoreValues.length > 0) {
      const avg = Math.round(scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length);
      if (grammarStatEl) grammarStatEl.textContent = `${avg}%`;
    } else {
      if (grammarStatEl) grammarStatEl.textContent = `0%`;
    }
  }

  async loadQuoteOfTheDay() {
    try {
      const response = await fetch('js/data/quotes.json');
      if (!response.ok) throw new Error('Failed to load quotes.json');
      const quotes = await response.json();
      const today = new Date();
      const m = today.getMonth() + 1;
      const d = today.getDate();
      const quote = quotes.find(q => q["quote-month"] === m && q["quote-day"] === d) || quotes[0];
      this.displayQuote(quote);
    } catch (e) {
      console.warn("Could not load quotes from JSON, falling back to default quote:", e);
      const fallbackQuote = {
        "quote-texte": "Petit à petit l'oiseau fait son nid.",
        "quote-author": "Expression française"
      };
      this.displayQuote(fallbackQuote);
    }
  }

  displayQuote(quote) {
    const textEl = document.querySelector('.daily-quote-card .quote-text');
    const authorEl = document.querySelector('.daily-quote-card .quote-author');
    if (textEl) textEl.textContent = `« ${quote["quote-texte"]} »`;
    if (authorEl) authorEl.textContent = ` ${quote["quote-author"]} `;
  }
}

// Global exposure
if (typeof window !== 'undefined') {
  window.App = App;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { App };
}

// Initialize on DOM ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
  });
}
