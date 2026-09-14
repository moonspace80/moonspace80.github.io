/* ==========================================================================
   MODULE CONJUGAISON : LE PLUS-QUE-PARFAIT
   FrenchDELFB2C1 Data Package
   ========================================================================== */

window.conjugaisonDataset = window.conjugaisonDataset || {};
window.conjugaisonDataset['plus_que_parfait'] = {
  "id": "conjugaison-plus-que-parfait",
  "title": "Le Plus-que-parfait",
  "level": "🟠 Niveau B1 (Seuil)",
  "levelCode": "B1",
  "category": "conjugaison",
  "ruleTitle": "Antériorité dans le passé et structure narrative",
  "ruleContent": "\n      <h3>1. Structure du plus-que-parfait</h3>\n      <p>Auxiliaire <strong>ÊTRE ou AVOIR à l'Imparfait</strong> + <strong>Participe Passé</strong>.</p>\n      <ul>\n        <li><i>J'avais pensé, tu avais compris, nous avions décidé, ils avaient analysé.</i></li>\n        <li><i>J'étais parti(e), elle était entrée, nous nous étions concertés.</i></li>\n      </ul>\n      <h3>2. Valeur centrale d'antériorité</h3>\n      <p>Le plus-que-parfait situe un fait passé qui est survenu <strong>avant</strong> un autre fait passé (exprimé au passé composé, à l'imparfait ou au passé simple) :</p>\n      <p><i>Quand les secours sont arrivés sur les lieux (passé composé), les sinistrés <strong>avaient déjà trouvé</strong> refuge dans l'école (plus-que-parfait : événement survenu en amont).</i></p>\n      <h3>3. Emploi dans l'hypothèse (irréel du passé)</h3>\n      <p><code>Si + Plus-que-parfait ➔ Conditionnel Passé</code></p>\n      <p><i>Si nous <strong>avions su</strong> que la route était bloquée, nous aurions emprunté l'itinéraire bis.</i></p>\n    ",
  "questions": [
    {
      "id": "conj-pqp-q1",
      "question": "Lorsqu'il a enfin pris la parole, les rumeurs les plus folles (déjà / circuler) _____ dans les couloirs du ministère.",
      "prompt": "Lorsqu'il a enfin pris la parole, les rumeurs les plus folles (déjà / circuler) _____ dans les couloirs du ministère.",
      "options": [
        "avaient déjà circulé",
        "ont déjà circulé",
        "circulaient déjà",
        "auraient déjà circulé"
      ],
      "correct": 0,
      "explanation": "L'action de circuler est antérieure à la prise de parole au passé composé : plus-que-parfait 'avaient déjà circulé'."
    },
    {
      "id": "conj-pqp-q2",
      "question": "Elle nous a présenté avec fierté la peinture qu'elle (achever) _____ la veille au soir.",
      "prompt": "Elle nous a présenté avec fierté la peinture qu'elle (achever) _____ la veille au soir.",
      "options": [
        "avait achevée",
        "avait achevé",
        "a achevé",
        "achevait"
      ],
      "correct": 0,
      "explanation": "Antériorité par rapport à la présentation + accord avec le COD antéposé 'qu'' représentant 'la peinture' (féminin singulier) : 'avait achevée'."
    },
    {
      "id": "conj-pqp-q3",
      "question": "Nous étions certains qu'ils (se perdre) _____ dans les ruelles de la vieille ville.",
      "prompt": "Nous étions certains qu'ils (se perdre) _____ dans les ruelles de la vieille ville.",
      "options": [
        "s'étaient perdus",
        "se sont perdus",
        "s'étaient perdu",
        "s'étaient perdues"
      ],
      "correct": 0,
      "explanation": "Verbe pronominal au plus-que-parfait avec auxiliaire être et accord au masculin pluriel : 's'étaient perdus'."
    },
    {
      "id": "conj-pqp-q4",
      "question": "Si vous nous (prévenir) _____ de votre venue, nous vous aurions préparé une chambre d'amis.",
      "prompt": "Si vous nous (prévenir) _____ de votre venue, nous vous aurions préparé une chambre d'amis.",
      "options": [
        "aviez prévenus",
        "avez prévenus",
        "auriez prévenu",
        "préveniez"
      ],
      "correct": 0,
      "explanation": "Dans la subordonnée d'hypothèse introduite par 'si', l'irréel du passé demande le plus-que-parfait : 'aviez prévenus' (accord avec le COD antéposé 'nous')."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.grammarDataset = window.grammarDataset || [];
  if (!window.grammarDataset.some(function(l) { return l.id === window.conjugaisonDataset['plus_que_parfait'].id; })) {
    window.grammarDataset.push(window.conjugaisonDataset['plus_que_parfait']);
  }
}
