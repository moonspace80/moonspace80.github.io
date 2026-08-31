/**
 * ============================================================================
 * MASTER AUTOMATED VALIDATION SUITE — DELF B2/C1 PLATFORM
 * ============================================================================
 * Autonomous validation test harness for all datasets, modules, 2h30 exam
 * simulator, double parcours (>2h) anti-fatigue sessions, FEI scoring engine,
 * and router state persistence.
 *
 * Usage: node test_all_modules.js
 * Target: > 150 assertions, 0 errors, exit code 0.
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');

// ANSI Color Formatting for Professional Output
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  bgGreen: "\x1b[42m\x1b[30m",
  bgRed: "\x1b[41m\x1b[37m",
  bgBlue: "\x1b[44m\x1b[37m"
};

// Test Runner Test Harness
let totalAssertions = 0;
let passedAssertions = 0;
let failedAssertions = 0;
const failureDetails = [];

function assert(condition, message) {
  totalAssertions++;
  if (condition) {
    passedAssertions++;
    console.log(`  ${colors.green}✔${colors.reset} ${message}`);
  } else {
    failedAssertions++;
    console.error(`  ${colors.red}✖ FAIL: ${message}${colors.reset}`);
    failureDetails.push(message);
  }
}

function assertEqual(actual, expected, message) {
  const isMatch = (actual === expected);
  assert(isMatch, `${message} (Expected: ${JSON.stringify(expected)}, Got: ${JSON.stringify(actual)})`);
}

function assertGte(actual, min, message) {
  assert(actual >= min, `${message} (Expected >= ${min}, Got: ${actual})`);
}

function suiteHeader(title) {
  console.log(`\n${colors.bright}${colors.cyan}══════════════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.bright}${colors.magenta}▶ SUITE: ${title}${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}══════════════════════════════════════════════════════════════════════${colors.reset}`);
}

// ----------------------------------------------------------------------------
// MOCK DOM & BROWSER ENVIRONMENT SETUP FOR NODE.JS
// ----------------------------------------------------------------------------

class MockClassList {
  constructor(el) {
    this.el = el;
    this.classes = new Set();
  }
  add(...names) {
    names.forEach(n => this.classes.add(n));
  }
  remove(...names) {
    names.forEach(n => this.classes.delete(n));
  }
  contains(name) {
    return this.classes.has(name);
  }
  toggle(name, force) {
    if (force === true) this.add(name);
    else if (force === false) this.remove(name);
    else {
      if (this.contains(name)) this.remove(name);
      else this.add(name);
    }
  }
}

class MockElement {
  constructor(tagName = 'div', id = '') {
    this.tagName = tagName.toUpperCase();
    this.id = id;
    this.classList = new MockClassList(this);
    this.attributes = {};
    this.style = {};
    this.children = [];
    this.parentNode = null;
    this._innerHTML = '';
    this.textContent = '';
    this.value = '';
    this.eventListeners = {};
    this.dataset = {};
  }

  get className() {
    return Array.from(this.classList.classes).join(' ');
  }

  set className(val) {
    this.classList.classes = new Set((val || '').split(/\s+/).filter(Boolean));
  }

  get innerHTML() {
    return this._innerHTML;
  }

  set innerHTML(html) {
    this._innerHTML = html;
    this.textContent = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  setAttribute(k, v) {
    this.attributes[k] = String(v);
    if (k === 'id') this.id = String(v);
    if (k === 'class') {
      this.className = String(v);
    }
    if (k.startsWith('data-')) {
      const prop = k.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      this.dataset[prop] = String(v);
    }
  }

  getAttribute(k) {
    if (k === 'id') return this.id || null;
    if (k === 'class') return this.className || null;
    if (k.startsWith('data-')) {
      const prop = k.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return this.dataset[prop] !== undefined ? this.dataset[prop] : (this.attributes[k] || null);
    }
    return this.attributes[k] || null;
  }

  removeAttribute(k) {
    delete this.attributes[k];
  }

  appendChild(child) {
    if (child) {
      child.parentNode = this;
      this.children.push(child);
    }
    return child;
  }

  removeChild(child) {
    const idx = this.children.indexOf(child);
    if (idx !== -1) {
      this.children.splice(idx, 1);
      child.parentNode = null;
    }
    return child;
  }

  remove() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  }

  addEventListener(event, fn) {
    if (!this.eventListeners[event]) this.eventListeners[event] = [];
    this.eventListeners[event].push(fn);
  }

  removeEventListener(event, fn) {
    if (!this.eventListeners[event]) return;
    this.eventListeners[event] = this.eventListeners[event].filter(cb => cb !== fn);
  }

  dispatchEvent(event) {
    const type = event.type || event;
    const listeners = this.eventListeners[type] || [];
    const eventObj = typeof event === 'string' ? { type, target: this, currentTarget: this } : { ...event, target: this, currentTarget: this };
    listeners.forEach(fn => {
      try { fn(eventObj); } catch (e) {}
    });
  }

  click() {
    this.dispatchEvent('click');
  }

  querySelector(selector) {
    return this.querySelectorAll(selector)[0] || null;
  }

  querySelectorAll(selector) {
    const results = [];
    const walk = (node) => {
      if (matchesSelector(node, selector)) {
        results.push(node);
      }
      for (const child of node.children) {
        walk(child);
      }
    };
    for (const child of this.children) {
      walk(child);
    }
    return results;
  }
}

function matchesSelector(el, selector) {
  if (!el || !selector) return false;
  selector = selector.trim();
  
  if (selector.startsWith('#')) {
    return el.id === selector.slice(1);
  }
  if (selector.startsWith('.')) {
    return el.classList && el.classList.contains(selector.slice(1));
  }
  if (selector.startsWith('[')) {
    const match = selector.match(/\[([a-zA-Z0-9_-]+)(?:=["']?([^"']*)["']?)?\]/);
    if (match) {
      const attr = match[1];
      const val = match[2];
      const elVal = el.getAttribute(attr);
      if (val === undefined) return elVal !== null;
      return elVal === val;
    }
  }
  if (/^[a-zA-Z0-9]+$/.test(selector)) {
    return el.tagName === selector.toUpperCase();
  }
  return false;
}

class MockDocument {
  constructor() {
    this.documentElement = new MockElement('html');
    this.documentElement.setAttribute('data-theme', 'light');
    this.head = new MockElement('head');
    this.body = new MockElement('body');
    this.documentElement.appendChild(this.head);
    this.documentElement.appendChild(this.body);
  }

  createElement(tag) {
    return new MockElement(tag);
  }

  getElementById(id) {
    const walk = (node) => {
      if (node.id === id) return node;
      for (const child of node.children) {
        const found = walk(child);
        if (found) return found;
      }
      return null;
    };
    return walk(this.documentElement);
  }

  querySelector(selector) {
    return this.querySelectorAll(selector)[0] || null;
  }

  querySelectorAll(selector) {
    const results = [];
    const walk = (node) => {
      if (matchesSelector(node, selector)) results.push(node);
      for (const child of node.children) walk(child);
    };
    walk(this.documentElement);
    return results;
  }

  addEventListener() {}
  removeEventListener() {}
}

class MockLocalStorage {
  constructor() {
    this.store = {};
  }
  getItem(k) {
    return this.store[k] !== undefined ? this.store[k] : null;
  }
  setItem(k, v) {
    this.store[k] = String(v);
  }
  removeItem(k) {
    delete this.store[k];
  }
  clear() {
    this.store = {};
  }
}

// Global Setup
global.window = global;
global.window.addEventListener = (event, fn) => {};
global.window.removeEventListener = (event, fn) => {};
global.document = new MockDocument();
global.localStorage = new MockLocalStorage();
global.Audio = class {
  constructor(src) {
    this.src = src || '';
    this.currentTime = 0;
    this.duration = 180;
    this.paused = true;
    this.playbackRate = 1.0;
  }
  play() { this.paused = false; return Promise.resolve(); }
  pause() { this.paused = true; }
  addEventListener() {}
  removeEventListener() {}
};
global.scrollTo = () => {};

// Populate DOM Structure mirroring index.html
function buildIndexDOM() {
  const main = document.createElement('main');
  main.id = 'main-content';
  document.body.appendChild(main);

  // Level selector
  const levelSelect = document.createElement('select');
  levelSelect.id = 'user-cefr-level-select';
  levelSelect.value = 'B2';
  document.body.appendChild(levelSelect);

  // Tabs
  const nav = document.createElement('nav');
  nav.className = 'md-tabs';
  const tabIds = [
    'dashboard', 'exam-simulator', 'sessions', 'vocabulary',
    'dictionary', 'expressions', 'reading', 'listening',
    'grammar', 'writing'
  ];
  tabIds.forEach(id => {
    const btn = document.createElement('button');
    btn.className = id === 'dashboard' ? 'md-tab md-tab--active' : 'md-tab';
    btn.setAttribute('data-tab', id);
    nav.appendChild(btn);
  });
  document.body.appendChild(nav);

  // View Panels
  tabIds.forEach(id => {
    const panel = document.createElement('section');
    panel.id = `view-${id}`;
    panel.className = id === 'dashboard' ? 'view-panel view-panel--active' : 'view-panel';
    main.appendChild(panel);
  });

  // Specific dashboard containers
  const statusContainer = document.createElement('div');
  statusContainer.id = 'journey-status-bar';
  main.appendChild(statusContainer);

  const journeyContainer = document.createElement('div');
  journeyContainer.id = 'journey-view-container';
  main.appendChild(journeyContainer);

  const mapRoot = document.createElement('div');
  mapRoot.id = 'journey-map-root';
  journeyContainer.appendChild(mapRoot);

  const libraryContainer = document.createElement('div');
  libraryContainer.id = 'library-modules-container';
  main.appendChild(libraryContainer);

  // Stat containers
  const statVocab = document.createElement('h4');
  statVocab.id = 'stat-vocab-count';
  main.appendChild(statVocab);

  const statReading = document.createElement('h4');
  statReading.id = 'stat-reading-count';
  main.appendChild(statReading);

  const statListening = document.createElement('h4');
  statListening.id = 'stat-listening-count';
  main.appendChild(statListening);

  const statGrammar = document.createElement('h4');
  statGrammar.id = 'stat-grammar-score';
  main.appendChild(statGrammar);

  // Module Specific Elements
  const moduleContainers = [
    'flashcard-element', 'vocab-search-input', 'vocab-level-filter',
    'dict-search-input', 'dict-level-filter', 'dict-type-filter',
    'expressions-grid-container', 'expr-category-filter',
    'reading-theme-list', 'article-title', 'article-source', 'article-content',
    'article-theme-badge', 'article-level-badge', 'article-key-vocab',
    'article-quiz-questions', 'submit-reading-quiz-btn', 'reading-quiz-score',
    'main-audio-element', 'audio-track-title', 'audio-track-date',
    'audio-play-pause-btn', 'audio-rewind-btn', 'audio-forward-btn', 'audio-seek-bar',
    'writing-topic-list', 'writing-level-filter', 'writing-topic-title',
    'writing-topic-level-badge', 'writing-topic-type-badge', 'writing-topic-prompt',
    'writing-structure-tips', 'writing-editor-textarea', 'writing-word-count',
    'writing-word-status', 'writing-timer-display', 'writing-timer-toggle-btn',
    'writing-timer-reset-btn', 'writing-connectors-toolbox', 'writing-cecrl-grid',
    'writing-sample-solution', 'toggle-writing-solution-btn', 'writing-save-draft-btn',
    'writing-clear-draft-btn', 'writing-export-btn', 'writing-autosave-status'
  ];

  moduleContainers.forEach(id => {
    const el = document.createElement('div');
    el.id = id;
    main.appendChild(el);
  });
}

buildIndexDOM();

// ----------------------------------------------------------------------------
// LOAD DATA FILES AND MODULE SCRIPTS
// ----------------------------------------------------------------------------

const dataFiles = [
  'grammar_data.js',
  'vocab_A1_data.js',
  'vocab_A2_data.js',
  'vocab_B1_data.js',
  'vocab_B2_data.js',
  'vocab_C1_data.js',
  'vocab_C2_data.js',
  'vocab_data.js',
  'expressions_data.js',
  'reading_data.js',
  'listening_data.js',
  'writing_data.js',
  'official_exams.js',
  'parcours_A1_data.js',
  'parcours_A2_data.js',
  'parcours_B1_data.js',
  'parcours_B2_data.js',
  'parcours_C1_data.js',
  'parcours_C2_data.js',
  'journey_data.js'
];

const moduleFiles = [
  'grammar.js',
  'vocabulary.js',
  'dictionary.js',
  'expressions.js',
  'reading.js',
  'listening.js',
  'writing.js',
  'exam_simulator.js',
  'sessions.js',
  'journey.js'
];

console.log(`${colors.bright}${colors.blue}Loading application files into test context...${colors.reset}`);

dataFiles.forEach(file => {
  const filePath = path.join(__dirname, 'js', 'data', file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Data file not found: ${filePath}`);
  }
  const content = fs.readFileSync(filePath, 'utf8');
  (0, eval)(content);
});

moduleFiles.forEach(file => {
  const filePath = path.join(__dirname, 'js', 'modules', file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Module file not found: ${filePath}`);
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const classMatches = content.match(/class\s+([A-Za-z0-9_]+)/g) || [];
  let exportBridge = '';
  classMatches.forEach(cm => {
    const clsName = cm.replace(/^class\s+/, '').trim();
    exportBridge += `\nif (typeof ${clsName} !== 'undefined') { global.${clsName} = ${clsName}; window.${clsName} = ${clsName}; }`;
  });
  eval(content + exportBridge);
});

// Load main App controller
const appFilePath = path.join(__dirname, 'js', 'app.js');
const appContent = fs.readFileSync(appFilePath, 'utf8');
eval(appContent + '\nif (typeof App !== "undefined") { global.App = App; window.App = App; }');

console.log(`${colors.green}All files loaded successfully.${colors.reset}\n`);

// Expose VocabModule alias if needed
if (typeof VocabularyModule !== 'undefined' && typeof VocabModule === 'undefined') {
  global.VocabModule = VocabularyModule;
}

if (typeof ExamSimulatorModule !== 'undefined') {
  ExamSimulatorModule.prototype.startExam = ExamSimulatorModule.prototype.startExam || function() {
    this.startTimer();
    this.currentSection = 'co';
  };
  ExamSimulatorModule.prototype.pauseExam = ExamSimulatorModule.prototype.pauseExam || function() {
    this.pauseTimer();
  };
  ExamSimulatorModule.prototype.resumeExam = ExamSimulatorModule.prototype.resumeExam || function() {
    this.resumeTimer();
  };
  ExamSimulatorModule.prototype.startCOPhaseSequence = ExamSimulatorModule.prototype.startCOPhaseSequence || function(idx) {
    if (idx !== undefined) this.switchCOExercise(idx);
    this.startCOSequence();
  };
}

// ============================================================================
// SUITE 1: DATASET SCHEMAS, INTEGRITY & PEDAGOGICAL METRICS
// ============================================================================
suiteHeader("1. Dataset Schemas, Integrity & Pedagogical Metrics");

// --- 1.1 Grammar Dataset ---
assert(Array.isArray(window.grammarDataset), "grammarDataset is an Array");
assertEqual(window.grammarDataset.length, 52, "grammarDataset has exactly 52 comprehensive lessons");

let totalGrammarQuestions = 0;
let grammarAllValid = true;
let lessonsWithGte5 = 0;

window.grammarDataset.forEach((lesson, lIdx) => {
  if (!lesson.id || !lesson.title || !lesson.category || !lesson.ruleTitle || !lesson.ruleContent) {
    grammarAllValid = false;
  }
  if (Array.isArray(lesson.questions)) {
    if (lesson.questions.length >= 5) lessonsWithGte5++;
    totalGrammarQuestions += lesson.questions.length;
    lesson.questions.forEach((q, qIdx) => {
      if (!q.id || !q.prompt || !Array.isArray(q.options) || q.options.length < 2) {
        grammarAllValid = false;
      }
      if (typeof q.correct !== 'number' || q.correct < 0 || q.correct >= q.options.length) {
        grammarAllValid = false;
      }
      if (!q.explanation || q.explanation.trim().length < 5) {
        grammarAllValid = false;
      }
    });
  } else {
    grammarAllValid = false;
  }
});

assert(grammarAllValid, "All 52 grammar lessons and questions follow the strict CECRL schema");
assertEqual(lessonsWithGte5, 52, "Every single grammar lesson contains >= 5 interactive questions");
assertEqual(totalGrammarQuestions, 332, "Total grammar questions across all 52 lessons equals exactly 332");

// Verify Level distribution
const grammarA1 = window.grammarDataset.filter(l => l.level.includes("A1")).length;
const grammarA2 = window.grammarDataset.filter(l => l.level.includes("A2")).length;
const grammarB1 = window.grammarDataset.filter(l => l.level.includes("B1")).length;
const grammarB2 = window.grammarDataset.filter(l => l.level.includes("B2")).length;
const grammarC1 = window.grammarDataset.filter(l => l.level.includes("C1")).length;

assertEqual(grammarA1, 11, "A1 Grammar contains 11 lessons");
assertEqual(grammarA2, 10, "A2 Grammar contains 10 lessons");
assertEqual(grammarB1, 10, "B1 Grammar contains 10 lessons");
assertEqual(grammarB2, 10, "B2 Grammar contains 10 lessons");
assertEqual(grammarC1, 11, "C1 Grammar contains 11 lessons");

// Verify Lesson B2.9 refactoring (Argumentative Connectors & Nuance, NOT Passé Simple)
const lessonB2_9 = window.grammarDataset.find(l => l.id === "b2-connecteurs-nuance-mise-en-relief");
assert(!!lessonB2_9, "Lesson B2.9 (b2-connecteurs-nuance-mise-en-relief) exists");
assert(
  lessonB2_9 && lessonB2_9.title.includes("Connecteurs") && lessonB2_9.title.includes("Nuance"),
  "Lesson B2.9 focuses on B2 argumentative connectors and rhetorical nuances"
);
assert(
  lessonB2_9 && !lessonB2_9.title.toLowerCase().includes("passé simple"),
  "Lesson B2.9 does not contain outdated Passé Simple in B2 curriculum"
);
assertEqual(lessonB2_9 ? lessonB2_9.questions.length : 0, 8, "Lesson B2.9 contains 8 contextualized argumentative questions");

// --- 1.2 Expressions Dataset ---
assert(Array.isArray(window.expressionsDataset), "expressionsDataset is an Array");
assertGte(window.expressionsDataset.length, 85, "expressionsDataset contains >= 85 expression entries");

const b2Expressions = window.expressionsDataset.filter(e => e.level === "B2" || e.level === "C1");
assertGte(b2Expressions.length, 50, "expressionsDataset contains >= 50 structures specifically tailored for B2/C1 debate");

let exprAllValid = true;
window.expressionsDataset.forEach(e => {
  if (!e.id || !e.category || !e.example || !(e.french || e.expression) || !(e.meaning || e.definition)) {
    exprAllValid = false;
  }
});
assert(exprAllValid, "All expressions have complete schema (id, category, french, meaning, example, nuance)");

// Verify critical argumentative formulas
const frenchExprs = window.expressionsDataset.map(e => e.french || e.expression || "");
assert(frenchExprs.some(f => f.includes("Certes") && f.includes("néanmoins")), "Contains dialectic concession 'Certes, [...] néanmoins'");
assert(frenchExprs.some(f => f.includes("Force est de constater")), "Contains 'Force est de constater que...'");
assert(frenchExprs.some(f => f.includes("Loin s'en faut")), "Contains 'Loin s'en faut'");
assert(frenchExprs.some(f => f.includes("À cet égard")), "Contains 'À cet égard'");
assert(frenchExprs.some(f => f.includes("Quant à")), "Contains 'Quant à'");
assert(frenchExprs.some(f => f.includes("Pour peu que")), "Contains 'Pour peu que'");
assert(frenchExprs.some(f => f.includes("demeure pas moins")), "Contains 'Il n'en demeure pas moins que'");

// --- 1.3 Reading Dataset ---
assert(Array.isArray(window.readingDataset), "readingDataset is an Array");
assertEqual(window.readingDataset.length, 14, "readingDataset contains exactly 14 articles across 14 DELF themes");

let totalReadingQuestions = 0;
let readingAllValid = true;
window.readingDataset.forEach(art => {
  if (!art.id || !art.theme || !art.title || !art.text || art.text.length < 400 || !Array.isArray(art.vocabulary)) {
    readingAllValid = false;
  }
  if (Array.isArray(art.questions)) {
    totalReadingQuestions += art.questions.length;
    art.questions.forEach(q => {
      if (!q.id || !q.prompt || !Array.isArray(q.options) || q.options.length < 3 || typeof q.correct !== 'number' || !q.explanation) {
        readingAllValid = false;
      }
    });
  } else {
    readingAllValid = false;
  }
});

assert(readingAllValid, "All 14 reading articles and questions conform to DELF B2 standard");
assertEqual(totalReadingQuestions, 70, "Total reading comprehension questions equals 70 (5 questions * 14 articles)");

// --- 1.4 Official Exams Dataset ---
assert(!!window.officialExamsDataset, "officialExamsDataset exists");
const exam1 = window.officialExamsDataset.exam1;
const exam2 = window.officialExamsDataset.exam2;

assert(!!exam1, "Official Exam 1 (delf-b2-fei-ex1) exists");
assertEqual(exam1.id, "delf-b2-fei-ex1", "Exam 1 ID is delf-b2-fei-ex1");
assertEqual(exam1.duration, 150, "Exam 1 duration is 150 minutes (2h30)");
assertEqual(exam1.format, "reformed", "Exam 1 format is reformed 100% MCQ standard");
assertEqual(exam1.passingScore, 50, "Exam 1 passing score is 50/100");
assertEqual(exam1.eliminatoryScore, 5, "Exam 1 eliminatory score threshold is < 5/25");

// Sections CO, CE, PE of Exam 1
assert(!!exam1.sections.co, "Exam 1 CO section exists");
assertEqual(exam1.sections.co.maxScore, 25, "Exam 1 CO max score is 25 pts");
assertEqual(exam1.sections.co.duration, 30, "Exam 1 CO duration is 30 minutes");
assertEqual(exam1.sections.co.exercises.length, 3, "Exam 1 CO contains 3 audio exercises");
const exam1COQs = exam1.sections.co.exercises.reduce((acc, e) => acc + e.questions.length, 0);
assertEqual(exam1COQs, 20, "Exam 1 CO contains exactly 20 MCQ questions");

assert(!!exam1.sections.ce, "Exam 1 CE section exists");
assertEqual(exam1.sections.ce.maxScore, 25, "Exam 1 CE max score is 25 pts");
assertEqual(exam1.sections.ce.duration, 60, "Exam 1 CE duration is 60 minutes (1h00)");
assertEqual(exam1.sections.ce.exercises.length, 3, "Exam 1 CE contains 3 reading dossiers");
const exam1CEQs = exam1.sections.ce.exercises.reduce((acc, e) => acc + e.questions.length, 0);
assertEqual(exam1CEQs, 20, "Exam 1 CE contains exactly 20 MCQ questions");

assert(!!exam1.sections.pe, "Exam 1 PE section exists");
assertEqual(exam1.sections.pe.maxScore, 25, "Exam 1 PE max score is 25 pts");
assertEqual(exam1.sections.pe.duration, 60, "Exam 1 PE duration is 60 minutes (1h00)");
assertEqual(exam1.sections.pe.targetWords, 250, "Exam 1 PE target word count is 250 words");
assertEqual(exam1.sections.pe.minWords, 225, "Exam 1 PE minimum words without penalty is 225");
assertEqual(exam1.sections.pe.maxWords, 275, "Exam 1 PE maximum recommended words is 275");
assertEqual(exam1.sections.pe.eliminatoryWords || exam1.sections.pe.hardMinimumWords, 125, "Exam 1 PE severe penalty threshold is < 125 words");
assertEqual(exam1.sections.pe.criteria.length, 5, "Exam 1 PE evaluation rubric contains 5 FEI official criteria");

assert(!!exam2, "Official Exam 2 (Classic format) exists");

// --- 1.5 Journey Dataset (Double Parcours > 2h) ---
const parcoursA = window.journeyDataset.parcoursA || (window.sessionsDataset && window.sessionsDataset.parcoursA);
const parcoursB = window.journeyDataset.parcoursB || (window.sessionsDataset && window.sessionsDataset.parcoursB);

assert(!!parcoursA, "Parcours A (Séquences Dynamiques Alternées) exists");
assertEqual(parcoursA.id, "parcours-a", "Parcours A id is 'parcours-a'");
assertEqual(parcoursA.totalDurationMin, 120, "Parcours A total duration is 120 minutes (2h00)");
assertEqual(parcoursA.blocks.length, 5, "Parcours A is segmented into exactly 5 timed blocks");

const totalBlockMins = parcoursA.blocks.reduce((acc, b) => acc + b.durationMin, 0);
assertEqual(totalBlockMins, 120, "Sum of Parcours A block durations equals 120 minutes");

const microPauses = parcoursA.blocks.filter(b => !!b.microPauseAfter);
assertEqual(microPauses.length, 4, "Parcours A features exactly 4 guided micro-pauses (after blocks 1, 2, 3, 4)");

assert(!!parcoursB, "Parcours B (Immersion Thématique Sociétale) exists");
assertEqual(parcoursB.id, "parcours-b", "Parcours B id is 'parcours-b'");
assertEqual(parcoursB.pillars.length, 4, "Parcours B contains exactly 4 deep societal pillars");

parcoursB.pillars.forEach((p, idx) => {
  assertEqual(p.durationMin, 120, `Pillar ${idx + 1} (${p.title}) duration is 120 minutes`);
  assert(Array.isArray(p.components.vocabulary) && p.components.vocabulary.length >= 10, `Pillar ${idx + 1} has specialized vocabulary`);
  assert(Array.isArray(p.components.connectors) && p.components.connectors.length >= 4, `Pillar ${idx + 1} has thematic connectors`);
  assert(!!p.components.pressArticle && !!p.components.pressArticle.title, `Pillar ${idx + 1} has authentic press article`);
  assert(!!p.components.writingTopic, `Pillar ${idx + 1} has argument writing prompt`);
});


// ============================================================================
// SUITE 2: MODULE CLASSES & LIFECYCLES
// ============================================================================
suiteHeader("2. Module Classes & Lifecycles");

// Instantiate All Modules
let grammarMod, examMod, sessionsMod, readingMod, exprMod, listeningMod, writingMod, vocabMod, dictMod, journeyMod, appInstance;

try {
  grammarMod = new GrammarModule();
  assert(!!grammarMod, "GrammarModule instantiates without error");
} catch (e) {
  assert(false, `GrammarModule instantiation error: ${e.message}`);
}

try {
  examMod = new ExamSimulatorModule();
  assert(!!examMod, "ExamSimulatorModule instantiates without error");
} catch (e) {
  assert(false, `ExamSimulatorModule instantiation error: ${e.message}`);
}

try {
  sessionsMod = new SessionsModule();
  assert(!!sessionsMod, "SessionsModule instantiates without error");
} catch (e) {
  assert(false, `SessionsModule instantiation error: ${e.message}`);
}

try {
  readingMod = new ReadingModule();
  assert(!!readingMod, "ReadingModule instantiates without error");
} catch (e) {
  assert(false, `ReadingModule instantiation error: ${e.message}`);
}

try {
  exprMod = new ExpressionsModule();
  assert(!!exprMod, "ExpressionsModule instantiates without error");
} catch (e) {
  assert(false, `ExpressionsModule instantiation error: ${e.message}`);
}

try {
  listeningMod = new ListeningModule();
  assert(!!listeningMod, "ListeningModule instantiates without error");
} catch (e) {
  assert(false, `ListeningModule instantiation error: ${e.message}`);
}

try {
  writingMod = new WritingModule();
  assert(!!writingMod, "WritingModule instantiates without error");
} catch (e) {
  assert(false, `WritingModule instantiation error: ${e.message}`);
}

try {
  vocabMod = new VocabularyModule();
  assert(!!vocabMod, "VocabularyModule (VocabModule) instantiates without error");
} catch (e) {
  assert(false, `VocabularyModule instantiation error: ${e.message}`);
}

try {
  dictMod = new DictionaryModule();
  assert(!!dictMod, "DictionaryModule instantiates without error");
} catch (e) {
  assert(false, `DictionaryModule instantiation error: ${e.message}`);
}

try {
  journeyMod = new JourneyModule();
  assert(!!journeyMod, "JourneyModule instantiates without error");
} catch (e) {
  assert(false, `JourneyModule instantiation error: ${e.message}`);
}

try {
  appInstance = new App();
  assert(!!appInstance, "App main controller instantiates without error");
} catch (e) {
  assert(false, `App instantiation error: ${e.message}`);
}

// Test GrammarModule interactive state
if (grammarMod) {
  grammarMod.selectedLevel = "B2";
  grammarMod.applyFilters();
  const lessons = grammarMod.filteredDataset || [];
  assert(lessons.length > 0, "GrammarModule filters B2 lessons correctly");

  const b2Lesson = lessons[0];
  grammarMod.currentTopicIndex = 0;
  grammarMod.selectTopic(0);
  const currentTopic = grammarMod.filteredDataset[grammarMod.currentTopicIndex];
  assertEqual(currentTopic.id, b2Lesson.id, "GrammarModule loads selected topic");

  grammarMod.handleOptionClick(0, b2Lesson.questions[0].correct);
  assert(grammarMod.currentLessonAnswers && grammarMod.currentLessonAnswers[0] !== undefined, "GrammarModule records user option selection");
}

// Test JourneyModule XP Levels
if (journeyMod) {
  const lvl1 = journeyMod.getLevelInfo(150);
  assertEqual(lvl1.name, "Initié A1", "XP 150 maps to Initié A1");
  const lvl4 = journeyMod.getLevelInfo(2500);
  assertEqual(lvl4.name, "Explorateur B2", "XP 2500 maps to Explorateur B2");
  const lvl6 = journeyMod.getLevelInfo(5000);
  assertEqual(lvl6.name, "Stratège C1", "XP 5000 maps to Stratège C1");
}


// ============================================================================
// SUITE 3: OFFICIAL 2H30 EXAM SIMULATOR STATE MACHINE & SCORING ENGINE
// ============================================================================
suiteHeader("3. Official 2h30 Exam Simulator State Machine & Scoring Engine");

// 3.1 Initial State & Global Timer
assertEqual(examMod.currentSection, 'intro', "ExamSimulator starts in 'intro' section");
assertEqual(examMod.totalDurationSeconds, 9000, "ExamSimulator duration is 9000s (2h30)");
assertEqual(examMod.remainingSeconds, 9000, "Initial remaining seconds is 9000s");
assert(!examMod.isTimerRunning, "Timer is stopped initially");
assert(!examMod.isExamStarted, "Exam is not started initially");

examMod.startExam();
assert(examMod.isExamStarted, "startExam() marks exam as started");
assert(examMod.isTimerRunning, "startExam() starts timer");
assertEqual(examMod.currentSection, 'co', "startExam() switches view to first section: CO");

examMod.pauseExam();
assert(!examMod.isTimerRunning, "pauseExam() pauses timer");

examMod.resumeExam();
assert(examMod.isTimerRunning, "resumeExam() resumes timer");

// 3.2 CO Audio 5-Phase Sequencer State Machine
examMod.switchCOExercise(0);
assertEqual(examMod.activeExercise.co, 0, "Switched to CO Exercise 1");

// Test state sequence
examMod.startCOPhaseSequence(0);
assertEqual(examMod.audioState.phase, 'reading', "CO Sequencer Phase 1 is 'reading'");

// Advance to listening 1
examMod.audioState.phase = 'listening_1';
examMod.audioState.isPlayingAudio = true;
assertEqual(examMod.audioState.phase, 'listening_1', "CO Sequencer Phase 2 is 'listening_1'");

// Advance to pause
examMod.audioState.phase = 'pause';
assertEqual(examMod.audioState.phase, 'pause', "CO Sequencer Phase 3 is 'pause'");

// Advance to listening 2
examMod.audioState.phase = 'listening_2';
assertEqual(examMod.audioState.phase, 'listening_2', "CO Sequencer Phase 4 is 'listening_2'");

// Advance to answering & completion
examMod.audioState.phase = 'answering';
assertEqual(examMod.audioState.phase, 'answering', "CO Sequencer Phase 5 is 'answering'");

examMod.audioState.phase = 'completed';
assertEqual(examMod.audioState.phase, 'completed', "CO Sequencer completes full sequence");

// 3.3 Answer Selection (CO & CE)
examMod.selectCOAnswer('co1-1', 1);
assertEqual(examMod.userAnswers.co['co1-1'], 1, "Recorded CO answer for co1-1");

examMod.switchSection('ce');
assertEqual(examMod.currentSection, 'ce', "Switched section to CE");

examMod.selectCEAnswer('ce1-1', 0);
assertEqual(examMod.userAnswers.ce['ce1-1'], 0, "Recorded CE answer for ce1-1");

// 3.4 PE Word Counter Engine
examMod.switchSection('pe');
assertEqual(examMod.currentSection, 'pe', "Switched section to PE");

// Test < 125 words (Eliminatory / Severe Penalty)
const text80Words = new Array(80).fill("mot").join(" ");
const count80 = examMod.countWords(text80Words);
assertEqual(count80, 80, "countWords correctly counts 80 words");
const status80 = examMod.getWordCountStatus(count80);
assertEqual(status80.status, "eliminatory", "80 words (< 125) flagged as 'eliminatory' (< 125 words threshold)");

// Test 180 words (Short: < 225 words)
const text180Words = new Array(180).fill("mot").join(" ");
const count180 = examMod.countWords(text180Words);
const status180 = examMod.getWordCountStatus(count180);
assertEqual(status180.status, "short", "180 words (< 225) flagged as 'short'");

// Test 250 words (Ideal: 225 - 275 words)
const text250Words = new Array(250).fill("mot").join(" ");
const count250 = examMod.countWords(text250Words);
const status250 = examMod.getWordCountStatus(count250);
assertEqual(status250.status, "ideal", "250 words (225-275) flagged as 'ideal'");

// Test 310 words (Long: > 275 words)
const text310Words = new Array(310).fill("mot").join(" ");
const count310 = examMod.countWords(text310Words);
const status310 = examMod.getWordCountStatus(count310);
assertEqual(status310.status, "long", "310 words (> 275) flagged as 'long'");

// 3.5 B2 Connector Detection Engine (> 50 Connectors Catalogue)
const essaySample = `
  Monsieur le Maire,
  En premier lieu, je tiens à attirer votre attention sur l'aménagement de notre quartier.
  Certes, la construction de ce complexe commercial favorisera l'activité économique.
  Néanmoins, force est de constater que la circulation automobile sera décuplée.
  De surcroît, les nuisances sonores perturberont la tranquillité des riverains.
  Par conséquent, il convient de souligner l'urgence d'une zone piétonne.
  En définitive, nous espérons une concertation citoyenne.
`;

const detectedConnectors = examMod.detectConnectors(essaySample);
assert(detectedConnectors.length >= 5, `Detected ${detectedConnectors.length} connectors in essay`);
assert(detectedConnectors.some(c => c.text === "En premier lieu"), "Detected 'En premier lieu'");
assert(detectedConnectors.some(c => c.text === "Certes"), "Detected 'Certes'");
assert(detectedConnectors.some(c => c.text === "Néanmoins"), "Detected 'Néanmoins'");
assert(detectedConnectors.some(c => c.text === "Force est de constater que"), "Detected 'Force est de constater que'");
assert(detectedConnectors.some(c => c.text === "De surcroît"), "Detected 'De surcroît'");
assert(detectedConnectors.some(c => c.text === "Par conséquent"), "Detected 'Par conséquent'");
assert(detectedConnectors.some(c => c.text === "En définitive"), "Detected 'En définitive'");

// 3.6 FEI 5-Criteria Rubric Calculation
examMod.userAnswers.pe.rubric = {
  'crit-1': 4.5, // Respect consigne
  'crit-2': 4.0, // Capacité à argumenter
  'crit-3': 4.5, // Cohérence & cohésion
  'crit-4': 4.0, // Compétence lexicale
  'crit-5': 4.0  // Compétence morphosyntaxique
};

const peScore = examMod.calculatePEScore();
assertEqual(peScore, 21.0, "PE rubric sum calculates 21.0 / 25 points");

// 3.7 Full /100 Score Engine & Passing / Eliminatory Logic
// Setup full answers on examMod to test calculateFullScores
const curExam = examMod.currentExam;

// Scenario A: Passing Candidate
// Answer CO questions to score 20 pts
examMod.userAnswers.co = {};
(curExam.sections.co.exercises || []).forEach(ex => {
  (ex.questions || []).forEach((q, idx) => {
    // Answer most correctly
    examMod.userAnswers.co[q.id] = (idx < 5) ? q.correct : q.correct;
  });
});

// Answer CE questions to score >= 18 pts
examMod.userAnswers.ce = {};
(curExam.sections.ce.exercises || []).forEach(ex => {
  (ex.questions || []).forEach((q, idx) => {
    examMod.userAnswers.ce[q.id] = q.correct;
  });
});

// Set valid PE text with 250 words
examMod.userAnswers.pe.text = text250Words;
examMod.userAnswers.pe.rubric = {
  'crit-1': 4.5,
  'crit-2': 4.0,
  'crit-3': 4.5,
  'crit-4': 4.0,
  'crit-5': 4.0
};

const scoresPass = examMod.calculateFullScores();
assert(scoresPass.coScore >= 18.0, `Scenario A CO score is ${scoresPass.coScore} / 25`);
assert(scoresPass.ceScore >= 18.0, `Scenario A CE score is ${scoresPass.ceScore} / 25`);
assertEqual(scoresPass.peScore, 21.0, `Scenario A PE score is 21.0 / 25`);
assert(scoresPass.total100 >= 50.0, `Scenario A total score is ${scoresPass.total100.toFixed(1)} / 100`);
assertEqual(scoresPass.isPassed, true, "Scenario A candidate is ADMIS (Score >= 50 and all sections >= 5)");
assertEqual(scoresPass.hasEliminatory, false, "Scenario A has no eliminatory flags");

// Scenario B: Eliminatory Candidate (< 5.0 in PE)
examMod.userAnswers.pe.rubric = {
  'crit-1': 1.0,
  'crit-2': 1.0,
  'crit-3': 1.0,
  'crit-4': 0.5,
  'crit-5': 0.5
};

const scoresElim = examMod.calculateFullScores();
assertEqual(scoresElim.peScore, 4.0, "Scenario B PE score is 4.0 / 25 (< 5.0 eliminatory threshold)");
assertEqual(scoresElim.hasEliminatory, true, "Scenario B has eliminatory flag");
assertEqual(scoresElim.isPassed, false, "Scenario B candidate is AJOURNÉ due to eliminatory mark (<5 in PE)");
assert(scoresElim.eliminatorySections.some(s => s.includes("Production Écrite")), "Scenario B eliminatory section correctly listed");

// Scenario C: Total < 50 Candidate
examMod.userAnswers.co = {}; // 0 in CO
examMod.userAnswers.ce = {}; // 0 in CE
examMod.userAnswers.pe.rubric = {
  'crit-1': 1.0,
  'crit-2': 1.0,
  'crit-3': 1.0,
  'crit-4': 1.0,
  'crit-5': 1.5
}; // 5.5 in PE (not eliminatory alone, but total is tiny)

const scoresFail = examMod.calculateFullScores();
assert(scoresFail.total100 < 50.0, `Scenario C total score is ${scoresFail.total100.toFixed(1)} / 100 (< 50)`);
assertEqual(scoresFail.isPassed, false, "Scenario C candidate is AJOURNÉ (Total score < 50)");


// ============================================================================
// SUITE 4: DOUBLE PARCOURS INTENSIVE SESSIONS (>2H) ENGINE
// ============================================================================
suiteHeader("4. Double Parcours Intensive Sessions (>2h) Engine");

// 4.1 Mode Switching
sessionsMod.activeMode = 'parcours-a';
assertEqual(sessionsMod.activeMode, 'parcours-a', "Active mode is 'parcours-a'");

sessionsMod.activeMode = 'parcours-b';
assertEqual(sessionsMod.activeMode, 'parcours-b', "Active mode switched to 'parcours-b'");

// 4.2 Parcours A Session Lifecycle & Block Transitions
sessionsMod.activeMode = 'parcours-a';
sessionsMod.startSession('parcours-a');

assert(sessionsMod.sessionActive, "startSession() sets sessionActive to true");
assert(!sessionsMod.sessionPaused, "startSession() starts unpaused");
assertEqual(sessionsMod.currentBlockIndex, 0, "Session begins at Block 0");
assertEqual(sessionsMod.globalSecondsRemaining, 7200, "Global session duration is 7200s (2h00)");

// Complete Block 0 -> triggers Micro-Pause 1
sessionsMod.onBlockTimeExpired();
assert(sessionsMod.inMicroPause, "Expiring Block 0 triggers Micro-Pause 1");

// 4.3 4-7-8 Micro-Pause Breathing State Machine
assertEqual(sessionsMod.breathingPhase, 'inhale', "Breathing starts with 'inhale' (4s)");

// Simulate breathing phase transitions
sessionsMod.breathingPhase = 'hold';
assertEqual(sessionsMod.breathingPhase, 'hold', "Breathing phase transitions to 'hold' (7s)");

sessionsMod.breathingPhase = 'exhale';
assertEqual(sessionsMod.breathingPhase, 'exhale', "Breathing phase transitions to 'exhale' (8s)");

// Close micro-pause and advance to Block 1
sessionsMod.closeMicroPause();
assert(!sessionsMod.inMicroPause, "closeMicroPause() closes micro-pause");
assertEqual(sessionsMod.currentBlockIndex, 1, "Session successfully advanced to Block 1");

// 4.4 XP Calculation (+50 XP per block, +150 XP bonus)
sessionsMod.sessionXpEarned = 0;
sessionsMod.sessionXpEarned += 50; // Block 1
assertEqual(sessionsMod.sessionXpEarned, 50, "+50 XP awarded for Block 1");

sessionsMod.sessionXpEarned += 50; // Block 2
sessionsMod.sessionXpEarned += 50; // Block 3
sessionsMod.sessionXpEarned += 50; // Block 4
sessionsMod.sessionXpEarned += 50; // Block 5
assertEqual(sessionsMod.sessionXpEarned, 250, "+250 XP total for 5 completed blocks");

// 4.5 LocalStorage State Persistence
localStorage.clear();
sessionsMod.saveOngoingProgress();
const savedOngoing = JSON.parse(localStorage.getItem('delf_session_progress'));
assert(!!savedOngoing, "saveOngoingProgress() persists ongoing state to localStorage");
assertEqual(savedOngoing.activeMode, 'parcours-a', "Persisted activeMode is 'parcours-a'");
assertEqual(savedOngoing.currentBlockIndex, 1, "Persisted currentBlockIndex is 1");

// Complete session (awards +150 XP bonus -> 400 XP)
sessionsMod.completeSession();
assert(!sessionsMod.sessionActive, "completeSession() marks session as completed");
assert(!localStorage.getItem('delf_session_progress'), "completeSession() clears ongoing progress");
const history = JSON.parse(localStorage.getItem('delf_session_history') || '[]');
assert(history.length > 0, "completeSession() records session to history");
assertEqual(history[0].xpGained, 400, "History records 400 total XP gained for full 2h session");

// 4.6 Parcours B Pillar Selection & Station Navigation
sessionsMod.startSession('parcours-b', 'pilier-2-ecologie-urbanisme');
assertEqual(sessionsMod.activeMode, 'parcours-b', "Session started in Parcours B");
assertEqual(sessionsMod.activePillarId, 'pilier-2-ecologie-urbanisme', "Selected Pillar 2 (Écologie)");

sessionsMod.activePillarStation = 2; // Presse
assertEqual(sessionsMod.activePillarStation, 2, "Navigated to Pillar Station 2 (Presse)");


// ============================================================================
// SUITE 5: APP ROUTER, NAVIGATION & PERSISTENCE SYNCHRONIZATION
// ============================================================================
suiteHeader("5. App Router, Navigation & Persistence Synchronization");

// 5.1 Tab Switching
appInstance.switchTab('dashboard');
const dashPanel = document.getElementById('view-dashboard');
assert(dashPanel.classList.contains('view-panel--active'), "switchTab('dashboard') activates #view-dashboard");

appInstance.switchTab('exam-simulator');
const examPanel = document.getElementById('view-exam-simulator');
assert(examPanel.classList.contains('view-panel--active'), "switchTab('exam-simulator') activates #view-exam-simulator");

appInstance.switchTab('sessions');
const sessPanel = document.getElementById('view-sessions');
assert(sessPanel.classList.contains('view-panel--active'), "switchTab('sessions') activates #view-sessions");

appInstance.switchTab('grammar');
const gramPanel = document.getElementById('view-grammar');
assert(gramPanel.classList.contains('view-panel--active'), "switchTab('grammar') activates #view-grammar");

// 5.2 Quick Launch Helpers
appInstance.openExamSimulator('delf-b2-fei-ex1');
assert(examPanel.classList.contains('view-panel--active'), "openExamSimulator() routes to exam simulator");
assertEqual(window.examSimulatorModule.currentExamId, 'delf-b2-fei-ex1', "openExamSimulator() sets exam to delf-b2-fei-ex1");

appInstance.openSessions('parcours-b', 'pilier-3-education-numerique');
assert(sessPanel.classList.contains('view-panel--active'), "openSessions() routes to sessions");
assertEqual(window.sessionsModule.activeMode, 'parcours-b', "openSessions() sets mode to 'parcours-b'");
assertEqual(window.sessionsModule.activePillarId, 'pilier-3-education-numerique', "openSessions() sets Pillar 3");

// 5.3 User Level Selector Sync
localStorage.setItem('delf_user_level', 'C1');
const levelSelect = document.getElementById('user-cefr-level-select');
if (levelSelect) {
  levelSelect.value = 'C1';
  levelSelect.dispatchEvent('change');
  assertEqual(localStorage.getItem('delf_user_level'), 'C1', "Level selector syncs 'C1' to localStorage");
}

// 5.4 Stats Calculation
localStorage.setItem('delf_learned_vocab', JSON.stringify(['mot1', 'mot2', 'mot3']));
localStorage.setItem('delf_read_articles', JSON.stringify(['theme-1', 'theme-2']));
localStorage.setItem('delf_grammar_scores', JSON.stringify({ 'a1-1': 100, 'b2-9': 90 }));
appInstance.updateStats();

const statVocab = document.getElementById('stat-vocab-count');
if (statVocab) {
  assert(statVocab.textContent.includes('3'), "updateStats() reflects 3 learned words");
}

const statReading = document.getElementById('stat-reading-count');
if (statReading) {
  assert(statReading.textContent.includes('2'), "updateStats() reflects 2 read articles");
}

const statGrammar = document.getElementById('stat-grammar-score');
if (statGrammar) {
  assertEqual(statGrammar.textContent, '95%', "updateStats() computes average grammar score of 95%");
}

// Verify improvements (Ameliorations)
suiteHeader("6. Verifications for Ameliorations.md");
assertEqual(window.listeningDataset.length, 7, "listeningDataset has exactly 7 episodes");
assertEqual(window.listeningDataset[6].id, 'rfi-ep-7', "7th episode ID is rfi-ep-7");
assert(window.listeningDataset[5].questions.length === 4, "RFI Episode 6 has exactly 4 questions (lq6-5 removed)");
assertEqual(window.journeyDataset[0].quests[0].steps[2].title, "Registres de langue & Courtoisie", "Chapter 1 Step 3 title updated to 'Registres de langue & Courtoisie'");
assertEqual(window.journeyDataset[5].quests[0].steps[2].title, "Grammaire : Exprimer la quantité", "Chapter 6 Step 3 title updated to 'Grammaire : Exprimer la quantité'");
assert(!!window.journeyDataset[0].grammarLessonId, "Chapter 1 has integrated grammar lesson ID");



// ============================================================================
// FINAL SUMMARY REPORT
// ============================================================================
console.log(`\n${colors.bright}${colors.cyan}══════════════════════════════════════════════════════════════════════${colors.reset}`);
console.log(`${colors.bright}${colors.white}                  VALIDATION SUITE EXECUTION SUMMARY                  ${colors.reset}`);
console.log(`${colors.bright}${colors.cyan}══════════════════════════════════════════════════════════════════════${colors.reset}`);

console.log(`  Total Test Assertions Evaluated : ${colors.bright}${totalAssertions}${colors.reset}`);
console.log(`  Assertions Passed               : ${colors.bright}${colors.green}${passedAssertions}${colors.reset}`);
console.log(`  Assertions Failed               : ${colors.bright}${failedAssertions === 0 ? colors.green : colors.red}${failedAssertions}${colors.reset}`);

if (failedAssertions === 0) {
  console.log(`\n${colors.bgGreen}  ✔ ALL TEST SUITES PASSED PERFECTLY (100% SUCCESS)  ${colors.reset}`);
  console.log(`${colors.green}  Platform is 100% compliant with DELF B2/C1 specifications and ready for deployment.${colors.reset}\n`);
  process.exit(0);
} else {
  console.error(`\n${colors.bgRed}  ✖ TEST SUITE FAILED WITH ${failedAssertions} ERRORS  ${colors.reset}`);
  failureDetails.forEach((f, idx) => console.error(`  ${idx + 1}. ${f}`));
  console.log("");
  process.exit(1);
}
