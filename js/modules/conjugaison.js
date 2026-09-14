/**
 * ConjugaisonManager — Bescherelle Conjugation Engine & UI Controller
 * FrenchDELFB2C1 (Le Petit Nuage)
 * Conforms to SPEC-BESCHERELLE-CONJ-2026-09-13 & PROJECT.md § M3
 */

(function(root) {
  'use strict';

  // --------------------------------------------------------------------------
  // Helper: Phonetic vowel / silent-h elision detector
  // --------------------------------------------------------------------------
  function isVowelOrSilentH(word) {
    if (!word || typeof word !== 'string') return false;
    var norm = word.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
    if (!norm) return false;
    var firstChar = norm.charAt(0);
    if ('aeiouy'.indexOf(firstChar) !== -1) return true;
    if (firstChar === 'h') {
      // In French verbs, initial 'h' is virtually always silent (habiter, hésiter, héberger, etc.)
      return true;
    }
    return false;
  }

  // --------------------------------------------------------------------------
  // Auxiliary conjugation tables for compound tense derivation
  // --------------------------------------------------------------------------
  var AUX_FORMS = {
    avoir: {
      present: ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
      imparfait: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'],
      passe_simple: ['eus', 'eus', 'eut', 'eûmes', 'eûtes', 'eurent'],
      futur_simple: ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'],
      subjonctif_present: ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'],
      subjonctif_imparfait: ['eusse', 'eusses', 'eût', 'eussions', 'eussiez', 'eussent'],
      conditionnel_present: ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient'],
      imperatif: ['aie', 'ayons', 'ayez']
    },
    être: {
      present: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'],
      imparfait: ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient'],
      passe_simple: ['fus', 'fus', 'fut', 'fûmes', 'fûtes', 'furent'],
      futur_simple: ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'],
      subjonctif_present: ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'],
      subjonctif_imparfait: ['fusse', 'fusses', 'fût', 'fussions', 'fussiez', 'fussent'],
      conditionnel_present: ['serais', 'serais', 'serait', 'serions', 'seriez', 'seraient'],
      imperatif: ['sois', 'soyons', 'soyez']
    }
  };

  // --------------------------------------------------------------------------
  // Standard Pronouns with Elision Support
  // --------------------------------------------------------------------------
  var PRONOUNS = {
    '1s': 'je',
    '2s': 'tu ',
    '3s': 'il ',
    '1p': 'nous ',
    '2p': 'vous ',
    '3p': 'ils '
  };

  // --------------------------------------------------------------------------
  // ConjugaisonManager Definition
  // --------------------------------------------------------------------------
  var ConjugaisonManager = {
    _isOpen: false,
    _currentVerb: null,
    _historyStack: [],
    _dataset: null,
    _highlightedIndex: -1,
    _searchResults: [],
    _initialized: false,

    /**
     * Initialize DOM events, data binding, and keyboard shortcuts
     */
    init: function() {
      if (this._initialized) return;
      this._initialized = true;

      this._loadData();
      this._bindEvents();
    },

    /**
     * Synchronous or cached dataset loader
     */
    _loadData: function() {
      if (this._dataset && this._dataset.index) {
        return this._dataset;
      }

      // Check window globals
      if (typeof window !== 'undefined' && window.conjugaisonVerbsDataset) {
        this._dataset = window.conjugaisonVerbsDataset;
        return this._dataset;
      }
      if (typeof global !== 'undefined' && global.conjugaisonVerbsDataset) {
        this._dataset = global.conjugaisonVerbsDataset;
        return this._dataset;
      }

      // Check Node.js filesystem
      if (typeof require !== 'undefined') {
        try {
          var fs = require('fs');
          var path = require('path');
          var candidates = [
            path.resolve(__dirname, '../../data/conjugaison_verbs.json'),
            path.resolve(process.cwd(), 'data/conjugaison_verbs.json'),
            'c:/FrenchDELFB2C1/data/conjugaison_verbs.json'
          ];
          for (var i = 0; i < candidates.length; i++) {
            if (fs.existsSync(candidates[i])) {
              this._dataset = JSON.parse(fs.readFileSync(candidates[i], 'utf8'));
              if (typeof window !== 'undefined') {
                window.conjugaisonVerbsDataset = this._dataset;
              }
              return this._dataset;
            }
          }
        } catch (e) {
          // Ignore Node.js load error in browser
        }
      }

      // Browser async fetch fallback if dataset is not yet loaded
      if (typeof fetch !== 'undefined' && typeof window !== 'undefined') {
        var self = this;
        fetch('data/conjugaison_verbs.json')
          .then(function(res) { return res.json(); })
          .then(function(data) {
            self._dataset = data;
            window.conjugaisonVerbsDataset = data;
            if (self._isOpen && self._currentVerb) {
              self.loadVerb(self._currentVerb);
            }
          })
          .catch(function() {
            // Offline or file scheme
          });
      }

      return this._dataset;
    },

    /**
     * Bind DOM and keyboard listeners
     */
    _bindEvents: function() {
      var self = this;

      if (typeof document === 'undefined') return;

      // Close button listener
      var closeBtn = document.getElementById('conj-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', function() {
          self.close();
        });
      }

      // Backdrop overlay click listener
      var backdrop = document.getElementById('conj-backdrop');
      if (backdrop) {
        backdrop.addEventListener('click', function() {
          self.close();
        });
      }

      // Search input listeners
      var searchInput = document.getElementById('conj-search-input');
      if (searchInput) {
        searchInput.addEventListener('input', function(e) {
          self._onSearchInput(e.target.value);
        });

        searchInput.addEventListener('keydown', function(e) {
          self._onSearchKeydown(e);
        });
      }

      // Global window keydown listener for Escape
      if (typeof window !== 'undefined') {
        window.addEventListener('keydown', function(e) {
          if (e.key === 'Escape' || e.keyCode === 27) {
            if (self.isOpen()) {
              self.close();
            }
          }
        });
      }
    },

    /**
     * Open the Bescherelle lateral drawer
     * @param {string} [verbName] - Verb infinitive to load and display
     */
    open: function(verbName) {
      this._isOpen = true;
      var drawer = document.getElementById('conjugaison-drawer');
      var backdrop = document.getElementById('conj-backdrop');

      if (drawer) {
        drawer.classList.add('open');
      }
      if (backdrop) {
        backdrop.classList.add('open');
      }

      if (verbName) {
        this.loadVerb(verbName);
      } else if (!this._currentVerb) {
        this.loadVerb('écrire');
      }

      // Focus search input on open
      var searchInput = document.getElementById('conj-search-input');
      if (searchInput) {
        setTimeout(function() {
          try { searchInput.focus(); } catch(e) {}
        }, 100);
      }
    },

    /**
     * Close the drawer and hide backdrop
     */
    close: function() {
      this._isOpen = false;
      var drawer = document.getElementById('conjugaison-drawer');
      var backdrop = document.getElementById('conj-backdrop');

      if (drawer) {
        drawer.classList.remove('open');
      }
      if (backdrop) {
        backdrop.classList.remove('open');
      }

      this._closeSearchResults();
    },

    /**
     * Toggle drawer visibility
     */
    toggle: function(verbName) {
      if (this._isOpen) {
        this.close();
      } else {
        this.open(verbName);
      }
    },

    /**
     * Check if drawer is currently open
     * @returns {boolean}
     */
    isOpen: function() {
      return this._isOpen;
    },

    /**
     * Helper to strip reflexive/pronominal prefixes (se lever -> lever, s'appeler -> appeler, s'en aller -> aller)
     */
    _stripPronominalPrefix: function(str) {
      if (!str || typeof str !== 'string') return '';
      return str
        .trim()
        .replace(/^(?:se\s+|s['’]\s*en\s+|s['’]|se-|s-en-|s-)/i, '')
        .trim();
    },

    /**
     * Search across 536 verbs with accent folding (NFD normalization)
     * @param {string} query - User search term
     * @returns {Array<Object>} Matching verbs with group and level metadata
     */
    search: function(query) {
      if (!query || typeof query !== 'string' || query.trim().length === 0) {
        return [];
      }

      var dataset = this._loadData();
      if (!dataset || !Array.isArray(dataset.index)) {
        return [];
      }

      var trimmed = query.trim().toLowerCase();
      var normalizedQuery = trimmed.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      var baseQuery = this._stripPronominalPrefix(normalizedQuery);

      var prefixMatches = [];
      var substringMatches = [];

      for (var i = 0; i < dataset.index.length; i++) {
        var item = dataset.index[i];
        var verb = item.verb || item.id || '';
        var normalizedVerb = verb.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        var normalizedId = (item.id || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        var isPrefix = normalizedVerb.indexOf(normalizedQuery) === 0 || normalizedId.indexOf(normalizedQuery) === 0 ||
          (baseQuery.length >= 2 && (normalizedVerb.indexOf(baseQuery) === 0 || normalizedId.indexOf(baseQuery) === 0));
        var isSubstring = !isPrefix && (normalizedVerb.includes(normalizedQuery) || normalizedId.includes(normalizedQuery) ||
          (baseQuery.length >= 2 && (normalizedVerb.includes(baseQuery) || normalizedId.includes(baseQuery))));

        if (isPrefix) {
          prefixMatches.push(item);
        } else if (isSubstring) {
          substringMatches.push(item);
        }
      }

      var results = prefixMatches.concat(substringMatches);
      return results.slice(0, 20);
    },

    /**
     * Handle input event on autocomplete search bar
     */
    _onSearchInput: function(value) {
      var resultsContainer = document.getElementById('conj-search-results');
      if (!resultsContainer) return;

      if (!value || !value.trim() || value.trim().length === 0) {
        this._searchResults = [];
        this._highlightedIndex = -1;
        resultsContainer.innerHTML = '';
        resultsContainer.classList.remove('visible');
        return;
      }

      var results = this.search(value);
      this._searchResults = results;
      this._highlightedIndex = -1;

      if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="conj-search-empty">Aucun verbe trouvé</div>';
        resultsContainer.classList.add('visible');
        return;
      }

      var html = '';
      for (var i = 0; i < results.length; i++) {
        var item = results[i];
        var grpText = item.group ? item.group + 'e gr.' : '';
        var auxText = item.auxiliary ? 'aux. ' + item.auxiliary.replace('_ou_', '/') : '';
        html += '<div class="conj-search-item" data-verb="' + (item.verb || item.id) + '" data-index="' + i + '">' +
          '<span class="conj-search-verb">' + (item.verb || item.id) + '</span>' +
          '<span class="conj-search-badges">' +
            (grpText ? '<span class="conj-badge conj-badge-group">' + grpText + '</span>' : '') +
            (item.level ? '<span class="conj-badge conj-badge-level">' + item.level + '</span>' : '') +
            (auxText ? '<span class="conj-badge conj-badge-aux">' + auxText + '</span>' : '') +
          '</span>' +
        '</div>';
      }

      resultsContainer.innerHTML = html;
      resultsContainer.classList.add('visible');

      // Bind item clicks
      var self = this;
      var itemEls = resultsContainer.querySelectorAll('.conj-search-item');
      for (var j = 0; j < itemEls.length; j++) {
        itemEls[j].addEventListener('click', function(e) {
          var targetVerb = this.getAttribute('data-verb');
          if (targetVerb) {
            self.loadVerb(targetVerb);
            self._closeSearchResults();
          }
        });
      }
    },

    /**
     * Handle keyboard events in search bar (ArrowDown, ArrowUp, Enter, Escape)
     */
    _onSearchKeydown: function(e) {
      var resultsContainer = document.getElementById('conj-search-results');
      var input = document.getElementById('conj-search-input');

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (this._searchResults.length > 0) {
          this._highlightedIndex = Math.min(this._highlightedIndex + 1, this._searchResults.length - 1);
          this._updateHighlight();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (this._searchResults.length > 0) {
          this._highlightedIndex = Math.max(this._highlightedIndex - 1, 0);
          this._updateHighlight();
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (this._highlightedIndex >= 0 && this._searchResults[this._highlightedIndex]) {
          var selectedVerb = this._searchResults[this._highlightedIndex].verb || this._searchResults[this._highlightedIndex].id;
          this.loadVerb(selectedVerb);
          this._closeSearchResults();
        } else if (this._searchResults.length > 0) {
          var firstVerb = this._searchResults[0].verb || this._searchResults[0].id;
          this.loadVerb(firstVerb);
          this._closeSearchResults();
        } else if (input && input.value.trim()) {
          this.loadVerb(input.value.trim());
          this._closeSearchResults();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        if (resultsContainer && resultsContainer.classList.contains('visible')) {
          this._closeSearchResults();
          if (input) input.value = '';
        } else {
          this.close();
        }
      }
    },

    /**
     * Update highlighted visual state in autocomplete dropdown
     */
    _updateHighlight: function() {
      var resultsContainer = document.getElementById('conj-search-results');
      if (!resultsContainer) return;

      var items = resultsContainer.querySelectorAll('.conj-search-item');
      for (var i = 0; i < items.length; i++) {
        if (i === this._highlightedIndex) {
          items[i].classList.add('highlighted');
          try { items[i].scrollIntoView({ block: 'nearest' }); } catch(e) {}
        } else {
          items[i].classList.remove('highlighted');
        }
      }
    },

    /**
     * Close autocomplete results dropdown
     */
    _closeSearchResults: function() {
      var resultsContainer = document.getElementById('conj-search-results');
      if (resultsContainer) {
        resultsContainer.innerHTML = '';
        resultsContainer.classList.remove('visible');
      }
      this._highlightedIndex = -1;
    },

    /**
     * Backtrack to previously viewed verb
     */
    navigateBack: function() {
      if (this._historyStack.length > 1) {
        this._historyStack.pop(); // Pop current
        var prevVerb = this._historyStack.pop(); // Pop target
        this.loadVerb(prevVerb);
      }
    },

    /**
     * Load verb data and trigger complete Bescherelle render
     * @param {string} verbName
     */
    loadVerb: function(verbName) {
      if (!verbName || typeof verbName !== 'string') return;
      var cleanName = verbName.trim();
      if (!cleanName) return;

      var dataset = this._loadData();
      var verbEntry = this._resolveVerbEntry(cleanName, dataset);

      if (!verbEntry) {
        return;
      }

      this._currentVerb = verbEntry.verb || verbEntry.infinitive || cleanName;

      // Maintain navigation history breadcrumb stack
      if (this._historyStack.length === 0 || this._historyStack[this._historyStack.length - 1] !== this._currentVerb) {
        this._historyStack.push(this._currentVerb);
      }

      this._renderHeader(verbEntry);
      this._renderBreadcrumb();
      this._renderContent(verbEntry);
    },

    /**
     * Resolve verb entry from direct map or derive dynamically from model
     */
    _resolveVerbEntry: function(verbName, dataset) {
      if (!dataset || !verbName) return null;

      var MODEL_FALLBACKS = {
        'appeler': 'aimer', 'jeter': 'aimer', 'acheter': 'aimer', 'mener': 'aimer',
        'céder': 'aimer', 'ceder': 'aimer', 'payer': 'aimer', 'envoyer': 'aimer',
        'nettoyer': 'aimer', 'appuyer': 'aimer', 'partir': 'aimer', 'dormir': 'aimer',
        'ouvrir': 'aimer', 'courir': 'aimer', 'conduire': 'rendre', 'vivre': 'rendre',
        'lire': 'rendre', 'boire': 'rendre', 'croire': 'rendre', 'plaire': 'rendre',
        'connaitre': 'rendre', 'connaître': 'rendre', 'paraitre': 'connaître',
        'paraître': 'connaître', 'craindre': 'rendre', 'peindre': 'rendre',
        'joindre': 'rendre', 'rendre': 'aimer', 'rompre': 'rendre',
        'dissoudre': 'absoudre', 'eclore': 'clore', 'éclore': 'clore',
        'dechoir': 'choir', 'déchoir': 'choir', 'echoir': 'choir', 'échoir': 'choir',
        'paitre': 'aimer', 'paître': 'aimer'
      };

      var cleanName = verbName.trim();
      var norm = cleanName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      var baseName = this._stripPronominalPrefix(cleanName);
      var baseNorm = baseName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      var hyphenSlug = cleanName.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '-');
      var baseHyphenSlug = baseName.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '-');

      function isValidEntry(entry) {
        if (!entry || !entry.modes || !entry.modes.indicatif) return false;
        var ind = entry.modes.indicatif;
        if (Array.isArray(ind.present) && ind.present.length > 0) return true;
        var tKeys = Object.keys(ind);
        for (var t = 0; t < tKeys.length; t++) {
          if (Array.isArray(ind[tKeys[t]]) && ind[tKeys[t]].length > 0) return true;
        }
        return false;
      }

      // 1. Direct match in verbs dictionary (verbatim, normalized, hyphenated, or stripped base)
      if (dataset.verbs) {
        if (dataset.verbs[cleanName] && isValidEntry(dataset.verbs[cleanName])) return dataset.verbs[cleanName];
        if (dataset.verbs[norm] && isValidEntry(dataset.verbs[norm])) return dataset.verbs[norm];
        if (dataset.verbs[hyphenSlug] && isValidEntry(dataset.verbs[hyphenSlug])) return dataset.verbs[hyphenSlug];
        if (baseNorm && dataset.verbs[baseName] && isValidEntry(dataset.verbs[baseName])) return dataset.verbs[baseName];
        if (baseNorm && dataset.verbs[baseNorm] && isValidEntry(dataset.verbs[baseNorm])) return dataset.verbs[baseNorm];
        if (baseHyphenSlug && dataset.verbs[baseHyphenSlug] && isValidEntry(dataset.verbs[baseHyphenSlug])) return dataset.verbs[baseHyphenSlug];

        var vKeys = Object.keys(dataset.verbs);
        for (var k = 0; k < vKeys.length; k++) {
          var vKey = vKeys[k];
          var vItem = dataset.verbs[vKey];
          if (!isValidEntry(vItem)) continue;
          var vItemNorm = (vItem.verb || vItem.infinitive || vKey).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          if (vItem.verb === cleanName || vItem.infinitive === cleanName || vItemNorm === norm || vKey.toLowerCase() === norm || vKey === hyphenSlug) {
            return vItem;
          }
          if (baseNorm && (vItem.verb === baseName || vItem.infinitive === baseName || vItemNorm === baseNorm || vKey.toLowerCase() === baseNorm || vKey === baseHyphenSlug)) {
            return vItem;
          }
        }
      }

      // 2. Lookup in index catalog (exact match or stripped base match)
      var indexItem = null;
      if (Array.isArray(dataset.index)) {
        for (var i = 0; i < dataset.index.length; i++) {
          var item = dataset.index[i];
          var itemNorm = (item.verb || item.id || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          if (item.verb === cleanName || item.id === cleanName || itemNorm === norm || item.slug === hyphenSlug) {
            indexItem = item;
            break;
          }
        }
        if (!indexItem && baseNorm) {
          for (var j = 0; j < dataset.index.length; j++) {
            var item2 = dataset.index[j];
            var itemNorm2 = (item2.verb || item2.id || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            if (item2.verb === baseName || item2.id === baseName || itemNorm2 === baseNorm || item2.slug === baseHyphenSlug) {
              indexItem = item2;
              break;
            }
          }
        }
      }

      // If found in index and detailed verb exists for this item id, return it
      if (indexItem && dataset.verbs) {
        if (dataset.verbs[indexItem.id] && isValidEntry(dataset.verbs[indexItem.id])) return dataset.verbs[indexItem.id];
        if (dataset.verbs[indexItem.slug] && isValidEntry(dataset.verbs[indexItem.slug])) return dataset.verbs[indexItem.slug];
      }

      // 3. Fallback: derive dynamically from model prototype
      if (indexItem && dataset.verbs) {
        var modelKey = indexItem.model;
        var candidates = [
          modelKey,
          modelKey ? modelKey.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') : null,
          MODEL_FALLBACKS[modelKey],
          MODEL_FALLBACKS[indexItem.id],
          indexItem.group === 1 ? 'aimer' : (indexItem.group === 2 ? 'finir' : 'rendre')
        ];
        for (var c = 0; c < candidates.length; c++) {
          var mK = candidates[c];
          if (!mK) continue;
          if (mK === indexItem.id || mK === indexItem.slug) continue;
          var mEntry = dataset.verbs[mK];
          if (mEntry && isValidEntry(mEntry)) {
            return this._deriveFromModel(indexItem, mEntry);
          }
        }
      }

      // 4. Fallback for uncatalogued/freeform verbs
      var isReflexive = cleanName.startsWith("se ") || cleanName.startsWith("s'") || cleanName.startsWith("s-") || cleanName.startsWith("se-");
      var pureInf = baseName;
      var synthGroup = pureInf.endsWith('er') ? 1 : (pureInf.endsWith('ir') ? 2 : 3);
      var defaultModel = synthGroup === 1 ? 'aimer' : (synthGroup === 2 ? 'finir' : 'rendre');
      if (dataset.verbs && dataset.verbs[defaultModel] && isValidEntry(dataset.verbs[defaultModel])) {
        var synthItem = {
          id: hyphenSlug,
          slug: hyphenSlug,
          verb: cleanName,
          infinitive: cleanName,
          group: synthGroup,
          level: 'B1',
          auxiliary: isReflexive ? 'être' : 'avoir',
          is_pronominal: isReflexive,
          is_reflexive: isReflexive,
          is_defective: false,
          is_impersonal: false,
          model: defaultModel
        };
        return this._deriveFromModel(synthItem, dataset.verbs[defaultModel]);
      }

      return null;
    },

    /**
     * Morphological derivation of non-detailed verbs using model prototype
     */
    _deriveFromModel: function(indexItem, modelEntry) {
      var targetVerb = indexItem.verb || indexItem.id;
      var targetInfinitive = indexItem.infinitive || targetVerb;
      var modelInf = modelEntry.infinitive || modelEntry.verb || 'aimer';

      // Base stems
      var modelBase = modelInf.replace(/(er|ir|re)$/, '');
      var targetBase = targetInfinitive.replace(/(er|ir|re)$/, '');

      var isReflexive = Boolean(indexItem.is_reflexive || indexItem.is_pronominal || targetInfinitive.startsWith("s'") || targetInfinitive.startsWith("se "));
      var isImpersonal = Boolean(indexItem.is_impersonal);
      var isDefective = Boolean(indexItem.is_defective || isImpersonal);
      var aux = indexItem.auxiliary === 'être' ? 'être' : 'avoir';

      // Derive past participle
      var pp = targetBase + (indexItem.group === 1 ? 'é' : indexItem.group === 2 ? 'i' : 'u');
      if (indexItem.group === 1 && targetInfinitive.endsWith('er')) {
        pp = targetBase + 'é';
      }

      var presPartStem = targetBase;
      if (indexItem.group === 1 && targetInfinitive.endsWith('cer')) {
        presPartStem = targetBase.slice(0, -1) + 'ç';
      } else if (indexItem.group === 1 && targetInfinitive.endsWith('ger')) {
        presPartStem = targetBase + 'e';
      }

      var derived = {
        id: indexItem.id || targetVerb,
        verb: targetVerb,
        infinitive: targetInfinitive,
        group: indexItem.group || 1,
        level: indexItem.level || 'A1',
        auxiliary: indexItem.auxiliary || 'avoir',
        is_pronominal: isReflexive,
        is_reflexive: isReflexive,
        is_defective: isDefective,
        is_impersonal: isImpersonal,
        model: indexItem.model || modelInf,
        participle_present: presPartStem + (indexItem.group === 2 ? 'issant' : 'ant'),
        participle_past: pp,
        modes: {}
      };

      // Clone and adapt modes from model
      var modesToCopy = ['indicatif', 'subjonctif', 'conditionnel', 'impératif', 'imperatif', 'participe', 'infinitif', 'gérondif', 'gerondif'];
      for (var m = 0; m < modesToCopy.length; m++) {
        var mKey = modesToCopy[m];
        if (!modelEntry.modes || !modelEntry.modes[mKey]) continue;

        var srcMode = modelEntry.modes[mKey];
        derived.modes[mKey] = {};

        var tKeys = Object.keys(srcMode);
        for (var t = 0; t < tKeys.length; t++) {
          var tKey = tKeys[t];
          var srcTense = srcMode[tKey];

          if (Array.isArray(srcTense)) {
            derived.modes[mKey][tKey] = [];
            for (var p = 0; p < srcTense.length; p++) {
              var pSrc = srcTense[p];
              var pDerived = Object.assign({}, pSrc);

              // Replace model radical with target radical in simple tenses, preserving cédille
              var hasCedilleInRadical = pDerived.radical && pDerived.radical.indexOf('ç') !== -1;
              var effectiveModelBase = (hasCedilleInRadical && modelBase.endsWith('c'))
                ? (modelBase.slice(0, -1) + 'ç')
                : modelBase;
              var effectiveTargetBase = (hasCedilleInRadical && targetBase.endsWith('c'))
                ? (targetBase.slice(0, -1) + 'ç')
                : targetBase;

              if (pDerived.radical !== undefined && pDerived.radical.indexOf(effectiveModelBase) !== -1) {
                pDerived.radical = pDerived.radical.replace(effectiveModelBase, effectiveTargetBase);
              } else if (pDerived.radical !== undefined && pDerived.radical.indexOf(modelBase) !== -1) {
                pDerived.radical = pDerived.radical.replace(modelBase, targetBase);
              } else if (pDerived.radical !== undefined && indexItem.group === 1) {
                pDerived.radical = (hasCedilleInRadical && targetBase.endsWith('c'))
                  ? (targetBase.slice(0, -1) + 'ç')
                  : targetBase;
              }

              // Apply 1st group stem mutations for present, imparfait, futur, conditionnel
              if (indexItem.group === 1 && mKey === 'indicatif') {
                var pIdx = ['1s', '2s', '3s', '1p', '2p', '3p'].indexOf(pDerived.person);
                var baseInf = targetInfinitive.replace(/^se\s+|^s'/, '');
                var baseStem = baseInf.slice(0, -2); // drop -er

                if (tKey === 'present') {
                  if (baseInf.endsWith('cer')) {
                    pDerived.radical = (pDerived.person === '1p') ? (baseStem.slice(0, -1) + 'ç') : baseStem;
                  } else if (baseInf.endsWith('ger')) {
                    pDerived.radical = (pDerived.person === '1p') ? (baseStem + 'e') : baseStem;
                  } else if (baseInf.endsWith('eler')) {
                    if (['appeler', 'rappeler', 'interpeller', 'renouveler', 'épeler', 'epeler'].indexOf(baseInf) !== -1) {
                      pDerived.radical = ([0, 1, 2, 5].indexOf(pIdx) !== -1) ? (baseStem + 'l') : baseStem;
                    } else {
                      pDerived.radical = ([0, 1, 2, 5].indexOf(pIdx) !== -1) ? (baseStem.slice(0, -2) + 'è' + baseStem.slice(-1)) : baseStem;
                    }
                  } else if (baseInf.endsWith('eter')) {
                    if (['jeter', 'rejeter', 'projeter', 'feuilleter'].indexOf(baseInf) !== -1) {
                      pDerived.radical = ([0, 1, 2, 5].indexOf(pIdx) !== -1) ? (baseStem + 't') : baseStem;
                    } else {
                      pDerived.radical = ([0, 1, 2, 5].indexOf(pIdx) !== -1) ? (baseStem.slice(0, -2) + 'è' + baseStem.slice(-1)) : baseStem;
                    }
                  } else if (/e[^eéè][a-z]?er$/.test(baseInf)) {
                    if ([0, 1, 2, 5].indexOf(pIdx) !== -1) {
                      pDerived.radical = baseStem.replace(/e([^eéè][a-z]?)$/, 'è$1');
                    }
                  } else if (/é[^eéè][a-z]?er$/.test(baseInf)) {
                    if ([0, 1, 2, 5].indexOf(pIdx) !== -1) {
                      pDerived.radical = baseStem.replace(/é([^eéè][a-z]?)$/, 'è$1');
                    }
                  }
                } else if (tKey === 'imparfait') {
                  if (baseInf.endsWith('cer')) {
                    pDerived.radical = (pDerived.person === '1p' || pDerived.person === '2p') ? (baseStem.slice(0, -1) + 'c') : (baseStem.slice(0, -1) + 'ç');
                  } else if (baseInf.endsWith('ger')) {
                    pDerived.radical = (pDerived.person === '1p' || pDerived.person === '2p') ? baseStem : (baseStem + 'e');
                  }
                } else if (tKey === 'futur_simple') {
                  if (baseInf.endsWith('eler') && ['appeler', 'rappeler', 'interpeller', 'renouveler', 'épeler', 'epeler'].indexOf(baseInf) !== -1) {
                    pDerived.radical = baseInf.slice(0, -4) + 'eller';
                  } else if (baseInf.endsWith('eter') && ['jeter', 'rejeter', 'projeter', 'feuilleter'].indexOf(baseInf) !== -1) {
                    pDerived.radical = baseInf.slice(0, -4) + 'etter';
                  } else if (/e[^eéè][a-z]?er$/.test(baseInf)) {
                    pDerived.radical = baseInf.replace(/e([^eéè][a-z]?)er$/, 'è$1er');
                  }
                }
              }
              if (indexItem.group === 1 && mKey === 'conditionnel' && tKey === 'present') {
                var baseInf = targetInfinitive.replace(/^se\s+|^s'/, '');
                if (baseInf.endsWith('eler') && ['appeler', 'rappeler', 'interpeller', 'renouveler', 'épeler', 'epeler'].indexOf(baseInf) !== -1) {
                  pDerived.radical = baseInf.slice(0, -4) + 'eller';
                } else if (baseInf.endsWith('eter') && ['jeter', 'rejeter', 'projeter', 'feuilleter'].indexOf(baseInf) !== -1) {
                  pDerived.radical = baseInf.slice(0, -4) + 'etter';
                } else if (/e[^eéè][a-z]?er$/.test(baseInf)) {
                  pDerived.radical = baseInf.replace(/e([^eéè][a-z]?)er$/, 'è$1er');
                }
              }

              // Handle compound tenses (where form has auxiliary + pp)
              var isCompound = tKey === 'passe_compose' || tKey === 'plus_que_parfait' || tKey === 'passe_anterieur' ||
                tKey === 'futur_anterieur' || tKey === 'passe' || tKey === 'passe_1' || tKey === 'passe_2';

              if (isCompound) {
                var auxForm = pDerived.radical || '';
                pDerived.form = auxForm + ' ' + pp;
                pDerived.full = (pDerived.pronoun || '') + auxForm + ' ' + pp;
              } else {
                pDerived.form = (pDerived.radical || '') + (pDerived.ending || '');
                pDerived.full = (pDerived.pronoun || '') + pDerived.form;
              }

              // Pronoun and elision adjustment for 1st person
              if (pDerived.person === '1s') {
                if (isVowelOrSilentH(pDerived.radical || pDerived.form)) {
                  pDerived.pronoun = "j'";
                } else {
                  pDerived.pronoun = "je ";
                }
                pDerived.full = pDerived.pronoun + pDerived.form;
              }

              // Impersonal verb restriction (only 3rd person)
              if (isImpersonal && pDerived.person !== '3s') {
                pDerived.form = '-';
                pDerived.full = '-';
                pDerived.radical = '-';
                pDerived.ending = '';
              }

              derived.modes[mKey][tKey].push(pDerived);
            }
          } else if (typeof srcTense === 'object' && srcTense !== null) {
            // Participle, etc.
            derived.modes[mKey][tKey] = srcTense;
          } else {
            // Strings (infinitif, gérondif)
            derived.modes[mKey][tKey] = srcTense;
          }
        }
      }

      // Ensure participle and infinitive values reflect target verb
      if (derived.modes.infinitif) {
        derived.modes.infinitif.present = targetInfinitive;
        derived.modes.infinitif.passe = aux + ' ' + pp;
      }
      if (derived.modes.gérondif) {
        derived.modes.gérondif.present = 'en ' + derived.participle_present;
        derived.modes.gérondif.passe = 'en ayant ' + pp;
      }
      if (derived.modes.gerondif) {
        derived.modes.gerondif.present = 'en ' + derived.participle_present;
        derived.modes.gerondif.passe = 'en ayant ' + pp;
      }

      return derived;
    },

    /**
     * Render header title and metadata chips
     */
    _renderHeader: function(verbEntry) {
      var titleEl = document.getElementById('conj-verb-title');
      var metaEl = document.getElementById('conj-verb-meta');

      if (titleEl) {
        titleEl.textContent = verbEntry.verb || verbEntry.infinitive || 'Verbe';
      }

      if (metaEl) {
        var grpText = verbEntry.group === 1 ? '1er groupe' : (verbEntry.group === 2 ? '2e groupe' : '3e groupe');
        var auxText = verbEntry.auxiliary ? 'Auxiliaire ' + verbEntry.auxiliary.replace('_ou_', ' ou ') : '';
        var lvlText = verbEntry.level ? 'Niveau ' + verbEntry.level : '';
        var modelText = verbEntry.model ? 'Modèle : ' + verbEntry.model : '';

        var html = '';
        if (grpText) html += '<span class="conj-meta-chip">' + grpText + '</span>';
        if (auxText) html += '<span class="conj-meta-chip">' + auxText + '</span>';
        if (lvlText) html += '<span class="conj-meta-chip">' + lvlText + '</span>';
        if (modelText) html += '<span class="conj-meta-chip">' + modelText + '</span>';

        metaEl.innerHTML = html;
      }
    },

    /**
     * Render navigation breadcrumb trail
     */
    _renderBreadcrumb: function() {
      var breadcrumbEl = document.getElementById('conj-history-breadcrumb');
      if (!breadcrumbEl) return;

      if (this._historyStack.length > 1) {
        var prevVerb = this._historyStack[this._historyStack.length - 2];
        var self = this;
        breadcrumbEl.innerHTML = '<button type="button" class="conj-history-back-btn" aria-label="Revenir à ' + prevVerb + '">' +
          '<span class="material-icons-round">arrow_back</span> Revenir à ' + prevVerb +
        '</button>';

        var backBtn = breadcrumbEl.querySelector('.conj-history-back-btn');
        if (backBtn) {
          backBtn.addEventListener('click', function() {
            self.navigateBack();
          });
        }
      } else {
        breadcrumbEl.innerHTML = '';
      }
    },

    /**
     * Render complete Bescherelle 2-column tables across all 7 modes
     */
    _renderContent: function(verbEntry) {
      var contentEl = document.getElementById('conj-drawer-content');
      if (!contentEl) return;

      var modes = verbEntry.modes || {};
      var html = '';

      // 1. Mode Indicatif (8 tenses: 4 pairs simple <-> compound)
      html += this._renderModeIndicatif(modes.indicatif || {});

      // 2. Mode Subjonctif (4 tenses: 2 pairs)
      html += this._renderModeSubjonctif(modes.subjonctif || {});

      // 3. Mode Conditionnel (3 tenses: Présent <-> Passé 1re forme, Passé 2e forme)
      html += this._renderModeConditionnel(modes.conditionnel || {});

      // 4. Mode Impératif (2 tenses: Présent <-> Passé)
      var impMode = modes['impératif'] || modes.imperatif || {};
      html += this._renderModeImperatif(impMode);

      // 5. Mode Participe (Présent, Passé, Passé composé)
      html += this._renderModeParticipe(modes.participe || {});

      // 6. Mode Infinitif (Présent, Passé)
      html += this._renderModeInfinitif(modes.infinitif || {});

      // 7. Mode Gérondif (Présent, Passé)
      var gerMode = modes['gérondif'] || modes.gerondif || {};
      html += this._renderModeGerondif(gerMode);

      contentEl.innerHTML = html;
    },

    /**
     * Mode Indicatif Renderer (Pairs: Présent <-> Passé composé, Imparfait <-> Plus-que-parfait,
     * Passé simple <-> Passé antérieur, Futur simple <-> Futur antérieur)
     */
    _renderModeIndicatif: function(modeData) {
      var html = '<section class="conj-mode-section">' +
        '<h3 class="conj-mode-title"><span class="material-icons-round">view_column</span> Indicatif</h3>' +
        '<div class="conj-tenses-grid">' +
          this._renderTenseBlock('Présent', modeData.present) +
          this._renderTenseBlock('Passé composé', modeData.passe_compose) +
          this._renderTenseBlock('Imparfait', modeData.imparfait) +
          this._renderTenseBlock('Plus-que-parfait', modeData.plus_que_parfait) +
          this._renderTenseBlock('Passé simple', modeData.passe_simple) +
          this._renderTenseBlock('Passé antérieur', modeData.passe_anterieur) +
          this._renderTenseBlock('Futur simple', modeData.futur_simple) +
          this._renderTenseBlock('Futur antérieur', modeData.futur_anterieur) +
        '</div>' +
      '</section>';
      return html;
    },

    /**
     * Mode Subjonctif Renderer (Pairs: Présent <-> Passé, Imparfait <-> Plus-que-parfait)
     */
    _renderModeSubjonctif: function(modeData) {
      var html = '<section class="conj-mode-section">' +
        '<h3 class="conj-mode-title"><span class="material-icons-round">psychology</span> Subjonctif</h3>' +
        '<div class="conj-tenses-grid">' +
          this._renderTenseBlock('Présent', modeData.present, true) +
          this._renderTenseBlock('Passé', modeData.passe, true) +
          this._renderTenseBlock('Imparfait', modeData.imparfait, true) +
          this._renderTenseBlock('Plus-que-parfait', modeData.plus_que_parfait, true) +
        '</div>' +
      '</section>';
      return html;
    },

    /**
     * Mode Conditionnel Renderer (Pairs: Présent <-> Passé 1re forme, Passé 2e forme)
     */
    _renderModeConditionnel: function(modeData) {
      var passe1 = modeData.passe_1 || modeData.passe;
      var passe2 = modeData.passe_2;

      var html = '<section class="conj-mode-section">' +
        '<h3 class="conj-mode-title"><span class="material-icons-round">alt_route</span> Conditionnel</h3>' +
        '<div class="conj-tenses-grid">' +
          this._renderTenseBlock('Présent', modeData.present) +
          this._renderTenseBlock('Passé (1re forme)', passe1) +
          (passe2 ? this._renderTenseBlock('Passé (2e forme)', passe2) : '') +
        '</div>' +
      '</section>';
      return html;
    },

    /**
     * Mode Impératif Renderer (Présent <-> Passé)
     */
    _renderModeImperatif: function(modeData) {
      var html = '<section class="conj-mode-section">' +
        '<h3 class="conj-mode-title"><span class="material-icons-round">campaign</span> Impératif</h3>' +
        '<div class="conj-tenses-grid">' +
          this._renderTenseBlock('Présent', modeData.present) +
          this._renderTenseBlock('Passé', modeData.passe) +
        '</div>' +
      '</section>';
      return html;
    },

    /**
     * Mode Participe Renderer
     */
    _renderModeParticipe: function(modeData) {
      var presVal = modeData.present;
      var presStr = '';
      if (typeof presVal === 'string') {
        presStr = presVal;
      } else if (presVal && typeof presVal === 'object') {
        presStr = '<span class="conj-stem">' + (presVal.radical || '') + '</span><span class="conj-end">' + (presVal.ending || '') + '</span>';
      }

      var passeObj = modeData.passe || {};
      var passeStr = '';
      if (typeof passeObj === 'string') {
        passeStr = passeObj;
      } else if (typeof passeObj === 'object') {
        var ms = passeObj.masculin_singulier || '';
        var fs = passeObj.feminin_singulier || '';
        var mp = passeObj.masculin_pluriel || '';
        var fp = passeObj.feminin_pluriel || '';
        var comp = passeObj.compose || '';

        passeStr = '<div class="conj-single-row"><span class="conj-single-label">Masc. sing. :</span> <span class="conj-stem">' + (ms || '-') + '</span></div>' +
          '<div class="conj-single-row"><span class="conj-single-label">Fém. sing. :</span> <span class="conj-stem">' + (fs || '-') + '</span></div>' +
          '<div class="conj-single-row"><span class="conj-single-label">Masc. plur. :</span> <span class="conj-stem">' + (mp || '-') + '</span></div>' +
          '<div class="conj-single-row"><span class="conj-single-label">Fém. plur. :</span> <span class="conj-stem">' + (fp || '-') + '</span></div>' +
          (comp ? '<div class="conj-single-row"><span class="conj-single-label">Composé :</span> <span class="conj-stem">' + comp + '</span></div>' : '');
      }

      var html = '<section class="conj-mode-section">' +
        '<h3 class="conj-mode-title"><span class="material-icons-round">format_list_bulleted</span> Participe</h3>' +
        '<div class="conj-tenses-grid">' +
          '<div class="conj-tense-block">' +
            '<div class="conj-tense-title">Présent</div>' +
            '<div class="conj-tense-table"><div class="conj-single-row">' + (presStr || '-') + '</div></div>' +
          '</div>' +
          '<div class="conj-tense-block">' +
            '<div class="conj-tense-title">Passé</div>' +
            '<div class="conj-tense-table">' + (passeStr || '-') + '</div>' +
          '</div>' +
        '</div>' +
      '</section>';
      return html;
    },

    /**
     * Mode Infinitif Renderer
     */
    _renderModeInfinitif: function(modeData) {
      var pres = modeData.present || '-';
      var passe = modeData.passe || '-';

      var html = '<section class="conj-mode-section">' +
        '<h3 class="conj-mode-title"><span class="material-icons-round">school</span> Infinitif</h3>' +
        '<div class="conj-tenses-grid">' +
          '<div class="conj-tense-block">' +
            '<div class="conj-tense-title">Présent</div>' +
            '<div class="conj-tense-table"><div class="conj-single-row"><span class="conj-stem">' + pres + '</span></div></div>' +
          '</div>' +
          '<div class="conj-tense-block">' +
            '<div class="conj-tense-title">Passé</div>' +
            '<div class="conj-tense-table"><div class="conj-single-row"><span class="conj-stem">' + passe + '</span></div></div>' +
          '</div>' +
        '</div>' +
      '</section>';
      return html;
    },

    /**
     * Mode Gérondif Renderer
     */
    _renderModeGerondif: function(modeData) {
      var pres = modeData.present || '-';
      var passe = modeData.passe || '-';

      var html = '<section class="conj-mode-section">' +
        '<h3 class="conj-mode-title"><span class="material-icons-round">timeline</span> Gérondif</h3>' +
        '<div class="conj-tenses-grid">' +
          '<div class="conj-tense-block">' +
            '<div class="conj-tense-title">Présent</div>' +
            '<div class="conj-tense-table"><div class="conj-single-row"><span class="conj-stem">' + pres + '</span></div></div>' +
          '</div>' +
          '<div class="conj-tense-block">' +
            '<div class="conj-tense-title">Passé</div>' +
            '<div class="conj-tense-table"><div class="conj-single-row"><span class="conj-stem">' + passe + '</span></div></div>' +
          '</div>' +
        '</div>' +
      '</section>';
      return html;
    },

    /**
     * Render an individual tense card with 6 grammatical persons
     */
    _renderTenseBlock: function(tenseTitle, personRows, isSubjunctive) {
      var rowsHtml = '';

      if (!personRows || !Array.isArray(personRows) || personRows.length === 0) {
        rowsHtml = '<div class="conj-row"><span class="conj-form-blank">inusité ou non attesté</span></div>';
      } else {
        for (var i = 0; i < personRows.length; i++) {
          rowsHtml += this._formatPersonRow(personRows[i], isSubjunctive);
        }
      }

      return '<div class="conj-tense-block">' +
        '<div class="conj-tense-title">' + tenseTitle + '</div>' +
        '<div class="conj-tense-table">' + rowsHtml + '</div>' +
      '</div>';
    },

    /**
     * Format a single person row with strict morphological stem and ending separation
     */
    _formatPersonRow: function(personData, isSubjunctive) {
      if (!personData) {
        return '<div class="conj-row"><span class="conj-form-blank">-</span></div>';
      }

      // Impersonal or defective missing persons
      if (personData.form === '-' || personData.form === 'inusité' || personData.form === null) {
        return '<div class="conj-person-row"><span class="conj-pronoun">' + (personData.pronoun || '') + '</span><span class="conj-form-blank">-</span></div>';
      }

      var prefixHtml = '';
      if (personData.prefix) {
        prefixHtml = '<span class="conj-subj-prefix">' + personData.prefix + '</span>';
      } else if (isSubjunctive) {
        var pronounStr = (personData.pronoun || '').trim();
        if (isVowelOrSilentH(pronounStr)) {
          prefixHtml = '<span class="conj-subj-prefix">qu\'</span>';
        } else {
          prefixHtml = '<span class="conj-subj-prefix">que </span>';
        }
      }

      var pronounHtml = '';
      if (personData.pronoun !== undefined && personData.pronoun !== null) {
        pronounHtml = '<span class="conj-pronoun">' + personData.pronoun + '</span>';
      }

      var bodyHtml = '';

      // Compound tense detection (radical is auxiliary, ending is blank, form has space)
      if (personData.form && personData.form.indexOf(' ') !== -1) {
        var parts = personData.form.split(' ');
        var auxToken = parts[0];
        var participleToken = parts.slice(1).join(' ');

        bodyHtml = '<span class="conj-aux">' + auxToken + '</span> <span class="conj-stem">' + participleToken + '</span>';
      } else if (personData.radical !== undefined && personData.ending !== undefined) {
        // Simple tense: separate stem (.conj-stem) and ending (.conj-end)
        var radical = personData.radical;
        var ending = personData.ending || '';
        bodyHtml = '<span class="conj-stem">' + radical + '</span><span class="conj-end">' + ending + '</span>';
      } else if (personData.form) {
        bodyHtml = '<span class="conj-stem">' + (personData.form || '-') + '</span>';
      } else {
        bodyHtml = '<span class="conj-form-blank">-</span>';
      }

      return '<div class="conj-person-row">' + prefixHtml + pronounHtml + bodyHtml + '</div>';
    }
  };

  // Expose to window / global
  if (typeof window !== 'undefined') {
    window.ConjugaisonManager = ConjugaisonManager;
  }
  if (typeof global !== 'undefined') {
    global.ConjugaisonManager = ConjugaisonManager;
  }

  // Automatic DOM initialization
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        ConjugaisonManager.init();
      });
    } else {
      ConjugaisonManager.init();
    }
  }

  // CommonJS Node.js export for automated tests
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ConjugaisonManager;
  }

})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
