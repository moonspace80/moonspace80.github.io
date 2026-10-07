/* ==========================================================================
   MODULE 2: READING COMPREHENSION ENGINE
   ========================================================================== */

class ReadingModule {
  constructor() {
    this.dataset = window.readingDataset || [];
    this.themes = window.delfReadingThemes || [];
    this.currentArticleIndex = 0;

    this.initDOM();
    this.renderThemeList();
    this.renderArticle();
  }

  initDOM() {
    this.themeListContainer = document.getElementById('reading-theme-list');
    this.titleEl = document.getElementById('article-title');
    this.sourceEl = document.getElementById('article-source');
    this.contentEl = document.getElementById('article-content');
    this.themeBadge = document.getElementById('article-theme-badge');
    this.levelBadge = document.getElementById('article-level-badge');
    this.vocabChipsEl = document.getElementById('article-key-vocab');
    this.quizQuestionsEl = document.getElementById('article-quiz-questions');
    this.submitBtn = document.getElementById('submit-reading-quiz-btn');
    this.scoreDisplay = document.getElementById('reading-quiz-score');

    if (this.submitBtn) {
      this.submitBtn.addEventListener('click', () => this.evaluateQuiz());
    }
  }

  renderThemeList() {
    if (!this.themeListContainer) return;
    
    this.themeListContainer.innerHTML = this.themes.map((theme, idx) => `
      <button class="theme-btn ${idx === this.currentArticleIndex ? 'active' : ''}" onclick="readingModule.selectArticle(${idx})">
        <span class="material-icons-round">menu_book</span>
        <span>${theme}</span>
      </button>
    `).join('');
  }

  selectArticle(index) {
    this.currentArticleIndex = index % this.dataset.length;
    this.renderThemeList();
    this.renderArticle();
  }

  renderArticle() {
    const article = this.dataset[this.currentArticleIndex];
    if (!article) return;

    if (this.titleEl) this.titleEl.textContent = article.title;
    if (this.sourceEl) this.sourceEl.textContent = `Source : ${article.source}`;
    if (this.contentEl) this.contentEl.innerHTML = article.content;
    if (this.themeBadge) this.themeBadge.textContent = article.theme;
    if (this.levelBadge) this.levelBadge.textContent = article.level;

    if (this.vocabChipsEl) {
      this.vocabChipsEl.innerHTML = article.vocab.map(v => `
        <span class="md-chip"><span class="material-icons-round">bookmark</span> ${v}</span>
      `).join('');
    }

    this.renderQuiz(article.questions);
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
              <input type="radio" name="reading-q-${qIdx}" value="${optIdx}">
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
        <div class="quiz-explanation" id="reading-exp-${qIdx}" style="display:none; margin-top:8px; font-size:0.875rem; color:var(--md-sys-color-primary);"></div>
      </div>
    `).join('');
  }

  evaluateQuiz() {
    const article = this.dataset[this.currentArticleIndex];
    if (!article) return;

    let score = 0;
    article.questions.forEach((q, qIdx) => {
      const selected = document.querySelector(`input[name="reading-q-${qIdx}"]:checked`);
      const expEl = document.getElementById(`reading-exp-${qIdx}`);

      if (selected && parseInt(selected.value) === q.correct) {
        score++;
        if (expEl) {
          expEl.style.display = 'block';
          expEl.style.color = '#059669';
          expEl.innerHTML = `✓ Exact ! ${q.explanation}`;
        }
      } else {
        if (expEl) {
          expEl.style.display = 'block';
          expEl.style.color = 'var(--md-sys-color-error)';
          expEl.innerHTML = `✗ Réponse incorrecte. ${q.explanation}`;
        }
      }
    });

    if (this.scoreDisplay) {
      this.scoreDisplay.textContent = `Score : ${score} / ${article.questions.length}`;
    }

    // Save progress
    let readArticles = JSON.parse(localStorage.getItem('delf_read_articles') || '[]');
    if (!readArticles.includes(article.id)) {
      readArticles.push(article.id);
      localStorage.setItem('delf_read_articles', JSON.stringify(readArticles));
    }
    if (window.app) window.app.updateStats();
  }
}

// Global exposure
if (typeof window !== 'undefined') {
  window.ReadingModule = ReadingModule;
}
if (typeof global !== 'undefined') {
  global.ReadingModule = ReadingModule;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ReadingModule };
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.readingModule) {
      window.readingModule = new ReadingModule();
    }
  });
}
