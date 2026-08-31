/* ==========================================================================
   JOURNEY DATA MASTER CHAPEAU
   Combines level-specific parcours files into the master dataset.
   ========================================================================== */

window.journeyDataset = [
  ...(window.parcours_A1_Dataset || []),
  ...(window.parcours_A2_Dataset || []),
  ...(window.parcours_B1_Dataset || []),
  ...(window.parcours_B2_Dataset || []),
  ...(window.parcours_C1_Dataset || []),
  ...(window.parcours_C2_Dataset || [])
];

/* ==========================================================================
   DOUBLE PARCOURS D'ENTRAÎNEMENT INTENSIF (> 2H) SANS STRESS DELF B2
   ========================================================================== */

const parcoursA_Data = {
  id: "parcours-a",
  title: "Séquences Dynamiques Alternées (Anti-Fatigue)",
  subtitle: "Session rythmée de 120 minutes avec micro-pauses régénératrices",
  totalDurationMin: 120,
  targetLevel: "B2",
  xpReward: 400,
  description: "Parcours spécialement conçu pour maintenir un niveau d'attention optimal pendant plus de 2 heures grâce à l'alternance continue des canaux d'apprentissage (écoute, grammaire, lecture, écriture, consolidation) et 4 micro-pauses guidées anti-fatigue.",
  blocks: [
    // -----------------------------------------------------------------------
    // BLOC 1 : LEXIQUE & ÉCOUTE ACTIVE (20 MIN)
    // -----------------------------------------------------------------------
    {
      id: "block-1-lexique-ecoute",
      blockIndex: 0,
      name: "Lexique & Écoute active",
      durationMin: 20,
      module: "listening",
      icon: "headphones",
      badge: "Écoute & Lexique B2",
      xp: 50,
      description: "Activation lexicale thématique et écoute active d'un reportage radio / journal de presse avec repérage des nuances.",
      vocabulary: [
        {
          term: "La reconversion professionnelle",
          type: "n. f.",
          definition: "Changement volontaire d'orientation professionnelle ou de métier au cours de la carrière.",
          example: "Après dix ans dans la finance, Julien a entamé une reconversion professionnelle dans l'artisanat écologique."
        },
        {
          term: "Le droit à la déconnexion",
          type: "n. m.",
          definition: "Droit légal des salariés de ne pas être sollicités par leur employeur en dehors des heures de travail.",
          example: "L'instauration du droit à la déconnexion vise à préserver la frontière entre vie privée et vie professionnelle."
        },
        {
          term: "Le plafond de verre",
          type: "n. m.",
          definition: "Obstacle invisible mais bien réel qui freine l'accès des femmes et des minorités aux postes de direction.",
          example: "Malgré leurs diplômes élevés, de nombreuses cadres se heurtent encore au plafond de verre."
        },
        {
          term: "L'îlot de fraîcheur urbain",
          type: "n. m.",
          definition: "Espace végétalisé ou plan d'eau en ville permettant d'abaisser localement la température lors des canicules.",
          example: "La municipalité a multiplié les îlots de fraîcheur pour protéger les populations vulnérables."
        },
        {
          term: "La sobriété énergétique",
          type: "n. f.",
          definition: "Démarche visant à réduire volontairement la consommation d'énergie par des changements de comportements et d'usages.",
          example: "La sobriété énergétique ne relève pas de la privation, mais d'une utilisation raisonnée des ressources."
        },
        {
          term: "L'émancipation numérique",
          type: "n. f.",
          definition: "Capacité des citoyens à maîtriser les technologies sans en devenir dépendants ou manipulés.",
          example: "L'école doit favoriser l'émancipation numérique des jeunes par le développement de l'esprit critique."
        },
        {
          term: "La fracture numérique",
          type: "n. f.",
          definition: "Inégalité d'accès aux équipements et aux compétences informatiques selon les catégories sociales ou les territoires.",
          example: "La dématérialisation des démarches administratives risque d'aggraver la fracture numérique chez les seniors."
        },
        {
          term: "L'engagement associatif",
          type: "n. m.",
          definition: "Participation active et bénévole à la vie d'une association citoyenne ou solidaire.",
          example: "L'engagement associatif des étudiants est aujourd'hui valorisé dans les parcours universitaires."
        },
        {
          term: "Le lien intergénérationnel",
          type: "n. m.",
          definition: "Relations d'entraide, de partage et de transmission entre des personnes de générations différentes.",
          example: "Les colocations solidaires renforcent le lien intergénérationnel entre étudiants et personnes âgées."
        },
        {
          term: "La cohésion sociale",
          type: "n. f.",
          definition: "État d'une société où les membres sont solidaires, intégrés et partagent des valeurs communes.",
          example: "L'accès équitable aux services publics est le garant fondamental de la cohésion sociale."
        }
      ],
      listening: {
        title: "RFI Journal en français facile : Mutations du travail et engagement des jeunes",
        date: "Extrait d'actualité RFI",
        duration: "10:00",
        audioUrl: "audio/rfi_ep_1.mp3",
        context: "Ce document radiophonique aborde la transformation des attentes professionnelles des jeunes générations, l'impact des crises climatiques sur les modes de vie et les débats autour de la responsabilité des institutions.",
        transcript: `<div class="transcript-text">
<p><strong>Présentateur :</strong> Bienvenue dans ce journal. À la une aujourd'hui, les profondes mutations du monde professionnel et l'évolution des priorités citoyennes chez les jeunes diplômés.</p>
<p>Face aux bouleversements environnementaux et à l'accélération des technologies numériques, force est de constater que la recherche de sens supplante désormais la simple quête de statut social. Selon une vaste enquête nationale, plus de 70% des moins de 30 ans se disent prêts à refuser une offre d'emploi au sein d'une entreprise dont l'empreinte écologique ou les pratiques sociales seraient jugées incompatibles avec leurs convictions éthiques.</p>
<p><strong>Journaliste :</strong> Effectivement, ce phénomène que certains sociologues qualifient de « désertion bienveillante » ou de « quête d'alignement » pousse les organisations à réinventer leur management. Télétravail encadré, gouvernance participative, semaine de quatre jours : les entreprises traditionnelles doivent faire preuve d'une flexibilité inédite pour attirer et retenir les nouveaux talents.</p>
<p>Parallèlement, les initiatives citoyennes et solidaires connaissent un engouement sans précédent, illustrant le désir ardent de la jeunesse de peser concrètement sur les décisions collectives et de renforcer le tissu démocratique local.</p>
</div>`,
        questions: [
          {
            id: "pa-b1-q1",
            prompt: "Selon l'extrait radiophonique, quel critère supplante désormais la simple quête de statut social chez les jeunes diplômés ?",
            options: [
              "La recherche d'une rémunération supérieure à la moyenne nationale.",
              "La quête de sens et l'alignement éthique avec les valeurs de l'entreprise.",
              "Le refus absolu de toute forme de hiérarchie managériale.",
              "La volonté de s'expatrier immédiatement à l'étranger."
            ],
            correct: 1,
            explanation: "Le journaliste souligne que 'la recherche de sens supplante désormais la simple quête de statut social' pour plus de 70% des moins de 30 ans."
          },
          {
            id: "pa-b1-q2",
            prompt: "Que désigne l'expression « désertion bienveillante » employée par certains sociologues ?",
            options: [
              "Le refus d'intégrer des entreprises dont les pratiques écologiques et sociales sont contraires aux convictions personnelles.",
              "Le départ anticipé à la retraite des cadres supérieurs de plus de cinquante ans.",
              "L'abandon des études universitaires dès la première année de licence.",
              "L'absentéisme répété des salariés lors des réunions en visioconférence."
            ],
            correct: 0,
            explanation: "Le texte explique qu'il s'agit du choix des jeunes de refuser ou quitter des postes dont l'éthique ne correspond pas à leurs valeurs."
          },
          {
            id: "pa-b1-q3",
            prompt: "Quelles mesures les entreprises traditionnelles doivent-elles adopter pour fidéliser les nouveaux talents ?",
            options: [
              "Supprimer tout recours au travail à distance et réimposer le présentiel strict.",
              "Proposer du télétravail encadré, une gouvernance participative et une plus grande flexibilité d'organisation.",
              "Remplacer l'ensemble des postes de cadres par des contrats temporaires d'intérim.",
              "Limiter l'accès aux formations continues pour réduire les coûts salariaux."
            ],
            correct: 1,
            explanation: "Le reportage mentionne expressément 'télétravail encadré, gouvernance participative, semaine de quatre jours' et une 'flexibilité inédite'."
          },
          {
            id: "pa-b1-q4",
            prompt: "Quel est le ton général du présentateur concernant l'engagement solidaire et citoyen de la jeunesse ?",
            options: [
              "Très critique et pessimiste quant à l'impact réel de ces actions.",
              "Reconnaissant un désir fort d'influencer positivement la démocratie locale et le vivre-ensemble.",
              "Indifférent, considérant qu'il s'agit d'un simple effet de mode sans lendemain.",
              "Ironique face aux difficultés rencontrées par les associations de bénévoles."
            ],
            correct: 1,
            explanation: "Le présentateur conclut en soulignant 'le désir ardent de la jeunesse de peser concrètement sur les décisions collectives et de renforcer le tissu démocratique'."
          }
        ]
      },
      microPauseAfter: {
        id: "pause-1",
        title: "Micro-Pause 1 : Respiration guidée 4-7-8",
        durationMin: 2,
        type: "breathing_478",
        instructions: [
          "Phase 1 (4 secondes) : Inspirez lentement et profondément par le nez en gonflant l'abdomen.",
          "Phase 2 (7 secondes) : Retenez votre souffle, gardez la cage thoracique ouverte, épaules détendues.",
          "Phase 3 (8 secondes) : Expirez lentement et complètement par la bouche en produisant un doux sifflement d'apaisement.",
          "Répétez ce cycle 4 fois pour ralentir instantanément votre rythme cardiaque et éliminer les tensions musculaires."
        ],
        tip: "La respiration 4-7-8 active le système nerveux parasympathique, diminue la pression artérielle et favorise la lucidité cognitive pour le bloc suivant."
      }
    },

    // -----------------------------------------------------------------------
    // BLOC 2 : GRAMMAIRE CIBLÉE B2 (25 MIN)
    // -----------------------------------------------------------------------
    {
      id: "block-2-grammaire-ciblee",
      blockIndex: 1,
      name: "Grammaire ciblée & Précision B2",
      durationMin: 25,
      module: "grammar",
      icon: "quiz",
      badge: "Morphosyntaxe & Subjonctif",
      xp: 50,
      description: "Maîtrise des points grammaticaux décisifs du DELF B2 : Subjonctif vs Indicatif, Pronoms relatifs composés, Articulateurs logiques de concession et Hypothèse.",
      ruleSummaries: [
        {
          title: "1. Subjonctif vs Indicatif : Nuance d'opinion et de certitude",
          content: "Les verbes d'opinion (<i>penser, croire, estimer, être certain</i>) s'emploient à l'<strong>indicatif</strong> à la forme affirmative. En revanche, à la forme <strong>négative ou interrogative avec inversion</strong>, ils expriment le doute et exigent obligatoirement le <strong>subjonctif</strong> :<br>• <i>Je pense qu'il <strong>a</strong> raison.</i> (Indicatif)<br>• <i>Je ne pense pas qu'il <strong>ait</strong> raison.</i> (Subjonctif)"
        },
        {
          title: "2. Les Pronoms Relatifs Composés : dont vs duquel",
          content: "Le piège classique est de confondre <strong>dont</strong> et <strong>duquel</strong>.<br><br>• <strong>dont</strong> s'emploie quand le verbe se construit directement avec <i>de</i> seul :<br>&nbsp;&nbsp;<i>C'est un sujet <strong>dont</strong> nous avons débattu.</i> (débattre <strong>de</strong> → dont ✔)<br><br>• <strong>duquel / de laquelle / desquels / desquelles</strong> s'emploient après une <strong>locution prépositive</strong> terminée par <i>de</i> (<i>au sujet de, près de, à côté de, en dépit de…</i>). Dans ce cas, <i>dont</i> est interdit :<br>&nbsp;&nbsp;<i>Le projet <strong>au sujet duquel</strong> nous avons débattu.</i> (au sujet <strong>de</strong> + lequel = duquel ✔)<br><br>👉 <strong>Règle</strong> : si la préposition est une locution (plus d'un mot), utilisez toujours la forme composée."
        },
        {
          title: "3. La Concession et l'Opposition au B2",
          content: "• <strong>Bien que / Quoique</strong> + <i>Subjonctif</i> (ex: <i>Bien qu'il <strong>soit</strong> tard...</i>)<br>• <strong>Même si</strong> + <i>Indicatif</i> (ex: <i>Même s'il <strong>pleut</strong>...</i>)<br>• <strong>Quand bien même</strong> + <i>Conditionnel</i> (ex: <i>Quand bien même cela <strong>coûterait</strong> cher...</i>)<br>• <strong>Avoir beau + infinitif</strong> (ex: <i>Il <strong>a beau faire</strong> des efforts, il n'y arrive pas.</i>)"
        }
      ],
      questions: [
        {
          id: "pa-b2-q1",
          prompt: "Bien que le conseil d'administration ___ d'accord sur le principe, le financement n'a pas encore été débloqué.",
          options: [
            "soit",
            "est",
            "sera",
            "serait"
          ],
          correct: 0,
          explanation: "La conjonction de concession 'bien que' exige systématiquement l'emploi du mode subjonctif ('soit')."
        },
        {
          id: "pa-b2-q2",
          prompt: "Je ne crois pas que cette solution ___ réellement viable sur le long terme.",
          options: [
            "puisse être",
            "peut être",
            "pourrait être",
            "va être"
          ],
          correct: 0,
          explanation: "Le verbe 'croire' à la forme négative exprime le doute et déclenche obligatoirement le subjonctif ('puisse être')."
        },
        {
          id: "pa-b2-q3a",
          prompt: "C'est un rapport ___ nous avons longuement débattu lors de la réunion de jeudi.",
          options: [
            "dont",
            "duquel",
            "auquel",
            "lequel"
          ],
          correct: 0,
          explanation: "Le verbe 'débattre' se construit avec la préposition 'de' seule (débattre de quelque chose). On emploie donc 'dont', qui remplace directement 'de + nom'. La forme composée 'duquel' est réservée aux locutions prépositives (ex. : au sujet de, près de)."
        },
        {
          id: "pa-b2-q3b",
          prompt: "Le projet d'aménagement urbain au sujet ___ nous avons débattu hier soir suscite de vives réserves chez les riverains.",
          options: [
            "duquel",
            "dont",
            "auquel",
            "lequel"
          ],
          correct: 0,
          explanation: "'Au sujet de' est une locution prépositive (plusieurs mots). Dans ce cas, 'dont' est interdit : on contracte 'au sujet de + lequel' en 'au sujet duquel'. Comparez avec la question précédente : 'débattre de' (préposition seule) → dont ; 'au sujet de' (locution) → duquel."
        },
        {
          id: "pa-b2-q4",
          prompt: "Si la municipalité avait anticipé la hausse des températures, elle ___ davantage d'arbres au centre-ville l'an dernier.",
          options: [
            "aurait planté",
            "avait planté",
            "planterait",
            "a planté"
          ],
          correct: 0,
          explanation: "Hypothèse non réalisée dans le passé : 'Si + plus-que-parfait' (si elle avait anticipé) entraîne le 'conditionnel passé' dans la proposition principale ('aurait planté')."
        },
        {
          id: "pa-b2-q5",
          prompt: "Les questions complexes ___ nous avons été confrontés lors de cet audit exigent une concertation approfondie.",
          options: [
            "auxquelles",
            "desquelles",
            "lesquelles",
            "dont"
          ],
          correct: 0,
          explanation: "On dit 'être confronté à' quelque chose. Pour un nom féminin pluriel ('les questions'), la forme contractée avec 'à' est 'auxquelles' (à + lesquelles)."
        },
        {
          id: "pa-b2-q6",
          prompt: "Il a beau ___ des arguments pertinents, ses interlocuteurs refusent d'entendre ses propositions.",
          options: [
            "avancer",
            "avance",
            "avançant",
            "avancé"
          ],
          correct: 0,
          explanation: "La structure de concession 'avoir beau + infinitif' s'emploie toujours avec un infinitif présent pour exprimer une tentative vaine."
        }
      ],
      microPauseAfter: {
        id: "pause-2",
        title: "Micro-Pause 2 : Pause Hydratation & Étirement Postural",
        durationMin: 3,
        type: "hydration_stretch",
        instructions: [
          "1. Buvez un grand verre d'eau fraîche ou tiède pour stimuler l'activité neuronale.",
          "2. Levez-vous et effectuez 5 cercles amples et lents avec les épaules vers l'arrière.",
          "3. Entrelacez les doigts, tournez les paumes vers le plafond et étirez la colonne vertébrale vers le haut.",
          "4. Inclinez doucement la tête de gauche à droite pour relâcher les muscles trapèzes et les cervicales."
        ],
        tip: "Une baisse d'hydratation de seulement 2% diminue l'attention soutenue et la vitesse de traitement de l'information de plus de 15%."
      }
    },

    // -----------------------------------------------------------------------
    // BLOC 3 : COMPRÉHENSION ÉCRITE & ANALYSE DE PRESSE (30 MIN)
    // -----------------------------------------------------------------------
    {
      id: "block-3-comprehension-ecrite",
      blockIndex: 2,
      name: "Compréhension écrite & Analyse de presse",
      durationMin: 30,
      module: "reading",
      icon: "menu_book",
      badge: "Analyse de Presse & Esprit Critique",
      xp: 50,
      description: "Lecture approfondie d'un grand article de presse sociétale B2, décryptage de la visée argumentative de l'auteur et résolution des questions d'analyse fine.",
      article: {
        id: "pa-art-flexoffice",
        title: "La révolution du flex-office et du travail hybride : vers la fin du bureau traditionnel ?",
        source: "Le Courrier de l'Économie — Par Thomas Vasseur",
        readingTime: "6 min",
        wordCount: 465,
        text: `
          <p>Longtemps considéré comme le sanctuaire de l'identité d'entreprise et le point d'ancrage indéboulonnable des salariés, le bureau individuel assigné vit-il ses dernières heures ? Au lendemain de la crise sanitaire, la généralisation du travail hybride a profondément bouleversé les équilibres spatiaux et managériaux des grandes métropoles françaises. Poussées par des impératifs d'optimisation financière et d'attractivité RH, les entreprises ont massivement adopté le « flex-office », ce modèle d'organisation sans poste attitré où les collaborateurs choisissent leur emplacement chaque matin via une application dédiée.</p>
          <p>Sur le plan économique et environnemental, les arguments des promoteurs du dispositif ne manquent pas de poids. En réduisant de 20 à 30% la surface de leurs locaux tertiaires, les sociétés diminuent substantiellement leurs charges locatives tout en allégeant leur facture énergétique. Pour les employés, la flexibilité offerte par la combinaison de jours en distanciel et de moments de travail collaboratif sur site est souvent perçue comme un facteur d'autonomie et d'équilibre accru entre vie personnelle et professionnelle.</p>
          <p>Toutefois, derrière ce tableau séduisant, de nombreux spécialistes du travail et délégués syndicaux dénoncent une dégradation insidieuse du climat relationnel. Privés de repères personnalisés et contraints à une forme de nomadisme permanent, certains salariés éprouvent un sentiment de désincarnation et de déshumanisation de leur cadre de travail. La quête quotidienne d'une place disponible génère un stress sourd, particulièrement éprouvant pour les nouveaux arrivants qui peinent à s'intégrer dans des équipes dispersées. De surcroît, loin de stimuler la créativité spontanée, les espaces ouverts standardisés engendrent fréquemment une cacophonie préjudiciable à la concentration intellectuelle approfondie.</p>
          <p>Dès lors, l'enjeu ne consiste pas à opérer un retour nostalgique au modèle rigide d'antan, mais à concevoir des espaces hybrides flexibles et accueillants, capables de concilier efficacité productive et préservation du sentiment d'appartenance collective.</p>
        `,
        vocabulary: [
          { word: "Sanctuaire", definition: "Lieu sacré ou protégé, symbole d'une tradition inaltérable." },
          { word: "Flex-office", definition: "Organisation des bureaux où les salariés n'ont pas de poste de travail fixe et attitré." },
          { word: "Désincarnation", definition: "Perte du caractère humain, concret ou chaleureux d'une structure." },
          { word: "Nomadisme permanent", definition: "Fait de changer constamment de lieu de travail sans point de fixation." }
        ],
        questions: [
          {
            id: "pa-ce-q1",
            prompt: "Selon le premier paragraphe, quelle est la raison principale de l'adoption massive du flex-office par les entreprises ?",
            options: [
              "Une obligation légale imposée par les réglementations européennes du travail.",
              "La recherche d'une optimisation financière combinée à la généralisation du travail hybride.",
              "Le souhait unanime et unilatéral de l'ensemble des organisations syndicales.",
              "La disparition définitive de toute forme de locaux physiques pour les salariés."
            ],
            correct: 1,
            explanation: "Le texte précise que les entreprises ont adopté ce modèle 'poussées par des impératifs d'optimisation financière et d'attractivité RH' suite à la crise sanitaire."
          },
          {
            id: "pa-ce-q2",
            prompt: "Quel avantage majeur les partisans du flex-office mettent-ils en avant concernant les salariés ?",
            options: [
              "La garantie d'une augmentation de salaire automatique liée aux économies d'espace.",
              "Une autonomie accrue et un meilleur équilibre entre temps personnel et temps professionnel.",
              "L'absence totale de réunions d'équipe et de supervision managériale.",
              "La possibilité de ne plus jamais se déplacer physiquement dans les locaux de l'entreprise."
            ],
            correct: 1,
            explanation: "Le second paragraphe souligne que ce modèle 'est souvent perçu comme un facteur d'autonomie et d'équilibre accru entre vie personnelle et professionnelle'."
          },
          {
            id: "pa-ce-q3",
            prompt: "Quel impact négatif le nomadisme permanent a-t-il sur les salariés d'après les sociologues du travail ?",
            options: [
              "Une hausse spectaculaire des accidents du travail sur les trajets domicile-bureau.",
              "Un sentiment de désincarnation et un stress lié à la recherche quotidienne d'un espace de travail.",
              "Un refus systématique d'utiliser les outils informatiques récents.",
              "Une baisse immédiate du pouvoir d'achat des collaborateurs."
            ],
            correct: 1,
            explanation: "Le troisième paragraphe indique que 'privés de repères personnalisés', les salariés ressentent 'un sentiment de désincarnation' et un 'stress sourd' pour trouver une place."
          },
          {
            id: "pa-ce-q4",
            prompt: "Quelle difficulté particulière rencontrent les nouveaux arrivants dans un environnement en flex-office ?",
            options: [
              "Ils ne disposent d'aucun matériel informatique portable fourni par l'employeur.",
              "Ils éprouvent des difficultés accrues pour s'intégrer au sein d'équipes géographiquement dispersées.",
              "Ils doivent obligatoirement payer un abonnement pour réserver leur bureau.",
              "Ils sont exclus des formations dispensées en ligne."
            ],
            correct: 1,
            explanation: "Le texte mentionne que ce contexte est 'particulièrement éprouvant pour les nouveaux arrivants qui peinent à s'intégrer dans des équipes dispersées'."
          },
          {
            id: "pa-ce-q5",
            prompt: "Quelle solution d'avenir l'auteur préconise-t-il en conclusion de l'article ?",
            options: [
              "Un retour strict et nostalgique au bureau individuel fermé pour chaque collaborateur.",
              "L'abandon complet des bureaux physiques au profit du 100% télétravail.",
              "La conception d'espaces hybrides flexibles conciliant efficacité productive et sentiment d'appartenance.",
              "L'interdiction pure et simple du travail à distance pour l'ensemble des salariés."
            ],
            correct: 2,
            explanation: "Le dernier paragraphe préconise de 'concevoir des espaces hybrides flexibles et accueillants, capables de concilier efficacité productive et préservation du sentiment d'appartenance collective'."
          }
        ]
      },
      microPauseAfter: {
        id: "pause-3",
        title: "Micro-Pause 3 : Pause Déconnexion Visuelle 20-20-20",
        durationMin: 2,
        type: "visual_rest",
        instructions: [
          "1. Détournez complètement le regard de tout écran.",
          "2. Fixez un point précis situé à au moins 20 pieds (environ 6 mètres) ou regardez par la fenêtre pendant 20 secondes.",
          "3. Frottez vigoureusement la paume de vos mains l'une contre l'autre pendant 10 secondes pour générer une chaleur bienfaisante.",
          "4. Placez vos paumes en coupe sur vos yeux clos sans appuyer (technique du palming) pendant 60 secondes en respirant profondément."
        ],
        tip: "La règle du 20-20-20 et le palming permettent aux muscles ciliaires et à la rétine de se détendre, prévenant la sécheresse et les maux de tête."
      }
    },

    // -----------------------------------------------------------------------
    // BLOC 4 : ATELIER D'ARGUMENTATION ÉCRITE (30 MIN)
    // -----------------------------------------------------------------------
    {
      id: "block-4-argumentation-ecrite",
      blockIndex: 3,
      name: "Atelier d'argumentation écrite",
      durationMin: 30,
      module: "writing",
      icon: "history_edu",
      badge: "Argumentation & Rhétorique Formelle",
      xp: 50,
      description: "Rédaction méthodique d'un développement d'arguments formel (lettre argumentée / contribution au débat) avec utilisation obligatoire de connecteurs de nuance et respect du calibrage B2 (250 mots).",
      writingTopic: {
        id: "pa-wt-mediatheque",
        title: "Lettre formelle au Maire : Préservation et élargissement des horaires de la médiathèque de quartier",
        type: "Lettre formelle argumentative",
        targetWords: 250,
        minWords: 225,
        maxWords: 275,
        prompt: `
          <div class="prompt-section">
            <h4>Consigne officielle DELF B2 (250 mots) :</h4>
            <p>La municipalité de votre ville a annoncé la réduction drastique des horaires d'ouverture de la médiathèque municipale ainsi que sa fermeture définitive le samedi après-midi et le dimanche, pour des raisons d'économies budgétaires.</p>
            <p>En tant que président(e) du collectif des usagers « Savoirs et Culture pour Tous », vous rédigez une <strong>lettre formelle argumentée à Monsieur le Maire</strong> pour contester cette décision.</p>
            <p>Dans votre courrier, vous exposerez les répercussions néfastes de cette mesure (inégalités scolaires, perte de lien social pour les seniors et familles) et vous formulerez des solutions alternatives concrètes et réalistes (recours à des volontaires du service civique, réaménagement concerté des plannings, cofinancement associatif).</p>
          </div>
        `,
        checklist: [
          "En-tête complet et soigné (coordonnées expéditeur, destinataire, lieu, date, objet explicite).",
          "Formule d'appel formelle adaptée (« Monsieur le Maire, »).",
          "Introduction exposant le fait déclencheur et la démarche collective sans agressivité.",
          "Développement en deux arguments étayés par des exemples concrets.",
          "Proposition constructive alternative réaliste.",
          "Formule de politesse formelle complète et signature officielle."
        ],
        connectors: [
          "En premier lieu",
          "Force est de constater que",
          "De surcroît",
          "Certes... néanmoins",
          "Il n'en demeure pas moins que",
          "En définitive"
        ],
        sampleAnswer: `Collectif « Savoirs et Culture pour Tous »
14, avenue de la Liberté
69000 Lyon
Monsieur le Maire
Hôtel de Ville
Place des Terreaux
69000 Lyon

À Lyon, le 28 août 2026

Objet : Contestation de la réduction des horaires de la médiathèque municipale et propositions alternatives

Monsieur le Maire,

Je me permets de vous adresser la présente lettre au nom des membres du collectif « Savoirs et Culture pour Tous », afin de vous exprimer notre vive préoccupation face à la décision municipale de fermer la médiathèque de quartier le week-end.

En premier lieu, il convient de rappeler que cet équipement public constitue un pilier indispensable de la réussite scolaire et de l'égalité des chances. Pour de nombreux élèves et étudiants issus de logements exigus, la médiathèque représente l'unique lieu calme et pourvu de ressources numériques pour réviser durant leurs jours de repos.

En second lieu, force est de constater que la médiathèque tisse un lien social irremplaçable entre les générations. Les familles et les personnes âgées isolées y trouvent un espace d'échanges, d'ateliers numériques et d'éveil culturel particulièrement dynamique le samedi.

Certes, nous comprenons les contraintes budgétaires pesant sur la commune ; néanmoins, d'autres solutions pérennes méritent d'être explorées. Nous vous suggérons notamment de mobiliser des volontaires du service civique et des bénévoles associatifs pour assurer les permanences dominicales, réduisant ainsi les surcoûts salariaux.

Dans l'attente d'un échange constructif, je vous prie d'agréer, Monsieur le Maire, l'expression de ma considération distinguée.

Le Président du Collectif`
      },
      microPauseAfter: {
        id: "pause-4",
        title: "Micro-Pause 4 : Recentrage Mental & Confiance",
        durationMin: 3,
        type: "mental_centering",
        instructions: [
          "1. Asseyez-vous confortablement, les deux pieds bien à plat sur le sol, les mains reposant sur les genoux.",
          "2. Fermez doucement les yeux et prenez trois respirations lentes et amples.",
          "3. Visualisez-vous le jour du DELF B2 : serein(e), lucide, maîtrisant votre temps et articulant vos idées avec aisance et clarté.",
          "4. Ancrez cette pensée positive : 'Mes compétences progressent à chaque entraînement. Je suis pleinement capable de réussir mon examen.'"
        ],
        tip: "La visualisation positive et le recentrage réduisent le cortisol de 30% et améliorent la fluidité verbale en situation d'évaluation."
      }
    },

    // -----------------------------------------------------------------------
    // BLOC 5 : DÉFI RÉCAPITULATIF & CONSOLIDATION (15 MIN)
    // -----------------------------------------------------------------------
    {
      id: "block-5-defi-consolidation",
      blockIndex: 4,
      name: "Défi récapitulatif & Consolidation sprint",
      durationMin: 15,
      module: "synthesis",
      icon: "stars",
      badge: "Grand Maître de l'Endurance B2",
      xp: 50,
      description: "Sprint final interactif de 6 questions transversales chrono validant l'ensemble des acquis de la session et débloquant le bonus suprême de +150 XP.",
      questions: [
        {
          id: "pa-b5-q1",
          prompt: "Quel terme désigne l'organisation du travail où les salariés ne disposent d'aucun poste de bureau attitré dans l'entreprise ?",
          options: [
            "Le flex-office",
            "Le chômage technique",
            "La rupture conventionnelle",
            "Le travail à la chaîne"
          ],
          correct: 0,
          explanation: "Le flex-office (ou bureau flexible) est l'organisation où les employés s'installent à une place différente chaque jour selon leurs besoins."
        },
        {
          id: "pa-b5-q2",
          prompt: "Quelle phrase illustre un emploi correct du subjonctif après une expression d'opinion négative ?",
          options: [
            "Je ne suis pas convaincu qu'elle réussisse cet examen sans préparation.",
            "Je ne suis pas convaincu qu'elle réussira cet examen sans préparation.",
            "Je suis convaincu qu'elle réussisse cet examen sans préparation.",
            "Je pense qu'elle réussisse cet examen avec brio."
          ],
          correct: 0,
          explanation: "L'opinion négative ('Je ne suis pas convaincu que...') exprime le doute et commande le subjonctif présent ('réussisse')."
        },
        {
          id: "pa-b5-q3",
          prompt: "Quel connecteur logique permet d'introduire un argument supplémentaire tout en renforçant l'affirmation précédente ?",
          options: [
            "De surcroît",
            "Bien que",
            "Au contraire",
            "Pour autant que"
          ],
          correct: 0,
          explanation: "'De surcroît' (synonyme de 'en outre', 'qui plus est') introduit un argument d'addition qui renforce le raisonnement."
        },
        {
          id: "pa-b5-q4",
          prompt: "Complétez : « La transition énergétique est un défi majeur ___ l'ensemble des citoyens doit prendre part. »",
          options: [
            "auquel",
            "duquel",
            "lequel",
            "dont"
          ],
          correct: 0,
          explanation: "On dit 'prendre part à' quelque chose. Le nom 'défi' étant masculin singulier, la contraction donne 'auquel' (à + lequel)."
        },
        {
          id: "pa-b5-q5",
          prompt: "Dans une lettre formelle administrative, quelle formule de politesse est la plus appropriée pour conclure ?",
          options: [
            "Je vous prie d'agréer, Monsieur le Maire, l'expression de ma considération distinguée.",
            "Bien à vous et à très bientôt pour des nouvelles !",
            "Cordialement, en espérant que vous changerez d'avis rapidement.",
            "Recevez mes amitiés les plus sincères et chaleureuses."
          ],
          correct: 0,
          explanation: "La formule 'Je vous prie d'agréer, [Titre], l'expression de ma considération distinguée' respecte scrupuleusement le registre protocolaire et soutenu."
        },
        {
          id: "pa-b5-q6",
          prompt: "Quelle est la fourchette de mots optimale exigée pour la production écrite du DELF B2 ?",
          options: [
            "225 à 275 mots (cible idéale : 250 mots)",
            "100 à 150 mots",
            "350 à 450 mots",
            "500 à 600 mots"
          ],
          correct: 0,
          explanation: "La consigne standard impose 250 mots minimum, avec une tolérance optimale recommandée entre 225 et 275 mots."
        }
      ]
    }
  ]
};

