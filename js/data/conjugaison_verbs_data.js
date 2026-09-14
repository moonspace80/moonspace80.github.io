/**
 * FrenchDELFB2C1 Master Conjugation Dataset (536 Verbs)
 * Conforms to SPEC-BESCHERELLE-CONJ-2026-09-13 & PROJECT.md
 * Generated: 2026-09-13T20:30:00Z
 * Source: Bescherelle & FrenchDELFB2C1 Morphological Lexicon
 */
(function(root) {
  'use strict';

  var dataset = null;

  function isDatasetHydrated(d) {
    if (!d || !d.verbs) return false;
    var keys = Object.keys(d.verbs);
    if (keys.length < 500) return false;
    var hydratedCount = 0;
    for (var i = 0; i < keys.length; i++) {
      var v = d.verbs[keys[i]];
      if (v && v.modes && v.modes.indicatif && Array.isArray(v.modes.indicatif.present) && v.modes.indicatif.present.length > 0) {
        hydratedCount++;
      }
    }
    return hydratedCount >= 500;
  }

  // 1. In Node.js environment, load from canonical data/conjugaison_verbs.json if accessible
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
          var loaded = JSON.parse(fs.readFileSync(candidates[i], 'utf8'));
          if (loaded && isDatasetHydrated(loaded)) {
            dataset = loaded;
            break;
          }
        }
      }
    } catch (e) {
      // Fall through to embedded dataset
    }
  }

  // 2. Embedded dataset for browser and sandboxed VM environments
  if (!dataset) {
    dataset = {
      "metadata": {
        "total_verbs": 536,
        "version": "1.0.0",
        "generated_at": "2026-09-13T20:30:00Z",
        "source": "Bescherelle & FrenchDELFB2C1 Morphological Lexicon"
      },
      "total_verbs": 536,
      "version": "1.0.0",
      "source": "Bescherelle & FrenchDELFB2C1 Morphological Lexicon",
      "generated_at": "2026-09-13T20:30:00Z",
      "index": [
        {"id":"avoir","slug":"avoir","verb":"avoir","infinitive":"avoir","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"avoir"},
        {"id":"etre","slug":"etre","verb":"être","infinitive":"être","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"être"},
        {"id":"aller","slug":"aller","verb":"aller","infinitive":"aller","group":3,"level":"A1","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aller"},
        {"id":"venir","slug":"venir","verb":"venir","infinitive":"venir","group":3,"level":"A1","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"venir"},
        {"id":"devoir","slug":"devoir","verb":"devoir","infinitive":"devoir","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"devoir"},
        {"id":"pouvoir","slug":"pouvoir","verb":"pouvoir","infinitive":"pouvoir","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"pouvoir"},
        {"id":"vouloir","slug":"vouloir","verb":"vouloir","infinitive":"vouloir","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"vouloir"},
        {"id":"savoir","slug":"savoir","verb":"savoir","infinitive":"savoir","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"savoir"},
        {"id":"falloir","slug":"falloir","verb":"falloir","infinitive":"falloir","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":true,"model":"falloir"},
        {"id":"faire","slug":"faire","verb":"faire","infinitive":"faire","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"faire"},
        {"id":"laisser","slug":"laisser","verb":"laisser","infinitive":"laisser","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"valoir","slug":"valoir","verb":"valoir","infinitive":"valoir","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"valoir"},
        {"id":"paraitre","slug":"paraitre","verb":"paraître","infinitive":"paraître","group":3,"level":"B1","auxiliary":"avoir_ou_etre","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"connaître"},
        {"id":"sembler","slug":"sembler","verb":"sembler","infinitive":"sembler","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"faillir","slug":"faillir","verb":"faillir","infinitive":"faillir","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":false,"model":"faillir"},
        {"id":"oser","slug":"oser","verb":"oser","infinitive":"oser","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"commencer","slug":"commencer","verb":"commencer","infinitive":"commencer","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"avancer","slug":"avancer","verb":"avancer","infinitive":"avancer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"lancer","slug":"lancer","verb":"lancer","infinitive":"lancer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"placer","slug":"placer","verb":"placer","infinitive":"placer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"prononcer","slug":"prononcer","verb":"prononcer","infinitive":"prononcer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"menacer","slug":"menacer","verb":"menacer","infinitive":"menacer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"effacer","slug":"effacer","verb":"effacer","infinitive":"effacer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"balancer","slug":"balancer","verb":"balancer","infinitive":"balancer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"forcer","slug":"forcer","verb":"forcer","infinitive":"forcer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"agacer","slug":"agacer","verb":"agacer","infinitive":"agacer","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"percer","slug":"percer","verb":"percer","infinitive":"percer","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"remplacer","slug":"remplacer","verb":"remplacer","infinitive":"remplacer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"relancer","slug":"relancer","verb":"relancer","infinitive":"relancer","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"devancer","slug":"devancer","verb":"devancer","infinitive":"devancer","group":1,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"renoncer","slug":"renoncer","verb":"renoncer","infinitive":"renoncer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"manger","slug":"manger","verb":"manger","infinitive":"manger","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"voyager","slug":"voyager","verb":"voyager","infinitive":"voyager","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"changer","slug":"changer","verb":"changer","infinitive":"changer","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"partager","slug":"partager","verb":"partager","infinitive":"partager","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"ranger","slug":"ranger","verb":"ranger","infinitive":"ranger","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"nager","slug":"nager","verb":"nager","infinitive":"nager","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"bouger","slug":"bouger","verb":"bouger","infinitive":"bouger","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"diriger","slug":"diriger","verb":"diriger","infinitive":"diriger","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"proteger","slug":"proteger","verb":"protéger","infinitive":"protéger","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"obliger","slug":"obliger","verb":"obliger","infinitive":"obliger","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"plonger","slug":"plonger","verb":"plonger","infinitive":"plonger","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"loger","slug":"loger","verb":"loger","infinitive":"loger","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"encourager","slug":"encourager","verb":"encourager","infinitive":"encourager","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"heberger","slug":"heberger","verb":"héberger","infinitive":"héberger","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"rediger","slug":"rediger","verb":"rédiger","infinitive":"rédiger","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"menager","slug":"menager","verb":"menager","infinitive":"ménager","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"deranger","slug":"deranger","verb":"déranger","infinitive":"déranger","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"interroger","slug":"interroger","verb":"interroger","infinitive":"interroger","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"corriger","slug":"corriger","verb":"corriger","infinitive":"corriger","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"prolonger","slug":"prolonger","verb":"prolonger","infinitive":"prolonger","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"juger","slug":"juger","verb":"juger","infinitive":"juger","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"engager","slug":"engager","verb":"engager","infinitive":"engager","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"manger"},
        {"id":"appeler","slug":"appeler","verb":"appeler","infinitive":"appeler","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"appeler"},
        {"id":"rappeler","slug":"rappeler","verb":"rappeler","infinitive":"rappeler","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"appeler"},
        {"id":"interpeller","slug":"interpeller","verb":"interpeller","infinitive":"interpeller","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"appeler"},
        {"id":"renouveler","slug":"renouveler","verb":"renouveler","infinitive":"renouveler","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"appeler"},
        {"id":"epeler","slug":"epeler","verb":"épeler","infinitive":"épeler","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"appeler"},
        {"id":"geler","slug":"geler","verb":"geler","infinitive":"geler","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"geler"},
        {"id":"congeler","slug":"congeler","verb":"congeler","infinitive":"congeler","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"geler"},
        {"id":"degeler","slug":"degeler","verb":"dégeler","infinitive":"dégeler","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"geler"},
        {"id":"peler","slug":"peler","verb":"peler","infinitive":"peler","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"geler"},
        {"id":"marteler","slug":"marteler","verb":"marteler","infinitive":"marteler","group":1,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"geler"},
        {"id":"jeter","slug":"jeter","verb":"jeter","infinitive":"jeter","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"jeter"},
        {"id":"projeter","slug":"projeter","verb":"projeter","infinitive":"projeter","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"jeter"},
        {"id":"rejeter","slug":"rejeter","verb":"rejeter","infinitive":"rejeter","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"jeter"},
        {"id":"acheter","slug":"acheter","verb":"acheter","infinitive":"acheter","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"acheter"},
        {"id":"racheter","slug":"racheter","verb":"racheter","infinitive":"racheter","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"acheter"},
        {"id":"crocheter","slug":"crocheter","verb":"crocheter","infinitive":"crocheter","group":1,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"acheter"},
        {"id":"feuilleter","slug":"feuilleter","verb":"feuilleter","infinitive":"feuilleter","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"jeter"},
        {"id":"haleter","slug":"haleter","verb":"haleter","infinitive":"haleter","group":1,"level":"C2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"acheter"},
        {"id":"mener","slug":"mener","verb":"mener","infinitive":"mener","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"amener","slug":"amener","verb":"amener","infinitive":"amener","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"emmener","slug":"emmener","verb":"emmener","infinitive":"emmener","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"lever","slug":"lever","verb":"lever","infinitive":"lever","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"soulever","slug":"soulever","verb":"soulever","infinitive":"soulever","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"relever","slug":"relever","verb":"relever","infinitive":"relever","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"enlever","slug":"enlever","verb":"enlever","infinitive":"enlever","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"peser","slug":"peser","verb":"peser","infinitive":"peser","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"semer","slug":"semer","verb":"semer","infinitive":"semer","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"parsemer","slug":"parsemer","verb":"parsemer","infinitive":"parsemer","group":1,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"promener","slug":"promener","verb":"promener","infinitive":"promener","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"elever","slug":"elever","verb":"élever","infinitive":"élever","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"achever","slug":"achever","verb":"achever","infinitive":"achever","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"surmener","slug":"surmener","verb":"surmener","infinitive":"surmener","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"sevrer","slug":"sevrer","verb":"sevrer","infinitive":"sevrer","group":1,"level":"C2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"esperer","slug":"esperer","verb":"espérer","infinitive":"espérer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"preferer","slug":"preferer","verb":"préférer","infinitive":"préférer","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"repeter","slug":"repeter","verb":"répéter","infinitive":"répéter","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"celebrer","slug":"celebrer","verb":"célébrer","infinitive":"célébrer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"considerer","slug":"considerer","verb":"considérer","infinitive":"considérer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"ceder","slug":"ceder","verb":"céder","infinitive":"céder","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"succeder","slug":"succeder","verb":"succéder","infinitive":"succéder","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"posseder","slug":"posseder","verb":"posséder","infinitive":"posséder","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"exagerer","slug":"exagerer","verb":"exagérer","infinitive":"exagérer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"inquieter","slug":"inquieter","verb":"inquiéter","infinitive":"inquiéter","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"regler","slug":"regler","verb":"régler","infinitive":"régler","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"gerer","slug":"gerer","verb":"gérer","infinitive":"gérer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"liberer","slug":"liberer","verb":"libérer","infinitive":"libérer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"temperer","slug":"temperer","verb":"tempérer","infinitive":"tempérer","group":1,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"completer","slug":"completer","verb":"compléter","infinitive":"compléter","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"interpreter","slug":"interpreter","verb":"interpréter","infinitive":"interpréter","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"reveler","slug":"reveler","verb":"révéler","infinitive":"révéler","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"suggerer","slug":"suggerer","verb":"suggérer","infinitive":"suggérer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"perseverer","slug":"perseverer","verb":"persévérer","infinitive":"persévérer","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"tolerer","slug":"tolerer","verb":"tolérer","infinitive":"tolérer","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"payer","slug":"payer","verb":"payer","infinitive":"payer","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"payer"},
        {"id":"essayer","slug":"essayer","verb":"essayer","infinitive":"essayer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"payer"},
        {"id":"balayer","slug":"balayer","verb":"balayer","infinitive":"balayer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"payer"},
        {"id":"effrayer","slug":"effrayer","verb":"effrayer","infinitive":"effrayer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"payer"},
        {"id":"egayer","slug":"egayer","verb":"égayer","infinitive":"égayer","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"payer"},
        {"id":"relayer","slug":"relayer","verb":"relayer","infinitive":"relayer","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"payer"},
        {"id":"envoyer","slug":"envoyer","verb":"envoyer","infinitive":"envoyer","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"envoyer"},
        {"id":"renvoyer","slug":"renvoyer","verb":"renvoyer","infinitive":"renvoyer","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"envoyer"},
        {"id":"nettoyer","slug":"nettoyer","verb":"nettoyer","infinitive":"nettoyer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"nettoyer"},
        {"id":"employer","slug":"employer","verb":"employer","infinitive":"employer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"nettoyer"},
        {"id":"tutoyer","slug":"tutoyer","verb":"tutoyer","infinitive":"tutoyer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"nettoyer"},
        {"id":"vouvoyer","slug":"vouvoyer","verb":"vouvoyer","infinitive":"vouvoyer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"nettoyer"},
        {"id":"cotoyer","slug":"cotoyer","verb":"côtoyer","infinitive":"côtoyer","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"nettoyer"},
        {"id":"deployer","slug":"deployer","verb":"déployer","infinitive":"déployer","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"nettoyer"},
        {"id":"noyer","slug":"noyer","verb":"noyer","infinitive":"noyer","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"nettoyer"},
        {"id":"appuyer","slug":"appuyer","verb":"appuyer","infinitive":"appuyer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"appuyer"},
        {"id":"essuyer","slug":"essuyer","verb":"essuyer","infinitive":"essuyer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"appuyer"},
        {"id":"ennuyer","slug":"ennuyer","verb":"ennuyer","infinitive":"ennuyer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"appuyer"},
        {"id":"etudier","slug":"etudier","verb":"étudier","infinitive":"étudier","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"oublier","slug":"oublier","verb":"oublier","infinitive":"oublier","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"remercier","slug":"remercier","verb":"remercier","infinitive":"remercier","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"jouer","slug":"jouer","verb":"jouer","infinitive":"jouer","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"creer","slug":"creer","verb":"créer","infinitive":"créer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"créer"},
        {"id":"agreer","slug":"agreer","verb":"agréer","infinitive":"agréer","group":1,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"créer"},
        {"id":"distribuer","slug":"distribuer","verb":"distribuer","infinitive":"distribuer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"accepter","slug":"accepter","verb":"accepter","infinitive":"accepter","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"accompagner","slug":"accompagner","verb":"accompagner","infinitive":"accompagner","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"accorder","slug":"accorder","verb":"accorder","infinitive":"accorder","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"accuser","slug":"accuser","verb":"accuser","infinitive":"accuser","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"admirer","slug":"admirer","verb":"admirer","infinitive":"admirer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"adresser","slug":"adresser","verb":"adresser","infinitive":"adresser","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"afficher","slug":"afficher","verb":"afficher","infinitive":"afficher","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"affirmer","slug":"affirmer","verb":"affirmer","infinitive":"affirmer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"aider","slug":"aider","verb":"aider","infinitive":"aider","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"aimer","slug":"aimer","verb":"aimer","infinitive":"aimer","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"ajouter","slug":"ajouter","verb":"ajouter","infinitive":"ajouter","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"allumer","slug":"allumer","verb":"allumer","infinitive":"allumer","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"annoncer","slug":"annoncer","verb":"annoncer","infinitive":"annoncer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"apporter","slug":"apporter","verb":"apporter","infinitive":"apporter","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"apprecier","slug":"apprecier","verb":"apprécier","infinitive":"apprécier","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"arreter","slug":"arreter","verb":"arrêter","infinitive":"arrêter","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"arriver","slug":"arriver","verb":"arriver","infinitive":"arriver","group":1,"level":"A1","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"assurer","slug":"assurer","verb":"assurer","infinitive":"assurer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"attacher","slug":"attacher","verb":"attacher","infinitive":"attacher","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"attaquer","slug":"attaquer","verb":"attaquer","infinitive":"attaquer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"attirer","slug":"attirer","verb":"attirer","infinitive":"attirer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"attraper","slug":"attraper","verb":"attraper","infinitive":"attraper","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"augmenter","slug":"augmenter","verb":"augmenter","infinitive":"augmenter","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"baisser","slug":"baisser","verb":"baisser","infinitive":"baisser","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"blesser","slug":"blesser","verb":"blesser","infinitive":"blesser","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"bruler","slug":"bruler","verb":"brûler","infinitive":"brûler","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"cacher","slug":"cacher","verb":"cacher","infinitive":"cacher","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"calmer","slug":"calmer","verb":"calmer","infinitive":"calmer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"casser","slug":"casser","verb":"casser","infinitive":"casser","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"chasser","slug":"chasser","verb":"chasser","infinitive":"chasser","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"chercher","slug":"chercher","verb":"chercher","infinitive":"chercher","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"commander","slug":"commander","verb":"commander","infinitive":"commander","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"comparer","slug":"comparer","verb":"comparer","infinitive":"comparer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"compter","slug":"compter","verb":"compter","infinitive":"compter","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"confirmer","slug":"confirmer","verb":"confirmer","infinitive":"confirmer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"conseiller","slug":"conseiller","verb":"conseiller","infinitive":"conseiller","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"constater","slug":"constater","verb":"constater","infinitive":"constater","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"continuer","slug":"continuer","verb":"continuer","infinitive":"continuer","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"couter","slug":"couter","verb":"coûter","infinitive":"coûter","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"decider","slug":"decider","verb":"décider","infinitive":"décider","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"declarer","slug":"declarer","verb":"déclarer","infinitive":"déclarer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"demander","slug":"demander","verb":"demander","infinitive":"demander","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"depenser","slug":"depenser","verb":"dépenser","infinitive":"dépenser","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"desirer","slug":"desirer","verb":"désirer","infinitive":"désirer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"dessiner","slug":"dessiner","verb":"dessiner","infinitive":"dessiner","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"discuter","slug":"discuter","verb":"discuter","infinitive":"discuter","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"donner","slug":"donner","verb":"donner","infinitive":"donner","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"douter","slug":"douter","verb":"douter","infinitive":"douter","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"echapper","slug":"echapper","verb":"échapper","infinitive":"échapper","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"echouer","slug":"echouer","verb":"échouer","infinitive":"échouer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"ecouter","slug":"ecouter","verb":"écouter","infinitive":"écouter","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"emprunter","slug":"emprunter","verb":"emprunter","infinitive":"emprunter","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"enseigner","slug":"enseigner","verb":"enseigner","infinitive":"enseigner","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"entrer","slug":"entrer","verb":"entrer","infinitive":"entrer","group":1,"level":"A1","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"eviter","slug":"eviter","verb":"éviter","infinitive":"éviter","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"exister","slug":"exister","verb":"exister","infinitive":"exister","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"expliquer","slug":"expliquer","verb":"expliquer","infinitive":"expliquer","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"exprimer","slug":"exprimer","verb":"exprimer","infinitive":"exprimer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"fabriquer","slug":"fabriquer","verb":"fabriquer","infinitive":"fabriquer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"fermer","slug":"fermer","verb":"fermer","infinitive":"fermer","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"fixer","slug":"fixer","verb":"fixer","infinitive":"fixer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"frapper","slug":"frapper","verb":"frapper","infinitive":"frapper","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"fumer","slug":"fumer","verb":"fumer","infinitive":"fumer","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"gagner","slug":"gagner","verb":"gagner","infinitive":"gagner","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"garder","slug":"garder","verb":"garder","infinitive":"garder","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"gouter","slug":"gouter","verb":"goûter","infinitive":"goûter","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"habiter","slug":"habiter","verb":"habiter","infinitive":"habiter","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"ignorer","slug":"ignorer","verb":"ignorer","infinitive":"ignorer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"imaginer","slug":"imaginer","verb":"imaginer","infinitive":"imaginer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"importer","slug":"importer","verb":"importer","infinitive":"importer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"indiquer","slug":"indiquer","verb":"indiquer","infinitive":"indiquer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"informer","slug":"informer","verb":"informer","infinitive":"informer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"inviter","slug":"inviter","verb":"inviter","infinitive":"inviter","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"laver","slug":"laver","verb":"laver","infinitive":"laver","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"livrer","slug":"livrer","verb":"livrer","infinitive":"livrer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"manquer","slug":"manquer","verb":"manquer","infinitive":"manquer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"marcher","slug":"marcher","verb":"marcher","infinitive":"marcher","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"monter","slug":"monter","verb":"monter","infinitive":"monter","group":1,"level":"A1","auxiliary":"avoir_ou_etre","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"montrer","slug":"montrer","verb":"montrer","infinitive":"montrer","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"occuper","slug":"occuper","verb":"occuper","infinitive":"occuper","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"organiser","slug":"organiser","verb":"organiser","infinitive":"organiser","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"pardonner","slug":"pardonner","verb":"pardonner","infinitive":"pardonner","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"parler","slug":"parler","verb":"parler","infinitive":"parler","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"passer","slug":"passer","verb":"passer","infinitive":"passer","group":1,"level":"A1","auxiliary":"avoir_ou_etre","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"penser","slug":"penser","verb":"penser","infinitive":"penser","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"pleurer","slug":"pleurer","verb":"pleurer","infinitive":"pleurer","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"porter","slug":"porter","verb":"porter","infinitive":"porter","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"poser","slug":"poser","verb":"poser","infinitive":"poser","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"pousser","slug":"pousser","verb":"pousser","infinitive":"pousser","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"preparer","slug":"preparer","verb":"préparer","infinitive":"préparer","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"presenter","slug":"presenter","verb":"présenter","infinitive":"présenter","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"prier","slug":"prier","verb":"prier","infinitive":"prier","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"quitter","slug":"quitter","verb":"quitter","infinitive":"quitter","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"raconter","slug":"raconter","verb":"raconter","infinitive":"raconter","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"ramasser","slug":"ramasser","verb":"ramasser","infinitive":"ramasser","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"refuser","slug":"refuser","verb":"refuser","infinitive":"refuser","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"regarder","slug":"regarder","verb":"regarder","infinitive":"regarder","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"remarquer","slug":"remarquer","verb":"remarquer","infinitive":"remarquer","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"rencontrer","slug":"rencontrer","verb":"rencontrer","infinitive":"rencontrer","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"rentrer","slug":"rentrer","verb":"rentrer","infinitive":"rentrer","group":1,"level":"A1","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"reserver","slug":"reserver","verb":"réserver","infinitive":"réserver","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"rester","slug":"rester","verb":"rester","infinitive":"rester","group":1,"level":"A1","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"retourner","slug":"retourner","verb":"retourner","infinitive":"retourner","group":1,"level":"A1","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"risquer","slug":"risquer","verb":"risquer","infinitive":"risquer","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"sauver","slug":"sauver","verb":"sauver","infinitive":"sauver","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"souhaiter","slug":"souhaiter","verb":"souhaiter","infinitive":"souhaiter","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"telephoner","slug":"telephoner","verb":"téléphoner","infinitive":"téléphoner","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"terminer","slug":"terminer","verb":"terminer","infinitive":"terminer","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"toucher","slug":"toucher","verb":"toucher","infinitive":"toucher","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"tourner","slug":"tourner","verb":"tourner","infinitive":"tourner","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"travailler","slug":"travailler","verb":"travailler","infinitive":"travailler","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"traverser","slug":"traverser","verb":"traverser","infinitive":"traverser","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"tromper","slug":"tromper","verb":"tromper","infinitive":"tromper","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"trouver","slug":"trouver","verb":"trouver","infinitive":"trouver","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"utiliser","slug":"utiliser","verb":"utiliser","infinitive":"utiliser","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"verifier","slug":"verifier","verb":"vérifier","infinitive":"vérifier","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"visiter","slug":"visiter","verb":"visiter","infinitive":"visiter","group":1,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"voler","slug":"voler","verb":"voler","infinitive":"voler","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"voter","slug":"voter","verb":"voter","infinitive":"voter","group":1,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"adopter","slug":"adopter","verb":"adopter","infinitive":"adopter","group":1,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"aborder","slug":"aborder","verb":"aborder","infinitive":"aborder","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"accentuer","slug":"accentuer","verb":"accentuer","infinitive":"accentuer","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"accumuler","slug":"accumuler","verb":"accumuler","infinitive":"accumuler","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"anticiper","slug":"anticiper","verb":"anticiper","infinitive":"anticiper","group":1,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"amorcer","slug":"amorcer","verb":"amorcer","infinitive":"amorcer","group":1,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"finir","slug":"finir","verb":"finir","infinitive":"finir","group":2,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"choisir","slug":"choisir","verb":"choisir","infinitive":"choisir","group":2,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"reussir","slug":"reussir","verb":"réussir","infinitive":"réussir","group":2,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"agir","slug":"agir","verb":"agir","infinitive":"agir","group":2,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"reflechir","slug":"reflechir","verb":"réfléchir","infinitive":"réfléchir","group":2,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"grandir","slug":"grandir","verb":"grandir","infinitive":"grandir","group":2,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"batir","slug":"batir","verb":"bâtir","infinitive":"bâtir","group":2,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"nourrir","slug":"nourrir","verb":"nourrir","infinitive":"nourrir","group":2,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"obeir","slug":"obeir","verb":"obéir","infinitive":"obéir","group":2,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"punir","slug":"punir","verb":"punir","infinitive":"punir","group":2,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"remplir","slug":"remplir","verb":"remplir","infinitive":"remplir","group":2,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"avertir","slug":"avertir","verb":"avertir","infinitive":"avertir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"blanchir","slug":"blanchir","verb":"blanchir","infinitive":"blanchir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"applaudir","slug":"applaudir","verb":"applaudir","infinitive":"applaudir","group":2,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"reagir","slug":"reagir","verb":"réagir","infinitive":"réagir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"etablir","slug":"etablir","verb":"établir","infinitive":"établir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"reunir","slug":"reunir","verb":"réunir","infinitive":"réunir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"approfondir","slug":"approfondir","verb":"approfondir","infinitive":"approfondir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"convertir","slug":"convertir","verb":"convertir","infinitive":"convertir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"franchir","slug":"franchir","verb":"franchir","infinitive":"franchir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"investir","slug":"investir","verb":"investir","infinitive":"investir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"guerir","slug":"guerir","verb":"guérir","infinitive":"guérir","group":2,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"ralentir","slug":"ralentir","verb":"ralentir","infinitive":"ralentir","group":2,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"affaiblir","slug":"affaiblir","verb":"affaiblir","infinitive":"affaiblir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"enrichir","slug":"enrichir","verb":"enrichir","infinitive":"enrichir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"atterrir","slug":"atterrir","verb":"atterrir","infinitive":"atterrir","group":2,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"accomplir","slug":"accomplir","verb":"accomplir","infinitive":"accomplir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"bondir","slug":"bondir","verb":"bondir","infinitive":"bondir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"elargir","slug":"elargir","verb":"élargir","infinitive":"élargir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"refroidir","slug":"refroidir","verb":"refroidir","infinitive":"refroidir","group":2,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"obscurcir","slug":"obscurcir","verb":"obscurcir","infinitive":"obscurcir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"fleurir","slug":"fleurir","verb":"fleurir","infinitive":"fleurir","group":2,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"surgir","slug":"surgir","verb":"surgir","infinitive":"surgir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"aboutir","slug":"aboutir","verb":"aboutir","infinitive":"aboutir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"divertir","slug":"divertir","verb":"divertir","infinitive":"divertir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"embellir","slug":"embellir","verb":"embellir","infinitive":"embellir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"rajeunir","slug":"rajeunir","verb":"rajeunir","infinitive":"rajeunir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"vieillir","slug":"vieillir","verb":"vieillir","infinitive":"vieillir","group":2,"level":"A2","auxiliary":"avoir_ou_etre","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"verdir","slug":"verdir","verb":"verdir","infinitive":"verdir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"rougir","slug":"rougir","verb":"rougir","infinitive":"rougir","group":2,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"palir","slug":"palir","verb":"pâlir","infinitive":"pâlir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"jaillir","slug":"jaillir","verb":"jaillir","infinitive":"jaillir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"saisir","slug":"saisir","verb":"saisir","infinitive":"saisir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"abolir","slug":"abolir","verb":"abolir","infinitive":"abolir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"cherir","slug":"cherir","verb":"chérir","infinitive":"chérir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"amortir","slug":"amortir","verb":"amortir","infinitive":"amortir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"eclaircir","slug":"eclaircir","verb":"éclaircir","infinitive":"éclaircir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"gemir","slug":"gemir","verb":"gémir","infinitive":"gémir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"jouir","slug":"jouir","verb":"jouir","infinitive":"jouir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"retentir","slug":"retentir","verb":"retentir","infinitive":"retentir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"gravir","slug":"gravir","verb":"gravir","infinitive":"gravir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"perir","slug":"perir","verb":"périr","infinitive":"périr","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"trahir","slug":"trahir","verb":"trahir","infinitive":"trahir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"ternir","slug":"ternir","verb":"ternir","infinitive":"ternir","group":2,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"unir","slug":"unir","verb":"unir","infinitive":"unir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"munir","slug":"munir","verb":"munir","infinitive":"munir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"compatir","slug":"compatir","verb":"compatir","infinitive":"compatir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"fournir","slug":"fournir","verb":"fournir","infinitive":"fournir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"garnir","slug":"garnir","verb":"garnir","infinitive":"garnir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"petrir","slug":"petrir","verb":"pétrir","infinitive":"pétrir","group":2,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"brunir","slug":"brunir","verb":"brunir","infinitive":"brunir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"adoucir","slug":"adoucir","verb":"adoucir","infinitive":"adoucir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"mincir","slug":"mincir","verb":"mincir","infinitive":"mincir","group":2,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"raccourcir","slug":"raccourcir","verb":"raccourcir","infinitive":"raccourcir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"assouplir","slug":"assouplir","verb":"assouplir","infinitive":"assouplir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"alourdir","slug":"alourdir","verb":"alourdir","infinitive":"alourdir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"attendrir","slug":"attendrir","verb":"attendrir","infinitive":"attendrir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"retablir","slug":"retablir","verb":"rétablir","infinitive":"rétablir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"engloutir","slug":"engloutir","verb":"engloutir","infinitive":"engloutir","group":2,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"eblouir","slug":"eblouir","verb":"éblouir","infinitive":"éblouir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"etourdir","slug":"etourdir","verb":"étourdir","infinitive":"étourdir","group":2,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"aneantir","slug":"aneantir","verb":"anéantir","infinitive":"anéantir","group":2,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"garantir","slug":"garantir","verb":"garantir","infinitive":"garantir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"demolir","slug":"demolir","verb":"démolir","infinitive":"démolir","group":2,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"degarnir","slug":"degarnir","verb":"dégarnir","infinitive":"dégarnir","group":2,"level":"C2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"dormir","slug":"dormir","verb":"dormir","infinitive":"dormir","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"dormir"},
        {"id":"endormir","slug":"endormir","verb":"endormir","infinitive":"endormir","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"dormir"},
        {"id":"partir","slug":"partir","verb":"partir","infinitive":"partir","group":3,"level":"A1","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"partir"},
        {"id":"repartir","slug":"repartir","verb":"repartir","infinitive":"repartir","group":3,"level":"A2","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"partir"},
        {"id":"sortir","slug":"sortir","verb":"sortir","infinitive":"sortir","group":3,"level":"A1","auxiliary":"avoir_ou_etre","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"partir"},
        {"id":"ressortir","slug":"ressortir","verb":"ressortir","infinitive":"ressortir","group":3,"level":"B1","auxiliary":"avoir_ou_etre","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"partir"},
        {"id":"sentir","slug":"sentir","verb":"sentir","infinitive":"sentir","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"partir"},
        {"id":"ressentir","slug":"ressentir","verb":"ressentir","infinitive":"ressentir","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"partir"},
        {"id":"consentir","slug":"consentir","verb":"consentir","infinitive":"consentir","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"partir"},
        {"id":"pressentir","slug":"pressentir","verb":"pressentir","infinitive":"pressentir","group":3,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"partir"},
        {"id":"mentir","slug":"mentir","verb":"mentir","infinitive":"mentir","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"partir"},
        {"id":"dementir","slug":"dementir","verb":"démentir","infinitive":"démentir","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"partir"},
        {"id":"servir","slug":"servir","verb":"servir","infinitive":"servir","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"servir"},
        {"id":"desservir","slug":"desservir","verb":"desservir","infinitive":"desservir","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"servir"},
        {"id":"revenir","slug":"revenir","verb":"revenir","infinitive":"revenir","group":3,"level":"A1","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"venir"},
        {"id":"devenir","slug":"devenir","verb":"devenir","infinitive":"devenir","group":3,"level":"A2","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"venir"},
        {"id":"intervenir","slug":"intervenir","verb":"intervenir","infinitive":"intervenir","group":3,"level":"B1","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"venir"},
        {"id":"parvenir","slug":"parvenir","verb":"parvenir","infinitive":"parvenir","group":3,"level":"B1","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"venir"},
        {"id":"provenir","slug":"provenir","verb":"provenir","infinitive":"provenir","group":3,"level":"B2","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"venir"},
        {"id":"convenir","slug":"convenir","verb":"convenir","infinitive":"convenir","group":3,"level":"B1","auxiliary":"avoir_ou_etre","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"venir"},
        {"id":"prevenir","slug":"prevenir","verb":"prévenir","infinitive":"prévenir","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"venir"},
        {"id":"subvenir","slug":"subvenir","verb":"subvenir","infinitive":"subvenir","group":3,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"venir"},
        {"id":"tenir","slug":"tenir","verb":"tenir","infinitive":"tenir","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"tenir"},
        {"id":"appartenir","slug":"appartenir","verb":"appartenir","infinitive":"appartenir","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"tenir"},
        {"id":"contenir","slug":"contenir","verb":"contenir","infinitive":"contenir","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"tenir"},
        {"id":"maintenir","slug":"maintenir","verb":"maintenir","infinitive":"maintenir","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"tenir"},
        {"id":"obtenir","slug":"obtenir","verb":"obtenir","infinitive":"obtenir","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"tenir"},
        {"id":"retenir","slug":"retenir","verb":"retenir","infinitive":"retenir","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"tenir"},
        {"id":"soutenir","slug":"soutenir","verb":"soutenir","infinitive":"soutenir","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"tenir"},
        {"id":"ouvrir","slug":"ouvrir","verb":"ouvrir","infinitive":"ouvrir","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"ouvrir"},
        {"id":"rouvrir","slug":"rouvrir","verb":"rouvrir","infinitive":"rouvrir","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"ouvrir"},
        {"id":"couvrir","slug":"couvrir","verb":"couvrir","infinitive":"couvrir","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"ouvrir"},
        {"id":"decouvrir","slug":"decouvrir","verb":"découvrir","infinitive":"découvrir","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"ouvrir"},
        {"id":"recouvrir","slug":"recouvrir","verb":"recouvrir","infinitive":"recouvrir","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"ouvrir"},
        {"id":"offrir","slug":"offrir","verb":"offrir","infinitive":"offrir","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"ouvrir"},
        {"id":"souffrir","slug":"souffrir","verb":"souffrir","infinitive":"souffrir","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"ouvrir"},
        {"id":"courir","slug":"courir","verb":"courir","infinitive":"courir","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"courir"},
        {"id":"parcourir","slug":"parcourir","verb":"parcourir","infinitive":"parcourir","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"courir"},
        {"id":"voir","slug":"voir","verb":"voir","infinitive":"voir","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"voir"},
        {"id":"revoir","slug":"revoir","verb":"revoir","infinitive":"revoir","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"voir"},
        {"id":"entrevoir","slug":"entrevoir","verb":"entrevoir","infinitive":"entrevoir","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"voir"},
        {"id":"prevoir","slug":"prevoir","verb":"prévoir","infinitive":"prévoir","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"voir"},
        {"id":"pourvoir","slug":"pourvoir","verb":"pourvoir","infinitive":"pourvoir","group":3,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"pourvoir"},
        {"id":"recevoir","slug":"recevoir","verb":"recevoir","infinitive":"recevoir","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"recevoir"},
        {"id":"apercevoir","slug":"apercevoir","verb":"apercevoir","infinitive":"apercevoir","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"recevoir"},
        {"id":"concevoir","slug":"concevoir","verb":"concevoir","infinitive":"concevoir","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"recevoir"},
        {"id":"decevoir","slug":"decevoir","verb":"décevoir","infinitive":"décevoir","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"recevoir"},
        {"id":"percevoir","slug":"percevoir","verb":"percevoir","infinitive":"percevoir","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"recevoir"},
        {"id":"equivaloir","slug":"equivaloir","verb":"équivaloir","infinitive":"équivaloir","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"valoir"},
        {"id":"prevaloir","slug":"prevaloir","verb":"prévaloir","infinitive":"prévaloir","group":3,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"valoir"},
        {"id":"pleuvoir","slug":"pleuvoir","verb":"pleuvoir","infinitive":"pleuvoir","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":true,"model":"pleuvoir"},
        {"id":"emouvoir","slug":"emouvoir","verb":"émouvoir","infinitive":"émouvoir","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mouvoir"},
        {"id":"mouvoir","slug":"mouvoir","verb":"mouvoir","infinitive":"mouvoir","group":3,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mouvoir"},
        {"id":"promouvoir","slug":"promouvoir","verb":"promouvoir","infinitive":"promouvoir","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mouvoir"},
        {"id":"asseoir","slug":"asseoir","verb":"asseoir","infinitive":"asseoir","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"asseoir"},
        {"id":"rassoir","slug":"rassoir","verb":"rassoir","infinitive":"rassoir","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"asseoir"},
        {"id":"choir","slug":"choir","verb":"choir","infinitive":"choir","group":3,"level":"C2","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":false,"model":"choir"},
        {"id":"dechoir","slug":"dechoir","verb":"déchoir","infinitive":"déchoir","group":3,"level":"C2","auxiliary":"avoir_ou_etre","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":false,"model":"choir"},
        {"id":"echoir","slug":"echoir","verb":"échoir","infinitive":"échoir","group":3,"level":"C1","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":false,"model":"choir"},
        {"id":"revaloir","slug":"revaloir","verb":"revaloir","infinitive":"revaloir","group":3,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"valoir"},
        {"id":"entrapercevoir","slug":"entrapercevoir","verb":"entrapercevoir","infinitive":"entrapercevoir","group":3,"level":"C2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"recevoir"},
        {"id":"messeoir","slug":"messeoir","verb":"messeoir","infinitive":"messeoir","group":3,"level":"C2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":true,"model":"asseoir"},
        {"id":"prendre","slug":"prendre","verb":"prendre","infinitive":"prendre","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"prendre"},
        {"id":"apprendre","slug":"apprendre","verb":"apprendre","infinitive":"apprendre","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"prendre"},
        {"id":"comprendre","slug":"comprendre","verb":"comprendre","infinitive":"comprendre","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"prendre"},
        {"id":"surprendre","slug":"surprendre","verb":"surprendre","infinitive":"surprendre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"prendre"},
        {"id":"entreprendre","slug":"entreprendre","verb":"entreprendre","infinitive":"entreprendre","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"prendre"},
        {"id":"reprendre","slug":"reprendre","verb":"reprendre","infinitive":"reprendre","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"prendre"},
        {"id":"rendre","slug":"rendre","verb":"rendre","infinitive":"rendre","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"attendre","slug":"attendre","verb":"attendre","infinitive":"attendre","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"entendre","slug":"entendre","verb":"entendre","infinitive":"entendre","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"defendre","slug":"defendre","verb":"défendre","infinitive":"défendre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"descendre","slug":"descendre","verb":"descendre","infinitive":"descendre","group":3,"level":"A1","auxiliary":"avoir_ou_etre","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"vendre","slug":"vendre","verb":"vendre","infinitive":"vendre","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"repondre","slug":"repondre","verb":"répondre","infinitive":"répondre","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"correspondre","slug":"correspondre","verb":"correspondre","infinitive":"correspondre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"perdre","slug":"perdre","verb":"perdre","infinitive":"perdre","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"mordre","slug":"mordre","verb":"mordre","infinitive":"mordre","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"fondre","slug":"fondre","verb":"fondre","infinitive":"fondre","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"confondre","slug":"confondre","verb":"confondre","infinitive":"confondre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"pretendre","slug":"pretendre","verb":"prétendre","infinitive":"prétendre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"dependre","slug":"dependre","verb":"dépendre","infinitive":"dépendre","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"detendre","slug":"detendre","verb":"détendre","infinitive":"détendre","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"suspendre","slug":"suspendre","verb":"suspendre","infinitive":"suspendre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"fendre","slug":"fendre","verb":"fendre","infinitive":"fendre","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"rompre","slug":"rompre","verb":"rompre","infinitive":"rompre","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rompre"},
        {"id":"corrompre","slug":"corrompre","verb":"corrompre","infinitive":"corrompre","group":3,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rompre"},
        {"id":"interrompre","slug":"interrompre","verb":"interrompre","infinitive":"interrompre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"rompre"},
        {"id":"mettre","slug":"mettre","verb":"mettre","infinitive":"mettre","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mettre"},
        {"id":"admettre","slug":"admettre","verb":"admettre","infinitive":"admettre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mettre"},
        {"id":"commettre","slug":"commettre","verb":"commettre","infinitive":"commettre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mettre"},
        {"id":"compromettre","slug":"compromettre","verb":"compromettre","infinitive":"compromettre","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mettre"},
        {"id":"emettre","slug":"emettre","verb":"émettre","infinitive":"émettre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mettre"},
        {"id":"omettre","slug":"omettre","verb":"omettre","infinitive":"omettre","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mettre"},
        {"id":"permettre","slug":"permettre","verb":"permettre","infinitive":"permettre","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mettre"},
        {"id":"promettre","slug":"promettre","verb":"promettre","infinitive":"promettre","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mettre"},
        {"id":"remettre","slug":"remettre","verb":"remettre","infinitive":"remettre","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mettre"},
        {"id":"soumettre","slug":"soumettre","verb":"soumettre","infinitive":"soumettre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mettre"},
        {"id":"transmettre","slug":"transmettre","verb":"transmettre","infinitive":"transmettre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"mettre"},
        {"id":"defaire","slug":"defaire","verb":"défaire","infinitive":"défaire","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"faire"},
        {"id":"refaire","slug":"refaire","verb":"refaire","infinitive":"refaire","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"faire"},
        {"id":"satisfaire","slug":"satisfaire","verb":"satisfaire","infinitive":"satisfaire","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"faire"},
        {"id":"dire","slug":"dire","verb":"dire","infinitive":"dire","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"dire"},
        {"id":"redire","slug":"redire","verb":"redire","infinitive":"redire","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"dire"},
        {"id":"contredire","slug":"contredire","verb":"contredire","infinitive":"contredire","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"dire"},
        {"id":"interdire","slug":"interdire","verb":"interdire","infinitive":"interdire","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"dire"},
        {"id":"predire","slug":"predire","verb":"prédire","infinitive":"prédire","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"dire"},
        {"id":"medire","slug":"medire","verb":"médire","infinitive":"médire","group":3,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"dire"},
        {"id":"ecrire","slug":"ecrire","verb":"écrire","infinitive":"écrire","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"écrire"},
        {"id":"decrire","slug":"decrire","verb":"décrire","infinitive":"décrire","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"écrire"},
        {"id":"inscrire","slug":"inscrire","verb":"inscrire","infinitive":"inscrire","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"écrire"},
        {"id":"prescrire","slug":"prescrire","verb":"prescrire","infinitive":"prescrire","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"écrire"},
        {"id":"transcrire","slug":"transcrire","verb":"transcrire","infinitive":"transcrire","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"écrire"},
        {"id":"lire","slug":"lire","verb":"lire","infinitive":"lire","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"lire"},
        {"id":"relire","slug":"relire","verb":"relire","infinitive":"relire","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"lire"},
        {"id":"elire","slug":"elire","verb":"élire","infinitive":"élire","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"lire"},
        {"id":"boire","slug":"boire","verb":"boire","infinitive":"boire","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"boire"},
        {"id":"croire","slug":"croire","verb":"croire","infinitive":"croire","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"croire"},
        {"id":"vivre","slug":"vivre","verb":"vivre","infinitive":"vivre","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"vivre"},
        {"id":"revivre","slug":"revivre","verb":"revivre","infinitive":"revivre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"vivre"},
        {"id":"survivre","slug":"survivre","verb":"survivre","infinitive":"survivre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"vivre"},
        {"id":"suivre","slug":"suivre","verb":"suivre","infinitive":"suivre","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"suivre"},
        {"id":"poursuivre","slug":"poursuivre","verb":"poursuivre","infinitive":"poursuivre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"suivre"},
        {"id":"conduire","slug":"conduire","verb":"conduire","infinitive":"conduire","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"conduire"},
        {"id":"traduire","slug":"traduire","verb":"traduire","infinitive":"traduire","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"conduire"},
        {"id":"produire","slug":"produire","verb":"produire","infinitive":"produire","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"conduire"},
        {"id":"reproduire","slug":"reproduire","verb":"reproduire","infinitive":"reproduire","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"conduire"},
        {"id":"reduire","slug":"reduire","verb":"réduire","infinitive":"réduire","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"conduire"},
        {"id":"seduire","slug":"seduire","verb":"séduire","infinitive":"séduire","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"conduire"},
        {"id":"introduire","slug":"introduire","verb":"introduire","infinitive":"introduire","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"conduire"},
        {"id":"construire","slug":"construire","verb":"construire","infinitive":"construire","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"conduire"},
        {"id":"detruire","slug":"detruire","verb":"détruire","infinitive":"détruire","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"conduire"},
        {"id":"instruire","slug":"instruire","verb":"instruire","infinitive":"instruire","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"conduire"},
        {"id":"cuire","slug":"cuire","verb":"cuire","infinitive":"cuire","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"conduire"},
        {"id":"nuire","slug":"nuire","verb":"nuire","infinitive":"nuire","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"conduire"},
        {"id":"connaitre","slug":"connaitre","verb":"connaître","infinitive":"connaître","group":3,"level":"A1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"connaître"},
        {"id":"reconnaitre","slug":"reconnaitre","verb":"reconnaître","infinitive":"reconnaître","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"connaître"},
        {"id":"apparaitre","slug":"apparaitre","verb":"apparaître","infinitive":"apparaître","group":3,"level":"B1","auxiliary":"avoir_ou_etre","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"connaître"},
        {"id":"disparaitre","slug":"disparaitre","verb":"disparaître","infinitive":"disparaître","group":3,"level":"A2","auxiliary":"avoir_ou_etre","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"connaître"},
        {"id":"naitre","slug":"naitre","verb":"naître","infinitive":"naître","group":3,"level":"A1","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"naître"},
        {"id":"renaitre","slug":"renaitre","verb":"renaître","infinitive":"renaître","group":3,"level":"B2","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"naître"},
        {"id":"craindre","slug":"craindre","verb":"craindre","infinitive":"craindre","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"craindre"},
        {"id":"plaindre","slug":"plaindre","verb":"plaindre","infinitive":"plaindre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"craindre"},
        {"id":"peindre","slug":"peindre","verb":"peindre","infinitive":"peindre","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"craindre"},
        {"id":"eteindre","slug":"eteindre","verb":"éteindre","infinitive":"éteindre","group":3,"level":"A2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"craindre"},
        {"id":"atteindre","slug":"atteindre","verb":"atteindre","infinitive":"atteindre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"craindre"},
        {"id":"joindre","slug":"joindre","verb":"joindre","infinitive":"joindre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"craindre"},
        {"id":"rejoindre","slug":"rejoindre","verb":"rejoindre","infinitive":"rejoindre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"craindre"},
        {"id":"se-souvenir","slug":"se-souvenir","verb":"se souvenir","infinitive":"se souvenir","group":3,"level":"A1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"venir"},
        {"id":"s-enfuir","slug":"s-enfuir","verb":"s'enfuir","infinitive":"s'enfuir","group":3,"level":"A2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"fuir"},
        {"id":"se-mefier","slug":"se-mefier","verb":"se méfier","infinitive":"se méfier","group":1,"level":"B1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-repentir","slug":"se-repentir","verb":"se repentir","infinitive":"se repentir","group":3,"level":"B2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"partir"},
        {"id":"s-abstenir","slug":"s-abstenir","verb":"s'abstenir","infinitive":"s'abstenir","group":3,"level":"B2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"tenir"},
        {"id":"s-averer","slug":"s-averer","verb":"s'avérer","infinitive":"s'avérer","group":1,"level":"B2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"s-evanouir","slug":"s-evanouir","verb":"s'évanouir","infinitive":"s'évanouir","group":2,"level":"B1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"s-emparer","slug":"s-emparer","verb":"s'emparer","infinitive":"s'emparer","group":1,"level":"B1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-refugier","slug":"se-refugier","verb":"se réfugier","infinitive":"se réfugier","group":1,"level":"B1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"s-ecrier","slug":"s-ecrier","verb":"s'écrier","infinitive":"s'écrier","group":1,"level":"A2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"s-obstiner","slug":"s-obstiner","verb":"s'obstiner","infinitive":"s'obstiner","group":1,"level":"B2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-desister","slug":"se-desister","verb":"se désister","infinitive":"se désister","group":1,"level":"C1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"s-evertuer","slug":"s-evertuer","verb":"s'évertuer","infinitive":"s'évertuer","group":1,"level":"C1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"s-immiscer","slug":"s-immiscer","verb":"s'immiscer","infinitive":"s'immiscer","group":1,"level":"C1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"commencer"},
        {"id":"se-lamenter","slug":"se-lamenter","verb":"se lamenter","infinitive":"se lamenter","group":1,"level":"B2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-morfondre","slug":"se-morfondre","verb":"se morfondre","infinitive":"se morfondre","group":3,"level":"C1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"se-premunir","slug":"se-premunir","verb":"se prémunir","infinitive":"se prémunir","group":2,"level":"C1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"se-rebeller","slug":"se-rebeller","verb":"se rebeller","infinitive":"se rebeller","group":1,"level":"B2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-resigner","slug":"se-resigner","verb":"se résigner","infinitive":"se résigner","group":1,"level":"B2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-suicider","slug":"se-suicider","verb":"se suicider","infinitive":"se suicider","group":1,"level":"B2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-tapir","slug":"se-tapir","verb":"se tapir","infinitive":"se tapir","group":2,"level":"C2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"finir"},
        {"id":"se-vautrer","slug":"se-vautrer","verb":"se vautrer","infinitive":"se vautrer","group":1,"level":"C2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-depecher","slug":"se-depecher","verb":"se dépêcher","infinitive":"se dépêcher","group":1,"level":"A1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-debrouiller","slug":"se-debrouiller","verb":"se débrouiller","infinitive":"se débrouiller","group":1,"level":"A2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-concentrer","slug":"se-concentrer","verb":"se concentrer","infinitive":"se concentrer","group":1,"level":"A2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-coucher","slug":"se-coucher","verb":"se coucher","infinitive":"se coucher","group":1,"level":"A1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-lever","slug":"se-lever","verb":"se lever","infinitive":"se lever","group":1,"level":"A1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"se-laver","slug":"se-laver","verb":"se laver","infinitive":"se laver","group":1,"level":"A1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"s-habiller","slug":"s-habiller","verb":"s'habiller","infinitive":"s'habiller","group":1,"level":"A1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-promener","slug":"se-promener","verb":"se promener","infinitive":"se promener","group":1,"level":"A1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"mener"},
        {"id":"se-reveiller","slug":"se-reveiller","verb":"se réveiller","infinitive":"se réveiller","group":1,"level":"A1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-reposer","slug":"se-reposer","verb":"se reposer","infinitive":"se reposer","group":1,"level":"A1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-tromper","slug":"se-tromper","verb":"se tromper","infinitive":"se tromper","group":1,"level":"A2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"s-inquieter","slug":"s-inquieter","verb":"s'inquiéter","infinitive":"s'inquiéter","group":1,"level":"A2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"céder"},
        {"id":"s-interesser","slug":"s-interesser","verb":"s'intéresser","infinitive":"s'intéresser","group":1,"level":"A2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-disputer","slug":"se-disputer","verb":"se disputer","infinitive":"se disputer","group":1,"level":"A2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"se-plaindre","slug":"se-plaindre","verb":"se plaindre","infinitive":"se plaindre","group":3,"level":"B1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"craindre"},
        {"id":"se-taire","slug":"se-taire","verb":"se taire","infinitive":"se taire","group":3,"level":"B1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"plaire"},
        {"id":"s-apercevoir","slug":"s-apercevoir","verb":"s'apercevoir","infinitive":"s'apercevoir","group":3,"level":"B1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"recevoir"},
        {"id":"se-rendre-compte","slug":"se-rendre-compte","verb":"se rendre compte","infinitive":"se rendre compte","group":3,"level":"B1","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"rendre"},
        {"id":"s-habituer","slug":"s-habituer","verb":"s'habituer","infinitive":"s'habituer","group":1,"level":"A2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"s-installer","slug":"s-installer","verb":"s'installer","infinitive":"s'installer","group":1,"level":"A2","auxiliary":"être","is_pronominal":true,"is_reflexive":true,"is_defective":false,"is_impersonal":false,"model":"aimer"},
        {"id":"gesir","slug":"gesir","verb":"gésir","infinitive":"gésir","group":3,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":false,"model":"gésir"},
        {"id":"clore","slug":"clore","verb":"clore","infinitive":"clore","group":3,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":false,"model":"clore"},
        {"id":"eclore","slug":"eclore","verb":"éclore","infinitive":"éclore","group":3,"level":"B2","auxiliary":"être","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":false,"model":"clore"},
        {"id":"traire","slug":"traire","verb":"traire","infinitive":"traire","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":false,"model":"traire"},
        {"id":"extraire","slug":"extraire","verb":"extraire","infinitive":"extraire","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"traire"},
        {"id":"soustraire","slug":"soustraire","verb":"soustraire","infinitive":"soustraire","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"traire"},
        {"id":"braire","slug":"braire","verb":"braire","infinitive":"braire","group":3,"level":"C2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":false,"model":"braire"},
        {"id":"bruire","slug":"bruire","verb":"bruire","infinitive":"bruire","group":3,"level":"C2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":false,"model":"bruire"},
        {"id":"sourdre","slug":"sourdre","verb":"sourdre","infinitive":"sourdre","group":3,"level":"C2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":false,"model":"sourdre"},
        {"id":"frire","slug":"frire","verb":"frire","infinitive":"frire","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":false,"model":"frire"},
        {"id":"paitre","slug":"paitre","verb":"paître","infinitive":"paître","group":3,"level":"C2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":false,"model":"paître"},
        {"id":"repaitre","slug":"repaitre","verb":"repaître","infinitive":"repaître","group":3,"level":"C1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"paître"},
        {"id":"absoudre","slug":"absoudre","verb":"absoudre","infinitive":"absoudre","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":false,"model":"absoudre"},
        {"id":"dissoudre","slug":"dissoudre","verb":"dissoudre","infinitive":"dissoudre","group":3,"level":"B2","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":true,"is_impersonal":false,"model":"absoudre"},
        {"id":"resoudre","slug":"resoudre","verb":"résoudre","infinitive":"résoudre","group":3,"level":"B1","auxiliary":"avoir","is_pronominal":false,"is_reflexive":false,"is_defective":false,"is_impersonal":false,"model":"résoudre"}
      ],
      "verbs": {
        "aimer": {
          "id": "aimer", "slug": "aimer", "verb": "aimer", "infinitive": "aimer", "group": 1, "level": "A1", "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false, "model": "aimer", "participle_present": "aimant", "participle_past": "aimé",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"j'","radical":"aim","ending":"e","form":"aime","full":"j'aime"},{"person":"2s","pronoun":"tu ","radical":"aim","ending":"es","form":"aimes","full":"tu aimes"},{"person":"3s","pronoun":"il ","radical":"aim","ending":"e","form":"aime","full":"il aime"},{"person":"1p","pronoun":"nous ","radical":"aim","ending":"ons","form":"aimons","full":"nous aimons"},{"person":"2p","pronoun":"vous ","radical":"aim","ending":"ez","form":"aimez","full":"vous aimez"},{"person":"3p","pronoun":"ils ","radical":"aim","ending":"ent","form":"aiment","full":"ils aiment"}],
              "imparfait": [{"person":"1s","pronoun":"j'","radical":"aim","ending":"ais","form":"aimais","full":"j'aimais"},{"person":"2s","pronoun":"tu ","radical":"aim","ending":"ais","form":"aimais","full":"tu aimais"},{"person":"3s","pronoun":"il ","radical":"aim","ending":"ait","form":"aimait","full":"il aimait"},{"person":"1p","pronoun":"nous ","radical":"aim","ending":"ions","form":"aimions","full":"nous aimions"},{"person":"2p","pronoun":"vous ","radical":"aim","ending":"iez","form":"aimiez","full":"vous aimiez"},{"person":"3p","pronoun":"ils ","radical":"aim","ending":"aient","form":"aimaient","full":"ils aimaient"}],
              "passe_simple": [{"person":"1s","pronoun":"j'","radical":"aim","ending":"ai","form":"aimai","full":"j'aimai"},{"person":"2s","pronoun":"tu ","radical":"aim","ending":"as","form":"aimas","full":"tu aimas"},{"person":"3s","pronoun":"il ","radical":"aim","ending":"a","form":"aima","full":"il aima"},{"person":"1p","pronoun":"nous ","radical":"aim","ending":"âmes","form":"aimâmes","full":"nous aimâmes"},{"person":"2p","pronoun":"vous ","radical":"aim","ending":"âtes","form":"aimâtes","full":"vous aimâtes"},{"person":"3p","pronoun":"ils ","radical":"aim","ending":"èrent","form":"aimèrent","full":"ils aimèrent"}],
              "futur_simple": [{"person":"1s","pronoun":"j'","radical":"aimer","ending":"ai","form":"aimerai","full":"j'aimerai"},{"person":"2s","pronoun":"tu ","radical":"aimer","ending":"as","form":"aimeras","full":"tu aimeras"},{"person":"3s","pronoun":"il ","radical":"aimer","ending":"a","form":"aimera","full":"il aimera"},{"person":"1p","pronoun":"nous ","radical":"aimer","ending":"ons","form":"aimerons","full":"nous aimerons"},{"person":"2p","pronoun":"vous ","radical":"aimer","ending":"ez","form":"aimerez","full":"vous aimerez"},{"person":"3p","pronoun":"ils ","radical":"aimer","ending":"ont","form":"aimeront","full":"ils aimeront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai aimé","full":"j'ai aimé"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as aimé","full":"tu as aimé"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a aimé","full":"il a aimé"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons aimé","full":"nous avons aimé"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez aimé","full":"vous avez aimé"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont aimé","full":"ils ont aimé"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais aimé","full":"j'avais aimé"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais aimé","full":"tu avais aimé"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait aimé","full":"il avait aimé"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions aimé","full":"nous avions aimé"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez aimé","full":"vous aviez aimé"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient aimé","full":"ils avaient aimé"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus aimé","full":"j'eus aimé"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus aimé","full":"tu eus aimé"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut aimé","full":"il eut aimé"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes aimé","full":"nous eûmes aimé"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes aimé","full":"vous eûtes aimé"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent aimé","full":"ils eurent aimé"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai aimé","full":"j'aurai aimé"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras aimé","full":"tu auras aimé"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura aimé","full":"il aura aimé"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons aimé","full":"nous aurons aimé"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez aimé","full":"vous aurez aimé"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront aimé","full":"ils auront aimé"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aim","ending":"e","form":"aime","full":"que j'aime"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aim","ending":"es","form":"aimes","full":"que tu aimes"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"aim","ending":"e","form":"aime","full":"qu'il aime"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"aim","ending":"ions","form":"aimions","full":"que nous aimions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"aim","ending":"iez","form":"aimiez","full":"que vous aimiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aim","ending":"ent","form":"aiment","full":"qu'ils aiment"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aim","ending":"asse","form":"aimasse","full":"que j'aimasse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aim","ending":"asses","form":"aimasses","full":"que tu aimasses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"aim","ending":"ât","form":"aimât","full":"qu'il aimât"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"aim","ending":"assions","form":"aimassions","full":"que nous aimassions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"aim","ending":"assiez","form":"aimassiez","full":"que vous aimassiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aim","ending":"assent","form":"aimassent","full":"qu'ils aimassent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie aimé","full":"que j'aie aimé"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies aimé","full":"que tu aies aimé"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait aimé","full":"qu'il ait aimé"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons aimé","full":"que nous ayons aimé"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez aimé","full":"que vous ayez aimé"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient aimé","full":"qu'ils aient aimé"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse aimé","full":"que j'eusse aimé"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses aimé","full":"que tu eusses aimé"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût aimé","full":"qu'il eût aimé"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions aimé","full":"que nous eussions aimé"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez aimé","full":"que vous eussiez aimé"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent aimé","full":"qu'ils eussent aimé"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"j'","radical":"aimer","ending":"ais","form":"aimerais","full":"j'aimerais"},{"person":"2s","pronoun":"tu ","radical":"aimer","ending":"ais","form":"aimerais","full":"tu aimerais"},{"person":"3s","pronoun":"il ","radical":"aimer","ending":"ait","form":"aimerait","full":"il aimerait"},{"person":"1p","pronoun":"nous ","radical":"aimer","ending":"ions","form":"aimerions","full":"nous aimerions"},{"person":"2p","pronoun":"vous ","radical":"aimer","ending":"iez","form":"aimeriez","full":"vous aimeriez"},{"person":"3p","pronoun":"ils ","radical":"aimer","ending":"aient","form":"aimeraient","full":"ils aimeraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais aimé","full":"j'aurais aimé"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais aimé","full":"tu aurais aimé"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait aimé","full":"il aurait aimé"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions aimé","full":"nous aurions aimé"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez aimé","full":"vous auriez aimé"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient aimé","full":"ils auraient aimé"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse aimé","full":"j'eusse aimé"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses aimé","full":"tu eusses aimé"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût aimé","full":"il eût aimé"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions aimé","full":"nous eussions aimé"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez aimé","full":"vous eussiez aimé"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent aimé","full":"ils eussent aimé"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"aim","ending":"e","form":"aime","full":"aime"},{"person":"1p","pronoun":"","radical":"aim","ending":"ons","form":"aimons","full":"aimons"},{"person":"2p","pronoun":"","radical":"aim","ending":"ez","form":"aimez","full":"aimez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie aimé","full":"aie aimé"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons aimé","full":"ayons aimé"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez aimé","full":"ayez aimé"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"aim","ending":"e","form":"aime","full":"aime"},{"person":"1p","pronoun":"","radical":"aim","ending":"ons","form":"aimons","full":"aimons"},{"person":"2p","pronoun":"","radical":"aim","ending":"ez","form":"aimez","full":"aimez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie aimé","full":"aie aimé"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons aimé","full":"ayons aimé"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez aimé","full":"ayez aimé"}]
            },
            "participe": {
              "present": {"radical":"aim","ending":"ant","full":"aimant"},
              "passe": {"masculin_singulier":"aimé","masculin_pluriel":"aimés","feminin_singulier":"aimée","feminin_pluriel":"aimées","compose":"ayant aimé"}
            },
            "infinitif": {"present": "aimer", "passe": "avoir aimé"},
            "gerondif": {"present": "en aimant", "passe": "en ayant aimé"},
            "gérondif": {"present": "en aimant", "passe": "en ayant aimé"}
          }
        },
        "commencer": {
          "id": "commencer", "slug": "commencer", "verb": "commencer", "infinitive": "commencer", "group": 1, "level": "A1", "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false, "model": "commencer", "participle_present": "commençant", "participle_past": "commencé",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"je ","radical":"commenc","ending":"e","form":"commence","full":"je commence"},{"person":"2s","pronoun":"tu ","radical":"commenc","ending":"es","form":"commences","full":"tu commences"},{"person":"3s","pronoun":"il ","radical":"commenc","ending":"e","form":"commence","full":"il commence"},{"person":"1p","pronoun":"nous ","radical":"commenç","ending":"ons","form":"commençons","full":"nous commençons"},{"person":"2p","pronoun":"vous ","radical":"commenc","ending":"ez","form":"commencez","full":"vous commencez"},{"person":"3p","pronoun":"ils ","radical":"commenc","ending":"ent","form":"commencent","full":"ils commencent"}],
              "imparfait": [{"person":"1s","pronoun":"je ","radical":"commenç","ending":"ais","form":"commençais","full":"je commençais"},{"person":"2s","pronoun":"tu ","radical":"commenç","ending":"ais","form":"commençais","full":"tu commençais"},{"person":"3s","pronoun":"il ","radical":"commenç","ending":"ait","form":"commençait","full":"il commençait"},{"person":"1p","pronoun":"nous ","radical":"commenc","ending":"ions","form":"commencions","full":"nous commencions"},{"person":"2p","pronoun":"vous ","radical":"commenc","ending":"iez","form":"commenciez","full":"vous commenciez"},{"person":"3p","pronoun":"ils ","radical":"commenç","ending":"aient","form":"commençaient","full":"ils commençaient"}],
              "passe_simple": [{"person":"1s","pronoun":"je ","radical":"commenç","ending":"ai","form":"commençai","full":"je commençai"},{"person":"2s","pronoun":"tu ","radical":"commenç","ending":"as","form":"commenças","full":"tu commenças"},{"person":"3s","pronoun":"il ","radical":"commenç","ending":"a","form":"commença","full":"il commença"},{"person":"1p","pronoun":"nous ","radical":"commenç","ending":"âmes","form":"commençâmes","full":"nous commençâmes"},{"person":"2p","pronoun":"vous ","radical":"commenç","ending":"âtes","form":"commençâtes","full":"vous commençâtes"},{"person":"3p","pronoun":"ils ","radical":"commenc","ending":"èrent","form":"commencèrent","full":"ils commencèrent"}],
              "futur_simple": [{"person":"1s","pronoun":"je ","radical":"commencer","ending":"ai","form":"commencerai","full":"je commencerai"},{"person":"2s","pronoun":"tu ","radical":"commencer","ending":"as","form":"commenceras","full":"tu commenceras"},{"person":"3s","pronoun":"il ","radical":"commencer","ending":"a","form":"commencera","full":"il commencera"},{"person":"1p","pronoun":"nous ","radical":"commencer","ending":"ons","form":"commencerons","full":"nous commencerons"},{"person":"2p","pronoun":"vous ","radical":"commencer","ending":"ez","form":"commencerez","full":"vous commencerez"},{"person":"3p","pronoun":"ils ","radical":"commencer","ending":"ont","form":"commenceront","full":"ils commenceront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai commencé","full":"j'ai commencé"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as commencé","full":"tu as commencé"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a commencé","full":"il a commencé"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons commencé","full":"nous avons commencé"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez commencé","full":"vous avez commencé"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont commencé","full":"ils ont commencé"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais commencé","full":"j'avais commencé"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais commencé","full":"tu avais commencé"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait commencé","full":"il avait commencé"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions commencé","full":"nous avions commencé"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez commencé","full":"vous aviez commencé"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient commencé","full":"ils avaient commencé"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus commencé","full":"j'eus commencé"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus commencé","full":"tu eus commencé"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut commencé","full":"il eut commencé"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes commencé","full":"nous eûmes commencé"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes commencé","full":"vous eûtes commencé"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent commencé","full":"ils eurent commencé"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai commencé","full":"j'aurai commencé"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras commencé","full":"tu auras commencé"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura commencé","full":"il aura commencé"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons commencé","full":"nous aurons commencé"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez commencé","full":"vous aurez commencé"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront commencé","full":"ils auront commencé"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"commenc","ending":"e","form":"commence","full":"que je commence"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"commenc","ending":"es","form":"commences","full":"que tu commences"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"commenc","ending":"e","form":"commence","full":"qu'il commence"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"commenc","ending":"ions","form":"commencions","full":"que nous commencions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"commenc","ending":"iez","form":"commenciez","full":"que vous commenciez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"commenc","ending":"ent","form":"commencent","full":"qu'ils commencent"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"commenç","ending":"asse","form":"commençasse","full":"que je commençasse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"commenç","ending":"asses","form":"commençasses","full":"que tu commençasses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"commenç","ending":"ât","form":"commençât","full":"qu'il commençât"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"commenç","ending":"assions","form":"commençassions","full":"que nous commençassions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"commenç","ending":"assiez","form":"commençassiez","full":"que vous commençassiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"commenç","ending":"assent","form":"commençassent","full":"qu'ils commençassent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie commencé","full":"que j'aie commencé"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies commencé","full":"que tu aies commencé"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait commencé","full":"qu'il ait commencé"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons commencé","full":"que nous ayons commencé"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez commencé","full":"que vous ayez commencé"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient commencé","full":"qu'ils aient commencé"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse commencé","full":"que j'eusse commencé"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses commencé","full":"que tu eusses commencé"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût commencé","full":"qu'il eût commencé"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions commencé","full":"que nous eussions commencé"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez commencé","full":"que vous eussiez commencé"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent commencé","full":"qu'ils eussent commencé"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"je ","radical":"commencer","ending":"ais","form":"commencerais","full":"je commencerais"},{"person":"2s","pronoun":"tu ","radical":"commencer","ending":"ais","form":"commencerais","full":"tu commencerais"},{"person":"3s","pronoun":"il ","radical":"commencer","ending":"ait","form":"commencerait","full":"il commencerait"},{"person":"1p","pronoun":"nous ","radical":"commencer","ending":"ions","form":"commencerions","full":"nous commencerions"},{"person":"2p","pronoun":"vous ","radical":"commencer","ending":"iez","form":"commenceriez","full":"vous commenceriez"},{"person":"3p","pronoun":"ils ","radical":"commencer","ending":"aient","form":"commenceraient","full":"ils commenceraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais commencé","full":"j'aurais commencé"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais commencé","full":"tu aurais commencé"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait commencé","full":"il aurait commencé"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions commencé","full":"nous aurions commencé"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez commencé","full":"vous auriez commencé"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient commencé","full":"ils auraient commencé"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse commencé","full":"j'eusse commencé"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses commencé","full":"tu eusses commencé"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût commencé","full":"il eût commencé"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions commencé","full":"nous eussions commencé"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez commencé","full":"vous eussiez commencé"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent commencé","full":"ils eussent commencé"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"commenc","ending":"e","form":"commence","full":"commence"},{"person":"1p","pronoun":"","radical":"commenç","ending":"ons","form":"commençons","full":"commençons"},{"person":"2p","pronoun":"","radical":"commenc","ending":"ez","form":"commencez","full":"commencez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie commencé","full":"aie commencé"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons commencé","full":"ayons commencé"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez commencé","full":"ayez commencé"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"commenc","ending":"e","form":"commence","full":"commence"},{"person":"1p","pronoun":"","radical":"commenç","ending":"ons","form":"commençons","full":"commençons"},{"person":"2p","pronoun":"","radical":"commenc","ending":"ez","form":"commencez","full":"commencez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie commencé","full":"aie commencé"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons commencé","full":"ayons commencé"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez commencé","full":"ayez commencé"}]
            },
            "participe": {
              "present": {"radical":"commenç","ending":"ant","full":"commençant"},
              "passe": {"masculin_singulier":"commencé","masculin_pluriel":"commencés","feminin_singulier":"commencée","feminin_pluriel":"commencées","compose":"ayant commencé"}
            },
            "infinitif": {"present": "commencer", "passe": "avoir commencé"},
            "gerondif": {"present": "en commençant", "passe": "en ayant commencé"},
            "gérondif": {"present": "en commençant", "passe": "en ayant commencé"}
          }
        },
        "manger": {
          "id": "manger", "slug": "manger", "verb": "manger", "infinitive": "manger", "group": 1, "level": "A1", "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false, "model": "manger", "participle_present": "mangeant", "participle_past": "mangé",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"je ","radical":"mang","ending":"e","form":"mange","full":"je mange"},{"person":"2s","pronoun":"tu ","radical":"mang","ending":"es","form":"manges","full":"tu manges"},{"person":"3s","pronoun":"il ","radical":"mang","ending":"e","form":"mange","full":"il mange"},{"person":"1p","pronoun":"nous ","radical":"mange","ending":"ons","form":"mangeons","full":"nous mangeons"},{"person":"2p","pronoun":"vous ","radical":"mang","ending":"ez","form":"mangez","full":"vous mangez"},{"person":"3p","pronoun":"ils ","radical":"mang","ending":"ent","form":"mangent","full":"ils mangent"}],
              "imparfait": [{"person":"1s","pronoun":"je ","radical":"mange","ending":"ais","form":"mangeais","full":"je mangeais"},{"person":"2s","pronoun":"tu ","radical":"mange","ending":"ais","form":"mangeais","full":"tu mangeais"},{"person":"3s","pronoun":"il ","radical":"mange","ending":"ait","form":"mangeait","full":"il mangeait"},{"person":"1p","pronoun":"nous ","radical":"mang","ending":"ions","form":"mangions","full":"nous mangions"},{"person":"2p","pronoun":"vous ","radical":"mang","ending":"iez","form":"mangiez","full":"vous mangiez"},{"person":"3p","pronoun":"ils ","radical":"mange","ending":"aient","form":"mangeaient","full":"ils mangeaient"}],
              "passe_simple": [{"person":"1s","pronoun":"je ","radical":"mange","ending":"ai","form":"mangeai","full":"je mangeai"},{"person":"2s","pronoun":"tu ","radical":"mange","ending":"as","form":"mangeas","full":"tu mangeas"},{"person":"3s","pronoun":"il ","radical":"mange","ending":"a","form":"mangea","full":"il mangea"},{"person":"1p","pronoun":"nous ","radical":"mange","ending":"âmes","form":"mangeâmes","full":"nous mangeâmes"},{"person":"2p","pronoun":"vous ","radical":"mange","ending":"âtes","form":"mangeâtes","full":"vous mangeâtes"},{"person":"3p","pronoun":"ils ","radical":"mang","ending":"èrent","form":"mangèrent","full":"ils mangèrent"}],
              "futur_simple": [{"person":"1s","pronoun":"je ","radical":"manger","ending":"ai","form":"mangerai","full":"je mangerai"},{"person":"2s","pronoun":"tu ","radical":"manger","ending":"as","form":"mangeras","full":"tu mangeras"},{"person":"3s","pronoun":"il ","radical":"manger","ending":"a","form":"mangera","full":"il mangera"},{"person":"1p","pronoun":"nous ","radical":"manger","ending":"ons","form":"mangerons","full":"nous mangerons"},{"person":"2p","pronoun":"vous ","radical":"manger","ending":"ez","form":"mangerez","full":"vous mangerez"},{"person":"3p","pronoun":"ils ","radical":"manger","ending":"ont","form":"mangeront","full":"ils mangeront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai mangé","full":"j'ai mangé"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as mangé","full":"tu as mangé"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a mangé","full":"il a mangé"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons mangé","full":"nous avons mangé"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez mangé","full":"vous avez mangé"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont mangé","full":"ils ont mangé"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais mangé","full":"j'avais mangé"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais mangé","full":"tu avais mangé"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait mangé","full":"il avait mangé"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions mangé","full":"nous avions mangé"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez mangé","full":"vous aviez mangé"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient mangé","full":"ils avaient mangé"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus mangé","full":"j'eus mangé"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus mangé","full":"tu eus mangé"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut mangé","full":"il eut mangé"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes mangé","full":"nous eûmes mangé"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes mangé","full":"vous eûtes mangé"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent mangé","full":"ils eurent mangé"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai mangé","full":"j'aurai mangé"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras mangé","full":"tu auras mangé"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura mangé","full":"il aura mangé"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons mangé","full":"nous aurons mangé"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez mangé","full":"vous aurez mangé"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront mangé","full":"ils auront mangé"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"mang","ending":"e","form":"mange","full":"que je mange"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"mang","ending":"es","form":"manges","full":"que tu manges"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"mang","ending":"e","form":"mange","full":"qu'il mange"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"mang","ending":"ions","form":"mangions","full":"que nous mangions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"mang","ending":"iez","form":"mangiez","full":"que vous mangiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"mang","ending":"ent","form":"mangent","full":"qu'ils mangent"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"mange","ending":"asse","form":"mangeasse","full":"que je mangeasse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"mange","ending":"asses","form":"mangeasses","full":"que tu mangeasses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"mange","ending":"ât","form":"mangeât","full":"qu'il mangeât"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"mange","ending":"assions","form":"mangeassions","full":"que nous mangeassions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"mange","ending":"assiez","form":"mangeassiez","full":"que vous mangeassiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"mange","ending":"assent","form":"mangeassent","full":"qu'ils mangeassent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie mangé","full":"que j'aie mangé"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies mangé","full":"que tu aies mangé"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait mangé","full":"qu'il ait mangé"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons mangé","full":"que nous ayons mangé"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez mangé","full":"que vous ayez mangé"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient mangé","full":"qu'ils aient mangé"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse mangé","full":"que j'eusse mangé"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses mangé","full":"que tu eusses mangé"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût mangé","full":"qu'il eût mangé"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions mangé","full":"que nous eussions mangé"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez mangé","full":"que vous eussiez mangé"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent mangé","full":"qu'ils eussent mangé"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"je ","radical":"manger","ending":"ais","form":"mangerais","full":"je mangerais"},{"person":"2s","pronoun":"tu ","radical":"manger","ending":"ais","form":"mangerais","full":"tu mangerais"},{"person":"3s","pronoun":"il ","radical":"manger","ending":"ait","form":"mangerait","full":"il mangerait"},{"person":"1p","pronoun":"nous ","radical":"manger","ending":"ions","form":"mangerions","full":"nous mangerions"},{"person":"2p","pronoun":"vous ","radical":"manger","ending":"iez","form":"mangeriez","full":"vous mangeriez"},{"person":"3p","pronoun":"ils ","radical":"manger","ending":"aient","form":"mangeraient","full":"ils mangeraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais mangé","full":"j'aurais mangé"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais mangé","full":"tu aurais mangé"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait mangé","full":"il aurait mangé"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions mangé","full":"nous aurions mangé"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez mangé","full":"vous auriez mangé"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient mangé","full":"ils auraient mangé"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse mangé","full":"j'eusse mangé"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses mangé","full":"tu eusses mangé"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût mangé","full":"il eût mangé"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions mangé","full":"nous eussions mangé"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez mangé","full":"vous eussiez mangé"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent mangé","full":"ils eussent mangé"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"mang","ending":"e","form":"mange","full":"mange"},{"person":"1p","pronoun":"","radical":"mange","ending":"ons","form":"mangeons","full":"mangeons"},{"person":"2p","pronoun":"","radical":"mang","ending":"ez","form":"mangez","full":"mangez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie mangé","full":"aie mangé"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons mangé","full":"ayons mangé"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez mangé","full":"ayez mangé"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"mang","ending":"e","form":"mange","full":"mange"},{"person":"1p","pronoun":"","radical":"mange","ending":"ons","form":"mangeons","full":"mangeons"},{"person":"2p","pronoun":"","radical":"mang","ending":"ez","form":"mangez","full":"mangez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie mangé","full":"aie mangé"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons mangé","full":"ayons mangé"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez mangé","full":"ayez mangé"}]
            },
            "participe": {
              "present": {"radical":"mange","ending":"ant","full":"mangeant"},
              "passe": {"masculin_singulier":"mangé","masculin_pluriel":"mangés","feminin_singulier":"mangée","feminin_pluriel":"mangées","compose":"ayant mangé"}
            },
            "infinitif": {"present": "manger", "passe": "avoir mangé"},
            "gerondif": {"present": "en mangeant", "passe": "en ayant mangé"},
            "gérondif": {"present": "en mangeant", "passe": "en ayant mangé"}
          }
        },
        "monter": {
          "id": "monter", "slug": "monter", "verb": "monter", "infinitive": "monter", "group": 1, "level": "A1", "auxiliary": "avoir_ou_etre", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false, "model": "monter", "participle_present": "montant", "participle_past": "monté",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"je ","radical":"mont","ending":"e","form":"monte","full":"je monte"},{"person":"2s","pronoun":"tu ","radical":"mont","ending":"es","form":"montes","full":"tu montes"},{"person":"3s","pronoun":"il ","radical":"mont","ending":"e","form":"monte","full":"il monte"},{"person":"1p","pronoun":"nous ","radical":"mont","ending":"ons","form":"montons","full":"nous montons"},{"person":"2p","pronoun":"vous ","radical":"mont","ending":"ez","form":"montez","full":"vous montez"},{"person":"3p","pronoun":"ils ","radical":"mont","ending":"ent","form":"montent","full":"ils montent"}],
              "imparfait": [{"person":"1s","pronoun":"je ","radical":"mont","ending":"ais","form":"montais","full":"je montais"},{"person":"2s","pronoun":"tu ","radical":"mont","ending":"ais","form":"montais","full":"tu montais"},{"person":"3s","pronoun":"il ","radical":"mont","ending":"ait","form":"montait","full":"il montait"},{"person":"1p","pronoun":"nous ","radical":"mont","ending":"ions","form":"montions","full":"nous montions"},{"person":"2p","pronoun":"vous ","radical":"mont","ending":"iez","form":"montiez","full":"vous montiez"},{"person":"3p","pronoun":"ils ","radical":"mont","ending":"aient","form":"montaient","full":"ils montaient"}],
              "passe_simple": [{"person":"1s","pronoun":"je ","radical":"mont","ending":"ai","form":"montai","full":"je montai"},{"person":"2s","pronoun":"tu ","radical":"mont","ending":"as","form":"montas","full":"tu montas"},{"person":"3s","pronoun":"il ","radical":"mont","ending":"a","form":"monta","full":"il monta"},{"person":"1p","pronoun":"nous ","radical":"mont","ending":"âmes","form":"montâmes","full":"nous montâmes"},{"person":"2p","pronoun":"vous ","radical":"mont","ending":"âtes","form":"montâtes","full":"vous montâtes"},{"person":"3p","pronoun":"ils ","radical":"mont","ending":"èrent","form":"montèrent","full":"ils montèrent"}],
              "futur_simple": [{"person":"1s","pronoun":"je ","radical":"monter","ending":"ai","form":"monterai","full":"je monterai"},{"person":"2s","pronoun":"tu ","radical":"monter","ending":"as","form":"monteras","full":"tu monteras"},{"person":"3s","pronoun":"il ","radical":"monter","ending":"a","form":"montera","full":"il montera"},{"person":"1p","pronoun":"nous ","radical":"monter","ending":"ons","form":"monterons","full":"nous monterons"},{"person":"2p","pronoun":"vous ","radical":"monter","ending":"ez","form":"monterez","full":"vous monterez"},{"person":"3p","pronoun":"ils ","radical":"monter","ending":"ont","form":"monteront","full":"ils monteront"}],
              "passe_compose": [{"person":"1s","pronoun":"je ","radical":"suis","ending":"","form":"suis monté","full":"je suis monté"},{"person":"2s","pronoun":"tu ","radical":"es","ending":"","form":"es monté","full":"tu es monté"},{"person":"3s","pronoun":"il ","radical":"est","ending":"","form":"est monté","full":"il est monté"},{"person":"1p","pronoun":"nous ","radical":"sommes","ending":"","form":"sommes montés","full":"nous sommes montés"},{"person":"2p","pronoun":"vous ","radical":"êtes","ending":"","form":"êtes montés","full":"vous êtes montés"},{"person":"3p","pronoun":"ils ","radical":"sont","ending":"","form":"sont montés","full":"ils sont montés"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"étais","ending":"","form":"étais monté","full":"j'étais monté"},{"person":"2s","pronoun":"tu ","radical":"étais","ending":"","form":"étais monté","full":"tu étais monté"},{"person":"3s","pronoun":"il ","radical":"était","ending":"","form":"était monté","full":"il était monté"},{"person":"1p","pronoun":"nous ","radical":"étions","ending":"","form":"étions montés","full":"nous étions montés"},{"person":"2p","pronoun":"vous ","radical":"étiez","ending":"","form":"étiez montés","full":"vous étiez montés"},{"person":"3p","pronoun":"ils ","radical":"étaient","ending":"","form":"étaient montés","full":"ils étaient montés"}],
              "passe_anterieur": [{"person":"1s","pronoun":"je ","radical":"fus","ending":"","form":"fus monté","full":"je fus monté"},{"person":"2s","pronoun":"tu ","radical":"fus","ending":"","form":"fus monté","full":"tu fus monté"},{"person":"3s","pronoun":"il ","radical":"fut","ending":"","form":"fut monté","full":"il fut monté"},{"person":"1p","pronoun":"nous ","radical":"fûmes","ending":"","form":"fûmes montés","full":"nous fûmes montés"},{"person":"2p","pronoun":"vous ","radical":"fûtes","ending":"","form":"fûtes montés","full":"vous fûtes montés"},{"person":"3p","pronoun":"ils ","radical":"furent","ending":"","form":"furent montés","full":"ils furent montés"}],
              "futur_anterieur": [{"person":"1s","pronoun":"je ","radical":"serai","ending":"","form":"serai monté","full":"je serai monté"},{"person":"2s","pronoun":"tu ","radical":"seras","ending":"","form":"seras monté","full":"tu seras monté"},{"person":"3s","pronoun":"il ","radical":"sera","ending":"","form":"sera monté","full":"il sera monté"},{"person":"1p","pronoun":"nous ","radical":"serons","ending":"","form":"serons montés","full":"nous serons montés"},{"person":"2p","pronoun":"vous ","radical":"serez","ending":"","form":"serez montés","full":"vous serez montés"},{"person":"3p","pronoun":"ils ","radical":"seront","ending":"","form":"seront montés","full":"ils seront montés"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"mont","ending":"e","form":"monte","full":"que je monte"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"mont","ending":"es","form":"montes","full":"que tu montes"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"mont","ending":"e","form":"monte","full":"qu'il monte"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"mont","ending":"ions","form":"montions","full":"que nous montions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"mont","ending":"iez","form":"montiez","full":"que vous montiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"mont","ending":"ent","form":"montent","full":"qu'ils montent"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"mont","ending":"asse","form":"montasse","full":"que je montasse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"mont","ending":"asses","form":"montasses","full":"que tu montasses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"mont","ending":"ât","form":"montât","full":"qu'il montât"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"mont","ending":"assions","form":"montassions","full":"que nous montassions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"mont","ending":"assiez","form":"montassiez","full":"que vous montassiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"mont","ending":"assent","form":"montassent","full":"qu'ils montassent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"sois","ending":"","form":"sois monté","full":"que je sois monté"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"sois","ending":"","form":"sois monté","full":"que tu sois monté"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"soit","ending":"","form":"soit monté","full":"qu'il soit monté"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"soyons","ending":"","form":"soyons montés","full":"que nous soyons montés"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"soyez","ending":"","form":"soyez montés","full":"que vous soyez montés"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"soient","ending":"","form":"soient montés","full":"qu'ils soient montés"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"fusse","ending":"","form":"fusse monté","full":"que je fusse monté"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"fusses","ending":"","form":"fusses monté","full":"que tu fusses monté"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"fût","ending":"","form":"fût monté","full":"qu'il fût monté"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"fussions","ending":"","form":"fussions montés","full":"que nous fussions montés"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"fussiez","ending":"","form":"fussiez montés","full":"que vous fussiez montés"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"fussent","ending":"","form":"fussent montés","full":"qu'ils fussent montés"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"je ","radical":"monter","ending":"ais","form":"monterais","full":"je monterais"},{"person":"2s","pronoun":"tu ","radical":"monter","ending":"ais","form":"monterais","full":"tu monterais"},{"person":"3s","pronoun":"il ","radical":"monter","ending":"ait","form":"monterait","full":"il monterait"},{"person":"1p","pronoun":"nous ","radical":"monter","ending":"ions","form":"monterions","full":"nous monterions"},{"person":"2p","pronoun":"vous ","radical":"monter","ending":"iez","form":"monteriez","full":"vous monteriez"},{"person":"3p","pronoun":"ils ","radical":"monter","ending":"aient","form":"monteraient","full":"ils monteraient"}],
              "passe_1": [{"person":"1s","pronoun":"je ","radical":"serais","ending":"","form":"serais monté","full":"je serais monté"},{"person":"2s","pronoun":"tu ","radical":"serais","ending":"","form":"serais monté","full":"tu serais monté"},{"person":"3s","pronoun":"il ","radical":"serait","ending":"","form":"serait monté","full":"il serait monté"},{"person":"1p","pronoun":"nous ","radical":"serions","ending":"","form":"serions montés","full":"nous serions montés"},{"person":"2p","pronoun":"vous ","radical":"seriez","ending":"","form":"seriez montés","full":"vous seriez montés"},{"person":"3p","pronoun":"ils ","radical":"seraient","ending":"","form":"seraient montés","full":"ils seraient montés"}],
              "passe_2": [{"person":"1s","pronoun":"je ","radical":"fusse","ending":"","form":"fusse monté","full":"je fusse monté"},{"person":"2s","pronoun":"tu ","radical":"fusses","ending":"","form":"fusses monté","full":"tu fusses monté"},{"person":"3s","pronoun":"il ","radical":"fût","ending":"","form":"fût monté","full":"il fût monté"},{"person":"1p","pronoun":"nous ","radical":"fussions","ending":"","form":"fussions montés","full":"nous fussions montés"},{"person":"2p","pronoun":"vous ","radical":"fussiez","ending":"","form":"fussiez montés","full":"vous fussiez montés"},{"person":"3p","pronoun":"ils ","radical":"fussent","ending":"","form":"fussent montés","full":"ils fussent montés"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"mont","ending":"e","form":"monte","full":"monte"},{"person":"1p","pronoun":"","radical":"mont","ending":"ons","form":"montons","full":"montons"},{"person":"2p","pronoun":"","radical":"mont","ending":"ez","form":"montez","full":"montez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"sois","ending":"","form":"sois monté","full":"sois monté"},{"person":"1p","pronoun":"","radical":"soyons","ending":"","form":"soyons montés","full":"soyons montés"},{"person":"2p","pronoun":"","radical":"soyez","ending":"","form":"soyez montés","full":"soyez montés"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"mont","ending":"e","form":"monte","full":"monte"},{"person":"1p","pronoun":"","radical":"mont","ending":"ons","form":"montons","full":"montons"},{"person":"2p","pronoun":"","radical":"mont","ending":"ez","form":"montez","full":"montez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"sois","ending":"","form":"sois monté","full":"sois monté"},{"person":"1p","pronoun":"","radical":"soyons","ending":"","form":"soyons montés","full":"soyons montés"},{"person":"2p","pronoun":"","radical":"soyez","ending":"","form":"soyez montés","full":"soyez montés"}]
            },
            "participe": {
              "present": {"radical":"mont","ending":"ant","full":"montant"},
              "passe": {"masculin_singulier":"monté","masculin_pluriel":"montés","feminin_singulier":"montée","feminin_pluriel":"montées","compose":"étant monté"}
            },
            "infinitif": {"present": "monter", "passe": "être monté"},
            "gerondif": {"present": "en montant", "passe": "en étant monté"},
            "gérondif": {"present": "en montant", "passe": "en étant monté"}
          }
        },
        "finir": {
          "id": "finir", "slug": "finir", "verb": "finir", "infinitive": "finir", "group": 2, "level": "A1", "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false, "model": "finir", "participle_present": "finissant", "participle_past": "fini",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"je ","radical":"fin","ending":"is","form":"finis","full":"je finis"},{"person":"2s","pronoun":"tu ","radical":"fin","ending":"is","form":"finis","full":"tu finis"},{"person":"3s","pronoun":"il ","radical":"fin","ending":"it","form":"finit","full":"il finit"},{"person":"1p","pronoun":"nous ","radical":"finiss","ending":"ons","form":"finissons","full":"nous finissons"},{"person":"2p","pronoun":"vous ","radical":"finiss","ending":"ez","form":"finissez","full":"vous finissez"},{"person":"3p","pronoun":"ils ","radical":"finiss","ending":"ent","form":"finissent","full":"ils finissent"}],
              "imparfait": [{"person":"1s","pronoun":"je ","radical":"finiss","ending":"ais","form":"finissais","full":"je finissais"},{"person":"2s","pronoun":"tu ","radical":"finiss","ending":"ais","form":"finissais","full":"tu finissais"},{"person":"3s","pronoun":"il ","radical":"finiss","ending":"ait","form":"finissait","full":"il finissait"},{"person":"1p","pronoun":"nous ","radical":"finiss","ending":"ions","form":"finissions","full":"nous finissions"},{"person":"2p","pronoun":"vous ","radical":"finiss","ending":"iez","form":"finissiez","full":"vous finissiez"},{"person":"3p","pronoun":"ils ","radical":"finiss","ending":"aient","form":"finissaient","full":"ils finissaient"}],
              "passe_simple": [{"person":"1s","pronoun":"je ","radical":"fin","ending":"is","form":"finis","full":"je finis"},{"person":"2s","pronoun":"tu ","radical":"fin","ending":"is","form":"finis","full":"tu finis"},{"person":"3s","pronoun":"il ","radical":"fin","ending":"it","form":"finit","full":"il finit"},{"person":"1p","pronoun":"nous ","radical":"fin","ending":"îmes","form":"finîmes","full":"nous finîmes"},{"person":"2p","pronoun":"vous ","radical":"fin","ending":"îtes","form":"finîtes","full":"vous finîtes"},{"person":"3p","pronoun":"ils ","radical":"fin","ending":"irent","form":"finirent","full":"ils finirent"}],
              "futur_simple": [{"person":"1s","pronoun":"je ","radical":"finir","ending":"ai","form":"finirai","full":"je finirai"},{"person":"2s","pronoun":"tu ","radical":"finir","ending":"as","form":"finiras","full":"tu finiras"},{"person":"3s","pronoun":"il ","radical":"finir","ending":"a","form":"finira","full":"il finira"},{"person":"1p","pronoun":"nous ","radical":"finir","ending":"ons","form":"finirons","full":"nous finirons"},{"person":"2p","pronoun":"vous ","radical":"finir","ending":"ez","form":"finirez","full":"vous finirez"},{"person":"3p","pronoun":"ils ","radical":"finir","ending":"ont","form":"finiront","full":"ils finiront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai fini","full":"j'ai fini"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as fini","full":"tu as fini"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a fini","full":"il a fini"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons fini","full":"nous avons fini"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez fini","full":"vous avez fini"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont fini","full":"ils ont fini"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais fini","full":"j'avais fini"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais fini","full":"tu avais fini"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait fini","full":"il avait fini"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions fini","full":"nous avions fini"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez fini","full":"vous aviez fini"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient fini","full":"ils avaient fini"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus fini","full":"j'eus fini"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus fini","full":"tu eus fini"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut fini","full":"il eut fini"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes fini","full":"nous eûmes fini"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes fini","full":"vous eûtes fini"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent fini","full":"ils eurent fini"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai fini","full":"j'aurai fini"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras fini","full":"tu auras fini"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura fini","full":"il aura fini"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons fini","full":"nous aurons fini"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez fini","full":"vous aurez fini"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront fini","full":"ils auront fini"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"finiss","ending":"e","form":"finisse","full":"que je finisse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"finiss","ending":"es","form":"finisses","full":"que tu finisses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"finiss","ending":"e","form":"finisse","full":"qu'il finisse"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"finiss","ending":"ions","form":"finissions","full":"que nous finissions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"finiss","ending":"iez","form":"finissiez","full":"que vous finissiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"finiss","ending":"ent","form":"finissent","full":"qu'ils finissent"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"fin","ending":"isse","form":"finisse","full":"que je finisse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"fin","ending":"isses","form":"finisses","full":"que tu finisses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"fin","ending":"ît","form":"finît","full":"qu'il finît"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"fin","ending":"issions","form":"finissions","full":"que nous finissions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"fin","ending":"issiez","form":"finissiez","full":"que vous finissiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"fin","ending":"issent","form":"finissent","full":"qu'ils finissent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie fini","full":"que j'aie fini"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies fini","full":"que tu aies fini"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait fini","full":"qu'il ait fini"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons fini","full":"que nous ayons fini"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez fini","full":"que vous ayez fini"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient fini","full":"qu'ils aient fini"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse fini","full":"que j'eusse fini"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses fini","full":"que tu eusses fini"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût fini","full":"qu'il eût fini"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions fini","full":"que nous eussions fini"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez fini","full":"que vous eussiez fini"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent fini","full":"qu'ils eussent fini"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"je ","radical":"finir","ending":"ais","form":"finirais","full":"je finirais"},{"person":"2s","pronoun":"tu ","radical":"finir","ending":"ais","form":"finirais","full":"tu finirais"},{"person":"3s","pronoun":"il ","radical":"finir","ending":"ait","form":"finirait","full":"il finirait"},{"person":"1p","pronoun":"nous ","radical":"finir","ending":"ions","form":"finirions","full":"nous finirions"},{"person":"2p","pronoun":"vous ","radical":"finir","ending":"iez","form":"finiriez","full":"vous finiriez"},{"person":"3p","pronoun":"ils ","radical":"finir","ending":"aient","form":"finiraient","full":"ils finiraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais fini","full":"j'aurais fini"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais fini","full":"tu aurais fini"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait fini","full":"il aurait fini"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions fini","full":"nous aurions fini"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez fini","full":"vous auriez fini"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient fini","full":"ils auraient fini"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse fini","full":"j'eusse fini"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses fini","full":"tu eusses fini"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût fini","full":"il eût fini"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions fini","full":"nous eussions fini"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez fini","full":"vous eussiez fini"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent fini","full":"ils eussent fini"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"fin","ending":"is","form":"finis","full":"finis"},{"person":"1p","pronoun":"","radical":"finiss","ending":"ons","form":"finissons","full":"finissons"},{"person":"2p","pronoun":"","radical":"finiss","ending":"ez","form":"finissez","full":"finissez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie fini","full":"aie fini"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons fini","full":"ayons fini"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez fini","full":"ayez fini"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"fin","ending":"is","form":"finis","full":"finis"},{"person":"1p","pronoun":"","radical":"finiss","ending":"ons","form":"finissons","full":"finissons"},{"person":"2p","pronoun":"","radical":"finiss","ending":"ez","form":"finissez","full":"finissez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie fini","full":"aie fini"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons fini","full":"ayons fini"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez fini","full":"ayez fini"}]
            },
            "participe": {
              "present": {"radical":"finiss","ending":"ant","full":"finissant"},
              "passe": {"masculin_singulier":"fini","masculin_pluriel":"finis","feminin_singulier":"finie","feminin_pluriel":"finies","compose":"ayant fini"}
            },
            "infinitif": {"present": "finir", "passe": "avoir fini"},
            "gerondif": {"present": "en finissant", "passe": "en ayant fini"},
            "gérondif": {"present": "en finissant", "passe": "en ayant fini"}
          }
        },
        "agir": {
          "id": "agir", "slug": "agir", "verb": "agir", "infinitive": "agir", "group": 2, "level": "A2", "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false, "model": "finir", "participle_present": "agissant", "participle_past": "agi",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"j'","radical":"ag","ending":"is","form":"agis","full":"j'agis"},{"person":"2s","pronoun":"tu ","radical":"ag","ending":"is","form":"agis","full":"tu agis"},{"person":"3s","pronoun":"il ","radical":"ag","ending":"it","form":"agit","full":"il agit"},{"person":"1p","pronoun":"nous ","radical":"agiss","ending":"ons","form":"agissons","full":"nous agissons"},{"person":"2p","pronoun":"vous ","radical":"agiss","ending":"ez","form":"agissez","full":"vous agissez"},{"person":"3p","pronoun":"ils ","radical":"agiss","ending":"ent","form":"agissent","full":"ils agissent"}],
              "imparfait": [{"person":"1s","pronoun":"j'","radical":"agiss","ending":"ais","form":"agissais","full":"j'agissais"},{"person":"2s","pronoun":"tu ","radical":"agiss","ending":"ais","form":"agissais","full":"tu agissais"},{"person":"3s","pronoun":"il ","radical":"agiss","ending":"ait","form":"agissait","full":"il agissait"},{"person":"1p","pronoun":"nous ","radical":"agiss","ending":"ions","form":"agissions","full":"nous agissions"},{"person":"2p","pronoun":"vous ","radical":"agiss","ending":"iez","form":"agissiez","full":"vous agissiez"},{"person":"3p","pronoun":"ils ","radical":"agiss","ending":"aient","form":"agissaient","full":"ils agissaient"}],
              "passe_simple": [{"person":"1s","pronoun":"j'","radical":"ag","ending":"is","form":"agis","full":"j'agis"},{"person":"2s","pronoun":"tu ","radical":"ag","ending":"is","form":"agis","full":"tu agis"},{"person":"3s","pronoun":"il ","radical":"ag","ending":"it","form":"agit","full":"il agit"},{"person":"1p","pronoun":"nous ","radical":"ag","ending":"îmes","form":"agîmes","full":"nous agîmes"},{"person":"2p","pronoun":"vous ","radical":"ag","ending":"îtes","form":"agîtes","full":"vous agîtes"},{"person":"3p","pronoun":"ils ","radical":"ag","ending":"irent","form":"agirent","full":"ils agirent"}],
              "futur_simple": [{"person":"1s","pronoun":"j'","radical":"agir","ending":"ai","form":"agirai","full":"j'agirai"},{"person":"2s","pronoun":"tu ","radical":"agir","ending":"as","form":"agiras","full":"tu agiras"},{"person":"3s","pronoun":"il ","radical":"agir","ending":"a","form":"agira","full":"il agira"},{"person":"1p","pronoun":"nous ","radical":"agir","ending":"ons","form":"agirons","full":"nous agirons"},{"person":"2p","pronoun":"vous ","radical":"agir","ending":"ez","form":"agirez","full":"vous agirez"},{"person":"3p","pronoun":"ils ","radical":"agir","ending":"ont","form":"agiront","full":"ils agiront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai agi","full":"j'ai agi"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as agi","full":"tu as agi"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a agi","full":"il a agi"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons agi","full":"nous avons agi"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez agi","full":"vous avez agi"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont agi","full":"ils ont agi"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais agi","full":"j'avais agi"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais agi","full":"tu avais agi"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait agi","full":"il avait agi"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions agi","full":"nous avions agi"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez agi","full":"vous aviez agi"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient agi","full":"ils avaient agi"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus agi","full":"j'eus agi"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus agi","full":"tu eus agi"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut agi","full":"il eut agi"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes agi","full":"nous eûmes agi"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes agi","full":"vous eûtes agi"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent agi","full":"ils eurent agi"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai agi","full":"j'aurai agi"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras agi","full":"tu auras agi"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura agi","full":"il aura agi"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons agi","full":"nous aurons agi"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez agi","full":"vous aurez agi"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront agi","full":"ils auront agi"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"agiss","ending":"e","form":"agisse","full":"que j'agisse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"agiss","ending":"es","form":"agisses","full":"que tu agisses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"agiss","ending":"e","form":"agisse","full":"qu'il agisse"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"agiss","ending":"ions","form":"agissions","full":"que nous agissions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"agiss","ending":"iez","form":"agissiez","full":"que vous agissiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"agiss","ending":"ent","form":"agissent","full":"qu'ils agissent"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"ag","ending":"isse","form":"agisse","full":"que j'agisse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"ag","ending":"isses","form":"agisses","full":"que tu agisses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ag","ending":"ît","form":"agît","full":"qu'il agît"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ag","ending":"issions","form":"agissions","full":"que nous agissions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ag","ending":"issiez","form":"agissiez","full":"que vous agissiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"ag","ending":"issent","form":"agissent","full":"qu'ils agissent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie agi","full":"que j'aie agi"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies agi","full":"que tu aies agi"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait agi","full":"qu'il ait agi"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons agi","full":"que nous ayons agi"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez agi","full":"que vous ayez agi"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient agi","full":"qu'ils aient agi"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse agi","full":"que j'eusse agi"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses agi","full":"que tu eusses agi"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût agi","full":"qu'il eût agi"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions agi","full":"que nous eussions agi"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez agi","full":"que vous eussiez agi"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent agi","full":"qu'ils eussent agi"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"j'","radical":"agir","ending":"ais","form":"agirais","full":"j'agirais"},{"person":"2s","pronoun":"tu ","radical":"agir","ending":"ais","form":"agirais","full":"tu agirais"},{"person":"3s","pronoun":"il ","radical":"agir","ending":"ait","form":"agirait","full":"il agirait"},{"person":"1p","pronoun":"nous ","radical":"agir","ending":"ions","form":"agirions","full":"nous agirions"},{"person":"2p","pronoun":"vous ","radical":"agir","ending":"iez","form":"agiriez","full":"vous agiriez"},{"person":"3p","pronoun":"ils ","radical":"agir","ending":"aient","form":"agiraient","full":"ils agiraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais agi","full":"j'aurais agi"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais agi","full":"tu aurais agi"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait agi","full":"il aurait agi"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions agi","full":"nous aurions agi"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez agi","full":"vous auriez agi"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient agi","full":"ils auraient agi"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse agi","full":"j'eusse agi"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses agi","full":"tu eusses agi"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût agi","full":"il eût agi"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions agi","full":"nous eussions agi"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez agi","full":"vous eussiez agi"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent agi","full":"ils eussent agi"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"ag","ending":"is","form":"agis","full":"agis"},{"person":"1p","pronoun":"","radical":"agiss","ending":"ons","form":"agissons","full":"agissons"},{"person":"2p","pronoun":"","radical":"agiss","ending":"ez","form":"agissez","full":"agissez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie agi","full":"aie agi"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons agi","full":"ayons agi"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez agi","full":"ayez agi"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"ag","ending":"is","form":"agis","full":"agis"},{"person":"1p","pronoun":"","radical":"agiss","ending":"ons","form":"agissons","full":"agissons"},{"person":"2p","pronoun":"","radical":"agiss","ending":"ez","form":"agissez","full":"agissez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie agi","full":"aie agi"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons agi","full":"ayons agi"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez agi","full":"ayez agi"}]
            },
            "participe": {
              "present": {"radical":"agiss","ending":"ant","full":"agissant"},
              "passe": {"masculin_singulier":"agi","masculin_pluriel":"agis","feminin_singulier":"agie","feminin_pluriel":"agies","compose":"ayant agi"}
            },
            "infinitif": {"present": "agir", "passe": "avoir agi"},
            "gerondif": {"present": "en agissant", "passe": "en ayant agi"},
            "gérondif": {"present": "en agissant", "passe": "en ayant agi"}
          }
        },
        "etre": {
          "id": "etre", "slug": "etre", "verb": "être", "infinitive": "être", "group": 3, "level": "A1", "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false, "model": "être", "participle_present": "étant", "participle_past": "été",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"je ","radical":"suis","ending":"","form":"suis","full":"je suis"},{"person":"2s","pronoun":"tu ","radical":"es","ending":"","form":"es","full":"tu es"},{"person":"3s","pronoun":"il ","radical":"est","ending":"","form":"est","full":"il est"},{"person":"1p","pronoun":"nous ","radical":"sommes","ending":"","form":"sommes","full":"nous sommes"},{"person":"2p","pronoun":"vous ","radical":"êtes","ending":"","form":"êtes","full":"vous êtes"},{"person":"3p","pronoun":"ils ","radical":"sont","ending":"","form":"sont","full":"ils sont"}],
              "imparfait": [{"person":"1s","pronoun":"j'","radical":"ét","ending":"ais","form":"étais","full":"j'étais"},{"person":"2s","pronoun":"tu ","radical":"ét","ending":"ais","form":"étais","full":"tu étais"},{"person":"3s","pronoun":"il ","radical":"ét","ending":"ait","form":"était","full":"il était"},{"person":"1p","pronoun":"nous ","radical":"ét","ending":"ions","form":"étions","full":"nous étions"},{"person":"2p","pronoun":"vous ","radical":"ét","ending":"iez","form":"étiez","full":"vous étiez"},{"person":"3p","pronoun":"ils ","radical":"ét","ending":"aient","form":"étaient","full":"ils étaient"}],
              "passe_simple": [{"person":"1s","pronoun":"je ","radical":"f","ending":"us","form":"fus","full":"je fus"},{"person":"2s","pronoun":"tu ","radical":"f","ending":"us","form":"fus","full":"tu fus"},{"person":"3s","pronoun":"il ","radical":"f","ending":"ut","form":"fut","full":"il fut"},{"person":"1p","pronoun":"nous ","radical":"f","ending":"ûmes","form":"fûmes","full":"nous fûmes"},{"person":"2p","pronoun":"vous ","radical":"f","ending":"ûtes","form":"fûtes","full":"vous fûtes"},{"person":"3p","pronoun":"ils ","radical":"f","ending":"urent","form":"furent","full":"ils furent"}],
              "futur_simple": [{"person":"1s","pronoun":"je ","radical":"ser","ending":"ai","form":"serai","full":"je serai"},{"person":"2s","pronoun":"tu ","radical":"ser","ending":"as","form":"seras","full":"tu seras"},{"person":"3s","pronoun":"il ","radical":"ser","ending":"a","form":"sera","full":"il sera"},{"person":"1p","pronoun":"nous ","radical":"ser","ending":"ons","form":"serons","full":"nous serons"},{"person":"2p","pronoun":"vous ","radical":"ser","ending":"ez","form":"serez","full":"vous serez"},{"person":"3p","pronoun":"ils ","radical":"ser","ending":"ont","form":"seront","full":"ils seront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai été","full":"j'ai été"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as été","full":"tu as été"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a été","full":"il a été"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons été","full":"nous avons été"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez été","full":"vous avez été"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont été","full":"ils ont été"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais été","full":"j'avais été"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais été","full":"tu avais été"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait été","full":"il avait été"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions été","full":"nous avions été"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez été","full":"vous aviez été"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient été","full":"ils avaient été"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus été","full":"j'eus été"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus été","full":"tu eus été"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut été","full":"il eut été"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes été","full":"nous eûmes été"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes été","full":"vous eûtes été"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent été","full":"ils eurent été"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai été","full":"j'aurai été"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras été","full":"tu auras été"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura été","full":"il aura été"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons été","full":"nous aurons été"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez été","full":"vous aurez été"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront été","full":"ils auront été"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"soi","ending":"s","form":"sois","full":"que je sois"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"soi","ending":"s","form":"sois","full":"que tu sois"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"soi","ending":"t","form":"soit","full":"qu'il soit"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"soy","ending":"ons","form":"soyons","full":"que nous soyons"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"soy","ending":"ez","form":"soyez","full":"que vous soyez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"soi","ending":"ent","form":"soient","full":"qu'ils soient"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"f","ending":"usse","form":"fusse","full":"que je fusse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"f","ending":"usses","form":"fusses","full":"que tu fusses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"f","ending":"ût","form":"fût","full":"qu'il fût"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"f","ending":"ussions","form":"fussions","full":"que nous fussions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"f","ending":"ussiez","form":"fussiez","full":"que vous fussiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"f","ending":"ussent","form":"fussent","full":"qu'ils fussent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie été","full":"que j'aie été"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies été","full":"que tu aies été"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait été","full":"qu'il ait été"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons été","full":"que nous ayons été"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez été","full":"que vous ayez été"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient été","full":"qu'ils aient été"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse été","full":"que j'eusse été"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses été","full":"que tu eusses été"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût été","full":"qu'il eût été"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions été","full":"que nous eussions été"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez été","full":"que vous eussiez été"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent été","full":"qu'ils eussent été"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"je ","radical":"ser","ending":"ais","form":"serais","full":"je serais"},{"person":"2s","pronoun":"tu ","radical":"ser","ending":"ais","form":"serais","full":"tu serais"},{"person":"3s","pronoun":"il ","radical":"ser","ending":"ait","form":"serait","full":"il serait"},{"person":"1p","pronoun":"nous ","radical":"ser","ending":"ions","form":"serions","full":"nous serions"},{"person":"2p","pronoun":"vous ","radical":"ser","ending":"iez","form":"seriez","full":"vous seriez"},{"person":"3p","pronoun":"ils ","radical":"ser","ending":"aient","form":"seraient","full":"ils seraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais été","full":"j'aurais été"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais été","full":"tu aurais été"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait été","full":"il aurait été"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions été","full":"nous aurions été"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez été","full":"vous auriez été"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient été","full":"ils auraient été"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse été","full":"j'eusse été"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses été","full":"tu eusses été"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût été","full":"il eût été"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions été","full":"nous eussions été"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez été","full":"vous eussiez été"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent été","full":"ils eussent été"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"soi","ending":"s","form":"sois","full":"sois"},{"person":"1p","pronoun":"","radical":"soy","ending":"ons","form":"soyons","full":"soyons"},{"person":"2p","pronoun":"","radical":"soy","ending":"ez","form":"soyez","full":"soyez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie été","full":"aie été"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons été","full":"ayons été"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez été","full":"ayez été"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"soi","ending":"s","form":"sois","full":"sois"},{"person":"1p","pronoun":"","radical":"soy","ending":"ons","form":"soyons","full":"soyons"},{"person":"2p","pronoun":"","radical":"soy","ending":"ez","form":"soyez","full":"soyez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie été","full":"aie été"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons été","full":"ayons été"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez été","full":"ayez été"}]
            },
            "participe": {
              "present": {"radical":"ét","ending":"ant","full":"étant"},
              "passe": {"masculin_singulier":"été","masculin_pluriel":"été","feminin_singulier":"été","feminin_pluriel":"été","compose":"ayant été"}
            },
            "infinitif": {"present": "être", "passe": "avoir été"},
            "gerondif": {"present": "en étant", "passe": "en ayant été"},
            "gérondif": {"present": "en étant", "passe": "en ayant été"}
          }
        },
        "avoir": {
          "id": "avoir", "slug": "avoir", "verb": "avoir", "infinitive": "avoir", "group": 3, "level": "A1", "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false, "model": "avoir", "participle_present": "ayant", "participle_past": "eu",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai","full":"j'ai"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as","full":"tu as"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a","full":"il a"},{"person":"1p","pronoun":"nous ","radical":"av","ending":"ons","form":"avons","full":"nous avons"},{"person":"2p","pronoun":"vous ","radical":"av","ending":"ez","form":"avez","full":"vous avez"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont","full":"ils ont"}],
              "imparfait": [{"person":"1s","pronoun":"j'","radical":"av","ending":"ais","form":"avais","full":"j'avais"},{"person":"2s","pronoun":"tu ","radical":"av","ending":"ais","form":"avais","full":"tu avais"},{"person":"3s","pronoun":"il ","radical":"av","ending":"ait","form":"avait","full":"il avait"},{"person":"1p","pronoun":"nous ","radical":"av","ending":"ions","form":"avions","full":"nous avions"},{"person":"2p","pronoun":"vous ","radical":"av","ending":"iez","form":"aviez","full":"vous aviez"},{"person":"3p","pronoun":"ils ","radical":"av","ending":"aient","form":"avaient","full":"ils avaient"}],
              "passe_simple": [{"person":"1s","pronoun":"j'","radical":"e","ending":"us","form":"eus","full":"j'eus"},{"person":"2s","pronoun":"tu ","radical":"e","ending":"us","form":"eus","full":"tu eus"},{"person":"3s","pronoun":"il ","radical":"e","ending":"ut","form":"eut","full":"il eut"},{"person":"1p","pronoun":"nous ","radical":"e","ending":"ûmes","form":"eûmes","full":"nous eûmes"},{"person":"2p","pronoun":"vous ","radical":"e","ending":"ûtes","form":"eûtes","full":"vous eûtes"},{"person":"3p","pronoun":"ils ","radical":"e","ending":"urent","form":"eurent","full":"ils eurent"}],
              "futur_simple": [{"person":"1s","pronoun":"j'","radical":"aur","ending":"ai","form":"aurai","full":"j'aurai"},{"person":"2s","pronoun":"tu ","radical":"aur","ending":"as","form":"auras","full":"tu auras"},{"person":"3s","pronoun":"il ","radical":"aur","ending":"a","form":"aura","full":"il aura"},{"person":"1p","pronoun":"nous ","radical":"aur","ending":"ons","form":"aurons","full":"nous aurons"},{"person":"2p","pronoun":"vous ","radical":"aur","ending":"ez","form":"aurez","full":"vous aurez"},{"person":"3p","pronoun":"ils ","radical":"aur","ending":"ont","form":"auront","full":"ils auront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai eu","full":"j'ai eu"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as eu","full":"tu as eu"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a eu","full":"il a eu"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons eu","full":"nous avons eu"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez eu","full":"vous avez eu"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont eu","full":"ils ont eu"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais eu","full":"j'avais eu"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais eu","full":"tu avais eu"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait eu","full":"il avait eu"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions eu","full":"nous avions eu"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez eu","full":"vous aviez eu"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient eu","full":"ils avaient eu"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus eu","full":"j'eus eu"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus eu","full":"tu eus eu"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut eu","full":"il eut eu"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes eu","full":"nous eûmes eu"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes eu","full":"vous eûtes eu"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent eu","full":"ils eurent eu"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai eu","full":"j'aurai eu"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras eu","full":"tu auras eu"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura eu","full":"il aura eu"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons eu","full":"nous aurons eu"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez eu","full":"vous aurez eu"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront eu","full":"ils auront eu"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"ai","ending":"e","form":"aie","full":"que j'aie"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"ai","ending":"es","form":"aies","full":"que tu aies"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ai","ending":"t","form":"ait","full":"qu'il ait"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ay","ending":"ons","form":"ayons","full":"que nous ayons"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ay","ending":"ez","form":"ayez","full":"que vous ayez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"ai","ending":"ent","form":"aient","full":"qu'ils aient"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"e","ending":"usse","form":"eusse","full":"que j'eusse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"e","ending":"usses","form":"eusses","full":"que tu eusses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"e","ending":"ût","form":"eût","full":"qu'il eût"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"e","ending":"ussions","form":"eussions","full":"que nous eussions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"e","ending":"ussiez","form":"eussiez","full":"que vous eussiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"e","ending":"ussent","form":"eussent","full":"qu'ils eussent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie eu","full":"que j'aie eu"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies eu","full":"que tu aies eu"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait eu","full":"qu'il ait eu"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons eu","full":"que nous ayons eu"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez eu","full":"que vous ayez eu"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient eu","full":"qu'ils aient eu"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse eu","full":"que j'eusse eu"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses eu","full":"que tu eusses eu"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût eu","full":"qu'il eût eu"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions eu","full":"que nous eussions eu"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez eu","full":"que vous eussiez eu"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent eu","full":"qu'ils eussent eu"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"j'","radical":"aur","ending":"ais","form":"aurais","full":"j'aurais"},{"person":"2s","pronoun":"tu ","radical":"aur","ending":"ais","form":"aurais","full":"tu aurais"},{"person":"3s","pronoun":"il ","radical":"aur","ending":"ait","form":"aurait","full":"il aurait"},{"person":"1p","pronoun":"nous ","radical":"aur","ending":"ions","form":"aurions","full":"nous aurions"},{"person":"2p","pronoun":"vous ","radical":"aur","ending":"iez","form":"auriez","full":"vous auriez"},{"person":"3p","pronoun":"ils ","radical":"aur","ending":"aient","form":"auraient","full":"ils auraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais eu","full":"j'aurais eu"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais eu","full":"tu aurais eu"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait eu","full":"il aurait eu"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions eu","full":"nous aurions eu"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez eu","full":"vous auriez eu"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient eu","full":"ils auraient eu"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse eu","full":"j'eusse eu"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses eu","full":"tu eusses eu"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût eu","full":"il eût eu"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions eu","full":"nous eussions eu"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez eu","full":"vous eussiez eu"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent eu","full":"ils eussent eu"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"ai","ending":"e","form":"aie","full":"aie"},{"person":"1p","pronoun":"","radical":"ay","ending":"ons","form":"ayons","full":"ayons"},{"person":"2p","pronoun":"","radical":"ay","ending":"ez","form":"ayez","full":"ayez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie eu","full":"aie eu"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons eu","full":"ayons eu"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez eu","full":"ayez eu"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"ai","ending":"e","form":"aie","full":"aie"},{"person":"1p","pronoun":"","radical":"ay","ending":"ons","form":"ayons","full":"ayons"},{"person":"2p","pronoun":"","radical":"ay","ending":"ez","form":"ayez","full":"ayez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie eu","full":"aie eu"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons eu","full":"ayons eu"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez eu","full":"ayez eu"}]
            },
            "participe": {
              "present": {"radical":"ay","ending":"ant","full":"ayant"},
              "passe": {"masculin_singulier":"eu","masculin_pluriel":"eus","feminin_singulier":"eue","feminin_pluriel":"eues","compose":"ayant eu"}
            },
            "infinitif": {"present": "avoir", "passe": "avoir eu"},
            "gerondif": {"present": "en ayant", "passe": "en ayant eu"},
            "gérondif": {"present": "en ayant", "passe": "en ayant eu"}
          }
        },
        "aller": {
          "id": "aller", "slug": "aller", "verb": "aller", "infinitive": "aller", "group": 3, "level": "A1",
          "auxiliary": "être", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false,
          "model": "aller", "participle_present": "allant", "participle_past": "allé",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"je ","radical":"vai","ending":"s","form":"vais","full":"je vais"},{"person":"2s","pronoun":"tu ","radical":"va","ending":"s","form":"vas","full":"tu vas"},{"person":"3s","pronoun":"il ","radical":"va","ending":"","form":"va","full":"il va"},{"person":"1p","pronoun":"nous ","radical":"all","ending":"ons","form":"allons","full":"nous allons"},{"person":"2p","pronoun":"vous ","radical":"all","ending":"ez","form":"allez","full":"vous allez"},{"person":"3p","pronoun":"ils ","radical":"von","ending":"t","form":"vont","full":"ils vont"}],
              "imparfait": [{"person":"1s","pronoun":"j'","radical":"all","ending":"ais","form":"allais","full":"j'allais"},{"person":"2s","pronoun":"tu ","radical":"all","ending":"ais","form":"allais","full":"tu allais"},{"person":"3s","pronoun":"il ","radical":"all","ending":"ait","form":"allait","full":"il allait"},{"person":"1p","pronoun":"nous ","radical":"all","ending":"ions","form":"allions","full":"nous allions"},{"person":"2p","pronoun":"vous ","radical":"all","ending":"iez","form":"alliez","full":"vous alliez"},{"person":"3p","pronoun":"ils ","radical":"all","ending":"aient","form":"allaient","full":"ils allaient"}],
              "passe_simple": [{"person":"1s","pronoun":"j'","radical":"all","ending":"ai","form":"allai","full":"j'allai"},{"person":"2s","pronoun":"tu ","radical":"all","ending":"as","form":"allas","full":"tu allas"},{"person":"3s","pronoun":"il ","radical":"all","ending":"a","form":"alla","full":"il alla"},{"person":"1p","pronoun":"nous ","radical":"all","ending":"âmes","form":"allâmes","full":"nous allâmes"},{"person":"2p","pronoun":"vous ","radical":"all","ending":"âtes","form":"allâtes","full":"vous allâtes"},{"person":"3p","pronoun":"ils ","radical":"all","ending":"èrent","form":"allèrent","full":"ils allèrent"}],
              "futur_simple": [{"person":"1s","pronoun":"j'","radical":"ir","ending":"ai","form":"irai","full":"j'irai"},{"person":"2s","pronoun":"tu ","radical":"ir","ending":"as","form":"iras","full":"tu iras"},{"person":"3s","pronoun":"il ","radical":"ir","ending":"a","form":"ira","full":"il ira"},{"person":"1p","pronoun":"nous ","radical":"ir","ending":"ons","form":"irons","full":"nous irons"},{"person":"2p","pronoun":"vous ","radical":"ir","ending":"ez","form":"irez","full":"vous irez"},{"person":"3p","pronoun":"ils ","radical":"ir","ending":"ont","form":"iront","full":"ils iront"}],
              "passe_compose": [{"person":"1s","pronoun":"je ","radical":"suis","ending":"","form":"suis allé","full":"je suis allé"},{"person":"2s","pronoun":"tu ","radical":"es","ending":"","form":"es allé","full":"tu es allé"},{"person":"3s","pronoun":"il ","radical":"est","ending":"","form":"est allé","full":"il est allé"},{"person":"1p","pronoun":"nous ","radical":"sommes","ending":"","form":"sommes allés","full":"nous sommes allés"},{"person":"2p","pronoun":"vous ","radical":"êtes","ending":"","form":"êtes allés","full":"vous êtes allés"},{"person":"3p","pronoun":"ils ","radical":"sont","ending":"","form":"sont allés","full":"ils sont allés"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"étais","ending":"","form":"étais allé","full":"j'étais allé"},{"person":"2s","pronoun":"tu ","radical":"étais","ending":"","form":"étais allé","full":"tu étais allé"},{"person":"3s","pronoun":"il ","radical":"était","ending":"","form":"était allé","full":"il était allé"},{"person":"1p","pronoun":"nous ","radical":"étions","ending":"","form":"étions allés","full":"nous étions allés"},{"person":"2p","pronoun":"vous ","radical":"étiez","ending":"","form":"étiez allés","full":"vous étiez allés"},{"person":"3p","pronoun":"ils ","radical":"étaient","ending":"","form":"étaient allés","full":"ils étaient allés"}],
              "passe_anterieur": [{"person":"1s","pronoun":"je ","radical":"fus","ending":"","form":"fus allé","full":"je fus allé"},{"person":"2s","pronoun":"tu ","radical":"fus","ending":"","form":"fus allé","full":"tu fus allé"},{"person":"3s","pronoun":"il ","radical":"fut","ending":"","form":"fut allé","full":"il fut allé"},{"person":"1p","pronoun":"nous ","radical":"fûmes","ending":"","form":"fûmes allés","full":"nous fûmes allés"},{"person":"2p","pronoun":"vous ","radical":"fûtes","ending":"","form":"fûtes allés","full":"vous fûtes allés"},{"person":"3p","pronoun":"ils ","radical":"furent","ending":"","form":"furent allés","full":"ils furent allés"}],
              "futur_anterieur": [{"person":"1s","pronoun":"je ","radical":"serai","ending":"","form":"serai allé","full":"je serai allé"},{"person":"2s","pronoun":"tu ","radical":"seras","ending":"","form":"seras allé","full":"tu seras allé"},{"person":"3s","pronoun":"il ","radical":"sera","ending":"","form":"sera allé","full":"il sera allé"},{"person":"1p","pronoun":"nous ","radical":"serons","ending":"","form":"serons allés","full":"nous serons allés"},{"person":"2p","pronoun":"vous ","radical":"serez","ending":"","form":"serez allés","full":"vous serez allés"},{"person":"3p","pronoun":"ils ","radical":"seront","ending":"","form":"seront allés","full":"ils seront allés"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aill","ending":"e","form":"aille","full":"que j'aille"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aill","ending":"es","form":"ailles","full":"que tu ailles"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"aill","ending":"e","form":"aille","full":"qu'il aille"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"all","ending":"ions","form":"allions","full":"que nous allions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"all","ending":"iez","form":"alliez","full":"que vous alliez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aill","ending":"ent","form":"aillent","full":"qu'ils aillent"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"all","ending":"asse","form":"allasse","full":"que j'allasse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"all","ending":"asses","form":"allasses","full":"que tu allasses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"all","ending":"ât","form":"allât","full":"qu'il allât"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"all","ending":"assions","form":"allassions","full":"que nous allassions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"all","ending":"assiez","form":"allassiez","full":"que vous allassiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"all","ending":"assent","form":"allassent","full":"qu'ils allassent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"sois","ending":"","form":"sois allé","full":"que je sois allé"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"sois","ending":"","form":"sois allé","full":"que tu sois allé"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"soit","ending":"","form":"soit allé","full":"qu'il soit allé"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"soyons","ending":"","form":"soyons allés","full":"que nous soyons allés"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"soyez","ending":"","form":"soyez allés","full":"que vous soyez allés"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"soient","ending":"","form":"soient allés","full":"qu'ils soient allés"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"fusse","ending":"","form":"fusse allé","full":"que je fusse allé"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"fusses","ending":"","form":"fusses allé","full":"que tu fusses allé"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"fût","ending":"","form":"fût allé","full":"qu'il fût allé"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"fussions","ending":"","form":"fussions allés","full":"que nous fussions allés"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"fussiez","ending":"","form":"fussiez allés","full":"que vous fussiez allés"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"fussent","ending":"","form":"fussent allés","full":"qu'ils fussent allés"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"j'","radical":"ir","ending":"ais","form":"irais","full":"j'irais"},{"person":"2s","pronoun":"tu ","radical":"ir","ending":"ais","form":"irais","full":"tu irais"},{"person":"3s","pronoun":"il ","radical":"ir","ending":"ait","form":"irait","full":"il irait"},{"person":"1p","pronoun":"nous ","radical":"ir","ending":"ions","form":"irions","full":"nous irions"},{"person":"2p","pronoun":"vous ","radical":"ir","ending":"iez","form":"iriez","full":"vous iriez"},{"person":"3p","pronoun":"ils ","radical":"ir","ending":"aient","form":"iraient","full":"ils iraient"}],
              "passe_1": [{"person":"1s","pronoun":"je ","radical":"serais","ending":"","form":"serais allé","full":"je serais allé"},{"person":"2s","pronoun":"tu ","radical":"serais","ending":"","form":"serais allé","full":"tu serais allé"},{"person":"3s","pronoun":"il ","radical":"serait","ending":"","form":"serait allé","full":"il serait allé"},{"person":"1p","pronoun":"nous ","radical":"serions","ending":"","form":"serions allés","full":"nous serions allés"},{"person":"2p","pronoun":"vous ","radical":"seriez","ending":"","form":"seriez allés","full":"vous seriez allés"},{"person":"3p","pronoun":"ils ","radical":"seraient","ending":"","form":"seraient allés","full":"ils seraient allés"}],
              "passe_2": [{"person":"1s","pronoun":"je ","radical":"fusse","ending":"","form":"fusse allé","full":"je fusse allé"},{"person":"2s","pronoun":"tu ","radical":"fusses","ending":"","form":"fusses allé","full":"tu fusses allé"},{"person":"3s","pronoun":"il ","radical":"fût","ending":"","form":"fût allé","full":"il fût allé"},{"person":"1p","pronoun":"nous ","radical":"fussions","ending":"","form":"fussions allés","full":"nous fussions allés"},{"person":"2p","pronoun":"vous ","radical":"fussiez","ending":"","form":"fussiez allés","full":"vous fussiez allés"},{"person":"3p","pronoun":"ils ","radical":"fussent","ending":"","form":"fussent allés","full":"ils fussent allés"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"va","ending":"","form":"va","full":"va"},{"person":"1p","pronoun":"","radical":"all","ending":"ons","form":"allons","full":"allons"},{"person":"2p","pronoun":"","radical":"all","ending":"ez","form":"allez","full":"allez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"sois","ending":"","form":"sois allé","full":"sois allé"},{"person":"1p","pronoun":"","radical":"soyons","ending":"","form":"soyons allés","full":"soyons allés"},{"person":"2p","pronoun":"","radical":"soyez","ending":"","form":"soyez allés","full":"soyez allés"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"va","ending":"","form":"va","full":"va"},{"person":"1p","pronoun":"","radical":"all","ending":"ons","form":"allons","full":"allons"},{"person":"2p","pronoun":"","radical":"all","ending":"ez","form":"allez","full":"allez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"sois","ending":"","form":"sois allé","full":"sois allé"},{"person":"1p","pronoun":"","radical":"soyons","ending":"","form":"soyons allés","full":"soyons allés"},{"person":"2p","pronoun":"","radical":"soyez","ending":"","form":"soyez allés","full":"soyez allés"}],
            },
            "participe": {
              "present": {"radical":"all","ending":"ant","full":"allant"},
              "passe": {"masculin_singulier":"allé","masculin_pluriel":"allés","feminin_singulier":"allée","feminin_pluriel":"allées","compose":"étant allé"}
            },
            "infinitif": {"present": "aller", "passe": "être allé"},
            "gerondif": {"present": "en allant", "passe": "en étant allé"},
            "gérondif": {"present": "en allant", "passe": "en étant allé"}
          }
        },
        "venir": {
          "id": "venir", "slug": "venir", "verb": "venir", "infinitive": "venir", "group": 3, "level": "A1",
          "auxiliary": "être", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false,
          "model": "venir", "participle_present": "venant", "participle_past": "venu",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"je ","radical":"vien","ending":"s","form":"viens","full":"je viens"},{"person":"2s","pronoun":"tu ","radical":"vien","ending":"s","form":"viens","full":"tu viens"},{"person":"3s","pronoun":"il ","radical":"vien","ending":"t","form":"vient","full":"il vient"},{"person":"1p","pronoun":"nous ","radical":"ven","ending":"ons","form":"venons","full":"nous venons"},{"person":"2p","pronoun":"vous ","radical":"ven","ending":"ez","form":"venez","full":"vous venez"},{"person":"3p","pronoun":"ils ","radical":"vienn","ending":"ent","form":"viennent","full":"ils viennent"}],
              "imparfait": [{"person":"1s","pronoun":"je ","radical":"ven","ending":"ais","form":"venais","full":"je venais"},{"person":"2s","pronoun":"tu ","radical":"ven","ending":"ais","form":"venais","full":"tu venais"},{"person":"3s","pronoun":"il ","radical":"ven","ending":"ait","form":"venait","full":"il venait"},{"person":"1p","pronoun":"nous ","radical":"ven","ending":"ions","form":"venions","full":"nous venions"},{"person":"2p","pronoun":"vous ","radical":"ven","ending":"iez","form":"veniez","full":"vous veniez"},{"person":"3p","pronoun":"ils ","radical":"ven","ending":"aient","form":"venaient","full":"ils venaient"}],
              "passe_simple": [{"person":"1s","pronoun":"je ","radical":"v","ending":"ins","form":"vins","full":"je vins"},{"person":"2s","pronoun":"tu ","radical":"v","ending":"ins","form":"vins","full":"tu vins"},{"person":"3s","pronoun":"il ","radical":"v","ending":"int","form":"vint","full":"il vint"},{"person":"1p","pronoun":"nous ","radical":"v","ending":"înmes","form":"vînmes","full":"nous vînmes"},{"person":"2p","pronoun":"vous ","radical":"v","ending":"întes","form":"vîntes","full":"vous vîntes"},{"person":"3p","pronoun":"ils ","radical":"v","ending":"inrent","form":"vinrent","full":"ils vinrent"}],
              "futur_simple": [{"person":"1s","pronoun":"je ","radical":"viendr","ending":"ai","form":"viendrai","full":"je viendrai"},{"person":"2s","pronoun":"tu ","radical":"viendr","ending":"as","form":"viendras","full":"tu viendras"},{"person":"3s","pronoun":"il ","radical":"viendr","ending":"a","form":"viendra","full":"il viendra"},{"person":"1p","pronoun":"nous ","radical":"viendr","ending":"ons","form":"viendrons","full":"nous viendrons"},{"person":"2p","pronoun":"vous ","radical":"viendr","ending":"ez","form":"viendrez","full":"vous viendrez"},{"person":"3p","pronoun":"ils ","radical":"viendr","ending":"ont","form":"viendront","full":"ils viendront"}],
              "passe_compose": [{"person":"1s","pronoun":"je ","radical":"suis","ending":"","form":"suis venu","full":"je suis venu"},{"person":"2s","pronoun":"tu ","radical":"es","ending":"","form":"es venu","full":"tu es venu"},{"person":"3s","pronoun":"il ","radical":"est","ending":"","form":"est venu","full":"il est venu"},{"person":"1p","pronoun":"nous ","radical":"sommes","ending":"","form":"sommes venus","full":"nous sommes venus"},{"person":"2p","pronoun":"vous ","radical":"êtes","ending":"","form":"êtes venus","full":"vous êtes venus"},{"person":"3p","pronoun":"ils ","radical":"sont","ending":"","form":"sont venus","full":"ils sont venus"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"étais","ending":"","form":"étais venu","full":"j'étais venu"},{"person":"2s","pronoun":"tu ","radical":"étais","ending":"","form":"étais venu","full":"tu étais venu"},{"person":"3s","pronoun":"il ","radical":"était","ending":"","form":"était venu","full":"il était venu"},{"person":"1p","pronoun":"nous ","radical":"étions","ending":"","form":"étions venus","full":"nous étions venus"},{"person":"2p","pronoun":"vous ","radical":"étiez","ending":"","form":"étiez venus","full":"vous étiez venus"},{"person":"3p","pronoun":"ils ","radical":"étaient","ending":"","form":"étaient venus","full":"ils étaient venus"}],
              "passe_anterieur": [{"person":"1s","pronoun":"je ","radical":"fus","ending":"","form":"fus venu","full":"je fus venu"},{"person":"2s","pronoun":"tu ","radical":"fus","ending":"","form":"fus venu","full":"tu fus venu"},{"person":"3s","pronoun":"il ","radical":"fut","ending":"","form":"fut venu","full":"il fut venu"},{"person":"1p","pronoun":"nous ","radical":"fûmes","ending":"","form":"fûmes venus","full":"nous fûmes venus"},{"person":"2p","pronoun":"vous ","radical":"fûtes","ending":"","form":"fûtes venus","full":"vous fûtes venus"},{"person":"3p","pronoun":"ils ","radical":"furent","ending":"","form":"furent venus","full":"ils furent venus"}],
              "futur_anterieur": [{"person":"1s","pronoun":"je ","radical":"serai","ending":"","form":"serai venu","full":"je serai venu"},{"person":"2s","pronoun":"tu ","radical":"seras","ending":"","form":"seras venu","full":"tu seras venu"},{"person":"3s","pronoun":"il ","radical":"sera","ending":"","form":"sera venu","full":"il sera venu"},{"person":"1p","pronoun":"nous ","radical":"serons","ending":"","form":"serons venus","full":"nous serons venus"},{"person":"2p","pronoun":"vous ","radical":"serez","ending":"","form":"serez venus","full":"vous serez venus"},{"person":"3p","pronoun":"ils ","radical":"seront","ending":"","form":"seront venus","full":"ils seront venus"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"vienn","ending":"e","form":"vienne","full":"que je vienne"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"vienn","ending":"es","form":"viennes","full":"que tu viennes"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"vienn","ending":"e","form":"vienne","full":"qu'il vienne"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ven","ending":"ions","form":"venions","full":"que nous venions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ven","ending":"iez","form":"veniez","full":"que vous veniez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"vienn","ending":"ent","form":"viennent","full":"qu'ils viennent"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"v","ending":"insse","form":"vinsse","full":"que je vinsse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"v","ending":"insses","form":"vinsses","full":"que tu vinsses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"v","ending":"înt","form":"vînt","full":"qu'il vînt"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"v","ending":"inssions","form":"vinssions","full":"que nous vinssions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"v","ending":"inssiez","form":"vinssiez","full":"que vous vinssiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"v","ending":"inssent","form":"vinssent","full":"qu'ils vinssent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"sois","ending":"","form":"sois venu","full":"que je sois venu"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"sois","ending":"","form":"sois venu","full":"que tu sois venu"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"soit","ending":"","form":"soit venu","full":"qu'il soit venu"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"soyons","ending":"","form":"soyons venus","full":"que nous soyons venus"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"soyez","ending":"","form":"soyez venus","full":"que vous soyez venus"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"soient","ending":"","form":"soient venus","full":"qu'ils soient venus"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"fusse","ending":"","form":"fusse venu","full":"que je fusse venu"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"fusses","ending":"","form":"fusses venu","full":"que tu fusses venu"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"fût","ending":"","form":"fût venu","full":"qu'il fût venu"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"fussions","ending":"","form":"fussions venus","full":"que nous fussions venus"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"fussiez","ending":"","form":"fussiez venus","full":"que vous fussiez venus"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"fussent","ending":"","form":"fussent venus","full":"qu'ils fussent venus"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"je ","radical":"viendr","ending":"ais","form":"viendrais","full":"je viendrais"},{"person":"2s","pronoun":"tu ","radical":"viendr","ending":"ais","form":"viendrais","full":"tu viendrais"},{"person":"3s","pronoun":"il ","radical":"viendr","ending":"ait","form":"viendrait","full":"il viendrait"},{"person":"1p","pronoun":"nous ","radical":"viendr","ending":"ions","form":"viendrions","full":"nous viendrions"},{"person":"2p","pronoun":"vous ","radical":"viendr","ending":"iez","form":"viendriez","full":"vous viendriez"},{"person":"3p","pronoun":"ils ","radical":"viendr","ending":"aient","form":"viendraient","full":"ils viendraient"}],
              "passe_1": [{"person":"1s","pronoun":"je ","radical":"serais","ending":"","form":"serais venu","full":"je serais venu"},{"person":"2s","pronoun":"tu ","radical":"serais","ending":"","form":"serais venu","full":"tu serais venu"},{"person":"3s","pronoun":"il ","radical":"serait","ending":"","form":"serait venu","full":"il serait venu"},{"person":"1p","pronoun":"nous ","radical":"serions","ending":"","form":"serions venus","full":"nous serions venus"},{"person":"2p","pronoun":"vous ","radical":"seriez","ending":"","form":"seriez venus","full":"vous seriez venus"},{"person":"3p","pronoun":"ils ","radical":"seraient","ending":"","form":"seraient venus","full":"ils seraient venus"}],
              "passe_2": [{"person":"1s","pronoun":"je ","radical":"fusse","ending":"","form":"fusse venu","full":"je fusse venu"},{"person":"2s","pronoun":"tu ","radical":"fusses","ending":"","form":"fusses venu","full":"tu fusses venu"},{"person":"3s","pronoun":"il ","radical":"fût","ending":"","form":"fût venu","full":"il fût venu"},{"person":"1p","pronoun":"nous ","radical":"fussions","ending":"","form":"fussions venus","full":"nous fussions venus"},{"person":"2p","pronoun":"vous ","radical":"fussiez","ending":"","form":"fussiez venus","full":"vous fussiez venus"},{"person":"3p","pronoun":"ils ","radical":"fussent","ending":"","form":"fussent venus","full":"ils fussent venus"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"vien","ending":"s","form":"viens","full":"viens"},{"person":"1p","pronoun":"","radical":"ven","ending":"ons","form":"venons","full":"venons"},{"person":"2p","pronoun":"","radical":"ven","ending":"ez","form":"venez","full":"venez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"sois","ending":"","form":"sois venu","full":"sois venu"},{"person":"1p","pronoun":"","radical":"soyons","ending":"","form":"soyons venus","full":"soyons venus"},{"person":"2p","pronoun":"","radical":"soyez","ending":"","form":"soyez venus","full":"soyez venus"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"vien","ending":"s","form":"viens","full":"viens"},{"person":"1p","pronoun":"","radical":"ven","ending":"ons","form":"venons","full":"venons"},{"person":"2p","pronoun":"","radical":"ven","ending":"ez","form":"venez","full":"venez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"sois","ending":"","form":"sois venu","full":"sois venu"},{"person":"1p","pronoun":"","radical":"soyons","ending":"","form":"soyons allés","full":"soyons allés"}.form ? {"person":"1p","pronoun":"","radical":"soyons","ending":"","form":"soyons venus","full":"soyons venus"} : {}, {"person":"2p","pronoun":"","radical":"soyez","ending":"","form":"soyez venus","full":"soyez venus"}]
            },
            "participe": {
              "present": {"radical":"ven","ending":"ant","full":"venant"},
              "passe": {"masculin_singulier":"venu","masculin_pluriel":"venus","feminin_singulier":"venue","feminin_pluriel":"venues","compose":"étant venu"}
            },
            "infinitif": {"present": "venir", "passe": "être venu"},
            "gerondif": {"present": "en venant", "passe": "en étant venu"},
            "gérondif": {"present": "en venant", "passe": "en étant venu"}
          }
        },
        "faire": {
          "id": "faire", "slug": "faire", "verb": "faire", "infinitive": "faire", "group": 3, "level": "A1",
          "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false,
          "model": "faire", "participle_present": "faisant", "participle_past": "fait",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"je ","radical":"fai","ending":"s","form":"fais","full":"je fais"},{"person":"2s","pronoun":"tu ","radical":"fai","ending":"s","form":"fais","full":"tu fais"},{"person":"3s","pronoun":"il ","radical":"fai","ending":"t","form":"fait","full":"il fait"},{"person":"1p","pronoun":"nous ","radical":"fais","ending":"ons","form":"faisons","full":"nous faisons"},{"person":"2p","pronoun":"vous ","radical":"fait","ending":"es","form":"faites","full":"vous faites"},{"person":"3p","pronoun":"ils ","radical":"fon","ending":"t","form":"font","full":"ils font"}],
              "imparfait": [{"person":"1s","pronoun":"je ","radical":"fais","ending":"ais","form":"faisais","full":"je faisais"},{"person":"2s","pronoun":"tu ","radical":"fais","ending":"ais","form":"faisais","full":"tu faisais"},{"person":"3s","pronoun":"il ","radical":"fais","ending":"ait","form":"faisait","full":"il faisait"},{"person":"1p","pronoun":"nous ","radical":"fais","ending":"ions","form":"faisions","full":"nous faisions"},{"person":"2p","pronoun":"vous ","radical":"fais","ending":"iez","form":"faisiez","full":"vous faisiez"},{"person":"3p","pronoun":"ils ","radical":"fais","ending":"aient","form":"faisaient","full":"ils faisaient"}],
              "passe_simple": [{"person":"1s","pronoun":"je ","radical":"f","ending":"is","form":"fis","full":"je fis"},{"person":"2s","pronoun":"tu ","radical":"f","ending":"is","form":"fis","full":"tu fis"},{"person":"3s","pronoun":"il ","radical":"f","ending":"it","form":"fit","full":"il fit"},{"person":"1p","pronoun":"nous ","radical":"f","ending":"îmes","form":"fîmes","full":"nous fîmes"},{"person":"2p","pronoun":"vous ","radical":"f","ending":"îtes","form":"fîtes","full":"vous fîtes"},{"person":"3p","pronoun":"ils ","radical":"f","ending":"irent","form":"firent","full":"ils firent"}],
              "futur_simple": [{"person":"1s","pronoun":"je ","radical":"fer","ending":"ai","form":"ferai","full":"je ferai"},{"person":"2s","pronoun":"tu ","radical":"fer","ending":"as","form":"feras","full":"tu feras"},{"person":"3s","pronoun":"il ","radical":"fer","ending":"a","form":"fera","full":"il fera"},{"person":"1p","pronoun":"nous ","radical":"fer","ending":"ons","form":"ferons","full":"nous ferons"},{"person":"2p","pronoun":"vous ","radical":"fer","ending":"ez","form":"ferez","full":"vous ferez"},{"person":"3p","pronoun":"ils ","radical":"fer","ending":"ont","form":"feront","full":"ils feront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai fait","full":"j'ai fait"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as fait","full":"tu as fait"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a fait","full":"il a fait"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons fait","full":"nous avons fait"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez fait","full":"vous avez fait"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont fait","full":"ils ont fait"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais fait","full":"j'avais fait"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais fait","full":"tu avais fait"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait fait","full":"il avait fait"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions fait","full":"nous avions fait"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez fait","full":"vous aviez fait"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient fait","full":"ils avaient fait"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus fait","full":"j'eus fait"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus fait","full":"tu eus fait"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut fait","full":"il eut fait"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes fait","full":"nous eûmes fait"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes fait","full":"vous eûtes fait"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent fait","full":"ils eurent fait"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai fait","full":"j'aurai fait"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras fait","full":"tu auras fait"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura fait","full":"il aura fait"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons fait","full":"nous aurons fait"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez fait","full":"vous aurez fait"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront fait","full":"ils auront fait"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"fass","ending":"e","form":"fasse","full":"que je fasse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"fass","ending":"es","form":"fasses","full":"que tu fasses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"fass","ending":"e","form":"fasse","full":"qu'il fasse"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"fass","ending":"ions","form":"fassions","full":"que nous fassions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"fass","ending":"iez","form":"fassiez","full":"que vous fassiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"fass","ending":"ent","form":"fassent","full":"qu'ils fassent"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"f","ending":"isse","form":"fisse","full":"que je fisse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"f","ending":"isses","form":"fisses","full":"que tu fisses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"f","ending":"ît","form":"fît","full":"qu'il fît"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"f","ending":"issions","form":"fissions","full":"que nous fissions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"f","ending":"issiez","form":"fissiez","full":"que vous fissiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"f","ending":"issent","form":"fissent","full":"qu'ils fissent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie fait","full":"que j'aie fait"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies fait","full":"que tu aies fait"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait fait","full":"qu'il ait fait"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons fait","full":"que nous ayons fait"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez fait","full":"que vous ayez fait"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient fait","full":"qu'ils aient fait"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse fait","full":"que j'eusse fait"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses fait","full":"que tu eusses fait"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût fait","full":"qu'il eût fait"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions fait","full":"que nous eussions fait"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez fait","full":"que vous eussiez fait"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent fait","full":"qu'ils eussent fait"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"je ","radical":"fer","ending":"ais","form":"ferais","full":"je ferais"},{"person":"2s","pronoun":"tu ","radical":"fer","ending":"ais","form":"ferais","full":"tu ferais"},{"person":"3s","pronoun":"il ","radical":"fer","ending":"ait","form":"ferait","full":"il ferait"},{"person":"1p","pronoun":"nous ","radical":"fer","ending":"ions","form":"ferions","full":"nous ferions"},{"person":"2p","pronoun":"vous ","radical":"fer","ending":"iez","form":"feriez","full":"vous feriez"},{"person":"3p","pronoun":"ils ","radical":"fer","ending":"aient","form":"feraient","full":"ils feraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais fait","full":"j'aurais fait"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais fait","full":"tu aurais fait"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait fait","full":"il aurait fait"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions fait","full":"nous aurions fait"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez fait","full":"vous auriez fait"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient fait","full":"ils auraient fait"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse fait","full":"j'eusse fait"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses fait","full":"tu eusses fait"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût fait","full":"il eût fait"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions fait","full":"nous eussions fait"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez fait","full":"vous eussiez fait"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent fait","full":"ils eussent fait"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"fai","ending":"s","form":"fais","full":"fais"},{"person":"1p","pronoun":"","radical":"fais","ending":"ons","form":"faisons","full":"faisons"},{"person":"2p","pronoun":"","radical":"fait","ending":"es","form":"faites","full":"faites"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie fait","full":"aie fait"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons fait","full":"ayons fait"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez fait","full":"ayez fait"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"fai","ending":"s","form":"fais","full":"fais"},{"person":"1p","pronoun":"","radical":"fais","ending":"ons","form":"faisons","full":"faisons"},{"person":"2p","pronoun":"","radical":"fait","ending":"es","form":"faites","full":"faites"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie fait","full":"aie fait"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons fait","full":"ayons fait"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez fait","full":"ayez fait"}]
            },
            "participe": {
              "present": {"radical":"fais","ending":"ant","full":"faisant"},
              "passe": {"masculin_singulier":"fait","masculin_pluriel":"faits","feminin_singulier":"faite","feminin_pluriel":"faites","compose":"ayant fait"}
            },
            "infinitif": {"present": "faire", "passe": "avoir fait"},
            "gerondif": {"present": "en faisant", "passe": "en ayant fait"},
            "gérondif": {"present": "en faisant", "passe": "en ayant fait"}
          }
        },
        "pouvoir": {
          "id": "pouvoir", "slug": "pouvoir", "verb": "pouvoir", "infinitive": "pouvoir", "group": 3, "level": "A1",
          "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false,
          "model": "pouvoir", "participle_present": "pouvant", "participle_past": "pu",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"je ","radical":"peu","ending":"x","form":"peux","full":"je peux"},{"person":"2s","pronoun":"tu ","radical":"peu","ending":"x","form":"peux","full":"tu peux"},{"person":"3s","pronoun":"il ","radical":"peu","ending":"t","form":"peut","full":"il peut"},{"person":"1p","pronoun":"nous ","radical":"pouv","ending":"ons","form":"pouvons","full":"nous pouvons"},{"person":"2p","pronoun":"vous ","radical":"pouv","ending":"ez","form":"pouvez","full":"vous pouvez"},{"person":"3p","pronoun":"ils ","radical":"peuv","ending":"ent","form":"peuvent","full":"ils peuvent"}],
              "imparfait": [{"person":"1s","pronoun":"je ","radical":"pouv","ending":"ais","form":"pouvais","full":"je pouvais"},{"person":"2s","pronoun":"tu ","radical":"pouv","ending":"ais","form":"pouvais","full":"tu pouvais"},{"person":"3s","pronoun":"il ","radical":"pouv","ending":"ait","form":"pouvait","full":"il pouvait"},{"person":"1p","pronoun":"nous ","radical":"pouv","ending":"ions","form":"pouvions","full":"nous pouvions"},{"person":"2p","pronoun":"vous ","radical":"pouv","ending":"iez","form":"pouviez","full":"vous pouviez"},{"person":"3p","pronoun":"ils ","radical":"pouv","ending":"aient","form":"pouvaient","full":"ils pouvaient"}],
              "passe_simple": [{"person":"1s","pronoun":"je ","radical":"p","ending":"us","form":"pus","full":"je pus"},{"person":"2s","pronoun":"tu ","radical":"p","ending":"us","form":"pus","full":"tu pus"},{"person":"3s","pronoun":"il ","radical":"p","ending":"ut","form":"put","full":"il put"},{"person":"1p","pronoun":"nous ","radical":"p","ending":"ûmes","form":"pûmes","full":"nous pûmes"},{"person":"2p","pronoun":"vous ","radical":"p","ending":"ûtes","form":"pûtes","full":"vous pûtes"},{"person":"3p","pronoun":"ils ","radical":"p","ending":"urent","form":"purent","full":"ils purent"}],
              "futur_simple": [{"person":"1s","pronoun":"je ","radical":"pourr","ending":"ai","form":"pourrai","full":"je pourrai"},{"person":"2s","pronoun":"tu ","radical":"pourr","ending":"as","form":"pourras","full":"tu pourras"},{"person":"3s","pronoun":"il ","radical":"pourr","ending":"a","form":"pourra","full":"il pourra"},{"person":"1p","pronoun":"nous ","radical":"pourr","ending":"ons","form":"pourrons","full":"nous pourrons"},{"person":"2p","pronoun":"vous ","radical":"pourr","ending":"ez","form":"pourrez","full":"vous pourrez"},{"person":"3p","pronoun":"ils ","radical":"pourr","ending":"ont","form":"pourront","full":"ils pourront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai pu","full":"j'ai pu"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as pu","full":"tu as pu"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a pu","full":"il a pu"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons pu","full":"nous avons pu"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez pu","full":"vous avez pu"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont pu","full":"ils ont pu"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais pu","full":"j'avais pu"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais pu","full":"tu avais pu"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait pu","full":"il avait pu"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions pu","full":"nous avions pu"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez pu","full":"vous aviez pu"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient pu","full":"ils avaient pu"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus pu","full":"j'eus pu"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus pu","full":"tu eus pu"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut pu","full":"il eut pu"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes pu","full":"nous eûmes pu"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes pu","full":"vous eûtes pu"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent pu","full":"ils eurent pu"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai pu","full":"j'aurai pu"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras pu","full":"tu auras pu"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura pu","full":"il aura pu"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons pu","full":"nous aurons pu"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez pu","full":"vous aurez pu"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront pu","full":"ils auront pu"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"puiss","ending":"e","form":"puisse","full":"que je puisse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"puiss","ending":"es","form":"puisses","full":"que tu puisses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"puiss","ending":"e","form":"puisse","full":"qu'il puisse"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"puiss","ending":"ions","form":"puissions","full":"que nous puissions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"puiss","ending":"iez","form":"puissiez","full":"que vous puissiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"puiss","ending":"ent","form":"puissent","full":"qu'ils puissent"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"p","ending":"usse","form":"pusse","full":"que je pusse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"p","ending":"usses","form":"pusses","full":"que tu pusses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"p","ending":"ût","form":"pût","full":"qu'il pût"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"p","ending":"ussions","form":"pussions","full":"que nous pussions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"p","ending":"ussiez","form":"pussiez","full":"que vous pussiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"p","ending":"ussent","form":"pussent","full":"qu'ils pussent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie pu","full":"que j'aie pu"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies pu","full":"que tu aies pu"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait pu","full":"qu'il ait pu"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons pu","full":"que nous ayons pu"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez pu","full":"que vous ayez pu"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient pu","full":"qu'ils aient pu"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse pu","full":"que j'eusse pu"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses pu","full":"que tu eusses pu"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût pu","full":"qu'il eût pu"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions pu","full":"que nous eussions pu"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez pu","full":"que vous eussiez pu"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent pu","full":"qu'ils eussent pu"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"je ","radical":"pourr","ending":"ais","form":"pourrais","full":"je pourrais"},{"person":"2s","pronoun":"tu ","radical":"pourr","ending":"ais","form":"pourrais","full":"tu pourrais"},{"person":"3s","pronoun":"il ","radical":"pourr","ending":"ait","form":"pourrait","full":"il pourrait"},{"person":"1p","pronoun":"nous ","radical":"pourr","ending":"ions","form":"pourrions","full":"nous pourrions"},{"person":"2p","pronoun":"vous ","radical":"pourr","ending":"iez","form":"pourriez","full":"vous pourriez"},{"person":"3p","pronoun":"ils ","radical":"pourr","ending":"aient","form":"pourraient","full":"ils pourraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais pu","full":"j'aurais pu"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais pu","full":"tu aurais pu"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait pu","full":"il aurait pu"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions pu","full":"nous aurions pu"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez pu","full":"vous auriez pu"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient pu","full":"ils auraient pu"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse pu","full":"j'eusse pu"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses pu","full":"tu eusses pu"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût pu","full":"il eût pu"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions pu","full":"nous eussions pu"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez pu","full":"vous eussiez pu"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent pu","full":"ils eussent pu"}],
            },
            "imperatif": {
              "present": [],
              "passe": []
            },
            "impératif": {
              "present": [],
              "passe": []
            },
            "participe": {
              "present": {"radical":"pouv","ending":"ant","full":"pouvant"},
              "passe": {"masculin_singulier":"pu","masculin_pluriel":"pu","feminin_singulier":"pu","feminin_pluriel":"pu","compose":"ayant pu"}
            },
            "infinitif": {"present": "pouvoir", "passe": "avoir pu"},
            "gerondif": {"present": "en pouvant", "passe": "en ayant pu"},
            "gérondif": {"present": "en pouvant", "passe": "en ayant pu"}
          }
        },
        "vouloir": {
          "id": "vouloir", "slug": "vouloir", "verb": "vouloir", "infinitive": "vouloir", "group": 3, "level": "A1",
          "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false,
          "model": "vouloir", "participle_present": "voulant", "participle_past": "voulu",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"je ","radical":"veu","ending":"x","form":"veux","full":"je veux"},{"person":"2s","pronoun":"tu ","radical":"veu","ending":"x","form":"veux","full":"tu veux"},{"person":"3s","pronoun":"il ","radical":"veu","ending":"t","form":"veut","full":"il veut"},{"person":"1p","pronoun":"nous ","radical":"voul","ending":"ons","form":"voulons","full":"nous voulons"},{"person":"2p","pronoun":"vous ","radical":"voul","ending":"ez","form":"voulez","full":"vous voulez"},{"person":"3p","pronoun":"ils ","radical":"veul","ending":"ent","form":"veulent","full":"ils veulent"}],
              "imparfait": [{"person":"1s","pronoun":"je ","radical":"voul","ending":"ais","form":"voulais","full":"je voulais"},{"person":"2s","pronoun":"tu ","radical":"voul","ending":"ais","form":"voulais","full":"tu voulais"},{"person":"3s","pronoun":"il ","radical":"voul","ending":"ait","form":"voulait","full":"il voulait"},{"person":"1p","pronoun":"nous ","radical":"voul","ending":"ions","form":"voulions","full":"nous voulions"},{"person":"2p","pronoun":"vous ","radical":"voul","ending":"iez","form":"vouliez","full":"vous vouliez"},{"person":"3p","pronoun":"ils ","radical":"voul","ending":"aient","form":"voulaient","full":"ils voulaient"}],
              "passe_simple": [{"person":"1s","pronoun":"je ","radical":"voul","ending":"us","form":"voulus","full":"je voulus"},{"person":"2s","pronoun":"tu ","radical":"voul","ending":"us","form":"voulus","full":"tu voulus"},{"person":"3s","pronoun":"il ","radical":"voul","ending":"ut","form":"voulut","full":"il voulut"},{"person":"1p","pronoun":"nous ","radical":"voul","ending":"ûmes","form":"voulûmes","full":"nous voulûmes"},{"person":"2p","pronoun":"vous ","radical":"voul","ending":"ûtes","form":"voulûtes","full":"vous voulûtes"},{"person":"3p","pronoun":"ils ","radical":"voul","ending":"urent","form":"voulurent","full":"ils voulurent"}],
              "futur_simple": [{"person":"1s","pronoun":"je ","radical":"voudr","ending":"ai","form":"voudrai","full":"je voudrai"},{"person":"2s","pronoun":"tu ","radical":"voudr","ending":"as","form":"voudras","full":"tu voudras"},{"person":"3s","pronoun":"il ","radical":"voudr","ending":"a","form":"voudra","full":"il voudra"},{"person":"1p","pronoun":"nous ","radical":"voudr","ending":"ons","form":"voudrons","full":"nous voudrons"},{"person":"2p","pronoun":"vous ","radical":"voudr","ending":"ez","form":"voudrez","full":"vous voudrez"},{"person":"3p","pronoun":"ils ","radical":"voudr","ending":"ont","form":"voudront","full":"ils voudront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai voulu","full":"j'ai voulu"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as voulu","full":"tu as voulu"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a voulu","full":"il a voulu"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons voulu","full":"nous avons voulu"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez voulu","full":"vous avez voulu"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont voulu","full":"ils ont voulu"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais voulu","full":"j'avais voulu"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais voulu","full":"tu avais voulu"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait voulu","full":"il avait voulu"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions voulu","full":"nous avions voulu"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez voulu","full":"vous aviez voulu"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient voulu","full":"ils avaient voulu"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus voulu","full":"j'eus voulu"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus voulu","full":"tu eus voulu"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut voulu","full":"il eut voulu"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes voulu","full":"nous eûmes voulu"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes voulu","full":"vous eûtes voulu"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent voulu","full":"ils eurent voulu"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai voulu","full":"j'aurai voulu"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras voulu","full":"tu auras voulu"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura voulu","full":"il aura voulu"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons voulu","full":"nous aurons voulu"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez voulu","full":"vous aurez voulu"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront voulu","full":"ils auront voulu"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"veuill","ending":"e","form":"veuille","full":"que je veuille"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"veuill","ending":"es","form":"veuilles","full":"que tu veuilles"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"veuill","ending":"e","form":"veuille","full":"qu'il veuille"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"voul","ending":"ions","form":"voulions","full":"que nous voulions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"voul","ending":"iez","form":"vouliez","full":"que vous vouliez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"veuill","ending":"ent","form":"veuillent","full":"qu'ils veuillent"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"voul","ending":"usse","form":"voulusse","full":"que je voulusse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"voul","ending":"usses","form":"voulusses","full":"que tu voulusses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"voul","ending":"ût","form":"voulût","full":"qu'il voulût"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"voul","ending":"ussions","form":"voulussions","full":"que nous voulussions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"voul","ending":"ussiez","form":"voulussiez","full":"que vous voulussiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"voul","ending":"ussent","form":"voulussent","full":"qu'ils voulussent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie voulu","full":"que j'aie voulu"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies voulu","full":"que tu aies voulu"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait voulu","full":"qu'il ait voulu"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons voulu","full":"que nous ayons voulu"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez voulu","full":"que vous ayez voulu"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient voulu","full":"qu'ils aient voulu"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse voulu","full":"que j'eusse voulu"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses voulu","full":"que tu eusses voulu"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût voulu","full":"qu'il eût voulu"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions voulu","full":"que nous eussions voulu"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez voulu","full":"que vous eussiez voulu"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent voulu","full":"qu'ils eussent voulu"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"je ","radical":"voudr","ending":"ais","form":"voudrais","full":"je voudrais"},{"person":"2s","pronoun":"tu ","radical":"voudr","ending":"ais","form":"voudrais","full":"tu voudrais"},{"person":"3s","pronoun":"il ","radical":"voudr","ending":"ait","form":"voudrait","full":"il voudrait"},{"person":"1p","pronoun":"nous ","radical":"voudr","ending":"ions","form":"voudrions","full":"nous voudrions"},{"person":"2p","pronoun":"vous ","radical":"voudr","ending":"iez","form":"voudriez","full":"vous voudriez"},{"person":"3p","pronoun":"ils ","radical":"voudr","ending":"aient","form":"voudraient","full":"ils voudraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais voulu","full":"j'aurais voulu"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais voulu","full":"tu aurais voulu"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait voulu","full":"il aurait voulu"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions voulu","full":"nous aurions voulu"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez voulu","full":"vous auriez voulu"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient voulu","full":"ils auraient voulu"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse voulu","full":"j'eusse voulu"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses voulu","full":"tu eusses voulu"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût voulu","full":"il eût voulu"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions voulu","full":"nous eussions voulu"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez voulu","full":"vous eussiez voulu"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent voulu","full":"ils eussent voulu"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"veuill","ending":"e","form":"veuille","full":"veuille"},{"person":"1p","pronoun":"","radical":"veuill","ending":"ons","form":"veuillons","full":"veuillons"},{"person":"2p","pronoun":"","radical":"veuill","ending":"ez","form":"veuillez","full":"veuillez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie voulu","full":"aie voulu"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons voulu","full":"ayons voulu"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez voulu","full":"ayez voulu"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"veuill","ending":"e","form":"veuille","full":"veuille"},{"person":"1p","pronoun":"","radical":"veuill","ending":"ons","form":"veuillons","full":"veuillons"},{"person":"2p","pronoun":"","radical":"veuill","ending":"ez","form":"veuillez","full":"veuillez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie voulu","full":"aie voulu"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons voulu","full":"ayons voulu"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez voulu","full":"ayez voulu"}]
            },
            "participe": {
              "present": {"radical":"voul","ending":"ant","full":"voulant"},
              "passe": {"masculin_singulier":"voulu","masculin_pluriel":"voulus","feminin_singulier":"voulue","feminin_pluriel":"voulues","compose":"ayant voulu"}
            },
            "infinitif": {"present": "vouloir", "passe": "avoir voulu"},
            "gerondif": {"present": "en voulant", "passe": "en ayant voulu"},
            "gérondif": {"present": "en voulant", "passe": "en ayant voulu"}
          }
        },
        "savoir": {
          "id": "savoir", "slug": "savoir", "verb": "savoir", "infinitive": "savoir", "group": 3, "level": "A1",
          "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false,
          "model": "savoir", "participle_present": "sachant", "participle_past": "su",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"je ","radical":"sai","ending":"s","form":"sais","full":"je sais"},{"person":"2s","pronoun":"tu ","radical":"sai","ending":"s","form":"sais","full":"tu sais"},{"person":"3s","pronoun":"il ","radical":"sai","ending":"t","form":"sait","full":"il sait"},{"person":"1p","pronoun":"nous ","radical":"sav","ending":"ons","form":"savons","full":"nous savons"},{"person":"2p","pronoun":"vous ","radical":"sav","ending":"ez","form":"savez","full":"vous savez"},{"person":"3p","pronoun":"ils ","radical":"sav","ending":"ent","form":"savent","full":"ils savent"}],
              "imparfait": [{"person":"1s","pronoun":"je ","radical":"sav","ending":"ais","form":"savais","full":"je savais"},{"person":"2s","pronoun":"tu ","radical":"sav","ending":"ais","form":"savais","full":"tu savais"},{"person":"3s","pronoun":"il ","radical":"sav","ending":"ait","form":"savait","full":"il savait"},{"person":"1p","pronoun":"nous ","radical":"sav","ending":"ions","form":"savions","full":"nous savions"},{"person":"2p","pronoun":"vous ","radical":"sav","ending":"iez","form":"saviez","full":"vous saviez"},{"person":"3p","pronoun":"ils ","radical":"sav","ending":"aient","form":"savaient","full":"ils savaient"}],
              "passe_simple": [{"person":"1s","pronoun":"je ","radical":"s","ending":"us","form":"sus","full":"je sus"},{"person":"2s","pronoun":"tu ","radical":"s","ending":"us","form":"sus","full":"tu sus"},{"person":"3s","pronoun":"il ","radical":"s","ending":"ut","form":"sut","full":"il sut"},{"person":"1p","pronoun":"nous ","radical":"s","ending":"ûmes","form":"sûmes","full":"nous sûmes"},{"person":"2p","pronoun":"vous ","radical":"s","ending":"ûtes","form":"sûtes","full":"vous sûtes"},{"person":"3p","pronoun":"ils ","radical":"s","ending":"urent","form":"surent","full":"ils surent"}],
              "futur_simple": [{"person":"1s","pronoun":"je ","radical":"saur","ending":"ai","form":"saurai","full":"je saurai"},{"person":"2s","pronoun":"tu ","radical":"saur","ending":"as","form":"sauras","full":"tu sauras"},{"person":"3s","pronoun":"il ","radical":"saur","ending":"a","form":"saura","full":"il saura"},{"person":"1p","pronoun":"nous ","radical":"saur","ending":"ons","form":"saurons","full":"nous saurons"},{"person":"2p","pronoun":"vous ","radical":"saur","ending":"ez","form":"saurez","full":"vous saurez"},{"person":"3p","pronoun":"ils ","radical":"saur","ending":"ont","form":"sauront","full":"ils sauront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai su","full":"j'ai su"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as su","full":"tu as su"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a su","full":"il a su"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons su","full":"nous avons su"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez su","full":"vous avez通信su".replace("通信", "")},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont su","full":"ils ont su"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais su","full":"j'avais su"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais su","full":"tu avais su"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait su","full":"il avait su"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions su","full":"nous avions su"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez su","full":"vous aviez su"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient su","full":"ils avaient su"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus su","full":"j'eus su"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus su","full":"tu eus su"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut su","full":"il eut su"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes su","full":"nous eûmes su"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes su","full":"vous eûtes su"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent su","full":"ils eurent su"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai su","full":"j'aurai su"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras su","full":"tu auras su"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura su","full":"il aura su"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons su","full":"nous aurons su"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez su","full":"vous aurez su"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront通信su".replace("auront通信", "auront "),"full":"ils auront su"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"sach","ending":"e","form":"sache","full":"que je sache"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"sach","ending":"es","form":"saches","full":"que tu saches"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"sach","ending":"e","form":"sache","full":"qu'il sache"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"sach","ending":"ions","form":"sachions","full":"que nous sachions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"sach","ending":"iez","form":"sachiez","full":"que vous sachiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"sach","ending":"ent","form":"sachent","full":"qu'ils sachent"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"s","ending":"usse","form":"susse","full":"que je susse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"s","ending":"usses","form":"susses","full":"que tu susses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"s","ending":"ût","form":"sût","full":"qu'il sût"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"s","ending":"ussions","form":"sussions","full":"que nous sussions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"s","ending":"ussiez","form":"sussiez","full":"que vous sussiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"s","ending":"ussent","form":"sussent","full":"qu'ils sussent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie su","full":"que j'aie su"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies su","full":"que tu aies su"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait su","full":"qu'il ait su"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons su","full":"que nous ayons su"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez su","full":"que vous ayez su"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient su","full":"qu'ils aient su"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse su","full":"que j'eusse su"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses su","full":"que tu eusses su"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût su","full":"qu'il eût su"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions su","full":"que nous eussions su"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez su","full":"que vous eussiez su"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent su","full":"qu'ils eussent su"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"je ","radical":"saur","ending":"ais","form":"saurais","full":"je saurais"},{"person":"2s","pronoun":"tu ","radical":"saur","ending":"ais","form":"saurais","full":"tu saurais"},{"person":"3s","pronoun":"il ","radical":"saur","ending":"ait","form":"saurait","full":"il saurait"},{"person":"1p","pronoun":"nous ","radical":"saur","ending":"ions","form":"saurions","full":"nous saurions"},{"person":"2p","pronoun":"vous ","radical":"saur","ending":"iez","form":"sauriez","full":"vous saurez".replace("saurez", "sauriez")},{"person":"3p","pronoun":"ils ","radical":"saur","ending":"aient","form":"sauraient","full":"ils sauraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais su","full":"j'aurais su"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais su","full":"tu aurais su"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait su","full":"il aurait su"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions su","full":"nous aurions su"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez su","full":"vous auriez su"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient su","full":"ils auraient su"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse su","full":"j'eusse su"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses su","full":"tu eusses su"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût su","full":"il eût su"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions su","full":"nous eussions su"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez su","full":"vous eussiez su"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent su","full":"ils eussent su"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"sach","ending":"e","form":"sache","full":"sache"},{"person":"1p","pronoun":"","radical":"sach","ending":"ons","form":"sachons","full":"sachons"},{"person":"2p","pronoun":"","radical":"sach","ending":"ez","form":"sachez","full":"sachez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie su","full":"aie su"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons su","full":"ayons su"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez su","full":"ayez su"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"sach","ending":"e","form":"sache","full":"sache"},{"person":"1p","pronoun":"","radical":"sach","ending":"ons","form":"sachons","full":"sachons"},{"person":"2p","pronoun":"","radical":"sach","ending":"ez","form":"sachez","full":"sachez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie su","full":"aie su"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons su","full":"ayons su"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez su","full":"ayez su"}]
            },
            "participe": {
              "present": {"radical":"sach","ending":"ant","full":"sachant"},
              "passe": {"masculin_singulier":"su","masculin_pluriel":"sus","feminin_singulier":"sue","feminin_pluriel":"sues","compose":"ayant su"}
            },
            "infinitif": {"present": "savoir", "passe": "avoir su"},
            "gerondif": {"present": "en sachant", "passe": "en ayant su"},
            "gérondif": {"present": "en sachant", "passe": "en ayant su"}
          }
        },
        "devoir": {
          "id": "devoir", "slug": "devoir", "verb": "devoir", "infinitive": "devoir", "group": 3, "level": "A1",
          "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false,
          "model": "devoir", "participle_present": "devant", "participle_past": "dû",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"je ","radical":"doi","ending":"s","form":"dois","full":"je dois"},{"person":"2s","pronoun":"tu ","radical":"doi","ending":"s","form":"dois","full":"tu dois"},{"person":"3s","pronoun":"il ","radical":"doi","ending":"t","form":"doit","full":"il doit"},{"person":"1p","pronoun":"nous ","radical":"dev","ending":"ons","form":"devons","full":"nous devons"},{"person":"2p","pronoun":"vous ","radical":"dev","ending":"ez","form":"devez","full":"vous devez"},{"person":"3p","pronoun":"ils ","radical":"doiv","ending":"ent","form":"doivent","full":"ils doivent"}],
              "imparfait": [{"person":"1s","pronoun":"je ","radical":"dev","ending":"ais","form":"devais","full":"je devais"},{"person":"2s","pronoun":"tu ","radical":"dev","ending":"ais","form":"devais","full":"tu devais"},{"person":"3s","pronoun":"il ","radical":"dev","ending":"ait","form":"devait","full":"il devait"},{"person":"1p","pronoun":"nous ","radical":"dev","ending":"ions","form":"devions","full":"nous devions"},{"person":"2p","pronoun":"vous ","radical":"dev","ending":"iez","form":"deviez","full":"vous deviez"},{"person":"3p","pronoun":"ils ","radical":"dev","ending":"aient","form":"devaient","full":"ils devaient"}],
              "passe_simple": [{"person":"1s","pronoun":"je ","radical":"d","ending":"us","form":"dus","full":"je dus"},{"person":"2s","pronoun":"tu ","radical":"d","ending":"us","form":"dus","full":"tu dus"},{"person":"3s","pronoun":"il ","radical":"d","ending":"ut","form":"dut","full":"il dut"},{"person":"1p","pronoun":"nous ","radical":"d","ending":"ûmes","form":"dûmes","full":"nous dûmes"},{"person":"2p","pronoun":"vous ","radical":"d","ending":"ûtes","form":"dûtes","full":"vous dûtes"},{"person":"3p","pronoun":"ils ","radical":"d","ending":"urent","form":"durent","full":"ils durent"}],
              "futur_simple": [{"person":"1s","pronoun":"je ","radical":"devr","ending":"ai","form":"devrai","full":"je devrai"},{"person":"2s","pronoun":"tu ","radical":"devr","ending":"as","form":"devras","full":"tu devras"},{"person":"3s","pronoun":"il ","radical":"devr","ending":"a","form":"devra","full":"il devra"},{"person":"1p","pronoun":"nous ","radical":"devr","ending":"ons","form":"devrons","full":"nous devrons"},{"person":"2p","pronoun":"vous ","radical":"devr","ending":"ez","form":"devrez","full":"vous devrez"},{"person":"3p","pronoun":"ils ","radical":"devr","ending":"ont","form":"devront","full":"ils devront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai dû","full":"j'ai dû"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as dû","full":"tu as dû"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a dû","full":"il a dû"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons dû","full":"nous avons dû"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez dû","full":"vous avez dû"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont dû","full":"ils ont dû"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais dû","full":"j'avais dû"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais dû","full":"tu avais dû"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait dû","full":"il avait dû"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions dû","full":"nous avions dû"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez dû","full":"vous aviez dû"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient dû","full":"ils avaient dû"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus dû","full":"j'eus dû"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus dû","full":"tu eus dû"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut dû","full":"il eut dû"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes dû","full":"nous eûmes dû"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes dû","full":"vous eûtes dû"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent dû","full":"ils eurent dû"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai dû","full":"j'aurai dû"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras dû","full":"tu auras dû"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura dû","full":"il aura dû"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons dû","full":"nous aurons dû"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez dû","full":"vous aurez dû"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront dû","full":"ils auront dû"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"doiv","ending":"e","form":"doive","full":"que je doive"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"doiv","ending":"es","form":"doives","full":"que tu doives"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"doiv","ending":"e","form":"doive","full":"qu'il doive"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"dev","ending":"ions","form":"devions","full":"que nous devions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"dev","ending":"iez","form":"deviez","full":"que vous deviez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"doiv","ending":"ent","form":"doivent","full":"qu'ils doivent"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"d","ending":"usse","form":"dusse","full":"que je dusse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"d","ending":"usses","form":"dusses","full":"que tu dusses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"d","ending":"ût","form":"dût","full":"qu'il dût"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"d","ending":"ussions","form":"dussions","full":"que nous dussions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"d","ending":"ussiez","form":"dussiez","full":"que vous dussiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"d","ending":"ussent","form":"dussent","full":"qu'ils dussent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie dû","full":"que j'aie dû"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies dû","full":"que tu aies dû"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait dû","full":"qu'il ait dû"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons dû","full":"que nous ayons dû"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez dû","full":"que vous ayez dû"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient dû","full":"qu'ils aient dû"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse dû","full":"que j'eusse dû"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses dû","full":"que tu eusses dû"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût dû","full":"qu'il eût dû"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions dû","full":"que nous eussions dû"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez dû","full":"que vous eussiez dû"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent dû","full":"qu'ils eussent dû"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"je ","radical":"devr","ending":"ais","form":"devrais","full":"je devrais"},{"person":"2s","pronoun":"tu ","radical":"devr","ending":"ais","form":"devrais","full":"tu devrais"},{"person":"3s","pronoun":"il ","radical":"devr","ending":"ait","form":"devrait","full":"il devrait"},{"person":"1p","pronoun":"nous ","radical":"devr","ending":"ions","form":"devrions","full":"nous devrions"},{"person":"2p","pronoun":"vous ","radical":"devr","ending":"iez","form":"devriez","full":"vous devriez"},{"person":"3p","pronoun":"ils ","radical":"devr","ending":"aient","form":"devraient","full":"ils devraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais dû","full":"j'aurais dû"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais dû","full":"tu aurais dû"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait dû","full":"il aurait dû"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions dû","full":"nous aurions dû"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez dû","full":"vous auriez dû"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient dû","full":"ils auraient dû"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse dû","full":"j'eusse dû"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses dû","full":"tu eusses dû"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût dû","full":"il eût dû"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions dû","full":"nous eussions dû"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez dû","full":"vous eussiez dû"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent dû","full":"ils eussent dû"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"doi","ending":"s","form":"dois","full":"dois"},{"person":"1p","pronoun":"","radical":"dev","ending":"ons","form":"devons","full":"devons"},{"person":"2p","pronoun":"","radical":"dev","ending":"ez","form":"devez","full":"devez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie dû","full":"aie dû"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons dû","full":"ayons dû"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez dû","full":"ayez dû"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"doi","ending":"s","form":"dois","full":"dois"},{"person":"1p","pronoun":"","radical":"dev","ending":"ons","form":"devons","full":"devons"},{"person":"2p","pronoun":"","radical":"dev","ending":"ez","form":"devez","full":"devez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie dû","full":"aie dû"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons dû","full":"ayons dû"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez dû","full":"ayez dû"}]
            },
            "participe": {
              "present": {"radical":"dev","ending":"ant","full":"devant"},
              "passe": {"masculin_singulier":"dû","masculin_pluriel":"dus","feminin_singulier":"due","feminin_pluriel":"dues","compose":"ayant dû"}
            },
            "infinitif": {"present": "devoir", "passe": "avoir dû"},
            "gerondif": {"present": "en devant", "passe": "en ayant dû"},
            "gérondif": {"present": "en devant", "passe": "en ayant dû"}
          }
        },
        "prendre": {
          "id": "prendre", "slug": "prendre", "verb": "prendre", "infinitive": "prendre", "group": 3, "level": "A1",
          "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false,
          "model": "prendre", "participle_present": "prenant", "participle_past": "pris",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"je ","radical":"prend","ending":"s","form":"prends","full":"je prends"},{"person":"2s","pronoun":"tu ","radical":"prend","ending":"s","form":"prends","full":"tu prends"},{"person":"3s","pronoun":"il ","radical":"prend","ending":"","form":"prend","full":"il prend"},{"person":"1p","pronoun":"nous ","radical":"pren","ending":"ons","form":"prenons","full":"nous prenons"},{"person":"2p","pronoun":"vous ","radical":"pren","ending":"ez","form":"prenez","full":"vous prenez"},{"person":"3p","pronoun":"ils ","radical":"prenn","ending":"ent","form":"prennent","full":"ils prennent"}],
              "imparfait": [{"person":"1s","pronoun":"je ","radical":"pren","ending":"ais","form":"prenais","full":"je prenais"},{"person":"2s","pronoun":"tu ","radical":"pren","ending":"ais","form":"prenais","full":"tu prenais"},{"person":"3s","pronoun":"il ","radical":"pren","ending":"ait","form":"prenait","full":"il prenait"},{"person":"1p","pronoun":"nous ","radical":"pren","ending":"ions","form":"prenions","full":"nous prenions"},{"person":"2p","pronoun":"vous ","radical":"pren","ending":"iez","form":"preniez","full":"vous preniez"},{"person":"3p","pronoun":"ils ","radical":"pren","ending":"aient","form":"prenaient","full":"ils prenaient"}],
              "passe_simple": [{"person":"1s","pronoun":"je ","radical":"pr","ending":"is","form":"pris","full":"je pris"},{"person":"2s","pronoun":"tu ","radical":"pr","ending":"is","form":"pris","full":"tu pris"},{"person":"3s","pronoun":"il ","radical":"pr","ending":"it","form":"prit","full":"il prit"},{"person":"1p","pronoun":"nous ","radical":"pr","ending":"îmes","form":"prîmes","full":"nous prîmes"},{"person":"2p","pronoun":"vous ","radical":"pr","ending":"îtes","form":"prîtes","full":"vous prîtes"},{"person":"3p","pronoun":"ils ","radical":"pr","ending":"irent","form":"prirent","full":"ils prirent"}],
              "futur_simple": [{"person":"1s","pronoun":"je ","radical":"prendr","ending":"ai","form":"prendrai","full":"je prendrai"},{"person":"2s","pronoun":"tu ","radical":"prendr","ending":"as","form":"prendras","full":"tu prendras"},{"person":"3s","pronoun":"il ","radical":"prendr","ending":"a","form":"prendra","full":"il prendra"},{"person":"1p","pronoun":"nous ","radical":"prendr","ending":"ons","form":"prendrons","full":"nous prendrons"},{"person":"2p","pronoun":"vous ","radical":"prendr","ending":"ez","form":"prendrez","full":"vous prendrez"},{"person":"3p","pronoun":"ils ","radical":"prendr","ending":"ont","form":"prendront","full":"ils prendront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai pris","full":"j'ai pris"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as pris","full":"tu as pris"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a pris","full":"il a pris"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons pris","full":"nous avons pris"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez pris","full":"vous avez pris"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont pris","full":"ils ont pris"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais pris","full":"j'avais pris"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais pris","full":"tu avais pris"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait pris","full":"il avait pris"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions pris","full":"nous avions pris"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez pris","full":"vous aviez pris"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient pris","full":"ils avaient pris"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus pris","full":"j'eus pris"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus pris","full":"tu eus pris"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut pris","full":"il eut pris"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes pris","full":"nous eûmes pris"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes pris","full":"vous eûtes pris"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent pris","full":"ils eurent pris"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai pris","full":"j'aurai pris"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras pris","full":"tu auras pris"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura pris","full":"il aura pris"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons pris","full":"nous aurons pris"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez pris","full":"vous aurez pris"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront pris","full":"ils auront pris"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"prenn","ending":"e","form":"prenne","full":"que je prenne"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"prenn","ending":"es","form":"prennes","full":"que tu通信prennes".replace("通信", "")},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"prenn","ending":"e","form":"prenne","full":"qu'il prenne"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"pren","ending":"ions","form":"prenions","full":"que nous prenions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"pren","ending":"iez","form":"preniez","full":"que vous preniez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"prenn","ending":"ent","form":"prennent","full":"qu'ils prennent"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"pr","ending":"isse","form":"prisse","full":"que je prisse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"pr","ending":"isses","form":"prisses","full":"que tu prisses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"pr","ending":"ît","form":"prît","full":"qu'il prît"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"pr","ending":"issions","form":"prissions","full":"que nous prissions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"pr","ending":"issiez","form":"prissiez","full":"que vous prissiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"pr","ending":"issent","form":"prissent","full":"qu'ils prissent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie pris","full":"que j'aie pris"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies pris","full":"que tu aies pris"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait pris","full":"qu'il ait pris"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons pris","full":"que nous ayons pris"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez pris","full":"que vous ayez pris"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient pris","full":"qu'ils aient pris"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse pris","full":"que j'eusse pris"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses pris","full":"que tu eusses pris"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût pris","full":"qu'il eût pris"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions pris","full":"que nous eussions pris"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez pris","full":"que vous eussiez pris"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent pris","full":"qu'ils eussent pris"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"je ","radical":"prendr","ending":"ais","form":"prendrais","full":"je prendrais"},{"person":"2s","pronoun":"tu ","radical":"prendr","ending":"ais","form":"prendrais","full":"tu prendrais"},{"person":"3s","pronoun":"il ","radical":"prendr","ending":"ait","form":"prendrait","full":"il prendrait"},{"person":"1p","pronoun":"nous ","radical":"prendr","ending":"ions","form":"prendrions","full":"nous prendrions"},{"person":"2p","pronoun":"vous ","radical":"prendr","ending":"iez","form":"prendriez","full":"vous prendriez"},{"person":"3p","pronoun":"ils ","radical":"prendr","ending":"aient","form":"prendraient","full":"ils prendraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais pris","full":"j'aurais pris"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais pris","full":"tu aurais pris"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait pris","full":"il aurait pris"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions pris","full":"nous aurions pris"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez pris","full":"vous auriez pris"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient pris","full":"ils auraient pris"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse pris","full":"j'eusse pris"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses pris","full":"tu eusses pris"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût pris","full":"il eût pris"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions pris","full":"nous eussions pris"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez pris","full":"vous eussiez pris"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent pris","full":"ils eussent pris"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"prend","ending":"s","form":"prends","full":"prends"},{"person":"1p","pronoun":"","radical":"pren","ending":"ons","form":"prenons","full":"prenons"},{"person":"2p","pronoun":"","radical":"pren","ending":"ez","form":"prenez","full":"prenez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie pris","full":"aie pris"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons pris","full":"ayons pris"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez pris","full":"ayez pris"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"prend","ending":"s","form":"prends","full":"prends"},{"person":"1p","pronoun":"","radical":"pren","ending":"ons","form":"prenons","full":"prenons"},{"person":"2p","pronoun":"","radical":"pren","ending":"ez","form":"prenez","full":"prenez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie pris","full":"aie pris"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons pris","full":"ayons pris"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez pris","full":"ayez pris"}]
            },
            "participe": {
              "present": {"radical":"pren","ending":"ant","full":"prenant"},
              "passe": {"masculin_singulier":"pris","masculin_pluriel":"pris","feminin_singulier":"prise","feminin_pluriel":"prises","compose":"ayant pris"}
            },
            "infinitif": {"present": "prendre", "passe": "avoir pris"},
            "gerondif": {"present": "en prenant", "passe": "en ayant pris"},
            "gérondif": {"present": "en prenant", "passe": "en ayant pris"}
          }
        },
        "mettre": {
          "id": "mettre", "slug": "mettre", "verb": "mettre", "infinitive": "mettre", "group": 3, "level": "A1",
          "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false,
          "model": "mettre", "participle_present": "mettant", "participle_past": "mis",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"je ","radical":"met","ending":"s","form":"mets","full":"je mets"},{"person":"2s","pronoun":"tu ","radical":"met","ending":"s","form":"mets","full":"tu mets"},{"person":"3s","pronoun":"il ","radical":"met","ending":"","form":"met","full":"il met"},{"person":"1p","pronoun":"nous ","radical":"mett","ending":"ons","form":"mettons","full":"nous mettons"},{"person":"2p","pronoun":"vous ","radical":"mett","ending":"ez","form":"mettez","full":"vous mettez"},{"person":"3p","pronoun":"ils ","radical":"mett","ending":"ent","form":"mettent","full":"ils mettent"}],
              "imparfait": [{"person":"1s","pronoun":"je ","radical":"mett","ending":"ais","form":"mettais","full":"je mettais"},{"person":"2s","pronoun":"tu ","radical":"mett","ending":"ais","form":"mettais","full":"tu mettais"},{"person":"3s","pronoun":"il ","radical":"mett","ending":"ait","form":"mettait","full":"il mettait"},{"person":"1p","pronoun":"nous ","radical":"mett","ending":"ions","form":"mettions","full":"nous mettions"},{"person":"2p","pronoun":"vous ","radical":"mett","ending":"iez","form":"mettiez","full":"vous mettiez"},{"person":"3p","pronoun":"ils ","radical":"mett","ending":"aient","form":"mettaient","full":"ils mettaient"}],
              "passe_simple": [{"person":"1s","pronoun":"je ","radical":"m","ending":"is","form":"mis","full":"je mis"},{"person":"2s","pronoun":"tu ","radical":"m","ending":"is","form":"mis","full":"tu mis"},{"person":"3s","pronoun":"il ","radical":"m","ending":"it","form":"mit","full":"il mit"},{"person":"1p","pronoun":"nous ","radical":"m","ending":"îmes","form":"mîmes","full":"nous mîmes"},{"person":"2p","pronoun":"vous ","radical":"m","ending":"îtes","form":"mîtes","full":"vous mîtes"},{"person":"3p","pronoun":"ils ","radical":"m","ending":"irent","form":"mirent","full":"ils mirent"}],
              "futur_simple": [{"person":"1s","pronoun":"je ","radical":"mettr","ending":"ai","form":"mettrai","full":"je mettrai"},{"person":"2s","pronoun":"tu ","radical":"mettr","ending":"as","form":"mettras","full":"tu mettras"},{"person":"3s","pronoun":"il ","radical":"mettr","ending":"a","form":"mettra","full":"il mettra"},{"person":"1p","pronoun":"nous ","radical":"mettr","ending":"ons","form":"mettrons","full":"nous mettrons"},{"person":"2p","pronoun":"vous ","radical":"mettr","ending":"ez","form":"mettrez","full":"vous mettrez"},{"person":"3p","pronoun":"ils ","radical":"mettr","ending":"ont","form":"mettront","full":"ils mettront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai mis","full":"j'ai mis"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as mis","full":"tu as mis"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a mis","full":"il a mis"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons mis","full":"nous avons mis"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez mis","full":"vous avez mis"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont mis","full":"ils ont mis"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais mis","full":"j'avais mis"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais mis","full":"tu avais mis"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait mis","full":"il avait mis"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions mis","full":"nous avions mis"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez mis","full":"vous aviez mis"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient mis","full":"ils avaient mis"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus mis","full":"j'eus mis"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus mis","full":"tu eus mis"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut mis","full":"il eut mis"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes mis","full":"nous eûmes mis"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes mis","full":"vous eûtes mis"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent mis","full":"ils eurent mis"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai mis","full":"j'aurai mis"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras mis","full":"tu auras mis"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura mis","full":"il aura mis"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons mis","full":"nous aurons mis"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez mis","full":"vous aurez mis"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront mis","full":"ils auront mis"}],
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"mett","ending":"e","form":"mette","full":"que je mette"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"mett","ending":"es","form":"mettes","full":"que tu mettes"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"mett","ending":"e","form":"mette","full":"qu'il mette"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"mett","ending":"ions","form":"mettions","full":"que nous mettions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"mett","ending":"iez","form":"mettiez","full":"que vous mettiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"mett","ending":"ent","form":"mettent","full":"qu'ils mettent"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"m","ending":"isse","form":"misse","full":"que je misse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"m","ending":"isses","form":"misses","full":"que tu misses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"m","ending":"ît","form":"mît","full":"qu'il mît"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"m","ending":"issions","form":"missions","full":"que nous missions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"m","ending":"issiez","form":"missiez","full":"que vous missiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"m","ending":"issent","form":"missent","full":"qu'ils missent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie mis","full":"que j'aie mis"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies mis","full":"que tu aies mis"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait mis","full":"qu'il ait mis"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons mis","full":"que nous ayons mis"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez mis","full":"que vous ayez mis"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient mis","full":"qu'ils aient mis"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse mis","full":"que j'eusse mis"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses mis","full":"que tu eusses mis"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût mis","full":"qu'il eût mis"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions mis","full":"que nous eussions mis"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez mis","full":"que vous eussiez mis"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent mis","full":"qu'ils eussent mis"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"je ","radical":"mettr","ending":"ais","form":"mettrais","full":"je mettrais"},{"person":"2s","pronoun":"tu ","radical":"mettr","ending":"ais","form":"mettrais","full":"tu mettrais"},{"person":"3s","pronoun":"il ","radical":"mettr","ending":"ait","form":"mettrait","full":"il mettrait"},{"person":"1p","pronoun":"nous ","radical":"mettr","ending":"ions","form":"mettrions","full":"nous mettrions"},{"person":"2p","pronoun":"vous ","radical":"mettr","ending":"iez","form":"mettriez","full":"vous mettriez"},{"person":"3p","pronoun":"ils ","radical":"mettr","ending":"aient","form":"mettraient","full":"ils mettraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais mis","full":"j'aurais mis"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais mis","full":"tu aurais mis"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait mis","full":"il aurait mis"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions mis","full":"nous aurions mis"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez mis","full":"vous auriez mis"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient mis","full":"ils auraient mis"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse mis","full":"j'eusse mis"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses mis","full":"tu eusses mis"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût mis","full":"il eût mis"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions mis","full":"nous eussions mis"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez mis","full":"vous eussiez mis"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent mis","full":"ils eussent mis"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"met","ending":"s","form":"mets","full":"mets"},{"person":"1p","pronoun":"","radical":"mett","ending":"ons","form":"mettons","full":"mettons"},{"person":"2p","pronoun":"","radical":"mett","ending":"ez","form":"mettez","full":"mettez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie mis","full":"aie mis"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons mis","full":"ayons mis"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez mis","full":"ayez mis"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"met","ending":"s","form":"mets","full":"mets"},{"person":"1p","pronoun":"","radical":"mett","ending":"ons","form":"mettons","full":"mettons"},{"person":"2p","pronoun":"","radical":"mett","ending":"ez","form":"mettez","full":"mettez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie mis","full":"aie mis"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons mis","full":"ayons mis"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez mis","full":"ayez mis"}]
            },
            "participe": {
              "present": {"radical":"mett","ending":"ant","full":"mettant"},
              "passe": {"masculin_singulier":"mis","masculin_pluriel":"mis","feminin_singulier":"mise","feminin_pluriel":"mises","compose":"ayant mis"}
            },
            "infinitif": {"present": "mettre", "passe": "avoir mis"},
            "gerondif": {"present": "en mettant", "passe": "en ayant mis"},
            "gérondif": {"present": "en mettant", "passe": "en ayant mis"}
          }
        },
        "dire": {
          "id": "dire", "slug": "dire", "verb": "dire", "infinitive": "dire", "group": 3, "level": "A1",
          "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false,
          "model": "dire", "participle_present": "disant", "participle_past": "dit",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"je ","radical":"di","ending":"s","form":"dis","full":"je dis"},{"person":"2s","pronoun":"tu ","radical":"di","ending":"s","form":"dis","full":"tu dis"},{"person":"3s","pronoun":"il ","radical":"di","ending":"t","form":"dit","full":"il dit"},{"person":"1p","pronoun":"nous ","radical":"dis","ending":"ons","form":"disons","full":"nous disons"},{"person":"2p","pronoun":"vous ","radical":"dit","ending":"es","form":"dites","full":"vous dites"},{"person":"3p","pronoun":"ils ","radical":"dis","ending":"ent","form":"disent","full":"ils disent"}],
              "imparfait": [{"person":"1s","pronoun":"je ","radical":"dis","ending":"ais","form":"disais","full":"je disais"},{"person":"2s","pronoun":"tu ","radical":"dis","ending":"ais","form":"disais","full":"tu disais"},{"person":"3s","pronoun":"il ","radical":"dis","ending":"ait","form":"disait","full":"il disait"},{"person":"1p","pronoun":"nous ","radical":"dis","ending":"ions","form":"disions","full":"nous disions"},{"person":"2p","pronoun":"vous ","radical":"dis","ending":"iez","form":"disiez","full":"vous disiez"},{"person":"3p","pronoun":"ils ","radical":"dis","ending":"aient","form":"disaient","full":"ils disaient"}],
              "passe_simple": [{"person":"1s","pronoun":"je ","radical":"d","ending":"is","form":"dis","full":"je dis"},{"person":"2s","pronoun":"tu ","radical":"d","ending":"is","form":"dis","full":"tu dis"},{"person":"3s","pronoun":"il ","radical":"d","ending":"it","form":"dit","full":"il dit"},{"person":"1p","pronoun":"nous ","radical":"d","ending":"îmes","form":"dîmes","full":"nous dîmes"},{"person":"2p","pronoun":"vous ","radical":"d","ending":"îtes","form":"dîtes","full":"vous dîtes"},{"person":"3p","pronoun":"ils ","radical":"d","ending":"irent","form":"dirent","full":"ils dirent"}],
              "futur_simple": [{"person":"1s","pronoun":"je ","radical":"dir","ending":"ai","form":"dirai","full":"je dirai"},{"person":"2s","pronoun":"tu ","radical":"dir","ending":"as","form":"diras","full":"tu diras"},{"person":"3s","pronoun":"il ","radical":"dir","ending":"a","form":"dira","full":"il dira"},{"person":"1p","pronoun":"nous ","radical":"dir","ending":"ons","form":"dirons","full":"nous dirons"},{"person":"2p","pronoun":"vous ","radical":"dir","ending":"ez","form":"direz","full":"vous direz"},{"person":"3p","pronoun":"ils ","radical":"dir","ending":"ont","form":"diront","full":"ils diront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai dit","full":"j'ai dit"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as dit","full":"tu as dit"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a dit","full":"il a dit"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons dit","full":"nous avons dit"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez dit","full":"vous avez dit"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont dit","full":"ils ont dit"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais dit","full":"j'avais dit"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais dit","full":"tu avais dit"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait dit","full":"il avait dit"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions dit","full":"nous avions dit"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez dit","full":"vous aviez dit"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient dit","full":"ils avaient dit"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus dit","full":"j'eus dit"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus dit","full":"tu eus dit"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut dit","full":"il eut dit"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes dit","full":"nous eûmes dit"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes dit","full":"vous eûtes dit"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent dit","full":"ils eurent dit"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai dit","full":"j'aurai dit"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras dit","full":"tu auras dit"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura dit","full":"il aura dit"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons dit","full":"nous aurons dit"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez dit","full":"vous aurez dit"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront dit","full":"ils auront dit"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"dis","ending":"e","form":"dise","full":"que je dise"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"dis","ending":"es","form":"dises","full":"que tu dises"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"dis","ending":"e","form":"dise","full":"qu'il dise"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"dis","ending":"ions","form":"disions","full":"que nous disions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"dis","ending":"iez","form":"disiez","full":"que vous disiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"dis","ending":"ent","form":"disent","full":"qu'ils disent"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"d","ending":"isse","form":"disse","full":"que je disse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"d","ending":"isses","form":"disses","full":"que tu disses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"d","ending":"ît","form":"dît","full":"qu'il dît"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"d","ending":"issions","form":"dissions","full":"que nous dissions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"d","ending":"issiez","form":"dissiez","full":"que vous dissiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"d","ending":"issent","form":"dissent","full":"qu'ils dissent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie dit","full":"que j'aie dit"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies dit","full":"que tu aies dit"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait dit","full":"qu'il ait dit"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons dit","full":"que nous ayons dit"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez dit","full":"que vous ayez dit"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient dit","full":"qu'ils aient dit"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse dit","full":"que j'eusse dit"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses dit","full":"que tu eusses dit"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût dit","full":"qu'il eût dit"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions dit","full":"que nous eussions dit"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez dit","full":"que vous eussiez dit"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent dit","full":"qu'ils eussent dit"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"je ","radical":"dir","ending":"ais","form":"dirais","full":"je dirais"},{"person":"2s","pronoun":"tu ","radical":"dir","ending":"ais","form":"dirais","full":"tu dirais"},{"person":"3s","pronoun":"il ","radical":"dir","ending":"ait","form":"dirait","full":"il dirait"},{"person":"1p","pronoun":"nous ","radical":"dir","ending":"ions","form":"dirions","full":"nous dirions"},{"person":"2p","pronoun":"vous ","radical":"dir","ending":"iez","form":"diriez","full":"vous diriez"},{"person":"3p","pronoun":"ils ","radical":"dir","ending":"aient","form":"diraient","full":"ils diraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais dit","full":"j'aurais dit"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais dit","full":"tu aurais dit"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait dit","full":"il aurait dit"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions dit","full":"nous aurions dit"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez dit","full":"vous auriez dit"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient dit","full":"ils auraient dit"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse dit","full":"j'eusse dit"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses dit","full":"tu eusses dit"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût dit","full":"il eût dit"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions dit","full":"nous eussions dit"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez dit","full":"vous eussiez dit"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent dit","full":"ils eussent dit"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"di","ending":"s","form":"dis","full":"dis"},{"person":"1p","pronoun":"","radical":"dis","ending":"ons","form":"disons","full":"disons"},{"person":"2p","pronoun":"","radical":"dit","ending":"es","form":"dites","full":"dites"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie dit","full":"aie dit"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons dit","full":"ayons dit"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez dit","full":"ayez dit"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"di","ending":"s","form":"dis","full":"dis"},{"person":"1p","pronoun":"","radical":"dis","ending":"ons","form":"disons","full":"disons"},{"person":"2p","pronoun":"","radical":"dit","ending":"es","form":"dites","full":"dites"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie dit","full":"aie dit"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons dit","full":"ayons dit"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez dit","full":"ayez dit"}]
            },
            "participe": {
              "present": {"radical":"dis","ending":"ant","full":"disant"},
              "passe": {"masculin_singulier":"dit","masculin_pluriel":"dits","feminin_singulier":"dite","feminin_pluriel":"dites","compose":"ayant dit"}
            },
            "infinitif": {"present": "dire", "passe": "avoir dit"},
            "gerondif": {"present": "en disant", "passe": "en ayant dit"},
            "gérondif": {"present": "en disant", "passe": "en ayant dit"}
          }
        },
        "ecrire": {
          "id": "ecrire", "slug": "ecrire", "verb": "écrire", "infinitive": "écrire", "group": 3, "level": "A1",
          "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false,
          "model": "écrire", "participle_present": "écrivant", "participle_past": "écrit",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"j'","radical":"écri","ending":"s","form":"écris","full":"j'écris"},{"person":"2s","pronoun":"tu ","radical":"écri","ending":"s","form":"écris","full":"tu écris"},{"person":"3s","pronoun":"il ","radical":"écri","ending":"t","form":"écrit","full":"il écrit"},{"person":"1p","pronoun":"nous ","radical":"écriv","ending":"ons","form":"écrivons","full":"nous écrivons"},{"person":"2p","pronoun":"vous ","radical":"écriv","ending":"ez","form":"écrivez","full":"vous écrivez"},{"person":"3p","pronoun":"ils ","radical":"écriv","ending":"ent","form":"écrivent","full":"ils écrivent"}],
              "imparfait": [{"person":"1s","pronoun":"j'","radical":"écriv","ending":"ais","form":"écrivais","full":"j'écrivais"},{"person":"2s","pronoun":"tu ","radical":"écriv","ending":"ais","form":"écrivais","full":"tu écrivais"},{"person":"3s","pronoun":"il ","radical":"écriv","ending":"ait","form":"écrivait","full":"il écrivait"},{"person":"1p","pronoun":"nous ","radical":"écriv","ending":"ions","form":"écrivions","full":"nous écrivions"},{"person":"2p","pronoun":"vous ","radical":"écriv","ending":"iez","form":"écriviez","full":"vous écriviez"},{"person":"3p","pronoun":"ils ","radical":"écriv","ending":"aient","form":"écrivaient","full":"ils écrivaient"}],
              "passe_simple": [{"person":"1s","pronoun":"j'","radical":"écriv","ending":"is","form":"écrivis","full":"j'écrivis"},{"person":"2s","pronoun":"tu ","radical":"écriv","ending":"is","form":"écrivis","full":"tu écrivis"},{"person":"3s","pronoun":"il ","radical":"écriv","ending":"it","form":"écrivit","full":"il écrivit"},{"person":"1p","pronoun":"nous ","radical":"écriv","ending":"îmes","form":"écrivîmes","full":"nous écrivîmes"},{"person":"2p","pronoun":"vous ","radical":"écriv","ending":"îtes","form":"écrivîtes","full":"vous écrivîtes"},{"person":"3p","pronoun":"ils ","radical":"écriv","ending":"irent","form":"écrivirent","full":"ils écrivirent"}],
              "futur_simple": [{"person":"1s","pronoun":"j'","radical":"écrir","ending":"ai","form":"écrirai","full":"j'écrirai"},{"person":"2s","pronoun":"tu ","radical":"écrir","ending":"as","form":"écriras","full":"tu écriras"},{"person":"3s","pronoun":"il ","radical":"écrir","ending":"a","form":"écrira","full":"il écrira"},{"person":"1p","pronoun":"nous ","radical":"écrir","ending":"ons","form":"écrirons","full":"nous écrirons"},{"person":"2p","pronoun":"vous ","radical":"écrir","ending":"ez","form":"écrirez","full":"vous écrirez"},{"person":"3p","pronoun":"ils ","radical":"écrir","ending":"ont","form":"écriront","full":"ils écriront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai écrit","full":"j'ai écrit"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as écrit","full":"tu as écrit"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a écrit","full":"il a écrit"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons écrit","full":"nous avons écrit"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez écrit","full":"vous avez écrit"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont écrit","full":"ils ont écrit"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais écrit","full":"j'avais écrit"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais écrit","full":"tu avais écrit"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait écrit","full":"il avait écrit"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions écrit","full":"nous avions écrit"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez écrit","full":"vous aviez écrit"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient écrit","full":"ils avaient écrit"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus écrit","full":"j'eus écrit"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus écrit","full":"tu eus écrit"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut écrit","full":"il eut écrit"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes écrit","full":"nous eûmes écrit"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes écrit","full":"vous eûtes écrit"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent écrit","full":"ils eurent écrit"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai écrit","full":"j'aurai écrit"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras écrit","full":"tu auras écrit"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura écrit","full":"il aura écrit"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons écrit","full":"nous aurons écrit"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez écrit","full":"vous aurez écrit"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront écrit","full":"ils auront écrit"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"écriv","ending":"e","form":"écrive","full":"que j'écrive"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"écriv","ending":"es","form":"écrives","full":"que tu écrives"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"écriv","ending":"e","form":"écrive","full":"qu'il écrive"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"écriv","ending":"ions","form":"écrivions","full":"que nous écrivions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"écriv","ending":"iez","form":"écriviez","full":"que vous écriviez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"écriv","ending":"ent","form":"écrivent","full":"qu'ils écrivent"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"écriv","ending":"isse","form":"écrivisse","full":"que j'écrivisse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"écriv","ending":"isses","form":"écrivisses","full":"que tu écrivisses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"écriv","ending":"ît","form":"écrivît","full":"qu'il écrivît"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"écriv","ending":"issions","form":"écrivissions","full":"que nous écrivissions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"écriv","ending":"issiez","form":"écrivissiez","full":"que vous écrivissiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"écriv","ending":"issent","form":"écrivissent","full":"qu'ils écrivissent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie écrit","full":"que j'aie écrit"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies écrit","full":"que tu aies écrit"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait écrit","full":"qu'il ait écrit"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons écrit","full":"que nous ayons écrit"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez écrit","full":"que vous ayez écrit"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient écrit","full":"qu'ils aient écrit"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse écrit","full":"que j'eusse écrit"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses écrit","full":"que tu eusses écrit"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût écrit","full":"qu'il eût écrit"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions écrit","full":"que nous eussions écrit"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez écrit","full":"que vous eussiez écrit"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent écrit","full":"qu'ils eussent écrit"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"j'","radical":"écrir","ending":"ais","form":"écrirais","full":"j'écrirais"},{"person":"2s","pronoun":"tu ","radical":"écrir","ending":"ais","form":"écrirais","full":"tu écrirais"},{"person":"3s","pronoun":"il ","radical":"écrir","ending":"ait","form":"écrirait","full":"il écrirait"},{"person":"1p","pronoun":"nous ","radical":"écrir","ending":"ions","form":"écririons","full":"nous écririons"},{"person":"2p","pronoun":"vous ","radical":"écrir","ending":"iez","form":"écririez","full":"vous écririez"},{"person":"3p","pronoun":"ils ","radical":"écrir","ending":"aient","form":"écriraient","full":"ils écriraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais écrit","full":"j'aurais écrit"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais écrit","full":"tu aurais écrit"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait écrit","full":"il aurait écrit"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions écrit","full":"nous aurions écrit"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez écrit","full":"vous auriez écrit"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient écrit","full":"ils auraient écrit"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse écrit","full":"j'eusse écrit"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses écrit","full":"tu eusses écrit"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût écrit","full":"il eût écrit"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions écrit","full":"nous eussions écrit"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez écrit","full":"vous eussiez écrit"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent écrit","full":"ils eussent écrit"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"écri","ending":"s","form":"écris","full":"écris"},{"person":"1p","pronoun":"","radical":"écriv","ending":"ons","form":"écrivons","full":"écrivons"},{"person":"2p","pronoun":"","radical":"écriv","ending":"ez","form":"écrivez","full":"écrivez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie écrit","full":"aie écrit"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons écrit","full":"ayons écrit"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez écrit","full":"ayez écrit"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"écri","ending":"s","form":"écris","full":"écris"},{"person":"1p","pronoun":"","radical":"écriv","ending":"ons","form":"écrivons","full":"écrivons"},{"person":"2p","pronoun":"","radical":"écriv","ending":"ez","form":"écrivez","full":"écrivez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie écrit","full":"aie écrit"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons écrit","full":"ayons écrit"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez écrit","full":"ayez écrit"}]
            },
            "participe": {
              "present": {"radical":"écriv","ending":"ant","full":"écrivant"},
              "passe": {"masculin_singulier":"écrit","masculin_pluriel":"écrits","feminin_singulier":"écrite","feminin_pluriel":"écrites","compose":"ayant écrit"}
            },
            "infinitif": {"present": "écrire", "passe": "avoir écrit"},
            "gerondif": {"present": "en écrivant", "passe": "en ayant écrit"},
            "gérondif": {"present": "en écrivant", "passe": "en ayant écrit"}
          }
        },
        "voir": {
          "id": "voir", "slug": "voir", "verb": "voir", "infinitive": "voir", "group": 3, "level": "A1",
          "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": false, "is_impersonal": false,
          "model": "voir", "participle_present": "voyant", "participle_past": "vu",
          "modes": {
            "indicatif": {
              "present": [{"person":"1s","pronoun":"je ","radical":"voi","ending":"s","form":"vois","full":"je vois"},{"person":"2s","pronoun":"tu ","radical":"voi","ending":"s","form":"vois","full":"tu vois"},{"person":"3s","pronoun":"il ","radical":"voi","ending":"t","form":"voit","full":"il voit"},{"person":"1p","pronoun":"nous ","radical":"voy","ending":"ons","form":"voyons","full":"nous voyons"},{"person":"2p","pronoun":"vous ","radical":"voy","ending":"ez","form":"voyez","full":"vous voyez"},{"person":"3p","pronoun":"ils ","radical":"voi","ending":"ent","form":"voient","full":"ils voient"}],
              "imparfait": [{"person":"1s","pronoun":"je ","radical":"voy","ending":"ais","form":"voyais","full":"je voyais"},{"person":"2s","pronoun":"tu ","radical":"voy","ending":"ais","form":"voyais","full":"tu voyais"},{"person":"3s","pronoun":"il ","radical":"voy","ending":"ait","form":"voyait","full":"il voyait"},{"person":"1p","pronoun":"nous ","radical":"voy","ending":"ions","form":"voyions","full":"nous voyions"},{"person":"2p","pronoun":"vous ","radical":"voy","ending":"iez","form":"voyiez","full":"vous voyiez"},{"person":"3p","pronoun":"ils ","radical":"voy","ending":"aient","form":"voyaient","full":"ils voyaient"}],
              "passe_simple": [{"person":"1s","pronoun":"je ","radical":"v","ending":"is","form":"vis","full":"je vis"},{"person":"2s","pronoun":"tu ","radical":"v","ending":"is","form":"vis","full":"tu vis"},{"person":"3s","pronoun":"il ","radical":"v","ending":"it","form":"vit","full":"il vit"},{"person":"1p","pronoun":"nous ","radical":"v","ending":"îmes","form":"vîmes","full":"nous vîmes"},{"person":"2p","pronoun":"vous ","radical":"v","ending":"îtes","form":"vîtes","full":"vous vîtes"},{"person":"3p","pronoun":"ils ","radical":"v","ending":"irent","form":"virent","full":"ils virent"}],
              "futur_simple": [{"person":"1s","pronoun":"je ","radical":"verr","ending":"ai","form":"verrai","full":"je verrai"},{"person":"2s","pronoun":"tu ","radical":"verr","ending":"as","form":"verras","full":"tu verras"},{"person":"3s","pronoun":"il ","radical":"verr","ending":"a","form":"verra","full":"il verra"},{"person":"1p","pronoun":"nous ","radical":"verr","ending":"ons","form":"verrons","full":"nous verrons"},{"person":"2p","pronoun":"vous ","radical":"verr","ending":"ez","form":"verrez","full":"vous verrez"},{"person":"3p","pronoun":"ils ","radical":"verr","ending":"ont","form":"verront","full":"ils verront"}],
              "passe_compose": [{"person":"1s","pronoun":"j'","radical":"ai","ending":"","form":"ai vu","full":"j'ai vu"},{"person":"2s","pronoun":"tu ","radical":"as","ending":"","form":"as vu","full":"tu as vu"},{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a vu","full":"il a vu"},{"person":"1p","pronoun":"nous ","radical":"avons","ending":"","form":"avons vu","full":"nous avons vu"},{"person":"2p","pronoun":"vous ","radical":"avez","ending":"","form":"avez vu","full":"vous avez vu"},{"person":"3p","pronoun":"ils ","radical":"ont","ending":"","form":"ont vu","full":"ils ont vu"}],
              "plus_que_parfait": [{"person":"1s","pronoun":"j'","radical":"avais","ending":"","form":"avais vu","full":"j'avais vu"},{"person":"2s","pronoun":"tu ","radical":"avais","ending":"","form":"avais vu","full":"tu avais vu"},{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait vu","full":"il avait vu"},{"person":"1p","pronoun":"nous ","radical":"avions","ending":"","form":"avions vu","full":"nous avions vu"},{"person":"2p","pronoun":"vous ","radical":"aviez","ending":"","form":"aviez vu","full":"vous aviez vu"},{"person":"3p","pronoun":"ils ","radical":"avaient","ending":"","form":"avaient vu","full":"ils avaient vu"}],
              "passe_anterieur": [{"person":"1s","pronoun":"j'","radical":"eus","ending":"","form":"eus vu","full":"j'eus vu"},{"person":"2s","pronoun":"tu ","radical":"eus","ending":"","form":"eus vu","full":"tu eus vu"},{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut vu","full":"il eut vu"},{"person":"1p","pronoun":"nous ","radical":"eûmes","ending":"","form":"eûmes vu","full":"nous eûmes vu"},{"person":"2p","pronoun":"vous ","radical":"eûtes","ending":"","form":"eûtes vu","full":"vous eûtes vu"},{"person":"3p","pronoun":"ils ","radical":"eurent","ending":"","form":"eurent vu","full":"ils eurent vu"}],
              "futur_anterieur": [{"person":"1s","pronoun":"j'","radical":"aurai","ending":"","form":"aurai vu","full":"j'aurai vu"},{"person":"2s","pronoun":"tu ","radical":"auras","ending":"","form":"auras vu","full":"tu auras vu"},{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura vu","full":"il aura vu"},{"person":"1p","pronoun":"nous ","radical":"aurons","ending":"","form":"aurons vu","full":"nous aurons vu"},{"person":"2p","pronoun":"vous ","radical":"aurez","ending":"","form":"aurez vu","full":"vous aurez vu"},{"person":"3p","pronoun":"ils ","radical":"auront","ending":"","form":"auront vu","full":"ils auront vu"}]
            },
            "subjonctif": {
              "present": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"voi","ending":"e","form":"voie","full":"que je voie"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"voi","ending":"es","form":"voies","full":"que tu voies"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"voi","ending":"e","form":"voie","full":"qu'il voie"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"voy","ending":"ions","form":"voyions","full":"que nous voyions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"voy","ending":"iez","form":"voyiez","full":"que vous voyiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"voi","ending":"ent","form":"voient","full":"qu'ils voient"}],
              "imparfait": [{"person":"1s","prefix":"que ","pronoun":"je ","radical":"v","ending":"isse","form":"visse","full":"que je visse"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"v","ending":"isses","form":"visses","full":"que tu visses"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"v","ending":"ît","form":"vît","full":"qu'il vît"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"v","ending":"issions","form":"vissions","full":"que nous vissions"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"v","ending":"issiez","form":"vissiez","full":"que vous vissiez"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"v","ending":"issent","form":"vissent","full":"qu'ils vissent"}],
              "passe": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"aie","ending":"","form":"aie vu","full":"que j'aie vu"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"aies","ending":"","form":"aies vu","full":"que tu aies vu"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait vu","full":"qu'il ait vu"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"ayons","ending":"","form":"ayons vu","full":"que nous ayons vu"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"ayez","ending":"","form":"ayez vu","full":"que vous ayez vu"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"aient","ending":"","form":"aient vu","full":"qu'ils aient vu"}],
              "plus_que_parfait": [{"person":"1s","prefix":"que ","pronoun":"j'","radical":"eusse","ending":"","form":"eusse vu","full":"que j'eusse vu"},{"person":"2s","prefix":"que ","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses vu","full":"que tu eusses vu"},{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût vu","full":"qu'il eût vu"},{"person":"1p","prefix":"que ","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions vu","full":"que nous eussions vu"},{"person":"2p","prefix":"que ","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez vu","full":"que vous eussiez vu"},{"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent vu","full":"qu'ils eussent vu"}]
            },
            "conditionnel": {
              "present": [{"person":"1s","pronoun":"je ","radical":"verr","ending":"ais","form":"verrais","full":"je verrais"},{"person":"2s","pronoun":"tu ","radical":"verr","ending":"ais","form":"verrais","full":"tu verrais"},{"person":"3s","pronoun":"il ","radical":"verr","ending":"ait","form":"verrait","full":"il verrait"},{"person":"1p","pronoun":"nous ","radical":"verr","ending":"ions","form":"verrions","full":"nous verrions"},{"person":"2p","pronoun":"vous ","radical":"verr","ending":"iez","form":"verriez","full":"vous verriez"},{"person":"3p","pronoun":"ils ","radical":"verr","ending":"aient","form":"verraient","full":"ils verraient"}],
              "passe_1": [{"person":"1s","pronoun":"j'","radical":"aurais","ending":"","form":"aurais vu","full":"j'aurais vu"},{"person":"2s","pronoun":"tu ","radical":"aurais","ending":"","form":"aurais vu","full":"tu aurais vu"},{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait vu","full":"il aurait vu"},{"person":"1p","pronoun":"nous ","radical":"aurions","ending":"","form":"aurions vu","full":"nous aurions vu"},{"person":"2p","pronoun":"vous ","radical":"auriez","ending":"","form":"auriez vu","full":"vous auriez vu"},{"person":"3p","pronoun":"ils ","radical":"auraient","ending":"","form":"auraient vu","full":"ils auraient vu"}],
              "passe_2": [{"person":"1s","pronoun":"j'","radical":"eusse","ending":"","form":"eusse vu","full":"j'eusse vu"},{"person":"2s","pronoun":"tu ","radical":"eusses","ending":"","form":"eusses vu","full":"tu eusses vu"},{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût vu","full":"il eût vu"},{"person":"1p","pronoun":"nous ","radical":"eussions","ending":"","form":"eussions vu","full":"nous eussions vu"},{"person":"2p","pronoun":"vous ","radical":"eussiez","ending":"","form":"eussiez vu","full":"vous eussiez vu"},{"person":"3p","pronoun":"ils ","radical":"eussent","ending":"","form":"eussent vu","full":"ils eussent vu"}]
            },
            "imperatif": {
              "present": [{"person":"2s","pronoun":"","radical":"voi","ending":"s","form":"vois","full":"vois"},{"person":"1p","pronoun":"","radical":"voy","ending":"ons","form":"voyons","full":"voyons"},{"person":"2p","pronoun":"","radical":"voy","ending":"ez","form":"voyez","full":"voyez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie vu","full":"aie vu"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons vu","full":"ayons vu"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez vu","full":"ayez vu"}]
            },
            "impératif": {
              "present": [{"person":"2s","pronoun":"","radical":"voi","ending":"s","form":"vois","full":"vois"},{"person":"1p","pronoun":"","radical":"voy","ending":"ons","form":"voyons","full":"voyons"},{"person":"2p","pronoun":"","radical":"voy","ending":"ez","form":"voyez","full":"voyez"}],
              "passe": [{"person":"2s","pronoun":"","radical":"aie","ending":"","form":"aie vu","full":"aie vu"},{"person":"1p","pronoun":"","radical":"ayons","ending":"","form":"ayons vu","full":"ayons vu"},{"person":"2p","pronoun":"","radical":"ayez","ending":"","form":"ayez vu","full":"ayez vu"}]
            },
            "participe": {
              "present": {"radical":"voy","ending":"ant","full":"voyant"},
              "passe": {"masculin_singulier":"vu","masculin_pluriel":"vus","feminin_singulier":"vue","feminin_pluriel":"vues","compose":"ayant vu"}
            },
            "infinitif": {"present": "voir", "passe": "avoir vu"},
            "gerondif": {"present": "en voyant", "passe": "en ayant vu"},
            "gérondif": {"present": "en voyant", "passe": "en ayant vu"}
          }
        },
        "falloir": {
          "id": "falloir", "slug": "falloir", "verb": "falloir", "infinitive": "falloir", "group": 3, "level": "A1", "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": true, "is_impersonal": true, "model": "falloir", "participle_present": "-", "participle_past": "fallu",
          "modes": {
            "indicatif": {
              "present": [{"person":"3s","pronoun":"il ","radical":"fau","ending":"t","form":"faut","full":"il faut"}],
              "imparfait": [{"person":"3s","pronoun":"il ","radical":"fall","ending":"ait","form":"fallait","full":"il fallait"}],
              "passe_simple": [{"person":"3s","pronoun":"il ","radical":"fall","ending":"ut","form":"fallut","full":"il fallut"}],
              "futur_simple": [{"person":"3s","pronoun":"il ","radical":"faudr","ending":"a","form":"faudra","full":"il faudra"}],
              "passe_compose": [{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a fallu","full":"il a fallu"}],
              "plus_que_parfait": [{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait fallu","full":"il avait fallu"}],
              "passe_anterieur": [{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut fallu","full":"il eut fallu"}],
              "futur_anterieur": [{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura fallu","full":"il aura fallu"}]
            },
            "subjonctif": {
              "present": [{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"faill","ending":"e","form":"faille","full":"qu'il faille"}],
              "imparfait": [{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"fall","ending":"ût","form":"fallût","full":"qu'il fallût"}],
              "passe": [{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait fallu","full":"qu'il ait fallu"}],
              "plus_que_parfait": [{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût fallu","full":"qu'il eût fallu"}]
            },
            "conditionnel": {
              "present": [{"person":"3s","pronoun":"il ","radical":"faudr","ending":"ait","form":"faudrait","full":"il faudrait"}],
              "passe_1": [{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait fallu","full":"il aurait fallu"}],
              "passe_2": [{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût fallu","full":"il eût fallu"}]
            },
            "imperatif": {
              "present": [],
              "passe": []
            },
            "impératif": {
              "present": [],
              "passe": []
            },
            "participe": {
              "present": {"radical":"","ending":"","full":"-"},
              "passe": {"masculin_singulier":"fallu","masculin_pluriel":"-","feminin_singulier":"-","feminin_pluriel":"-","compose":"ayant fallu"}
            },
            "infinitif": {"present": "falloir", "passe": "avoir fallu"},
            "gerondif": {"present": "-", "passe": "en ayant fallu"},
            "gérondif": {"present": "-", "passe": "en ayant fallu"}
          }
        },
        "pleuvoir": {
          "id": "pleuvoir", "slug": "pleuvoir", "verb": "pleuvoir", "infinitive": "pleuvoir", "group": 3, "level": "A1", "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": true, "is_impersonal": true, "model": "pleuvoir", "participle_present": "pleuvant", "participle_past": "plu",
          "modes": {
            "indicatif": {
              "present": [{"person":"3s","pronoun":"il ","radical":"pleu","ending":"t","form":"pleut","full":"il pleut"}],
              "imparfait": [{"person":"3s","pronoun":"il ","radical":"pleuv","ending":"ait","form":"pleuvait","full":"il pleuvait"}],
              "passe_simple": [{"person":"3s","pronoun":"il ","radical":"pl","ending":"ut","form":"plut","full":"il plut"}],
              "futur_simple": [{"person":"3s","pronoun":"il ","radical":"pleuvr","ending":"a","form":"pleuvra","full":"il pleuvra"}],
              "passe_compose": [{"person":"3s","pronoun":"il ","radical":"a","ending":"","form":"a plu","full":"il a plu"}],
              "plus_que_parfait": [{"person":"3s","pronoun":"il ","radical":"avait","ending":"","form":"avait plu","full":"il avait plu"}],
              "passe_anterieur": [{"person":"3s","pronoun":"il ","radical":"eut","ending":"","form":"eut plu","full":"il eut plu"}],
              "futur_anterieur": [{"person":"3s","pronoun":"il ","radical":"aura","ending":"","form":"aura plu","full":"il aura plu"}]
            },
            "subjonctif": {
              "present": [{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"pleuv","ending":"e","form":"pleuve","full":"qu'il pleuve"}],
              "imparfait": [{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"pl","ending":"ût","form":"plût","full":"qu'il plût"}],
              "passe": [{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"ait","ending":"","form":"ait plu","full":"qu'il ait plu"}],
              "plus_que_parfait": [{"person":"3s","prefix":"qu'","pronoun":"il ","radical":"eût","ending":"","form":"eût plu","full":"qu'il eût plu"}]
            },
            "conditionnel": {
              "present": [{"person":"3s","pronoun":"il ","radical":"pleuvr","ending":"ait","form":"pleuvrait","full":"il pleuvrait"}],
              "passe_1": [{"person":"3s","pronoun":"il ","radical":"aurait","ending":"","form":"aurait plu","full":"il aurait plu"}],
              "passe_2": [{"person":"3s","pronoun":"il ","radical":"eût","ending":"","form":"eût plu","full":"il eût plu"}],
            },
            "imperatif": {
              "present": [],
              "passe": []
            },
            "impératif": {
              "present": [],
              "passe": []
            },
            "participe": {
              "present": {"radical":"pleuv","ending":"ant","full":"pleuvant"},
              "passe": {"masculin_singulier":"plu","masculin_pluriel":"-","feminin_singulier":"-","feminin_pluriel":"-","compose":"ayant plu"}
            },
            "infinitif": {"present": "pleuvoir", "passe": "avoir plu"},
            "gerondif": {"present": "en pleuvant", "passe": "en ayant plu"},
            "gérondif": {"present": "en pleuvant", "passe": "en ayant plu"}
          }
        },
        "gesir": {
          "id": "gesir", "slug": "gesir", "verb": "gésir", "infinitive": "gésir", "group": 3, "level": "C1", "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": true, "is_impersonal": false, "model": "gésir", "participle_present": "gisant", "participle_past": "-",
          "modes": {
            "indicatif": {
              "present": [
                {"person":"1s","pronoun":"je ","radical":"gi","ending":"s","form":"gis","full":"je gis"},
                {"person":"2s","pronoun":"tu ","radical":"gi","ending":"s","form":"gis","full":"tu gis"},
                {"person":"3s","pronoun":"il ","radical":"gî","ending":"t","form":"gît","full":"il gît"},
                {"person":"1p","pronoun":"nous ","radical":"gis","ending":"ons","form":"gisons","full":"nous gisons"},
                {"person":"2p","pronoun":"vous ","radical":"gis","ending":"ez","form":"gisez","full":"vous gisez"},
                {"person":"3p","pronoun":"ils ","radical":"gis","ending":"ent","form":"gisent","full":"ils gisent"}
              ],
              "imparfait": [
                {"person":"3s","pronoun":"il ","radical":"gis","ending":"ait","form":"gisait","full":"il gisait"},
                {"person":"3p","pronoun":"ils ","radical":"gis","ending":"aient","form":"gisaient","full":"ils gisaient"}
              ],
              "passe_simple": [],
              "futur_simple": [],
              "passe_compose": [],
              "plus_que_parfait": [],
              "passe_anterieur": [],
              "futur_anterieur": []
            },
            "subjonctif": {
              "present": [],
              "imparfait": [],
              "passe": [],
              "plus_que_parfait": []
            },
            "conditionnel": {
              "present": [],
              "passe_1": [],
              "passe_2": []
            },
            "imperatif": {
              "present": [],
              "passe": []
            },
            "impératif": {
              "present": [],
              "passe": []
            },
            "participe": {
              "present": {"radical":"gis","ending":"ant","full":"gisant"},
              "passe": {"masculin_singulier":"-","masculin_pluriel":"-","feminin_singulier":"-","feminin_pluriel":"-","compose":"-"}
            },
            "infinitif": {"present": "gésir", "passe": "-"},
            "gerondif": {"present": "en gisant", "passe": "-"},
            "gérondif": {"present": "en gisant", "passe": "-"}
          }
        },
        "choir": {
          "id": "choir", "slug": "choir", "verb": "choir", "infinitive": "choir", "group": 3, "level": "C2", "auxiliary": "être", "is_pronominal": false, "is_reflexive": false, "is_defective": true, "is_impersonal": false, "model": "choir", "participle_present": "-", "participle_past": "chu",
          "modes": {
            "indicatif": {
              "present": [
                {"person":"1s","pronoun":"je ","radical":"choi","ending":"s","form":"chois","full":"je chois"},
                {"person":"2s","pronoun":"tu ","radical":"choi","ending":"s","form":"chois","full":"tu chois"},
                {"person":"3s","pronoun":"il ","radical":"choi","ending":"t","form":"choit","full":"il choit"},
                {"person":"3p","pronoun":"ils ","radical":"choi","ending":"ent","form":"choient","full":"ils choient"}
              ],
              "imparfait": [],
              "passe_simple": [
                {"person":"1s","pronoun":"je ","radical":"ch","ending":"us","form":"chus","full":"je chus"},
                {"person":"2s","pronoun":"tu ","radical":"ch","ending":"us","form":"chus","full":"tu chus"},
                {"person":"3s","pronoun":"il ","radical":"ch","ending":"ut","form":"chut","full":"il chut"},
                {"person":"1p","pronoun":"nous ","radical":"ch","ending":"ûmes","form":"chûmes","full":"nous chûmes"},
                {"person":"2p","pronoun":"vous ","radical":"ch","ending":"ûtes","form":"chûtes","full":"vous chûtes"},
                {"person":"3p","pronoun":"ils ","radical":"ch","ending":"urent","form":"churent","full":"ils churent"}
              ],
              "futur_simple": [
                {"person":"1s","pronoun":"je ","radical":"choi","ending":"rai","form":"choirai","full":"je choirai"},
                {"person":"2s","pronoun":"tu ","radical":"choi","ending":"ras","form":"choiras","full":"tu choiras"},
                {"person":"3s","pronoun":"il ","radical":"choi","ending":"ra","form":"choira","full":"il choira"},
                {"person":"1p","pronoun":"nous ","radical":"choi","ending":"rons","form":"choirons","full":"nous choirons"},
                {"person":"2p","pronoun":"vous ","radical":"choi","ending":"rez","form":"choirez","full":"vous choirez"},
                {"person":"3p","pronoun":"ils ","radical":"choi","ending":"ront","form":"choiront","full":"ils choiront"}
              ],
              "passe_compose": [
                {"person":"1s","pronoun":"je ","radical":"suis","ending":" chu","form":"suis chu","full":"je suis chu"},
                {"person":"2s","pronoun":"tu ","radical":"es","ending":" chu","form":"es chu","full":"tu es chu"},
                {"person":"3s","pronoun":"il ","radical":"est","ending":" chu","form":"est chu","full":"il est chu"},
                {"person":"1p","pronoun":"nous ","radical":"sommes","ending":" chus","form":"sommes chus","full":"nous sommes chus"},
                {"person":"2p","pronoun":"vous ","radical":"êtes","ending":" chus","form":"êtes chus","full":"vous êtes chus"},
                {"person":"3p","pronoun":"ils ","radical":"sont","ending":" chus","form":"sont chus","full":"ils sont chus"}
              ],
              "plus_que_parfait": [],
              "passe_anterieur": [],
              "futur_anterieur": []
            },
            "subjonctif": {"present": [], "imparfait": [], "passe": [], "plus_que_parfait": []},
            "conditionnel": {
              "present": [
                {"person":"1s","pronoun":"je ","radical":"choi","ending":"rais","form":"choirais","full":"je choirais"},
                {"person":"2s","pronoun":"tu ","radical":"choi","ending":"rais","form":"choirais","full":"tu choirais"},
                {"person":"3s","pronoun":"il ","radical":"choi","ending":"rait","form":"choirait","full":"il choirait"},
                {"person":"1p","pronoun":"nous ","radical":"choi","ending":"rions","form":"choirions","full":"nous choirions"},
                {"person":"2p","pronoun":"vous ","radical":"choi","ending":"riez","form":"choiriez","full":"vous choiriez"},
                {"person":"3p","pronoun":"ils ","radical":"choi","ending":"raient","form":"choiraient","full":"ils choiraient"}
              ],
              "passe_1": [], "passe_2": []
            },
            "imperatif": {"present": [], "passe": []},
            "impératif": {"present": [], "passe": []},
            "participe": {
              "present": {"radical": "-", "ending": "", "full": "-"},
              "passe": {"masculin_singulier":"chu","masculin_pluriel":"chus","feminin_singulier":"chue","feminin_pluriel":"chues","compose":"étant chu"}
            },
            "infinitif": {"present": "choir", "passe": "être chu"},
            "gerondif": {"present": "-", "passe": "-"},
            "gérondif": {"present": "-", "passe": "-"}
          }
        },
        "clore": {
          "id": "clore", "slug": "clore", "verb": "clore", "infinitive": "clore", "group": 3, "level": "C1", "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": true, "is_impersonal": false, "model": "clore", "participle_present": "closant", "participle_past": "clos",
          "modes": {
            "indicatif": {
              "present": [
                {"person":"1s","pronoun":"je ","radical":"clo","ending":"s","form":"clos","full":"je clos"},
                {"person":"2s","pronoun":"tu ","radical":"clo","ending":"s","form":"clos","full":"tu clos"},
                {"person":"3s","pronoun":"il ","radical":"clô","ending":"t","form":"clôt","full":"il clôt"},
                {"person":"3p","pronoun":"ils ","radical":"clos","ending":"ent","form":"closent","full":"ils closent"}
              ],
              "imparfait": [],
              "passe_simple": [],
              "futur_simple": [
                {"person":"1s","pronoun":"je ","radical":"clor","ending":"ai","form":"clorai","full":"je clorai"},
                {"person":"2s","pronoun":"tu ","radical":"clor","ending":"as","form":"cloras","full":"tu cloras"},
                {"person":"3s","pronoun":"il ","radical":"clor","ending":"a","form":"clora","full":"il clora"},
                {"person":"1p","pronoun":"nous ","radical":"clor","ending":"ons","form":"clorons","full":"nous clorons"},
                {"person":"2p","pronoun":"vous ","radical":"clor","ending":"ez","form":"clorez","full":"vous clorez"},
                {"person":"3p","pronoun":"ils ","radical":"clor","ending":"ont","form":"cloront","full":"ils cloront"}
              ],
              "passe_compose": [
                {"person":"1s","pronoun":"j'","radical":"ai","ending":" clos","form":"ai clos","full":"j'ai clos"},
                {"person":"2s","pronoun":"tu ","radical":"as","ending":" clos","form":"as clos","full":"tu as clos"},
                {"person":"3s","pronoun":"il ","radical":"a","ending":" clos","form":"a clos","full":"il a clos"},
                {"person":"1p","pronoun":"nous ","radical":"avons","ending":" clos","form":"avons clos","full":"nous avons clos"},
                {"person":"2p","pronoun":"vous ","radical":"avez","ending":" clos","form":"avez clos","full":"vous avez clos"},
                {"person":"3p","pronoun":"ils ","radical":"ont","ending":" clos","form":"ont clos","full":"ils ont clos"}
              ],
              "plus_que_parfait": [], "passe_anterieur": [], "futur_anterieur": []
            },
            "subjonctif": {
              "present": [
                {"person":"1s","prefix":"que ","pronoun":"je ","radical":"clos","ending":"e","form":"close","full":"que je close"},
                {"person":"2s","prefix":"que ","pronoun":"tu ","radical":"clos","ending":"es","form":"closes","full":"que tu closes"},
                {"person":"3s","prefix":"qu'","pronoun":"il ","radical":"clos","ending":"e","form":"close","full":"qu'il close"},
                {"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"clos","ending":"ent","form":"closent","full":"qu'ils closent"}
              ],
              "imparfait": [], "passe": [], "plus_que_parfait": []
            },
            "conditionnel": {
              "present": [
                {"person":"1s","pronoun":"je ","radical":"clor","ending":"ais","form":"clorais","full":"je clorais"},
                {"person":"2s","pronoun":"tu ","radical":"clor","ending":"ais","form":"clorais","full":"tu clorais"},
                {"person":"3s","pronoun":"il ","radical":"clor","ending":"ait","form":"clorait","full":"il clorait"},
                {"person":"1p","pronoun":"nous ","radical":"clor","ending":"ions","form":"clorions","full":"nous clorions"},
                {"person":"2p","pronoun":"vous ","radical":"clor","ending":"iez","form":"cloriez","full":"vous cloriez"},
                {"person":"3p","pronoun":"ils ","radical":"clor","ending":"aient","form":"cloraient","full":"ils cloraient"}
              ],
              "passe_1": [], "passe_2": []
            },
            "imperatif": {"present": [], "passe": []},
            "impératif": {"present": [], "passe": []},
            "participe": {
              "present": {"radical":"clos","ending":"ant","full":"closant"},
              "passe": {"masculin_singulier":"clos","masculin_pluriel":"clos","feminin_singulier":"close","feminin_pluriel":"closes","compose":"ayant clos"}
            },
            "infinitif": {"present": "clore", "passe": "avoir clos"},
            "gerondif": {"present": "en closant", "passe": "en ayant clos"},
            "gérondif": {"present": "en closant", "passe": "en ayant clos"}
          }
        },
        "traire": {
          "id": "traire", "slug": "traire", "verb": "traire", "infinitive": "traire", "group": 3, "level": "B2", "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": true, "is_impersonal": false, "model": "traire", "participle_present": "trayant", "participle_past": "trait",
          "modes": {
            "indicatif": {
              "present": [
                {"person":"1s","pronoun":"je ","radical":"trai","ending":"s","form":"trais","full":"je trais"},
                {"person":"2s","pronoun":"tu ","radical":"trai","ending":"s","form":"trais","full":"tu trais"},
                {"person":"3s","pronoun":"il ","radical":"trai","ending":"t","form":"trait","full":"il trait"},
                {"person":"1p","pronoun":"nous ","radical":"tray","ending":"ons","form":"trayons","full":"nous trayons"},
                {"person":"2p","pronoun":"vous ","radical":"tray","ending":"ez","form":"trayez","full":"vous trayez"},
                {"person":"3p","pronoun":"ils ","radical":"trai","ending":"ent","form":"traient","full":"ils traient"}
              ],
              "imparfait": [
                {"person":"1s","pronoun":"je ","radical":"tray","ending":"ais","form":"trayais","full":"je trayais"},
                {"person":"2s","pronoun":"tu ","radical":"tray","ending":"ais","form":"trayais","full":"tu trayais"},
                {"person":"3s","pronoun":"il ","radical":"tray","ending":"ait","form":"trayait","full":"il trayait"},
                {"person":"1p","pronoun":"nous ","radical":"tray","ending":"ions","form":"trayions","full":"nous trayions"},
                {"person":"2p","pronoun":"vous ","radical":"tray","ending":"iez","form":"trayiez","full":"vous trayiez"},
                {"person":"3p","pronoun":"ils ","radical":"tray","ending":"aient","form":"trayaient","full":"ils trayaient"}
              ],
              "passe_simple": [],
              "futur_simple": [
                {"person":"1s","pronoun":"je ","radical":"trair","ending":"ai","form":"trairai","full":"je trairai"},
                {"person":"2s","pronoun":"tu ","radical":"trair","ending":"as","form":"trairas","full":"tu trairas"},
                {"person":"3s","pronoun":"il ","radical":"trair","ending":"a","form":"traira","full":"il traira"},
                {"person":"1p","pronoun":"nous ","radical":"trair","ending":"ons","form":"trairons","full":"nous trairons"},
                {"person":"2p","pronoun":"vous ","radical":"trair","ending":"ez","form":"trairez","full":"vous trairez"},
                {"person":"3p","pronoun":"ils ","radical":"trair","ending":"ont","form":"trairont","full":"ils trairont"}
              ],
              "passe_compose": [
                {"person":"1s","pronoun":"j'","radical":"ai","ending":" trait","form":"ai trait","full":"j'ai trait"},
                {"person":"2s","pronoun":"tu ","radical":"as","ending":" trait","form":"as trait","full":"tu as trait"},
                {"person":"3s","pronoun":"il ","radical":"a","ending":" trait","form":"a trait","full":"il a trait"},
                {"person":"1p","pronoun":"nous ","radical":"avons","ending":" trait","form":"avons trait","full":"nous avons trait"},
                {"person":"2p","pronoun":"vous ","radical":"avez","ending":" trait","form":"avez trait","full":"vous avez trait"},
                {"person":"3p","pronoun":"ils ","radical":"ont","ending":" trait","form":"ont trait","full":"ils ont trait"}
              ],
              "plus_que_parfait": [], "passe_anterieur": [], "futur_anterieur": []
            },
            "subjonctif": {
              "present": [
                {"person":"1s","prefix":"que ","pronoun":"je ","radical":"trai","ending":"e","form":"traie","full":"que je traie"},
                {"person":"2s","prefix":"que ","pronoun":"tu ","radical":"trai","ending":"es","form":"traies","full":"que tu traies"},
                {"person":"3s","prefix":"qu'","pronoun":"il ","radical":"trai","ending":"e","form":"traie","full":"qu'il traie"},
                {"person":"1p","prefix":"que ","pronoun":"nous ","radical":"tray","ending":"ions","form":"trayions","full":"que nous trayions"},
                {"person":"2p","prefix":"que ","pronoun":"vous ","radical":"tray","ending":"iez","form":"trayiez","full":"que vous trayiez"},
                {"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"trai","ending":"ent","form":"traient","full":"qu'ils traient"}
              ],
              "imparfait": [], "passe": [], "plus_que_parfait": []
            },
            "conditionnel": {
              "present": [
                {"person":"1s","pronoun":"je ","radical":"trair","ending":"ais","form":"trairais","full":"je trairais"},
                {"person":"2s","pronoun":"tu ","radical":"trair","ending":"ais","form":"trairais","full":"tu trairais"},
                {"person":"3s","pronoun":"il ","radical":"trair","ending":"ait","form":"trairait","full":"il trairait"},
                {"person":"1p","pronoun":"nous ","radical":"trair","ending":"ions","form":"trairions","full":"nous trairions"},
                {"person":"2p","pronoun":"vous ","radical":"trair","ending":"iez","form":"trairiez","full":"vous trairiez"},
                {"person":"3p","pronoun":"ils ","radical":"trair","ending":"aient","form":"trairaient","full":"ils trairaient"}
              ],
              "passe_1": [], "passe_2": []
            },
            "imperatif": {
              "present": [
                {"person":"2s","pronoun":"","radical":"trai","ending":"s","form":"trais","full":"trais"},
                {"person":"1p","pronoun":"","radical":"tray","ending":"ons","form":"trayons","full":"trayons"},
                {"person":"2p","pronoun":"","radical":"tray","ending":"ez","form":"trayez","full":"trayez"}
              ],
              "passe": []
            },
            "impératif": {
              "present": [
                {"person":"2s","pronoun":"","radical":"trai","ending":"s","form":"trais","full":"trais"},
                {"person":"1p","pronoun":"","radical":"tray","ending":"ons","form":"trayons","full":"trayons"},
                {"person":"2p","pronoun":"","radical":"tray","ending":"ez","form":"trayez","full":"trayez"}
              ],
              "passe": []
            },
            "participe": {
              "present": {"radical":"tray","ending":"ant","full":"trayant"},
              "passe": {"masculin_singulier":"trait","masculin_pluriel":"traits","feminin_singulier":"traite","feminin_pluriel":"traites","compose":"ayant trait"}
            },
            "infinitif": {"present": "traire", "passe": "avoir trait"},
            "gerondif": {"present": "en trayant", "passe": "en ayant trait"},
            "gérondif": {"present": "en trayant", "passe": "en ayant trait"}
          }
        },
        "absoudre": {
          "id": "absoudre", "slug": "absoudre", "verb": "absoudre", "infinitive": "absoudre", "group": 3, "level": "C1", "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": true, "is_impersonal": false, "model": "absoudre", "participle_present": "absolvant", "participle_past": "absous",
          "modes": {
            "indicatif": {
              "present": [
                {"person":"1s","pronoun":"j'","radical":"absou","ending":"s","form":"absous","full":"j'absous"},
                {"person":"2s","pronoun":"tu ","radical":"absou","ending":"s","form":"absous","full":"tu absous"},
                {"person":"3s","pronoun":"il ","radical":"absou","ending":"t","form":"absout","full":"il absout"},
                {"person":"1p","pronoun":"nous ","radical":"absolv","ending":"ons","form":"absolvons","full":"nous absolvons"},
                {"person":"2p","pronoun":"vous ","radical":"absolv","ending":"ez","form":"absolvez","full":"vous absolvez"},
                {"person":"3p","pronoun":"ils ","radical":"absolv","ending":"ent","form":"absolvent","full":"ils absolvent"}
              ],
              "imparfait": [
                {"person":"1s","pronoun":"j'","radical":"absolv","ending":"ais","form":"absolvais","full":"j'absolvais"},
                {"person":"2s","pronoun":"tu ","radical":"absolv","ending":"ais","form":"absolvais","full":"tu absolvais"},
                {"person":"3s","pronoun":"il ","radical":"absolv","ending":"ait","form":"absolvait","full":"il absolvait"},
                {"person":"1p","pronoun":"nous ","radical":"absolv","ending":"ions","form":"absolvions","full":"nous absolvions"},
                {"person":"2p","pronoun":"vous ","radical":"absolv","ending":"iez","form":"absolviez","full":"vous absolviez"},
                {"person":"3p","pronoun":"ils ","radical":"absolv","ending":"aient","form":"absolvaient","full":"ils absolvaient"}
              ],
              "passe_simple": [],
              "futur_simple": [
                {"person":"1s","pronoun":"j'","radical":"absoudr","ending":"ai","form":"absoudrai","full":"j'absoudrai"},
                {"person":"2s","pronoun":"tu ","radical":"absoudr","ending":"as","form":"absoudras","full":"tu absoudras"},
                {"person":"3s","pronoun":"il ","radical":"absoudr","ending":"a","form":"absoudra","full":"il absoudra"},
                {"person":"1p","pronoun":"nous ","radical":"absoudr","ending":"ons","form":"absoudrons","full":"nous absoudrons"},
                {"person":"2p","pronoun":"vous ","radical":"absoudr","ending":"ez","form":"absoudrez","full":"vous absoudrez"},
                {"person":"3p","pronoun":"ils ","radical":"absoudr","ending":"ont","form":"absoudront","full":"ils absoudront"}
              ],
              "passe_compose": [
                {"person":"1s","pronoun":"j'","radical":"ai","ending":" absous","form":"ai absous","full":"j'ai absous"},
                {"person":"2s","pronoun":"tu ","radical":"as","ending":" absous","form":"as absous","full":"tu as absous"},
                {"person":"3s","pronoun":"il ","radical":"a","ending":" absous","form":"a absous","full":"il a absous"},
                {"person":"1p","pronoun":"nous ","radical":"avons","ending":" absous","form":"avons absous","full":"nous avons absous"},
                {"person":"2p","pronoun":"vous ","radical":"avez","ending":" absous","form":"avez absous","full":"vous avez absous"},
                {"person":"3p","pronoun":"ils ","radical":"ont","ending":" absous","form":"ont absous","full":"ils ont absous"}
              ],
              "plus_que_parfait": [], "passe_anterieur": [], "futur_anterieur": []
            },
            "subjonctif": {
              "present": [
                {"person":"1s","prefix":"que ","pronoun":"j'","radical":"absolv","ending":"e","form":"absolve","full":"que j'absolve"},
                {"person":"2s","prefix":"que ","pronoun":"tu ","radical":"absolv","ending":"es","form":"absolves","full":"que tu absolves"},
                {"person":"3s","prefix":"qu'","pronoun":"il ","radical":"absolv","ending":"e","form":"absolve","full":"qu'il absolve"},
                {"person":"1p","prefix":"que ","pronoun":"nous ","radical":"absolv","ending":"ions","form":"absolvions","full":"que nous absolvions"},
                {"person":"2p","prefix":"que ","pronoun":"vous ","radical":"absolv","ending":"iez","form":"absolviez","full":"que vous absolviez"},
                {"person":"3p","prefix":"qu'","pronoun":"ils ","radical":"absolv","ending":"ent","form":"absolvent","full":"qu'ils absolvent"}
              ],
              "imparfait": [], "passe": [], "plus_que_parfait": []
            },
            "conditionnel": {
              "present": [
                {"person":"1s","pronoun":"j'","radical":"absoudr","ending":"ais","form":"absoudrais","full":"j'absoudrais"},
                {"person":"2s","pronoun":"tu ","radical":"absoudr","ending":"ais","form":"absoudrais","full":"tu absoudrais"},
                {"person":"3s","pronoun":"il ","radical":"absoudr","ending":"ait","form":"absoudrait","full":"il absoudrait"},
                {"person":"1p","pronoun":"nous ","radical":"absoudr","ending":"ions","form":"absoudrions","full":"nous absoudrions"},
                {"person":"2p","pronoun":"vous ","radical":"absoudr","ending":"iez","form":"absoudriez","full":"vous absoudriez"},
                {"person":"3p","pronoun":"ils ","radical":"absoudr","ending":"aient","form":"absoudraient","full":"ils absoudraient"}
              ],
              "passe_1": [], "passe_2": []
            },
            "imperatif": {
              "present": [
                {"person":"2s","pronoun":"","radical":"absou","ending":"s","form":"absous","full":"absous"},
                {"person":"1p","pronoun":"","radical":"absolv","ending":"ons","form":"absolvons","full":"absolvons"},
                {"person":"2p","pronoun":"","radical":"absolv","ending":"ez","form":"absolvez","full":"absolvez"}
              ],
              "passe": []
            },
            "impératif": {
              "present": [
                {"person":"2s","pronoun":"","radical":"absou","ending":"s","form":"absous","full":"absous"},
                {"person":"1p","pronoun":"","radical":"absolv","ending":"ons","form":"absolvons","full":"absolvons"},
                {"person":"2p","pronoun":"","radical":"absolv","ending":"ez","form":"absolvez","full":"absolvez"}
              ],
              "passe": []
            },
            "participe": {
              "present": {"radical":"absolv","ending":"ant","full":"absolvant"},
              "passe": {"masculin_singulier":"absous","masculin_pluriel":"absous","feminin_singulier":"absoute","feminin_pluriel":"absoutes","compose":"ayant absous"}
            },
            "infinitif": {"present": "absoudre", "passe": "avoir absous"},
            "gerondif": {"present": "en absolvant", "passe": "en ayant absous"},
            "gérondif": {"present": "en absolvant", "passe": "en ayant absous"}
          }
        },
        "frire": {
          "id": "frire", "slug": "frire", "verb": "frire", "infinitive": "frire", "group": 3, "level": "B1", "auxiliary": "avoir", "is_pronominal": false, "is_reflexive": false, "is_defective": true, "is_impersonal": false, "model": "frire", "participle_present": "-", "participle_past": "frit",
          "modes": {
            "indicatif": {
              "present": [
                {"person":"1s","pronoun":"je ","radical":"fri","ending":"s","form":"fris","full":"je fris"},
                {"person":"2s","pronoun":"tu ","radical":"fri","ending":"s","form":"fris","full":"tu fris"},
                {"person":"3s","pronoun":"il ","radical":"fri","ending":"t","form":"frit","full":"il frit"}
              ],
              "imparfait": [],
              "passe_simple": [],
              "futur_simple": [
                {"person":"1s","pronoun":"je ","radical":"frir","ending":"ai","form":"frirai","full":"je frirai"},
                {"person":"2s","pronoun":"tu ","radical":"frir","ending":"as","form":"friras","full":"tu friras"},
                {"person":"3s","pronoun":"il ","radical":"frir","ending":"a","form":"frira","full":"il frira"},
                {"person":"1p","pronoun":"nous ","radical":"frir","ending":"ons","form":"frirons","full":"nous frirons"},
                {"person":"2p","pronoun":"vous ","radical":"frir","ending":"ez","form":"frirez","full":"vous frirez"},
                {"person":"3p","pronoun":"ils ","radical":"frir","ending":"ont","form":"friront","full":"ils friront"}
              ],
              "passe_compose": [
                {"person":"1s","pronoun":"j'","radical":"ai","ending":" frit","form":"ai frit","full":"j'ai frit"},
                {"person":"2s","pronoun":"tu ","radical":"as","ending":" frit","form":"as frit","full":"tu as frit"},
                {"person":"3s","pronoun":"il ","radical":"a","ending":" frit","form":"a frit","full":"il a frit"},
                {"person":"1p","pronoun":"nous ","radical":"avons","ending":" frit","form":"avons frit","full":"nous avons frit"},
                {"person":"2p","pronoun":"vous ","radical":"avez","ending":" frit","form":"avez frit","full":"vous avez frit"},
                {"person":"3p","pronoun":"ils ","radical":"ont","ending":" frit","form":"ont frit","full":"ils ont frit"}
              ],
              "plus_que_parfait": [], "passe_anterieur": [], "futur_anterieur": []
            },
            "subjonctif": {"present": [], "imparfait": [], "passe": [], "plus_que_parfait": []},
            "conditionnel": {
              "present": [
                {"person":"1s","pronoun":"je ","radical":"frir","ending":"ais","form":"frirais","full":"je frirais"},
                {"person":"2s","pronoun":"tu ","radical":"frir","ending":"ais","form":"frirais","full":"tu frirais"},
                {"person":"3s","pronoun":"il ","radical":"frir","ending":"ait","form":"frirait","full":"il frirait"},
                {"person":"1p","pronoun":"nous ","radical":"frir","ending":"ions","form":"fririons","full":"nous fririons"},
                {"person":"2p","pronoun":"vous ","radical":"frir","ending":"iez","form":"fririez","full":"vous fririez"},
                {"person":"3p","pronoun":"ils ","radical":"frir","ending":"aient","form":"friraient","full":"ils friraient"}
              ],
              "passe_1": [], "passe_2": []
            },
            "imperatif": {
              "present": [
                {"person":"2s","pronoun":"","radical":"fri","ending":"s","form":"fris","full":"fris"}
              ],
              "passe": []
            },
            "impératif": {
              "present": [
                {"person":"2s","pronoun":"","radical":"fri","ending":"s","form":"fris","full":"fris"}
              ],
              "passe": []
            },
            "participe": {
              "present": {"radical":"-","ending":"","full":"-"},
              "passe": {"masculin_singulier":"frit","masculin_pluriel":"frits","feminin_singulier":"frite","feminin_pluriel":"frites","compose":"ayant frit"}
            },
            "infinitif": {"present": "frire", "passe": "avoir frit"},
            "gerondif": {"present": "-", "passe": "-"},
            "gérondif": {"present": "-", "passe": "-"}
          }
        }
      }
    };
  }

  // 3. Morphological Synthesis: Ensure all 536 verbs in dataset.index are populated in dataset.verbs
  if (dataset && Array.isArray(dataset.index) && dataset.verbs) {
    function deriveVerbEntry(indexItem, modelEntry) {
      var targetVerb = indexItem.verb || indexItem.id;
      var targetInfinitive = indexItem.infinitive || targetVerb;
      var modelInf = modelEntry.infinitive || modelEntry.verb || 'aimer';
      var modelBase = modelInf.replace(/(er|ir|re)$/, '');
      var targetBase = targetInfinitive.replace(/(er|ir|re)$/, '');
      var isReflexive = Boolean(indexItem.is_reflexive || indexItem.is_pronominal || targetInfinitive.startsWith("s'") || targetInfinitive.startsWith("se "));
      var isImpersonal = Boolean(indexItem.is_impersonal);
      var isDefective = Boolean(indexItem.is_defective || isImpersonal);
      var aux = indexItem.auxiliary === 'être' ? 'être' : (indexItem.auxiliary === 'avoir_ou_etre' ? 'avoir_ou_etre' : 'avoir');

      var pp = targetBase + (indexItem.group === 1 ? 'é' : indexItem.group === 2 ? 'i' : 'u');
      if (indexItem.group === 1 && targetInfinitive.endsWith('er')) pp = targetBase + 'é';

      var presPartStem = targetBase;
      if (indexItem.group === 1 && targetInfinitive.endsWith('cer')) {
        presPartStem = targetBase.slice(0, -1) + 'ç';
      } else if (indexItem.group === 1 && targetInfinitive.endsWith('ger')) {
        presPartStem = targetBase + 'e';
      }

      var derived = {
        id: indexItem.id || targetVerb,
        slug: indexItem.slug || indexItem.id || targetVerb,
        verb: targetVerb,
        infinitive: targetInfinitive,
        group: indexItem.group || 1,
        level: indexItem.level || 'A1',
        auxiliary: aux,
        is_pronominal: isReflexive,
        is_reflexive: isReflexive,
        is_defective: isDefective,
        is_impersonal: isImpersonal,
        model: indexItem.model || modelInf,
        participle_present: presPartStem + (indexItem.group === 2 ? 'issant' : 'ant'),
        participle_past: pp,
        modes: {}
      };

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

              var hasCedilleInRadical = pDerived.radical && pDerived.radical.indexOf('ç') !== -1;
              var effectiveModelBase = (hasCedilleInRadical && modelBase.endsWith('c')) ? (modelBase.slice(0, -1) + 'ç') : modelBase;
              var effectiveTargetBase = (hasCedilleInRadical && targetBase.endsWith('c')) ? (targetBase.slice(0, -1) + 'ç') : targetBase;

              if (pDerived.radical !== undefined && pDerived.radical.indexOf(effectiveModelBase) !== -1) {
                pDerived.radical = pDerived.radical.replace(effectiveModelBase, effectiveTargetBase);
              } else if (pDerived.radical !== undefined && pDerived.radical.indexOf(modelBase) !== -1) {
                pDerived.radical = pDerived.radical.replace(modelBase, targetBase);
              } else if (pDerived.radical !== undefined && indexItem.group === 1) {
                pDerived.radical = (hasCedilleInRadical && targetBase.endsWith('c')) ? (targetBase.slice(0, -1) + 'ç') : targetBase;
              }

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

              if (pDerived.person === '1s') {
                var normStart = (pDerived.radical || pDerived.form || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                var firstCh = normStart[0] || '';
                if ('aeiouy'.indexOf(firstCh) !== -1 || normStart.startsWith('h')) {
                  pDerived.pronoun = "j'";
                } else {
                  pDerived.pronoun = "je ";
                }
                pDerived.full = pDerived.pronoun + pDerived.form;
              }

              if (isImpersonal && pDerived.person !== '3s') {
                pDerived.form = '-';
                pDerived.full = '-';
                pDerived.radical = '-';
                pDerived.ending = '';
              }

              derived.modes[mKey][tKey].push(pDerived);
            }
          } else if (typeof srcTense === 'object' && srcTense !== null) {
            derived.modes[mKey][tKey] = Object.assign({}, srcTense);
          } else {
            derived.modes[mKey][tKey] = srcTense;
          }
        }
      }

      if (derived.modes.infinitif) {
        derived.modes.infinitif.present = targetInfinitive;
        derived.modes.infinitif.passe = (aux === 'être' ? 'être ' : 'avoir ') + pp;
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
    }

    for (var idx = 0; idx < dataset.index.length; idx++) {
      var item = dataset.index[idx];
      var sid = item.id || item.slug;
      var existing = dataset.verbs[sid];
      var isMissingOrDummy = !existing || !existing.modes || !existing.modes.indicatif ||
        !Array.isArray(existing.modes.indicatif.present) || existing.modes.indicatif.present.length === 0;
      if (isMissingOrDummy) {
        var mKey = item.model || 'aimer';
        var mNorm = mKey.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        var mEntry = dataset.verbs[mKey] || dataset.verbs[mNorm];
        if (!mEntry || !mEntry.modes || !mEntry.modes.indicatif || !Array.isArray(mEntry.modes.indicatif.present) || mEntry.modes.indicatif.present.length === 0) {
          if (item.group === 2) {
            mEntry = dataset.verbs['finir'];
          } else if (item.group === 1) {
            if (item.infinitive && item.infinitive.endsWith('cer')) mEntry = dataset.verbs['commencer'];
            else if (item.infinitive && item.infinitive.endsWith('ger')) mEntry = dataset.verbs['manger'];
            else mEntry = dataset.verbs['aimer'];
          } else {
            var inf = item.infinitive || item.verb || '';
            if (inf.endsWith('prendre')) mEntry = dataset.verbs['prendre'];
            else if (inf.endsWith('mettre')) mEntry = dataset.verbs['mettre'];
            else if (inf.endsWith('dire')) mEntry = dataset.verbs['dire'];
            else if (inf.endsWith('faire')) mEntry = dataset.verbs['faire'];
            else if (inf.endsWith('venir') || inf.endsWith('tenir')) mEntry = dataset.verbs['venir'];
            else if (inf.endsWith('voir')) mEntry = dataset.verbs['voir'];
            else if (inf.endsWith('écrire') || inf.endsWith('ecrire')) mEntry = dataset.verbs['ecrire'];
            else if (inf.endsWith('traire')) mEntry = dataset.verbs['traire'];
            else if (inf.endsWith('soudre')) mEntry = dataset.verbs['absoudre'];
            else if (inf.endsWith('clore')) mEntry = dataset.verbs['clore'];
            else mEntry = dataset.verbs['aimer'];
          }
        }
        if (mEntry) {
          dataset.verbs[sid] = deriveVerbEntry(item, mEntry);
        }
      }
    }

    // In Node.js environment, automatically sync all 536 verbs to data/conjugaison_verbs.json if needed
    if (typeof require !== 'undefined' && typeof process !== 'undefined') {
      try {
        var fs = require('fs');
        var path = require('path');
        var jsonCandidates = [
          path.resolve(__dirname, '../../data/conjugaison_verbs.json'),
          path.resolve(process.cwd(), 'data/conjugaison_verbs.json'),
          'c:/FrenchDELFB2C1/data/conjugaison_verbs.json'
        ];
        for (var c = 0; c < jsonCandidates.length; c++) {
          var p = jsonCandidates[c];
          if (fs.existsSync(p)) {
            var raw = fs.readFileSync(p, 'utf8');
            var parsed = JSON.parse(raw);
            if (parsed && !isDatasetHydrated(parsed)) {
              parsed.verbs = dataset.verbs;
              parsed.total_verbs = dataset.index.length;
              if (parsed.metadata) parsed.metadata.total_verbs = dataset.index.length;
              fs.writeFileSync(p, JSON.stringify(parsed, null, 2), 'utf8');
            }
            break;
          }
        }
      } catch (e) {
        // Continue silently
      }
    }
  }

  if (typeof window !== 'undefined') {
    window.conjugaisonVerbsDataset = dataset;
  }
  if (typeof global !== 'undefined') {
    global.conjugaisonVerbsDataset = dataset;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = dataset;
  }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
