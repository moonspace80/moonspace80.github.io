/* ==========================================================================
   VOCABULARY QUIZ DATASET
   Banque dédiée de synonymes et d'intrus pour tous les niveaux DELF (A1 à C2).
   Règle stricte : dans chaque série de 5 mots (synonymes), il n'existe
   qu'UNE SEULE ET UNIQUE paire de synonymes (les 3 distracteurs sont mutuellement indépendants).
   ========================================================================== */

window.vocabQuizData = {
  // ------------------------------------------------------------------------
  // PARTIE 2 : SYNONYMES (5 mots présentés, 2 sont synonymes)
  // ------------------------------------------------------------------------
  synonyms: {
    A1: [
      {
        id: "syn_a1_1",
        words: ["Rapide", "Vite", "Lent", "Grand", "Chaud"],
        pair: ["Rapide", "Vite"],
        explanation: "« Rapide » et « Vite » expriment tous les deux une grande vitesse ou promptitude."
      },
      {
        id: "syn_a1_2",
        words: ["Maison", "Demeure", "Voiture", "Table", "École"],
        pair: ["Maison", "Demeure"],
        explanation: "Une « demeure » est un synonyme plus soutenu de « maison » (lieu où l'on habite)."
      },
      {
        id: "syn_a1_3",
        words: ["Joli", "Beau", "Triste", "Froid", "Petit"],
        pair: ["Joli", "Beau"],
        explanation: "« Joli » et « Beau » désignent tous deux ce qui plaît au regard ou charme les sens."
      },
      {
        id: "syn_a1_4",
        words: ["Parler", "Discuter", "Manger", "Dormir", "Partir"],
        pair: ["Parler", "Discuter"],
        explanation: "« Parler » et « Discuter » signifient communiquer par des mots ou échanger oralement."
      },
      {
        id: "syn_a1_5",
        words: ["Aimer", "Adorer", "Détester", "Courir", "Acheter"],
        pair: ["Aimer", "Adorer"],
        explanation: "« Adorer » est un synonyme expressif d'« aimer beaucoup »."
      },
      {
        id: "syn_a1_6",
        words: ["Content", "Heureux", "Fatigué", "Seul", "Malade"],
        pair: ["Content", "Heureux"],
        explanation: "« Content » et « Heureux » décrivent un état de joie et de satisfaction."
      }
    ],
    A2: [
      {
        id: "syn_a2_1",
        words: ["Commencer", "Débuter", "Finir", "Attendre", "Oublier"],
        pair: ["Commencer", "Débuter"],
        explanation: "« Débuter » et « Commencer » marquent l'entrée dans une action ou un processus."
      },
      {
        id: "syn_a2_2",
        words: ["Difficile", "Compliqué", "Facile", "Utile", "Prudent"],
        pair: ["Difficile", "Compliqué"],
        explanation: "« Difficile » et « Compliqué » qualifient ce qui demande de gros efforts de compréhension ou d'exécution."
      },
      {
        id: "syn_a2_3",
        words: ["Calme", "Paisible", "Bruyant", "Sérieux", "Curieux"],
        pair: ["Calme", "Paisible"],
        explanation: "« Calme » et « Paisible » expriment l'absence d'agitation, la tranquillité et la sérénité."
      },
      {
        id: "syn_a2_4",
        words: ["Aider", "Soutenir", "Refuser", "Regarder", "Chercher"],
        pair: ["Aider", "Soutenir"],
        explanation: "« Aider » et « Soutenir » signifient apporter son appui ou prêter main-forte à autrui."
      },
      {
        id: "syn_a2_5",
        words: ["Étrange", "Bizarre", "Normal", "Propre", "Exact"],
        pair: ["Étrange", "Bizarre"],
        explanation: "« Étrange » et « Bizarre » s'appliquent à ce qui sort de l'ordinaire et surprend."
      },
      {
        id: "syn_a2_6",
        words: ["Casser", "Briser", "Réparer", "Nettoyer", "Garder"],
        pair: ["Casser", "Briser"],
        explanation: "« Casser » et « Briser » signifient mettre en pièces ou rompre un objet."
      }
    ],
    B1: [
      {
        id: "syn_b1_1",
        words: ["Bavard", "Loquace", "Discret", "Modeste", "Économe"],
        pair: ["Bavard", "Loquace"],
        explanation: "« Loquace » est un synonyme plus soutenu de « bavard » (qui parle abondamment et volontiers)."
      },
      {
        id: "syn_b1_2",
        words: ["Augmenter", "Accroître", "Diminuer", "Stagner", "Échouer"],
        pair: ["Augmenter", "Accroître"],
        explanation: "« Accroître » et « Augmenter » expriment le fait de rendre plus grand en nombre, valeur ou volume."
      },
      {
        id: "syn_b1_3",
        words: ["Surprenant", "Étonnant", "Habituel", "Prévisible", "Inutile"],
        pair: ["Surprenant", "Étonnant"],
        explanation: "« Étonnant » et « Surprenant » désignent ce qui provoque la surprise et déconcerte."
      },
      {
        id: "syn_b1_4",
        words: ["Convaincre", "Persuader", "Hésiter", "Douter", "Contredire"],
        pair: ["Convaincre", "Persuader"],
        explanation: "« Convaincre » et « Persuader » visent à amener quelqu'un à adhérer à une idée."
      },
      {
        id: "syn_b1_5",
        words: ["Pénible", "Éprouvant", "Agréable", "Divertissant", "Passager"],
        pair: ["Pénible", "Éprouvant"],
        explanation: "« Pénible » et « Éprouvant » qualifient ce qui cause de la fatigue morale ou de la souffrance physique."
      },
      {
        id: "syn_b1_6",
        words: ["Espoir", "Espérance", "Crainte", "Rancœur", "Désespoir"],
        pair: ["Espoir", "Espérance"],
        explanation: "« Espoir » et « Espérance » désignent l'attente confiante d'un bien futur."
      }
    ],
    B2: [
      {
        id: "syn_b2_1",
        words: ["Éphémère", "Fugace", "Pérenne", "Bruyant", "Lointain"],
        pair: ["Éphémère", "Fugace"],
        explanation: "« Éphémère » et « Fugace » qualifient ce qui ne dure qu'un très court instant."
      },
      {
        id: "syn_b2_2",
        words: ["Néfaste", "Nuisible", "Bénéfique", "Complexe", "Anodin"],
        pair: ["Néfaste", "Nuisible"],
        explanation: "« Néfaste » et « Nuisible » s'appliquent à ce qui cause du tort, des dommages ou des préjudices."
      },
      {
        id: "syn_b2_3",
        words: ["Paradoxe", "Contradiction", "Évidence", "Hypothèse", "Consensus"],
        pair: ["Paradoxe", "Contradiction"],
        explanation: "« Paradoxe » et « Contradiction » expriment une opposition entre deux idées ou éléments inconciliables."
      },
      {
        id: "syn_b2_4",
        words: ["Atténuer", "Adoucir", "Aggraver", "Ignorer", "Mesurer"],
        pair: ["Atténuer", "Adoucir"],
        explanation: "« Atténuer » et « Adoucir » signifient rendre moins vif, moins grave ou moins douloureux."
      },
      {
        id: "syn_b2_5",
        words: ["Inexorable", "Inévitable", "Évitable", "Facultatif", "Aléatoire"],
        pair: ["Inexorable", "Inévitable"],
        explanation: "« Inexorable » et « Inévitable » désignent un destin ou un fait contre lequel on ne peut rien empêcher."
      },
      {
        id: "syn_b2_6",
        words: ["Désuet", "Obsolète", "Moderne", "Robuste", "Discret"],
        pair: ["Désuet", "Obsolète"],
        explanation: "« Désuet » et « Obsolète » s'appliquent à ce qui est sorti de l'usage ou passé de mode."
      }
    ],
    C1: [
      {
        id: "syn_c1_1",
        words: ["Dithyrambique", "Élogieux", "Critique", "Neutre", "Énigmatique"],
        pair: ["Dithyrambique", "Élogieux"],
        explanation: "« Dithyrambique » est un synonyme emphatique d'« élogieux » (qui contient des louanges passionnées)."
      },
      {
        id: "syn_c1_2",
        words: ["Indolence", "Apathie", "Ferveur", "Lucidité", "Prudence"],
        pair: ["Indolence", "Apathie"],
        explanation: "« Indolence » et « Apathie » désignent un état d'inertie, de paresse ou de détachement insensible."
      },
      {
        id: "syn_c1_3",
        words: ["Équivoque", "Ambigu", "Limpide", "Sévère", "Complexe"],
        pair: ["Équivoque", "Ambigu"],
        explanation: "« Équivoque » et « Ambigu » qualifient ce qui a plusieurs sens possibles et laisse planer le doute."
      },
      {
        id: "syn_c1_4",
        words: ["Procrastiner", "Ajourner", "Anticiper", "Conclure", "Refuser"],
        pair: ["Procrastiner", "Ajourner"],
        explanation: "« Procrastiner » et « Ajourner » consistent à repousser une décision ou une tâche au lendemain."
      },
      {
        id: "syn_c1_5",
        words: ["Circonspect", "Prudent", "Audacieux", "Distrait", "Hésitant"],
        pair: ["Circonspect", "Prudent"],
        explanation: "« Circonspect » s'applique à une personne attentive, réfléchie et qui pèse tous les risques avant d'agir."
      },
      {
        id: "syn_c1_6",
        words: ["Quintessence", "Substantifique", "Superficialité", "Généralité", "Accessoire"],
        pair: ["Quintessence", "Substantifique"],
        explanation: "« Quintessence » et « Substantifique » renvoient à l'essence la plus pure et concentrée d'une chose (moelle)."
      }
    ],
    C2: [
      {
        id: "syn_c2_1",
        words: ["Apogée", "Sommet", "Déclin", "Origine", "Trajectoire"],
        pair: ["Apogée", "Sommet"],
        explanation: "« Apogée » et « Sommet » désignent le point le plus élevé, le degré le plus parfait d'une gloire ou d'une puissance."
      },
      {
        id: "syn_c2_2",
        words: ["Pérégrination", "Pérégrinement", "Sédentarité", "Méditation", "Ferveur"],
        pair: ["Pérégrination", "Pérégrinement"],
        explanation: "« Pérégrination » et « Pérégrinement » désignent de longs déplacements, voyages incessants ou errances."
      },
      {
        id: "syn_c2_3",
        words: ["Pellucide", "Diaphane", "Opaque", "Rugueux", "Éphémère"],
        pair: ["Pellucide", "Diaphane"],
        explanation: "« Pellucide » et « Diaphane » qualifient ce qui est transparent, laissant passer délicatement la lumière."
      },
      {
        id: "syn_c2_4",
        words: ["Ubiquité", "Omniprésence", "Absence", "Éloignement", "Inexistence"],
        pair: ["Ubiquité", "Omniprésence"],
        explanation: "« Ubiquité » et « Omniprésence » caractérisent la faculté d'être présent partout en même temps."
      },
      {
        id: "syn_c2_5",
        words: ["Inchoatif", "Inceptif", "Accompli", "Itératif", "Défectif"],
        pair: ["Inchoatif", "Inceptif"],
        explanation: "« Inchoatif » et « Inceptif » désignent en linguistique ce qui marque le début d'une action."
      },
      {
        id: "syn_c2_6",
        words: ["Séculaire", "Centenaire", "Récent", "Immuable", "Futuriste"],
        pair: ["Séculaire", "Centenaire"],
        explanation: "« Séculaire » et « Centenaire » renvoient tous deux à une durée de cent ans ou plusieurs siècles."
      }
    ]
  },

  // ------------------------------------------------------------------------
  // PARTIE 3 : TROUVER L'INTRUS (4 mots présentés : 3 partagent une catégorie, 1 intrus)
  // La catégorie est implicite lors du choix et dévoilée à la validation.
  // ------------------------------------------------------------------------
  oddOneOut: {
    A1: [
      {
        id: "odd_a1_1",
        words: ["Pomme", "Banane", "Carotte", "Poire"],
        odd: "Carotte",
        category: "Les fruits",
        explanation: "La pomme, la banane et la poire sont des fruits. La carotte est un légume racine."
      },
      {
        id: "odd_a1_2",
        words: ["Chat", "Chien", "Cheval", "Chaise"],
        odd: "Chaise",
        category: "Les animaux",
        explanation: "Le chat, le chien et le cheval sont des animaux. La chaise est un meuble."
      },
      {
        id: "odd_a1_3",
        words: ["Lundi", "Avril", "Jeudi", "Samedi"],
        odd: "Avril",
        category: "Les jours de la semaine",
        explanation: "Lundi, jeudi et samedi sont des jours de la semaine. Avril est un mois de l'année."
      },
      {
        id: "odd_a1_4",
        words: ["Pantalon", "Chemise", "Fourchette", "Robe"],
        odd: "Fourchette",
        category: "Les vêtements",
        explanation: "Le pantalon, la chemise et la robe sont des vêtements. La fourchette est un couvert de table."
      },
      {
        id: "odd_a1_5",
        words: ["Rouge", "Bleu", "Carré", "Jaune"],
        odd: "Carré",
        category: "Les couleurs",
        explanation: "Rouge, bleu et jaune sont des couleurs. Carré est une forme géométrique."
      },
      {
        id: "odd_a1_6",
        words: ["Père", "Mère", "Voiture", "Frère"],
        odd: "Voiture",
        category: "La famille",
        explanation: "Père, mère et frère sont des membres de la famille. La voiture est un moyen de transport."
      }
    ],
    A2: [
      {
        id: "odd_a2_1",
        words: ["Avion", "Train", "Bateau", "Gare"],
        odd: "Gare",
        category: "Les moyens de transport (véhicules)",
        explanation: "L'avion, le train et le bateau sont des véhicules. La gare est un lieu / bâtiment ferroviaire."
      },
      {
        id: "odd_a2_2",
        words: ["Médecin", "Boulanger", "Cuisine", "Avocat"],
        odd: "Cuisine",
        category: "Les professions / métiers",
        explanation: "Médecin, boulanger et avocat sont des métiers. La cuisine est une pièce de la maison."
      },
      {
        id: "odd_a2_3",
        words: ["Chambre", "Salon", "Balcon", "Casserole"],
        odd: "Casserole",
        category: "Les pièces et espaces d'un logement",
        explanation: "Chambre, salon et balcon sont des espaces du logement. La casserole est un ustensile de cuisine."
      },
      {
        id: "odd_a2_4",
        words: ["Pluvieux", "Ensoleillé", "Orageux", "Gourmand"],
        odd: "Gourmand",
        category: "Les adjectifs météorologiques",
        explanation: "Pluvieux, ensoleillé et orageux qualifient la météo. Gourmand qualifie l'appétit d'une personne."
      },
      {
        id: "odd_a2_5",
        words: ["Pied", "Bras", "Genou", "Chapeau"],
        odd: "Chapeau",
        category: "Les parties du corps humain",
        explanation: "Pied, bras et genou sont des membres du corps. Le chapeau est un accessoire vestimentaire."
      },
      {
        id: "odd_a2_6",
        words: ["Nager", "Courir", "Dormir", "Skier"],
        odd: "Dormir",
        category: "Les activités sportives / physiques",
        explanation: "Nager, courir et skier sont des disciplines sportives actives. Dormir est une phase de repos."
      }
    ],
    B1: [
      {
        id: "odd_b1_1",
        words: ["Démocratie", "Monarchie", "République", "Ordinateur"],
        odd: "Ordinateur",
        category: "Les régimes et systèmes politiques",
        explanation: "Démocratie, monarchie et république sont des systèmes politiques. L'ordinateur est un appareil numérique."
      },
      {
        id: "odd_b1_2",
        words: ["Recyclage", "Compostage", "Tri sélectif", "Déforestation"],
        odd: "Déforestation",
        category: "Les actions écologiques de gestion durable des déchets",
        explanation: "Recyclage, compostage et tri sont des pratiques vertueuses. La déforestation est une destruction environnementale."
      },
      {
        id: "odd_b1_3",
        words: ["Épargner", "Investir", "Placer", "Gaspiller"],
        odd: "Gaspiller",
        category: "La gestion prudente de l'argent et du patrimoine",
        explanation: "Épargner, investir et placer relèvent de la prévoyance financière. Gaspiller signifie dépenser sans compter."
      },
      {
        id: "odd_b1_4",
        words: ["Soutenance", "Examen", "Concours", "Randonnée"],
        odd: "Randonnée",
        category: "Les épreuves d'évaluation académique ou professionnelle",
        explanation: "Soutenance, examen et concours évaluent des compétences. La randonnée est une promenade récréative."
      },
      {
        id: "odd_b1_5",
        words: ["Bienveillance", "Empathie", "Tolérance", "Rancune"],
        odd: "Rancune",
        category: "Les vertus relationnelles et qualités d'écoute",
        explanation: "Bienveillance, empathie et tolérance favorisent la concorde. La rancune est un sentiment hostile d'amertume."
      },
      {
        id: "odd_b1_6",
        words: ["Candidature", "Curriculum vitæ", "Lettre de motivation", "Fiche de paie"],
        odd: "Fiche de paie",
        category: "Les documents de postulation pour un emploi",
        explanation: "Candidature, CV et lettre de motivation servent à briguer un poste. La fiche de paie constate le salaire après embauche."
      }
    ],
    B2: [
      {
        id: "odd_b2_1",
        words: ["Allégorie", "Métaphore", "Métonymie", "Plébiscite"],
        odd: "Plébiscite",
        category: "Les figures de style littéraires et rhétoriques",
        explanation: "Allégorie, métaphore et métonymie sont des figures de style. Le plébiscite est un vote démocratique populaire."
      },
      {
        id: "odd_b2_2",
        words: ["Climatosceptique", "Écoresponsable", "Décarboné", "Biodégradable"],
        odd: "Climatosceptique",
        category: "Le champ lexical de la transition écologique positive",
        explanation: "Écoresponsable, décarboné et biodégradable visent la préservation de la Terre. Climatosceptique conteste le réchauffement."
      },
      {
        id: "odd_b2_3",
        words: ["Scepticisme", "Désillusion", "Défiance", "Enthousiasme"],
        odd: "Enthousiasme",
        category: "Les attitudes de doute, méfiance et déception",
        explanation: "Scepticisme, désillusion et défiance traduisent une réserve critique. L'enthousiasme traduit un élan joyeux et confiant."
      },
      {
        id: "odd_b2_4",
        words: ["Équité", "Parité", "Justice", "Hégémonie"],
        odd: "Hégémonie",
        category: "Les principes d'équilibre sociétal et d'égalité",
        explanation: "Équité, parité et justice visent l'harmonie sociale sans domination. L'hégémonie est la suprématie dominatrice d'un groupe."
      },
      {
        id: "odd_b2_5",
        words: ["Proliférer", "Pulluler", "Foisonner", "Péricliter"],
        odd: "Péricliter",
        category: "Les verbes exprimant une croissance rapide et abondante",
        explanation: "Proliférer, pulluler et foisonner signifient se multiplier abondamment. Péricliter signifie décliner vers la ruine."
      },
      {
        id: "odd_b2_6",
        words: ["Concédant", "Opposant", "Réfutant", "Contestant"],
        odd: "Concédant",
        category: "Les démarches argumentatives de rejet et de contradiction",
        explanation: "Opposant, réfutant et contestant rejettent la thèse adverse. Concédant reconnaît la part de vérité de l'autre."
      }
    ],
    C1: [
      {
        id: "odd_c1_1",
        words: ["Panégyrique", "Éloge", "Apologie", "Pamphlet"],
        odd: "Pamphlet",
        category: "Les discours louangeurs et élogieux",
        explanation: "Panégyrique, éloge et apologie célèbrent les mérites de quelqu'un. Le pamphlet est un écrit satirique virulent qui attaque."
      },
      {
        id: "odd_c1_2",
        words: ["Inextricable", "Épineux", "Complexifié", "Intelligible"],
        odd: "Intelligible",
        category: "Ce qui est embrouillé, inextricable ou ardu à dénouer",
        explanation: "Inextricable, épineux et complexifié décrivent ce qui est obscur et difficile. Intelligible désigne ce qui se comprend aisément."
      },
      {
        id: "odd_c1_3",
        words: ["Émousser", "Affûter", "Aiguiser", "Aiguillonner"],
        odd: "Émousser",
        category: "L'aiguisement et l'intensification d'une pointe ou d'un élan",
        explanation: "Affûter, aiguiser et aiguillonner rendent tranchant ou incisif. Émousser signifie au contraire rendre moins vif ou arrondi."
      },
      {
        id: "odd_c1_4",
        words: ["Érudition", "Savoir", "Omniscience", "Ignominie"],
        odd: "Ignominie",
        category: "Le champ des connaissances et des compétences intellectuelles",
        explanation: "Érudition, savoir et omniscience renvoient à la science de l'esprit. L'ignominie désigne une déchéance infamante déshonorante."
      },
      {
        id: "odd_c1_5",
        words: ["Subversif", "Séditieux", "Factieux", "Obséquieux"],
        odd: "Obséquieux",
        category: "Ce qui conteste violemment l'ordre établi et se rebelle",
        explanation: "Subversif, séditieux et factieux cherchent à renverser l'ordre établi. Obséquieux décrit une servilité excessive et flatteuse."
      },
      {
        id: "odd_c1_6",
        words: ["Disparate", "Hétérogène", "Diversifié", "Homogène"],
        odd: "Homogène",
        category: "Ce qui est composé d'éléments disparates et dissemblables",
        explanation: "Disparate, hétérogène et diversifié comportent des éléments variés. Homogène désigne ce qui est fait d'éléments identiques."
      }
    ],
    C2: [
      {
        id: "odd_c2_1",
        words: ["Théogonie", "Cosmogonie", "Ontologie", "Sémiologie"],
        odd: "Sémiologie",
        category: "Les récits et genèses de l'univers, des dieux et de l'être",
        explanation: "Théogonie, cosmogonie et ontologie touchent à la genèse et à la nature première de l'univers. La sémiologie étudie les systèmes de signes."
      },
      {
        id: "odd_c2_2",
        words: ["Apothéose", "Panthéonisation", "Consécration", "Géhenne"],
        odd: "Géhenne",
        category: "Les hommages suprêmes et l'élévation vers la gloire éternelle",
        explanation: "Apothéose, panthéonisation et consécration célèbrent le faîte de la gloire. La géhenne évoque un supplice infernal."
      },
      {
        id: "odd_c2_3",
        words: ["Prolixe", "Verbeux", "Tarabiscoté", "Laconique"],
        odd: "Laconique",
        category: "Le style redondant, surchargé et bavard",
        explanation: "Prolixe, verbeux et tarabiscoté s'étendent avec excès de mots ou de complications. Laconique signifie d'une concision extrême."
      },
      {
        id: "odd_c2_4",
        words: ["Coruscant", "Étincelant", "Scintillant", "Lugubre"],
        odd: "Lugubre",
        category: "La brillance vive, l'éclat lumineux et rayonnant",
        explanation: "Coruscant, étincelant et scintillant resplendissent de clarté vive. Lugubre évoque la tristesse funèbre et ténébreuse."
      },
      {
        id: "odd_c2_5",
        words: ["Thaumaturge", "Miraculeux", "Prodige", "Funeste"],
        odd: "Funeste",
        category: "Ce qui opère ou relève du miracle bienfaisant et du merveilleux",
        explanation: "Thaumaturge, miraculeux et prodige manifestent le miracle bienveillant. Funeste annonce le deuil, la mort ou la ruine."
      },
      {
        id: "odd_c2_6",
        words: ["Acrostiche", "Calligramme", "Centon", "Anathème"],
        odd: "Anathème",
        category: "Les jeux et formes poétiques savantes",
        explanation: "Acrostiche, calligramme et centon sont des formes poétiques et littéraires inventives. L'anathème est une sentence solennelle de malédiction."
      }
    ]
  }
};
