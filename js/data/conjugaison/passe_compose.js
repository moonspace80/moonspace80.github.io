/* ==========================================================================
   MODULE CONJUGAISON : LE PASSÉ COMPOSÉ
   FrenchDELFB2C1 Data Package
   ========================================================================== */

window.conjugaisonDataset = window.conjugaisonDataset || {};
window.conjugaisonDataset['passe_compose'] = {
  "id": "conjugaison-passe-compose",
  "title": "Le Passé Composé",
  "level": "A2-B1",
  "category": "conjugaison",
  "ruleTitle": "Auxiliaires, accords du participe passé et rupture narrative",
  "ruleContent": "\n      <h3>1. Structure du passé composé</h3>\n      <p>Auxiliaire <strong>AVOIR</strong> ou <strong>ÊTRE</strong> au présent de l'indicatif + <strong>Participe Passé</strong>.</p>\n      <h3>2. Le choix de l'auxiliaire</h3>\n      <ul>\n        <li><strong>Auxiliaire ÊTRE :</strong>\n          <ul>\n            <li>Les 14 verbes de mouvement et de changement d'état (<i>naître, mourir, monter, descendre, aller, venir, arriver, partir, entrer, sortir, retourner, rester, tomber, passer</i>).</li>\n            <li>Tous les verbes pronominaux (<i>se lever, se souvenir, s'apercevoir</i>).</li>\n          </ul>\n        </li>\n        <li><strong>Auxiliaire AVOIR :</strong> La grande majorité des autres verbes transitifs et intransitifs.</li>\n      </ul>\n      <h3>3. Règles d'accord du participe passé</h3>\n      <ul>\n        <li><strong>Avec ÊTRE :</strong> Le participe passé s'accorde obligatoirement en genre et en nombre avec le <strong>sujet</strong> (<i>Elles sont venues ; Ils se sont réconciliés</i>).</li>\n        <li><strong>Avec AVOIR :</strong> Pas d'accord avec le sujet ! Accord uniquement si le <strong>Complément d'Objet Direct (COD)</strong> est placé <strong>AVANT</strong> le verbe (<i>J'ai lu ces revues ➔ Ces revues que j'ai lues</i>).</li>\n      </ul>\n      <h3>4. Valeur narrative</h3>\n      <p>Exprime l'événement ponctuel, achevé, qui fait avancer la trame narrative et rompt l'arrière-plan de l'imparfait (<i>Il dormait quand le tonnerre a éclaté</i>).</p>\n    ",
  "questions": [
    {
      "id": "conj-pc-q1",
      "prompt": "Les conclusions que la commission d'enquête (rédiger) _____ ont été remises au ministre ce matin.",
      "options": [
        "a rédigées",
        "a rédigé",
        "ont rédigé",
        "ont rédigées"
      ],
      "correct": 0,
      "explanation": "Le sujet est 'la commission d'enquête' (singulier ➔ a rédigé). Le COD 'que' (représentant 'les conclusions', féminin pluriel) est antéposé ➔ accord 'a rédigées'."
    },
    {
      "id": "conj-pc-q2",
      "prompt": "Après de vives négociations, les deux délégations (parvenir) _____ à un compromis historique.",
      "options": [
        "sont parvenues",
        "ont parvenu",
        "sont parvenus",
        "ont parvenues"
      ],
      "correct": 0,
      "explanation": "'Parvenir' se conjugue avec l'auxiliaire être et s'accorde avec le sujet 'les deux délégations' (féminin pluriel) : 'sont parvenues'."
    },
    {
      "id": "conj-pc-q3",
      "prompt": "Elle s'est (rendre) _____ compte de son erreur après la publication de l'article.",
      "options": [
        "rendu",
        "rendue",
        "rendus",
        "rendre"
      ],
      "correct": 0,
      "explanation": "Dans la locution pronominale figée 'se rendre compte', 'compte' est le COD placé après le verbe. Le participe 'rendu' reste invariable."
    },
    {
      "id": "conj-pc-q4",
      "prompt": "Ces directives sanitaires, le préfet les (promulguer) _____ dès le début de la crise.",
      "options": [
        "a promulguées",
        "a promulgué",
        "ont promulgué",
        "a promulgués"
      ],
      "correct": 0,
      "explanation": "Le COD 'les' représentant 'ces directives' (féminin pluriel) précède l'auxiliaire avoir : 'a promulguées'."
    }
  ]
};
