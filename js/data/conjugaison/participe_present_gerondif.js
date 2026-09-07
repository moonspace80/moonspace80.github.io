/* ==========================================================================
   MODULE CONJUGAISON : PARTICIPE PRÉSENT & GÉRONDIF
   FrenchDELFB2C1 Data Package
   ========================================================================== */

window.conjugaisonDataset = window.conjugaisonDataset || {};
window.conjugaisonDataset['participe_present_gerondif'] = {
  "id": "conjugaison-participe-present-gerondif",
  "title": "Participe Présent & Gérondif",
  "level": "B1-B2",
  "category": "conjugaison",
  "ruleTitle": "Différenciation morphologique, règle du sujet identique et valeurs circonstancielles",
  "ruleContent": "\n      <h3>1. Formation commune</h3>\n      <p>Le radical de la 1re personne du pluriel (nous) au présent de l'indicatif + terminaison <strong>-ant</strong> :</p>\n      <ul>\n        <li><i>Parler ➔ nous parlons ➔ parlant</i></li>\n        <li><i>Finir ➔ nous finissons ➔ finissant</i></li>\n        <li><i>Prendre ➔ nous prenons ➔ prenant</i></li>\n      </ul>\n      <p><strong>Trois irréguliers majeurs :</strong> <i>Être ➔ étant</i>, <i>Avoir ➔ ayant</i>, <i>Savoir ➔ sachant</i>.</p>\n\n      <h3>2. Le Participe Présent</h3>\n      <ul>\n        <li>Forme verbale invariable (sans 'en') qui conserve ses compléments d'objet ou de lieu.</li>\n        <li>Remplace une proposition relative (<i>Les étudiants <strong>souhaitant</strong> postuler [= qui souhaitent]</i>) ou exprime la cause (<i><strong>Ayant</strong> achevé sa thèse, il a postulé</i>).</li>\n        <li><strong>Attention à ne pas le confondre avec l'Adjectif Verbal :</strong> l'adjectif verbal est variable et exprime une qualité (<i>Une histoire captivante ; Des arguments convaincants</i>).</li>\n      </ul>\n\n      <h3>3. Le Gérondif</h3>\n      <ul>\n        <li>Forme invariable précédée de la préposition <strong>EN</strong> : <code>en + participe présent</code> (<i>en marchant, en finissant, en sachant</i>).</li>\n        <li><strong>RÈGLE D'OR ABSOLUE DE SYNTAXE :</strong> Le sujet du gérondif <strong>DOIT ÊTRE LE MÊME</strong> que celui du verbe principal de la phrase !<br>\n        ✅ <i>En ouvrant le dossier, le magistrat a décelé une incohérence.</i><br>\n        ❌ <i>En ouvrant le dossier, une anomalie est apparue.</i> (Une anomalie ne peut pas ouvrir le dossier !)</li>\n        <li><strong>Valeurs circonstancielles :</strong>\n          <ul>\n            <li><strong>Simultanéité :</strong> <i>Il écoute une émission en prenant des notes.</i></li>\n            <li><strong>Moyen / Manière :</strong> <i>C'est en persévérant qu'elle a obtenu ce poste.</i></li>\n            <li><strong>Condition :</strong> <i>En lisant la presse quotidiennement, vous enrichirez votre lexique.</i></li>\n          </ul>\n        </li>\n      </ul>\n    ",
  "questions": [
    {
      "id": "conj-ppg-q1",
      "prompt": "Quelle phrase respecte rigoureusement la règle du sujet identique au gérondif ?",
      "options": [
        "En consultant attentivement les archives, l'historienne a découvert un manuscrit inédit.",
        "En consultant attentivement les archives, le manuscrit inédit a été découvert.",
        "En arrivant au bureau ce matin, la pluie s'est mise à tomber violemment.",
        "En écoutant ce débat radiophonique, des questions importantes se sont posées."
      ],
      "correct": 0,
      "explanation": "Dans la première phrase, 'l'historienne' est bien à la fois celle qui consulte et celle qui découvre. Dans les autres, le sujet du verbe principal ('le manuscrit', 'la pluie', 'des questions') est incapable d'effectuer l'action du gérondif."
    },
    {
      "id": "conj-ppg-q2",
      "prompt": "Les candidats (posséder) _____ une solide expérience dans le secteur associatif seront prioritaires.",
      "options": [
        "possédant",
        "en possédant",
        "possédants",
        "possédaient"
      ],
      "correct": 0,
      "explanation": "Ici, le participe présent remplace une proposition relative ('qui possèdent') qualifiant 'les candidats' : 'possédant'."
    },
    {
      "id": "conj-ppg-q3",
      "prompt": "C'est _____ preuve de patience et _____ un dialogue soutenu qu'ils ont résolu cette crise.",
      "options": [
        "en faisant / en maintenant",
        "faisant / maintenant",
        "en faisant / maintenant",
        "par faire / par maintenir"
      ],
      "correct": 0,
      "explanation": "L'expression du moyen au gérondif exige la répétition de 'en' devant chaque participe présent coordonné : 'en faisant... et en maintenant'."
    }
  ]
};
