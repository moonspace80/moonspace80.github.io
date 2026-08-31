/* ==========================================================================
   OFFICIAL DELF B2 EXAM DATASET (France Éducation International - FEI)
   Sujets Démo 1 (Format Réformé 100% QCM) & Démo 2 (Format Classique)
   ========================================================================== */

const exam1Data = {
  id: "delf-b2-fei-ex1",
  code: "SUJET_DÉMO_B2TP_02",
  title: "DELF B2 Tout Public — Examen Blanc Officiel 1",
  subtitle: "Format Réformé France Éducation International (100% QCM Standard B2)",
  format: "reformed",
  year: 2024,
  duration: 150,
  totalDurationMinutes: 150,
  collectivePoints: 75,
  oralPoints: 25,
  totalPoints: 100,
  passingScore: 50,
  eliminatoryScore: 5,
  source: "France Éducation International (FEI)",
  sections: {
    // -----------------------------------------------------------------------
    // COMPRÉHENSION DE L'ORAL (CO - 25 points - 30 minutes)
    // -----------------------------------------------------------------------
    co: {
      id: "co-ex1",
      title: "Compréhension de l'oral",
      name: "Compréhension de l'oral",
      duration: 30,
      durationMinutes: 30,
      maxScore: 25.0,
      totalPoints: 25.0,
      audioIntegralUrl: "ressources/DELF B2/ex1/delf-b2-tp-coll-exemple1-integral.mp3",
      audioTracks: [
        { id: "track-1", file: "ressources/DELF B2/ex1/delf-b2-tp-coll-exemple1-exercice1.mp3", durationSec: 320 },
        { id: "track-2", file: "ressources/DELF B2/ex1/delf-b2-tp-coll-exemple1-exercice2.mp3", durationSec: 310 },
        { id: "track-3", file: "ressources/DELF B2/ex1/delf-b2-tp-coll-exemple1-exercice3.mp3", durationSec: 240 }
      ],
      exercises: [
        {
          id: "co1-ex1",
          partNumber: 1,
          title: "Exercice 1 : Radio — Le sport matinal et les rythmes de sommeil",
          theme: "Santé, Sport & Société",
          audioFile: "ressources/DELF B2/ex1/delf-b2-tp-coll-exemple1-exercice1.mp3",
          audioUrl: "ressources/DELF B2/ex1/delf-b2-tp-coll-exemple1-exercice1.mp3",
          points: 9.0,
          totalPoints: 9.0,
          listeningsCount: 2,
          instructions: "Vous allez entendre 2 fois un enregistrement sonore de 3 minutes environ. Vous aurez 1 minute pour lire les questions. Puis vous écouterez une première fois l'enregistrement. Vous aurez ensuite 30 secondes de pause pour commencer à répondre. Vous écouterez une seconde fois l'enregistrement. Vous aurez encore 1 minute pour compléter vos réponses.",
          transcript: `
            Présentateur : Se lever tôt le matin pour aller courir ou faire de la gymnastique est devenu un véritable phénomène de mode. Mais ce nouveau mode de vie, on va le voir avec vous Caroline Raymond, n'est pas bon pour tout le monde.
            Caroline Raymond : Oui, sur les réseaux sociaux, on trouve beaucoup d'articles sur les bienfaits d'une activité sportive au saut du lit et pourquoi nous devrions tous adopter ce style de vie. Les photos de coureurs au lever du soleil se multiplient, tout comme les témoignages de ceux qui se sentent plus productifs et plus heureux après avoir fait du sport en tout début de journée.
            P : Alors se lever tôt pour profiter d'un moment à soi, ça semble séduisant non ?
            CR : Oui oui, faire du sport le matin serait bon pour le sommeil, pour le moral, c'est aussi un excellent antistress. Cela dit, ce mode de vie n'est pas accessible à tous.
            P : Oui, parce qu'on n'est pas tous égaux devant le sommeil ?
            CR : Eh oui, les rythmes de sommeil sont très différents d'une personne à l'autre, on ne peut pas les bouleverser sans danger. Notre rythme biologique est génétiquement programmé, notre marge de manœuvre pour adapter notre sommeil est très réduite. Pour 20 % de la population, se lever tôt peut être une véritable torture et provoquer des troubles du sommeil.
            P : Et les sportifs de haut niveau, Caroline, ils se lèvent aussi tôt que ça pour s'entraîner ?
            CR : Alors non pas forcément parce que, eux, ils ont du temps pour s'entraîner, et ce sont plutôt de gros dormeurs, ils ont besoin de plus de 9 h de sommeil pour se sentir bien. Dormir n'est pas un signe de paresse, c'est une phase indispensable pour la récupération et donc la prévention des blessures. Et puis, le matin n'est pas forcément le moment le plus productif. Une étude a démontré que les personnes qui se lèvent tôt sont les plus performantes vers midi, alors que ceux qui se couchent tard atteignent leur moment de pleine forme vers 20 h le soir. Se lever tôt répond plutôt à une norme sociale, il faut que les personnes soient performantes dans tous les secteurs de leur vie, professionnelle, familiale ou sportive. Arriver au bureau en ayant déjà fait 1 heure de course à pied, eh bien ça vous donne une supériorité psychologique sur les collègues qui se lèvent plus tard.
            P : Donc les personnes qui se lèvent tard ne doivent pas forcer leur nature et s'obliger à se lever tôt ?
            CR : Eh bien oui, il n'y a pas de raison de culpabiliser lorsque les réveils le matin sont difficiles, il ne faut pas oublier que la pratique matinale du sport est un luxe, ceux qui travaillent très tôt ou ceux qui travaillent de nuit sont exclus de ce mode de vie. Et puis faire du sport en fin de journée c'est aussi avantageux ; faire du sport en soirée est une activité de relaxation qui peut agir sur la qualité du sommeil. Il faut donc adapter la pratique de son sport à ses besoins. Le pire choix finalement, ce serait de rien faire du tout !
          `,
          questions: [
            {
              id: "co1-1",
              number: 1,
              prompt: "D’après le journaliste, on trouve souvent sur les réseaux sociaux des articles sur…",
              question: "D’après le journaliste, on trouve souvent sur les réseaux sociaux des articles sur…",
              options: [
                "l’intérêt de la course à pied.",
                "les avantages du sport matinal.",
                "le style de vie des sportifs professionnels."
              ],
              correct: 1,
              points: 1.0,
              explanation: "Caroline Raymond indique qu'on trouve beaucoup d'articles sur les bienfaits d'une activité sportive au saut du lit (le matin)."
            },
            {
              id: "co1-2",
              number: 2,
              prompt: "Selon le document, il est… de modifier notre rythme de sommeil.",
              question: "Selon le document, il est… de modifier notre rythme de sommeil.",
              options: [
                "bénéfique",
                "dangereux",
                "impossible"
              ],
              correct: 1,
              points: 0.5,
              explanation: "Le document affirme qu'on ne peut pas bouleverser nos rythmes de sommeil sans danger car notre horloge biologique est génétiquement programmée."
            },
            {
              id: "co1-3",
              number: 3,
              prompt: "Quel rythme de vie adoptent les sportifs professionnels ?",
              question: "Quel rythme de vie adoptent les sportifs professionnels ?",
              options: [
                "Ils se lèvent très tôt.",
                "Ils dorment beaucoup.",
                "Ils font une sieste l’après-midi."
              ],
              correct: 1,
              points: 2.0,
              explanation: "Caroline Raymond précise que les sportifs de haut niveau sont de gros dormeurs et ont besoin de plus de 9 heures de sommeil."
            },
            {
              id: "co1-4",
              number: 4,
              prompt: "D’après le journaliste, les personnes qui se couchent tard sont plus… le soir.",
              question: "D’après le journaliste, les personnes qui se couchent tard sont plus… le soir.",
              options: [
                "actives",
                "fatiguées",
                "détendues"
              ],
              correct: 0,
              points: 1.5,
              explanation: "L'étude montre que ceux qui se couchent tard atteignent leur moment de pleine forme (sont les plus actifs/performants) vers 20 heures."
            },
            {
              id: "co1-5",
              number: 5,
              prompt: "Il est socialement bien vu de se lever tôt car cela permettrait d’être plus…",
              question: "Il est socialement bien vu de se lever tôt car cela permettrait d’être plus…",
              options: [
                "efficace.",
                "ponctuel.",
                "en forme."
              ],
              correct: 0,
              points: 0.5,
              explanation: "Se lever tôt répond à une norme sociale valorisant la performance et l'efficacité dans tous les secteurs de la vie."
            },
            {
              id: "co1-6",
              number: 6,
              prompt: "Faire du sport le matin est considéré comme un luxe car…",
              question: "Faire du sport le matin est considéré comme un luxe car…",
              options: [
                "tous les emplois ne le permettent pas.",
                "la vie de famille est parfois contraignante.",
                "on ne peut pas toujours en faire près de chez soi."
              ],
              correct: 0,
              points: 2.5,
              explanation: "La journaliste explique que ceux qui travaillent très tôt ou de nuit sont exclus de ce mode de vie, ce qui en fait un luxe dépendant de l'emploi."
            },
            {
              id: "co1-7",
              number: 7,
              prompt: "La pratique du sport en fin de journée est avantageuse car elle permet…",
              question: "La pratique du sport en fin de journée est avantageuse car elle permet…",
              options: [
                "d’être de meilleure humeur.",
                "de s’endormir plus facilement.",
                "de mieux se concentrer le lendemain."
              ],
              correct: 1,
              points: 1.0,
              explanation: "Le sport en fin de journée est présenté comme une activité de relaxation favorisant la qualité et la venue du sommeil."
            }
          ]
        },
        {
          id: "co1-ex2",
          partNumber: 2,
          title: "Exercice 2 : Radio — Salariés sans bureau fixe et flex-office",
          theme: "Monde du travail & Flexibilité",
          audioFile: "ressources/DELF B2/ex1/delf-b2-tp-coll-exemple1-exercice2.mp3",
          audioUrl: "ressources/DELF B2/ex1/delf-b2-tp-coll-exemple1-exercice2.mp3",
          points: 9.0,
          totalPoints: 9.0,
          listeningsCount: 2,
          instructions: "Vous allez entendre 2 fois un enregistrement sonore de 3 minutes environ. Vous aurez 1 minute pour lire les questions. Puis vous écouterez une première fois l'enregistrement. Vous aurez ensuite 30 secondes de pause pour commencer à répondre. Vous écouterez une seconde fois l'enregistrement. Vous aurez encore 1 minute pour compléter vos réponses.",
          transcript: `
            Marc Fauvelle : Bonjour Laetitia Saavedra.
            Laetitia Saavedra : Bonjour Marc.
            MF : Le phénomène qui vous intéresse cette semaine, c’est celui des « sans bureau fixe », ces salariés qui n’ont plus de bureau attitré. L’entreprise américaine Google a lancé le mouvement il y a quelques années, suivie depuis par plusieurs grands groupes français.
            LS : Oui, le principe des salariés sans bureau attribué se systématise en France aujourd’hui, c’est le cas notamment au siège de l’entreprise Sanofi, installé près de Paris depuis 2015. Ici, plus personne n’a de bureau attitré et chaque jour est une compétition pour obtenir un bureau. Le premier arrivé est le premier servi. Les employés arrivent le matin sur un espace commun à toute l’équipe, et chacun se met là où il le souhaite, y compris les chefs qui n’ont plus de bureau.
            MF : Alors pourquoi ne pas donner de bureau attitré aux salariés ?
            LS : Deux raisons à cela. La première c’est une raison économique : il faut optimiser l’utilisation des bureaux occupés en moyenne à 60 % du temps. Et puis la deuxième raison c’est que ce système est censé renforcer l’esprit d’équipe et la capacité d’adaptation des salariés. La conséquence de ces économies c’est que les entreprises prévoient systématiquement moins de postes de travail que d’employés, chez Sanofi par exemple c’est 8 postes pour 10 employés.
            MF : Alors comment ça se passe concrètement pour les salariés ?
            LS : Eh bien ce n’est pas toujours facile, ils s’installent là où il y a de la place, et parfois il n’y en a pas. Il arrive que certains rentrent chez eux. Autre problème : l’utilisation des salles de réunion qu’il faut réserver et qui sont très convoitées. Parfois, des employés bloquent leur place dans ces salles de réunion, en y laissant leurs sacs ou leurs manteaux pendant qu’ils partent en rendez-vous à l’extérieur. Le moindre espace disponible est occupé, et cela peut créer des tensions entre collègues.
            MF : Et que pensent les salariés de cette organisation du travail ?
            LS : Cela varie en fonction des générations : les jeunes s’adaptent à cette situation, mais les plus âgés se plaignent du bruit, de problèmes de concentration, certains ont même peur de ne plus avoir leur place dans l’entreprise.
            MF : Ce nouveau mode d’organisation va donc provoquer d’autres bouleversements, non ?
            LS : Oui, les outils numériques permettent déjà de travailler de chez soi ou d’un bureau partagé. Mais un concept va encore plus loin aux États-Unis : il s’agit des hôtels de travail, qui proposent à la fois un lieu de vie et un lieu de travail, avec une frontière entre la vie professionnelle et la vie personnelle de plus en plus réduite. Une nouvelle forme de travail sans limite de temps ou d’espace, c’est peut-être ce qui nous attend, avec des employés hyper flexibles qui pourront travailler n’importe où et à n’importe quelle heure.
          `,
          questions: [
            {
              id: "co1-8",
              number: 1,
              prompt: "L’entreprise américaine Google a lancé l’idée d’une nouvelle…",
              question: "L’entreprise américaine Google a lancé l’idée d’une nouvelle…",
              options: [
                "forme de réunion au travail.",
                "manière d’utiliser les bureaux.",
                "organisation du travail à distance."
              ],
              correct: 1,
              points: 0.5,
              explanation: "Google a initié le mouvement des salariés sans bureau attitré, soit une nouvelle manière d'utiliser les bureaux physiques."
            },
            {
              id: "co1-9",
              number: 2,
              prompt: "Dans l’entreprise Sanofi, la nouvelle organisation concerne…",
              question: "Dans l’entreprise Sanofi, la nouvelle organisation concerne…",
              options: [
                "uniquement les chefs.",
                "les chefs et les employés.",
                "uniquement les employés."
              ],
              correct: 1,
              points: 1.0,
              explanation: "La journaliste précise que 'chacun se met là où il le souhaite, y compris les chefs qui n'ont plus de bureau'."
            },
            {
              id: "co1-10",
              number: 3,
              prompt: "Quel est l’objectif principal de cette organisation ?",
              question: "Quel est l’objectif principal de cette organisation ?",
              options: [
                "Limiter les retards et l’absentéisme.",
                "Améliorer l’utilisation des espaces de travail.",
                "Créer des salles de réunion supplémentaires."
              ],
              correct: 1,
              points: 1.0,
              explanation: "La raison économique première est d'optimiser l'utilisation des bureaux qui n'étaient occupés qu'à 60 % du temps."
            },
            {
              id: "co1-11",
              number: 4,
              prompt: "Du fait de cette organisation, les employés…",
              question: "Du fait de cette organisation, les employés…",
              options: [
                "rentrent parfois travailler chez eux.",
                "louent des espaces pour travailler tranquillement.",
                "organisent leurs rendez-vous à l’extérieur de l’entreprise."
              ],
              correct: 0,
              points: 1.5,
              explanation: "Quand il n'y a pas assez de bureaux disponibles (8 postes pour 10 salariés), il arrive que certains rentrent travailler chez eux."
            },
            {
              id: "co1-12",
              number: 5,
              prompt: "Chez les employés, cette organisation peut…",
              question: "Chez les employés, cette organisation peut…",
              options: [
                "entraîner des conflits.",
                "être source de fatigue.",
                "diminuer la productivité."
              ],
              correct: 0,
              points: 1.5,
              explanation: "La compétition pour réserver les salles et bloquer des places avec des manteaux crée des tensions et des conflits entre collègues."
            },
            {
              id: "co1-13",
              number: 6,
              prompt: "Comment les employés les plus âgés réagissent-ils à ce système ?",
              question: "Comment les employés les plus âgés réagissent-ils à ce système ?",
              options: [
                "Ils protestent et refusent de l’adopter.",
                "Ils s’adaptent même si ça ne leur plaît pas.",
                "Ils s’inquiètent pour leur avenir professionnel."
              ],
              correct: 2,
              points: 1.0,
              explanation: "Les plus âgés se plaignent du bruit et 'certains ont même peur de ne plus avoir leur place dans l'entreprise'."
            },
            {
              id: "co1-14",
              number: 7,
              prompt: "La journaliste estime que les hôtels de travail…",
              question: "La journaliste estime que les hôtels de travail…",
              options: [
                "facilitent la mise en place du travail à distance.",
                "renforcent les capacités d’adaptation des salariés.",
                "favorisent la confusion entre vie privée et vie professionnelle."
              ],
              correct: 2,
              points: 2.5,
              explanation: "Les hôtels de travail créent une frontière de plus en plus réduite et floue entre vie professionnelle et vie personnelle."
            }
          ]
        },
        {
          id: "co1-ex3",
          partNumber: 3,
          title: "Exercice 3 : Trois documents courts (Presse jeunesse, Jeux de société, Robots)",
          theme: "Société, Médias & Technologies",
          audioFile: "ressources/DELF B2/ex1/delf-b2-tp-coll-exemple1-exercice3.mp3",
          audioUrl: "ressources/DELF B2/ex1/delf-b2-tp-coll-exemple1-exercice3.mp3",
          points: 7.0,
          totalPoints: 7.0,
          listeningsCount: 1,
          instructions: "Vous allez entendre 1 seule fois 3 courts documents sonores. Pour chaque document, vous aurez 15 secondes pour lire les questions, vous écouterez l'enregistrement, puis vous aurez 20 secondes pour répondre.",
          transcript: `
            Document 1 (Elsa Maudet, Le Petit Libé) :
            Animateur : Mercredi prochain s’ouvre à Montreuil, le Salon du livre et de la presse jeunesse. C’est donc l’occasion pour nous de vous faire découvrir un projet destiné aux jeunes. Écoutons Elsa Maudet. Elle est journaliste à Libération, où elle a cofondé il y a deux ans Le Petit Libé, une version hebdomadaire du quotidien consacrée aux 7-12 ans.
            Elsa Maudet : J’ai l’impression que la presse jeunesse est en plein développement car jusqu’à maintenant, on n’avait que les magazines de divertissement habituels, qui sont là depuis 20 ans et qui font très bien leur travail mais qui étaient un peu tout seuls on va dire. Mais maintenant, on en trouve de nouveaux, plus centrés sur l’actualité et qui plaisent tout autant aux enfants. D’un côté, on s’est rendu compte qu’il y avait une vraie attente de leur part concernant l’information. Et d’un autre côté, avec le journal que nous proposons aux enfants, on a voulu montrer que c’est un milieu où on peut aussi s’amuser et faire des choses sympas. En tout cas, j’espère que ce développement de la presse jeunesse va aider les enfants à pouvoir analyser l’actualité de façon critique et à grandir avec une image différente de ce métier.

            Document 2 (Aurélien Fouillet, Jeux de société) :
            Aurélien Fouillet : Malgré le succès grandissant des jeux vidéo, près de 20 millions de jeux de société sont vendus chaque année en France. Ce phénomène est dû au fait que les sociétés modernes ont rendu les individus libres et autonomes, mais elles les ont beaucoup isolés aussi. Les jeux représentent donc un magnifique outil de convivialité et de rencontre. En plus, ils sont aussi un excellent moyen de changer des sorties plus classiques au cinéma ou des soirées passées à regarder la télévision, par exemple. On va davantage vers les autres. Il y a même des jeux où vous serez amené à jouer le rôle de quelqu’un d’autre. Cela permet de découvrir d’autres aspects de votre caractère. D’autre part, je suis absolument convaincu que le jeu a des effets bénéfiques considérables. En plus du plaisir qu’on prend à jouer sur le moment, il fait travailler la mémoire, et montre que, même quand on est en difficulté, on peut gagner. Enfin, j’encourage les adultes à offrir des jeux de société aux enfants. De nos jours, il en existe pour tous les âges et pour tous les goûts. Cette activité les aide à développer leur logique, notamment avec les jeux de stratégies, et grâce à cela ils apprennent à réfléchir différemment.

            Document 3 (Sophie Bescherelle, Robots émotionnels) :
            Animateur : Offrir un robot de compagnie à votre enfant pour qu’il joue, est-ce une bonne idée ? Sophie Bescherelle nous aide à répondre à cette question.
            Sophie Bescherelle : Les robots émotionnels ont de plus en plus de succès auprès des enfants. Ayant une personnalité très humaine, ils sont destinés à créer des émotions et ça marche très bien. Dans notre société, parler aux objets est devenu quelque chose de très naturel, comme on le fait avec son téléphone par exemple. Néanmoins, en tant qu’adultes, nous savons que nous sommes face à une machine, ce qui n’est pas forcément le cas pour les enfants. Alors, afin de ne pas créer de confusion chez ces derniers, il faut que les créateurs conçoivent les robots de manière à ce que leur nature de machine apparaisse clairement aux yeux des enfants. En effet, bien que ces robots soient de plus en plus autonomes et qu’ils puissent dire « je t’aime », ils ne sont pas capables de ressentir car ils ne sont que des objets programmés par des informaticiens. En revanche, il s’avère que ces robots peuvent être d’excellents compagnons pour les enfants en matière d’éducation, car ils peuvent aller chercher sur Internet la réponse à toutes sortes de questions, et permettent de développer chez les plus jeunes leur compréhension du monde, ce qui est positif pour leur formation.
          `,
          questions: [
            {
              id: "co1-15",
              number: 1,
              prompt: "Qu’est-ce qu’on constate dans l’évolution de la presse jeunesse actuellement ?",
              question: "Qu’est-ce qu’on constate dans l’évolution de la presse jeunesse actuellement ?",
              options: [
                "Les magazines de divertissement disparaissent.",
                "Les jeunes s'intéressent moins à la lecture.",
                "Il y a plus d’importance donnée à l’information."
              ],
              correct: 2,
              points: 0.5,
              explanation: "Elsa Maudet constate l'émergence de nouveaux titres davantage centrés sur l'actualité et l'information des 7-12 ans."
            },
            {
              id: "co1-16",
              number: 2,
              prompt: "Selon Elsa Maudet, les nouveaux types de magazine vont… chez les jeunes.",
              question: "Selon Elsa Maudet, les nouveaux types de magazine vont… chez les jeunes.",
              options: [
                "développer le goût pour le dessin",
                "donner envie d'écrire des articles",
                "favoriser la réflexion sur l’actualité."
              ],
              correct: 2,
              points: 1.0,
              explanation: "Elle espère que cela va 'aider les enfants à pouvoir analyser l'actualité de façon critique'."
            },
            {
              id: "co1-17",
              number: 3,
              prompt: "Pour l’intervenant, les jeux de société permettent d’être…",
              question: "Pour l’intervenant, les jeux de société permettent d’être…",
              options: [
                "plus autonomes.",
                "plus proche des autres.",
                "plus créatifs."
              ],
              correct: 1,
              points: 1.5,
              explanation: "Aurélien Fouillet souligne que les jeux sont un outil de convivialité permettant d'aller davantage vers les autres face à l'isolement."
            },
            {
              id: "co1-18",
              number: 4,
              prompt: "D’après l’intervenant, chez les plus jeunes, les jeux de société favorisent principalement…",
              question: "D’après l’intervenant, chez les plus jeunes, les jeux de société favorisent principalement…",
              options: [
                "leur capacité d'attention.",
                "leur esprit de compétition.",
                "leur capacité de raisonnement."
              ],
              correct: 2,
              points: 2.0,
              explanation: "L'activité aide les enfants à 'développer leur logique, notamment avec les jeux de stratégies, et grâce à cela ils apprennent à réfléchir différemment'."
            },
            {
              id: "co1-19",
              number: 5,
              prompt: "Selon l’intervenante, un robot émotionnel est capable…",
              question: "Selon l’intervenante, un robot émotionnel est capable…",
              options: [
                "d'éprouver des sentiments.",
                "de provoquer des émotions.",
                "de comprendre les humains."
              ],
              correct: 1,
              points: 1.5,
              explanation: "Sophie Bescherelle précise que les robots sont 'destinés à créer des émotions' bien qu'ils ne soient pas capables de ressentir eux-mêmes."
            },
            {
              id: "co1-20",
              number: 6,
              prompt: "Dans quel domaine les robots sont-ils bénéfiques pour les enfants ?",
              question: "Dans quel domaine les robots sont-ils bénéfiques pour les enfants ?",
              options: [
                "La santé.",
                "L’apprentissage.",
                "La créativité."
              ],
              correct: 1,
              points: 0.5,
              explanation: "Les robots s'avèrent d'excellents compagnons en matière d'éducation et pour le développement de la compréhension du monde."
            }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------------
    // COMPRÉHENSION DES ÉCRITS (CE - 25 points - 1 heure)
    // -----------------------------------------------------------------------
    ce: {
      id: "ce-ex1",
      title: "Compréhension des écrits",
      name: "Compréhension des écrits",
      duration: 60,
      durationMinutes: 60,
      maxScore: 25.0,
      totalPoints: 25.0,
      exercises: [
        {
          id: "ce1-ex1",
          partNumber: 1,
          title: "Exercice 1 : L'interdiction du téléphone portable au collège",
          source: "Céline HUSSONNOIS-ALAYA, www.bfmtv.com",
          points: 9.0,
          totalPoints: 9.0,
          text: `
            <p><strong>L'interdiction du téléphone portable au collège : avancée ou leurre ?</strong></p>
            <p>Une proposition de loi visant à interdire l'usage des téléphones portables dans les écoles et les collèges a été adoptée. Selon plusieurs enquêtes sociologiques, l'utilisation continue des smartphones en milieu scolaire engendre des baisses sensibles de concentration et dégrade les résultats scolaires des élèves.</p>
            <p>Pour Lysiane Gervais, représentante d'une association de parents d'élèves, une interdiction totale et aveugle est illusoire. Elle plaide plutôt pour une tolérance encadrée : autoriser l'usage dans des espaces délimités et à des moments précis permettrait d'éduquer les jeunes à une auto-régulation numérique responsable. De leur côté, les parents restent partagés : si beaucoup s'inquiètent de la dépendance aux écrans, d'autres tiennent impérativement à pouvoir joindre leur enfant à la sortie des cours pour des raisons d'organisation familiale.</p>
            <p>Pour Catherine Nave-Bekhti, secrétaire générale d'un syndicat enseignant, l'application concrète de cette loi pose des difficultés logistiques majeures. Faute de casiers sécurisés et de surveillants supplémentaires, confisquer des centaines d'appareils coûteux chaque matin est irréalisable. Elle déplore par ailleurs qu'en interdisant l'appareil, on prive l'institution scolaire d'une opportunité d'éduquer les jeunes aux usages d'Internet et à l'esprit critique en ligne, sujet encore trop peu discuté en classe.</p>
            <p>Enfin, pour le psychologue Jean-Thomas Giovannoni, la régulation des écrans ne peut pas reposer uniquement sur l'école : c'est d'abord au sein de la famille que doivent s'instaurer les règles de déconnexion et d'extinction des appareils le soir.</p>
          `,
          questions: [
            {
              id: "ce1-1",
              number: 1,
              prompt: "Une enquête montre que l’usage du téléphone portable à l’école a des conséquences négatives sur… des jeunes.",
              question: "Une enquête montre que l’usage du téléphone portable à l’école a des conséquences négatives sur… des jeunes.",
              options: [
                "la vie sociale",
                "le niveau scolaire",
                "la santé physique"
              ],
              correct: 1,
              points: 1.0,
              explanation: "Le texte indique que l'utilisation continue des smartphones 'dégrade les résultats scolaires des élèves'."
            },
            {
              id: "ce1-2",
              number: 2,
              prompt: "Selon Lysiane Gervais, dans l’intérêt des jeunes, il faudrait… le téléphone à l’école.",
              question: "Selon Lysiane Gervais, dans l’intérêt des jeunes, il faudrait… le téléphone à l’école.",
              options: [
                "interdire complètement",
                "tolérer sous conditions",
                "autoriser sans restriction"
              ],
              correct: 1,
              points: 2.5,
              explanation: "Elle plaide pour une 'tolérance encadrée' (autoriser dans des espaces délimités et à des moments précis)."
            },
            {
              id: "ce1-3",
              number: 3,
              prompt: "Les parents seraient… l’utilisation du téléphone par les élèves à l’école.",
              question: "Les parents seraient… l’utilisation du téléphone par les élèves à l’école.",
              options: [
                "très favorables à",
                "plutôt partagés sur",
                "totalement opposés à"
              ],
              correct: 1,
              points: 2.5,
              explanation: "Le texte mentionne explicitement que 'les parents restent partagés' entre inquiétude de la dépendance et besoin de joindre leurs enfants."
            },
            {
              id: "ce1-4",
              number: 4,
              prompt: "Pour Catherine Nave-Bekhti, interdire le portable à l’école est difficile par manque…",
              question: "Pour Catherine Nave-Bekhti, interdire le portable à l’école est difficile par manque…",
              options: [
                "d'autorité des enseignants.",
                "d'intérêt des élèves.",
                "de moyens matériels."
              ],
              correct: 2,
              points: 1.0,
              explanation: "Elle souligne le manque de casiers sécurisés et de surveillants (moyens matériels et logistiques)."
            },
            {
              id: "ce1-5",
              number: 5,
              prompt: "Selon Catherine Nave-Bekhti, interdire le portable à l’école…",
              question: "Selon Catherine Nave-Bekhti, interdire le portable à l’école…",
              options: [
                "diminuerait les violences entre élèves.",
                "priverait les élèves d’une éducation aux usages d’Internet.",
                "permettrait aux professeurs d'enseigner plus sereinement."
              ],
              correct: 1,
              points: 0.5,
              explanation: "Elle déplore qu'en interdisant l'appareil 'on prive l'institution scolaire d'une opportunité d'éduquer les jeunes aux usages d'Internet'."
            },
            {
              id: "ce1-6",
              number: 6,
              prompt: "Pour Catherine Nave-Bekhti, la question du numérique à l’école est…",
              question: "Pour Catherine Nave-Bekhti, la question du numérique à l’école est…",
              options: [
                "peu discutée.",
                "très complexe.",
                "souvent exagérée."
              ],
              correct: 0,
              points: 1.0,
              explanation: "Elle qualifie l'éducation aux usages numériques de sujet 'encore trop peu discuté en classe'."
            },
            {
              id: "ce1-7",
              number: 7,
              prompt: "Pour Jean-Thomas Giovannoni, la question de l’usage du téléphone chez les jeunes relève principalement de la responsabilité…",
              question: "Pour Jean-Thomas Giovannoni, la question de l’usage du téléphone chez les jeunes relève principalement de la responsabilité…",
              options: [
                "de l'école.",
                "de la famille.",
                "des fabricants de téléphones."
              ],
              correct: 1,
              points: 0.5,
              explanation: "Pour le psychologue, 'c'est d'abord au sein de la famille que doivent s'instaurer les règles de déconnexion'."
            }
          ]
        },
        {
          id: "ce1-ex2",
          partNumber: 2,
          title: "Exercice 2 : Aller au travail à vélo ?",
          source: "Fabrice POULIQUEN, www.20minutes.fr",
          points: 9.0,
          totalPoints: 9.0,
          text: `
            <p><strong>L'indemnité kilométrique vélo : un coup de pédale pour la transition écologique ?</strong></p>
            <p>Instaurée pour encourager les déplacements domicile-travail écologiques, l'indemnité kilométrique vélo (IKV) permet aux salariés cyclistes de percevoir une compensation financière prise en charge par leur entreprise. Pour Olivier Schneider, président de la Fédération des usagers de la bicyclette (FUB), cette mesure est historique : elle donne enfin au vélo un statut et une reconnaissance comparables aux autres modes de transport traditionnels comme la voiture ou les transports en commun.</p>
            <p>Cependant, le dispositif reste pour l'instant peu pratiqué à grande échelle car il repose sur le volontariat des employeurs. Beaucoup d'entreprises hésitent encore à s'engager. Pourtant, dans les structures pionnières qui l'ont instauré, les effets sont spectaculairement positifs : la part des salariés venant à vélo a doublé en quelques mois.</p>
            <p>Plusieurs études démontrent que pour les trajets urbains de moins de cinq kilomètres, le vélo s'impose aujourd'hui comme le moyen de transport le plus efficace et le plus rapide, surpassant la voiture engluée dans les embouteillages. Un député engagé sur le dossier souligne également que les salariés cyclistes sont en meilleure santé, plus ponctuels et nettement plus productifs au bureau.</p>
            <p>Pour autant, Olivier Schneider rappelle que l'incitation financière ne suffit pas : la priorité absolue des usagers reste la création d'infrastructures sécurisées et d'aménagements cyclables continus et séparés du trafic automobile.</p>
          `,
          questions: [
            {
              id: "ce1-8",
              number: 1,
              prompt: "L’indemnité kilométrique pour le vélo est financée par…",
              question: "L’indemnité kilométrique pour le vélo est financée par…",
              options: [
                "l’État.",
                "les entreprises.",
                "les usagers."
              ],
              correct: 1,
              points: 1.0,
              explanation: "Le texte précise que l'indemnité est 'prise en charge par leur entreprise'."
            },
            {
              id: "ce1-9",
              number: 2,
              prompt: "Pour Olivier Schneider, l’indemnité offerte aux usagers du vélo va… autres modes de transport.",
              question: "Pour Olivier Schneider, l’indemnité offerte aux usagers du vélo va… autres modes de transport.",
              options: [
                "remplacer progressivement les",
                "donner au vélo une place comparable aux",
                "coûter plus cher que les"
              ],
              correct: 1,
              points: 2.5,
              explanation: "Elle donne au vélo 'un statut et une reconnaissance comparables aux autres modes de transport'."
            },
            {
              id: "ce1-10",
              number: 3,
              prompt: "D’après le texte, l’indemnité kilométrique pour le vélo est encore peu pratiquée car elle est…",
              question: "D’après le texte, l’indemnité kilométrique pour le vélo est encore peu pratiquée car elle est…",
              options: [
                "facultative.",
                "trop récente.",
                "très contraignante."
              ],
              correct: 0,
              points: 2.5,
              explanation: "Le dispositif est peu pratiqué 'car il repose sur le volontariat des employeurs' (elle est donc facultative)."
            },
            {
              id: "ce1-11",
              number: 4,
              prompt: "Dans les entreprises qui la mettent en place, l’indemnité kilométrique pour le vélo a des effets…",
              question: "Dans les entreprises qui la mettent en place, l’indemnité kilométrique pour le vélo a des effets…",
              options: [
                "positifs.",
                "mitigés.",
                "négatifs."
              ],
              correct: 0,
              points: 0.5,
              explanation: "Dans les structures pionnières, 'les effets sont spectaculairement positifs' (la part des cyclistes a doublé)."
            },
            {
              id: "ce1-12",
              number: 5,
              prompt: "Le moyen de transport le plus efficace pour se rendre au travail en ville serait actuellement…",
              question: "Le moyen de transport le plus efficace pour se rendre au travail en ville serait actuellement…",
              options: [
                "le vélo.",
                "la voiture.",
                "le bus."
              ],
              correct: 0,
              points: 1.0,
              explanation: "Pour les trajets urbains de moins de 5 km, le vélo s'impose comme 'le moyen de transport le plus efficace et le plus rapide'."
            },
            {
              id: "ce1-13",
              number: 6,
              prompt: "Selon le député, l’usage du vélo permettrait aux employés d’être…",
              question: "Selon le député, l’usage du vélo permettrait aux employés d’être…",
              options: [
                "plus détendus.",
                "plus productifs.",
                "plus solidaires."
              ],
              correct: 1,
              points: 1.0,
              explanation: "Le député note que les salariés cyclistes sont 'en meilleure santé, plus ponctuels et nettement plus productifs'."
            },
            {
              id: "ce1-14",
              number: 7,
              prompt: "Selon Olivier Schneider, les cyclistes attendent aujourd’hui…",
              question: "Selon Olivier Schneider, les cyclistes attendent aujourd’hui…",
              options: [
                "des indemnités plus importantes.",
                "des vélos plus faciles à utiliser.",
                "des installations plus adaptées aux vélos."
              ],
              correct: 2,
              points: 0.5,
              explanation: "La priorité des usagers reste 'la création d'infrastructures sécurisées et d'aménagements cyclables continus'."
            }
          ]
        },
        {
          id: "ce1-ex3",
          partNumber: 3,
          title: "Exercice 3 : Adaptations de livres au cinéma : pour ou contre ?",
          source: "Forum de discussion culturel",
          points: 7.0,
          totalPoints: 7.0,
          text: `
            <p><strong>Forum : Que pensez-vous des adaptations cinématographiques de romans ?</strong></p>
            <p><strong>Luc :</strong> Pour ma part, je trouve que les adaptations cinématographiques constituent une formidable porte d'entrée vers la littérature. Combien de spectateurs ont découvert l'univers de Tolkien ou de Dumas après avoir vu un film captivant au cinéma ? De plus, un film est avant tout le regard subjectif et l'interprétation artistique d'un réalisateur. Loin de trahir le livre, il en propose une lecture nouvelle et vivante qui stimule la curiosité du grand public.</p>
            <p><strong>Sacha :</strong> Il me semble totalement vain et injuste de vouloir comparer un roman et son adaptation sur grand écran. Ce sont deux médiums d'expression artistique fondamentalement distincts avec leurs propres contraintes temporelles et visuelles. Un cinéaste ne peut pas tout filmer : il est forcé d'opérer des coupes drastiques, de fusionner des personnages et de prendre de la distance pour construire une œuvre autonome qui tienne en deux heures sans être un simple copier-coller indigeste du livre.</p>
            <p><strong>Marjorie :</strong> Rien ne vaut un bon livre ! À chaque fois que je vais voir l'adaptation d'un roman que j'ai adoré, la déception est totale. La lecture permet de bâtir dans son esprit un monde imaginaire d'une richesse infinie avec des visages et des décors uniques. Le cinéma fige tout, impose la vision étriquée du réalisateur et détruit toute la magie poétique construite par l'écrivain. Les coupes narratives mutilent l'intrigue et appauvrissent la psychologie des héros.</p>
          `,
          questions: [
            {
              id: "ce1-15",
              number: 1,
              prompt: "Il est injuste de comparer un roman à son adaptation cinématographique.",
              question: "Il est injuste de comparer un roman à son adaptation cinématographique.",
              options: [
                "Luc",
                "Sacha",
                "Marjorie"
              ],
              correct: 1,
              points: 2.0,
              explanation: "Sacha affirme qu'il est 'totalement vain et injuste de vouloir comparer un roman et son adaptation sur grand écran'."
            },
            {
              id: "ce1-16",
              number: 2,
              prompt: "Les films adaptés de romans peuvent encourager les gens à lire.",
              question: "Les films adaptés de romans peuvent encourager les gens à lire.",
              options: [
                "Luc",
                "Sacha",
                "Marjorie"
              ],
              correct: 0,
              points: 0.5,
              explanation: "Luc explique que le cinéma est 'une formidable porte d'entrée vers la littérature' donnant envie de lire l'œuvre originale."
            },
            {
              id: "ce1-17",
              number: 3,
              prompt: "Un cinéaste qui adapte un livre au cinéma doit forcément prendre de la distance par rapport au livre.",
              question: "Un cinéaste qui adapte un livre au cinéma doit forcément prendre de la distance par rapport au livre.",
              options: [
                "Luc",
                "Sacha",
                "Marjorie"
              ],
              correct: 1,
              points: 1.0,
              explanation: "Sacha insiste sur le fait que le cinéaste 'est forcé d'opérer des coupes et de prendre de la distance pour construire une œuvre autonome'."
            },
            {
              id: "ce1-18",
              number: 4,
              prompt: "Il est plus plaisant de lire un roman que de voir son adaptation cinématographique.",
              question: "Il est plus plaisant de lire un roman que de voir son adaptation cinématographique.",
              options: [
                "Luc",
                "Sacha",
                "Marjorie"
              ],
              correct: 2,
              points: 1.5,
              explanation: "Marjorie proclame avec vigueur que 'Rien ne vaut un bon livre !' et exprime sa déception systématique devant les films."
            },
            {
              id: "ce1-19",
              number: 5,
              prompt: "Les films adaptés de romans sont l’interprétation personnelle des cinéastes.",
              question: "Les films adaptés de romans sont l’interprétation personnelle des cinéastes.",
              options: [
                "Luc",
                "Sacha",
                "Marjorie"
              ],
              correct: 0,
              points: 1.5,
              explanation: "Luc souligne qu'un film est 'avant tout le regard subjectif et l'interprétation artistique d'un réalisateur'."
            },
            {
              id: "ce1-20",
              number: 6,
              prompt: "Les adaptations cinématographiques détruisent l’image fictive donnée par les œuvres littéraires.",
              question: "Les adaptations cinématographiques détruisent l’image fictive donnée par les œuvres littéraires.",
              options: [
                "Luc",
                "Sacha",
                "Marjorie"
              ],
              correct: 2,
              points: 0.5,
              explanation: "Marjorie affirme que le cinéma fige tout et 'détruit toute la magie poétique et le monde imaginaire construit par l'écrivain'."
            }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------------
    // PRODUCTION ÉCRITE (PE - 25 points - 1 heure)
    // -----------------------------------------------------------------------
    pe: {
      id: "pe-ex1",
      title: "Production écrite",
      name: "Production écrite",
      duration: 60,
      durationMinutes: 60,
      maxScore: 25.0,
      totalPoints: 25.0,
      type: "Lettre formelle argumentative de réclamation",
      targetWords: 250,
      minWords: 225,
      maxWords: 275,
      hardMinimumWords: 125,
      eliminatoryWords: 125,
      promptTitle: "Lettre au maire : Contestation de l'ouverture d'une zone piétonne aux autobus",
      prompt: `
        Vous vivez en France dans une zone piétonne du centre-ville. Le maire de votre ville a décidé d’ouvrir certaines des rues de cette zone à la circulation des autobus pendant la journée.
        En tant que représentant(e) des résidents de votre immeuble, vous écrivez une lettre au maire pour contester cette décision en justifiant votre point de vue avec des arguments précis et des propositions alternatives.
        
        Longueur attendue : 250 mots environ (recommandé entre 225 et 275 mots).
      `,
      methodologyGuide: [
        "1. Respecter scrupuleusement la mise en page de la lettre formelle (Coordonnées émetteur, destinataire, lieu, date, objet clair).",
        "2. Formule d'appel officielle : 'Monsieur le Maire,'.",
        "3. Introduction : Exposer l'objet de la démarche en tant que représentant élu des résidents et exprimer la vive préoccupation du voisinage.",
        "4. Argument 1 (Sécurité & Cadre de vie) : Risques accrus pour les piétons, enfants et personnes âgées dans une zone jadis apaisée.",
        "5. Argument 2 (Environnement & Nuisances) : Pollution sonore, vibrations fragilisant les bâtis anciens et émissions de gaz d'échappement.",
        "6. Propositions constructives : Proposer un tracé de contournement sur les grands boulevards ou des navettes électriques légères.",
        "7. Formule de conclusion avec demande de concertation et formule de politesse protocolaire distinguée."
      ],
      criteria: [
        {
          id: "crit-1",
          label: "Réalisation de la tâche (Pragmatique)",
          maxPoints: 5,
          descriptors: {
            0: "Production hors-sujet, non recevable ou inférieure à 125 mots (note 0/25 globale).",
            1: "Consigne partiellement comprise. Idées basiques sans véritable argumentation ni prise en compte du destinataire.",
            3: "Respect du format lettre formelle, arguments clairs avec justification et propositions d'alternatives (Niveau B2).",
            5: "Excellente prise en compte du statut et du destinataire, argumentation fouillée, nuancée et très persuasive (Niveau B2+)."
          }
        },
        {
          id: "crit-2",
          label: "Cohérence et cohésion (Pragmatique)",
          maxPoints: 5,
          descriptors: {
            0: "Texte incohérent, sans structure de paragraphes ni liens logiques.",
            1: "Articulateurs très basiques (et, mais, parce que), transitions abruptes.",
            3: "Paragraphes bien distincts, utilisation correcte d'articulateurs logiques variés (Niveau B2).",
            5: "Organisation logique irréprochable, progression fluide, connecteurs de haut niveau parfaitement intégrés (Niveau B2+)."
          }
        },
        {
          id: "crit-3",
          label: "Adéquation sociolinguistique (Sociolinguistique)",
          maxPoints: 5,
          descriptors: {
            0: "Registre familier inadapté, absence totale de formules de politesse.",
            1: "Registre hésitant, formules épistolaires maladroites ou incomplètes.",
            3: "Respect constant du registre formel, formules d'appel et de politesse protocolaires exactes (Niveau B2).",
            5: "Parfaite maîtrise du ton administratif, diplomatie épistolaire exemplaire sans agressivité (Niveau B2+)."
          }
        },
        {
          id: "crit-4",
          label: "Lexique & Orthographe lexicale (Linguistique)",
          maxPoints: 5,
          descriptors: {
            0: "Vocabulaire indigent empêchant la compréhension.",
            1: "Lexique restreint, répétitions fréquentes, fautes d'orthographe notables.",
            3: "Large éventail lexical adapté à l'urbanisme et à la citoyenneté, bonne orthographe d'usage (Niveau B2).",
            5: "Vocabulaire riche, varié et précis (nuances, collocations soutenues), orthographe lexicale quasi sans faute (Niveau B2+)."
          }
        },
        {
          id: "crit-5",
          label: "Morphosyntaxe & Correction grammaticale (Linguistique)",
          maxPoints: 5,
          descriptors: {
            0: "Erreurs systématiques rendant la lecture pénible.",
            1: "Phrases simples uniquement, erreurs fréquentes sur les accords et temps complexes.",
            3: "Bonne maîtrise des structures complexes (subjonctif, conditionnel, pronoms relatifs), rares erreurs (Niveau B2).",
            5: "Variété syntaxique remarquable (structures clivées, passif, gérondif), maîtrise morphosyntaxique quasi irréprochable (Niveau B2+)."
          }
        }
      ],
      sampleAnswer: `Camille Laurent
Représentante des résidents du 14, rue des Fleurs
69002 Lyon

À l'attention de Monsieur le Maire
Hôtel de Ville de Lyon
Place des Terreaux, 69001 Lyon

Lyon, le 30 août 2026

Objet : Contestation de l'ouverture de la zone piétonne à la circulation des autobus

Monsieur le Maire,

En tant que représentante élue des résidents de l'immeuble situé au 14, rue des Fleurs, je me permets de vous adresser la présente lettre afin de vous faire part de notre vive inquiétude à la suite de votre décision d'ouvrir notre zone piétonne au passage quotidien des autobus.

Certes, nous comprenons parfaitement votre volonté de fluidifier le réseau des transports en commun municipaux. Néanmoins, cette mesure met directement en péril la sécurité des riverains, notamment des jeunes enfants et des personnes âgées, habitués à déambuler en toute quiétude. De surcroît, le passage incessant de véhicules lourds engendrera d'importantes nuisances sonores et des vibrations préjudiciables à la structure de nos immeubles historiques.

C'est pourquoi nous vous suggérons de privilégier un itinéraire alternatif contournant le secteur sauvegardé par les grands boulevards extérieurs, ou d'expérimenter des navettes électriques légères à vitesse réduite.

Au vu des arguments susmentionnés, nous vous saurions gré de bien vouloir suspendre ce projet et de nous accorder une audience afin d'examiner ensemble des solutions pérennes.

Dans l'attente de votre réponse, je vous prie d'agréer, Monsieur le Maire, l'expression de ma considération distinguée.

Camille Laurent`
    },

    // -----------------------------------------------------------------------
    // PRODUCTION ORALE (PO - 25 points - 20 min + 30 min préparation)
    // -----------------------------------------------------------------------
    po: {
      id: "po-ex1",
      title: "Production orale",
      name: "Production orale",
      duration: 20,
      durationMinutes: 20,
      preparationMinutes: 30,
      maxScore: 25.0,
      totalPoints: 25.0,
      topics: [
        {
          id: "po-top-1",
          title: "Sujet 1 : L'école en demande-t-elle trop aux parents ?",
          source: "La Croix",
          text: "Devoirs à la maison, projets scolaires, surveillance numérique des notes : de plus en plus de parents estiment que l'institution scolaire leur délègue une charge éducative excessive, source d'anxiété et de conflits familiaux.",
          guidingQuestions: [
            "Quelle doit être la frontière entre la responsabilité de l'école et celle de la famille ?",
            "Les devoirs du soir renforcent-ils les inégalités sociales entre élèves ?",
            "Quelles solutions préconisez-vous pour apaiser la relation parents-enseignants ?"
          ]
        },
        {
          id: "po-top-2",
          title: "Sujet 2 : Le travail est-il la condition indispensable du bonheur ?",
          source: "L'Express",
          text: "Si le travail demeure un vecteur essentiel d'intégration sociale et de réalisation de soi, la quête d'épanouissement personnel pousse de nombreux actifs à privilégier leur temps libre sur l'ascension professionnelle.",
          guidingQuestions: [
            "Le travail est-il pour vous une simple nécessité financière ou une vocation ?",
            "Comment analysez-vous le phénomène de désengagement professionnel chez les jeunes générations ?",
            "Une société peut-elle garantir le bien-être individuel en réduisant la place du travail ?"
          ]
        },
        {
          id: "po-top-3",
          title: "Sujet 3 : L'université doit-elle uniquement préparer à un métier ?",
          source: "La Voix du Nord",
          text: "Face aux exigences d'insertion sur le marché de l'emploi, les formations universitaires sont incitées à se professionnaliser au risque de sacrifier la culture générale et la recherche fondamentale.",
          guidingQuestions: [
            "L'enseignement supérieur doit-il être subordonné aux besoins immédiats des entreprises ?",
            "Quelle est la valeur de la culture humaniste et de la pensée critique dans le monde moderne ?",
            "Comment concilier excellence académique et employabilité ?"
          ]
        },
        {
          id: "po-top-4",
          title: "Sujet 4 : Peut-on encore vivre heureux sans télévision ni écrans connectés ?",
          source: "Le Télégramme",
          text: "Face à l'omniprésence des flux numériques et des algorithmes, certains citoyens choisissent délibérément de bannir les écrans de leur foyer pour retrouver le goût de la lecture et du dialogue.",
          guidingQuestions: [
            "Le refus des écrans relève-t-il d'un choix salutaire ou d'une marginalisation sociale ?",
            "Quels sont les bienfaits et les difficultés d'une cure de déconnexion numérique ?",
            "Comment éduquer les enfants à un usage mesuré et émancipateur des technologies ?"
          ]
        },
        {
          id: "po-top-5",
          title: "Sujet 5 : Le télétravail constitue-t-il une véritable solution écologique durable ?",
          source: "Bretagne Durable",
          text: "En supprimant les déplacements quotidiens polluants, le télétravail semble vertueux. Pourtant, l'explosion de la consommation numérique et l'étalement urbain vers les campagnes nuancent ce bilan environnemental.",
          guidingQuestions: [
            "Quel est le bilan écologique global du travail à distance selon vous ?",
            "Le télétravail risque-t-il d'encourager l'artificialisation des sols en milieu rural ?",
            "Quelles règles collectives instaurer pour allier flexibilité et sobriété énergétique ?"
          ]
        }
      ]
    }
  }
};

const exam2Data = {
  id: "delf-b2-fei-ex2",
  code: "SUJET_DÉMO_B2TP",
  title: "DELF B2 Tout Public — Examen Blanc Officiel 2",
  subtitle: "Format Classique France Éducation International (Compréhension & Questions Mixtes)",
  format: "classic",
  year: 2023,
  duration: 150,
  totalDurationMinutes: 150,
  collectivePoints: 75,
  oralPoints: 25,
  totalPoints: 100,
  passingScore: 50,
  eliminatoryScore: 5,
  source: "France Éducation International (FEI)",
  sections: {
    co: {
      id: "co-ex2",
      title: "Compréhension de l'oral",
      name: "Compréhension de l'oral",
      duration: 30,
      durationMinutes: 30,
      maxScore: 25.0,
      totalPoints: 25.0,
      audioIntegralUrl: "ressources/DELF B2/ex2/delf-b2-tp-coll-exemple2-integral.mp3",
      audioTracks: [
        { id: "track-1", file: "ressources/DELF B2/ex2/delf-b2-tp-coll-exemple2-exercice1.mp3", durationSec: 360 },
        { id: "track-2", file: "ressources/DELF B2/ex2/delf-b2-tp-coll-exemple2-exercice2.mp3", durationSec: 180 }
      ],
      exercises: [
        {
          id: "co2-ex1",
          partNumber: 1,
          title: "Exercice 1 : Radio — Risques infectieux et téléphones portables à l'hôpital",
          theme: "Santé Publique & Hygiène",
          audioFile: "ressources/DELF B2/ex2/delf-b2-tp-coll-exemple2-exercice1.mp3",
          audioUrl: "ressources/DELF B2/ex2/delf-b2-tp-coll-exemple2-exercice1.mp3",
          points: 18.0,
          totalPoints: 18.0,
          listeningsCount: 2,
          instructions: "Vous allez entendre 2 fois un enregistrement sonore de 5 minutes environ. Vous aurez 1 minute pour lire les questions, puis une 1ère écoute, 3 minutes de pause, une 2nde écoute et 2 minutes pour compléter vos réponses.",
          transcript: `
            Entretien avec le Pr Michel Drancourt sur le risque de transmission de bactéries pathogènes par les écrans de téléphones portables du personnel soignant à l'hôpital, et la nécessité impérieuse de désinfecter régulièrement ces vecteurs microbiens avec des lingettes hydro-alcooliques.
          `,
          questions: [
            {
              id: "co2-1",
              number: 1,
              prompt: "Quel problème d'hygiène hospitalière est soulevé par le Pr Drancourt ?",
              question: "Quel problème d'hygiène hospitalière est soulevé par le Pr Drancourt ?",
              options: [
                "La mauvaise qualité de l'eau potable dans les chambres.",
                "La contamination bactérienne des téléphones portables des soignants.",
                "L'absence de masques de protection dans les blocs opératoires."
              ],
              correct: 1,
              points: 2.0,
              explanation: "Le professeur alerte sur la présence de bactéries pathogènes sur les téléphones portables manipulés par les soignants."
            },
            {
              id: "co2-2",
              number: 2,
              prompt: "Pourquoi les téléphones sont-ils particulièrement exposés aux bactéries ?",
              question: "Pourquoi les téléphones sont-ils particulièrement exposés aux bactéries ?",
              options: [
                "Parce qu'ils chauffent et sont manipulés constamment sans lavage préalable des mains.",
                "Parce qu'ils sont fabriqués avec des métaux toxiques.",
                "Parce qu'ils attirent la poussière par ondes électromagnétiques."
              ],
              correct: 0,
              points: 2.0,
              explanation: "La chaleur de la batterie et les manipulations répétées en font des nids bactériens idéaux."
            },
            {
              id: "co2-3",
              number: 3,
              prompt: "Quelle mesure de prévention simple est préconisée par l'équipe médicale ?",
              question: "Quelle mesure de prévention simple est préconisée par l'équipe médicale ?",
              options: [
                "L'interdiction absolue de tout appareil électronique dans les hôpitaux.",
                "La désinfection quotidienne systématique des appareils avec des lingettes adaptées.",
                "Le remplacement hebdomadaire des téléphones de tout le personnel."
              ],
              correct: 1,
              points: 2.0,
              explanation: "Le protocole recommande de nettoyer les écrans avec des solutions ou lingettes désinfectantes."
            }
          ]
        },
        {
          id: "co2-ex2",
          partNumber: 2,
          title: "Exercice 2 : Reportage — La Journée mondiale du don du sang & Festival Globule",
          theme: "Solidarité & Santé",
          audioFile: "ressources/DELF B2/ex2/delf-b2-tp-coll-exemple2-exercice2.mp3",
          audioUrl: "ressources/DELF B2/ex2/delf-b2-tp-coll-exemple2-exercice2.mp3",
          points: 7.0,
          totalPoints: 7.0,
          listeningsCount: 1,
          instructions: "Vous allez entendre 1 seule fois un enregistrement sonore. Vous aurez 1 minute pour lire les questions, écouterez l'enregistrement puis aurez 3 minutes pour répondre.",
          transcript: `
            Reportage lors du Festival Globule à l'occasion de la Journée mondiale des donneurs de sang, rappelant les critères médicaux pour donner son sang (18-70 ans, peser plus de 50 kg) et la nécessité de renouveler les réserves avant les vacances estivales.
          `,
          questions: [
            {
              id: "co2-4",
              number: 1,
              prompt: "Quel est l'objectif principal du Festival Globule ?",
              question: "Quel est l'objectif principal du Festival Globule ?",
              options: [
                "Sensibiliser le grand public et collecter des dons de sang avant l'été.",
                "Vendre des produits dérivés au profit de la recherche médicale.",
                "Récompenser les meilleurs laboratoires pharmaceutiques français."
              ],
              correct: 0,
              points: 2.0,
              explanation: "Le festival vise à mobiliser de nouveaux donneurs pour reconstituer les stocks avant la période critique de l'été."
            },
            {
              id: "co2-5",
              number: 2,
              prompt: "Quelle est l'une des conditions physiques requises pour pouvoir donner son sang ?",
              question: "Quelle est l'une des conditions physiques requises pour pouvoir donner son sang ?",
              options: [
                "Être âgé de plus de 25 ans et mesurer au moins 1m70.",
                "Être âgé de 18 à 70 ans et peser au minimum 50 kg.",
                "Avoir obligatoirement suivi une formation de secourisme."
              ],
              correct: 1,
              points: 2.0,
              explanation: "Les critères légaux exigent un âge compris entre 18 et 70 ans et un poids minimal de 50 kg."
            }
          ]
        }
      ]
    },
    ce: {
      id: "ce-ex2",
      title: "Compréhension des écrits",
      name: "Compréhension des écrits",
      duration: 60,
      durationMinutes: 60,
      maxScore: 25.0,
      totalPoints: 25.0,
      exercises: [
        {
          id: "ce2-ex1",
          partNumber: 1,
          title: "Exercice 1 : En France, les déchets électroniques des entreprises seront recyclés",
          source: "Angela BOLIS, Le Monde",
          points: 13.0,
          totalPoints: 13.0,
          text: `
            <p><strong>Recyclage des déchets électroniques professionnels : un gisement sous-exploité</strong></p>
            <p>Alors que le recyclage des équipements électroménagers des particuliers est désormais bien ancré dans les mœurs, le traitement des déchets électroniques professionnels (ordinateurs de bureau, serveurs, téléphones d'entreprise) accusait un retard substantiel en France.</p>
            <p>Une nouvelle réglementation impose désormais aux entreprises de confier leurs matériels informatiques en fin de vie à des éco-organismes agréés. L'objectif est double : récupérer les métaux rares et stratégiques indispensables à la souveraineté industrielle et lutter contre les décharges sauvages dans les pays en développement.</p>
          `,
          questions: [
            {
              id: "ce2-1",
              number: 1,
              prompt: "Quel constat est dressé concernant le recyclage électronique des entreprises comparé à celui des particuliers ?",
              question: "Quel constat est dressé concernant le recyclage électronique des entreprises comparé à celui des particuliers ?",
              options: [
                "Les entreprises étaient très en avance sur les ménages.",
                "Le recyclage professionnel accusait un retard substantiel.",
                "Il n'existe aucune différence entre les deux secteurs."
              ],
              correct: 1,
              points: 2.0,
              explanation: "Le texte note que le traitement des déchets professionnels 'accusait un retard substantiel en France'."
            },
            {
              id: "ce2-2",
              number: 2,
              prompt: "Que doivent désormais faire les entreprises de leurs ordinateurs obsolètes ?",
              question: "Que doivent désormais faire les entreprises de leurs ordinateurs obsolètes ?",
              options: [
                "Les jeter avec les ordures ménagères ordinaires.",
                "Les confier obligatoirement à des éco-organismes agréés.",
                "Les exporter sans contrôle hors de l'Union européenne."
              ],
              correct: 1,
              points: 2.0,
              explanation: "La loi impose de confier le matériel 'à des éco-organismes agréés' pour un recyclage certifié."
            }
          ]
        },
        {
          id: "ce2-ex2",
          partNumber: 2,
          title: "Exercice 2 : Les nouveaux pères ne sont pas des gens « fabuleux »",
          source: "Thomas MESSIAS, Slate.fr",
          points: 12.0,
          totalPoints: 12.0,
          text: `
            <p><strong>Paternité moderne : cesser de célébrer l'évidence</strong></p>
            <p>Dans cet essai percutant, l'auteur s'insurge contre la tendance médiatique à qualifier d'« extraordinaires » ou de « fabuleux » les pères qui changent une couche ou vont chercher leur enfant à la crèche. Présenter comme un exploit héroïque ce qui relève de la simple responsabilité parentale normale contribue en réalité à perpétuer la dissymétrie avec les mères, dont l'investissement quotidien reste banalisé et invisibilisé.</p>
          `,
          questions: [
            {
              id: "ce2-3",
              number: 1,
              prompt: "Quelle attitude médiatique l'auteur critique-t-il dans cet article ?",
              question: "Quelle attitude médiatique l'auteur critique-t-il dans cet article ?",
              options: [
                "Le fait de féliciter démesurément les pères pour des gestes parentaux ordinaires.",
                "Le manque total d'intérêt des journalistes pour la vie des familles.",
                "L'interdiction faite aux pères de s'exprimer sur les réseaux sociaux."
              ],
              correct: 0,
              points: 2.0,
              explanation: "L'auteur critique la tendance à qualifier d'exploit héroïque des actes parentaux qui relèvent de la responsabilité normale."
            },
            {
              id: "ce2-4",
              number: 2,
              prompt: "Quel est l'effet pervers de cette glorification des pères selon l'auteur ?",
              question: "Quel est l'effet pervers de cette glorification des pères selon l'auteur ?",
              options: [
                "Elle décourage les pères de s'impliquer dans l'éducation.",
                "Elle banalise et invisibilise le travail quotidien des mères.",
                "Elle augmente les litiges devant les tribunaux familiaux."
              ],
              correct: 1,
              points: 2.0,
              explanation: "Cette survalorisation maintient la dissymétrie en rendant invisible l'engagement quotidien et normal des mères."
            }
          ]
        }
      ]
    },
    pe: {
      id: "pe-ex2",
      title: "Production écrite",
      name: "Production écrite",
      duration: 60,
      durationMinutes: 60,
      maxScore: 25.0,
      totalPoints: 25.0,
      type: "Lettre formelle de proposition à la direction",
      targetWords: 250,
      minWords: 225,
      maxWords: 275,
      hardMinimumWords: 125,
      eliminatoryWords: 125,
      promptTitle: "Lettre à la Direction : Proposition d'un plan de mobilité durable en entreprise",
      prompt: `
        Vous travaillez dans une grande entreprise installée dans une zone d'activités mal desservie par les transports en commun.
        En tant que délégué(e) du personnel, vous écrivez à votre Directeur Général pour lui proposer la mise en place d'un plan de mobilité durable (covoiturage, indemnité kilométrique vélo, navettes d'entreprise) afin d'améliorer la qualité de vie des salariés et de réduire l'empreinte carbone de l'entreprise.
        
        Longueur attendue : 250 mots environ (225 à 275 mots).
      `,
      criteria: [
        { id: "crit-1", label: "Réalisation de la tâche (Pragmatique)", maxPoints: 5, descriptors: { 0: "Hors-sujet", 1: "Basique", 3: "Conforme B2", 5: "Excellent B2+" } },
        { id: "crit-2", label: "Cohérence et cohésion (Pragmatique)", maxPoints: 5, descriptors: { 0: "Incohérent", 1: "Faible", 3: "Bien structuré B2", 5: "Fluide et logique B2+" } },
        { id: "crit-3", label: "Adéquation sociolinguistique (Sociolinguistique)", maxPoints: 5, descriptors: { 0: "Inadapté", 1: "Hésitant", 3: "Registre formel respecté B2", 5: "Diplomatie managériale B2+" } },
        { id: "crit-4", label: "Lexique & Orthographe lexicale (Linguistique)", maxPoints: 5, descriptors: { 0: "Indigent", 1: "Restreint", 3: "Lexique professionnel B2", 5: "Riche et précis B2+" } },
        { id: "crit-5", label: "Morphosyntaxe & Correction grammaticale (Linguistique)", maxPoints: 5, descriptors: { 0: "Bloquant", 1: "Simple", 3: "Contrôle des structures B2", 5: "Varié et sans faute B2+" } }
      ],
      sampleAnswer: `Alexandre Mercier
Représentant du personnel
Société Novatech Solutions
Parc d'Activités des Vignes, 33000 Bordeaux

À l'attention de Monsieur le Directeur Général
Novatech Solutions, Bordeaux

Bordeaux, le 30 août 2026

Objet : Proposition d'un plan de mobilité durable pour les collaborateurs

Monsieur le Directeur Général,

En ma qualité de représentant du personnel, je me permets de vous solliciter afin de soumettre à votre bienveillante attention un projet d'amélioration de nos conditions de déplacement quotidien.

Actuellement, l'enclavement de notre site d'activité contraint plus de 85 % de nos collaborateurs à utiliser leur véhicule personnel, générant un stress important lié aux embouteillages et des coûts financiers considérables. De surcroît, cette situation pèse lourdement sur le bilan carbone de notre entreprise.

Afin de concilier bien-être au travail et responsabilité environnementale, nous vous proposons la mise en œuvre d'un plan de mobilité ambitieux articulé autour de trois axes :
1. L'instauration d'une prime kilométrique pour les salariés optant pour le vélo ou la marche ;
2. La création d'une plateforme interne facilitant le covoiturage entre collègues d'un même secteur ;
3. La mise en service d'une navette électrique reliant notre entreprise à la gare centrale aux heures d'affluence.

Ces initiatives renforceraient l'attractivité de notre marque employeur tout en diminuant l'absentéisme et la fatigue de nos équipes.

Restant à votre entière disposition pour vous présenter ce projet en détail lors d'un prochain entretien, je vous prie d'agréer, Monsieur le Directeur Général, l'expression de mes salutations les plus distinguées.

Alexandre Mercier`
    },
    po: {
      id: "po-ex2",
      title: "Production orale",
      name: "Production orale",
      duration: 20,
      durationMinutes: 20,
      preparationMinutes: 30,
      maxScore: 25.0,
      totalPoints: 25.0,
      topics: [
        {
          id: "po2-top-1",
          title: "Sujet 1 : La gratuité des transports publics est-elle la solution d'avenir ?",
          source: "Le Monde",
          text: "Plusieurs agglomérations européennes ont instauré la gratuité totale des bus et tramways pour lutter contre la pollution et redonner du pouvoir d'achat aux usagers.",
          guidingQuestions: [
            "Quels sont les avantages et les limites économiques de la gratuité des transports ?",
            "La gratuité suffit-elle à convaincre les automobilistes d'abandonner leur voiture ?"
          ]
        }
      ]
    }
  }
};

window.officialExamsDataset = {
  exam1: exam1Data,
  exam2: exam2Data
};

// Also expose as array for list-based iteration
window.officialExamsList = [exam1Data, exam2Data];
