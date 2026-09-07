/* ==========================================================================
   MODULE 1: VOCABULARY ENGINE (FLASHCARDS 3D, ADVANCED SRS LEITNER/SM-2, SEARCH)
   ========================================================================== */

class VocabularyModule {
  constructor() {
    this.dataset = window.vocabDataset || [];
    this.filteredData = [...this.dataset];
    this.currentIndex = 0;
    this.currentLang = 'en';
    this.currentPage = 1;
    this.pageSize = 10;
    this.isFlipped = false;
    this.srsFilter = 'all'; // 'all', 'due_today', 'learning', 'mastered'

    this.initDOMReferences();
    this.bindEvents();
    this.populateCategories();
    this.render();
  }

  initDOMReferences() {
    this.flashcardWrapper = document.getElementById('flashcard-element');
    this.searchInput = document.getElementById('vocab-search-input');
    this.levelFilter = document.getElementById('vocab-level-filter');
    this.categoryFilter = document.getElementById('vocab-category-filter');
    this.typeFilter = document.getElementById('vocab-type-filter');
    this.sortOrderSelect = document.getElementById('vocab-sort-order');
    this.srsFilterSelect = document.getElementById('vocab-srs-filter');
    
    // Card Elements
    this.cardWord = document.getElementById('card-word');
    this.cardLevel = document.getElementById('card-level');
    this.cardTheme = document.getElementById('card-theme');
    this.cardType = document.getElementById('card-type');
    this.cardPhonetique = document.getElementById('card-phonetique');
    this.cardVerifiedBadge = document.getElementById('card-verified-badge');
    this.cardDefinition = document.getElementById('card-definition');
    this.cardExamplesList = document.getElementById('card-examples-list');
    this.cardSpeakBtn = document.getElementById('card-speak-btn');
    this.cardBackSpeakBtn = document.getElementById('card-back-speak-btn');
    this.cardSrsBadge = document.getElementById('card-srs-badge');

    // Controls
    this.prevBtn = document.getElementById('prev-card-btn');
    this.nextBtn = document.getElementById('next-card-btn');
    this.hardBtn = document.getElementById('srs-hard-btn');
    this.goodBtn = document.getElementById('srs-good-btn');
    this.easyBtn = document.getElementById('srs-easy-btn');

    // Table
    this.tableBody = document.getElementById('vocab-table-body');
    this.tableCountLabel = document.getElementById('table-count-label');
    this.tableLangHeader = document.getElementById('table-lang-header');
    this.paginationContainer = document.getElementById('vocab-pagination');
  }

