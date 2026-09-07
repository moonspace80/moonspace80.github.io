/* ==========================================================================
   MODULE CONJUGAISON : LE CONDITIONNEL PRÉSENT
   FrenchDELFB2C1 Data Package
   ========================================================================== */

window.conjugaisonDataset = window.conjugaisonDataset || {};
window.conjugaisonDataset['conditionnel_present'] = {
  "id": "conjugaison-conditionnel-present",
  "title": "Le Conditionnel Présent",
  "level": "A2-B1",
  "category": "conjugaison",
  "ruleTitle": "Hypothèse potentielle, politesse, conseil et imaginaire",
  "ruleContent": "\n      <h3>1. Règle morphologique de formation</h3>\n      <p>Le conditionnel présent marie le <strong>radical du Futur Simple</strong> (en <i>-r-</i>) et les <strong>terminaisons de l'Imparfait</strong> :</p>\n      <p><code>-ais, -ais, -ait, -ions, -iez, -aient</code></p>\n      <ul>\n        <li><i>Je souhaiterais, tu pourrais, il ferait, nous devrions, vous sauriez, ils viendraient.</i></li>\n      </ul>\n      <h3>2. Valeurs d'emploi</h3>\n      <ul>\n        <li><strong>Politesse & Atténuation diplomatique :</strong> adoucit une demande ou un refus (<i>Pourriez-vous me faire parvenir ce dossier ? Je souhaiterais un échange</i>).</li>\n        <li><strong>Conseil & Recommandation :</strong> (<i>Vous devriez consulter les données chiffrées avant de vous prononcer</i>).</li>\n        <li><strong>Hypothèse sur le présent / Système en 'Si' :</strong><br>\n        <code>Si + Imparfait ➔ Conditionnel Présent</code><br>\n        <i>Si nous disposions d'un budget plus conséquent, nous recruterions deux ingénieurs supplémentaires.</i></li>\n        <li><strong>Désir & Imaginaire :</strong> (<i>J'aimerais vivre dans un éco-quartier autosuffisant</i>).</li>\n      </ul>\n    ",
  "questions": [
    {
      "id": "conj-cp-q1",
      "prompt": "Si la municipalité consultait davantage les citoyens, elle (éviter) _____ ces vives contestations.",
      "options": [
        "éviterait",
        "évitera",
        "évitait",
        "aurait évité"
      ],
      "correct": 0,
      "explanation": "Structure hypothétique : Si + imparfait ('consultait') ➔ conditionnel présent ('éviterait')."
    },
    {
      "id": "conj-cp-q2",
      "prompt": "Pourriez-vous m'accorder un entretien ? Quel est le mode et la valeur de 'Pourriez' ?",
      "options": [
        "Conditionnel présent de politesse et d'atténuation",
        "Futur simple d'injonction",
        "Imparfait de description",
        "Subjonctif d'incertitude"
      ],
      "correct": 0,
      "explanation": "'Pourriez' est le conditionnel présent du verbe pouvoir employé pour formuler une requête respectueuse."
    },
    {
      "id": "conj-cp-q3",
      "prompt": "Face à une telle recrudescence de cyberattaques, les entreprises (devoir) _____ renforcer leurs protocoles.",
      "options": [
        "devraient",
        "devront",
        "devaient",
        "dussent"
      ],
      "correct": 0,
      "explanation": "'Devraient' formule un conseil ou une préconisation au conditionnel présent."
    }
  ]
};
