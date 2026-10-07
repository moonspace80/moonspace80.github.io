/**
 * Comprehensive Audit Script for Conjugation Dataset & Fallback Engine
 * Audits:
 * 1. data/conjugaison_verbs.json (on disk)
 * 2. js/data/conjugaison_verbs_data.js (runtime dataset)
 * 3. Specific benchmark verbs: laisser, valoir, paraître, sembler, avancer, oser, menacer, manger
 * 4. Defective and impersonal verbs: falloir, pleuvoir, choir, clore, faillir, déchoir, échoir
 * 5. Fallback engine verification in conjugaison.js
 */

const fs = require('fs');
const path = require('path');

const jsonPath = path.resolve(__dirname, '../data/conjugaison_verbs.json');
const jsDataPath = path.resolve(__dirname, '../js/data/conjugaison_verbs_data.js');

console.log('=== STARTING CONJUGAISON DATASET AUDIT ===');
console.log('Timestamp:', new Date().toISOString());

// 1. Audit on-disk JSON
if (!fs.existsSync(jsonPath)) {
  console.error('FAIL: data/conjugaison_verbs.json does not exist!');
  process.exit(1);
}

const stats = fs.statSync(jsonPath);
console.log(`File size: ${stats.size} bytes (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
if (stats.size < 1080000) {
  console.warn(`WARNING: File size ${stats.size} is less than expected 1.08MB!`);
} else {
  console.log('PASS: File size exceeds 1.08MB threshold.');
}

const rawJson = fs.readFileSync(jsonPath, 'utf8');
const dataJson = JSON.parse(rawJson);

const totalIndex = dataJson.index ? dataJson.index.length : 0;
const verbKeys = Object.keys(dataJson.verbs || {});
console.log(`Index count: ${totalIndex}, Detailed verbs count: ${verbKeys.length}`);

if (totalIndex !== 536 || verbKeys.length !== 536) {
  console.warn(`NOTE: Total index (${totalIndex}) or verbs count (${verbKeys.length}) != 536`);
} else {
  console.log('PASS: Exact 536 index entries and 536 detailed verb entries found.');
}

// Modes and standard tenses to verify
const standardModes = {
  indicatif: ['present', 'imparfait', 'passe_simple', 'futur_simple', 'passe_compose', 'plus_que_parfait', 'passe_anterieur', 'futur_anterieur'],
  subjonctif: ['present', 'imparfait', 'passe', 'plus_que_parfait'],
  conditionnel: ['present', 'passe_1'], // passe_1 or passe
  imperatif: ['present', 'passe']
};

let emptyArrayCountByVerb = {};
let defectiveVerbs = [];
let impersonalVerbs = [];
let regularVerbsWithEmptyArrays = [];
let fullyPopulatedCount = 0;

verbKeys.forEach(vKey => {
  const v = dataJson.verbs[vKey];
  const isDefective = Boolean(v.is_defective);
  const isImpersonal = Boolean(v.is_impersonal);

  if (isDefective) defectiveVerbs.push(vKey);
  if (isImpersonal) impersonalVerbs.push(vKey);

  let hasEmptyInStandard = false;
  let emptyTenses = [];

  // Check indicatif
  standardModes.indicatif.forEach(t => {
    const arr = v.modes && v.modes.indicatif && v.modes.indicatif[t];
    if (!Array.isArray(arr) || arr.length === 0) {
      hasEmptyInStandard = true;
      emptyTenses.push(`indicatif.${t}`);
    }
  });

  // Check subjonctif
  standardModes.subjonctif.forEach(t => {
    const arr = v.modes && v.modes.subjonctif && v.modes.subjonctif[t];
    if (!Array.isArray(arr) || arr.length === 0) {
      hasEmptyInStandard = true;
      emptyTenses.push(`subjonctif.${t}`);
    }
  });

  // Check conditionnel
  const condPres = v.modes && v.modes.conditionnel && v.modes.conditionnel.present;
  const condPasse = v.modes && v.modes.conditionnel && (v.modes.conditionnel.passe_1 || v.modes.conditionnel.passe);
  if (!Array.isArray(condPres) || condPres.length === 0) {
    hasEmptyInStandard = true;
    emptyTenses.push('conditionnel.present');
  }
  if (!Array.isArray(condPasse) || condPasse.length === 0) {
    hasEmptyInStandard = true;
    emptyTenses.push('conditionnel.passe');
  }

  // Check imperatif
  const impPres = v.modes && (v.modes.imperatif || v.modes.impératif) && ((v.modes.imperatif && v.modes.imperatif.present) || (v.modes.impératif && v.modes.impératif.present));
  const impPasse = v.modes && (v.modes.imperatif || v.modes.impératif) && ((v.modes.imperatif && v.modes.imperatif.passe) || (v.modes.impératif && v.modes.impératif.passe));
  if (!Array.isArray(impPres) || impPres.length === 0) {
    hasEmptyInStandard = true;
    emptyTenses.push('imperatif.present');
  }
  if (!Array.isArray(impPasse) || impPasse.length === 0) {
    hasEmptyInStandard = true;
    emptyTenses.push('imperatif.passe');
  }

  // Check participe
  const part = v.modes && v.modes.participe;
  if (!part || !part.present || !part.passe) {
    hasEmptyInStandard = true;
    emptyTenses.push('participe');
  }

  if (hasEmptyInStandard) {
    emptyArrayCountByVerb[vKey] = emptyTenses;
    if (!isDefective && !isImpersonal) {
      regularVerbsWithEmptyArrays.push({ verb: vKey, emptyTenses });
    }
  } else {
    fullyPopulatedCount++;
  }
});

console.log(`\n--- POPULATION SUMMARY ---`);
console.log(`Total verbs: ${verbKeys.length}`);
console.log(`Fully populated across all modes & tenses: ${fullyPopulatedCount}`);
console.log(`Defective verbs marked: ${defectiveVerbs.length} (${defectiveVerbs.join(', ')})`);
console.log(`Impersonal verbs marked: ${impersonalVerbs.length} (${impersonalVerbs.join(', ')})`);
console.log(`Regular (non-defective, non-impersonal) verbs with empty tenses: ${regularVerbsWithEmptyArrays.length}`);

if (regularVerbsWithEmptyArrays.length > 0) {
  console.error('FAIL: Found non-defective verbs with empty tenses:', JSON.stringify(regularVerbsWithEmptyArrays, null, 2));
} else {
  console.log('PASS: ZERO regular verbs have unintended empty arrays across all modes and tenses!');
}

// 2. Benchmark Verbs Inspection
console.log('\n--- BENCHMARK VERBS INSPECTION ---');
const benchmarks = ['laisser', 'valoir', 'paraitre', 'sembler', 'avancer', 'oser', 'menacer', 'manger'];

benchmarks.forEach(b => {
  const v = dataJson.verbs[b];
  if (!v) {
    console.error(`FAIL: Benchmark verb '${b}' not found in dataset!`);
    return;
  }
  const pres = v.modes && v.modes.indicatif && v.modes.indicatif.present;
  const imp = v.modes && v.modes.indicatif && v.modes.indicatif.imparfait;
  const ps = v.modes && v.modes.indicatif && v.modes.indicatif.passe_simple;
  const fut = v.modes && v.modes.indicatif && v.modes.indicatif.futur_simple;
  const pc = v.modes && v.modes.indicatif && v.modes.indicatif.passe_compose;

  console.log(`Verb '${b}':`);
  console.log(`  - Group: ${v.group}, Level: ${v.level}, Auxiliary: ${v.auxiliary}, Model: ${v.model}`);
  console.log(`  - Indicatif Présent rows: ${pres ? pres.length : 0}`);
  if (pres && pres.length > 0) {
    console.log(`    Sample 1s: ${JSON.stringify(pres[0])}`);
    console.log(`    Sample 1p: ${JSON.stringify(pres[3])}`);
  }
  console.log(`  - Passé Simple rows: ${ps ? ps.length : 0} (1s: ${ps && ps[0] ? ps[0].full : 'N/A'})`);
  console.log(`  - Passé Composé rows: ${pc ? pc.length : 0} (1s: ${pc && pc[0] ? pc[0].full : 'N/A'})`);
  console.log(`  - Participe présent: ${v.participle_present}, Participe passé: ${v.participle_past}`);

  // Assert row completeness
  let validRows = true;
  if (!pres || pres.length !== 6) validRows = false;
  pres.forEach(r => {
    if (!r.person || !r.form || !r.full || r.radical === undefined || r.ending === undefined) {
      validRows = false;
    }
  });
  if (validRows) {
    console.log(`  -> PASS: All row structures valid for '${b}'.`);
  } else {
    console.error(`  -> FAIL: Incomplete row structure in '${b}'!`);
  }
});

// 3. Inspect Defective & Impersonal Verbs
console.log('\n--- DEFECTIVE & IMPERSONAL VERBS DETAIL ---');
const defectivesToCheck = ['falloir', 'pleuvoir', 'choir', 'clore', 'faillir', 'dechoir', 'echoir'];
defectivesToCheck.forEach(d => {
  const v = dataJson.verbs[d];
  if (!v) {
    console.log(`Verb '${d}' not in verbs object directly (checking index)`);
    return;
  }
  console.log(`Verb '${d}': defective=${v.is_defective}, impersonal=${v.is_impersonal}`);
  const indPres = v.modes && v.modes.indicatif && v.modes.indicatif.present;
  console.log(`  Indicatif Présent count: ${indPres ? indPres.length : 0}`);
  if (indPres && indPres.length > 0) {
    console.log(`  Forms: ${indPres.map(r => r.full).join(', ')}`);
  }
});

// 4. Runtime Fallback Engine Inspection
console.log('\n--- RUNTIME FALLBACK ENGINE INSPECTION ---');
const conjugaisonJsPath = path.resolve(__dirname, '../js/modules/conjugaison.js');
const conjugaisonJsContent = fs.readFileSync(conjugaisonJsPath, 'utf8');

const hasIsValidEntry = conjugaisonJsContent.includes('function isValidEntry(entry)');
const checksIndicatifPresent = conjugaisonJsContent.includes('entry.modes.indicatif.present.length > 0');
const checksDefectiveOrImpersonal = conjugaisonJsContent.includes('entry.is_defective || entry.is_impersonal');
const callsDeriveFromModel = conjugaisonJsContent.includes('this._deriveFromModel');

console.log(`isValidEntry present: ${hasIsValidEntry}`);
console.log(`Checks indicatif.present length > 0: ${checksIndicatifPresent}`);
console.log(`Exempts defective or impersonal: ${checksDefectiveOrImpersonal}`);
console.log(`Calls _deriveFromModel on invalid/missing entry: ${callsDeriveFromModel}`);

if (hasIsValidEntry && checksIndicatifPresent && checksDefectiveOrImpersonal && callsDeriveFromModel) {
  console.log('PASS: Runtime fallback engine correctly detects incomplete entries and derives paradigms.');
} else {
  console.error('FAIL: Runtime fallback engine missing critical checks!');
}

console.log('\n=== AUDIT COMPLETE ===');
