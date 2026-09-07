/* ==========================================================================
   MODULE 5: PRODUCTION ÉCRITE (DELF B2 & DALF C1)
   Interactive editor, word counter, CECRL evaluation rubric, connector toolbox & timer
   ========================================================================== */

class WritingModule {
  constructor() {
    this.dataset = window.writingDataset || [];
    this.currentTopicIndex = 0;
    this.selectedLevel = 'ALL';
    
    // Timer state
    this.timerInterval = null;
    this.remainingSeconds = 60 * 60; // default 60 min
    this.isTimerRunning = false;

    this.initDOM();
    this.bindEvents();
    this.renderTopicList();
    this.loadTopic(0);
  }

  initDOM() {
    this.topicListContainer = document.getElementById('writing-topic-list');
    this.levelFilter = document.getElementById('writing-level-filter');
    this.topicTitleEl = document.getElementById('writing-topic-title');
    this.topicLevelBadge = document.getElementById('writing-topic-level-badge');
    this.topicTypeBadge = document.getElementById('writing-topic-type-badge');
    this.topicPromptEl = document.getElementById('writing-topic-prompt');
    this.structureTipsList = document.getElementById('writing-structure-tips');
    this.editorTextarea = document.getElementById('writing-editor-textarea');
    this.wordCountLabel = document.getElementById('writing-word-count');
    this.wordStatusBadge = document.getElementById('writing-word-status');
    this.timerDisplay = document.getElementById('writing-timer-display');
    this.timerToggleBtn = document.getElementById('writing-timer-toggle-btn');
    this.timerResetBtn = document.getElementById('writing-timer-reset-btn');
    this.connectorsContainer = document.getElementById('writing-connectors-toolbox');
    this.cecrlGridContainer = document.getElementById('writing-cecrl-grid');
    this.solutionContainer = document.getElementById('writing-sample-solution');
    this.toggleSolutionBtn = document.getElementById('toggle-writing-solution-btn');
    this.saveDraftBtn = document.getElementById('writing-save-draft-btn');
    this.clearDraftBtn = document.getElementById('writing-clear-draft-btn');
    this.exportBtn = document.getElementById('writing-export-btn');
    this.autoSaveIndicator = document.getElementById('writing-autosave-status');
  }

  bindEvents() {
    if (this.levelFilter) {
      this.levelFilter.addEventListener('change', (e) => {
        this.selectedLevel = e.target.value;
        this.renderTopicList();
        const firstMatch = this.dataset.findIndex(item => this.selectedLevel === 'ALL' || item.level.includes(this.selectedLevel));
        if (firstMatch !== -1) {
          this.loadTopic(firstMatch);
        }
      });
    }

    if (this.editorTextarea) {
      this.editorTextarea.addEventListener('input', () => {
        this.updateWordCount();
        this.autoSaveDraft();
      });
    }

    if (this.timerToggleBtn) {
      this.timerToggleBtn.addEventListener('click', () => this.toggleTimer());
    }

    if (this.timerResetBtn) {
      this.timerResetBtn.addEventListener('click', () => this.resetTimer());
    }

    if (this.toggleSolutionBtn) {
      this.toggleSolutionBtn.addEventListener('click', () => {
        if (!this.solutionContainer) return;
        const isHidden = this.solutionContainer.style.display === 'none' || !this.solutionContainer.style.display;
        this.solutionContainer.style.display = isHidden ? 'block' : 'none';
        this.toggleSolutionBtn.innerHTML = isHidden ? 
          '<span class="material-icons-round">visibility_off</span> Masquer le modèle' : 
          '<span class="material-icons-round">visibility</span> Consulter le corrigé modèle';
      });
    }

    if (this.saveDraftBtn) {
      this.saveDraftBtn.addEventListener('click', () => {
        this.autoSaveDraft(true);
      });
    }

    if (this.clearDraftBtn) {
      this.clearDraftBtn.addEventListener('click', () => {
        if (confirm('Voulez-vous vraiment effacer votre texte pour ce sujet ?')) {
          if (this.editorTextarea) this.editorTextarea.value = '';
          this.updateWordCount();
          this.autoSaveDraft(true);
        }
      });
    }

    if (this.exportBtn) {
      this.exportBtn.addEventListener('click', () => this.exportText());
    }
  }

  renderTopicList() {
    if (!this.topicListContainer) return;
    const filtered = this.dataset.filter(item => this.selectedLevel === 'ALL' || item.level.includes(this.selectedLevel));

    if (filtered.length === 0) {
      this.topicListContainer.innerHTML = '<div style="padding:16px; text-align:center; font-size:0.875rem;">Aucun sujet trouvé.</div>';
      return;
    }

    this.topicListContainer.innerHTML = filtered.map((topic) => {
      const globalIdx = this.dataset.findIndex(t => t.id === topic.id);
      const isActive = globalIdx === this.currentTopicIndex;
      const isB2 = topic.level.includes('B2');
      const badgeClass = isB2 ? 'b2-badge' : 'c1-badge';
      
      return `
        <button class="writing-topic-item ${isActive ? 'active' : ''}" onclick="writingModule.loadTopic(${globalIdx})">
          <div style="display:flex; justify-content:space-between; align-items:center; width:100%; margin-bottom:4px;">
            <span class="badge ${badgeClass}" style="font-size:0.75rem;">${topic.level}</span>
            <span style="font-size:0.75rem; color:var(--md-sys-color-on-surface-variant);">${topic.targetWords} mots • ${topic.timeLimitMinutes} min</span>
          </div>
          <div style="font-weight:600; font-size:0.875rem; text-align:left; line-height:1.3;">${topic.title}</div>
          <div style="font-size:0.75rem; opacity:0.8; margin-top:4px;">${topic.type}</div>
        </button>
      `;
    }).join('');
  }

