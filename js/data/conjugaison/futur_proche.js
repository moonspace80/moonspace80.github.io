/* ==========================================================================
   MODULE CONJUGAISON : LE FUTUR PROCHE
   FrenchDELFB2C1 Data Package
   ========================================================================== */

window.conjugaisonDataset = window.conjugaisonDataset || {};
window.conjugaisonDataset['futur_proche'] = {
  "id": "conjugaison-futur-proche",
  "title": "Le Futur Proche",
  "level": "A1-A2",
  "category": "conjugaison",
  "ruleTitle": "Immédiateté, prévision assurée et structure syntaxique",
  "ruleContent": "\n      <h3>1. Formation du futur proche</h3>\n      <p>Verbe <strong>ALLER au présent</strong> de l'indicatif + <strong>Verbe à l'Infinitif</strong>.</p>\n      <p><i>Je vais présenter, tu vas comprendre, il va statuer, nous allons négocier, vous allez observer, ils vont décider.</i></p>\n      <h3>2. Valeurs d'usage</h3>\n      <ul>\n        <li><strong>Immédiateté :</strong> action qui va se produire dans un laps de temps très court (<i>Attention, la passerelle va s'abaisser !</i>).</li>\n        <li><strong>Intention arrêtée ou certitude :</strong> projet fermement décidé pour lequel les dispositions sont déjà prises (<i>Le gouvernement va promulguer ce décret la semaine prochaine</i>).</li>\n        <li><strong>Conséquence logique d'une situation présente :</strong> (<i>Le ciel s'assombrit, il va pleuvoir</i>).</li>\n      </ul>\n      <h3>3. Place de la négation et des pronoms</h3>\n      <ul>\n        <li>La négation encadre l'auxiliaire aller : <i>Nous <strong>ne</strong> allons <strong>pas</strong> céder aux pressions.</i></li>\n        <li>Les pronoms personnels compléments se placent directement <strong>devant l'infinitif</strong> : <i>Je vais <strong>le lui</strong> transmettre dès aujourd'hui.</i></li>\n      </ul>\n    ",
  "questions": [
    {
      "id": "conj-fp-q1",
      "prompt": "Face aux contestations, la direction (ne pas / modifier) _____ le calendrier des réformes.",
      "options": [
        "ne va pas modifier",
        "va ne pas modifier",
        "ne va modifier pas",
        "va pas modifier"
      ],
      "correct": 0,
      "explanation": "La négation encadre l'auxiliaire aller conjugué : 'ne va pas modifier'."
    },
    {
      "id": "conj-fp-q2",
      "prompt": "Ce dossier stratégique, nous (le leur / présenter) _____ dès demain matin en séance plénière.",
      "options": [
        "allons le leur présenter",
        "le leur allons présenter",
        "allons présenter le leur",
        "allons les leur présenter"
      ],
      "correct": 0,
      "explanation": "Les pronoms compléments d'objet se placent immédiatement avant le verbe à l'infinitif : 'allons le leur présenter'."
    },
    {
      "id": "conj-fp-q3",
      "prompt": "Regardez ces statistiques alarmantes : les taux d'intérêt (augmenter) _____ inévitablement.",
      "options": [
        "vont augmenter",
        "vont augmentés",
        "va augmenter",
        "allons augmenter"
      ],
      "correct": 0,
      "explanation": "Sujet 'les taux d'intérêt' (3e pers. pluriel) ➔ 'ils vont augmenter'."
    }
  ]
};
