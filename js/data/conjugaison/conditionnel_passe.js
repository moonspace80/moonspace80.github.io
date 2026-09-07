/* ==========================================================================
   MODULE CONJUGAISON : LE CONDITIONNEL PASSÉ
   FrenchDELFB2C1 Data Package
   ========================================================================== */

window.conjugaisonDataset = window.conjugaisonDataset || {};
window.conjugaisonDataset['conditionnel_passe'] = {
  "id": "conjugaison-conditionnel-passe",
  "title": "Le Conditionnel Passé",
  "level": "B1-B2",
  "category": "conjugaison",
  "ruleTitle": "Irréel du passé, regrets, reproches et prudence journalistique",
  "ruleContent": "\n      <h3>1. Structure du conditionnel passé</h3>\n      <p>Auxiliaire <strong>ÊTRE ou AVOIR au Conditionnel Présent</strong> (<i>aurais, aurais, aurait, aurions, auriez, auraient / serais, serais, serait, serions, seriez, seraient</i>) + <strong>Participe Passé</strong>.</p>\n      <h3>2. Valeurs essentielles</h3>\n      <ul>\n        <li><strong>L'Irréel du passé (Hypothèse non réalisée) :</strong><br>\n        <code>Si + Plus-que-parfait ➔ Conditionnel Passé</code><br>\n        <i>Si les secours étaient intervenus plus tôt, ils <strong>auraient pu</strong> circonscrire l'incendie.</i> (Mais ils ne sont pas intervenus plus tôt).</li>\n        <li><strong>Le Regret :</strong> sentiment douloureux face à une occasion manquée (<i>J'aurais tant aimé assister à la clôture du festival</i>).</li>\n        <li><strong>Le Reproche :</strong> critique rétrospective (<i>Vous auriez dû nous alerter dès l'apparition des premières anomalies !</i>).</li>\n        <li><strong>Prudence journalistique (Information sous réserve) :</strong> rapporter un fait non vérifié (<i>Le sommet international aurait débouché sur un accord préliminaire</i>).</li>\n      </ul>\n    ",
  "questions": [
    {
      "id": "conj-cpass-q1",
      "prompt": "Si les signataires avaient fait preuve de souplesse, le conflit (pouvoir) _____ être désamorcé dès la semaine dernière.",
      "options": [
        "aurait pu",
        "avait pu",
        "pourrait",
        "pourra"
      ],
      "correct": 0,
      "explanation": "Si + plus-que-parfait ('avaient fait') ➔ conditionnel passé ('aurait pu')."
    },
    {
      "id": "conj-cpass-q2",
      "prompt": "D'après les premières investigations policières, le suspect (quitter) _____ le territoire national sous une fausse identité.",
      "options": [
        "aurait quitté",
        "a quitté",
        "avait quitté",
        "ait quitté"
      ],
      "correct": 0,
      "explanation": "L'information non confirmée dans un registre d'actualité exige le conditionnel passé de distanciation : 'aurait quitté'."
    },
    {
      "id": "conj-cpass-q3",
      "prompt": "Tu (devoir) _____ vérifier la validité de tes documents d'embarquement avant de te rendre à l'aéroport !",
      "options": [
        "aurais dû",
        "avais dû",
        "devrais",
        "as dû"
      ],
      "correct": 0,
      "explanation": "'Tu aurais dû + infinitif' est la structure canonique pour formuler un reproche rétrospectif."
    }
  ]
};