  loadTopic(index) {
    if (!this.dataset[index]) return;
    this.currentTopicIndex = index;
    const topic = this.dataset[index];

    this.renderTopicList();

    if (this.topicTitleEl) this.topicTitleEl.textContent = topic.title;
    if (this.topicLevelBadge) this.topicLevelBadge.textContent = topic.level;
    if (this.topicTypeBadge) this.topicTypeBadge.textContent = topic.type;
    if (this.topicPromptEl) this.topicPromptEl.innerHTML = topic.prompt;

    if (this.structureTipsList) {
      this.structureTipsList.innerHTML = topic.structureTips.map(tip => `<li>${tip}</li>`).join('');
    }

    // Reset solution container
    if (this.solutionContainer) {
      this.solutionContainer.style.display = 'none';
      this.solutionContainer.innerHTML = `
        <div class="sample-solution-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid var(--md-sys-color-outline-variant); padding-bottom:8px;">
            <strong style="color:var(--md-sys-color-primary);">Exemple de production d'excellence (Niveau ${topic.level})</strong>
            <span style="font-size:0.75rem; background:rgba(16,185,129,0.1); color:#059669; padding:2px 8px; border-radius:4px;">Score estimé : 24-25/25</span>
          </div>
          <pre style="white-space:pre-wrap; font-family:inherit; font-size:0.9rem; line-height:1.6; margin:0;">${topic.sampleSolution}</pre>
        </div>
      `;
    }
    if (this.toggleSolutionBtn) {
      this.toggleSolutionBtn.innerHTML = '<span class="material-icons-round">visibility</span> Consulter le corrigé modèle';
    }

    // Render Connectors Toolbox
    this.renderConnectorsToolbox();

    // Render CECRL Rubric
    this.renderCECRLGrid(topic.level.includes('B2') ? 'b2' : 'c1');

    // Load Draft from LocalStorage
    const savedDraft = localStorage.getItem(`delf_writing_draft_${topic.id}`) || '';
    if (this.editorTextarea) {
      this.editorTextarea.value = savedDraft;
    }
    this.updateWordCount();

    // Reset Timer for this topic
    this.remainingSeconds = topic.timeLimitMinutes * 60;
    this.pauseTimer();
    this.updateTimerDisplay();
  }

