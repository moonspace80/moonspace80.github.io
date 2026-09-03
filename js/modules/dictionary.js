/* ==========================================================================
   MODULE LISTE DE VOCABULAIRE & LEXIQUE DU GRAND PARCOURS
   Vue Tableau / Cartes visuelles · Liaison Chapitre · Fiche Mot Détaillée
   ========================================================================== */

class DictionaryModule {
  constructor() {
    this.dataset = window.vocabDataset || [];
    this.filteredData = [...this.dataset];
    this.currentPage = 1;
    this.pageSize = 15;
    this.selectedLetter = 'ALL';
    this.selectedLevel = 'all';
    this.selectedTheme = 'all';
    this.selectedType = 'all';
    this.sortOrder = 'az';
    this.searchQuery = '';
    this.viewMode = 'table'; // 'table' | 'cards'

    // Chapter indexation cache
    this.chapterIndex = new Map();
    this.levelChapters = {};

    this.buildChapterIndex();
    this.initDOM();
    this.renderAlphabetBar();
    this.applyFilters();
  }

  buildChapterIndex() {
    const chapters = window.journeyDataset || [];
    if (!chapters || chapters.length === 0) return;

    const normalize = (s) => (s || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/^(l'|le |la |les |un |une |des |d')/g, '')
      .trim();

    chapters.forEach(ch => {
      if (!this.levelChapters[ch.level]) {
        this.levelChapters[ch.level] = [];
      }
      this.levelChapters[ch.level].push(ch);

      (ch.quests || []).forEach(q => {
        (q.steps || []).forEach(st => {
          (st.words || []).forEach(w => {
            const rawTerm = typeof w === 'string' ? w : (w.term || w.word || '');
            const norm = normalize(rawTerm);
            if (norm && !this.chapterIndex.has(norm)) {
              this.chapterIndex.set(norm, {
                chapterId: ch.chapterId,
                chapterNumber: ch.chapterNumber,
                chapterTitle: ch.chapterTitle || `Chapitre ${ch.chapterNumber}`,
                level: ch.level
              });
            }
          });
        });
      });
    });
  }

  getChapterForWord(item) {
    if (!item) return null;
    const normalize = (s) => (s || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/^(l'|le |la |les |un |une |des |d')/g, '')
      .trim();

    const norm = normalize(item.word);
    if (this.chapterIndex.has(norm)) {
      return this.chapterIndex.get(norm);
    }

    // Fallback deterministic distribution across chapters of the same level
    const lvl = item.level || 'B2';
    const chapters = this.levelChapters[lvl] || this.levelChapters['B2'] || [];
    if (chapters.length > 0) {
      let hash = 0;
      for (let i = 0; i < (item.word || '').length; i++) {
        hash = (hash << 5) - hash + item.word.charCodeAt(i);
        hash |= 0;
      }
      const idx = Math.abs(hash) % chapters.length;
      const ch = chapters[idx];
      return {
        chapterId: ch.chapterId,
        chapterNumber: ch.chapterNumber,
        chapterTitle: ch.chapterTitle || `Chapitre ${ch.chapterNumber}`,
        level: ch.level
      };
    }

    return null;
  }

  initDOM() {
    this.searchInput = document.getElementById('dict-search-input');
    this.levelFilter = document.getElementById('dict-level-filter');
    this.themeFilter = document.getElementById('dict-theme-filter');
    this.typeFilter = document.getElementById('dict-type-filter');
    this.sortOrderSelect = document.getElementById('dict-sort-order');
    this.alphabetBar = document.getElementById('dict-alphabet-bar');

    this.tableContainer = document.getElementById('dict-table-container');
    this.cardsContainer = document.getElementById('dict-cards-container');
    this.cardsGrid = document.getElementById('dict-cards-grid');

    this.viewTableBtn = document.getElementById('dict-view-table-btn');
    this.viewCardsBtn = document.getElementById('dict-view-cards-btn');

    this.tableBody = document.getElementById('dict-table-body');
    this.countLabel = document.getElementById('dict-table-count-label');
    this.paginationContainer = document.getElementById('dict-pagination');

    this.modal = document.getElementById('dict-word-modal');
    this.modalBody = document.getElementById('dict-modal-body');

    if (this.searchInput) {
      this.searchInput.addEventListener('input', () => {
        this.searchQuery = this.searchInput.value.toLowerCase().trim();
        this.applyFilters();
      });
    }

    if (this.levelFilter) {
      this.levelFilter.addEventListener('change', (e) => {
        this.selectedLevel = e.target.value;
        this.applyFilters();
      });
    }

    if (this.themeFilter) {
      this.themeFilter.addEventListener('change', (e) => {
        this.selectedTheme = e.target.value;
        this.applyFilters();
      });
    }

    if (this.typeFilter) {
      this.typeFilter.addEventListener('change', (e) => {
        this.selectedType = e.target.value;
        this.applyFilters();
      });
    }

    if (this.sortOrderSelect) {
      this.sortOrderSelect.addEventListener('change', (e) => {
        this.sortOrder = e.target.value;
        this.applyFilters();
      });
    }

    if (this.viewTableBtn) {
      this.viewTableBtn.addEventListener('click', () => {
        this.setViewMode('table');
      });
    }

    if (this.viewCardsBtn) {
      this.viewCardsBtn.addEventListener('click', () => {
        this.setViewMode('cards');
      });
    }
  }

