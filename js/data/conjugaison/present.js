/* ==========================================================================
   MODULE CONJUGAISON : LE PRÉSENT DE L'INDICATIF
   FrenchDELFB2C1 Data Package
   ========================================================================== */

window.conjugaisonDataset = window.conjugaisonDataset || {};
window.conjugaisonDataset['present'] = {
  "id": "conjugaison-present",
  "title": "Le Présent de l'Indicatif",
  "level": "A1-B1",
  "category": "conjugaison",
  "ruleTitle": "Morphologie et valeurs du Présent de l'Indicatif",
  "ruleContent": "\n      <h3>1. Valeurs du présent</h3>\n      <ul>\n        <li><strong>Présent d'énonciation :</strong> action au moment où l'on parle (<i>Je rédige ce rapport en ce moment</i>).</li>\n        <li><strong>Présent d'habitude :</strong> actions récurrentes (<i>Chaque matin, nous vérifions nos courriels</i>).</li>\n        <li><strong>Présent de vérité générale :</strong> faits immuables (<i>L'eau bout à cent degrés</i>).</li>\n        <li><strong>Futur immédiat :</strong> événement imminent (<i>Le train part dans trois minutes</i>).</li>\n      </ul>\n      <h3>2. Terminaisons régulières par groupe</h3>\n      <ul>\n        <li><strong>1er groupe (-er) :</strong> -e, -es, -e, -ons, -ez, -ent (ex: <i>nous travaillons, ils développent</i>).</li>\n        <li><strong>2e groupe (-ir / -issant) :</strong> -is, -is, -it, -issons, -issez, -issent (ex: <i>nous choisissons, ils réussissent</i>).</li>\n        <li><strong>3e groupe :</strong> -s, -s, -t (ou -d), -ons, -ez, -ont (ex: <i>j'attends, il attend, nous prenons</i>).</li>\n      </ul>\n      <h3>3. Particularités et verbes irréguliers clés</h3>\n      <ul>\n        <li><strong>-cer / -ger :</strong> <i>nous avançons</i> (cédille), <i>nous partageons</i> (e muet).</li>\n        <li><strong>Être & Avoir :</strong> <i>je suis, tu es, il est, nous sommes, vous êtes, ils sont</i> / <i>j'ai, tu as, il a, nous avons, vous avez, ils ont</i>.</li>\n        <li><strong>Faire & Dire :</strong> <i>vous faites, ils font</i> / <i>vous dites, ils disent</i>.</li>\n      </ul>\n    ",
  "questions": [
    {
      "id": "conj-pres-q1",
      "prompt": "Pour fluidifier la circulation, la mairie et les urbanistes (aménager) _____ de nouvelles pistes cyclables.",
      "options": [
        "aménagent",
        "aménagentent",
        "aménagions",
        "aménageons"
      ],
      "correct": 0,
      "explanation": "Au présent de l'indicatif, la 3e personne du pluriel des verbes en -er prend la terminaison '-ent' : ils aménagent."
    },
    {
      "id": "conj-pres-q2",
      "prompt": "Nous (commencer) _____ à mesurer les retombées bénéfiques de ce plan de rénovation énergétique.",
      "options": [
        "commençons",
        "commencons",
        "commençont",
        "commencions"
      ],
      "correct": 0,
      "explanation": "Les verbes en -cer prennent une cédille sous le c devant 'o' pour conserver le son [s] : nous commençons."
    },
    {
      "id": "conj-pres-q3",
      "prompt": "Vous (faire) _____ une analyse remarquable des paradoxes économiques actuels.",
      "options": [
        "faites",
        "faisez",
        "fesez",
        "faisons"
      ],
      "correct": 0,
      "explanation": "La 2e personne du pluriel du verbe faire au présent est 'vous faites' (forme héritée et irrégulière)."
    },
    {
      "id": "conj-pres-q4",
      "prompt": "Les associations de quartier (intervenir) _____ quotidiennement auprès des publics vulnérables.",
      "options": [
        "interviennent",
        "intervenent",
        "intervienent",
        "interviendront"
      ],
      "correct": 0,
      "explanation": "Le verbe intervenir double sa consonne n à la 3e personne du pluriel : ils/elles interviennent."
    }
  ]
};
