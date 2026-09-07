/* ==========================================================================
   MODULE CONJUGAISON : LE SUBJONCTIF PASSÉ
   FrenchDELFB2C1 Data Package
   ========================================================================== */

window.conjugaisonDataset = window.conjugaisonDataset || {};
window.conjugaisonDataset['subjonctif_passe'] = {
  "id": "conjugaison-subjonctif-passe",
  "title": "Le Subjonctif Passé",
  "level": "B2",
  "category": "conjugaison",
  "ruleTitle": "Antériorité dans le mode subjonctif et appréciation rétrospective",
  "ruleContent": "\n      <h3>1. Morphologie du subjonctif passé</h3>\n      <p>Auxiliaire <strong>ÊTRE ou AVOIR au Subjonctif Présent</strong> + <strong>Participe Passé</strong>.</p>\n      <ul>\n        <li><i>Avoir :</i> que j'aie compris, que tu aies lu, qu'il ait fait, que nous ayons obtenu, que vous ayez validé, qu'ils aient dit.</li>\n        <li><i>Être :</i> que je sois venu(e), qu'elle soit partie, que nous soyons intervenu(e)s, qu'ils se soient concertés.</li>\n      </ul>\n      <h3>2. Valeur et emploi d'antériorité</h3>\n      <p>Le subjonctif passé s'impose chaque fois que la subordonnée soumise au subjonctif décrit une <strong>action accomplie ou antérieure</strong> par rapport au verbe de la proposition principale :</p>\n      <ul>\n        <li><i>Je regrette vivement que vous n'<strong>ayez pas assisté</strong> au colloque hier.</i></li>\n        <li><i>Il est surprenant que les négociateurs <strong>soient parvenus</strong> à un accord si rapidement.</i></li>\n        <li><i>Bien que les électeurs <strong>aient massivement voté</strong>, la contestation demeure vive.</i></li>\n      </ul>\n    ",
  "questions": [
    {
      "id": "conj-spass-q1",
      "prompt": "Le président s'étonne que les rapports d'inspection ne lui (être transmis) _____ qu'après la divulgation médiatique.",
      "options": [
        "aient été transmis",
        "ont été transmis",
        "auraient été transmis",
        "avaient été transmis"
      ],
      "correct": 0,
      "explanation": "L'étonnement ('s'étonne que') sur un fait passé accompli exige le subjonctif passé : 'aient été transmis'."
    },
    {
      "id": "conj-spass-q2",
      "prompt": "Je suis profondément soulagé que vous (arriver) _____ à bon port en dépit de la tempête de neige.",
      "options": [
        "soyez arrivés",
        "êtes arrivés",
        "seriez arrivés",
        "soyez arrivé"
      ],
      "correct": 0,
      "explanation": "Sentiment au présent sur une action accomplie dans le passé ➔ subjonctif passé avec accord du sujet pluriel : 'soyez arrivés'."
    },
    {
      "id": "conj-spass-q3",
      "prompt": "Bien que les experts (avertir) _____ les autorités dès l'automne, aucune digue n'a été surélevée.",
      "options": [
        "aient averti",
        "ont averti",
        "avaient averti",
        "auraient averti"
      ],
      "correct": 0,
      "explanation": "Concession 'bien que' portant sur un avertissement antérieur à l'inondation ➔ subjonctif passé : 'aient averti'."
    }
  ]
};