  setViewMode(mode) {
    this.viewMode = mode;
    if (this.viewTableBtn && this.viewCardsBtn) {
      if (mode === 'table') {
        this.viewTableBtn.classList.add('active');
        this.viewCardsBtn.classList.remove('active');
        if (this.tableContainer) this.tableContainer.style.display = 'block';
        if (this.cardsContainer) this.cardsContainer.style.display = 'none';
        this.pageSize = 15;
      } else {
        this.viewCardsBtn.classList.add('active');
        this.viewTableBtn.classList.remove('active');
        if (this.tableContainer) this.tableContainer.style.display = 'none';
        if (this.cardsContainer) this.cardsContainer.style.display = 'block';
        this.pageSize = 12;
      }
    }
    this.currentPage = 1;
    this.render();
  }

  renderAlphabetBar() {
    if (!this.alphabetBar) return;
    const alphabet = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

    this.alphabetBar.innerHTML = alphabet.map(letter => {
      const activeClass = letter === this.selectedLetter ? 'md-chip--active' : '';
      const label = letter === 'ALL' ? 'Tous (A-Z)' : letter;
      return `<button class="md-chip ${activeClass} dict-letter-chip" data-letter="${letter}">${label}</button>`;
    }).join('');

    this.alphabetBar.querySelectorAll('.dict-letter-chip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.alphabetBar.querySelectorAll('.dict-letter-chip').forEach(b => b.classList.remove('md-chip--active'));
        e.currentTarget.classList.add('md-chip--active');
        this.selectedLetter = e.currentTarget.getAttribute('data-letter');
        this.applyFilters();
      });
    });
  }

  applyFilters() {
    // Refresh dataset from global window if loaded asynchronously
    if ((!this.dataset || this.dataset.length === 0) && window.vocabDataset) {
      this.dataset = window.vocabDataset;
    }

    let result = (this.dataset || []).filter(item => {
      // 1. Search Query
      const matchesSearch = this.searchQuery === '' ||
        (item.word && item.word.toLowerCase().includes(this.searchQuery)) ||
        (item.definition && item.definition.toLowerCase().includes(this.searchQuery)) ||
        (item.theme && item.theme.toLowerCase().includes(this.searchQuery)) ||
        (item.type && item.type.toLowerCase().includes(this.searchQuery)) ||
        (item.examples && item.examples.some(ex => (ex.fr && ex.fr.toLowerCase().includes(this.searchQuery)) || (ex.en && ex.en.toLowerCase().includes(this.searchQuery))));

      // 2. Level Filter
      const matchesLevel = this.selectedLevel === 'all' || item.level === this.selectedLevel;

      // 3. Theme Filter
      const matchesTheme = this.selectedTheme === 'all' || item.theme === this.selectedTheme;

      // 4. Type Filter
      const itemType = (item.type || '').toLowerCase();
      let matchesType = true;
      if (this.selectedType === 'nom') {
        matchesType = itemType.includes('nom') || (!itemType.includes('verbe') && !itemType.includes('adjectif') && !itemType.includes('adverbe'));
      } else if (this.selectedType === 'verbe') {
        matchesType = itemType.includes('verbe');
      } else if (this.selectedType === 'adjectif') {
        matchesType = itemType.includes('adjectif');
      } else if (this.selectedType === 'adverbe') {
        matchesType = itemType.includes('adverbe');
      }

      // 5. Letter Filter (A-Z)
      let matchesLetter = true;
      if (this.selectedLetter !== 'ALL' && item.word) {
        const cleanWord = item.word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
        matchesLetter = cleanWord.startsWith(this.selectedLetter);
      }

      return matchesSearch && matchesLevel && matchesTheme && matchesType && matchesLetter;
    });

    // Sort order
    if (this.sortOrder === 'az') {
      result.sort((a, b) => (a.word || '').localeCompare(b.word || '', 'fr', { sensitivity: 'base' }));
    } else if (this.sortOrder === 'za') {
      result.sort((a, b) => (b.word || '').localeCompare(a.word || '', 'fr', { sensitivity: 'base' }));
    }

    this.filteredData = result;
    this.currentPage = 1;
    this.render();
  }

  render() {
    if (this.countLabel) this.countLabel.textContent = this.filteredData.length.toLocaleString('fr-FR');
    const headerCount = document.getElementById('dict-header-total-count');
    if (headerCount) headerCount.textContent = (this.dataset ? this.dataset.length : 0).toLocaleString('fr-FR');

    if (this.viewMode === 'table') {
      this.renderTable();
    } else {
      this.renderCards();
    }
    this.renderPagination();
  }

  renderTable() {
    if (!this.tableBody) return;

    if (this.filteredData.length === 0) {
      this.tableBody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; padding: 28px; color: var(--md-sys-color-on-surface-variant);">
            <div style="font-size:1.1rem; font-weight:600; margin-bottom:4px;">Aucun mot trouvé</div>
            <div style="font-size:0.85rem;">Essayez d'élargir vos filtres de recherche ou sélectionnez une autre lettre.</div>
          </td>
        </tr>
      `;
      return;
    }

    const startIdx = (this.currentPage - 1) * this.pageSize;
    const pageItems = this.filteredData.slice(startIdx, startIdx + this.pageSize);

    this.tableBody.innerHTML = pageItems.map(item => {
      const badgeClass = item.level === 'B2' ? 'badge-b2' : item.level === 'C1' ? 'badge-c1' : item.level === 'C2' ? 'badge-c1' : 'badge-b1';
      const t = (item.type || '').toLowerCase();
      const typeBadge = t.includes('verbe') ? '⚙️ Verbe' : t.includes('adjectif') ? '🎨 Adjectif' : t.includes('adverbe') ? '⚡ Adverbe' : '📖 Nom';

      const chapter = this.getChapterForWord(item);
      const chapterCell = chapter ? `
        <button class="chapter-link-badge" onclick="event.stopPropagation(); dictionaryModule.navigateToChapter('${chapter.chapterId}')" title="${chapter.chapterTitle}">
          <span class="material-icons-round">auto_stories</span>
          <span>Ch. ${chapter.chapterNumber || chapter.chapterId}</span>
        </button>
      ` : `<span style="color:var(--md-sys-color-outline); font-size:0.8rem;">—</span>`;

      const safeWord = (item.word || '').replace(/'/g, "\\'");

      return `
        <tr onclick="dictionaryModule.showWordDetail('${safeWord}')" style="cursor:pointer;" title="Cliquer pour ouvrir la fiche détaillée">
          <td>
            <strong style="color:var(--md-sys-color-primary);">${item.word}</strong>
            ${item.phonetique ? `<div style="font-size:0.75rem; font-family:monospace; color:var(--md-sys-color-outline);">${item.phonetique}</div>` : ''}
            ${item.theme ? `<div style="font-size:0.72rem; color:var(--md-sys-color-on-surface-variant); margin-top:2px;">🏷️ ${item.theme}</div>` : ''}
          </td>
          <td><span class="md-chip" style="font-size:0.75rem; padding:2px 8px;">${typeBadge}</span></td>
          <td><span class="target-badge ${badgeClass}" style="padding:2px 8px; font-size:0.75rem;">${item.level}</span></td>
          <td style="max-width:320px; font-size:0.85rem; line-height:1.4;">${item.definition || '—'}</td>
          <td>${chapterCell}</td>
          <td>
            <div style="display:flex; gap:6px; align-items:center;">
              <button class="md-button md-button--text" style="padding:4px 8px; font-size:0.8rem;" onclick="event.stopPropagation(); dictionaryModule.speakWord('${safeWord}')" title="Écouter la prononciation">
                <span class="material-icons-round" style="font-size:16px;">volume_up</span>
              </button>
              <button class="md-button md-button--outlined" style="padding:4px 8px; font-size:0.75rem;" onclick="event.stopPropagation(); dictionaryModule.showWordDetail('${safeWord}')">
                Fiche
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  renderCards() {
    if (!this.cardsGrid) return;

    if (this.filteredData.length === 0) {
      this.cardsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--md-sys-color-on-surface-variant);">
          <div style="font-size:1.1rem; font-weight:600; margin-bottom:4px;">Aucun mot trouvé</div>
          <div style="font-size:0.85rem;">Essayez d'élargir vos critères de recherche.</div>
        </div>
      `;
      return;
    }

    const startIdx = (this.currentPage - 1) * this.pageSize;
    const pageItems = this.filteredData.slice(startIdx, startIdx + this.pageSize);

    this.cardsGrid.innerHTML = pageItems.map(item => {
      const badgeClass = item.level === 'B2' ? 'badge-b2' : item.level === 'C1' ? 'badge-c1' : item.level === 'C2' ? 'badge-c1' : 'badge-b1';
      const t = (item.type || '').toLowerCase();
      const typeBadge = t.includes('verbe') ? '⚙️ Verbe' : t.includes('adjectif') ? '🎨 Adjectif' : t.includes('adverbe') ? '⚡ Adverbe' : '📖 Nom';

      const chapter = this.getChapterForWord(item);
      const safeWord = (item.word || '').replace(/'/g, "\\'");
      const initial = (item.word || 'A').charAt(0).toUpperCase();

      return `
        <div class="dict-card-item dict-card-item--simplified" onclick="dictionaryModule.showWordDetail('${safeWord}')">
          <div class="dict-card-body">
            <div class="dict-card-header">
              <div class="dict-card-word">${item.word}</div>
              <div class="dict-card-badges-inline">
                <span class="md-chip" style="font-size:0.72rem; padding:2px 8px; background:var(--md-sys-color-surface-variant); color:var(--md-sys-color-on-surface-variant); border:none;">${typeBadge}</span>
                <span class="target-badge ${badgeClass}" style="padding:2px 8px; font-size:0.72rem;">${item.level}</span>
              </div>
            </div>
            ${item.phonetique ? `<div class="dict-card-phonetic">${item.phonetique}</div>` : ''}
            ${item.theme ? `<div style="font-size:0.72rem; color:var(--md-sys-color-primary); font-weight:600; margin-bottom:6px;">🏷️ ${item.theme}</div>` : ''}
            <div class="dict-card-def">${item.definition || 'Définition disponible dans la fiche détaillée.'}</div>

            <div class="dict-card-footer">
              ${chapter ? `
                <button class="chapter-link-badge" onclick="event.stopPropagation(); dictionaryModule.navigateToChapter('${chapter.chapterId}')" title="${chapter.chapterTitle}">
                  <span class="material-icons-round">auto_stories</span>
                  <span>Ch. ${chapter.chapterNumber || chapter.chapterId}</span>
                </button>
              ` : `<span></span>`}

              <button class="md-icon-button" style="width:32px; height:32px;" onclick="event.stopPropagation(); dictionaryModule.speakWord('${safeWord}')" title="Écouter">
                <span class="material-icons-round" style="font-size:18px;">volume_up</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  renderPagination() {
    if (!this.paginationContainer) return;

    const totalPages = Math.ceil(this.filteredData.length / this.pageSize);
    if (totalPages <= 1) {
      this.paginationContainer.innerHTML = '';
      return;
    }

    let buttonsHTML = `
      <button class="md-button md-button--outlined" ${this.currentPage === 1 ? 'disabled' : ''} onclick="dictionaryModule.goToPage(${this.currentPage - 1})">
        <span class="material-icons-round" style="font-size:16px;">arrow_back</span> Précédent
      </button>
      <span class="page-info" style="font-weight:600; font-size:0.875rem; color:var(--md-sys-color-on-surface);">Page ${this.currentPage} sur ${totalPages}</span>
      <button class="md-button md-button--outlined" ${this.currentPage === totalPages ? 'disabled' : ''} onclick="dictionaryModule.goToPage(${this.currentPage + 1})">
        Suivant <span class="material-icons-round" style="font-size:16px;">arrow_forward</span>
      </button>
    `;

    this.paginationContainer.innerHTML = buttonsHTML;
  }

  goToPage(page) {
    this.currentPage = page;
    if (this.viewMode === 'table') {
      this.renderTable();
    } else {
      this.renderCards();
    }
    this.renderPagination();

    // Smooth scroll to top of list
    const el = document.getElementById('view-dictionary');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  showWordDetail(wordName) {
    const item = (this.dataset || []).find(w => (w.word || '').toLowerCase() === (wordName || '').toLowerCase());
    if (!item || !this.modal || !this.modalBody) return;

    const chapter = this.getChapterForWord(item);
    const badgeClass = item.level === 'B2' ? 'badge-b2' : item.level === 'C1' ? 'badge-c1' : item.level === 'C2' ? 'badge-c1' : 'badge-b1';
    const safeWord = (item.word || '').replace(/'/g, "\\'");

    let examplesHTML = '';
    if (item.examples && item.examples.length > 0) {
      examplesHTML = `
        <div class="modal-section-title">
          <span class="material-icons-round">format_quote</span>
          Exemples en contexte réel (${item.examples.length})
        </div>
        <div class="modal-examples-list">
          ${item.examples.map(ex => {
            const safeFr = (ex.fr || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
            return `
              <div class="modal-example-item">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
                  <div class="modal-example-fr">${ex.fr}</div>
                  <button class="md-icon-button" style="width:28px; height:28px; flex-shrink:0; margin-top:-2px;" onclick="dictionaryModule.speakText('${safeFr}')" title="Écouter cet exemple">
                    <span class="material-icons-round" style="font-size:16px;">volume_up</span>
                  </button>
                </div>
                ${ex.en ? `<div class="modal-example-en">${ex.en}</div>` : ''}
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    this.modalBody.innerHTML = `
      <div class="modal-word-header">
        <div>
          <h2 class="modal-word-title" id="dict-modal-title">${item.word}</h2>
          ${item.phonetique ? `<div style="font-family:monospace; color:var(--md-sys-color-primary); font-size:0.9rem; margin-top:2px;">${item.phonetique}</div>` : ''}
        </div>
        <button class="md-button md-button--filled dict-listen-btn" id="dict-listen-btn" onclick="dictionaryModule.speakWord('${safeWord}')" style="display:inline-flex; align-items:center; gap:6px;">
          <span class="material-icons-round">volume_up</span> Écouter
        </button>
      </div>

      <div class="modal-meta-row">
        <span class="target-badge ${badgeClass}">${item.level}</span>
        <span class="md-chip">${item.type || 'Nom'}</span>
        ${item.theme ? `<span class="md-chip" style="background:#EBF3F0; color:var(--md-sys-color-primary); font-weight:600;">🏷️ ${item.theme}</span>` : ''}
        ${chapter ? `
          <button class="chapter-link-badge" onclick="dictionaryModule.closeModal(); dictionaryModule.navigateToChapter('${chapter.chapterId}')" title="${chapter.chapterTitle}">
            <span class="material-icons-round">auto_stories</span>
            <span>Vu dans : ${chapter.chapterTitle}</span>
            <span class="material-icons-round">arrow_forward</span>
          </button>
        ` : ''}
      </div>

      <div class="modal-def-card">
        <div style="font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; color:var(--md-sys-color-primary); margin-bottom:4px;">Définition</div>
        <div class="modal-def-text">${item.definition || 'Définition non renseignée.'}</div>
      </div>

      ${examplesHTML}
    `;

    this.modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    if (this.modal) {
      this.modal.style.display = 'none';
      document.body.style.overflow = '';
      this.stopAudio();
    }
  }

  navigateToChapter(chapterId) {
    if (!chapterId) return;

    if (window.app && typeof window.app.switchTab === 'function') {
      window.app.switchTab('dashboard');
    }

    setTimeout(() => {
      const chapterCard = document.querySelector(`[data-chapter-id="${chapterId}"]`) || document.getElementById(`chapter-${chapterId}`);
      if (chapterCard) {
        chapterCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        chapterCard.classList.add('highlight-pulse');
        setTimeout(() => chapterCard.classList.remove('highlight-pulse'), 2500);
      }
    }, 200);
  }

  /**
   * Pronounce a word using Kokoro neural TTS (or Web Speech API fallback)
   */
  speakWord(word) {
    this.speakText(word);
  }

  /**
   * Pronounce arbitrary text using Kokoro neural TTS engine
   */
  speakText(text) {
    if (!text || !text.trim()) return;

    // Check if Kokoro engine is available on window
    const tts = window.kokoroTTS || window.aiTTS;
    if (tts && typeof tts.speak === 'function') {
      tts.speak(text, { rate: 0.95 });
      return;
    }

    // Native browser Web Speech fallback
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  }

  /**
   * Stop any playing audio
   */
  stopAudio() {
    const tts = window.kokoroTTS || window.aiTTS;
    if (tts && typeof tts.stop === 'function') {
      tts.stop();
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

// Global exposure
if (typeof window !== 'undefined') {
  window.DictionaryModule = DictionaryModule;
}
if (typeof global !== 'undefined') {
  global.DictionaryModule = DictionaryModule;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DictionaryModule };
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.dictionaryModule) {
      window.dictionaryModule = new DictionaryModule();
    }
  });
}