  bindEvents() {
    // Flashcard Flip
    if (this.flashcardWrapper) {
      this.flashcardWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.speaker-btn') || e.target.closest('button')) return;
        this.toggleFlip();
      });
    }

    // Navigation & SRS ratings
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.navigate(-1));
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.navigate(1));
    if (this.hardBtn) this.hardBtn.addEventListener('click', () => this.handleSRS('hard'));
    if (this.goodBtn) this.goodBtn.addEventListener('click', () => this.handleSRS('good'));
    if (this.easyBtn) this.easyBtn.addEventListener('click', () => this.handleSRS('easy'));

    // Search & Filters & Sorting
    if (this.searchInput) {
      this.searchInput.addEventListener('input', () => this.applyFilters());
    }
    if (this.levelFilter) {
      this.levelFilter.addEventListener('change', () => this.applyFilters());
    }
    if (this.categoryFilter) {
      this.categoryFilter.addEventListener('change', () => this.applyFilters());
    }
    if (this.typeFilter) {
      this.typeFilter.addEventListener('change', () => this.applyFilters());
    }
    if (this.sortOrderSelect) {
      this.sortOrderSelect.addEventListener('change', () => this.applyFilters());
    }
    if (this.srsFilterSelect) {
      this.srsFilterSelect.addEventListener('change', (e) => {
        this.srsFilter = e.target.value;
        this.applyFilters();
      });
    }

    // Translation Language Chips
    document.querySelectorAll('.translation-lang-selector .md-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        document.querySelectorAll('.translation-lang-selector .md-chip').forEach(c => c.classList.remove('md-chip--active'));
        e.currentTarget.classList.add('md-chip--active');
        this.currentLang = e.currentTarget.getAttribute('data-lang');
        if (this.tableLangHeader) this.tableLangHeader.textContent = this.currentLang.toUpperCase();
        this.renderCardContent();
        this.renderTable();
      });
    });

    // Speech Synthesis
    if (this.cardSpeakBtn) {
      this.cardSpeakBtn.addEventListener('click', () => this.speakWord());
    }
    if (this.cardBackSpeakBtn) {
      this.cardBackSpeakBtn.addEventListener('click', () => this.speakWord());
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      const activeTab = document.querySelector('.md-tab--active')?.getAttribute('data-tab');
      if (activeTab !== 'vocabulary') return;

      if (e.code === 'Space') {
        e.preventDefault();
        this.toggleFlip();
      } else if (e.code === 'ArrowRight') {
        this.navigate(1);
      } else if (e.code === 'ArrowLeft') {
        this.navigate(-1);
      } else if (e.code === 'Digit1') {
        this.handleSRS('hard');
      } else if (e.code === 'Digit2') {
        this.handleSRS('good');
      } else if (e.code === 'Digit3') {
        this.handleSRS('easy');
      }
    });
  }

  populateCategories() {
    if (!this.categoryFilter) return;
    const categories = Array.from(new Set(this.dataset.map(item => item.theme)));
    categories.sort().forEach(cat => {
      const option = document.createElement('option');
      option.value = cat;
      option.textContent = cat;
      this.categoryFilter.appendChild(option);
    });
  }

  getSRSMap() {
    try {
      return JSON.parse(localStorage.getItem('delf_srs_state') || '{}');
    } catch {
      return {};
    }
  }

  saveSRSMap(srsMap) {
    localStorage.setItem('delf_srs_state', JSON.stringify(srsMap));
  }

  getWordSRS(id) {
    const srsMap = this.getSRSMap();
    return srsMap[id] || { box: 0, nextReview: 0, repetitions: 0, lastReview: 0 };
  }

  handleSRS(rating) {
    if (this.filteredData.length === 0) return;
    const currentWord = this.filteredData[this.currentIndex];
    const srsMap = this.getSRSMap();
    const currentSrs = srsMap[currentWord.id] || { box: 0, nextReview: 0, repetitions: 0, lastReview: 0 };

    const now = Date.now();
    const oneDayMs = 24 * 60 * 60 * 1000;
    let newBox = currentSrs.box;

    if (rating === 'hard') {
      newBox = 1; // back to box 1 (review tomorrow)
      currentSrs.nextReview = now + oneDayMs;
    } else if (rating === 'good') {
      newBox = Math.min((currentSrs.box || 0) + 1, 5);
      const intervals = [1, 3, 7, 14, 30];
      currentSrs.nextReview = now + (intervals[newBox - 1] * oneDayMs);
    } else if (rating === 'easy') {
      newBox = Math.min((currentSrs.box || 0) + 2, 5);
      const intervals = [1, 3, 7, 14, 30];
      currentSrs.nextReview = now + (intervals[newBox - 1] * oneDayMs);
    }

    currentSrs.box = newBox;
    currentSrs.repetitions = (currentSrs.repetitions || 0) + 1;
    currentSrs.lastReview = now;
    srsMap[currentWord.id] = currentSrs;
    this.saveSRSMap(srsMap);

    // Also update legacy learned words array for backward stats
    let learnedWords = JSON.parse(localStorage.getItem('delf_learned_vocab') || '[]');
    if (newBox >= 4 && !learnedWords.includes(currentWord.id)) {
      learnedWords.push(currentWord.id);
      localStorage.setItem('delf_learned_vocab', JSON.stringify(learnedWords));
    }

    if (window.app) window.app.updateStats();
    this.navigate(1);
  }

  applyFilters() {
    const query = this.searchInput ? this.searchInput.value.toLowerCase().trim() : '';
    const selectedLevel = this.levelFilter ? this.levelFilter.value : 'all';
    const selectedCategory = this.categoryFilter ? this.categoryFilter.value : 'all';
    const selectedType = this.typeFilter ? this.typeFilter.value : 'all';
    const sortOrder = this.sortOrderSelect ? this.sortOrderSelect.value : 'az';
    const srsMap = this.getSRSMap();
    const now = Date.now();

    let result = this.dataset.filter(item => {
      const matchesSearch = query === '' || 
        item.word.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query) ||
        (item.type && item.type.toLowerCase().includes(query)) ||
        item.examples.some(ex => (ex[this.currentLang] && ex[this.currentLang].toLowerCase().includes(query)));

      const matchesLevel = selectedLevel === 'all' || item.level === selectedLevel;
      const matchesCategory = selectedCategory === 'all' || item.theme === selectedCategory;

      const itemType = (item.type || '').toLowerCase();
      let matchesType = true;
      if (selectedType === 'nom') {
        matchesType = itemType.includes('nom') || (!itemType.includes('verbe') && !itemType.includes('adjectif') && !itemType.includes('adverbe'));
      } else if (selectedType === 'verbe') {
        matchesType = itemType.includes('verbe');
      } else if (selectedType === 'adjectif') {
        matchesType = itemType.includes('adjectif');
      } else if (selectedType === 'adverbe') {
        matchesType = itemType.includes('adverbe');
      }

      // SRS Filter
      const srsInfo = srsMap[item.id] || { box: 0, nextReview: 0 };
      let matchesSrs = true;
      if (this.srsFilter === 'due_today') {
        matchesSrs = srsInfo.box > 0 && srsInfo.nextReview <= now;
      } else if (this.srsFilter === 'learning') {
        matchesSrs = srsInfo.box >= 1 && srsInfo.box <= 3;
      } else if (this.srsFilter === 'mastered') {
        matchesSrs = srsInfo.box >= 4;
      } else if (this.srsFilter === 'new') {
        matchesSrs = !srsInfo.box || srsInfo.box === 0;
      }

      return matchesSearch && matchesLevel && matchesCategory && matchesType && matchesSrs;
    });

    // Apply Sorting Order (A-Z or Z-A)
    if (sortOrder === 'az') {
      result.sort((a, b) => a.word.localeCompare(b.word, 'fr', { sensitivity: 'base' }));
    } else if (sortOrder === 'za') {
      result.sort((a, b) => b.word.localeCompare(a.word, 'fr', { sensitivity: 'base' }));
    }

    this.filteredData = result;
    this.currentIndex = 0;
    this.currentPage = 1;

    // Dynamically update total counts in DOM
    const headerCount = document.getElementById('vocab-header-count');
    const totalIndicator = document.getElementById('vocab-total-indicator');
    if (headerCount) headerCount.textContent = this.dataset.length.toLocaleString('fr-FR');
    if (totalIndicator) totalIndicator.textContent = `${this.filteredData.length.toLocaleString('fr-FR')} mot${this.filteredData.length > 1 ? 's' : ''} filtré${this.filteredData.length > 1 ? 's' : ''}`;

    this.render();
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
    if (this.flashcardWrapper) {
      this.flashcardWrapper.classList.toggle('flipped', this.isFlipped);
    }
  }

  navigate(direction) {
    if (this.filteredData.length === 0) return;
    this.isFlipped = false;
    if (this.flashcardWrapper) this.flashcardWrapper.classList.remove('flipped');

    this.currentIndex = (this.currentIndex + direction + this.filteredData.length) % this.filteredData.length;
    this.renderCardContent();
  }

  async speakText(text, rate = 0.95) {
    if (window.aiTTS) {
      await window.aiTTS.speak(text, { rate });
    }
  }

  speakWord() {
    if (this.filteredData[this.currentIndex]) {
      this.speakText(this.filteredData[this.currentIndex].word, 0.9);
    }
  }

  renderCardContent() {
    if (this.filteredData.length === 0) {
      if (this.cardWord) this.cardWord.textContent = "Aucun mot trouvé";
      if (this.cardDefinition) this.cardDefinition.textContent = "Veuillez modifier vos critères ou filtres de recherche.";
      if (this.cardExamplesList) this.cardExamplesList.innerHTML = "";
      return;
    }

    const item = this.filteredData[this.currentIndex];
    if (this.cardWord) this.cardWord.textContent = item.word;
    if (this.cardLevel) this.cardLevel.textContent = item.level;
    if (this.cardTheme) this.cardTheme.textContent = item.theme;
    if (this.cardType) this.cardType.textContent = item.type;
    
    if (this.cardPhonetique) {
      this.cardPhonetique.textContent = item.phonetique || '';
      this.cardPhonetique.style.display = item.phonetique ? 'inline-block' : 'none';
    }
    if (this.cardVerifiedBadge) {
      this.cardVerifiedBadge.style.display = item.source_verifiee ? 'inline-flex' : 'none';
    }
    if (this.cardDefinition) this.cardDefinition.textContent = item.definition;

    // Render SRS status badge
    if (this.cardSrsBadge) {
      const srs = this.getWordSRS(item.id);
      if (srs.box === 0) {
        this.cardSrsBadge.className = 'badge';
        this.cardSrsBadge.textContent = 'Nouveau mot';
      } else if (srs.box < 4) {
        this.cardSrsBadge.className = 'badge badge-warning';
        this.cardSrsBadge.textContent = `Boîte ${srs.box}/5 (En apprentissage)`;
      } else {
        this.cardSrsBadge.className = 'badge badge-success';
        this.cardSrsBadge.textContent = `Boîte ${srs.box}/5 (Maîtrisé)`;
      }
    }

    // Render 10 example sentences with selected trilingual translation and audio button
    if (this.cardExamplesList) {
      this.cardExamplesList.innerHTML = item.examples.map((ex, idx) => `
        <div class="example-item" style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
          <div style="flex:1;">
            <div class="fr-text"><strong>${idx + 1}.</strong> ${ex.fr}</div>
            <div class="tr-text">➜ ${ex[this.currentLang] || ex.en}</div>
          </div>
          <button class="md-icon-button" style="width:32px; height:32px; flex-shrink:0;" onclick="event.stopPropagation(); vocabModule.speakText('${ex.fr.replace(/'/g, "\\'")}', 0.95)" title="Écouter la phrase">
            <span class="material-icons-round" style="font-size:18px;">volume_up</span>
          </button>
        </div>
      `).join('');
    }
  }

  renderTable() {
    if (!this.tableBody) return;
    if (this.tableCountLabel) this.tableCountLabel.textContent = this.filteredData.length.toLocaleString();

    const start = (this.currentPage - 1) * this.pageSize;
    const pageItems = this.filteredData.slice(start, start + this.pageSize);
    const srsMap = this.getSRSMap();

    this.tableBody.innerHTML = pageItems.map(item => {
      const srs = srsMap[item.id] || { box: 0 };
      const srsBadge = srs.box === 0 ? 
        '<span class="badge" style="font-size:0.7rem;">Nouveau</span>' :
        srs.box >= 4 ? 
        `<span class="badge badge-success" style="font-size:0.7rem;">Boîte ${srs.box}</span>` :
        `<span class="badge badge-warning" style="font-size:0.7rem;">Boîte ${srs.box}</span>`;

      return `
        <tr>
          <td><strong>${item.word}</strong></td>
          <td><span class="badge level-badge">${item.level}</span></td>
          <td><span class="badge theme-badge">${item.theme}</span></td>
          <td>${item.definition}</td>
          <td>${srsBadge}</td>
          <td>${item.examples[0] ? item.examples[0][this.currentLang] : ''}</td>
          <td>
            <button class="md-button md-button--outlined" onclick="vocabModule.selectWordById(${item.id})">Réviser</button>
          </td>
        </tr>
      `;
    }).join('');

    this.renderPagination();
  }

  renderPagination() {
    if (!this.paginationContainer) return;
    const totalPages = Math.ceil(this.filteredData.length / this.pageSize);
    if (totalPages <= 1) {
      this.paginationContainer.innerHTML = '';
      return;
    }

    this.paginationContainer.innerHTML = `
      <button class="md-button md-button--text" ${this.currentPage === 1 ? 'disabled' : ''} onclick="vocabModule.changePage(-1)">◀ Précédent</button>
      <span>Page ${this.currentPage} sur ${totalPages}</span>
      <button class="md-button md-button--text" ${this.currentPage === totalPages ? 'disabled' : ''} onclick="vocabModule.changePage(1)">Suivant ▶</button>
    `;
  }

  changePage(delta) {
    this.currentPage += delta;
    this.renderTable();
  }

  selectWordById(id) {
    const idx = this.filteredData.findIndex(item => item.id === id);
    if (idx !== -1) {
      this.currentIndex = idx;
      this.isFlipped = false;
      if (this.flashcardWrapper) this.flashcardWrapper.classList.remove('flipped');
      this.renderCardContent();
      const cardContainer = document.querySelector('.flashcard-container');
      if (cardContainer) {
        window.scrollTo({ top: cardContainer.offsetTop - 100, behavior: 'smooth' });
      }
    }
  }

  render() {
    this.renderCardContent();
    this.renderTable();
  }
}

// Global exposure
if (typeof window !== 'undefined') {
  window.VocabularyModule = VocabularyModule;
  window.VocabModule = VocabularyModule;
}
if (typeof global !== 'undefined') {
  global.VocabularyModule = VocabularyModule;
  global.VocabModule = VocabularyModule;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VocabularyModule, VocabModule: VocabularyModule };
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.vocabModule) {
      window.vocabModule = new VocabularyModule();
    }
  });
}