const parcoursB_Data = {
  id: "parcours-b",
  title: "Immersion Thématique Approfondie (Les 4 Piliers DELF B2)",
  subtitle: "4 modules complets de 120 minutes articulés autour des grands débats de société",
  totalDurationMin: 120,
  targetLevel: "B2",
  xpReward: 400,
  description: "Entraînement immersif de 2 heures par grand pilier sociétal du DELF B2. Chaque module rassemble le lexique spécialisé indispensable (15+ termes), la boîte à connecteurs, un grand dossier de presse analysé, un débat oral radiophonique, un sujet d'argumentation formelle avec corrigé et un drill de validation.",
  pillars: [
    // -----------------------------------------------------------------------
    // PILIER 1 : MONDE DU TRAVAIL & ÉCONOMIE
    // -----------------------------------------------------------------------
    {
      id: "pilier-1-travail-economie",
      pillarIndex: 0,
      title: "Monde du travail, Nouvelles organisations & Économie",
      theme: "Le monde du travail",
      durationMin: 120,
      icon: "business_center",
      color: "#1E88E5",
      badge: "Expert Travail & Économie B2",
      description: "Flex-office, télétravail hybride, semaine de 4 jours, intelligence artificielle au travail, droit à la déconnexion et conciliation des temps de vie.",
      vocabulary: [
        { term: "Le télétravail hybride", type: "n. m.", definition: "Mode de travail alternant jours en présentiel au bureau et jours en distanciel à domicile.", example: "Le télétravail hybride s'impose désormais comme le standard des entreprises modernes." },
        { term: "Le flex-office", type: "n. m.", definition: "Organisation des bureaux où les salariés n'ont pas de poste de travail fixe et attitré.", example: "L'adoption du flex-office a permis de réduire de 25% la surface des locaux d'entreprise." },
        { term: "Le droit à la déconnexion", type: "n. m.", definition: "Droit légal des salariés de ne pas être sollicités en dehors de leurs heures de travail.", example: "La direction a instauré le blocage des courriels professionnels après 19 heures pour respecter le droit à la déconnexion." },
        { term: "La porosité des temps", type: "n. f.", definition: "Frontière floue et estompée entre le temps dédié au travail et celui consacré à la vie personnelle.", example: "L'usage permanent du smartphone professionnel accentue la porosité des temps." },
        { term: "L'épuisement professionnel (burn-out)", type: "n. m.", definition: "Syndrome d'épuisement physique, émotionnel et mental causé par un stress professionnel chronique.", example: "La surcharge de travail non régulée est la cause principale de l'épuisement professionnel." },
        { term: "Le management par la confiance", type: "n. m.", definition: "Pratique managériale basée sur l'autonomie et l'évaluation par objectifs plutôt que sur le contrôle horaire.", example: "Le management par la confiance renforce l'engagement et la responsabilisation des équipes." },
        { term: "La reconversion professionnelle", type: "n. f.", definition: "Changement de métier ou de secteur d'activité par le biais d'une formation qualifiante.", example: "Elle a réussi sa reconversion professionnelle pour devenir consultante en responsabilité sociétale." },
        { term: "La charge mentale", type: "n. f.", definition: "Poids psychologique lié à l'organisation simultanée des tâches professionnelles et domestiques.", example: "Le travail à distance peut alourdir la charge mentale si les tâches familiales ne sont pas équitablement partagées." },
        { term: "L'automatisation cognitive", type: "n. f.", definition: "Exécution de tâches intellectuelles complexes par des algorithmes ou des agents d'intelligence artificielle.", example: "L'automatisation cognitive transforme les métiers de l'analyse juridique et financière." },
        { term: "Le présentéisme", type: "n. m.", definition: "Fait d'être physiquement présent à son poste de travail sans être réellement productif ou en étant souffrant.", example: "La culture du présentéisme est progressivement remplacée par une culture du résultat mesurable." },
        { term: "La rupture conventionnelle", type: "n. f.", definition: "Accord à l'amiable entre un employeur et un salarié pour mettre fin à un contrat à durée indéterminée.", example: "Les deux parties ont signé une rupture conventionnelle permettant au salarié de lancer son entreprise." },
        { term: "L'épanouissement au travail", type: "n. m.", definition: "Sentiment de satisfaction, de bien-être et de réalisation de soi dans l'exercice de son métier.", example: "La quête de sens est devenue le critère déterminant de l'épanouissement au travail chez les jeunes." },
        { term: "La conciliation des temps", type: "n. f.", definition: "Harmonisation équilibrée entre vie professionnelle, vie familiale et temps pour soi.", example: "La flexibilité horaire favorise une meilleure conciliation des temps de vie." },
        { term: "Le dialogue social", type: "n. m.", definition: "Ensemble des négociations et consultations entre la direction d'entreprise et les représentants des salariés.", example: "Un dialogue social constructif a permis de signer un accord novateur sur les congés parentaux." },
        { term: "La précarisation de l'emploi", type: "n. f.", definition: "Multiplication des contrats courts, instables et peu rémunérés au détriment de l'emploi pérenne.", example: "La précarisation de l'emploi touche particulièrement les jeunes entrants sur le marché du travail." },
        { term: "L'ubérisation de l'économie", type: "n. f.", definition: "Transformation d'un secteur économique par la mise en relation directe de prestataires indépendants via une plateforme numérique.", example: "L'ubérisation de l'économie soulève d'épineuses questions de protection sociale pour les livreurs." }
      ],
      connectors: [
        { connector: "En premier lieu", usage: "Introduit le premier argument d'une démonstration ordonnée.", example: "En premier lieu, la semaine de quatre jours favorise le bien-être des salariés." },
        { connector: "Force est de constater que...", usage: "Pose un constat objectif, indéniable et solide.", example: "Force est de constater que le présentéisme nuit à l'efficacité réelle des équipes." },
        { connector: "De surcroît", usage: "Ajoute un argument supplémentaire de poids supérieur.", example: "De surcroît, le télétravail réduit significativement les émissions de gaz à effet de serre liées aux transports." },
        { connector: "Quant à (+ nom)", usage: "Focalise l'attention sur un aspect particulier du débat.", example: "Quant aux managers intermédiaires, ils doivent adapter leurs modes d'évaluation." },
        { connector: "À cet égard", usage: "Relie une remarque spécifique à ce qui vient d'être exposé.", example: "À cet égard, la formation continue constitue un levier d'adaptation indispensable." },
        { connector: "Il n'en demeure pas moins que...", usage: "Maintient sa position principale après avoir concédé un point.", example: "Certes les coûts initiaux sont réels, mais il n'en demeure pas moins que l'investissement est rentable à long terme." }
      ],
      pressArticle: {
        id: "pilier-1-art",
        title: "La semaine de 4 jours : utopie managériale ou révolution durable de l'organisation du travail ?",
        source: "Les Échos Sociétaux — Tribune Économique",
        wordCount: 450,
        text: `
          <p>Réduire le temps de travail hebdomadaire à quatre jours sans baisse de salaire : longtemps reléguée au rang de revendication idéaliste, cette proposition gagne aujourd'hui du terrain au sein des conseils d'administration des pays développés. Poussées par la nécessité de fidéliser leurs talents dans un marché sous tension et inspirées par des expérimentations concluantes menées en Islande, au Royaume-Uni ou en Espagne, de nombreuses entreprises franchissent le pas.</p>
          <p>Les bilans tirés de ces phases pilotes révèlent des enseignements saisissants. Contrairement aux craintes initiales des dirigeants, la productivité globale n'a pas chuté ; elle a même fréquemment progressé de 5 à 10%. Ce paradoxe s'explique par une réorganisation drastique des méthodes de travail : suppression des réunions superflues, concentration accrue sur les tâches prioritaires et diminution drastique des interruptions intempestives. Du côté des collaborateurs, le gain d'une journée de repos supplémentaire engendre une chute spectaculaire des arrêts maladie et du stress chronique.</p>
          <p>Néanmoins, force est de constater que la généralisation de ce modèle ne s'effectue pas sans embûches. Dans les secteurs industriels, hospitaliers ou du commerce de détail où la présence physique continue est incontournable, le passage à 32 heures impose des embauches compensatoires coûteuses. Sans un accompagnement étatique ciblé, le risque d'une fracture entre travailleurs du savoir privilégiés et salariés de première ligne demeure particulièrement aigu.</p>
          <p>En définitive, la semaine de 4 jours préfigure une réinvention majeure du pacte social, à condition d'être négociée de manière inclusive et adaptée aux réalités de chaque filière.</p>
        `,
        questions: [
          {
            id: "p1-art-q1",
            prompt: "Quel constat surprenant les expérimentations de la semaine de 4 jours ont-elles mis en évidence concernant la productivité ?",
            options: [
              "La productivité a diminué de moitié en raison de la réduction du temps de présence.",
              "La productivité s'est maintenue voire a progressé grâce à une réorganisation des méthodes de travail.",
              "La productivité n'a pas pu être mesurée faute d'indicateurs fiables.",
              "Les salariés ont été contraints de travailler deux fois plus vite pendant les 4 jours restants."
            ],
            correct: 1,
            explanation: "Le texte mentionne que 'la productivité globale n'a pas chuté ; elle a même fréquemment progressé de 5 à 10%' grâce à la suppression des réunions superflues et une meilleure concentration."
          },
          {
            id: "p1-art-q2",
            prompt: "Quel bénéfice sanitaire direct a été constaté chez les salariés bénéficiant de ce rythme ?",
            options: [
              "Une baisse spectaculaire des arrêts maladie et du stress chronique.",
              "Une augmentation des consultations psychologiques en entreprise.",
              "Une hausse temporaire des insomnies le week-end.",
              "Une détérioration de la santé cardiovasculaire."
            ],
            correct: 0,
            explanation: "Le second paragraphe indique expressément que ce rythme entraîne 'une chute spectaculaire des arrêts maladie et du stress chronique'."
          },
          {
            id: "p1-art-q3",
            prompt: "Dans quels secteurs la mise en œuvre de la semaine de 4 jours soulève-t-elle des difficultés majeures ?",
            options: [
              "Dans les entreprises de logiciels et les agences de communication en ligne.",
              "Dans l'industrie, le commerce de détail et les établissements hospitaliers où la présence continue est indispensable.",
              "Exclusivement dans les très grandes multinationales de l'énergie.",
              "Dans les associations de bénévoles de petite taille."
            ],
            correct: 1,
            explanation: "Le texte cible 'les secteurs industriels, hospitaliers ou du commerce de détail où la présence physique continue est incontournable'."
          },
          {
            id: "p1-art-q4",
            prompt: "Quel risque de division sociale l'auteur signale-t-il si la mesure n'est pas encadrée par l'État ?",
            options: [
              "Une interdiction des vacances d'été pour les salariés du tertiaire.",
              "Une fracture entre travailleurs du tertiaire privilégiés et salariés de première ligne sur site.",
              "Une faillite généralisée des banques centrales européennes.",
              "Une disparition totale des syndicats de travailleurs."
            ],
            correct: 1,
            explanation: "L'auteur met en garde contre 'le risque d'une fracture entre travailleurs du savoir privilégiés et salariés de première ligne'."
          },
          {
            id: "p1-art-q5",
            prompt: "Quelle est la condition finale formulée par l'auteur pour que ce modèle réussisse durablement ?",
            options: [
              "Une imposition unilatérale par décret présidentiel sans concertation.",
              "Une négociation inclusive et adaptée aux spécificités de chaque branche professionnelle.",
              "Une réduction préalable des salaires de tous les collaborateurs de 10%.",
              "L'interdiction de tout travail le vendredi dans l'ensemble de l'Union européenne."
            ],
            correct: 1,
            explanation: "Le dernier paragraphe conclut que ce modèle est prometteur 'à condition d'être négocié de manière inclusive et adaptée aux réalités de chaque filière'."
          }
        ]
      },
      listeningDebate: {
        title: "Débat d'actualité : Le télétravail hybride a-t-il affaibli le sentiment d'appartenance à l'entreprise ?",
        duration: "08:30",
        transcript: `<div class="transcript-text">
<p><strong>Animatrice :</strong> Bonsoir à tous. Faut-il craindre que la généralisation du télétravail hybride ne distende irrémédiablement le lien social entre collègues ? Pour en débattre ce soir, nous recevons Marc Valérien, sociologue des organisations, et Claire Dufour, directrice des ressources humaines.</p>
<p><strong>Marc Valérien :</strong> Force est d'admettre que le bureau ne sert plus seulement à produire des tableaux de chiffres, mais à faire société. Lorsque les salariés ne se croisent plus que par écrans interposés, la transmission informelle des savoirs et la culture d'entreprise s'effritent. Les jeunes recrues se sentent isolées et l'attachement affectif à l'organisation diminue considérablement.</p>
<p><strong>Claire Dufour :</strong> Certes, monsieur Valérien, le risque d'isolement existe si le management reste passif. Mais n'oublions pas que la flexibilité horaire a libéré un temps précieux pour la vie de famille et réduit la fatigue liée aux trajets pendulaires. Dans notre entreprise, nous avons repensé les journées sur site : ce ne sont plus des journées d'exécution individuelle, mais des temps forts de convivialité, d'ateliers créatifs et de réflexion collective.</p>
</div>`,
        questions: [
          {
            id: "p1-co-q1",
            prompt: "Quelle inquiétude majeure le sociologue Marc Valérien exprime-t-il au sujet du travail à distance ?",
            options: [
              "L'effritement de la culture d'entreprise et l'isolement des nouvelles recrues privées d'échanges informels.",
              "L'augmentation vertigineuse des fraudes sur le temps de travail.",
              "La hausse des coûts de connexion internet supportés par les entreprises.",
              "L'impossibilité technique d'utiliser les messageries instantanées."
            ],
            correct: 0,
            explanation: "Marc Valérien insiste sur le fait que la distance fragilise la transmission informelle et crée un sentiment d'isolement chez les recrues."
          },
          {
            id: "p1-co-q2",
            prompt: "Selon Claire Dufour (DRH), quel est le bénéfice principal apporté par la flexibilité du télétravail ?",
            options: [
              "L'économie de loyer pour les employeurs.",
              "Un temps précieux libéré pour la vie personnelle et une réduction de la fatigue liée aux transports.",
              "La suppression définitive des réunions d'évaluation annuelle.",
              "L'obligation de travailler les jours fériés."
            ],
            correct: 1,
            explanation: "Claire Dufour met en avant le temps gagné pour la famille et la réduction de l'épuisement causé par les trajets quotidiens."
          },
          {
            id: "p1-co-q3",
            prompt: "Comment l'entreprise de Claire Dufour a-t-elle réorganisé les journées en présentiel pour maintenir le lien social ?",
            options: [
              "En imposant des contrôles stricts par badgeuse toutes les deux heures.",
              "En transformant les journées sur site en temps forts d'ateliers collectifs et de convivialité.",
              "En interdisant les déjeuners entre collègues pour maximiser la production.",
              "En réservant le bureau uniquement aux membres de la direction."
            ],
            correct: 1,
            explanation: "Elle explique que les journées sur site sont désormais consacrées à la 'convivialité, d'ateliers créatifs et de réflexion collective'."
          },
          {
            id: "p1-co-q4",
            prompt: "Sur quel point les deux intervenants s'accordent-ils implicitement ?",
            options: [
              "Sur le fait que le travail à 100% au bureau est définitivement la seule solution.",
              "Sur la nécessité d'un management actif et attentif à la cohésion humaine du groupe.",
              "Sur l'inutilité totale des formations managériales modernes.",
              "Sur la suppression des contrats de travail à durée indéterminée."
            ],
            correct: 1,
            explanation: "Les deux reconnaissent que le modèle ne peut fonctionner sans une vigilance managériale active sur le lien humain."
          }
        ]
      },
      writingSubject: {
        id: "pilier-1-pe",
        title: "Lettre formelle à la Direction Générale : Négociation d'une charte de télétravail hybride et protection du droit à la déconnexion",
        targetWords: 250,
        minWords: 225,
        maxWords: 275,
        prompt: `
          <p>En tant que représentant(e) élu(e) du personnel au sein du Comité Social et Économique (CSE), vous constatez une augmentation de l'épuisement professionnel suite à l'absence de règles claires sur le télétravail.</p>
          <p>Vous écrivez une <strong>lettre formelle argumentée à la Direction Générale</strong> pour demander l'ouverture de négociations visant à établir une charte équilibrée de travail hybride (2 jours de télétravail par semaine) et des garanties strictes sur le droit à la déconnexion.</p>
        `,
        sampleAnswer: `Comité Social et Économique (CSE)
Société Novatech Solutions
25, rue de l'Innovation
75011 Paris
À l'attention de la Direction Générale

À Paris, le 12 août 2026

Objet : Demande d'ouverture de négociations pour une charte de télétravail hybride et le respect du droit à la déconnexion

Madame la Directrice Générale,

En ma qualité de représentant des salariés au Comité Social et Économique, je sollicite par la présente l'ouverture de négociations formelles afin d'encadrer la pratique du télétravail au sein de notre entreprise.

En premier lieu, force est de constater que l'absence de cadre normatif actuel génère une porosité excessive entre vie professionnelle et sphère privée. De nombreux collaborateurs rapportent des sollicitations par messagerie tard le soir ou durant les week-ends, ce qui accroît la charge mentale et les risques d'épuisement professionnel. L'instauration d'un droit effectif à la déconnexion, assorti d'une interruption des serveurs de messagerie après 19 heures, constitue une mesure d'hygiène psychologique urgente.

En second lieu, la mise en place d'un rythme hybride stabilisé à deux jours de travail à distance par semaine permettrait de conjuguer autonomie individuelle et dynamisme collectif. Loin de nuire à la performance, une telle organisation réduirait la fatigue liée aux transports tout en renforçant l'attractivité de notre société auprès des jeunes talents.

Certes, une telle transition exige une adaptation managériale ; néanmoins, nous sommes convaincus qu'un accord concerté et équitable garantira la pérennité de notre climat social.

Dans l'attente d'une rencontre prochaine, je vous prie d'agréer, Madame la Directrice Générale, mes salutations distinguées.

Le Délégué du Personnel`
      },
      thematicDrill: [
        {
          id: "p1-dr-q1",
          prompt: "Quel terme désigne la frontière floue et instable entre le temps de travail et le temps personnel ?",
          options: ["La porosité des temps", "Le dialogue social", "La rupture conventionnelle", "La préretraite progressive"],
          correct: 0,
          explanation: "La porosité des temps caractérise l'effacement de la limite claire entre vie professionnelle et vie privée."
        },
        {
          id: "p1-dr-q2",
          prompt: "Complétez : « Les salariés souhaitent que la direction ___ une véritable charte de déconnexion. »",
          options: ["adopte", "adoptera", "adopte (indicatif)", "adopterait"],
          correct: 0,
          explanation: "Le verbe 'souhaiter que' exprime une volonté et entraîne le subjonctif présent ('adopte')."
        },
        {
          id: "p1-dr-q3",
          prompt: "Quel connecteur convient le mieux pour insister sur une réalité indiscutable dans un débat ?",
          options: ["Force est de constater que", "Bien que", "À condition que", "Pourvu que"],
          correct: 0,
          explanation: "'Force est de constater que' s'emploie pour affirmer avec fermeté un constat indiscutable."
        },
        {
          id: "p1-dr-q4",
          prompt: "Comment qualifie-t-on le fait pour un salarié d'être présent à son bureau tout en étant malade ou inefficace ?",
          options: ["Le présentéisme", "Le flex-office", "Le bénévolat", "L'ubérisation"],
          correct: 0,
          explanation: "Le présentéisme désigne la présence physique excessive sans réelle efficacité productive."
        },
        {
          id: "p1-dr-q5",
          prompt: "« Les propositions au sujet ___ les partenaires sociaux ont débattu seront examinées demain. »",
          options: ["desquelles", "auxquelles", "lesquelles", "dont"],
          correct: 0,
          explanation: "'Au sujet de' + nom féminin pluriel ('les propositions') donne 'desquelles' (au sujet de + lesquelles)."
        }
      ]
    },

    // -----------------------------------------------------------------------
    // PILIER 2 : ÉCOLOGIE, TRANSITION ÉNERGÉTIQUE & URBANISME DURABLE
    // -----------------------------------------------------------------------
    {
      id: "pilier-2-ecologie-urbanisme",
      pillarIndex: 1,
      title: "Écologie, Transition énergétique & Urbanisme durable",
      theme: "L'environnement & Écologie",
      durationMin: 120,
      icon: "eco",
      color: "#2E7D32",
      badge: "Défenseur de l'Écologie Urbaine B2",
      description: "Mobilité douce, réchauffement climatique, artificialisation des sols, îlots de fraîcheur urbains, sobriété énergétique et économie circulaire.",
      vocabulary: [
        { term: "La sobriété énergétique", type: "n. f.", definition: "Réduction volontaire de la consommation d'énergie par l'évolution des modes de vie et des usages.", example: "La sobriété énergétique est le premier levier pour atteindre la neutralité carbone." },
        { term: "L'îlot de fraîcheur urbain", type: "n. m.", definition: "Zone végétalisée ou point d'eau en ville atténuant les canicules urbaines.", example: "Planter des micro-forêts urbaines crée de véritables îlots de fraîcheur salvateurs en été." },
        { term: "L'artificialisation des sols", type: "n. f.", definition: "Transformation d'un sol naturel ou agricole par des constructions, le rendant imperméable.", example: "L'objectif 'zéro artificialisation nette' vise à stopper l'étalement urbain incontrôlé." },
        { term: "La friche industrielle", type: "n. f.", definition: "Terrain autrefois occupé par des usines, actuellement abandonné et disponible pour réhabilitation.", example: "La mairie a réhabilité une friche industrielle pour y construire un éco-quartier exemplaire." },
        { term: "L'empreinte carbone", type: "n. f.", definition: "Volume total de gaz à effet de serre émis par une activité humaine ou un individu.", example: "Privilégier le train à l'avion permet de diviser par vingt son empreinte carbone." },
        { term: "L'économie circulaire", type: "n. f.", definition: "Système économique visant à recycler, réutiliser et réparer pour limiter le gaspillage des matières premières.", example: "L'économie circulaire transforme les déchets d'hier en ressources pour demain." },
        { term: "La mobilité douce", type: "n. f.", definition: "Modes de transport non motorisés ou peu polluants (vélo, marche, trottinette électrique).", example: "L'aménagement de pistes cyclables sécurisées favorise l'essor de la mobilité douce." },
        { term: "La biodiversité urbaine", type: "n. f.", definition: "Diversité des espèces végétales et animales vivant dans l'espace des villes.", example: "La suppression des pesticides dans les parcs a permis le retour d'une riche biodiversité urbaine." },
        { term: "L'obsolescence programmée", type: "n. f.", definition: "Stratégie industrielle réduisant délibérément la durée de vie d'un produit pour pousser au rachat.", example: "La loi punit désormais l'obsolescence programmée des appareils électroménagers." },
        { term: "L'éco-quartier", type: "n. m.", definition: "Zone urbaine conçue selon les normes les plus strictes de durabilité environnementale et sociale.", example: "Cet éco-quartier recycle 100% de ses eaux pluviales et produit sa propre électricité solaire." },
        { term: "La rénovation thermique", type: "n. f.", definition: "Travaux d'isolation d'un bâtiment permettant de réduire ses déperditions de chaleur.", example: "La rénovation thermique des passoires thermiques est une priorité nationale." },
        { term: "La transition agroécologique", type: "n. f.", definition: "Évolution vers une agriculture respectueuse des écosystèmes et sans produits phytosanitaires de synthèse.", example: "La transition agroécologique garantit la souveraineté alimentaire et la santé des sols." },
        { term: "Le dérèglement climatique", type: "n. m.", definition: "Modification durable des équilibres climatiques mondiaux provoquée par les activités humaines.", example: "La multiplication des sécheresses extrêmes est une manifestation du dérèglement climatique." },
        { term: "La pollution atmosphérique", type: "n. f.", definition: "Altération de la pureté de l'air par des particules fines et des gaz toxiques.", example: "La pollution atmosphérique est responsable de milliers de décès prématurés chaque année." },
        { term: "Les énergies renouvelables", type: "n. f. pl.", definition: "Sources d'énergie inépuisables à l'échelle humaine (solaire, éolien, hydraulique, géothermie).", example: "Le mix énergétique national intègre une part croissante d'énergies renouvelables." },
        { term: "La compensation carbone", type: "n. f.", definition: "Mécanisme financier finançant des projets écologiques pour neutraliser des émissions incompressibles.", example: "La compensation carbone ne doit pas dispenser les entreprises de réduire d'abord leurs rejets à la source." }
      ],
      connectors: [
        { connector: "Certes... néanmoins", usage: "Admet une concession avant d'opposer un argument plus fort.", example: "Certes, le coût de la transition est élevé, néanmoins l'inaction écologique coûterait dix fois plus cher." },
        { connector: "Loin s'en faut", usage: "Affirme énergiquement qu'on est très éloigné de la vérité énoncée.", example: "La ville est-elle prête à affronter les canicules ? Loin s'en faut, le bitume prédomine encore." },
        { connector: "Dès lors", usage: "Tire une conséquence directe et logique.", example: "Dès lors, il devient impératif de végétaliser les cours d'écoles." },
        { connector: "Il n'en demeure pas moins que...", usage: "Réaffirme la vérité fondamentale.", example: "Malgré les progrès technologiques, il n'en demeure pas moins que la sobriété reste incontournable." },
        { connector: "Pour peu que (+ subjonctif)", usage: "Pose une condition minimale suffisante.", example: "La biodiversité peut renaître rapidement, pour peu que nous laissions la nature s'exprimer." },
        { connector: "Dans la mesure où", usage: "Exprime une cause explicative fondée sur un constat.", example: "Dans la mesure où les transports représentent 30% des émissions, le vélo doit être priorisé." }
      ],
      pressArticle: {
        id: "pilier-2-art",
        title: "Villes résilientes : repenser l'urbanisme face aux canicules à répétition",
        source: "Le Monde Planète — Dossier Écologie Urbaine",
        wordCount: 480,
        text: `
          <p>Avec des étés où le thermomètre dépasse régulièrement les 40 degrés dans les cœurs de métropoles, le concept d'îlot de chaleur urbain a quitté le jargon des météorologues pour s'imposer comme une urgence sanitaire majeure. Dans des cités presque intégralement minéralisées où le béton et l'asphalte accumulent la chaleur le jour pour la restituer la nuit, les températures nocturnes peuvent excéder de 6 à 8 degrés celles des campagnes périphériques. Face à ce piège thermique étouffant, les urbanistes préconisent une mutation radicale du tissu urbain.</p>
          <p>La solution la plus efficace et la plus accessible consiste à désimperméabiliser massivement les sols et à réintroduire le végétal sous toutes ses formes. Transformer les cours d'école en cours oasis boisées, planter des micro-forêts urbaines à forte densité et réhabiliter les friches ferroviaires permet de créer des corridors écologiques et des zones d'évapotranspiration salvatrices. L'ombre des arbres feuillus couplée à l'eau de pluie filtrée par le sol permet d'abaisser localement la température ressentie de 3 à 5 degrés en plein midi.</p>
          <p>Cependant, la végétalisation ne saurait suffire sans une remise en cause courageuse de la place accordée à l'automobile individuelle. Les parkings en surface et les voiries bitumées accaparent jusqu'à 50% de l'espace public dans certaines agglomérations. Remplacer ces surfaces imperméables par des voies piétonnes, des pistes cyclables ombragées et des jardins partagés nécessite une volonté politique constante face aux réticences de certains automobilistes.</p>
          <p>En somme, bâtir une ville résiliente n'est pas un luxe esthétique, mais l'unique condition pour que les milieux urbains demeurent habitables et solidaires au XXIe siècle.</p>
        `,
        questions: [
          {
            id: "p2-art-q1",
            prompt: "Quel phénomène physique explique l'écart de température nocturne entre les métropoles minérales et les zones rurales ?",
            options: [
              "L'accumulation de chaleur par le béton et l'asphalte durant la journée, restituée durant la nuit.",
              "L'absence totale de vent dans les régions du sud de la France.",
              "L'utilisation intensive de la climatisation par les entreprises de bureaux.",
              "La proximité immédiate des mers et des océans réchauffés."
            ],
            correct: 0,
            explanation: "Le premier paragraphe explique que le béton et l'asphalte 'accumulent la chaleur le jour pour la restituer la nuit'."
          },
          {
            id: "p2-art-q2",
            prompt: "Selon l'article, par quel mécanisme naturel les arbres permettent-ils de faire baisser la température ressentie en ville ?",
            options: [
              "Par l'absorption des ondes électromagnétiques émises par les antennes relais.",
              "Par leur ombre protectrice et le phénomène d'évapotranspiration.",
              "Par la production exclusive d'azote pur dans l'atmosphère.",
              "En arrêtant totalement la pluie au-dessus des habitations."
            ],
            correct: 1,
            explanation: "L'auteur met en avant 'l'ombre des arbres feuillus couplée à l'eau de pluie filtrée' et les 'zones d'évapotranspiration salvatrices'."
          },
          {
            id: "p2-art-q3",
            prompt: "Quel obstacle majeur à la végétalisation des villes est dénoncé dans le troisième paragraphe ?",
            options: [
              "Le coût excessif de l'achat des graines et des jeunes pousses d'arbres.",
              "L'accaparement de l'espace public par l'automobile individuelle et les parkings bitumés.",
              "L'interdiction légale de planter des arbres dans les capitales régionales.",
              "Le manque d'intérêt de la population citadine pour la nature."
            ],
            correct: 1,
            explanation: "L'article souligne que 'les parkings en surface et les voiries bitumées accaparent jusqu'à 50% de l'espace public'."
          },
          {
            id: "p2-art-q4",
            prompt: "Quelle transformation des cours d'écoles est mise en avant comme exemple de réussite urbaine ?",
            options: [
              "Leur transformation en parkings souterrains payants.",
              "Leur réaménagement en cours oasis végétalisées et désimperméabilisées.",
              "La pose d'une couche supplémentaire de bitume anti-dérapant.",
              "L'installation de toits fermés en plexiglas hermétique."
            ],
            correct: 1,
            explanation: "Le texte propose explicitement de 'transformer les cours d'école en cours oasis boisées'."
          },
          {
            id: "p2-art-q5",
            prompt: "Quelle est la conclusion générale de l'article sur la résilience urbaine ?",
            options: [
              "Elle constitue une dépense superflue qui aggrave la dette des collectivités locales.",
              "Elle représente l'unique condition pour que les villes demeurent habitables face au dérèglement climatique.",
              "Elle ne concerne que les métropoles côtières exposées aux tempêtes marines.",
              "Elle doit être repoussée à la deuxième moitié du siècle prochain."
            ],
            correct: 1,
            explanation: "Le dernier paragraphe conclut que bâtir une ville résiliente est 'l'unique condition pour que les milieux urbains demeurent habitables et solidaires'."
          }
        ]
      },
      listeningDebate: {
        title: "Débat environnemental : Les Zones à Faibles Émissions (ZFE) et l'interdiction des véhicules thermiques",
        duration: "09:15",
        transcript: `<div class="transcript-text">
<p><strong>Journaliste :</strong> Les Zones à Faibles Émissions (ZFE), qui interdisent progressivement l'accès des centres-villes aux véhicules les plus polluants, suscitent une vive controverse. Mesure de santé publique indispensable pour les uns, injustice sociale flagrante pour les autres. Écoutons nos invités.</p>
<p><strong>Antoine Bernard (Élu à la transition écologique) :</strong> Rappelons un chiffre tragique : la pollution aux particules fines tue plus de 40 000 personnes par an en France. Dans la mesure où les moteurs diesel anciens sont les premiers émetteurs d'oxydes d'azote en milieu urbain, interdire leur circulation dans les zones denses est un devoir éthique et sanitaire non négociable.</p>
<p><strong>Nathalie Morel (Représentante d'une association d'automobilistes et de banlieusards) :</strong> Certes, monsieur Bernard, respirer un air pur est un droit légitime. Mais comment fait l'ouvrier ou l'aide-soignante qui habite à 30 kilomètres du centre, faute de transports en commun adaptés, et qui n'a pas les moyens d'acheter un véhicule électrique à 35 000 euros ? Sans aides massives et alternatives ferroviaires fiables, la ZFE s'apparente à une ségrégation spatiale intolérable !</p>
</div>`,
        questions: [
          {
            id: "p2-co-q1",
            prompt: "Quel argument sanitaire principal l'élu Antoine Bernard avance-t-il pour justifier les ZFE ?",
            options: [
              "La pollution atmosphérique provoque plus de 40 000 décès prématurés par an en France.",
              "La circulation automobile abîme les monuments historiques du centre-ville.",
              "Les véhicules électriques permettent d'économiser sur les amendes de stationnement.",
              "Le diesel attire les moustiques tigres dans les zones urbaines."
            ],
            correct: 0,
            explanation: "Antoine Bernard rappelle que 'la pollution aux particules fines tue plus de 40 000 personnes par an en France'."
          },
          {
            id: "p2-co-q2",
            prompt: "Quelle objection sociale majeure Nathalie Morel oppose-t-elle à cette réglementation ?",
            options: [
              "Le manque d'aides financières pour les travailleurs modestes des périphéries qui ne peuvent pas acheter de véhicule électrique.",
              "Le fait que les voitures électriques fassent trop de bruit la nuit.",
              "L'absence totale de stations-service dans les centres commerciaux.",
              "La vitesse excessive des pistes cyclables en centre-ville."
            ],
            correct: 0,
            explanation: "Nathalie Morel dénonce le coût inaccessible des véhicules propres pour les travailleurs résidant loin des transports en commun."
          },
          {
            id: "p2-co-q3",
            prompt: "Quelle solution indispensable Nathalie Morel préconise-t-elle pour éviter une ségrégation territoriale ?",
            options: [
              "Supprimer purement et simplement le code de la route pour les banlieusards.",
              "Mettre en place des aides financières massives et des alternatives ferroviaires fiables.",
              "Obliger tous les habitants des périphéries à déménager dans les centres-villes.",
              "Interdire aux aides-soignantes de travailler en horaire décalé."
            ],
            correct: 1,
            explanation: "Elle réclame 'des aides massives et des alternatives ferroviaires fiables' avant toute interdiction punitive."
          },
          {
            id: "p2-co-q4",
            prompt: "Quel est l'enjeu sous-jacent au cœur de ce débat entre les deux intervenants ?",
            options: [
              "Concilier l'urgence de santé publique environnementale et la justice sociale pour les classes populaires.",
              "Déterminer la couleur obligatoire des futures voitures électriques.",
              "Supprimer définitivement l'ensemble des hôpitaux des centres-villes.",
              "Augmenter le prix du stationnement dans les aéroports."
            ],
            correct: 0,
            explanation: "Le débat illustre la tension fondamentale entre transition écologique vitale et équité sociale pour les populations dépendantes de la voiture."
          }
        ]
      },
      writingSubject: {
        id: "pilier-2-pe",
        title: "Lettre formelle au Maire : Contestation d'un projet de centre commercial et proposition de création d'une forêt urbaine",
        targetWords: 250,
        minWords: 225,
        maxWords: 275,
        prompt: `
          <p>Vous apprenez que la municipalité projette de raser un bois de deux hectares situé en périphérie de votre quartier pour y implanter une zone commerciale et un parking bitumé.</p>
          <p>En tant que président(e) de l'association « Préservons Notre Cadre de Vie », vous rédigez une <strong>lettre formelle argumentée à Monsieur le Maire</strong> pour contester ce projet et proposer la sanctuarisation du site sous forme d'un parc écologique citoyen.</p>
        `,
        sampleAnswer: `Association « Préservons Notre Cadre de Vie »
8, rue des Chênes Verts
33000 Bordeaux
Monsieur le Maire
Hôtel de Ville
Place Pey-Berland
33000 Bordeaux

À Bordeaux, le 18 août 2026

Objet : Contestation du projet de zone commerciale et proposition de sanctuarisation d'une forêt urbaine

Monsieur le Maire,

Au nom des riverains et des adhérents de l'association « Préservons Notre Cadre de Vie », je me permets de vous adresser ce courrier afin de vous faire part de notre vive opposition au projet de destruction de l'espace boisé de la plaine Nord au profit d'un complexe commercial.

En premier lieu, à l'heure où les canicules et les sécheresses se multiplient, ce massif boisé constitue un îlot de fraîcheur irremplaçable pour l'ensemble du quartier. Sa suppression et l'imperméabilisation de deux hectares de terres fertiles aggraveraient considérablement les risques d'inondation en cas d'orages violents et accentueraient la pollution de l'air.

En second lieu, force est de constater que le tissu commercial de notre centre-ville souffre déjà d'une concurrence féroce. Créer une nouvelle zone périphérique risquerait d'accélérer la désertification de nos boutiques de proximité tout en accroissant le trafic automobile.

Certes, nous comprenons la volonté municipale de stimuler l'attractivité économique ; néanmoins, nous vous suggérons de réorienter les investissements vers la réhabilitation des friches existantes et de transformer le bois en réserve pédagogique et citoyenne.

Dans l'attente d'une concertation que nous espérons constructive, je vous prie d'agréer, Monsieur le Maire, l'expression de ma haute considération.

Le Président de l'Association`
      },
      thematicDrill: [
        {
          id: "p2-dr-q1",
          prompt: "Quel terme désigne la transformation d'un sol naturel en sol bâti et imperméable ?",
          options: ["L'artificialisation des sols", "La sobriété énergétique", "La compensation carbone", "L'évapotranspiration"],
          correct: 0,
          explanation: "L'artificialisation des sols est la perte de sols naturels au profit de constructions ou de bitume."
        },
        {
          id: "p2-dr-q2",
          prompt: "Quel connecteur exprime une condition minimale suffisante suivie du subjonctif ?",
          options: ["Pour peu que", "Même si", "Dès lors", "En conséquence"],
          correct: 0,
          explanation: "'Pour peu que' introduit une condition suffisante et requiert toujours le subjonctif."
        },
        {
          id: "p2-dr-q3",
          prompt: "Complétez : « Bien que les citoyens ___ conscients du dérèglement, les habitudes changent lentement. »",
          options: ["soient", "sont", "seront", "seraient"],
          correct: 0,
          explanation: "Après la conjonction 'bien que', le subjonctif ('soient') est grammaticalement obligatoire."
        },
        {
          id: "p2-dr-q4",
          prompt: "Que désigne un éco-quartier ?",
          options: [
            "Une zone urbaine conçue pour minimiser son impact environnemental et favoriser la mixité sociale.",
            "Un parking réservé uniquement aux voitures de luxe.",
            "Une zone commerciale sans aucun espace vert.",
            "Un quartier où l'éclairage public est totalement supprimé la nuit."
          ],
          correct: 0,
          explanation: "Un éco-quartier intègre haute performance énergétique, mobilité douce, gestion de l'eau et cadre de vie solidaire."
        },
        {
          id: "p2-dr-q5",
          prompt: "« Les parcs publics au sein ___ la biodiversité prospère doivent être protégés. »",
          options: ["desquels", "auxquels", "lesquels", "dont"],
          correct: 0,
          explanation: "'Au sein de' + nom masculin pluriel ('les parcs') se contracte en 'desquels' (au sein de + lesquels)."
        }
      ]
    },

    // -----------------------------------------------------------------------
    // PILIER 3 : ÉDUCATION, JEUNESSE, NUMÉRIQUE & ESPRIT CRITIQUE
    // -----------------------------------------------------------------------
    {
      id: "pilier-3-education-numerique",
      pillarIndex: 2,
      title: "Éducation, Jeunesse, Numérique & Esprit critique",
      theme: "Les études & Éducation",
      durationMin: 120,
      icon: "school",
      color: "#7B1FA2",
      badge: "Pédagogue & Esprit Critique Numérique B2",
      description: "Écrans à l'école, intelligence artificielle pédagogique, lutte contre les infox (fake news), émancipation numérique, orientation et pensée critique.",
      vocabulary: [
        { term: "L'émancipation numérique", type: "n. f.", definition: "Capacité d'un individu à comprendre, maîtriser et utiliser les technologies de manière critique et éclairée.", example: "L'émancipation numérique permet aux élèves de ne pas être de simples consommateurs passifs d'algorithmes." },
        { term: "L'esprit critique", type: "n. m.", definition: "Attitude intellectuelle consistant à évaluer la validité d'une information avant de l'admettre comme vraie.", example: "Développer l'esprit critique est le meilleur rempart contre les thèses complotistes." },
        { term: "La désinformation (infox)", type: "n. f.", definition: "Diffusion délibérée de fausses nouvelles dans l'intention de tromper l'opinion publique.", example: "Les réseaux sociaux sont devenus le terreau fertile de la désinformation à grande échelle." },
        { term: "Le cyberharcèlement", type: "n. m.", definition: "Pratique consistant à harceler, menacer ou humilier une personne par des moyens numériques.", example: "La lutte contre le cyberharcèlement scolaire fait l'objet de campagnes de sensibilisation nationales." },
        { term: "La fracture numérique", type: "n. f.", definition: "Disparités d'accès aux technologies et aux compétences informatiques selon le milieu social ou l'âge.", example: "L'absence d'ordinateurs dans certains foyers défavorisés renforce la fracture numérique scolaire." },
        { term: "L'apprentissage personnalisé", type: "n. m.", definition: "Méthode pédagogique adaptant le rythme et les exercices au niveau spécifique de chaque apprenant.", example: "Les tuteurs numériques permettent un apprentissage personnalisé très efficace pour les élèves en difficulté." },
        { term: "L'IA générative", type: "n. f.", definition: "Système algorithmique capable de produire des textes, images ou codes sur simple consigne textuelle.", example: "L'arrivée de l'IA générative oblige les enseignants à repenser les devoirs à la maison." },
        { term: "La surcharge informationnelle", type: "n. f.", definition: "Excès d'informations reçues dépassant la capacité de traitement du cerveau humain (infobésité).", example: "La surcharge informationnelle génère de la fatigue cognitive et diminue l'attention soutenue." },
        { term: "La citoyenneté numérique", type: "n. f.", definition: "Comportement éthique, responsable et respectueux des lois sur internet et les réseaux sociaux.", example: "L'éducation à la citoyenneté numérique doit commencer dès l'école primaire." },
        { term: "Le décrochage scolaire", type: "n. m.", definition: "Interruption prématurée du cursus scolaire sans obtention de diplôme ou de qualification.", example: "Le mentorat individuel est un outil efficace pour prévenir le décrochage scolaire des adolescents." },
        { term: "La littératie médiatique", type: "n. f.", definition: "Aptitude à accéder aux médias, à comprendre leur fonctionnement et à en évaluer les sources.", example: "Des ateliers de littératie médiatique apprennent aux élèves à vérifier les sources journalistiques." },
        { term: "L'addiction aux écrans", type: "n. f.", definition: "Dépendance comportementale excessive à l'utilisation des smartphones, jeux vidéo ou tablettes.", example: "L'addiction aux écrans chez les jeunes perturbe gravement les cycles de sommeil réparateur." },
        { term: "L'autonomie de l'apprenant", type: "n. f.", definition: "Capacité d'un étudiant à organiser seul ses révisions et à piloter son apprentissage.", example: "La classe inversée favorise l'autonomie de l'apprenant par un travail préparatoire individuel." },
        { term: "L'hybridation des cours", type: "n. f.", definition: "Combinaison pédagogique d'enseignements magistraux en présence et de modules interactifs en ligne.", example: "L'université a validé l'hybridation des cours de licence pour faciliter les études des étudiants salariés." },
        { term: "Le pluralisme de l'information", type: "n. m.", definition: "Diversité des opinions, des sources et des courants de pensée représentés dans les médias.", example: "Le pluralisme de l'information est la garantie démocratique d'un débat public sain." },
        { term: "L'égalité des chances", type: "n. f.", definition: "Principe selon lequel chaque individu doit avoir les mêmes opportunités de réussite indépendamment de son origine.", example: "L'école de la République a pour mission cardinale de restaurer l'égalité des chances." }
      ],
      connectors: [
        { connector: "Non seulement... mais encore", usage: "Associe deux arguments complémentaires en amplifiant le second.", example: "Non seulement l'esprit critique protège des infox, mais il forge encore des citoyens éclairés." },
        { connector: "En l'occurrence", usage: "Précise le cas particulier dont il est question dans la démonstration.", example: "En l'occurrence, l'usage des smartphones en classe distrait les élèves de l'écoute du professeur." },
        { connector: "Par voie de conséquence", usage: "Introduit une conséquence directe et inéluctable.", example: "Le manque d'évaluation critique entraîne, par voie de conséquence, la propagation de fausses rumeurs." },
        { connector: "D'une part... d'autre part", usage: "Structure une argumentation bilatérale équilibrée.", example: "D'une part, le numérique enrichit les supports de cours ; d'autre part, il exige une vigilance éthique." },
        { connector: "Force est de reconnaître que...", usage: "Admet une vérité avec rigueur et honnêteté intellectuelle.", example: "Force est de reconnaître que l'intelligence artificielle révolutionne la recherche documentaire." },
        { connector: "Eu égard à (+ nom)", usage: "Introduit une justification en tenant compte d'un élément déterminant.", example: "Eu égard aux risques de cyberharcèlement, des sanctions sévères doivent être appliquées." }
      ],
      pressArticle: {
        id: "pilier-3-art",
        title: "Faut-il bannir les smartphones des établissements scolaires ? Le dilemme républicain",
        source: "Le Monde de l'Éducation — Enquête Pédagogique",
        wordCount: 460,
        text: `
          <p>Faut-il faire de l'école un sanctuaire déconnecté ou le lieu d'apprentissage privilégié de la citoyenneté numérique ? Alors que plusieurs pays européens renforcent l'interdiction stricte des téléphones portables du primaire au lycée, la communauté éducative française demeure profondément divisée sur l'attitude à adopter face à ces terminaux omniprésents dans les poches des adolescents.</p>
          <p>Les partisans de la prohibition absolue s'appuient sur un faisceau d'études neuroscientifiques alarmantes. L'exposition continue aux notifications des réseaux sociaux fragmente l'attention des élèves, diminue leur capacité de mémorisation profonde et réduit drastiquement les interactions spontanées durant les récréations. De surcroît, le smartphone constitue le vecteur quasi exclusif du cyberharcèlement, dont la violence verbale se poursuit désormais dans la cour de récréation sous forme d'enregistrements sauvages ou de moqueries collectives.</p>
          <p>À l'inverse, de nombreux enseignants et sociologues jugent l'interdiction illusoire et contre-productive. Dans une société où le numérique irrigue chaque pan de la vie professionnelle et citoyenne, le rôle fondamental de l'institution scolaire ne saurait être d'ignorer la technologie, mais d'apprendre aux jeunes à la dompter. Intégrer raisonnablement le smartphone dans des projets pédagogiques ciblés (recherches documentaires supervisées, vérification des sources, production de podcasts) permet de transformer un objet de distraction compulsive en un formidable levier d'émancipation intellectuelle.</p>
          <p>En définitive, plutôt qu'une vaine guerre de tranchées contre les algorithmes, l'école doit forger l'esprit critique des élèves pour en faire des acteurs libres et éclairés du monde numérique.</p>
        `,
        questions: [
          {
            id: "p3-art-q1",
            prompt: "Selon les études neuroscientifiques citées dans l'article, quel est l'effet des notifications permanentes sur les élèves ?",
            options: [
              "Elles augmentent leur vitesse de lecture sans aucune perte de compréhension.",
              "Elles fragmentent l'attention et diminuent la capacité de mémorisation profonde.",
              "Elles améliorent les relations amicales entre les élèves de différentes classes.",
              "Elles remplacent totalement le besoin de sommeil chez les adolescents."
            ],
            correct: 1,
            explanation: "Le second paragraphe indique que les notifications 'fragmentent l'attention des élèves' et 'diminuent leur capacité de mémorisation profonde'."
          },
          {
            id: "p3-art-q2",
            prompt: "Quel phénomène néfaste est amplifié par l'utilisation non régulée des smartphones à l'école ?",
            options: [
              "La tricherie aux épreuves de gymnastique.",
              "Le cyberharcèlement et la captation d'images non autorisées dans la cour.",
              "La disparition des manuels scolaires imprimés.",
              "Le vol de nourriture à la cantine scolaire."
            ],
            correct: 1,
            explanation: "Le texte souligne que 'le smartphone constitue le vecteur quasi exclusif du cyberharcèlement' et d'enregistrements sauvages."
          },
          {
            id: "p3-art-q3",
            prompt: "Pour quelle raison certains pédagogues s'opposent-ils à l'interdiction totale des téléphones ?",
            options: [
              "Parce que les téléphones coûtent trop cher pour être confisqués.",
              "Parce que l'école a le devoir d'éduquer les jeunes à un usage responsable et critique du numérique plutôt que de l'ignorer.",
              "Parce que les parents exigent d'appeler leurs enfants pendant les cours de mathématiques.",
              "Parce que les professeurs n'ont plus envie de faire cours sans internet."
            ],
            correct: 1,
            explanation: "Le troisième paragraphe explique que le rôle de l'école est 'd'apprendre aux jeunes à dompter' la technologie par des projets pédagogiques ciblés."
          },
          {
            id: "p3-art-q4",
            prompt: "Quels usages pédagogiques positifs du smartphone sont mentionnés par les enseignants ?",
            options: [
              "Jouer à des jeux vidéo multijoueurs pendant les pauses.",
              "La recherche documentaire supervisée, la vérification des sources et la création de contenus audio.",
              "L'achat en ligne de fournitures scolaires pendant la récréation.",
              "La notation anonyme des enseignants sur les réseaux sociaux."
            ],
            correct: 1,
            explanation: "L'article cite expressément 'recherches documentaires supervisées, vérification des sources, production de podcasts'."
          },
          {
            id: "p3-art-q5",
            prompt: "Quelle est la mission cardinale de l'école réaffirmée dans la conclusion ?",
            options: [
              "Supprimer définitivement l'accès à internet sur l'ensemble du territoire national.",
              "Forger l'esprit critique pour former des citoyens libres et éclairés face au numérique.",
              "Confier l'enseignement des langues vivantes à des intelligences artificielles.",
              "Interdire toute forme de débat philosophique dans les classes de lycée."
            ],
            correct: 1,
            explanation: "L'article conclut que l'école doit 'forger l'esprit critique des élèves pour en faire des acteurs libres et éclairés du monde numérique'."
          }
        ]
      },
      listeningDebate: {
        title: "Table ronde : L'intelligence artificielle générative dans les devoirs scolaires : triche ou opportunité ?",
        duration: "08:45",
        transcript: `<div class="transcript-text">
<p><strong>Présentateur :</strong> L'arrivée de robots conversationnels capables de rédiger une dissertation en cinq secondes affole le monde enseignant. Faut-il y voir la mort de la pensée personnelle ou le début d'une nouvelle pédagogie ? Débat avec nos deux experts.</p>
<p><strong>Isabelle Renoir (Professeure de lettres modernes) :</strong> Si l'élève délègue la rédaction intégrale de ses textes à une machine, il perd l'effort intellectuel d'articulation de la pensée, la recherche lexicale et l'apprentissage de la nuance. L'évaluation sommative traditionnelle perd alors tout son sens.</p>
<p><strong>Karim Benali (Chercheur en sciences de l'éducation) :</strong> Je comprends l'inquiétude, mais la calculatrice n'a pas tué les mathématiques ! L'IA oblige les enseignants à déplacer l'évaluation : au lieu de demander un devoir descriptif à la maison, on demande à l'élève d'analyser en classe les erreurs de l'IA, de repérer ses hallucinations et de perfectionner son style personnel. C'est précisément cela, l'éducation à l'esprit critique.</p>
</div>`,
        questions: [
          {
            id: "p3-co-q1",
            prompt: "Quelle conséquence néfaste Isabelle Renoir craint-elle si les devoirs sont confiés à l'IA ?",
            options: [
              "La perte de l'effort intellectuel de réflexion personnelle et d'apprentissage de la nuance.",
              "La surchauffe des ordinateurs portables de l'établissement.",
              "La disparition des bibliothèques municipales.",
              "L'obligation de payer un abonnement mensuel par élève."
            ],
            correct: 0,
            explanation: "Elle s'inquiète que l'élève perde 'l'effort intellectuel d'articulation de la pensée, la recherche lexicale et l'apprentissage de la nuance'."
          },
          {
            id: "p3-co-q2",
            prompt: "Quelle analogie historique Karim Benali utilise-t-il pour relativiser la panique liée à l'IA ?",
            options: [
              "L'invention de l'imprimerie par Gutenberg.",
              "L'apparition de la calculatrice qui n'a pas détruit l'enseignement des mathématiques.",
              "La découverte de la radioactivité par Marie Curie.",
              "La création des premiers chemins de fer au XIXe siècle."
            ],
            correct: 1,
            explanation: "Il affirme expressément que 'la calculatrice n'a pas tué les mathématiques' pour illustrer l'adaptation pédagogique."
          },
          {
            id: "p3-co-q3",
            prompt: "Quelle nouvelle approche d'évaluation Karim Benali préconise-t-il en classe ?",
            options: [
              "Supprimer toute forme d'examen écrit ou oral.",
              "Faire analyser de manière critique les réponses produites par l'IA pour déceler ses biais et erreurs.",
              "Interdire aux élèves de parler pendant les cours.",
              "Noter uniquement la vitesse de frappe sur le clavier."
            ],
            correct: 1,
            explanation: "Il propose d'entraîner l'élève à 'analyser en classe les erreurs de l'IA, de repérer ses hallucinations et de perfectionner son style'."
          },
          {
            id: "p3-co-q4",
            prompt: "Sur quel objectif ultime les deux intervenants s'entendent-ils ?",
            options: [
              "L'apprentissage d'une pensée autonome et critique par les élèves.",
              "L'achat obligatoire d'une tablette tactile par chaque famille.",
              "La fermeture des lycées généraux au profit de l'apprentissage manuel.",
              "Le remplacement des enseignants par des assistants virtuels."
            ],
            correct: 0,
            explanation: "Tous deux placent la maîtrise d'une pensée critique et indépendante au sommet des priorités éducatives."
          }
        ]
      },
      writingSubject: {
        id: "pilier-3-pe",
        title: "Contribution au forum citoyen : Faut-il introduire une formation obligatoire aux médias et à l'esprit critique dès le collège ?",
        targetWords: 250,
        minWords: 225,
        maxWords: 275,
        prompt: `
          <p>Vous participez à une consultation citoyenne organisée par le Ministère de l'Éducation Nationale sur la réforme des programmes scolaires.</p>
          <p>Vous rédigez un <strong>article d'opinion argumenté</strong> pour défendre l'instauration d'un enseignement obligatoire de littératie médiatique et de déconstruction des fausses informations dès la classe de sixième.</p>
        `,
        sampleAnswer: `Pour une éducation aux médias et à l'esprit critique au cœur de l'école républicaine

À l'heure où les algorithmes des plateformes numériques façonnent la vision du monde de notre jeunesse, l'instauration d'un enseignement obligatoire de littératie médiatique dès le collège ne constitue plus une simple option pédagogique, mais une ardente nécessité démocratique.

En premier lieu, les adolescents sont quotidiennement confrontés à un flux ininterrompu d'infox et de contenus sensationnalistes conçus pour susciter des réactions émotionnelles immédiates. Faute d'outils méthodologiques pour vérifier la fiabilité d'une source ou identifier un montage vidéo manipulatoire, nombre de collégiens deviennent les relais involontaires de théories conspirationnistes. Leur apprendre à décrypter les mécanismes de fabrication de l'information constitue le rempart le plus efficace pour préserver leur liberté de jugement.

En second lieu, l'essor fulgurant des intelligences artificielles génératives transforme radicalement notre rapport au savoir. Loin de diaboliser ces technologies, l'institution scolaire a le devoir d'enseigner aux élèves comment les utiliser avec discernement. Savoir formuler une requête rigoureuse, en débusquer les biais idéologiques et compléter les lacunes algorithmiques par des lectures approfondies sont autant de compétences indispensables pour leur insertion professionnelle future.

Certes, les emplois du temps sont déjà denses ; néanmoins, cet apprentissage transversal peut s'intégrer harmonieusement aux cours d'histoire, de français et de sciences.

En définitive, investir dans l'esprit critique de nos enfants, c'est garantir la vitalité et la souveraineté de notre démocratie de demain.

Un citoyen engagé`
      },
      thematicDrill: [
        {
          id: "p3-dr-q1",
          prompt: "Quel terme désigne la diffusion délibérée de fausses nouvelles pour tromper l'opinion publique ?",
          options: ["La désinformation (infox)", "L'émancipation numérique", "La littératie médiatique", "La classe inversée"],
          correct: 0,
          explanation: "La désinformation est l'acte délibéré de propager de fausses informations pour manipuler l'opinion."
        },
        {
          id: "p3-dr-q2",
          prompt: "Complétez : « Il est indispensable que chaque élève ___ distinguer une source scientifique d'une rumeur. »",
          options: ["sache", "sait", "saura", "saurait"],
          correct: 0,
          explanation: "L'expression impersonnelle de nécessité 'Il est indispensable que' exige le subjonctif ('sache' du verbe savoir)."
        },
        {
          id: "p3-dr-q3",
          prompt: "Quel articulateur de discours permet d'associer deux éléments en amplifiant le second ?",
          options: ["Non seulement... mais encore", "Certes... néanmoins", "À défaut de", "Au lieu de"],
          correct: 0,
          explanation: "'Non seulement... mais encore' marque une gradation affirmative percutante."
        },
        {
          id: "p3-dr-q4",
          prompt: "Que désigne l'infobésité ou surcharge informationnelle ?",
          options: [
            "L'excès d'informations reçues qui dépasse la capacité de traitement du cerveau.",
            "Le poids excessif des cartables scolaires des élèves.",
            "L'augmentation du nombre de téléviseurs par foyer.",
            "La consommation excessive de vidéos culinaires en ligne."
          ],
          correct: 0,
          explanation: "L'infobésité est la saturation cognitive provoquée par un flux excessif et ininterrompu d'informations."
        },
        {
          id: "p3-dr-q5",
          prompt: "« Les ateliers d'esprit critique ___ les collégiens ont participé ont été très formateurs. »",
          options: ["auxquels", "desquels", "lesquels", "dont"],
          correct: 0,
          explanation: "On dit 'participer à'. Avec le nom masculin pluriel 'les ateliers', la contraction donne 'auxquels'."
        }
      ]
    },

    // -----------------------------------------------------------------------
    // PILIER 4 : SOCIÉTÉ, CITOYENNETÉ, SOLIDARITÉ & VIVRE-ENSEMBLE
    // -----------------------------------------------------------------------
    {
      id: "pilier-4-societe-solidarite",
      pillarIndex: 3,
      title: "Société, Citoyenneté, Solidarité & Vivre-ensemble",
      theme: "Relations sociales",
      durationMin: 120,
      icon: "diversity_3",
      color: "#C2185B",
      badge: "Porte-Parole Citoyen & Solidaire B2",
      description: "Engagement associatif, liens intergénérationnels, parité et égalité femmes-hommes, inclusion sociale, démocratie participative et lutte contre l'isolement.",
      vocabulary: [
        { term: "L'engagement bénévole", type: "n. m.", definition: "Action volontaire non rémunérée au service d'une cause d'intérêt général ou d'une association.", example: "L'engagement bénévole des citoyens a permis de distribuer des milliers de repas aux sans-abri." },
        { term: "Le lien intergénérationnel", type: "n. m.", definition: "Relations d'entraide, de partage et de complicité entre personnes de tranches d'âge différentes.", example: "Les résidences partagées renforcent le lien intergénérationnel entre aînés et étudiants." },
        { term: "La cohésion sociale", type: "n. f.", definition: "État de solidarité et d'harmonie unissant les membres d'une communauté ou d'une nation.", example: "La réduction des inégalités économiques est le garant indispensable de la cohésion sociale." },
        { term: "Le plafond de verre", type: "n. m.", definition: "Barrière invisible freinant la promotion des femmes aux postes à haute responsabilité.", example: "Les lois sur les quotas en entreprise visent à briser définitivement le plafond de verre." },
        { term: "La parité professionnelle", type: "n. f.", definition: "Égalité parfaite du nombre de femmes et d'hommes dans les instances professionnelles et politiques.", example: "La parité professionnelle dans les comités de direction est devenue une obligation légale." },
        { term: "L'inclusion sociale", type: "n. f.", definition: "Processus garantissant à toute personne vulnérable ou handicapée une place pleine et entière dans la société.", example: "L'accessibilité des transports publics est un levier majeur d'inclusion sociale." },
        { term: "L'isolement relationnel", type: "n. m.", definition: "Situation d'une personne souffrant d'un manque criant de contacts humains réguliers.", example: "La lutte contre l'isolement relationnel des personnes âgées est une grande cause nationale." },
        { term: "La démocratie participative", type: "n. f.", definition: "Système associant directement les citoyens aux prises de décision politique locale ou nationale.", example: "La mise en place de jurys citoyens favorise la démocratie participative locale." },
        { term: "Le budget participatif", type: "n. m.", definition: "Part du budget d'une collectivité dont l'affectation est votée directement par les habitants.", example: "Grâce au budget participatif, les résidents ont voté la création d'un jardin solidaire." },
        { term: "Le tiers-lieu solidaire", type: "n. m.", definition: "Espace convivial hybride mêlant ateliers partagés, cafés associatifs et entraide citoyenne.", example: "Ce tiers-lieu solidaire propose des cours de français et un atelier d'autoréparation de vélos." },
        { term: "L'entraide citoyenne", type: "n. f.", definition: "Soutien spontané et mutuel entre voisins ou membres d'un même quartier.", example: "L'entraide citoyenne s'est magnifiquement manifestée lors des inondations printanières." },
        { term: "Le sentiment d'appartenance", type: "n. m.", definition: "Fait de se sentir intégré et reconnu comme membre à part entière d'un groupe ou d'une nation.", example: "Les projets culturels de quartier consolident le sentiment d'appartenance collective." },
        { term: "L'égalité des chances", type: "n. f.", definition: "Accès équitable aux études, aux emplois et aux responsabilités sans discrimination.", example: "Les bourses d'excellence contribuent à restaurer l'égalité des chances républicaine." },
        { term: "La justice sociale", type: "n. f.", definition: "Répartition équitable des droits, des richesses et des devoirs au sein d'une communauté.", example: "Le système de redistribution fiscale est le pilier de la justice sociale en France." },
        { term: "Le bénévolat de compétences", type: "n. m.", definition: "Mise à disposition gratuite de ses compétences professionnelles (droit, comptabilité) pour une association.", example: "De nombreux cadres pratiquent le bénévolat de compétences pour aider les jeunes entrepreneurs." },
        { term: "La mixité sociale", type: "n. f.", definition: "Coexistence harmonieuse de personnes issues de milieux socio-économiques divers dans un même quartier ou établissement.", example: "La mixité sociale dans les collèges est un puissant facteur de réussite partagée." }
      ],
      connectors: [
        { connector: "En définitive", usage: "Conclut une analyse en synthétisant l'idée essentielle.", example: "En définitive, la solidarité n'est pas un coût, mais un investissement dans la paix sociale." },
        { connector: "Tout bien considéré", usage: "Exprime une conclusion après avoir soupesé soigneusement tous les aspects.", example: "Tout bien considéré, l'implication citoyenne renforce la légitimité des décisions publiques." },
        { connector: "Quand bien même (+ conditionnel)", usage: "Concession très soutenue marquant une hypothèse réfutée.", example: "Quand bien même cela exigerait des efforts financiers, la dignité de nos aînés n'a pas de prix." },
        { connector: "Il convient de souligner que...", usage: "Met en relief un fait ou un argument déterminant.", example: "Il convient de souligner que le bénévolat représente plus d'un million d'emplois équivalent temps plein." },
        { connector: "À cet effet", usage: "Indique le but ou l'objectif direct de l'action entreprise.", example: "À cet effet, une maison de quartier intergénérationnelle sera inaugurée en octobre." },
        { connector: "Nonobstant (+ nom)", usage: "Locution prépositive soutenue exprimant la concession.", example: "Nonobstant les réticences initiales, le projet de budget participatif a rencontré un immense succès." }
      ],
      pressArticle: {
        id: "pilier-4-art",
        title: "L'habitat partagé intergénérationnel : quand étudiants et seniors réinventent la solidarité urbaine",
        source: "La Croix & Société — Enquête de société",
        wordCount: 470,
        text: `
          <p>Face à la flambée vertigineuse des loyers étudiants dans les grandes agglomérations et à l'isolement grandissant de millions de personnes âgées vivant seules dans des logements devenus trop vastes, une réponse ingénieuse s'enracine durablement : l'habitat partagé intergénérationnel. Le principe, orchestré par des associations pionnières, repose sur un échange solidaire simple : un senior met à disposition une chambre meublée contre une présence bienveillante en soirée et quelques menus services du quotidien (courses, aide informatique, partage des repas).</p>
          <p>Pour les jeunes, souvent confrontés à la précarité financière et à la pénurie de logements universitaires, cette formule offre un toit digne et chaleureux à un coût dérisoire, voire nul. Mais au-delà de l'avantage économique indéniable, les témoignages convergent vers une richesse humaine inattendue. Loin des clichés sur le conflit des générations, la cohabitation suscite des moments d'écoute mutuelle, d'apprentissage croisé et de transmission mémorielle qui réenchantent le quotidien des deux colocataires.</p>
          <p>Pour les aînés, la présence d'un jeune sous leur toit constitue un rempart précieux contre la solitude et permet souvent de retarder de plusieurs années l'entrée en institution médicalisée. Les familles y trouvent également un apaisement profond, sachant leur parent entouré et sécurisé en cas de malaise inopiné.</p>
          <p>Cependant, pour que cette alliance porte ses fruits, un encadrement associatif rigoureux est indispensable : sélection minutieuse des profils, charte de vie commune explicite et médiation régulière en cas de frictions. En favorisant la mixité des âges et la solidarité de proximité, ces initiatives prouvent que le vivre-ensemble n'est pas un slogan creux, mais une réalité fraternelle à encourager activement.</p>
        `,
        questions: [
          {
            id: "p4-art-q1",
            prompt: "Quels sont les deux problèmes sociaux majeurs auxquels l'habitat partagé intergénérationnel apporte une réponse conjointe ?",
            options: [
              "La précarité locative des étudiants et l'isolement relationnel des personnes âgées.",
              "Le manque d'hôpitaux publics et le coût du carburant automobile.",
              "Le chômage des cadres supérieurs et la surpopulation carcérale.",
              "L'échec scolaire des collégiens et la baisse des pensions de retraite."
            ],
            correct: 0,
            explanation: "Le premier paragraphe mentionne 'la flambée des loyers étudiants' et 'l'isolement grandissant de millions de personnes âgées'."
          },
          {
            id: "p4-art-q2",
            prompt: "En échange d'une chambre meublée à loyer modéré ou gratuit, que fournit l'étudiant à son hôte senior ?",
            options: [
              "Des soins médicaux infirmiers quotidiens spécialisés.",
              "Une présence bienveillante en soirée, une aide aux tâches simples et le partage de moments conviviaux.",
              "La rémunération intégrale des factures d'électricité de la maison.",
              "L'obligation de cuisiner trois repas gastronomiques par jour."
            ],
            correct: 1,
            explanation: "L'article précise que l'échange repose sur 'une présence bienveillante en soirée et quelques menus services du quotidien'."
          },
          {
            id: "p4-art-q3",
            prompt: "Quel bénéfice médical et familial majeur cette cohabitation apporte-t-elle aux personnes âgées ?",
            options: [
              "Elle guérit instantanément toutes les maladies chroniques.",
              "Elle sécurise le quotidien et permet souvent de retarder l'entrée en maison de retraite médicalisée.",
              "Elle permet aux aînés de reprendre des études de médecine à l'université.",
              "Elle supprime la nécessité de rendre visite à ses proches."
            ],
            correct: 1,
            explanation: "Le troisième paragraphe explique que cette présence 'permet souvent de retarder de plusieurs années l'entrée en institution médicalisée' et rassure les familles."
          },
          {
            id: "p4-art-q4",
            prompt: "Quelle condition clé est jugée indispensable pour garantir le succès de cette cohabitation ?",
            options: [
              "L'absence de tout contrat ou charte écrite pour laisser faire le hasard.",
              "Un encadrement associatif rigoureux avec charte de vie commune et médiation en cas de besoin.",
              "L'interdiction formelle pour l'étudiant de sortir le soir après 18 heures.",
              "L'obligation de partager la même chambre à coucher."
            ],
            correct: 1,
            explanation: "L'auteur insiste sur 'un encadrement associatif rigoureux : sélection minutieuse des profils, charte de vie commune explicite et médiation régulière'."
          },
          {
            id: "p4-art-q5",
            prompt: "Quelle est la portée citoyenne globale de cette initiative selon la conclusion ?",
            options: [
              "Elle démontre que le vivre-ensemble et la mixité des âges sont des réalités fraternelles concrètes et bénéfiques.",
              "Elle prouve que les maisons de retraite privées doivent être interdites par la loi.",
              "Elle montre que les jeunes refusent désormais toute forme de solidarité familiale.",
              "Elle annonce la fin de la construction de logements neufs dans les villes."
            ],
            correct: 0,
            explanation: "L'article conclut en soulignant que ces projets prouvent que 'le vivre-ensemble n'est pas un slogan creux, mais une réalité fraternelle à encourager'."
          }
        ]
      },
      listeningDebate: {
        title: "Débat citoyen : L'obligation d'un Service National Universel (SNU) pour renforcer la cohésion républicaine",
        duration: "09:00",
        transcript: `<div class="transcript-text">
<p><strong>Animatrice :</strong> Faut-il rendre obligatoire un service civique ou national de plusieurs mois pour l'ensemble des jeunes de 16 à 18 ans ? Vecteur de mixité sociale et d'apprentissage citoyen pour ses partisans, contrainte autoritaire et coûteuse pour ses détracteurs. Écoutons le débat.</p>
<p><strong>Julien Castet (Sociologue de la jeunesse) :</strong> Notre société souffre d'un morcellement tragique où les jeunes grandissent dans des bulles socio-spatiales étanches. Créer un creuset commun où un jeune de banlieue défavorisée, un étudiant de classe prépa parisienne et un apprenti rural vivent, coopèrent et accomplissent des missions d'intérêt général permet de refonder le sentiment d'appartenance à la communauté nationale.</p>
<p><strong>Élodie Marceau (Présidente d'un collectif associatif de jeunesse) :</strong> L'engagement citoyen ne s'impose pas par décret militaire ! On ne fabrique pas de la solidarité sous la contrainte d'un uniforme. Si l'État veut véritablement soutenir la jeunesse, qu'il finance massivement les associations de terrain, les tiers-lieux et les projets écologiques portés volontairement par les jeunes eux-mêmes plutôt que d'engloutir des milliards dans un dispositif encadré de façon rigide.</p>
</div>`,
        questions: [
          {
            id: "p4-co-q1",
            prompt: "Quel diagnostic sociologique Julien Castet dresse-t-il sur la situation actuelle de la jeunesse française ?",
            options: [
              "Les jeunes sont tous regroupés dans les mêmes écoles d'art.",
              "La jeunesse souffre d'un morcellement où chacun grandit dans des bulles socio-spatiales séparées.",
              "Tous les jeunes de 16 ans refusent catégoriquement de parler français.",
              "La totalité des jeunes effectue déjà deux ans de service militaire volontaire."
            ],
            correct: 1,
            explanation: "Julien Castet met en lumière 'un morcellement tragique où les jeunes grandissent dans des bulles socio-spatiales étanches'."
          },
          {
            id: "p4-co-q2",
            prompt: "Quel objectif républicain Julien Castet attribue-t-il au rassemblement obligatoire des jeunes ?",
            options: [
              "Apprendre à piloter des avions de chasse en un mois.",
              "Créer un creuset de mixité sociale et refonder le sentiment d'appartenance nationale par l'action collective.",
              "Obliger les étudiants parisiens à quitter définitivement la capitale.",
              "Remplacer les professeurs d'histoire par des instructeurs de l'armée."
            ],
            correct: 1,
            explanation: "Il affirme que vivre ensemble et coopérer sur des missions d'intérêt général 'permet de refonder le sentiment d'appartenance à la communauté nationale'."
          },
          {
            id: "p4-co-q3",
            prompt: "Quelle position Élodie Marceau défend-elle face à l'idée d'un service civique imposé ?",
            options: [
              "Elle estime que la solidarité authentique naît de l'engagement volontaire et doit être financée au sein du tissu associatif local.",
              "Elle réclame un allongement de la durée obligatoire à cinq années entières.",
              "Elle souhaite que le service militaire soit réservé exclusivement aux personnes de plus de soixante ans.",
              "Elle demande la suppression totale de toutes les associations de bénévoles."
            ],
            correct: 0,
            explanation: "Elle affirme que 'l'engagement citoyen ne s'impose pas par décret' et plaide pour le soutien financier des initiatives associatives volontaires."
          },
          {
            id: "p4-co-q4",
            prompt: "Quelle question fondamentale traverse l'ensemble de cette controverse ?",
            options: [
              "La conciliation entre obligation citoyenne au service du collectif et respect de la liberté d'engagement individuel.",
              "Le choix de la couleur des drapeaux lors des défilés officiels.",
              "L'âge obligatoire de départ à la retraite des sociologues.",
              "Le prix des repas servis dans les lycées professionnels."
            ],
            correct: 0,
            explanation: "Le débat interroge la légitimité de la contrainte républicaine face à l'autonomie et au volontariat dans la construction de la citoyenneté."
          }
        ]
      },
      writingSubject: {
        id: "pilier-4-pe",
        title: "Lettre formelle au Président du Conseil Départemental : Création et cofinancement d'un tiers-lieu intergénérationnel et solidaire",
        targetWords: 250,
        minWords: 225,
        maxWords: 275,
        prompt: `
          <p>Vous constatez un isolement grandissant des personnes âgées et un manque cruel d'espaces de sociabilité pour les jeunes dans votre commune rurale ou périurbaine.</p>
          <p>En tant que président(e) de l'association « Générations Solidaires », vous rédigez une <strong>lettre formelle argumentée au Président du Conseil Départemental</strong> pour solliciter une subvention d'investissement afin de créer un tiers-lieu intergénérationnel dans une ancienne école désaffectée.</p>
        `,
        sampleAnswer: `Association « Générations Solidaires »
5, place de la Mairie
44000 Nantes
Monsieur le Président du Conseil Départemental
Hôtel du Département
44000 Nantes

À Nantes, le 22 août 2026

Objet : Demande de soutien financier pour la création d'un tiers-lieu solidaire et intergénérationnel

Monsieur le Président,

Je me permets de vous adresser la présente demande au nom de l'association « Générations Solidaires », afin de solliciter l'appui financier du Département pour la réhabilitation de l'ancienne école communale de Saint-Mars en un tiers-lieu intergénérationnel.

En premier lieu, notre territoire fait face à un double défi démographique : l'isolement croissant de nos aînés et le manque de structures culturelles adaptées pour notre jeunesse. Aménager un espace partagé comprenant un café associatif, un atelier de réparation collaborative et une salle informatique permettra de retisser des liens humains quotidiens indispensables à la cohésion sociale de notre canton.

En second lieu, ce projet prévoit la mise en place d'ateliers d'initiation numérique animés par de jeunes volontaires au profit des seniors, favorisant ainsi la transmission des savoirs et l'accès aux droits administratifs dématérialisés.

Quand bien même ce projet exigerait un investissement initial de votre collectivité, il constitue une réponse pérenne, vertueuse et préventive à la solitude et à la fracture territoriale.

Dans l'attente d'une instruction favorable de notre dossier, je vous prie d'agréer, Monsieur le Président, l'expression de ma très haute considération.

La Présidente de l'Association`
      },
      thematicDrill: [
        {
          id: "p4-dr-q1",
          prompt: "Quelle expression désigne le fait de mettre gratuitement ses compétences professionnelles au service d'une association ?",
          options: ["Le bénévolat de compétences", "Le plafond de verre", "Le budget participatif", "Le présentoir associatif"],
          correct: 0,
          explanation: "Le bénévolat de compétences consiste à offrir son expertise (droit, comptabilité, communication) à titre gracieux."
        },
        {
          id: "p4-dr-q2",
          prompt: "Quel connecteur de concession très soutenu est obligatoirement suivi du conditionnel ?",
          options: ["Quand bien même", "Bien que", "Quoique", "Même si"],
          correct: 0,
          explanation: "'Quand bien même' exprime une concession hypothétique et se construit impérativement avec le mode conditionnel."
        },
        {
          id: "p4-dr-q3",
          prompt: "Complétez : « Il est indispensable que les générations ___ pour surmonter l'isolement. »",
          options: ["coopèrent", "coopèrent (indicatif)", "coopéreront", "coopéreraient"],
          correct: 0,
          explanation: "L'obligation impersonnelle 'Il est indispensable que' régit le subjonctif présent ('coopèrent')."
        },
        {
          id: "p4-dr-q4",
          prompt: "Que désigne le plafond de verre ?",
          options: [
            "La barrière invisible freinant l'accès des femmes et des minorités aux postes de haute direction.",
            "Un élément architectural écologique pour éclairer les bâtiments.",
            "Le montant maximal des dons déductibles des impôts.",
            "L'interdiction de construire des tours de grande hauteur dans les villes historiques."
          ],
          correct: 0,
          explanation: "Le plafond de verre symbolise les freins invisibles mais puissants bloquant l'ascension professionnelle des femmes."
        },
        {
          id: "p4-dr-q5",
          prompt: "« Les valeurs de solidarité grâce ___ notre communauté s'est relevée demeurent vivantes. »",
          options: ["auxquelles", "desquelles", "lesquelles", "dont"],
          correct: 0,
          explanation: "'Grâce à' + nom féminin pluriel ('les valeurs') se contracte en 'auxquelles' (grâce à + lesquelles)."
        }
      ]
    }
  ]
};