  renderConnectorsToolbox() {
    if (!this.connectorsContainer || !window.connectorToolbox) return;

    this.connectorsContainer.innerHTML = window.connectorToolbox.map(cat => `
      <div class="connector-group">
        <div class="connector-group-title">${cat.category}</div>
        <div class="connector-chips-wrap">
          ${cat.items.map(item => `
            <button type="button" class="connector-chip" onclick="writingModule.insertConnector('${item.text.replace(/'/g, "\\'")}')" title="${item.tooltip}">
              <span>${item.text}</span>
              <span class="material-icons-round" style="font-size:14px; opacity:0.6;">add_circle</span>
            </button>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  renderCECRLGrid(levelKey) {
    if (!this.cecrlGridContainer || !window.cecrlGrids) return;
    const grid = window.cecrlGrids[levelKey] || [];

    this.cecrlGridContainer.innerHTML = `
      <div class="cecrl-rubric-table">
        <div style="font-weight:600; font-size:0.875rem; margin-bottom:8px; color:var(--md-sys-color-primary);">Grille d'évaluation officielle CECRL (${levelKey.toUpperCase()} - Total sur 25 points) :</div>
        ${grid.map((row, idx) => `
          <div class="rubric-row">
            <div style="flex:1;">
              <div style="font-weight:600; font-size:0.85rem;">${idx + 1}. ${row.criterion}</div>
              <div style="font-size:0.75rem; color:var(--md-sys-color-on-surface-variant); margin-top:2px;">${row.descriptors}</div>
            </div>
            <div style="font-weight:700; color:var(--md-sys-color-primary); font-size:0.9rem; padding-left:12px; white-space:nowrap;">
              /${row.points} pts
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  insertConnector(text) {
    if (!this.editorTextarea) return;
    const el = this.editorTextarea;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const val = el.value;

    el.value = val.substring(0, start) + text + val.substring(end);
    el.selectionStart = el.selectionEnd = start + text.length;
    el.focus();

    this.updateWordCount();
    this.autoSaveDraft();
  }

  updateWordCount() {
    if (!this.editorTextarea) return;
    const text = this.editorTextarea.value.trim();
    // Count words (splitting by whitespace, apostrophes and hyphens)
    const words = text ? text.split(/\s+/).filter(w => w.length > 0) : [];
    const count = words.length;

    const topic = this.dataset[this.currentTopicIndex];
    const target = topic ? topic.targetWords : 250;
    const isSynthesis = topic && topic.type.includes('Synthèse');

    if (this.wordCountLabel) {
      this.wordCountLabel.textContent = `${count} mot${count > 1 ? 's' : ''}`;
    }

    if (this.wordStatusBadge) {
      if (isSynthesis) {
        // C1 Synthesis: strict +/- 10%
        const minTarget = Math.floor(target * 0.9);
        const maxTarget = Math.ceil(target * 1.1);
        if (count === 0) {
          this.wordStatusBadge.className = 'badge';
          this.wordStatusBadge.textContent = `Cible : ${target} mots (±10%)`;
        } else if (count < minTarget) {
          this.wordStatusBadge.className = 'badge badge-warning';
          this.wordStatusBadge.textContent = `Trop court (${count}/${minTarget} min)`;
        } else if (count > maxTarget) {
          this.wordStatusBadge.className = 'badge badge-error';
          this.wordStatusBadge.textContent = `Trop long (${count}/${maxTarget} max)`;
        } else {
          this.wordStatusBadge.className = 'badge badge-success';
          this.wordStatusBadge.textContent = `Longueur idéale (${minTarget}-${maxTarget} mots)`;
        }
      } else {
        // Regular B2/C1 essay: minimum target
        if (count === 0) {
          this.wordStatusBadge.className = 'badge';
          this.wordStatusBadge.textContent = `Cible : min. ${target} mots`;
        } else if (count < target * 0.8) {
          this.wordStatusBadge.className = 'badge badge-warning';
          this.wordStatusBadge.textContent = `Insuffisant (${count}/${target} mots)`;
        } else if (count < target) {
          this.wordStatusBadge.className = 'badge badge-warning';
          this.wordStatusBadge.textContent = `Presque atteint (${count}/${target} mots)`;
        } else {
          this.wordStatusBadge.className = 'badge badge-success';
          this.wordStatusBadge.textContent = `Cible atteinte (${count} mots)`;
        }
      }
    }
  }

  autoSaveDraft(manual = false) {
    const topic = this.dataset[this.currentTopicIndex];
    if (!topic || !this.editorTextarea) return;

    localStorage.setItem(`delf_writing_draft_${topic.id}`, this.editorTextarea.value);

    if (this.autoSaveIndicator) {
      this.autoSaveIndicator.textContent = manual ? '✓ Enregistré manuellement' : '✓ Brouillon sauvegardé';
      this.autoSaveIndicator.style.opacity = '1';
      setTimeout(() => {
        if (this.autoSaveIndicator) this.autoSaveIndicator.style.opacity = '0.6';
      }, 2000);
    }
  }

  toggleTimer() {
    if (this.isTimerRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    this.isTimerRunning = true;
    if (this.timerToggleBtn) {
      this.timerToggleBtn.innerHTML = '<span class="material-icons-round">pause</span> Pause';
      this.timerToggleBtn.classList.add('timer-running');
    }

    this.timerInterval = setInterval(() => {
      if (this.remainingSeconds > 0) {
        this.remainingSeconds--;
        this.updateTimerDisplay();
      } else {
        this.pauseTimer();
        alert("⏱️ Temps imparti écoulé pour cette épreuve de production écrite !");
      }
    }, 1000);
  }

  pauseTimer() {
    this.isTimerRunning = false;
    if (this.timerInterval) clearInterval(this.timerInterval);
    if (this.timerToggleBtn) {
      this.timerToggleBtn.innerHTML = '<span class="material-icons-round">play_arrow</span> Démarrer';
      this.timerToggleBtn.classList.remove('timer-running');
    }
  }

  resetTimer() {
    this.pauseTimer();
    const topic = this.dataset[this.currentTopicIndex];
    this.remainingSeconds = (topic ? topic.timeLimitMinutes : 60) * 60;
    this.updateTimerDisplay();
  }

  updateTimerDisplay() {
    if (!this.timerDisplay) return;
    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    this.timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  exportText() {
    const topic = this.dataset[this.currentTopicIndex];
    const text = this.editorTextarea ? this.editorTextarea.value : '';
    if (!text.trim()) {
      alert("Votre texte est vide. Écrivez votre rédaction avant de l'exporter.");
      return;
    }

    const filename = `Production_${topic.level}_${topic.id}_${new Date().toISOString().slice(0, 10)}.txt`;
    const fullContent = `======================================================
ÉPREUVE DE PRODUCTION ÉCRITE (${topic.level})
Sujet : ${topic.title}
Type : ${topic.type}
Date : ${new Date().toLocaleDateString('fr-FR')}
Nombre de mots : ${text.split(/\s+/).filter(Boolean).length}
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
}

// Global exposure
if (typeof window !== 'undefined') {
  window.WritingModule = WritingModule;
}
if (typeof global !== 'undefined') {
  global.WritingModule = WritingModule;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WritingModule };
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.writingModule) {
      window.writingModule = new WritingModule();
    }
  });
}
