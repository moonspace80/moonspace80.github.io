/* ==========================================================================
   READING DATASET : 14 THÉMATIQUES OFFICIELLES DU DELF B2 & DALF C1
   Corpus complet d'articles journalistiques authentiques et questionnaires B2
   ========================================================================== */

window.delfReadingThemes = [
  "Les études & Éducation",
  "Le monde du travail",
  "La santé & Bien-être",
  "Les loisirs & La culture",
  "Habitudes de consommation",
  "Comportements alimentaires",
  "Relations sociales",
  "Égalité homme/femme",
  "Relations familiales",
  "L'environnement & Écologie",
  "Les médias & Internet",
  "Les transports & Mobilité",
  "Le français & Francophonie",
  "Le tourisme & Patrimoine"
];

window.readingDataset = [
  // -------------------------------------------------------------------------
  // THÈME 1 : LES ÉTUDES & ÉDUCATION
  // -------------------------------------------------------------------------
  {
    id: "theme-1",
    themeId: "theme-1",
    theme: "Les études & Éducation",
    themeTitle: "Les études & Éducation",
    title: "L'intelligence artificielle à l'université : menace pour la pensée critique ou levier pédagogique ?",
    level: "B2",
    readingTime: "5 min",
    wordCount: 410,
    source: "Le Monde de l'Éducation — Par Sophie Delorme",
    text: `
      <p>L'irruption fulgurante des modèles de langage et des agents conversationnels génératifs dans l'enseignement supérieur a d'abord suscité une onde de panique chez les enseignants-chercheurs. Face au risque de plagiat automatisé et de standardisation des devoirs universitaires, certains établissements ont réagi en interdisant formellement l'accès à ces outils numériques au sein de leurs amphithéâtres.</p>
      <p>Toutefois, passée la première vague de stupeur, de nombreux pédagogues préconisent aujourd'hui une intégration raisonnée plutôt qu'une prohibition illusoire. L'enjeu fondamental consiste à transformer l'intelligence artificielle en un auxiliaire de travail méthodologique. Au lieu de sanctionner l'usage des algorithmes, les enseignants invitent désormais les étudiants à interroger de manière critique les réponses produites par la machine, à en débusquer les biais idéologiques et à identifier les hallucinations factuelles.</p>
      <p>Cette approche émancipatrice redéfinit en profondeur le rôle traditionnel de l'enseignant. Loin de se limiter à la transmission magistrale de savoirs bruts, le professeur devient un tuteur épistémologique qui guide l'apprenant dans la construction d'une argumentation nuancée et personnelle. Néanmoins, des sociologues de l'éducation tirent la sonnette d'alarme sur le risque d'aggravation de la fracture numérique : sans un accès garanti et gratuit pour tous à des outils d'entraînement de pointe, les inégalités de réussite risquent de se creuser au détriment des étudiants les plus vulnérables.</p>
    `,
    content: `
      <p>L'irruption fulgurante des modèles de langage et des agents conversationnels génératifs dans l'enseignement supérieur a d'abord suscité une onde de panique chez les enseignants-chercheurs. Face au risque de plagiat automatisé et de standardisation des devoirs universitaires, certains établissements ont réagi en interdisant formellement l'accès à ces outils numériques au sein de leurs amphithéâtres.</p>
      <p>Toutefois, passée la première vague de stupeur, de nombreux pédagogues préconisent aujourd'hui une intégration raisonnée plutôt qu'une prohibition illusoire. L'enjeu fondamental consiste à transformer l'intelligence artificielle en un auxiliaire de travail méthodologique. Au lieu de sanctionner l'usage des algorithmes, les enseignants invitent désormais les étudiants à interroger de manière critique les réponses produites par la machine, à en débusquer les biais idéologiques et à identifier les hallucinations factuelles.</p>
      <p>Cette approche émancipatrice redéfinit en profondeur le rôle traditionnel de l'enseignant. Loin de se limiter à la transmission magistrale de savoirs bruts, le professeur devient un tuteur épistémologique qui guide l'apprenant dans la construction d'une argumentation nuancée et personnelle. Néanmoins, des sociologues de l'éducation tirent la sonnette d'alarme sur le risque d'aggravation de la fracture numérique : sans un accès garanti et gratuit pour tous à des outils d'entraînement de pointe, les inégalités de réussite risquent de se creuser au détriment des étudiants les plus vulnérables.</p>
    `,
    vocab: ["Plagiat", "Prohibition", "Hallucination factuelle", "Tuteur épistémologique", "Fracture numérique"],
    vocabulary: [
      { word: "Plagiat", definition: "Appropriation frauduleuse du travail ou du texte d'autrui sans citation de source." },
      { word: "Prohibition", definition: "Interdiction légale ou réglementaire absolue d'un usage." },
      { word: "Hallucination factuelle", definition: "Génération par une IA d'informations erronées présentées avec assurance." },
      { word: "Tuteur épistémologique", definition: "Guide guidant l'étudiant dans les méthodes de validation du savoir." },
      { word: "Fracture numérique", definition: "Inégalité d'accès aux technologies numériques et à leurs compétences associées." }
    ],
    questions: [
      {
        id: "t1-q1",
        prompt: "Quelle a été la première réaction de certains établissements universitaires face à l'arrivée de l'IA ?",
        question: "Quelle a été la première réaction de certains établissements universitaires face à l'arrivée de l'IA ?",
        options: [
          "Remplacer immédiatement les examens écrits par des épreuves orales.",
          "Interdire formellement l'utilisation de ces outils dans leurs locaux.",
          "Offrir des licences payantes d'IA générative à tous les étudiants.",
          "Supprimer les cours magistraux au profit d'ateliers en ligne."
        ],
        correct: 1,
        explanation: "Le premier paragraphe précise que 'certains établissements ont réagi en interdisant formellement l'accès à ces outils numériques au sein de leurs amphithéâtres'."
      },
      {
        id: "t1-q2",
        prompt: "D'après l'article, comment les pédagogues souhaitent-ils désormais intégrer l'IA ?",
        question: "D'après l'article, comment les pédagogues souhaitent-ils désormais intégrer l'IA ?",
        options: [
          "En laissant l'IA rédiger la totalité des thèses universitaires.",
          "En l'utilisant comme un auxiliaire méthodologique soumis à un regard critique.",
          "En supprimant toute exigence de recherche documentaire personnelle.",
          "En confiant la correction des examens à des algorithmes automatiques."
        ],
        correct: 1,
        explanation: "Le texte indique que les pédagogues préconisent d'inviter les étudiants à 'interroger de manière critique les réponses produites par la machine'."
      },
      {
        id: "t1-q3",
        prompt: "Selon l'auteur, comment évolue la posture de l'enseignant à l'université ?",
        question: "Selon l'auteur, comment évolue la posture de l'enseignant à l'université ?",
        options: [
          "Il abandonne l'évaluation individuelle pour ne noter que des travaux de groupe.",
          "Il devient un simple technicien informatique chargé de la maintenance des serveurs.",
          "Il devient un tuteur accompagnant l'étudiant dans l'élaboration d'une pensée nuancée.",
          "Il se désengage de l'accompagnement personnalisé des étudiants de licence."
        ],
        correct: 2,
        explanation: "Le troisième paragraphe explique que 'le professeur devient un tuteur épistémologique qui guide l'apprenant dans la construction d'une argumentation nuancée'."
      },
      {
        id: "t1-q4",
        prompt: "Quelle préoccupation majeure les sociologues soulèvent-ils en fin d'article ?",
        question: "Quelle préoccupation majeure les sociologues soulèvent-ils en fin d'article ?",
        options: [
          "La baisse de motivation des enseignants face aux outils modernes.",
          "Le risque d'aggravation des inégalités dû à la fracture numérique.",
          "La disparition programmée des diplômes nationaux d'État.",
          "L'impossibilité de former les étudiants aux métiers du futur."
        ],
        correct: 1,
        explanation: "Les sociologues alertent sur 'le risque d'aggravation de la fracture numérique' et le creusement des inégalités au détriment des plus vulnérables."
      },
      {
        id: "t1-q5",
        prompt: "Dans le texte, le mot « prohibition » signifie :",
        question: "Dans le texte, le mot « prohibition » signifie :",
        options: [
          "Une interdiction formelle et stricte.",
          "Une promotion commerciale agressive.",
          "Une négociation entre partenaires sociaux.",
          "Une expérimentation scientifique provisoire."
        ],
        correct: 0,
        explanation: "'Prohibition' est synonyme d'interdiction rigoureuse décrétée par une autorité."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // THÈME 2 : LE MONDE DU TRAVAIL
  // -------------------------------------------------------------------------
  {
    id: "theme-2",
    themeId: "theme-2",
    theme: "Le monde du travail",
    themeTitle: "Le monde du travail",
    title: "La semaine de quatre jours : utopie managériale ou révolution durable du travail ?",
    level: "B2",
    readingTime: "5 min",
    wordCount: 430,
    source: "Les Échos — Chronique Travail & Société",
    text: `
      <p>Longtemps cantonnée aux cercles d'expérimentation avant-gardistes, la semaine de quatre jours sans baisse de salaire gagne désormais du terrain dans les entreprises européennes. Face à une quête de sens accrue chez les jeunes diplômés et à la multiplication des arrêts maladie pour épuisement professionnel, les directions des ressources humaines sont contraintes de repenser les rythmes de travail traditionnels.</p>
      <p>Les premiers bilans dressés par les entreprises pionnières se révèlent particulièrement éloquents. La réduction du temps de travail hebdomadaire à 32 heures s'accompagne d'une chute spectaculaire du taux d'absentéisme et d'un regain d'attractivité lors des recrutements. Loin de provoquer l'effondrement redouté de la productivité, cette organisation incite les équipes à rationaliser leurs journées : suppression des réunions superflues, automatisation des tâches chronophages et concentration accrue sur les missions à forte valeur ajoutée.</p>
      <p>Cependant, les détracteurs du dispositif soulignent que cette formule ne saurait s'appliquer de manière uniforme à l'ensemble du tissu économique. Si le secteur tertiaire et les métiers intellectuels s'accommodent aisément d'une telle flexibilité, la situation est tout autre dans l'industrie, le commerce de détail ou les services hospitaliers. Dans ces secteurs d'activité où la présence physique conditionne directement le service rendu, la mise en œuvre de la semaine de 4 jours exigerait des embauches massives que de nombreuses petites et moyennes entreprises ne peuvent financer.</p>
    `,
    content: `
      <p>Longtemps cantonnée aux cercles d'expérimentation avant-gardistes, la semaine de quatre jours sans baisse de salaire gagne désormais du terrain dans les entreprises européennes. Face à une quête de sens accrue chez les jeunes diplômés et à la multiplication des arrêts maladie pour épuisement professionnel, les directions des ressources humaines sont contraintes de repenser les rythmes de travail traditionnels.</p>
      <p>Les premiers bilans dressés par les entreprises pionnières se révèlent particulièrement éloquents. La réduction du temps de travail hebdomadaire à 32 heures s'accompagne d'une chute spectaculaire du taux d'absentéisme et d'un regain d'attractivité lors des recrutements. Loin de provoquer l'effondrement redouté de la productivité, cette organisation incite les équipes à rationaliser leurs journées : suppression des réunions superflues, automatisation des tâches chronophages et concentration accrue sur les missions à forte valeur ajoutée.</p>
      <p>Cependant, les détracteurs du dispositif soulignent que cette formule ne saurait s'appliquer de manière uniforme à l'ensemble du tissu économique. Si le secteur tertiaire et les métiers intellectuels s'accommodent aisément d'une telle flexibilité, la situation est tout autre dans l'industrie, le commerce de détail ou les services hospitaliers. Dans ces secteurs d'activité où la présence physique conditionne directement le service rendu, la mise en œuvre de la semaine de 4 jours exigerait des embauches massives que de nombreuses petites et moyennes entreprises ne peuvent financer.</p>
    `,
    vocab: ["Avant-gardiste", "Épuisement professionnel", "Rationaliser", "Chronophage", "Secteur tertiaire"],
    vocabulary: [
      { word: "Avant-gardiste", definition: "Qui est en avance sur son époque dans ses idées ou ses pratiques." },
      { word: "Épuisement professionnel", definition: "Syndrome d'usure physique et psychique lié au stress au travail (burnout)." },
      { word: "Rationaliser", definition: "Organiser de manière plus efficace en évitant les pertes de temps et d'énergie." },
      { word: "Chronophage", definition: "Qui absorbe beaucoup de temps." },
      { word: "Secteur tertiaire", definition: "Ensemble des activités économiques produisant des services marchands ou non marchands." }
    ],
    questions: [
      {
        id: "t2-q1",
        prompt: "Qu'est-ce qui pousse principalement les entreprises à envisager la semaine de 4 jours ?",
        question: "Qu'est-ce qui pousse principalement les entreprises à envisager la semaine de 4 jours ?",
        options: [
          "Une obligation légale imposée par l'Union européenne.",
          "La quête de sens des salariés et la hausse de l'épuisement professionnel.",
          "La baisse générale de la demande sur les marchés financiers.",
          "La volonté de réduire les salaires des nouveaux embauchés."
        ],
        correct: 1,
        explanation: "Le premier paragraphe cite 'la quête de sens accrue chez les jeunes' et 'la multiplication des arrêts pour épuisement professionnel'."
      },
      {
        id: "t2-q2",
        prompt: "Quel impact positif a été constaté dans les entreprises ayant testé les 32 heures ?",
        question: "Quel impact positif a été constaté dans les entreprises ayant testé les 32 heures ?",
        options: [
          "Une baisse de l'absentéisme et une attractivité renforcée pour recruter.",
          "L'allongement de la durée de toutes les réunions de service.",
          "Une diminution importante de la rémunération brute des employés.",
          "Le doublement immédiat du chiffre d'affaires à l'exportation."
        ],
        correct: 0,
        explanation: "Le second paragraphe mentionne explicitement 'une chute spectaculaire du taux d'absentéisme et un regain d'attractivité lors des recrutements'."
      },
      {
        id: "t2-q3",
        prompt: "Comment les équipes parviennent-elles à maintenir leur niveau de productivité ?",
        question: "Comment les équipes parviennent-elles à maintenir leur niveau de productivité ?",
        options: [
          "En travaillant secrètement pendant le week-end depuis leur domicile.",
          "En éliminant les réunions inutiles et en automatisant les tâches répétitives.",
          "En refusant de répondre aux courriels des clients prioritaires.",
          "En augmentant le temps de pause quotidienne des salariés."
        ],
        correct: 1,
        explanation: "Le texte note que les équipes rationalisent leurs journées grâce à la 'suppression des réunions superflues' et l''automatisation des tâches chronophages'."
      },
      {
        id: "t2-q4",
        prompt: "Pourquoi la semaine de 4 jours est-elle difficilement transposable à l'industrie ou aux hôpitaux ?",
        question: "Pourquoi la semaine de 4 jours est-elle difficilement transposable à l'industrie ou aux hôpitaux ?",
        options: [
          "Parce que les employés de ces secteurs refusent d'avoir un jour de repos supplémentaire.",
          "Parce que la continuité du service exige une présence physique et des embauches coûteuses.",
          "Parce que les conventions collectives interdisent tout aménagement du temps de travail.",
          "Parce que ces secteurs n'utilisent aucun outil informatique."
        ],
        correct: 1,
        explanation: "Le dernier paragraphe explique que 'la présence physique conditionne directement le service rendu' et exigerait des embauches massives."
      },
      {
        id: "t2-q5",
        prompt: "Dans le texte, une tâche qualifiée de « chronophage » est une tâche qui :",
        question: "Dans le texte, une tâche qualifiée de « chronophage » est une tâche qui :",
        options: [
          "Prend beaucoup de temps et d'énergie.",
          "Génère une forte rentabilité financière immédiate.",
          "Se réalise exclusivement de nuit.",
          "Est réservée aux cadres supérieurs."
        ],
        correct: 0,
        explanation: "'Chronophage' vient du grec chronos (temps) et phagein (dévorer), désignant ce qui consomme excessivement du temps."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // THÈME 3 : LA SANTÉ & BIEN-ÊTRE
  // -------------------------------------------------------------------------
  {
    id: "theme-3",
    themeId: "theme-3",
    theme: "La santé & Bien-être",
    themeTitle: "La santé & Bien-être",
    title: "La sédentarité au travail : le fléau invisible des sociétés modernes",
    level: "B2",
    readingTime: "4 min",
    wordCount: 390,
    source: "Santé Magazine & Prévention Médicale",
    text: `
      <p>Rester assis plus de sept heures par jour devant un écran est devenu le quotidien de millions de travailleurs de bureau. Pourtant, les autorités sanitaires mondiales qualifient désormais la sédentarité prolongée de véritable bombe à retardement pour la santé publique. Associée à une hausse marquée des risques cardiovasculaires, du diabète de type 2 et des troubles musculosquelettiques, l'inactivité physique coûte chaque année des milliards d'euros aux systèmes de sécurité sociale.</p>
      <p>Face à ce constat alarmant, le concept d'activité physique adaptée en milieu professionnel gagne en légitimité. Plusieurs entreprises innovantes installent des bureaux assis-debout ajustables, aménagent des salles de gymnastique douce et encouragent les « réunions marchées » en plein air. De récentes recherches en ergonomie confirment que fractionner le temps passé assis par des pauses actives de deux minutes toutes les demi-heures améliore la vigilance cognitive et réduit significativement les douleurs dorsales.</p>
      <p>Néanmoins, la responsabilité individuelle ne saurait masquer la nécessité de politiques de prévention coordonnées. Les médecins du travail plaident pour une refonte globale de l'organisation des journées de travail : accorder un temps garanti d'exercice physique sur le temps de travail hebdomadaire et valoriser les déplacements doux (marche, vélo) grâce à des incitations financières pérennes.</p>
    `,
    content: `
      <p>Rester assis plus de sept heures par jour devant un écran est devenu le quotidien de millions de travailleurs de bureau. Pourtant, les autorités sanitaires mondiales qualifient désormais la sédentarité prolongée de véritable bombe à retardement pour la santé publique. Associée à une hausse marquée des risques cardiovasculaires, du diabète de type 2 et des troubles musculosquelettiques, l'inactivité physique coûte chaque année des milliards d'euros aux systèmes de sécurité sociale.</p>
      <p>Face à ce constat alarmant, le concept d'activité physique adaptée en milieu professionnel gagne en légitimité. Plusieurs entreprises innovantes installent des bureaux assis-debout ajustables, aménagent des salles de gymnastique douce et encouragent les « réunions marchées » en plein air. De récentes recherches en ergonomie confirment que fractionner le temps passé assis par des pauses actives de deux minutes toutes les demi-heures améliore la vigilance cognitive et réduit significativement les douleurs dorsales.</p>
      <p>Néanmoins, la responsabilité individuelle ne saurait masquer la nécessité de politiques de prévention coordonnées. Les médecins du travail plaident pour une refonte globale de l'organisation des journées de travail : accorder un temps garanti d'exercice physique sur le temps de travail hebdomadaire et valoriser les déplacements doux (marche, vélo) grâce à des incitations financières pérennes.</p>
    `,
    vocab: ["Sédentarité", "Troubles musculosquelettiques", "Ergonomie", "Pauses actives", "Prévention"],
    vocabulary: [
      { word: "Sédentarité", definition: "Mode de vie caractérisé par une faible dépense énergétique en position assise." },
      { word: "Troubles musculosquelettiques", definition: "Affections touchant les articulations, muscles et tendons dues aux gestes répétitifs." },
      { word: "Ergonomie", definition: "Étude scientifique des conditions de travail et de l'adaptation des outils à l'homme." },
      { word: "Pauses actives", definition: "Courtes interruptions de travail dédiées au mouvement et à l'étirement corporel." },
      { word: "Prévention", definition: "Ensemble des mesures visant à éviter l'apparition de maladies ou d'accidents." }
    ],
    questions: [
      {
        id: "t3-q1",
        prompt: "Pourquoi les autorités sanitaires s'inquiètent-elles de la sédentarité prolongée ?",
        question: "Pourquoi les autorités sanitaires s'inquiètent-elles de la sédentarité prolongée ?",
        options: [
          "Parce qu'elle réduit l'intérêt des salariés pour la lecture de loisir.",
          "Parce qu'elle augmente fortement les risques cardiovasculaires et de diabète.",
          "Parce qu'elle provoque une baisse irrémédiable de la mémoire visuelle.",
          "Parce qu'elle empêche tout contact social entre collègues d'un même service."
        ],
        correct: 1,
        explanation: "Le texte relie directement la sédentarité à une hausse 'des risques cardiovasculaires, du diabète de type 2 et des troubles musculosquelettiques'."
      },
      {
        id: "t3-q2",
        prompt: "Que recommandent les recherches en ergonomie citées dans l'article ?",
        question: "Que recommandent les recherches en ergonomie citées dans l'article ?",
        options: [
          "Rester immobile pendant quatre heures consécutives sans parler.",
          "Fractionner la position assise avec de courtes pauses actives régulières.",
          "Supprimer totalement les chaises et travailler uniquement au sol.",
          "Pratiquer deux heures de course intensive avant chaque prise de poste."
        ],
        correct: 1,
        explanation: "Le texte note que 'fractionner le temps passé assis par des pauses actives de deux minutes toutes les demi-heures' améliore la vigilance."
      },
      {
        id: "t3-q3",
        prompt: "Quelle initiative est mise en place par certaines entreprises innovantes ?",
        question: "Quelle initiative est mise en place par certaines entreprises innovantes ?",
        options: [
          "L'interdiction stricte de boire de l'eau pendant les réunions.",
          "L'aménagement de bureaux assis-debout et l'organisation de réunions marchées.",
          "L'allongement de la journée de travail de deux heures supplémentaires.",
          "La fermeture des escaliers au profit exclusif des ascenseurs."
        ],
        correct: 1,
        explanation: "Le second paragraphe mentionne l'installation de 'bureaux assis-debout ajustables' et les 'réunions marchées en plein air'."
      },
      {
        id: "t3-q4",
        prompt: "Que réclament les médecins du travail à l'échelle collective ?",
        question: "Que réclament les médecins du travail à l'échelle collective ?",
        options: [
          "La privatisation des services de médecine préventive.",
          "Une refonte intégrant du temps garanti d'exercice sur le temps de travail.",
          "La suppression définitive des indemnités kilométriques vélo.",
          "L'obligation de réaliser toutes les tâches professionnelles en télétravail."
        ],
        correct: 1,
        explanation: "Les médecins plaident pour 'accorder un temps garanti d'exercice physique sur le temps de travail hebdomadaire'."
      },
      {
        id: "t3-q5",
        prompt: "L'expression « bombe à retardement » employée au début du texte suggère que :",
        question: "L'expression « bombe à retardement » employée au début du texte suggère que :",
        options: [
          "Le danger est immédiat mais de faible intensité.",
          "Les effets destructeurs graves se manifesteront inévitablement à moyen ou long terme.",
          "Le problème a déjà été entièrement résolu par les nouvelles technologies.",
          "La situation dépend exclusivement d'un événement accidentel imprévisible."
        ],
        correct: 1,
        explanation: "Une 'bombe à retardement' désigne une menace latente dont les conséquences dramatiques apparaîtront avec certitude dans le futur."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // THÈME 4 : LES LOISIRS & LA CULTURE
  // -------------------------------------------------------------------------
  {
    id: "theme-4",
    themeId: "theme-4",
    theme: "Les loisirs & La culture",
    themeTitle: "Les loisirs & La culture",
    title: "La démocratisation culturelle à l'épreuve du numérique : musées virtuels et immersifs",
    level: "B2",
    readingTime: "5 min",
    wordCount: 420,
    source: "Télérama — Culture & Nouveaux Médias",
    text: `
      <p>La numérisation des collections patrimoniales et l'essor des expositions immersives à 360 degrés ont profondément renouvelé l'accès aux chefs-d'œuvre de l'histoire de l'art. Grâce aux visites virtuelles en haute définition et aux casques de réalité augmentée, un habitant d'une zone rurale isolée peut désormais explorer la Galerie des Glaces du Château de Versailles ou contempler les détails d'une toile de Vermeer sans quitter son salon.</p>
      <p>Pour les partisans de cette révolution muséale, ces dispositifs technologiques constituent un formidable levier d'inclusion et de désacralisation. En rompant avec les codes feutrés et parfois intimidants des musées traditionnels, les expositions immersives attirent un public jeune et familial qui ne franchissait jusqu'alors jamais le seuil des institutions culturelles établies.</p>
      <p>Toutefois, de nombreux conservateurs et historiens de l'art émettent de fortes réserves sur cette tendance au tout-spectaculaire. Ils rappellent que l'expérience esthétique authentique repose sur la confrontation physique avec la matière, la texture et l'échelle réelle de l'œuvre originale. Remplacer la contemplation directe par une animation lumineuse scénarisée risque de réduire l'art à un simple produit de divertissement éphémère, destiné à alimenter les réseaux sociaux au détriment de l'émotion véritable et de l'analyse critique.</p>
    `,
    content: `
      <p>La numérisation des collections patrimoniales et l'essor des expositions immersives à 360 degrés ont profondément renouvelé l'accès aux chefs-d'œuvre de l'histoire de l'art. Grâce aux visites virtuelles en haute définition et aux casques de réalité augmentée, un habitant d'une zone rurale isolée peut désormais explorer la Galerie des Glaces du Château de Versailles ou contempler les détails d'une toile de Vermeer sans quitter son salon.</p>
      <p>Pour les partisans de cette révolution muséale, ces dispositifs technologiques constituent un formidable levier d'inclusion et de désacralisation. En rompant avec les codes feutrés et parfois intimidants des musées traditionnels, les expositions immersives attirent un public jeune et familial qui ne franchissait jusqu'alors jamais le seuil des institutions culturelles établies.</p>
      <p>Toutefois, de nombreux conservateurs et historiens de l'art émettent de fortes réserves sur cette tendance au tout-spectaculaire. Ils rappellent que l'expérience esthétique authentique repose sur la confrontation physique avec la matière, la texture et l'échelle réelle de l'œuvre originale. Remplacer la contemplation directe par une animation lumineuse scénarisée risque de réduire l'art à un simple produit de divertissement éphémère, destiné à alimenter les réseaux sociaux au détriment de l'émotion véritable et de l'analyse critique.</p>
    `,
    vocab: ["Patrimonial", "Immersif", "Désacralisation", "Contemplation", "Scénarisé"],
    vocabulary: [
      { word: "Patrimonial", definition: "Relatif aux biens culturels et historiques transmis par les générations passées." },
      { word: "Immersif", definition: "Qui plonge complètement le spectateur dans un environnement virtuel ou sensoriel." },
      { word: "Désacralisation", definition: "Action de rendre accessible ce qui était perçu comme sacré, réservé ou intimidant." },
      { word: "Contemplation", definition: "Observation attentive, prolongée et réflexive d'une œuvre de beauté." },
      { word: "Scénarisé", definition: "Organisé selon une mise en scène narrative calculée pour faire spectacle." }
    ],
    questions: [
      {
        id: "t4-q1",
        prompt: "Quel avantage majeur offrent les visites virtuelles selon le premier paragraphe ?",
        question: "Quel avantage majeur offrent les visites virtuelles selon le premier paragraphe ?",
        options: [
          "Elles permettent de devenir soi-même propriétaire d'œuvres d'art inestimables.",
          "Elles permettent aux habitants éloignés d'accéder aux grands chefs-d'œuvre artistiques.",
          "Elles garantissent la fermeture définitive des musées physiques trop coûteux.",
          "Elles dispensent les étudiants d'apprendre l'histoire générale des arts."
        ],
        correct: 1,
        explanation: "Le premier paragraphe souligne qu'un habitant d'une zone rurale isolée peut explorer de grands monuments et toiles sans se déplacer."
      },
      {
        id: "t4-q2",
        prompt: "Pourquoi les partisans des technologies immersives parlent-ils de « désacralisation » ?",
        question: "Pourquoi les partisans des technologies immersives parlent-ils de « désacralisation » ?",
        options: [
          "Parce que ces technologies attirent un public nouveau intimidé par les codes muséaux classiques.",
          "Parce qu'elles suppriment toute référence aux religions dans l'histoire de la peinture.",
          "Parce qu'elles obligent les visiteurs à payer des droits d'entrée excessifs.",
          "Parce qu'elles transforment les toiles de maîtres en supports publicitaires."
        ],
        correct: 0,
        explanation: "Le second paragraphe précise qu'en rompant avec les codes feutrés, les expositions immersives attirent un public jeune qui ne fréquentait pas les musées."
      },
      {
        id: "t4-q3",
        prompt: "Quelle critique principale les conservateurs et historiens formulent-ils ?",
        question: "Quelle critique principale les conservateurs et historiens formulent-ils ?",
        options: [
          "Les outils numériques consomment trop de bande passante dans les galeries.",
          "L'expérience authentique exige une confrontation physique directe avec la matière de l'œuvre.",
          "Les casques de réalité augmentée sont trop lourds à porter pour les enfants.",
          "Les artistes contemporains refusent catégoriquement d'être numérisés."
        ],
        correct: 1,
        explanation: "Le troisième paragraphe rappelle que l'expérience esthétique repose sur la confrontation physique avec la matière et la texture réelles."
      },
      {
        id: "t4-q4",
        prompt: "Quel risque de dérive est mentionné en conclusion ?",
        question: "Quel risque de dérive est mentionné en conclusion ?",
        options: [
          "L'interdiction des photographies dans les lieux touristiques.",
          "La réduction de l'art à un simple divertissement éphémère pour réseaux sociaux.",
          "La disparition complète du métier de guide conférencier assermenté.",
          "L'augmentation des vols d'œuvres dans les réserves nationales."
        ],
        correct: 1,
        explanation: "Le texte alerte sur le risque de réduire l'art à 'un simple produit de divertissement éphémère, destiné à alimenter les réseaux sociaux'."
      },
      {
        id: "t4-q5",
        prompt: "Dans le texte, le mot « seuil » dans « franchissait le seuil » désigne :",
        question: "Dans le texte, le mot « seuil » dans « franchissait le seuil » désigne :",
        options: [
          "L'entrée ou la limite physique d'un bâtiment.",
          "Le montant maximal d'une subvention publique.",
          "L'escalier d'un musée classé.",
          "Le règlement intérieur d'une exposition."
        ],
        correct: 0,
        explanation: "Le 'seuil' est la pièce de bois ou de pierre à la base d'une porte, et par extension l'entrée d'un lieu."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // THÈME 5 : HABITUDES DE CONSOMMATION
  // -------------------------------------------------------------------------
  {
    id: "theme-5",
    themeId: "theme-5",
    theme: "Habitudes de consommation",
    themeTitle: "Habitudes de consommation",
    title: "L'essor de la seconde main et du réemploi : vers une consommation désirable et sobre ?",
    level: "B2",
    readingTime: "5 min",
    wordCount: 425,
    source: "Alternatives Économiques — Dossier Consommation Responsable",
    text: `
      <p>Jadis associée à la nécessité économique ou à la précarité, l'acquisition de vêtements, d'appareils électroniques et de mobilier d'occasion est devenue un acte d'achat valorisant et tendance. Porté par le développement fulgurant des plateformes d'échange entre particuliers et l'implantation de ressourceries citoyennes, le marché de la seconde main affiche une croissance annuelle insolente, surpassant largement le commerce traditionnel de détail.</p>
      <p>Ce basculement des comportements s'explique par la conjonction de deux facteurs puissants : la volonté de préserver son pouvoir d'achat face à l'inflation et une prise de conscience écologique grandissante. Acheter reconditionné permet d'éviter l'extraction de matières premières vierges et de prolonger la durée de vie des produits, tout en adoptant un style vestimentaire unique à contre-courant de l'uniformisation dictée par la fast-fashion.</p>
      <p>Pourtant, certains sociologues invitent à ne pas idéaliser aveuglément cette dynamique. La facilité déconcertante avec laquelle on peut revendre des articles en ligne peut paradoxalement encourager une surconsommation frénétique : certains acheteurs achètent en surplus en sachant qu'ils revendront leurs articles quelques semaines plus tard. Pour être véritablement écologique, l'économie du réemploi doit s'accompagner d'une réduction globale des volumes achetés et d'une lutte implacable contre l'obsolescence programmée des fabricants.</p>
    `,
    content: `
      <p>Jadis associée à la nécessité économique ou à la précarité, l'acquisition de vêtements, d'appareils électroniques et de mobilier d'occasion est devenue un acte d'achat valorisant et tendance. Porté par le développement fulgurant des plateformes d'échange entre particuliers et l'implantation de ressourceries citoyennes, le marché de la seconde main affiche une croissance annuelle insolente, surpassant largement le commerce traditionnel de détail.</p>
      <p>Ce basculement des comportements s'explique par la conjonction de deux facteurs puissants : la volonté de préserver son pouvoir d'achat face à l'inflation et une prise de conscience écologique grandissante. Acheter reconditionné permet d'éviter l'extraction de matières premières vierges et de prolonger la durée de vie des produits, tout en adoptant un style vestimentaire unique à contre-courant de l'uniformisation dictée par la fast-fashion.</p>
      <p>Pourtant, certains sociologues invitent à ne pas idéaliser aveuglément cette dynamique. La facilité déconcertante avec laquelle on peut revendre des articles en ligne peut paradoxalement encourager une surconsommation frénétique : certains acheteurs achètent en surplus en sachant qu'ils revendront leurs articles quelques semaines plus tard. Pour être véritablement écologique, l'économie du réemploi doit s'accompagner d'une réduction globale des volumes achetés et d'une lutte implacable contre l'obsolescence programmée des fabricants.</p>
    `,
    vocab: ["Ressourcerie", "Reconditionné", "Fast-fashion", "Surconsommation", "Obsolescence programmée"],
    vocabulary: [
      { word: "Ressourcerie", definition: "Structure associative collectant, valorisant et revendant des objets d'occasion à prix modique." },
      { word: "Reconditionné", definition: "Produit ayant déjà servi, testé, réparé et nettoyé pour être remis en vente avec garantie." },
      { word: "Fast-fashion", definition: "Renouvellement très rapide et massif des collections vestimentaires à bas prix." },
      { word: "Surconsommation", definition: "Consommation excessive de biens dépassant largement les besoins réels." },
      { word: "Obsolescence programmée", definition: "Stratégie industrielle visant à réduire délibérément la durée de vie d'un produit." }
    ],
    questions: [
      {
        id: "t5-q1",
        prompt: "Comment l'image des achats d'occasion a-t-elle évolué avec le temps ?",
        question: "Comment l'image des achats d'occasion a-t-elle évolué avec le temps ?",
        options: [
          "Elle est passée d'un symbole de précarité à une pratique valorisante et à la mode.",
          "Elle est devenue strictement réservée aux collectionneurs d'antiquités de luxe.",
          "Elle a totalement disparu en raison de l'interdiction de revendre entre particuliers.",
          "Elle a été rejetée massivement par les jeunes générations soucieuses de statut."
        ],
        correct: 0,
        explanation: "Le premier paragraphe note que jadis associée à la précarité, la seconde main 'est devenue un acte d'achat valorisant et tendance'."
      },
      {
        id: "t5-q2",
        prompt: "Quels sont les deux principaux moteurs de ce changement de comportement ?",
        question: "Quels sont les deux principaux moteurs de ce changement de comportement ?",
        options: [
          "L'absence totale de magasins neufs et la fermeture des frontières commerciales.",
          "La préservation du pouvoir d'achat et la prise de conscience environnementale.",
          "L'obligation fiscale de déclarer chaque vêtement neuf acheté en boutique.",
          "La hausse des taxes douanières sur les biens électroniques importés."
        ],
        correct: 1,
        explanation: "Le second paragraphe mentionne la conjonction du pouvoir d'achat face à l'inflation et de la prise de conscience écologique."
      },
      {
        id: "t5-q3",
        prompt: "Quel paradoxe les sociologues soulignent-ils au sujet des plateformes en ligne ?",
        question: "Quel paradoxe les sociologues soulignent-ils au sujet des plateformes en ligne ?",
        options: [
          "Les plateformes refusent de payer les impôts locaux dans les pays hôtes.",
          "La facilité de revente peut inciter à acheter davantage et entretenir la surconsommation.",
          "Les objets d'occasion y sont vendus plus cher que les articles neufs sous garantie.",
          "Les délais de livraison postale sont jugés inacceptables par les consommateurs."
        ],
        correct: 1,
        explanation: "Le troisième paragraphe explique que la revente facile en ligne 'peut paradoxalement encourager une surconsommation frénétique'."
      },
      {
        id: "t5-q4",
        prompt: "Quelle condition est indispensable pour que l'économie du réemploi soit vraiment écologique ?",
        question: "Quelle condition est indispensable pour que l'économie du réemploi soit vraiment écologique ?",
        options: [
          "Interdire les paiements par carte bancaire sur Internet.",
          "Diminuer le volume global des achats et combattre l'obsolescence programmée.",
          "Remplacer tous les textiles naturels par des fibres synthétiques.",
          "Créer des zones franches réservées aux grandes marques de luxe."
        ],
        correct: 1,
        explanation: "Le texte conclut que le réemploi doit s'accompagner 'd'une réduction globale des volumes achetés et d'une lutte contre l'obsolescence'."
      },
      {
        id: "t5-q5",
        prompt: "Que désigne l'expression « obsolescence programmée » ?",
        question: "Que désigne l'expression « obsolescence programmée » ?",
        options: [
          "La limitation délibérée de la durée de vie d'un produit par son fabricant.",
          "Le recyclage obligatoire des composants électroniques usagés.",
          "L'obligation légale de fournir un manuel d'utilisation en français.",
          "L'évolution naturelle des goûts artistiques du public."
        ],
        correct: 0,
        explanation: "L'obsolescence programmée est la pratique consistant à concevoir un produit pour qu'il tombe en panne après une durée déterminée."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // THÈME 6 : COMPORTEMENTS ALIMENTAIRES
  // -------------------------------------------------------------------------
  {
    id: "theme-6",
    themeId: "theme-6",
    theme: "Comportements alimentaires",
    themeTitle: "Comportements alimentaires",
    title: "La végétalisation des assiettes en restauration collective : un tournant nutritionnel et éthique",
    level: "B2",
    readingTime: "4 min",
    wordCount: 400,
    source: "Le Figaro Santé & Transition Alimentaire",
    text: `
      <p>L'obligation légale d'introduire des menus végétariens hebdomadaires dans les cantines scolaires et la restauration d'entreprise a d'abord suscité des réticences vigoureuses en France, pays réputé pour sa tradition gastronomique carnée. Les détracteurs y voyaient une atteinte aux traditions culinaires régionales et brandissaient la crainte de carences nutritionnelles chez les jeunes convives.</p>
      <p>Quelques années après l'application de la loi, les données scientifiques et les retours d'expérience ont balayé la plupart de ces inquiétudes. Élaborés en concertation avec des diététiciens qualifiés, les repas combinant légumineuses (lentilles, pois chiches) et céréales complètes offrent un apport protéique optimal tout en réduisant significativement l'ingestion de graisses saturées. De surcroît, le coût moindre des matières premières végétales permet aux gestionnaires de cantines de réinvestir leurs économies dans l'achat de produits biologiques et locaux issus de circuits courts.</p>
      <p>Au-delà des bienfaits physiologiques, cette transition alimentaire constitue un formidable levier d'action climatique. Le secteur de l'élevage intensif étant l'un des premiers émetteurs mondiaux de gaz à effet de serre et de déforestation, rééquilibrer notre régime en faveur du végétal s'impose comme l'un des gestes citoyens les plus efficaces pour décarboner notre quotidien sans renoncer au plaisir gustatif.</p>
    `,
    content: `
      <p>L'obligation légale d'introduire des menus végétariens hebdomadaires dans les cantines scolaires et la restauration d'entreprise a d'abord suscité des réticences vigoureuses en France, pays réputé pour sa tradition gastronomique carnée. Les détracteurs y voyaient une atteinte aux traditions culinaires régionales et brandissaient la crainte de carences nutritionnelles chez les jeunes convives.</p>
      <p>Quelques années après l'application de la loi, les données scientifiques et les retours d'expérience ont balayé la plupart de ces inquiétudes. Élaborés en concertation avec des diététiciens qualifiés, les repas combinant légumineuses (lentilles, pois chiches) et céréales complètes offrent un apport protéique optimal tout en réduisant significativement l'ingestion de graisses saturées. De surcroît, le coût moindre des matières premières végétales permet aux gestionnaires de cantines de réinvestir leurs économies dans l'achat de produits biologiques et locaux issus de circuits courts.</p>
      <p>Au-delà des bienfaits physiologiques, cette transition alimentaire constitue un formidable levier d'action climatique. Le secteur de l'élevage intensif étant l'un des premiers émetteurs mondiaux de gaz à effet de serre et de déforestation, rééquilibrer notre régime en faveur du végétal s'impose comme l'un des gestes citoyens les plus efficaces pour décarboner notre quotidien sans renoncer au plaisir gustatif.</p>
    `,
    vocab: ["Tradition carnée", "Carences nutritionnelles", "Légumineuses", "Circuits courts", "Élevage intensif"],
    vocabulary: [
      { word: "Tradition carnée", definition: "Habitude culturelle accordant une place centrale à la consommation de viande." },
      { word: "Carences nutritionnelles", definition: "Manque d'un élément nutritif indispensable à la santé (fer, vitamines, etc.)." },
      { word: "Légumineuses", definition: "Plantes dont les graines sont riches en protéines végétales (haricots, lentilles, pois)." },
      { word: "Circuits courts", definition: "Mode de distribution avec au maximum un intermédiaire entre producteur et consommateur." },
      { word: "Élevage intensif", definition: "Pratique d'élevage visant une production maximale d'animaux dans des espaces confinés." }
    ],
    questions: [
      {
        id: "t6-q1",
        prompt: "Quelle critique initiale était formulée contre les menus végétariens dans les cantines ?",
        question: "Quelle critique initiale était formulée contre les menus végétariens dans les cantines ?",
        options: [
          "Le risque de carences chez les enfants et l'atteinte aux traditions gastronomiques.",
          "Le coût prohibitif des légumes par rapport à la viande de bœuf.",
          "L'absence totale de compétences des cuisiniers pour éplucher les légumes.",
          "La hausse du gaspillage due au rejet massif du pain de campagne."
        ],
        correct: 0,
        explanation: "Le premier paragraphe mentionne 'une atteinte aux traditions culinaires' et 'la crainte de carences nutritionnelles'."
      },
      {
        id: "t6-q2",
        prompt: "Comment les cantines garantissent-elles un apport en protéines suffisant sans viande ?",
        question: "Comment les cantines garantissent-elles un apport en protéines suffisant sans viande ?",
        options: [
          "En distribuant des compléments vitaminés en gélules aux élèves.",
          "En associant des légumineuses (lentilles, pois chiches) et des céréales complètes.",
          "En augmentant la quantité de sucre et de confiseries dans les desserts.",
          "En remplaçant les repas du midi par des collations rapides de fruits secs."
        ],
        correct: 1,
        explanation: "Le second paragraphe précise que 'les repas combinant légumineuses et céréales complètes offrent un apport protéique optimal'."
      },
      {
        id: "t6-q3",
        prompt: "Quel bénéfice financier les cantines tirent-elles des menus végétariens ?",
        question: "Quel bénéfice financier les cantines tirent-elles des menus végétariens ?",
        options: [
          "Elles augmentent les tarifs facturés aux familles de 25 %.",
          "Elles réinvestissent les économies pour acheter des produits bio et locaux.",
          "Elles réduisent les salaires des personnels de service en cuisine.",
          "Elles financent des voyages scolaires à l'étranger pour tous les élèves."
        ],
        correct: 1,
        explanation: "Le texte explique que les économies sur la viande permettent de 'réinvestir dans l'achat de produits biologiques et locaux'."
      },
      {
        id: "t6-q4",
        prompt: "Sur le plan environnemental, pourquoi la végétalisation est-elle cruciale ?",
        question: "Sur le plan environnemental, pourquoi la végétalisation est-elle cruciale ?",
        options: [
          "Elle permet d'éliminer définitivement l'usage de l'eau dans l'agriculture.",
          "Elle réduit les émissions de gaz à effet de serre générées par l'élevage intensif.",
          "Elle favorise l'expansion des zones urbaines industrielles goudronnées.",
          "Elle rend inutile le traitement des déchets ménagers urbains."
        ],
        correct: 1,
        explanation: "Le dernier paragraphe souligne que l'élevage intensif est un émetteur majeur de gaz à effet de serre et cause de déforestation."
      },
      {
        id: "t6-q5",
        prompt: "Dans le texte, que signifie l'expression « circuits courts » ?",
        question: "Dans le texte, que signifie l'expression « circuits courts » ?",
        options: [
          "Une vente directe ou avec un seul intermédiaire entre producteur et consommateur.",
          "Un transport de marchandises effectué exclusivement en avion charter.",
          "Un repas préparé en moins de dix minutes chrono.",
          "Une chaîne de restauration rapide américaine franchisée."
        ],
        correct: 0,
        explanation: "Un circuit court est un canal commercial comportant au plus un intermédiaire entre le producteur agricole et le consommateur."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // THÈME 7 : RELATIONS SOCIALES
  // -------------------------------------------------------------------------
  {
    id: "theme-7",
    themeId: "theme-7",
    theme: "Relations sociales",
    themeTitle: "Relations sociales",
    title: "La solitude urbaine et l'émergence des tiers-lieux citoyens : retisser le lien social",
    level: "B2",
    readingTime: "5 min",
    wordCount: 415,
    source: "Libération — Société & Urbanisme Solidaire",
    text: `
      <p>Derrière l'effervescence apparente des métropoles contemporaines se dissimule une épidémie silencieuse : l'isolement relationnel. Selon les enquêtes sociologiques récentes, près d'un citadin sur cinq déclare souffrir d'une solitude pesante, exacerbée par l'individualisation des modes de vie, la dissolution des solidarités de voisinage et la numérisation croissante des interactions courantes.</p>
      <p>Pour enrayer ce désenchantement communautaire, un mouvement citoyen novateur a vu le jour : les « tiers-lieux ». Ni tout à fait le domicile, ni tout à fait le bureau, ces espaces hybrides – combinant cafés associatifs, ateliers de bricolage partagés (fablabs), jardins partagés et espaces de coworking – réinventent la convivialité de quartier. En favorisant la mixité intergénérationnelle et l'entraide concrète, ils permettent à des personnes d'horizons sociaux très divers de se rencontrer autour de projets collectifs tangibles.</p>
      <p>Les municipalités s'emparent désormais de cette dynamique en soutenant financièrement ces initiatives et en mettant à disposition des friches urbaines réhabilitées. Loin d'être un simple gadget urbain pour jeunes actifs branchés, le tiers-lieu s'affirme comme un équipement de cohésion sociale indispensable, réparant le tissu relationnel de nos villes en remettant l'humain et l'écoute au cœur de l'espace public.</p>
    `,
    content: `
      <p>Derrière l'effervescence apparente des métropoles contemporaines se dissimule une épidémie silencieuse : l'isolement relationnel. Selon les enquêtes sociologiques récentes, près d'un citadin sur cinq déclare souffrir d'une solitude pesante, exacerbée par l'individualisation des modes de vie, la dissolution des solidarités de voisinage et la numérisation croissante des interactions courantes.</p>
      <p>Pour enrayer ce désenchantement communautaire, un mouvement citoyen novateur a vu le jour : les « tiers-lieux ». Ni tout à fait le domicile, ni tout à fait le bureau, ces espaces hybrides – combinant cafés associatifs, ateliers de bricolage partagés (fablabs), jardins partagés et espaces de coworking – réinventent la convivialité de quartier. En favorisant la mixité intergénérationnelle et l'entraide concrète, ils permettent à des personnes d'horizons sociaux très divers de se rencontrer autour de projets collectifs tangibles.</p>
      <p>Les municipalités s'emparent désormais de cette dynamique en soutenant financièrement ces initiatives et en mettant à disposition des friches urbaines réhabilitées. Loin d'être un simple gadget urbain pour jeunes actifs branchés, le tiers-lieu s'affirme comme un équipement de cohésion sociale indispensable, réparant le tissu relationnel de nos villes en remettant l'humain et l'écoute au cœur de l'espace public.</p>
    `,
    vocab: ["Isolement relationnel", "Tiers-lieux", "Friches urbaines", "Mixité intergénérationnelle", "Cohésion sociale"],
    vocabulary: [
      { word: "Isolement relationnel", definition: "Situation de manque ou d'absence de relations sociales régulières et signifiantes." },
      { word: "Tiers-lieux", definition: "Espaces partagés favorisant la rencontre, la création et le travail en commun hors domicile et bureau." },
      { word: "Friches urbaines", definition: "Terrains ou bâtiments abandonnés temporairement après l'arrêt de leur activité." },
      { word: "Mixité intergénérationnelle", definition: "Coexistence et échanges actifs entre personnes d'âges et de générations différents." },
      { word: "Cohésion sociale", definition: "État de solidarité et de liens forts entre les membres d'une communauté ou société." }
    ],
    questions: [
      {
        id: "t7-q1",
        prompt: "Quelle réalité préoccupante des grandes villes est décrite au début de l'article ?",
        question: "Quelle réalité préoccupante des grandes villes est décrite au début de l'article ?",
        options: [
          "La hausse incontrôlée du prix des tickets de spectacle.",
          "L'isolement relationnel touchant près d'un citadin sur cinq.",
          "L'absence totale de commerces d'alimentation dans les centres.",
          "Le refus des jeunes de travailler dans les entreprises tertiaires."
        ],
        correct: 1,
        explanation: "Le premier paragraphe note que près d'un citadin sur cinq souffre d'un 'isolement relationnel' exacerbé par l'individualisation."
      },
      {
        id: "t7-q2",
        prompt: "Qu'est-ce qui caractérise fondamentalement un « tiers-lieu » ?",
        question: "Qu'est-ce qui caractérise fondamentalement un « tiers-lieu » ?",
        options: [
          "C'est un espace privé de grand luxe réservé aux investisseurs étrangers.",
          "C'est un espace hybride mêlant café associatif, ateliers partagés et entraide de quartier.",
          "C'est un centre administratif où l'on ne parle que par formulaire électronique.",
          "C'est un centre commercial géant situé en grande périphérie autoroutière."
        ],
        correct: 1,
        explanation: "Le deuxième paragraphe définit le tiers-lieu comme un espace hybride combinant cafés associatifs, ateliers, jardins partagés et convivialité."
      },
      {
        id: "t7-q3",
        prompt: "Quel impact social majeur les tiers-lieux produisent-ils selon l'auteur ?",
        question: "Quel impact social majeur les tiers-lieux produisent-ils selon l'auteur ?",
        options: [
          "Ils permettent la mixité entre générations et le rapprochement de milieux sociaux divers.",
          "Ils empêchent les retraités d'accéder aux bibliothèques publiques.",
          "Ils suppriment la nécessité d'avoir une vie de famille équilibrée.",
          "Ils obligent les usagers à s'inscrire dans des partis politiques locaux."
        ],
        correct: 0,
        explanation: "Le texte souligne qu'ils favorisent 'la mixité intergénérationnelle et l'entraide concrète' entre personnes d'horizons divers."
      },
      {
        id: "t7-q4",
        prompt: "Comment les municipalités accompagnent-elles le déploiement de ces espaces ?",
        question: "Comment les municipalités accompagnent-elles le déploiement de ces espaces ?",
        options: [
          "En interdisant toute subvention publique aux projets associatifs.",
          "En accordant des soutiens financiers et en mettant à disposition des friches réhabilitées.",
          "En confiant la gestion des lieux à des multinationales de la restauration rapide.",
          "En imposant des droits d'entrée élevés pour financer la voirie."
        ],
        correct: 1,
        explanation: "Le dernier paragraphe indique que les villes soutiennent financièrement ces initiatives et prêtent des 'friches urbaines réhabilitées'."
      },
      {
        id: "t7-q5",
        prompt: "Que désigne une « friche urbaine » ?",
        question: "Que désigne une « friche urbaine » ?",
        options: [
          "Un terrain ou un bâtiment industriel abandonné en attente de reconversion.",
          "Un parc municipal classé monument historique.",
          "Une zone piétonne réservée aux défilés de mode.",
          "Une station de métro en cours de nettoyage."
        ],
        correct: 0,
        explanation: "Une friche urbaine est un espace urbain délaissé ou désaffecté après une fermeture industrielle ou commerciale."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // THÈME 8 : ÉGALITÉ HOMME/FEMME
  // -------------------------------------------------------------------------
  {
    id: "theme-8",
    themeId: "theme-8",
    theme: "Égalité homme/femme",
    themeTitle: "Égalité homme/femme",
    title: "La parité dans les filières scientifiques : déconstruire les stéréotypes dès l'école",
    level: "B2",
    readingTime: "4 min",
    wordCount: 395,
    source: "Sciences & Avenir — Débat Égalité et Éducation",
    text: `
      <p>En dépit d'une réussite scolaire globale supérieure à celle des garçons jusqu'au baccalauréat, les jeunes filles demeurent sous-représentées de manière criante dans les écoles d'ingénieurs, les filières informatiques et les cursus de mathématiques fondamentales. Ce décrochage d'orientation ne relève d'aucune prédisposition cognitive naturelle, mais s'enracine dans la persistance de stéréotypes de genre insidieux dès le plus jeune âge.</p>
      <p>Dès l'école primaire, les représentations culturelles inconscientes véhiculent l'idée que les sciences dures exigeraient un « génie inné » typiquement masculin, tandis que les compétences littéraires, relationnelles et de soin seraient spontanément féminines. Face à ce conditionnement sociétal, de nombreuses adolescentes s'auto-censurent et sous-estiment leurs réelles aptitudes mathématiques, se détournant des métiers technologiques d'avenir pourtant très rémunérateurs.</p>
      <p>Pour briser ce plafond de verre précoce, des initiatives innovantes de mentorat féminin se déploient dans les collèges et lycées. En invitant des chercheuses, des développeuses et des directrices de laboratoire à témoigner de leur parcours passionnant, ces programmes offrent aux jeunes filles des modèles d'identification inspirants indispensables pour légitimer leur ambition scientifique.</p>
    `,
    content: `
      <p>En dépit d'une réussite scolaire globale supérieure à celle des garçons jusqu'au baccalauréat, les jeunes filles demeurent sous-représentées de manière criante dans les écoles d'ingénieurs, les filières informatiques et les cursus de mathématiques fondamentales. Ce décrochage d'orientation ne relève d'aucune prédisposition cognitive naturelle, mais s'enracine dans la persistance de stéréotypes de genre insidieux dès le plus jeune âge.</p>
      <p>Dès l'école primaire, les représentations culturelles inconscientes véhiculent l'idée que les sciences dures exigeraient un « génie inné » typiquement masculin, tandis que les compétences littéraires, relationnelles et de soin seraient spontanément féminines. Face à ce conditionnement sociétal, de nombreuses adolescentes s'auto-censurent et sous-estiment leurs réelles aptitudes mathématiques, se détournant des métiers technologiques d'avenir pourtant très rémunérateurs.</p>
      <p>Pour briser ce plafond de verre précoce, des initiatives innovantes de mentorat féminin se déploient dans les collèges et lycées. En invitant des chercheuses, des développeuses et des directrices de laboratoire à témoigner de leur parcours passionnant, ces programmes offrent aux jeunes filles des modèles d'identification inspirants indispensables pour légitimer leur ambition scientifique.</p>
    `,
    vocab: ["Sous-représentées", "Stéréotypes de genre", "Auto-censure", "Plafond de verre", "Mentorat"],
    vocabulary: [
      { word: "Sous-représentées", definition: "Présentes en proportion nettement inférieure à leur poids démographique réel." },
      { word: "Stéréotypes de genre", definition: "Croyances simplistes attribuant des rôles et capacités figés selon le sexe." },
      { word: "Auto-censure", definition: "Limitation involontaire de ses propres ambitions sous le poids du regard social." },
      { word: "Plafond de verre", definition: "Barrière invisible et systémique freinant l'accès des femmes aux responsabilités." },
      { word: "Mentorat", definition: "Accompagnement et partage d'expérience par une personne expérimentée." }
    ],
    questions: [
      {
        id: "t8-q1",
        prompt: "Quel paradoxe scolaire l'article soulève-t-il dans son introduction ?",
        question: "Quel paradoxe scolaire l'article soulève-t-il dans son introduction ?",
        options: [
          "Les filles réussissent mieux globalement mais restent très minoritaires dans les filières scientifiques d'élite.",
          "Les garçons obtiennent de bien meilleurs résultats au baccalauréat littéraire que les filles.",
          "Les écoles d'ingénieurs n'acceptent aucun dossier de candidature féminin.",
          "Les universités de mathématiques sont totalement désertées par les étudiants masculins."
        ],
        correct: 0,
        explanation: "Le texte souligne qu'en dépit d'une réussite scolaire globale supérieure, les filles sont sous-représentées dans les filières scientifiques."
      },
      {
        id: "t8-q2",
        prompt: "À quoi est due cette sous-représentation des jeunes femmes en sciences ?",
        question: "À quoi est due cette sous-représentation des jeunes femmes en sciences ?",
        options: [
          "À des différences génétiques cérébrales prouvées par la biologie.",
          "À des stéréotypes de genre culturels et à l'auto-censure des adolescentes.",
          "À une interdiction formulée par le ministère de l'Éducation nationale.",
          "Au manque d'ordinateurs personnels dans les familles ayant des filles."
        ],
        correct: 1,
        explanation: "Le deuxième paragraphe explique que cela provient de stéréotypes culturels inconscients et d'un mécanisme d'auto-censure."
      },
      {
        id: "t8-q3",
        prompt: "Quelle fausse croyance est encore trop souvent véhiculée dès l'enfance ?",
        question: "Quelle fausse croyance est encore trop souvent véhiculée dès l'enfance ?",
        options: [
          "Que les mathématiques nécessitent un don inné propre aux garçons.",
          "Que l'informatique ne sert à rien dans la société moderne.",
          "Que les filles n'ont pas le droit de lire des romans contemporains.",
          "Que les langues vivantes sont inutiles pour voyager."
        ],
        correct: 0,
        explanation: "Le texte mentionne l'idée reçue selon laquelle 'les sciences dures exigeraient un génie inné typiquement masculin'."
      },
      {
        id: "t8-q4",
        prompt: "Comment les programmes de mentorat agissent-ils concrètement pour changer la situation ?",
        question: "Comment les programmes de mentorat agissent-ils concrètement pour changer la situation ?",
        options: [
          "En accordant automatiquement 5 points de bonus au baccalauréat aux filles.",
          "En présentant des parcours de femmes scientifiques comme modèles inspirants.",
          "En séparant strictement les garçons et les filles dans des classes différentes.",
          "En interdisant aux hommes de diriger des laboratoires universitaires."
        ],
        correct: 1,
        explanation: "Le troisième paragraphe précise qu'en invitant des chercheuses à témoigner, ces programmes offrent des 'modèles d'identification inspirants'."
      },
      {
        id: "t8-q5",
        prompt: "Dans le texte, le terme « auto-censure » désigne le fait de :",
        question: "Dans le texte, le terme « auto-censure » désigne le fait de :",
        options: [
          "Se limiter soi-même dans ses choix par manque de confiance induit.",
          "Supprimer des passages d'un livre avant sa publication.",
          "Refuser de voter lors des élections professionnelles.",
          "Critiquer systématiquement le travail de ses camarades de classe."
        ],
        correct: 0,
        explanation: "L'auto-censure est l'attitude par laquelle une personne s'interdit elle-même d'agir ou d'ambitionner par conformisme social."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // THÈME 9 : RELATIONS FAMILIALES
  // -------------------------------------------------------------------------
  {
    id: "theme-9",
    themeId: "theme-9",
    theme: "Relations familiales",
    themeTitle: "Relations familiales",
    title: "La parentalité partagée et la redéfinition des rôles au sein de la famille contemporaine",
    level: "B2",
    readingTime: "4 min",
    wordCount: 390,
    source: "La Croix — Famille & Évolution des Mœurs",
    text: `
      <p>L'allongement récent du congé de paternité à 28 jours en France a marqué une avancée institutionnelle majeure dans la reconnaissance de la place du père dès les premières semaines de vie de l'enfant. Longtemps cantonnés au statut exclusif de pourvoyeur financier du foyer, les pères contemporains revendiquent aujourd'hui une implication émotionnelle, éducative et domestique quotidienne à égalité avec leur conjointe.</p>
      <p>Cette aspiration à une parentalité équilibrée bouscule les schémas traditionnels et contribue à un partage plus juste de la charge mentale, qui continue pourtant de peser lourdement sur les épaules des mères. Les études sociologiques démontrent que les enfants ayant bénéficié d'une présence paternelle précoce et attentive développent une plus grande sécurité affective et des compétences relationnelles enrichies.</p>
      <p>Cependant, des freins culturels et professionnels persistent dans le monde de l'entreprise. Prendre l'intégralité de son congé parental reste parfois perçu de façon péjorative par certains employeurs, qui y voient un manque d'engagement professionnel. La normalisation de la parentalité partagée exige donc une transformation profonde de la culture managériale, garantissant qu'aucun parent ne soit pénalisé dans son évolution de carrière pour avoir consacré du temps à sa famille.</p>
    `,
    content: `
      <p>L'allongement récent du congé de paternité à 28 jours en France a marqué une avancée institutionnelle majeure dans la reconnaissance de la place du père dès les premières semaines de vie de l'enfant. Longtemps cantonnés au statut exclusif de pourvoyeur financier du foyer, les pères contemporains revendiquent aujourd'hui une implication émotionnelle, éducative et domestique quotidienne à égalité avec leur conjointe.</p>
      <p>Cette aspiration à une parentalité équilibrée bouscule les schémas traditionnels et contribue à un partage plus juste de la charge mentale, qui continue pourtant de peser lourdement sur les épaules des mères. Les études sociologiques démontrent que les enfants ayant bénéficié d'une présence paternelle précoce et attentive développent une plus grande sécurité affective et des compétences relationnelles enrichies.</p>
      <p>Cependant, des freins culturels et professionnels persistent dans le monde de l'entreprise. Prendre l'intégralité de son congé parental reste parfois perçu de façon péjorative par certains employeurs, qui y voient un manque d'engagement professionnel. La normalisation de la parentalité partagée exige donc une transformation profonde de la culture managériale, garantissant qu'aucun parent ne soit pénalisé dans son évolution de carrière pour avoir consacré du temps à sa famille.</p>
    `,
    vocab: ["Congé de paternité", "Parentalité partagée", "Charge mentale", "Sécurité affective", "Culture managériale"],
    vocabulary: [
      { word: "Congé de paternité", definition: "Période d'arrêt de travail rémunérée accordée au père lors de la naissance d'un enfant." },
      { word: "Parentalité partagée", definition: "Répartition équitable des soins, de l'éducation et des tâches parentales." },
      { word: "Charge mentale", definition: "Poids psychologique permanent de la gestion et de l'organisation de la vie domestique." },
      { word: "Sécurité affective", definition: "Sentiment de confiance et de protection ressenti par l'enfant auprès de ses parents." },
      { word: "Culture managériale", definition: "Ensemble des valeurs et attitudes d'une entreprise vis-à-vis de ses collaborateurs." }
    ],
    questions: [
      {
        id: "t9-q1",
        prompt: "Quelle avancée légale récente est citée au début de l'article ?",
        question: "Quelle avancée légale récente est citée au début de l'article ?",
        options: [
          "L'interdiction des devoirs à la maison le week-end.",
          "L'allongement du congé de paternité à 28 jours en France.",
          "La gratuité totale des crèches privées d'entreprise.",
          "L'obligation de prendre trois mois de vacances en été."
        ],
        correct: 1,
        explanation: "Le premier paragraphe cite expressément 'l'allongement récent du congé de paternité à 28 jours en France'."
      },
      {
        id: "t9-q2",
        prompt: "Comment les pères actuels conçoivent-ils leur rôle auprès de leurs enfants ?",
        question: "Comment les pères actuels conçoivent-ils leur rôle auprès de leurs enfants ?",
        options: [
          "En se consacrant uniquement aux finances sans s'occuper du quotidien.",
          "En revendiquant une implication éducative, émotionnelle et domestique quotidienne.",
          "En déléguant toute l'éducation aux grands-parents.",
          "En confiant l'enfant à des précepteurs privés à domicile."
        ],
        correct: 1,
        explanation: "Le texte précise que les pères revendiquent 'une implication émotionnelle, éducative et domestique quotidienne à égalité'."
      },
      {
        id: "t9-q3",
        prompt: "Quel bénéfice pour les enfants est mis en avant par les sociologues ?",
        question: "Quel bénéfice pour les enfants est mis en avant par les sociologues ?",
        options: [
          "L'apprentissage immédiat de trois langues étrangères dès 2 ans.",
          "Une plus grande sécurité affective et des compétences relationnelles enrichies.",
          "Une admission automatique dans les meilleures écoles primaires.",
          "L'indépendance financière précoce dès l'adolescence."
        ],
        correct: 1,
        explanation: "Le second paragraphe relève que les enfants 'développent une plus grande sécurité affective et des compétences relationnelles'."
      },
      {
        id: "t9-q4",
        prompt: "Quel obstacle majeur subsiste dans le monde du travail concernant le congé parental ?",
        question: "Quel obstacle majeur subsiste dans le monde du travail concernant le congé parental ?",
        options: [
          "La baisse des impôts sur les salaires des célibataires.",
          "Le regard péjoratif de certains employeurs qui y voient un manque d'engagement.",
          "L'interdiction de reprendre son poste de travail après le congé.",
          "Le refus des syndicats de soutenir les jeunes parents."
        ],
        correct: 1,
        explanation: "Le troisième paragraphe note que prendre son congé reste 'parfois perçu de façon péjorative par certains employeurs'."
      },
      {
        id: "t9-q5",
        prompt: "La notion de « charge mentale » fait référence à :",
        question: "La notion de « charge mentale » fait référence à :",
        options: [
          "La gestion psychologique constante et invisible de l'organisation familiale.",
          "Le poids physique des courses alimentaires hebdomadaires.",
          "La difficulté des examens universitaires de fin d'année.",
          "Le coût financier de l'assurance habitation."
        ],
        correct: 0,
        explanation: "La charge mentale désigne le travail invisible et permanent de planification, d'anticipation et d'organisation du foyer."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // THÈME 10 : L'ENVIRONNEMENT & ÉCOLOGIE
  // -------------------------------------------------------------------------
  {
    id: "theme-10",
    themeId: "theme-10",
    theme: "L'environnement & Écologie",
    themeTitle: "L'environnement & Écologie",
    title: "La rénovation thermique des bâtiments : clé de voûte de la décarbonation urbaine",
    level: "B2",
    readingTime: "5 min",
    wordCount: 420,
    source: "Le Monde de l'Écologie — Climat & Transition Énergétique",
    text: `
      <p>En France, le secteur du bâtiment représente près de 45 % de la consommation énergétique nationale et près d'un quart des émissions totales de gaz à effet de serre. Dans un contexte de réchauffement climatique accéléré et d'envolée des coûts de l'énergie, la rénovation thermique globale des millions de « passoires thermiques » existantes constitue le chantier écologique le plus décisif des trois prochaines décennies.</p>
      <p>Isoler efficacement les toitures, remplacer les fenêtres par du triple vitrage et substituer les chaudières au fioul par des pompes à chaleur performantes ne répond pas seulement à un impératif climatique. C'est également une mesure majeure de justice sociale : en réduisant drastiquement les factures de chauffage, la rénovation préserve le pouvoir d'achat des ménages les plus modestes et élimine les problèmes chroniques d'humidité et de santé respiratoire.</p>
      <p>Cependant, l'ampleur du défi reste colossale. La complexité administrative des aides publiques, le manque criant d'artisans certifiés et le reste à charge financier pour les copropriétés freinent encore le rythme des chantiers. Pour atteindre la neutralité carbone à l'horizon 2050, les experts recommandent un accompagnement financier public universel et une filière de formation massive aux métiers du bâtiment durable.</p>
    `,
    content: `
      <p>En France, le secteur du bâtiment représente près de 45 % de la consommation énergétique nationale et près d'un quart des émissions totales de gaz à effet de serre. Dans un contexte de réchauffement climatique accéléré et d'envolée des coûts de l'énergie, la rénovation thermique globale des millions de « passoires thermiques » existantes constitue le chantier écologique le plus décisif des trois prochaines décennies.</p>
      <p>Isoler efficacement les toitures, remplacer les fenêtres par du triple vitrage et substituer les chaudières au fioul par des pompes à chaleur performantes ne répond pas seulement à un impératif climatique. C'est également une mesure majeure de justice sociale : en réduisant drastiquement les factures de chauffage, la rénovation préserve le pouvoir d'achat des ménages les plus modestes et élimine les problèmes chroniques d'humidité et de santé respiratoire.</p>
      <p>Cependant, l'ampleur du défi reste colossale. La complexité administrative des aides publiques, le manque criant d'artisans certifiés et le reste à charge financier pour les copropriétés freinent encore le rythme des chantiers. Pour atteindre la neutralité carbone à l'horizon 2050, les experts recommandent un accompagnement financier public universel et une filière de formation massive aux métiers du bâtiment durable.</p>
    `,
    vocab: ["Passoires thermiques", "Rénovation globale", "Justice sociale", "Reste à charge", "Neutralité carbone"],
    vocabulary: [
      { word: "Passoires thermiques", definition: "Logements très mal isolés consommant des quantités exorbitantes d'énergie." },
      { word: "Rénovation globale", definition: "Travaux coordonnés traitant l'ensemble de l'isolation et du système de chauffage d'un bâtiment." },
      { word: "Justice sociale", definition: "Principe visant la réduction des inégalités et la protection des personnes les plus vulnérables." },
      { word: "Reste à charge", definition: "Somme financière qui reste à payer par le propriétaire après déduction des aides publiques." },
      { word: "Neutralité carbone", definition: "Équilibre parfait entre les émissions de gaz à effet de serre et leur absorption." }
    ],
    questions: [
      {
        id: "t10-q1",
        prompt: "Quel poids le secteur du bâtiment pèse-t-il dans la consommation énergétique française ?",
        question: "Quel poids le secteur du bâtiment pèse-t-il dans la consommation énergétique française ?",
        options: [
          "Moins de 5 % du total national.",
          "Près de 45 % de la consommation énergétique du pays.",
          "Exactement la totalité des dépenses énergétiques des communes.",
          "Une part négligeable par rapport aux transports aériens."
        ],
        correct: 1,
        explanation: "Le premier paragraphe indique que le bâtiment 'représente près de 45 % de la consommation énergétique nationale'."
      },
      {
        id: "t10-q2",
        prompt: "Pourquoi la rénovation thermique est-elle qualifiée de mesure de justice sociale ?",
        question: "Pourquoi la rénovation thermique est-elle qualifiée de mesure de justice sociale ?",
        options: [
          "Parce qu'elle supprime tous les impôts locaux pour les propriétaires aisés.",
          "Parce qu'elle réduit les factures des ménages modestes et élimine les problèmes d'humidité.",
          "Parce qu'elle oblige les banques à prêter sans intérêt à tous les citoyens.",
          "Parce qu'elle garantit un logement gratuit à chaque jeune diplômé."
        ],
        correct: 1,
        explanation: "Le deuxième paragraphe explique qu'en réduisant les factures de chauffage, elle préserve le pouvoir d'achat et la santé des plus modestes."
      },
      {
        id: "t10-q3",
        prompt: "Quels sont les principaux freins au développement rapide de la rénovation thermique ?",
        question: "Quels sont les principaux freins au développement rapide de la rénovation thermique ?",
        options: [
          "La lourdeur administrative des aides, la pénurie d'artisans et le coût financier restant.",
          "L'interdiction de fabriquer des pompes à chaleur sur le territoire européen.",
          "Le refus des locataires de voir leur logement mieux isolé du froid.",
          "L'absence totale de matériaux isolants disponibles sur le marché mondial."
        ],
        correct: 0,
        explanation: "Le troisième paragraphe cite la complexité administrative, le manque d'artisans et le reste à charge financier pour les copropriétés."
      },
      {
        id: "t10-q4",
        prompt: "Que préconisent les experts pour atteindre la neutralité carbone en 2050 ?",
        question: "Que préconisent les experts pour atteindre la neutralité carbone en 2050 ?",
        options: [
          "Démolir tous les bâtiments construits avant l'an 2000.",
          "Un accompagnement financier public universel et un effort massif de formation aux métiers durables.",
          "Le rationnement obligatoire de l'électricité à 2 heures par jour.",
          "La réouverture des centrales thermiques au charbon."
        ],
        correct: 1,
        explanation: "Le texte recommande 'un accompagnement financier public universel et une filière de formation massive aux métiers du bâtiment'."
      },
      {
        id: "t10-q5",
        prompt: "L'expression imagée « passoire thermique » désigne :",
        question: "L'expression imagée « passoire thermique » désigne :",
        options: [
          "Un logement où la chaleur s'échappe massivement à cause d'une mauvaise isolation.",
          "Un ustensile de cuisine servant à égoutter les légumes cuits à la vapeur.",
          "Un capteur solaire défectueux qui surchauffe en été.",
          "Un radiateur électrique de dernière génération ultra-économique."
        ],
        correct: 0,
        explanation: "Une passoire thermique est un bâtiment dont l'isolation défaillante laisse fuir la chaleur en hiver et entrer l'air chaud en été."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // THÈME 11 : LES MÉDIAS & INTERNET
  // -------------------------------------------------------------------------
  {
    id: "theme-11",
    themeId: "theme-11",
    theme: "Les médias & Internet",
    themeTitle: "Les médias & Internet",
    title: "L'éducation aux médias face à la désinformation : apprendre à décoder les algorithmes",
    level: "B2",
    readingTime: "4 min",
    wordCount: 405,
    source: "Courrier International & Revue Médias Citoyens",
    text: `
      <p>À l'ère des flux d'information continus et de la viralité instantanée sur les réseaux sociaux, la prolifération des infox (fake news) et des hypertruquages (deepfakes) menace directement la qualité du débat démocratique. Conçus pour maximiser le temps d'attention et l'engagement émotionnel des internautes, les algorithmes de recommandation privilégient souvent les contenus sensationnalistes, clivants ou complotistes au détriment de l'analyse journalistique rigoureuse.</p>
      <p>Pour immuniser les citoyens contre ces manipulations informationnelles, la réponse exclusivement répressive ou technique montre ses limites. Les spécialistes préconisent de faire de l'Éducation aux Médias et à l'Information (EMI) une priorité pédagogique transversale dès le secondaire. Apprendre à croiser les sources, identifier les conflits d'intérêts d'un auteur et comprendre le modèle économique des plateformes numériques constituent les compétences civiques fondamentales du XXIe siècle.</p>
      <p>En développant chez les jeunes une culture du doute méthodique et de la vérification des faits (fact-checking), l'école forme des esprits libres capables de résister aux bulles de filtres idéologiques. La santé de notre démocratie dépend de notre capacité collective à transformer les consommateurs passifs d'écrans en cybercitoyens éclairés et critiques.</p>
    `,
    content: `
      <p>À l'ère des flux d'information continus et de la viralité instantanée sur les réseaux sociaux, la prolifération des infox (fake news) et des hypertruquages (deepfakes) menace directement la qualité du débat démocratique. Conçus pour maximiser le temps d'attention et l'engagement émotionnel des internautes, les algorithmes de recommandation privilégient souvent les contenus sensationnalistes, clivants ou complotistes au détriment de l'analyse journalistique rigoureuse.</p>
      <p>Pour immuniser les citoyens contre ces manipulations informationnelles, la réponse exclusivement répressive ou technique montre ses limites. Les spécialistes préconisent de faire de l'Éducation aux Médias et à l'Information (EMI) une priorité pédagogique transversale dès le secondaire. Apprendre à croiser les sources, identifier les conflits d'intérêts d'un auteur et comprendre le modèle économique des plateformes numériques constituent les compétences civiques fondamentales du XXIe siècle.</p>
      <p>En développant chez les jeunes une culture du doute méthodique et de la vérification des faits (fact-checking), l'école forme des esprits libres capables de résister aux bulles de filtres idéologiques. La santé de notre démocratie dépend de notre capacité collective à transformer les consommateurs passifs d'écrans en cybercitoyens éclairés et critiques.</p>
    `,
    vocab: ["Infox", "Hypertruquages (deepfakes)", "Algorithmes de recommandation", "Éducation aux Médias", "Bulles de filtres"],
    vocabulary: [
      { word: "Infox", definition: "Information délibérément fausse ou manipulée diffusée pour tromper le public." },
      { word: "Hypertruquages (deepfakes)", definition: "Enregistrements vidéo ou audio hyperréalistes générés par IA simulant une fausse réalité." },
      { word: "Algorithmes de recommandation", definition: "Programmes sélectionnant les contenus suggérés pour retenir l'attention de l'utilisateur." },
      { word: "Éducation aux Médias", definition: "Enseignement critique des méthodes d'information, de vérification et d'analyse des médias." },
      { word: "Bulles de filtres", definition: "Isolement informationnel d'un internaute enfermé dans des contenus conformes à ses opinions." }
    ],
    questions: [
      {
        id: "t11-q1",
        prompt: "Pourquoi les algorithmes des réseaux sociaux favorisent-ils les contenus sensationnalistes ?",
        question: "Pourquoi les algorithmes des réseaux sociaux favorisent-ils les contenus sensationnalistes ?",
        options: [
          "Parce que les gouvernements les obligent à promouvoir les théories du complot.",
          "Pour maximiser le temps d'attention et susciter un engagement émotionnel fort.",
          "Parce que les articles journalistiques sérieux sont interdits de publication en ligne.",
          "Pour réduire la facture d'électricité des serveurs informatiques."
        ],
        correct: 1,
        explanation: "Le premier paragraphe explique qu'ils sont conçus 'pour maximiser le temps d'attention et l'engagement émotionnel des internautes'."
      },
      {
        id: "t11-q2",
        prompt: "Quelle solution durable est préconisée face aux manipulations de l'information ?",
        question: "Quelle solution durable est préconisée face aux manipulations de l'information ?",
        options: [
          "La coupure générale de l'accès à Internet pour les personnes de moins de 18 ans.",
          "Le développement de l'Éducation aux Médias et à l'Information dès le secondaire.",
          "La fermeture définitive de toutes les rédactions de presse écrite.",
          "L'interdiction des appareils photo sur les téléphones portables."
        ],
        correct: 1,
        explanation: "Le second paragraphe indique que les spécialistes préconisent de faire de 'l'Éducation aux Médias et à l'Information (EMI) une priorité'."
      },
      {
        id: "t11-q3",
        prompt: "Quelles compétences clés l'Éducation aux Médias cherche-t-elle à développer ?",
        question: "Quelles compétences clés l'Éducation aux Médias cherche-t-elle à développer ?",
        options: [
          "Créer des vidéos virales publicitaires sans contenu éducatif.",
          "Croiser les sources, repérer les conflits d'intérêts et vérifier les faits.",
          "Augmenter son nombre d'abonnés sur les réseaux sociaux commerciaux.",
          "Apprendre à programmer des logiciels malveillants de piratage."
        ],
        correct: 1,
        explanation: "Le texte liste : 'croiser les sources, identifier les conflits d'intérêts d'un auteur et comprendre le modèle économique des plateformes'."
      },
      {
        id: "t11-q4",
        prompt: "Que désigne l'expression « bulle de filtre » dans l'analyse médiatique ?",
        question: "Que désigne l'expression « bulle de filtre » dans l'analyse médiatique ?",
        options: [
          "Un isolant thermique placé sur les écrans d'ordinateur portables.",
          "L'enfermement d'un utilisateur dans des contenus qui ne font que confirmer ses opinions préexistantes.",
          "Un filtre optique utilisé par les photographes de presse professionnelle.",
          "Un système de protection antivirus bloquant les courriels indésirables."
        ],
        correct: 1,
        explanation: "La bulle de filtre désigne l'état dans lequel un internaute n'est exposé qu'à des informations conformes à ses propres préjugés."
      },
      {
        id: "t11-q5",
        prompt: "Le terme français « infox » a été créé pour remplacer l'anglicisme :",
        question: "Le terme français « infox » a été créé pour remplacer l'anglicisme :",
        options: [
          "Fake news (fausse nouvelle).",
          "Smartphone (téléphone intelligent).",
          "Cloud (nuage numérique).",
          "Feedback (retour d'information)."
        ],
        correct: 0,
        explanation: "'Infox' est le mot officiel francophone (mot-valise combinant information et intoxication) équivalent à 'fake news'."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // THÈME 12 : LES TRANSPORTS & MOBILITÉ
  // -------------------------------------------------------------------------
  {
    id: "theme-12",
    themeId: "theme-12",
    theme: "Les transports & Mobilité",
    themeTitle: "Les transports & Mobilité",
    title: "Les Zones à Faibles Émissions (ZFE) : défi écologique ou fracture sociale territoriale ?",
    level: "B2",
    readingTime: "5 min",
    wordCount: 420,
    source: "20 Minutes & Mobilité Durable — Par Marc Vauthier",
    text: `
      <p>Instaurées dans la plupart des grandes agglomérations françaises, les Zones à Faibles Émissions (ZFE) visent à interdire progressivement la circulation des véhicules motorisés les plus polluants (vignettes Crit'Air 3, 4 et 5). L'objectif sanitaire est indiscutable : la pollution aux particules fines et au dioxyde d'azote émis par le trafic routier provoque prématurément plus de 40 000 décès chaque année en France.</p>
      <p>Pour les urbanistes et les défenseurs de l'environnement, cette régulation est le moteur indispensable d'une métamorphose urbaine fondée sur les transports collectifs décarbonés, le vélo et la marche. Les villes ayant franchi le pas constatent une baisse mesurable des maladies respiratoires infantiles et un apaisement notable du niveau sonore en centre-ville.</p>
      <p>Néanmoins, les ZFE se heurtent à une contestation sociale véhémente. Les ménages modestes et les travailleurs résidant en grande périphérie, où l'offre de transports en commun reste dramatiquement insuffisante, dénoncent une mesure discriminatoire. N'ayant pas les moyens financiers d'acquérir un véhicule électrique ou hybride récent, ils se retrouvent menacés d'exclusion géographique. Pour éviter que la transition écologique ne soit vécue comme une injustice punitive, les spécialistes réclament des primes à la conversion universelles et un investissement massif dans les RER métropolitains.</p>
    `,
    content: `
      <p>Instaurées dans la plupart des grandes agglomérations françaises, les Zones à Faibles Émissions (ZFE) visent à interdire progressivement la circulation des véhicules motorisés les plus polluants (vignettes Crit'Air 3, 4 et 5). L'objectif sanitaire est indiscutable : la pollution aux particules fines et au dioxyde d'azote émis par le trafic routier provoque prématurément plus de 40 000 décès chaque année en France.</p>
      <p>Pour les urbanistes et les défenseurs de l'environnement, cette régulation est le moteur indispensable d'une métamorphose urbaine fondée sur les transports collectifs décarbonés, le vélo et la marche. Les villes ayant franchi le pas constatent une baisse mesurable des maladies respiratoires infantiles et un apaisement notable du niveau sonore en centre-ville.</p>
      <p>Néanmoins, les ZFE se heurtent à une contestation sociale véhémente. Les ménages modestes et les travailleurs résidant en grande périphérie, où l'offre de transports en commun reste dramatiquement insuffisante, dénoncent une mesure discriminatoire. N'ayant pas les moyens financiers d'acquérir un véhicule électrique ou hybride récent, ils se retrouvent menacés d'exclusion géographique. Pour éviter que la transition écologique ne soit vécue comme une injustice punitive, les spécialistes réclament des primes à la conversion universelles et un investissement massif dans les RER métropolitains.</p>
    `,
    vocab: ["Zone à Faibles Émissions", "Particules fines", "Exclusion géographique", "Prime à la conversion", "RER métropolitains"],
    vocabulary: [
      { word: "Zone à Faibles Émissions", definition: "Périmètre urbain où l'accès des véhicules les plus polluants est réglementé ou interdit." },
      { word: "Particules fines", definition: "Micro-particules toxiques en suspension dans l'air issues des moteurs diesel et de l'usure." },
      { word: "Exclusion géographique", definition: "Impossibilité pour les habitants de banlieue d'accéder au cœur économique de la ville." },
      { word: "Prime à la conversion", definition: "Aide financière publique accordée pour remplacer un vieux véhicule polluant." },
      { word: "RER métropolitains", definition: "Réseaux ferroviaires régionaux cadencés reliant les banlieues au centre urbain." }
    ],
    questions: [
      {
        id: "t12-q1",
        prompt: "Quel est l'objectif sanitaire principal des Zones à Faibles Émissions (ZFE) ?",
        question: "Quel est l'objectif sanitaire principal des Zones à Faibles Émissions (ZFE) ?",
        options: [
          "Augmenter les recettes des contraventions de stationnement payant.",
          "Réduire la pollution aux particules fines responsable de milliers de décès prématurés.",
          "Remplacer tous les autobus par des diligences à chevaux.",
          "Interdire définitivement la marche à pied en centre-ville."
        ],
        correct: 1,
        explanation: "Le premier paragraphe indique que la pollution de l'air 'provoque prématurément plus de 40 000 décès chaque année'."
      },
      {
        id: "t12-q2",
        prompt: "Quels effets positifs ont été observés dans les villes ayant instauré des ZFE ?",
        question: "Quels effets positifs ont été observés dans les villes ayant instauré des ZFE ?",
        options: [
          "Une baisse des maladies respiratoires infantiles et une diminution du bruit urbain.",
          "L'ouverture de nouvelles autoroutes à péage à travers les parcs publics.",
          "La hausse immédiate des ventes de carburant diesel dans les stations-service.",
          "La suppression de toutes les pistes cyclables jugées trop étroites."
        ],
        correct: 0,
        explanation: "Le second paragraphe relève 'une baisse mesurable des maladies respiratoires infantiles et un apaisement notable du niveau sonore'."
      },
      {
        id: "t12-q3",
        prompt: "Pourquoi certains habitants des périphéries contestent-ils vigoureusement les ZFE ?",
        question: "Pourquoi certains habitants des périphéries contestent-ils vigoureusement les ZFE ?",
        options: [
          "Parce qu'ils n'ont pas les moyens d'acheter une voiture propre et manquent de transports alternatifs.",
          "Parce qu'ils refusent d'entendre parler d'économies d'énergie.",
          "Parce que les ZFE interdisent l'usage des téléphones mobiles dans les véhicules.",
          "Parce qu'ils souhaitent que toutes les routes soient payantes."
        ],
        correct: 0,
        explanation: "Le troisième paragraphe explique que les ménages modestes en périphérie manquent de transports en commun et ne peuvent s'acheter de véhicule récent."
      },
      {
        id: "t12-q4",
        prompt: "Quelle solution est préconisée pour rendre cette mesure socialement acceptable ?",
        question: "Quelle solution est préconisée pour rendre cette mesure socialement acceptable ?",
        options: [
          "Supprimer les trains de banlieue pour réduire les dépenses publiques.",
          "Renforcer les primes à la conversion et développer des RER métropolitains efficaces.",
          "Imposer des amendes deux fois plus élevées aux ménages modestes.",
          "Obliger chaque salarié à déménager à moins de 500 mètres de son entreprise."
        ],
        correct: 1,
        explanation: "Le texte réclame 'des primes à la conversion universelles et un investissement massif dans les RER métropolitains'."
      },
      {
        id: "t12-q5",
        prompt: "Dans le texte, une politique qualifiée de « punitive » signifie qu'elle :",
        question: "Dans le texte, une politique qualifiée de « punitive » signifie qu'elle :",
        options: [
          "Sanctionne les citoyens sans leur offrir d'alternatives viables.",
          "Récompense financièrement les comportements exemplaires.",
          "A été votée à l'unanimité des partis politiques.",
          "S'applique uniquement aux résidents de nationalité étrangère."
        ],
        correct: 0,
        explanation: "Une mesure punitive est perçue comme un châtiment ou une sanction injuste qui frappe les usagers sans solution de repli."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // THÈME 13 : LE FRANÇAIS & FRANCOPHONIE
  // -------------------------------------------------------------------------
  {
    id: "theme-13",
    themeId: "theme-13",
    theme: "Le français & Francophonie",
    themeTitle: "Le français & Francophonie",
    title: "La francophonie économique et culturelle : un espace d'avenir plurilingue et dynamique",
    level: "B2",
    readingTime: "5 min",
    wordCount: 425,
    source: "Revue Internationale Francophone — Perspectives Mondiales",
    text: `
      <p>Avec plus de 320 millions de locuteurs répartis sur les cinq continents, la langue française connaît une dynamique démographique sans précédent, particulièrement portée par la jeunesse vibrante du continent africain. Loin de l'image surannée d'une langue purement diplomatique ou académique, le français s'affirme comme un formidable vecteur d'échanges économiques, d'innovation technologique et de création artistique plurielle.</p>
      <p>L'espace francophone contemporain se distingue par sa vision résolument inclusive du plurilinguisme. Parler français n'exclut nullement la valorisation des langues partenaires régionales (arabe, wolof, créoles, bambara) ; au contraire, cette cohabitation linguistique enrichit le lexique, dynamise la littérature contemporaine et favorise une ouverture interculturelle féconde. Sur le plan commercial, appartenir à l'espace francophone réduit en moyenne de 20 % les coûts de transaction économique entre pays membres grâce au partage d'une langue de travail et d'un socle juridique communs.</p>
      <p>Pour pérenniser cet atout géopolitique, l'Organisation Internationale de la Francophonie (OIF) intensifie ses programmes de formation professionnelle et de coopération universitaire. En misant sur le numérique éducatif, la mobilité des jeunes entrepreneurs et la découvrabilité des contenus francophones sur Internet, le monde francophone invente une mondialisation équitable et solidaire où la diversité culturelle est un moteur d'émancipation.</p>
    `,
    content: `
      <p>Avec plus de 320 millions de locuteurs répartis sur les cinq continents, la langue française connaît une dynamique démographique sans précédent, particulièrement portée par la jeunesse vibrante du continent africain. Loin de l'image surannée d'une langue purement diplomatique ou académique, le français s'affirme comme un formidable vecteur d'échanges économiques, d'innovation technologique et de création artistique plurielle.</p>
      <p>L'espace francophone contemporain se distingue par sa vision résolument inclusive du plurilinguisme. Parler français n'exclut nullement la valorisation des langues partenaires régionales (arabe, wolof, créoles, bambara) ; au contraire, cette cohabitation linguistique enrichit le lexique, dynamise la littérature contemporaine et favorise une ouverture interculturelle féconde. Sur le plan commercial, appartenir à l'espace francophone réduit en moyenne de 20 % les coûts de transaction économique entre pays membres grâce au partage d'une langue de travail et d'un socle juridique communs.</p>
      <p>Pour pérenniser cet atout géopolitique, l'Organisation Internationale de la Francophonie (OIF) intensifie ses programmes de formation professionnelle et de coopération universitaire. En misant sur le numérique éducatif, la mobilité des jeunes entrepreneurs et la découvrabilité des contenus francophones sur Internet, le monde francophone invente une mondialisation équitable et solidaire où la diversité culturelle est un moteur d'émancipation.</p>
    `,
    vocab: ["Plurilinguisme", "Découvrabilité", "Coûts de transaction", "Suranné", "Interculturalité"],
    vocabulary: [
      { word: "Plurilinguisme", definition: "Capacité d'une personne ou société à utiliser plusieurs langues dans la vie courante." },
      { word: "Découvrabilité", definition: "Capacité d'un contenu culturel francophone à être facilement trouvé sur Internet." },
      { word: "Coûts de transaction", definition: "Dépenses annexes liées à la négociation et à la conclusion d'un contrat commercial." },
      { word: "Suranné", definition: "Qui appartient à une époque révolue, démodé et vieillot." },
      { word: "Interculturalité", definition: "Ensemble des relations, échanges et enrichissements mutuels entre différentes cultures." }
    ],
    questions: [
      {
        id: "t13-q1",
        prompt: "Qu'est-ce qui stimule principalement la croissance démographique de la langue française ?",
        question: "Qu'est-ce qui stimule principalement la croissance démographique de la langue française ?",
        options: [
          "La hausse des naissances dans les métropoles d'Europe occidentale.",
          "La jeunesse vibrante du continent africain.",
          "L'adoption du français comme langue officielle en Amérique du Sud.",
          "L'interdiction de parler d'autres langues dans les réunions internationales."
        ],
        correct: 1,
        explanation: "Le premier paragraphe souligne que la dynamique est 'particulièrement portée par la jeunesse vibrante du continent africain'."
      },
      {
        id: "t13-q2",
        prompt: "Quelle est la position de la francophonie moderne vis-à-vis des autres langues régionales ?",
        question: "Quelle est la position de la francophonie moderne vis-à-vis des autres langues régionales ?",
        options: [
          "Elle cherche à éradiquer toutes les langues locales africaines.",
          "Elle promeut une approche inclusive du plurilinguisme et de l'interculturalité.",
          "Elle refuse de traduire les textes officiels dans les langues partenaires.",
          "Elle impose l'usage du latin comme langue auxiliaire obligatoire."
        ],
        correct: 1,
        explanation: "Le second paragraphe mentionne sa 'vision résolument inclusive du plurilinguisme' où le français cohabite avec les langues partenaires."
      },
      {
        id: "t13-q3",
        prompt: "Quel avantage économique concret le partage de la langue française apporte-t-il ?",
        question: "Quel avantage économique concret le partage de la langue française apporte-t-il ?",
        options: [
          "Une réduction moyenne de 20 % des coûts de transaction commerciale.",
          "La suppression de toutes les taxes sur les billets d'avion transatlantiques.",
          "L'obligation pour chaque entreprise d'embaucher un traducteur diplômé.",
          "L'attribution de subventions financières automatiques par l'UNESCO."
        ],
        correct: 0,
        explanation: "Le texte note qu'appartenir à l'espace francophone 'réduit en moyenne de 20 % les coûts de transaction économique entre pays membres'."
      },
      {
        id: "t13-q4",
        prompt: "Sur quels leviers l'Organisation Internationale de la Francophonie mise-t-elle pour l'avenir ?",
        question: "Sur quels leviers l'Organisation Internationale de la Francophonie mise-t-elle pour l'avenir ?",
        options: [
          "Le numérique éducatif, la mobilité des entrepreneurs et la découvrabilité en ligne.",
          "La construction de musées d'art classique dans toutes les capitales.",
          "Le retour obligatoire au dictionnaire papier dans les écoles.",
          "La fermeture des cursus universitaires bilingues."
        ],
        correct: 0,
        explanation: "Le dernier paragraphe cite le numérique éducatif, la mobilité des jeunes entrepreneurs et la découvrabilité des contenus."
      },
      {
        id: "t13-q5",
        prompt: "Le concept de « découvrabilité » sur Internet désigne la capacité d'un contenu à :",
        question: "Le concept de « découvrabilité » sur Internet désigne la capacité d'un contenu à :",
        options: [
          "Être facilement trouvé, repéré et accédé par les internautes sur les plateformes.",
          "Être protégé par un mot de passe hautement sécurisé.",
          "Être traduit instantanément en code informatique binaire.",
          "Être effacé automatiquement au bout de 24 heures."
        ],
        correct: 0,
        explanation: "La découvrabilité est la capacité d'un contenu culturel francophone à être disponible et aisément découvert par les moteurs de recherche."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // THÈME 14 : LE TOURISME & PATRIMOINE
  // -------------------------------------------------------------------------
  {
    id: "theme-14",
    themeId: "theme-14",
    theme: "Le tourisme & Patrimoine",
    themeTitle: "Le tourisme & Patrimoine",
    title: "Le surtourisme et la protection du patrimoine : réinventer le voyage sans détruire l'authenticité",
    level: "B2",
    readingTime: "5 min",
    wordCount: 425,
    source: "Geo Magazine & Courrier des Territoires",
    text: `
      <p>Des falaises d'Étretat aux calanques de Marseille, en passant par le Mont-Saint-Michel ou Venise, l'afflux incontrôlé de millions de visiteurs pendant la haute saison estivale menace directement la biodiversité des écosystèmes fragiles et la qualité de vie des habitants locaux. Ce phénomène d'hyper-fréquentation, désigné sous le terme de « surtourisme », transforme les cœurs de villes historiques en parcs d'attractions à ciel ouvert et provoque une flambée des loyers chassant les résidents permanents.</p>
      <p>Face à la dégradation physique des sentiers côtiers et à la saturation des infrastructures publiques, les gestionnaires de sites naturels et de monuments historiques expérimentent de nouveaux outils de régulation. L'instauration de jauges maximales de fréquentation avec réservation préalable obligatoire sur Internet, la fermeture saisonnière de certains accès routiers et la promotion d'itinéraires bis méconnus permettent de lisser les flux touristiques dans le temps et dans l'espace.</p>
      <p>Cette réorganisation appelle une redéfinition globale de notre imaginaire du voyage. Loin de la consommation rapide de « spots instagrammables » vite photographiés et aussitôt quittés, le tourisme durable ou « slow tourism » invite à voyager moins souvent, plus longtemps et hors des sentiers battus, en privilégiant la rencontre authentique avec les acteurs du terroir et la contemplation sereine des patrimoines vivants.</p>
    `,
    content: `
      <p>Des falaises d'Étretat aux calanques de Marseille, en passant par le Mont-Saint-Michel ou Venise, l'afflux incontrôlé de millions de visiteurs pendant la haute saison estivale menace directement la biodiversité des écosystèmes fragiles et la qualité de vie des habitants locaux. Ce phénomène d'hyper-fréquentation, désigné sous le terme de « surtourisme », transforme les cœurs de villes historiques en parcs d'attractions à ciel ouvert et provoque une flambée des loyers chassant les résidents permanents.</p>
      <p>Face à la dégradation physique des sentiers côtiers et à la saturation des infrastructures publiques, les gestionnaires de sites naturels et de monuments historiques expérimentent de nouveaux outils de régulation. L'instauration de jauges maximales de fréquentation avec réservation préalable obligatoire sur Internet, la fermeture saisonnière de certains accès routiers et la promotion d'itinéraires bis méconnus permettent de lisser les flux touristiques dans le temps et dans l'espace.</p>
      <p>Cette réorganisation appelle une redéfinition globale de notre imaginaire du voyage. Loin de la consommation rapide de « spots instagrammables » vite photographiés et aussitôt quittés, le tourisme durable ou « slow tourism » invite à voyager moins souvent, plus longtemps et hors des sentiers battus, en privilégiant la rencontre authentique avec les acteurs du terroir et la contemplation sereine des patrimoines vivants.</p>
    `,
    vocab: ["Surtourisme", "Jauges de fréquentation", "Slow tourism", "Écosystèmes fragiles", "Patrimoine vivant"],
    vocabulary: [
      { word: "Surtourisme", definition: "Afflux excessif de touristes provoquant des nuisances environnementales et sociales." },
      { word: "Jauges de fréquentation", definition: "Limites numériques strictes fixant le nombre maximal de visiteurs autorisés simultanément." },
      { word: "Slow tourism", definition: "Forme de tourisme durable privilégiant la lenteur, l'authenticité et le respect des populations." },
      { word: "Écosystèmes fragiles", definition: "Milieux naturels particulièrement sensibles à l'érosion et aux perturbations humaines." },
      { word: "Patrimoine vivant", definition: "Traditions, savoir-faire et cultures immatérielles transmis par les habitants." }
    ],
    questions: [
      {
        id: "t14-q1",
        prompt: "Quels sont les impacts négatifs majeurs du surtourisme mentionnés dans le premier paragraphe ?",
        question: "Quels sont les impacts négatifs majeurs du surtourisme mentionnés dans le premier paragraphe ?",
        options: [
          "La baisse des prix de l'immobilier et la disparition des hôtels de luxe.",
          "La menace sur la biodiversité et la hausse des loyers chassant les résidents locaux.",
          "L'interdiction de prendre des photos de vacances dans les parcs nationaux.",
          "La fermeture des aéroports internationaux pendant tout le mois d'août."
        ],
        correct: 1,
        explanation: "Le premier paragraphe cite la menace sur 'la biodiversité des écosystèmes fragiles' et 'la flambée des loyers chassant les résidents permanents'."
      },
      {
        id: "t14-q2",
        prompt: "Quelle mesure de régulation est mise en œuvre pour protéger les sites saturés ?",
        question: "Quelle mesure de régulation est mise en œuvre pour protéger les sites saturés ?",
        options: [
          "L'instauration de jauges maximales avec réservation obligatoire sur Internet.",
          "L'interdiction pure et simple de voyager pour les ressortissants européens.",
          "La destruction des sentiers pédestres pour empêcher tout accès à pied.",
          "L'obligation de visiter tous les monuments au pas de course."
        ],
        correct: 0,
        explanation: "Le second paragraphe mentionne 'l'instauration de jauges maximales de fréquentation avec réservation préalable obligatoire'."
      },
      {
        id: "t14-q3",
        prompt: "Quel est l'objectif de la promotion des « itinéraires bis méconnus » ?",
        question: "Quel est l'objectif de la promotion des « itinéraires bis méconnus » ?",
        options: [
          "Augmenter le coût des billets d'entrée dans les grands musées.",
          "Lisser et répartir les flux de touristes dans le temps et sur l'ensemble du territoire.",
          "Empêcher les visiteurs d'acheter des souvenirs régionaux.",
          "Concentrer tous les touristes au même endroit précis."
        ],
        correct: 1,
        explanation: "Le texte précise que ces mesures permettent de 'lisser les flux touristiques dans le temps et dans l'espace'."
      },
      {
        id: "t14-q4",
        prompt: "Que préconise la philosophie du « slow tourism » selon le dernier paragraphe ?",
        question: "Que préconise la philosophie du « slow tourism » selon le dernier paragraphe ?",
        options: [
          "Prendre le plus grand nombre possible de photos pour les réseaux sociaux en un minimum de temps.",
          "Voyager moins souvent, plus longtemps et privilégier la rencontre humaine authentique.",
          "Ne voyager qu'en train de nuit sans jamais s'arrêter dans les villages.",
          "Abandonner toute forme de vacances pour travailler davantage."
        ],
        correct: 1,
        explanation: "Le dernier paragraphe explique que le slow tourism invite à 'voyager moins souvent, plus longtemps et hors des sentiers battus'."
      },
      {
        id: "t14-q5",
        prompt: "L'expression « hors des sentiers battus » signifie :",
        question: "L'expression « hors des sentiers battus » signifie :",
        options: [
          "En dehors des circuits touristiques habituels et standardisés.",
          "Sur des chemins strictement interdits par les gardes forestiers.",
          "Dans des zones dangereuses sans réseau téléphonique.",
          "Uniquement le long des voies de chemin de fer désaffectées."
        ],
        correct: 0,
        explanation: "Sortir des 'sentiers battus' est une expression idiomatique signifiant s'éloigner des itinéraires conventionnels et très fréquentés."
      }
    ]
  }
];