// Normalisation et aliasing bidirectionnel (propriétés plates + objet imbriqué components)
if (parcoursB_Data && Array.isArray(parcoursB_Data.pillars)) {
  parcoursB_Data.pillars.forEach(p => {
    p.audioTrack = p.audioTrack || p.listeningDebate;
    p.listeningDebate = p.listeningDebate || p.audioTrack;
    p.writingTopic = p.writingTopic || p.writingSubject;
    p.writingSubject = p.writingSubject || p.writingTopic;
    p.drill = p.drill || p.thematicDrill;
    p.thematicDrill = p.thematicDrill || p.drill;

    p.components = {
      vocabulary: p.vocabulary,
      connectors: p.connectors,
      pressArticle: p.pressArticle,
      audioTrack: p.audioTrack,
      listeningDebate: p.listeningDebate,
      writingTopic: p.writingTopic,
      writingSubject: p.writingSubject,
      drill: p.drill,
      thematicDrill: p.thematicDrill
    };
  });
}

// Intégration unifiée au dataset global window.journeyDataset / sessionsDataset
var _journeyTarget = (typeof window !== "undefined") ? window : (typeof global !== "undefined" ? global : this);
_journeyTarget.journeyDataset = _journeyTarget.journeyDataset || [];
_journeyTarget.journeyDataset.parcoursA = parcoursA_Data;
_journeyTarget.journeyDataset.parcoursB = parcoursB_Data;
_journeyTarget.journeyDataset.chapters = _journeyTarget.journeyDataset;

// Alias d'export pour sessionsModule
_journeyTarget.sessionsDataset = {
  parcoursA: parcoursA_Data,
  parcoursB: parcoursB_Data,
  chapters: _journeyTarget.journeyDataset
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    parcoursA: parcoursA_Data,
    parcoursB: parcoursB_Data,
    journeyDataset: _journeyTarget.journeyDataset,
    sessionsDataset: _journeyTarget.sessionsDataset
  };
}

