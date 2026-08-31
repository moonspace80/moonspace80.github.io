/* ==========================================================================
   MODULE EXPRESSIONS IDIOMATIQUES & ACTES DE PAROLE
   ========================================================================== */

class ExpressionsModule {
  constructor() {
    this.dataset = window.expressionsDataset || [];
    this.filteredData = [...this.dataset];
    this.container = document.getElementById('expressions-grid-container');
    this.categoryFilter = document.getElementById('expr-category-filter');

    this.init();
  }

  init() {
    this.populateCategories();
    this.bindEvents();
    this.render();
  }

  populateCategories() {
    if (!this.categoryFilter) return;
    const cats = Array.from(new Set(this.dataset.map(i => i.category)));
    cats.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      this.categoryFilter.appendChild(opt);
    });
  }

  bindEvents() {
    if (this.categoryFilter) {
      this.categoryFilter.addEventListener('change', (e) => {
        const val = e.target.value;
        this.filteredData = val === 'all' ? [...this.dataset] : this.dataset.filter(i => i.category === val);
        this.render();
      });
    }
  }

  render() {
    if (!this.container) return;

    if (this.filteredData.length === 0) {
      this.container.innerHTML = `
        <div style="grid-column: 1/-1; padding: 32px; text-align: center; color: var(--md-sys-color-on-surface-variant);">
          Aucune expression trouvée pour cette catégorie.
        </div>
      `;
      return;
    }

    this.container.innerHTML = this.filteredData.map(item => `
      <div class="md-card expression-card" style="padding:20px; display:flex; flex-direction:column; justify-height:space-between; border-left:4px solid var(--md-sys-color-primary);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
          <span class="target-badge badge-b2" style="font-size:0.75rem; padding:2px 8px;">${item.level}</span>
          <span style="font-size:0.75rem; color:var(--md-sys-color-on-surface-variant); font-weight:500;">${item.category}</span>
        </div>
        <h4 style="font-size:1.1rem; color:var(--md-sys-color-on-surface); margin-bottom:8px; line-height:1.3;">« ${item.expression} »</h4>
        <p style="font-size:0.875rem; color:var(--md-sys-color-on-surface-variant); flex:1; margin-bottom:16px;">${item.definition}</p>
        <button class="md-button md-button--text" style="align-self:flex-start; padding:4px 8px; font-size:0.8rem;" onclick="expressionsModule.speak('${item.expression.replace(/'/g, "\\'")}')">
          <span class="material-icons-round" style="font-size:18px;">volume_up</span> Prononcer l'expression
        </button>
      </div>
    `).join('');
  }

  speak(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}

// Global exposure
if (typeof window !== 'undefined') {
  window.ExpressionsModule = ExpressionsModule;
}
if (typeof global !== 'undefined') {
  global.ExpressionsModule = ExpressionsModule;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ExpressionsModule };
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.expressionsModule) {
      window.expressionsModule = new ExpressionsModule();
    }
  });
}
