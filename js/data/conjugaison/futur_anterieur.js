/* ==========================================================================
   MODULE CONJUGAISON : LE FUTUR ANTÉRIEUR
   FrenchDELFB2C1 Data Package
   ========================================================================== */

window.conjugaisonDataset = window.conjugaisonDataset || {};
window.conjugaisonDataset['futur_anterieur'] = {
  "id": "conjugaison-futur-anterieur",
  "title": "Le Futur Antérieur",
  "level": "B1-B2",
  "category": "conjugaison",
  "ruleTitle": "Antériorité par rapport au futur et supposition de haute probabilité",
  "ruleContent": "\n      <h3>1. Formation du futur antérieur</h3>\n      <p>Auxiliaire <strong>AVOIR</strong> ou <strong>ÊTRE au Futur Simple</strong> (<i>j'aurai / je serai</i>) + <strong>Participe Passé</strong>.</p>\n      <ul>\n        <li><i>J'aurai terminé, tu auras compris, nous serons arrivés, elles seront parties.</i></li>\n        <li>Mêmes règles d'accord du participe passé qu'au passé composé.</li>\n      </ul>\n      <h3>2. Valeurs majeures du futur antérieur</h3>\n      <ul>\n        <li><strong>Antériorité dans le futur :</strong> action qui sera achevée avant une autre action future. Elle s'introduit très fréquemment par des conjonctions temporelles : <i>quand, lorsque, dès que, aussitôt que</i>.<br>\n        <i>Dès que vous <strong>aurez validé</strong> ce protocole, nous <strong>pourrons</strong> lancer les travaux.</i></li>\n        <li><strong>Bilan à un moment futur déterminé :</strong> (<i>D'ici la fin de l'année, nous aurons doublé notre capacité de production</i>).</li>\n        <li><strong>Supposition / Probabilité dans le passé :</strong> explication vraisemblable d'un fait constaté (<i>Il n'est pas venu à l'heure ; il aura sans doute manqué sa correspondance</i>).</li>\n      </ul>\n    ",
  "questions": [
    {
      "id": "conj-fa-q1",
      "prompt": "Aussitôt que la cour d'appel (rendre) _____ son arrêt définitif, les avocats tiendront un point presse.",
      "options": [
        "aura rendu",
        "a rendu",
        "rendra",
        "aurait rendu"
      ],
      "correct": 0,
      "explanation": "L'action d'achever le jugement précède le point presse futur ➔ futur antérieur : 'aura rendu'."
    },
    {
      "id": "conj-fa-q2",
      "prompt": "Dès que les inspecteurs (examiner) _____ l'ensemble des pièces à conviction, ils rédigeront leur rapport.",
      "options": [
        "auront examiné",
        "avaient examiné",
        "examineront",
        "auront examinés"
      ],
      "correct": 0,
      "explanation": "Auxiliaire avoir au futur (auront) + participe passé invariable sans COD antéposé : 'auront examiné'."
    },
    {
      "id": "conj-fa-q3",
      "prompt": "Pourquoi la ministre tarde-t-elle à s'exprimer ? - Elle (être retenue) _____ par des urgences diplomatiques.",
      "options": [
        "aura été retenue",
        "sera retenue",
        "a été retenue",
        "aurait été retenue"
      ],
      "correct": 0,
      "explanation": "Le futur antérieur exprime ici une supposition probable expliquant un fait présent/passé : 'aura été retenue'."
    }
  ]
};
