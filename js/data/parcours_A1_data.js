/* ==========================================================================
   PARCOURS A1 DATASET (10 CHAPITRES)
   Aggrégation modulaire des chapitres A1 (C1 à C10).
   ========================================================================== */

window.parcours_A1_Dataset = [
  ...(window.parcours_A1_C1_Dataset ? [window.parcours_A1_C1_Dataset] : []),
  ...(window.parcours_A1_C2_Dataset ? [window.parcours_A1_C2_Dataset] : []),
  ...(window.parcours_A1_C3_Dataset ? [window.parcours_A1_C3_Dataset] : []),
  ...(window.parcours_A1_C4_Dataset ? [window.parcours_A1_C4_Dataset] : []),
  ...(window.parcours_A1_C5_Dataset ? [window.parcours_A1_C5_Dataset] : []),
  ...(window.parcours_A1_C6_Dataset ? [window.parcours_A1_C6_Dataset] : []),
  ...(window.parcours_A1_C7_Dataset ? [window.parcours_A1_C7_Dataset] : []),
  ...(window.parcours_A1_C8_Dataset ? [window.parcours_A1_C8_Dataset] : []),
  ...(window.parcours_A1_C9_Dataset ? [window.parcours_A1_C9_Dataset] : []),
  ...(window.parcours_A1_C10_Dataset ? [window.parcours_A1_C10_Dataset] : [])
];

// Fallback autonome si les fichiers individuels ne sont pas chargés au préalable
if (window.parcours_A1_Dataset.length === 0) {
  window.parcours_A1_Dataset = [
  {
    "chapterId": "chap_1",
    "chapterNumber": 1,
    "chapterTitle": "Chapitre 1 : Identité et présentation",
    "chapterSubtitle": "自己紹介 — 自我介绍",
    "level": "A1",
    "year": 1,
    "icon": "badge",
    "color": "#2E7D32",
    "quests": [
      {
        "id": "quest_ch_1",
        "title": "Saluer, Se Présenter & Échanger",
        "level": "A1",
        "icon": "badge",
        "xp": 50,
        "description": "Maîtriser les compétences fondamentales de présentation et salutation en français A1.",
        "steps": [
          {
            "type": "image_scene",
            "title": "1. Scène visuelle : La première rencontre",
            "imageUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
            "caption": "Deux étudiants se rencontrent pour la première fois à l'université et font connaissance.",
            "words": [
              "Bonjour",
              "Le prénom",
              "Le nom",
              "La nationalité",
              "L'étudiant",
              "Enchanté"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "2. Vocabulaire Clé : Décliner son identité",
            "words": [
              "Le prénom",
              "Le nom",
              "La nationalité",
              "Étudiant(e)"
            ],
            "details": [
              {
                "word": "Le prénom",
                "type": "n. m.",
                "def": "Prénom personnel qui précède le nom de famille.",
                "example": "Mon prénom est Thomas."
              },
              {
                "word": "Le nom",
                "type": "n. m.",
                "def": "Nom de famille officiel transmis par les parents.",
                "example": "Mon nom de famille est Martin."
              },
              {
                "word": "La nationalité",
                "type": "n. f.",
                "def": "Appartenance juridique à un pays déterminé.",
                "example": "Ma nationalité est française."
              },
              {
                "word": "Étudiant(e)",
                "type": "n. / adj.",
                "def": "Personne inscrite à l'université ou dans une école.",
                "example": "Je suis étudiante à l'université de Lyon."
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "3. Formules de Salutation & Accueil",
            "words": [
              "Bonjour",
              "Enchanté(e)",
              "Au revoir",
              "Merci"
            ],
            "details": [
              {
                "word": "Bonjour",
                "type": "interj.",
                "def": "Salutation polie employée pendant la journée.",
                "example": "Bonjour madame, comment allez-vous ?"
              },
              {
                "word": "Enchanté(e)",
                "type": "adj.",
                "def": "Formule chaleureuse quand on fait la connaissance de quelqu un.",
                "example": "Enchanté de vous rencontrer !"
              },
              {
                "word": "Au revoir",
                "type": "loc. interj.",
                "def": "Formule usuelle pour prendre congé d'une personne.",
                "example": "Au revoir et bonne journée !"
              },
              {
                "word": "Merci",
                "type": "interj.",
                "def": "Mot essentiel pour exprimer sa gratitude.",
                "example": "Merci beaucoup pour votre aide précieuse."
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "4. Grammaire : Être et Avoir au présent",
            "question": "Complétez la présentation : « Bonjour ! Je ______ Lucas, je ______ français et j ______ 24 ans. »",
            "options": [
              "m'appelle / suis / ai",
              "suis / m'appelle / suis",
              "ai / suis / m'appelle",
              "m'appelle / ai / suis"
            ],
            "correctIndex": 0,
            "explanation": "En français, on dit « Je m'appelle + prénom », « Je suis + nationalité » et « J'ai + âge »."
          },
          {
            "type": "dialogue_view",
            "title": "5. Dialogue Modèle : Premier contact à la fac",
            "context": "Lucas et Sarah se croisent dans le hall de l'université avant leur premier cours.",
            "lines": [
              {
                "speaker": "Lucas",
                "text": "Bonjour ! Je m'appelle Lucas. Et toi, comment tu t'appelles ?"
              },
              {
                "speaker": "Sarah",
                "text": "Bonjour Lucas ! Moi, c'est Sarah. Tu es étudiant ici en première année ?"
              },
              {
                "speaker": "Lucas",
                "text": "Oui, exactement ! Je suis canadien et j'étudie l'histoire de l'art."
              },
              {
                "speaker": "Sarah",
                "text": "Enchantée ! Moi je suis française, j'habite à Lyon depuis deux ans."
              },
              {
                "speaker": "Lucas",
                "text": "Enchanté Sarah ! Le cours commence dans cinq minutes, on y va ensemble ?"
              },
              {
                "speaker": "Sarah",
                "text": "Avec plaisir, allons-y !"
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "6. Mémorisation Multilingue : Les salutations",
            "instructions": "Associez chaque formule de politesse française à sa traduction.",
            "pairs": [
              {
                "id": "a1_ch1_bonjour",
                "fr": "Bonjour",
                "en": "Hello / Good morning",
                "jp": "こんにちは (konnichiwa)",
                "cn": "你好 (nǐ hǎo)"
              },
              {
                "id": "a1_ch1_enchante",
                "fr": "Enchanté(e)",
                "en": "Nice to meet you",
                "jp": "はじめまして (hajimemashite)",
                "cn": "很高兴认识你 (hěn gāoxìng rènshi nǐ)"
              },
              {
                "id": "a1_ch1_aurevoir",
                "fr": "Au revoir",
                "en": "Goodbye",
                "jp": "さようなら (sayōnara)",
                "cn": "再见 (zàijiàn)"
              },
              {
                "id": "a1_ch1_merci",
                "fr": "Merci",
                "en": "Thank you",
                "jp": "ありがとう (arigatō)",
                "cn": "谢谢 (xièxie)"
              }
            ]
          }
        ]
      }
    ],
    "grammarLessonId": "a1-present-indicatif"
  },
  {
    "chapterId": "chap_2",
    "chapterNumber": 2,
    "chapterTitle": "Chapitre 2 : Caractériser et décrire",
    "chapterSubtitle": "描写と特徴 — 描述与特征",
    "level": "A1",
    "year": 1,
    "icon": "palette",
    "color": "#2E7D32",
    "quests": [
      {
        "id": "quest_ch_2",
        "title": "Caractériser les Objets & Décrire le Monde",
        "level": "A1",
        "icon": "palette",
        "xp": 60,
        "description": "Découvrir et maîtriser les 29 adjectifs essentiels pour décrire les objets, les personnes et son environnement en français.",
        "steps": [
          {
            "type": "image_scene",
            "title": "1. Scène visuelle : La boutique d'artisanat et d'objets",
            "imageUrl": "assets/scenes/boutique_artisanat_pastel.jpg",
            "caption": "Une jolie boutique d'artisanat lumineuse et chaleureuse : l'ardoise annonce l'ouverture, et des créations uniques attendent les visiteurs.",
            "words": [
              "Bleu",
              "Rouge",
              "Super",
              "Facile",
              "Propre",
              "Tranquille",
              "Bonne",
              "Doux"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "2. Vocabulaire : Couleurs & Qualités",
            "words": [
              "Bleu",
              "Rouge",
              "Super",
              "Doux",
              "Français"
            ],
            "details": [
              {
                "word": "Bleu",
                "type": "adj.",
                "def": "De la couleur du ciel dégagé ou de l'océan.",
                "example": "Le ciel de Provence est d'un bleu magnifique.",
                "imageUrl": "assets/vocab/bleu.svg",
                "color": "rgb(37, 99, 235)"
              },
              {
                "word": "Rouge",
                "type": "adj.",
                "def": "De la couleur vive des cerises ou des fraises mûres.",
                "example": "Elle a acheté un joli cahier rouge pour ses cours.",
                "imageUrl": "assets/vocab/rouge.svg",
                "color": "rgb(220, 38, 38)"
              },
              {
                "word": "Super",
                "type": "adj. inv.",
                "def": "Formidable, excellent dans la langue courante.",
                "example": "C'est une super idée de visiter ce musée ensemble !",
                "imageUrl": "assets/vocab/super.jpg"
              },
              {
                "word": "Doux",
                "type": "adj. m.",
                "def": "Agréable au toucher, calme, sans rudesse (fém. douce).",
                "example": "La fleur de coton est particulièrement douce au toucher.",
                "imageUrl": "assets/vocab/coton.jpg"
              },
              {
                "word": "Français",
                "type": "adj. m.",
                "def": "Relatif à la France, à son peuple ou à sa culture (fém. française).",
                "example": "J'écoute souvent un podcast français pour progresser.",
                "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "3. Vocabulaire : Facilité & Simplicité",
            "words": [
              "Facile",
              "Difficile",
              "Simple"
            ],
            "details": [
              {
                "word": "Facile",
                "type": "adj.",
                "def": "Aisé à réaliser, qui ne demande pas de grand'effort.",
                "example": "Apprendre à saluer en français est très facile.",
                "imageUrl": "assets/vocab/facile.jpg"
              },
              {
                "word": "Difficile",
                "type": "adj.",
                "def": "Qui exige beaucoup de travail, d'attention ou d'effort.",
                "example": "Cette prononciation est un peu difficile au début.",
                "imageUrl": "assets/vocab/difficile.jpg"
              },
              {
                "word": "Simple",
                "type": "adj.",
                "def": "Clair, naturel, sans complication inutile.",
                "example": "La règle de grammaire est tout à fait simple à retenir.",
                "imageUrl": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "4. Vocabulaire : Possibilité & Faisabilité",
            "words": [
              "Possible",
              "Impossible"
            ],
            "details": [
              {
                "word": "Possible",
                "type": "adj.",
                "def": "Qui peut exister ou être accompli sans obstacle majeur.",
                "example": "Il est tout à fait possible de réserver en ligne.",
                "imageUrl": "assets/vocab/possible.jpg"
              },
              {
                "word": "Impossible",
                "type": "adj.",
                "def": "Qui ne peut absolument pas se faire ou avoir lieu (ex. division par zéro).",
                "example": "Rien n'est impossible avec un entraînement régulier !",
                "imageUrl": "assets/vocab/impossible.jpg"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "5. Vocabulaire : États & Émotions",
            "words": [
              "Tranquille",
              "Libre",
              "Triste",
              "Drôle",
              "Malade"
            ],
            "details": [
              {
                "word": "Tranquille",
                "type": "adj.",
                "def": "Paisible, serein, à l'abri de l'agitation et du bruit.",
                "example": "J'adore lire dans un café tranquille l'après-midi.",
                "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Libre",
                "type": "adj.",
                "def": "Qui a le pouvoir d'agir sans contrainte, ou place disponible.",
                "example": "Pardon madame, est-ce que cette chaise est libre ?",
                "imageUrl": "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Triste",
                "type": "adj.",
                "def": "Qui ressent du chagrin, mélancolique, qui n'est pas joyeux.",
                "example": "Ce vieux film en noir et blanc a une fin très triste.",
                "imageUrl": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Drôle",
                "type": "adj.",
                "def": "Qui amuse, fait rire ou possède un charme comique.",
                "example": "Lucas nous a raconté une anecdote vraiment très drôle.",
                "imageUrl": "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Malade",
                "type": "adj.",
                "def": "Dont la santé est altérée, souffrant d'une indisposition.",
                "example": "Elle reste au lit aujourd'hui car elle est un peu malade.",
                "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "6. Vocabulaire : Description Concrète & Contrastes",
            "words": [
              "Propre",
              "Sale",
              "Vide",
              "Jeune",
              "Pauvre"
            ],
            "details": [
              {
                "word": "Propre",
                "type": "adj.",
                "def": "Nettoyé, sans tache ni saleté, étincelant.",
                "example": "La vaisselle est lavée et la table est bien propre.",
                "imageUrl": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Sale",
                "type": "adj.",
                "def": "Taché, couvert de poussière ou de boue, non lavé.",
                "example": "Mes chaussures sont sales après la marche dans la forêt.",
                "imageUrl": "assets/vocab/sale.jpg"
              },
              {
                "word": "Vide",
                "type": "adj.",
                "def": "Qui ne contient rien à l'intérieur, inoccupé.",
                "example": "Le verre est vide, tu souhaites un peu d'eau ?",
                "imageUrl": "assets/vocab/vide.jpg"
              },
              {
                "word": "Jeune",
                "type": "adj.",
                "def": "Peu avancé en âge, au début de sa vie d'adulte.",
                "example": "C'est un jeune étudiant très sérieux et souriant.",
                "imageUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Pauvre",
                "type": "adj.",
                "def": "Qui dispose de peu de ressources, ou digne d'affection compatissante.",
                "example": "Ce pauvre petit chat miaule devant la porte fermée.",
                "imageUrl": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "7. Vocabulaire : Nuances & Vérité",
            "words": [
              "Bizarre",
              "Étrange",
              "Grave",
              "Juste",
              "Faux"
            ],
            "details": [
              {
                "word": "Bizarre",
                "type": "adj.",
                "def": "Curieux, surprenant, qui sort de l'habitude ordinaire.",
                "example": "Il y a un bruit bizarre qui vient de l'appareil.",
                "imageUrl": "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Étrange",
                "type": "adj.",
                "def": "Mystérieux, inhabituel, difficile à expliquer.",
                "example": "Ce tableau contemporain dégage une impression étrange.",
                "imageUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Grave",
                "type": "adj.",
                "def": "Sérieux, préoccupant par ses conséquences potentielles.",
                "example": "Rassurez-vous, ce n'est pas grave du tout, tout va bien.",
                "imageUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Juste",
                "type": "adj.",
                "def": "Conforme à la vérité, exact, équitable et proportionné.",
                "example": "Votre calcul est parfaitement juste, bravo !",
                "imageUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Faux",
                "type": "adj. m.",
                "def": "Qui n'est pas conforme à la vérité ou à la réalité (fém. fausse).",
                "example": "Cette information est fausse, vérifiez les sources.",
                "imageUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "8. Vocabulaire : Identité & Formes Féminines",
            "words": [
              "Autre",
              "Même",
              "Bonne",
              "Toute"
            ],
            "details": [
              {
                "word": "Autre",
                "type": "adj.",
                "def": "Distinct de celui-ci, différent (forme 2 ≠ 1).",
                "example": "Je préfère regarder un autre modèle.",
                "imageUrl": "assets/vocab/autre.svg"
              },
              {
                "word": "Même",
                "type": "adj.",
                "def": "Identique, pareil, qui ne présente aucune différence (1 = 2).",
                "example": "Nous avons exactement le même livre.",
                "imageUrl": "assets/vocab/meme.svg"
              },
              {
                "word": "Bonne",
                "type": "adj. f.",
                "def": "Agréable, savoureuse ou de qualité satisfaisante (fém. de bon).",
                "example": "Ce repas était très bon, et cette tarte est particulièrement bonne !",
                "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Toute",
                "type": "adj. f.",
                "def": "Entière, complète, sans qu'il ne manque rien (fém. de tout).",
                "example": "Nous avons partagé toute la tarte en famille.",
                "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "9. Grammaire : Masculin / Féminin",
            "question": "Complétez la phrase : « C'est un ______ gâteau au chocolat et une ______ tarte aux fraises. »",
            "options": [
              "bon / bonne",
              "bonne / bon",
              "bons / bonnes",
              "bon / bon"
            ],
            "correctIndex": 0,
            "explanation": "L'adjectif s'accorde en genre avec le nom : « un bon gâteau » (masculin) et « une bonne tarte » (féminin)."
          },
          {
            "type": "quiz_drill",
            "title": "10. Grammaire : Place des adjectifs de couleur",
            "question": "Où se placent généralement les adjectifs de couleur comme « bleu » ou « rouge » en français ?",
            "options": [
              "Toujours avant le verbe principal",
              "Après le nom qu'ils qualifient (ex. un stylo bleu, une robe rouge)",
              "Toujours au tout début de la phrase",
              "Entre le sujet et l'auxiliaire"
            ],
            "correctIndex": 1,
            "explanation": "En français, les adjectifs de couleur se placent après le nom : « un stylo bleu », « un chapeau rouge »."
          },
          {
            "type": "dialogue_view",
            "title": "11. Dialogue Modèle : Dans une boutique",
            "context": "Élodie et Thomas regardent des objets dans une petite boutique de quartier.",
            "lines": [
              {
                "speaker": "Élodie",
                "text": "Tu as vu ce carnet bleu ? Il est super joli !"
              },
              {
                "speaker": "Thomas",
                "text": "Ah oui, la couverture est toute douce. Et tu préfères le carnet bleu ou le rouge ?"
              },
              {
                "speaker": "Élodie",
                "text": "Le bleu, sans hésiter. Regarde aussi ces tasses artisanales, elles sont magnifiques."
              },
              {
                "speaker": "Thomas",
                "text": "Celle-ci est un peu bizarre avec sa forme tordue, mais l'autre est vraiment sympa."
              },
              {
                "speaker": "Élodie",
                "text": "C'est vrai. Allez, on prend le carnet bleu et cette tasse !"
              },
              {
                "speaker": "Thomas",
                "text": "Super, bonne idée. C'est parfait pour un cadeau."
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "12. Mémorisation Multilingue : Les adjectifs essentiels",
            "instructions": "Associez chaque adjectif français à son équivalent multilingue.",
            "pairs": [
              {
                "id": "a1_ch2_bleu",
                "fr": "Bleu",
                "en": "Blue",
                "jp": "青い (aoi)",
                "cn": "蓝色的 (lánsè de)"
              },
              {
                "id": "a1_ch2_rouge",
                "fr": "Rouge",
                "en": "Red",
                "jp": "赤い (akai)",
                "cn": "红色的 (hóngsè de)"
              },
              {
                "id": "a1_ch2_facile",
                "fr": "Facile",
                "en": "Easy",
                "jp": "簡単な (kantan na)",
                "cn": "容易的 (róngyì de)"
              },
              {
                "id": "a1_ch2_difficile",
                "fr": "Difficile",
                "en": "Difficult / Hard",
                "jp": "難しい (muzukashii)",
                "cn": "困难的 (kùnnan de)"
              },
              {
                "id": "a1_ch2_propre",
                "fr": "Propre",
                "en": "Clean",
                "jp": "清潔な (seiketsu na)",
                "cn": "干净的 (gānjìng de)"
              },
              {
                "id": "a1_ch2_tranquille",
                "fr": "Tranquille",
                "en": "Quiet / Peaceful",
                "jp": "静かな / 穏やかな (shizuka na)",
                "cn": "安静的 (ānjìng de)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch_2_2",
        "title": "Décrire les Dimensions, les Sensations & les Émotions",
        "level": "A1",
        "icon": "straighten",
        "xp": 65,
        "description": "Apprendre à exprimer la taille, les sensations physiques, les sentiments et les qualités fondamentales avec 32 adjectifs indispensables.",
        "steps": [
          {
            "type": "image_scene",
            "title": "1. Scène visuelle : Une belle journée au grand parc",
            "imageUrl": "assets/scenes/parc_luxembourg_pastel.jpg",
            "caption": "Un grand parc parisien baigné de soleil avec un large bassin d'eau, des fleurs éclatantes et des allées arborées invitant à la promenade.",
            "words": [
              "Grand",
              "Beau",
              "Chaud",
              "Heureux",
              "Vieux",
              "Gentil",
              "Joli",
              "Blanc"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "2. Vocabulaire : Tailles & Dimensions",
            "words": [
              "Grand",
              "Gros",
              "Haut",
              "Long",
              "Léger"
            ],
            "details": [
              {
                "word": "Grand",
                "type": "adj. m.",
                "def": "De dimension importante en hauteur ou en étendue (fém. grande).",
                "example": "Cet homme est très grand par rapport à cette petite chaise.",
                "imageUrl": "assets/vocab/grand.jpg"
              },
              {
                "word": "Gros",
                "type": "adj. m.",
                "def": "De volume ou d'épaisseur considérable (fém. grosse).",
                "example": "Ce gros ours brun avance tranquillement au bord de la rivière.",
                "imageUrl": "assets/vocab/gros.jpg"
              },
              {
                "word": "Haut",
                "type": "adj. m.",
                "def": "Qui s'élève à une grande distance au-dessus du sol (fém. haute).",
                "example": "La tour Eiffel est un monument très haut et célèbre.",
                "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Long",
                "type": "adj. m.",
                "def": "D'une grande dimension dans le sens de la longueur ou du temps (fém. longue).",
                "example": "Ce très long ponton en bois s'avance loin sur la mer.",
                "imageUrl": "assets/vocab/long.jpg"
              },
              {
                "word": "Léger",
                "type": "adj. m.",
                "def": "Qui a peu de poids, facile à soulever ou à porter (fém. légère).",
                "example": "Ce petit sac à dos est très léger et pratique.",
                "imageUrl": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "3. Vocabulaire : Aspect, Beauté & Teintes",
            "words": [
              "Beau",
              "Joli",
              "Blanc",
              "Noir",
              "Clair"
            ],
            "details": [
              {
                "word": "Beau",
                "type": "adj. m.",
                "def": "Agréable à regarder, harmonieux (fém. belle, bel devant voyelle).",
                "example": "Ce paysage de montagne avec le lac est d'une beauté saisissante.",
                "imageUrl": "assets/vocab/beau.jpg"
              },
              {
                "word": "Joli",
                "type": "adj. m.",
                "def": "Gracieux, charmant et plaisant à l'œil (fém. jolie).",
                "example": "Elle a posé un très joli bouquet de fleurs colorées sur la fenêtre.",
                "imageUrl": "assets/vocab/joli.jpg"
              },
              {
                "word": "Blanc",
                "type": "adj. m.",
                "def": "De la couleur immaculée de la neige ou du lait (fém. blanche).",
                "example": "Il porte une chemise blanche très élégante.",
                "imageUrl": "assets/vocab/blanc.svg",
                "color": "rgb(255, 255, 255)"
              },
              {
                "word": "Noir",
                "type": "adj. m.",
                "def": "De la couleur la plus sombre, opposée au blanc (fém. noire).",
                "example": "Ce chat noir se repose tranquillement sur le canapé.",
                "imageUrl": "assets/vocab/noir.svg",
                "color": "rgb(17, 24, 39)"
              },
              {
                "word": "Clair",
                "type": "adj. m.",
                "def": "Qui reçoit beaucoup de lumière, ou couleur peu foncée (fém. claire).",
                "example": "La chambre est bien exposée et très claire.",
                "imageUrl": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "4. Vocabulaire : Sensations, Énergie & Valeur",
            "words": [
              "Chaud",
              "Froid",
              "Fort",
              "Cher",
              "Droit"
            ],
            "details": [
              {
                "word": "Chaud",
                "type": "adj. m.",
                "def": "Qui dégage de la chaleur ou qui a une température élevée (fém. chaude).",
                "example": "Le thermomètre dépasse quarante degrés dans le désert brûlant.",
                "imageUrl": "assets/vocab/chaud.jpg"
              },
              {
                "word": "Froid",
                "type": "adj. m.",
                "def": "Qui a une basse température, qui manque de chaleur (fém. froide).",
                "example": "En Antarctique, la température descend facilement sous les moins vingt degrés.",
                "imageUrl": "assets/vocab/froid.jpg"
              },
              {
                "word": "Fort",
                "type": "adj. m.",
                "def": "Qui a de la vigueur, de la puissance ou une intensité marquée (fém. forte).",
                "example": "Ce marin musclé est particulièrement fort et vigoureux sur son bateau.",
                "imageUrl": "assets/vocab/fort.jpg"
              },
              {
                "word": "Cher",
                "type": "adj. m.",
                "def": "D'un prix élevé, ou précieux et aimé au cœur (fém. chère).",
                "example": "Cette montre en or incrustée de diamants coûte trois mille neuf cent quatre-vingt-dix-neuf euros.",
                "imageUrl": "assets/vocab/cher.jpg"
              },
              {
                "word": "Droit",
                "type": "adj. m.",
                "def": "Sans courbe ni détour, rectiligne, ou côté opposé à gauche (fém. droite).",
                "example": "Tracez une ligne droite sur votre feuille.",
                "imageUrl": "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "5. Vocabulaire : Émotions, Sentiments & Politesse",
            "words": [
              "Heureux",
              "Content",
              "Désolé",
              "Gentil"
            ],
            "details": [
              {
                "word": "Heureux",
                "type": "adj. m.",
                "def": "Qui éprouve un profond bonheur, très satisfait (fém. heureuse).",
                "example": "Ils sont tellement heureux de courir ensemble au bord de l'océan.",
                "imageUrl": "assets/vocab/heureux.jpg"
              },
              {
                "word": "Content",
                "type": "adj. m.",
                "def": "Qui éprouve de la satisfaction ou du plaisir (fém. contente).",
                "example": "Il est assis bien au chaud avec sa tasse, tout à fait content de son après-midi.",
                "imageUrl": "assets/vocab/content.jpg"
              },
              {
                "word": "Désolé",
                "type": "adj. m.",
                "def": "Formule de regret poli pour s'excuser (fém. désolée).",
                "example": "Je suis sincèrement désolé pour ce léger retard involontaire.",
                "imageUrl": "assets/vocab/desole.jpg"
              },
              {
                "word": "Gentil",
                "type": "adj. m.",
                "def": "Aimable, bienveillant et serviable avec autrui (fém. gentille).",
                "example": "C'est très gentil de ta part de m'offrir cette crêpe !",
                "imageUrl": "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "6. Vocabulaire : Temps, Âge & Fin",
            "words": [
              "Vieux",
              "Ancien",
              "Dernier",
              "Mort"
            ],
            "details": [
              {
                "word": "Vieux",
                "type": "adj. m.",
                "def": "Avancé en âge, qui existe depuis longtemps (fém. vieille, vieil devant voyelle).",
                "example": "Ce vieux chêne majestueux étend ses branches depuis plus d'un siècle.",
                "imageUrl": "assets/vocab/vieux.jpg"
              },
              {
                "word": "Ancien",
                "type": "adj. m.",
                "def": "D'une époque passée, historique ou précédent (fém. ancienne).",
                "example": "J'adore contempler les colonnes antiques de cette ancienne cité.",
                "imageUrl": "assets/vocab/ancien.jpg"
              },
              {
                "word": "Dernier",
                "type": "adj. m.",
                "def": "Après tous les autres, ou le plus récent en date (fém. dernière).",
                "example": "Nous profitons du tout dernier jour de l'été avant la rentrée.",
                "imageUrl": "assets/vocab/dernier.jpg"
              },
              {
                "word": "Mort",
                "type": "adj. m.",
                "def": "Qui n'est plus en vie, sans activité vitale (fém. morte).",
                "example": "En automne, le vent fait voler les feuilles mortes dorées.",
                "imageUrl": "assets/vocab/mort.jpg"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "7. Vocabulaire : Intégrité & Sérieux",
            "words": [
              "Sérieux",
              "Entier"
            ],
            "details": [
              {
                "word": "Sérieux",
                "type": "adj. m.",
                "def": "Attentif, appliqué, digne de confiance, pas frivole (fém. sérieuse).",
                "example": "Lucas est un étudiant particulièrement sérieux et appliqué.",
                "imageUrl": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Entier",
                "type": "adj. m.",
                "def": "Complet, auquel il ne manque aucune partie (fém. entière).",
                "example": "Nous avons partagé toute la tarte en famille.",
                "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "8. Vocabulaire : Vérité, Valeur & Spécificités",
            "words": [
              "Meilleur",
              "Mauvais",
              "Vrai",
              "Certain",
              "Différent",
              "Humain",
              "Important"
            ],
            "details": [
              {
                "word": "Meilleur",
                "type": "adj. m.",
                "def": "Supérieur en qualité ou en bienfait (comparatif de bon, fém. meilleure).",
                "example": "Ce thé à la menthe est le meilleur de la ville.",
                "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Mauvais",
                "type": "adj. m.",
                "def": "Qui n'est pas bon, désagréable ou de médiocre qualité (fém. mauvaise).",
                "example": "Le temps est mauvais aujourd'hui, il pleut beaucoup.",
                "imageUrl": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Vrai",
                "type": "adj. m.",
                "def": "Conforme à la réalité des faits, authentique (fém. vraie).",
                "example": "C'est une vraie lettre manuscrite écrite avec sincérité.",
                "imageUrl": "assets/vocab/vrai.jpg"
              },
              {
                "word": "Certain",
                "type": "adj. m.",
                "def": "Sûr, indubitable, ou particulier / précis (fém. certaine).",
                "example": "Il est certain que le soleil se lèvera demain matin.",
                "imageUrl": "assets/vocab/certain.jpg"
              },
              {
                "word": "Différent",
                "type": "adj. m.",
                "def": "Qui ne ressemble pas à un autre, distinct (fém. différente, forme 2 ≠ 1).",
                "example": "Chaque étudiant a un rythme d'apprentissage différent.",
                "imageUrl": "assets/vocab/different.svg"
              },
              {
                "word": "Humain",
                "type": "adj. m.",
                "def": "Propre à l'être humain, ou compréhensif et bienveillant (fém. humaine).",
                "example": "Cette médecin a une attitude très chaleureuse et humaine.",
                "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Important",
                "type": "adj. m.",
                "def": "Qui a beaucoup de valeur, d'intérêt ou de portée (fém. importante).",
                "example": "C'est une étape importante dans l'apprentissage du français.",
                "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "9. Grammaire : Féminins particuliers des adjectifs usuels",
            "question": "Quel est le féminin correct des adjectifs « beau », « vieux » et « blanc » ?",
            "options": [
              "belle / vieille / blanche",
              "beautée / vieusse / blanque",
              "beaurie / viellesse / blanche",
              "belle / vieille / blanc"
            ],
            "correctIndex": 0,
            "explanation": "En français, certains adjectifs très fréquents ont un féminin irrégulier : « beau » devient « belle », « vieux » devient « vieille » et « blanc » devient « blanche »."
          },
          {
            "type": "quiz_drill",
            "title": "10. Grammaire : Les adjectifs placés'AVANT le nom",
            "question": "Quels adjectifs se placent généralement AVANT le nom en français ?",
            "options": [
              "Les adjectifs courts et très fréquents de taille et d'appréciation (ex. un grand parc, un beau livre)",
              "Uniquement les adjectifs de nationalité et de couleur",
              "Tous les adjectifs sans exception",
              "Seulement les adjectifs qui se terminent par la lettre -e"
            ],
            "correctIndex": 0,
            "explanation": "Les adjectifs courts et courants exprimant la taille, la beauté ou l'âge (grand, petit, beau, joli, bon, mauvais, vieux, jeune) se placent généralement AVANT le nom."
          },
          {
            "type": "dialogue_view",
            "title": "11. Dialogue Modèle : Pause gourmande au grand parc",
            "context": "Camille et Nicolas se promènent dans le grand parc parisien sous un beau soleil d'après-midi.",
            "lines": [
              {
                "speaker": "Camille",
                "text": "Il fait bien chaud aujourd'hui ! C'est agréable de marcher sous ces grands arbres."
              },
              {
                "speaker": "Nicolas",
                "text": "Oui, regarde ce joli bassin et ces belles chaises vertes. Dis, tu as un peu faim ?"
              },
              {
                "speaker": "Camille",
                "text": "Ah oui, pour être tout à fait honnête, je mangerais bien quelque chose de bon !"
              },
              {
                "speaker": "Nicolas",
                "text": "Attends-moi ici sur le banc, je vais aller t'acheter une crêpe à la pâtisserie juste en face."
              },
              {
                "speaker": "Camille",
                "text": "Oh, c'est vraiment très gentil de ta part, merci beaucoup Nicolas !"
              },
              {
                "speaker": "Nicolas",
                "text": "Avec plaisir ! C'est le meilleur moment de la journée pour faire une petite pause gourmande."
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "12. Mémorisation Multilingue : Dimensions et sentiments",
            "instructions": "Associez chaque adjectif français à son équivalent multilingue.",
            "pairs": [
              {
                "id": "a1_ch3_grand",
                "fr": "Grand",
                "en": "Big / Tall",
                "jp": "大きい / 背が高い (ōkii)",
                "cn": "大的 / 高的 (dà de / gāo de)"
              },
              {
                "id": "a1_ch3_beau",
                "fr": "Beau",
                "en": "Beautiful / Handsome",
                "jp": "美しい / かっこいい (utsukushii)",
                "cn": "美丽的 / 帅气的 (měilì de)"
              },
              {
                "id": "a1_ch3_chaud",
                "fr": "Chaud",
                "en": "Hot / Warm",
                "jp": "温かい / 暑い (atatakai / atsui)",
                "cn": "热的 / 温暖的 (rè de / wēnnuǎn de)"
              },
              {
                "id": "a1_ch3_froid",
                "fr": "Froid",
                "en": "Cold",
                "jp": "冷たい / 寒い (tsumetai / samui)",
                "cn": "冷的 (lěng de)"
              },
              {
                "id": "a1_ch3_heureux",
                "fr": "Heureux",
                "en": "Happy",
                "jp": "幸せな (shiawase na)",
                "cn": "幸福的 / 快乐的 (xìngfú de)"
              },
              {
                "id": "a1_ch3_vieux",
                "fr": "Vieux",
                "en": "Old",
                "jp": "古い / 年老いた (furui / toshioita)",
                "cn": "老的 / 古老的 (lǎo de / gǔlǎo de)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch_2_3",
        "title": "Identifier les Personnes & les Objets du Quotidien",
        "level": "A1",
        "icon": "badge",
        "xp": 65,
        "description": "Apprendre les adjectifs et noms fondamentaux pour désigner son entourage, l'école, les objets et les repères essentiels.",
        "steps": [
          {
            "type": "image_scene",
            "title": "1. Scène visuelle : À l'école et dans la vie de tous les jours",
            "imageUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
            "caption": "Un professeur bienveillant, des enfants attentifs avec leurs livres neufs et une atmosphère studieuse et paisible.",
            "words": [
              "Nouveau",
              "Petit",
              "Premier",
              "Enfant",
              "Professeur",
              "Livre",
              "Merci",
              "Voix"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "2. Vocabulaire : Ordre, État & Disponibilité",
            "words": [
              "Nouveau",
              "Petit",
              "Premier",
              "Prochain",
              "Prêt",
              "Plein"
            ],
            "details": [
              {
                "word": "Nouveau",
                "type": "adj. m.",
                "def": "Récemment apparu, moderne ou inédit (fém. nouvelle, nouvel devant voyelle).",
                "example": "Voici mon nouveau cahier de français.",
                "imageUrl": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Petit",
                "type": "adj. m.",
                "def": "De dimension modeste, peu grand ou peu étendu (fém. petite).",
                "example": "Ce petit café de quartier est très agréable.",
                "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Premier",
                "type": "adj. m.",
                "def": "Qui se place avant tous les autres dans le temps ou l'espace (fém. première).",
                "example": "C'est le premier jour de cours de l'année.",
                "imageUrl": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Prochain",
                "type": "adj. m.",
                "def": "Qui va arriver tout de suite après, très proche dans le temps (fém. prochaine).",
                "example": "Nous descendons au prochain arrêt de bus.",
                "imageUrl": "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Prêt",
                "type": "adj. m.",
                "def": "Disposé et préparé pour une action immédiate (fém. prête).",
                "example": "Tout le monde est prêt pour commencer la leçon ?",
                "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Plein",
                "type": "adj. m.",
                "def": "Rempli jusqu'au bord, totalement occupé (fém. pleine).",
                "example": "Le verre est plein de jus d'orange bien frais.",
                "imageUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "3. Vocabulaire : Nature, Éléments & Totalité",
            "words": [
              "Vert",
              "Vivant",
              "Seul",
              "Tout",
              "Pareil",
              "Quoi"
            ],
            "details": [
              {
                "word": "Vert",
                "type": "adj. m.",
                "def": "De la couleur de l'herbe fraîche ou des feuilles (fém. verte).",
                "example": "Il y a un grand parc vert juste derrière l'école.",
                "imageUrl": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Vivant",
                "type": "adj. m.",
                "def": "Qui a de la vie, animé, actif et dynamique (fém. vivante).",
                "example": "C'est un quartier très vivant le samedi après-midi.",
                "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Seul",
                "type": "adj. m.",
                "def": "Sans compagnie, unique ou isolé (fém. seule).",
                "example": "Il n'aime pas voyager tout seul en train.",
                "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Tout",
                "type": "adj. m.",
                "def": "Entier, dans son intégralité (fém. toute, pl. tous).",
                "example": "Tout le village fête l'arrivée du printemps.",
                "imageUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Pareil",
                "type": "adj. m.",
                "def": "Identique, semblable, de même nature (fém. pareille).",
                "example": "Mon manteau est exactement pareil au tien.",
                "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Quoi",
                "type": "adj. m.",
                "def": "Mot interrogatif ou indéfini (ex. un je-ne-sais-quoi de charme).",
                "example": "Cette maison a un je-ne-sais-quoi de très charmant.",
                "imageUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "4. Vocabulaire : Personnes, Titres & Rôles",
            "words": [
              "Professeur",
              "Madame",
              "Enfant",
              "Gosse",
              "Chef",
              "Garde"
            ],
            "details": [
              {
                "word": "Professeur",
                "type": "n. m.",
                "def": "Personne qui enseigne une matière ou une langue.",
                "example": "Le professeur de français explique la leçon avec patience.",
                "imageUrl": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Madame",
                "type": "n. f.",
                "def": "Titre de politesse adressé à une femme adulte.",
                "example": "Bonjour madame, comment vous portez-vous ?",
                "imageUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Enfant",
                "type": "n. m. / f.",
                "def": "Jeune être humain avant l adolescence.",
                "example": "L'enfant dessine un beau soleil sur son cahier.",
                "imageUrl": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Gosse",
                "type": "n. m. / f.",
                "def": "Terme familier et affectueux pour désigner un enfant.",
                "example": "Les gosses s'amusent dans la cour de récréation.",
                "imageUrl": "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Chef",
                "type": "n. m.",
                "def": "Personne qui dirige une équipe, ou responsable en cuisine.",
                "example": "Le chef cuisinier prépare un repas délicieux.",
                "imageUrl": "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Garde",
                "type": "n. m. / f.",
                "def": "Personne chargée de surveiller ou protéger un lieu.",
                "example": "Le garde du parc ouvre les grandes grilles à huit heures.",
                "imageUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "5. Vocabulaire : Objets, Gestes & Repères",
            "words": [
              "Livre",
              "Poche",
              "Tour",
              "Gauche",
              "Ombre",
              "Geste"
            ],
            "details": [
              {
                "word": "Livre",
                "type": "n. m.",
                "def": "Ouvrage imprimé relié contenant du texte à lire.",
                "example": "J'ouvre mon livre à la première page pour réviser.",
                "imageUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Poche",
                "type": "n. f.",
                "def": "Petit sac cousu à un vêtement pour y glisser des objets.",
                "example": "Je garde toujours mes clés dans ma poche de veste.",
                "imageUrl": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Tour",
                "type": "n. m. / f.",
                "def": "Mouvement circulaire ou visite (n. m.), ou haute construction (n. f.).",
                "example": "Faisons un petit tour dans les rues pittoresques.",
                "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Gauche",
                "type": "n. f.",
                "def": "Côté opposé à la droite dans l'espace.",
                "example": "Prenez la rue sur votre gauche après la poste.",
                "imageUrl": "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Ombre",
                "type": "n. f.",
                "def": "Zone sombre créée par un corps qui arrête la lumière du soleil.",
                "example": "Nous nous asseyons à l'ombre du grand saule pleureur.",
                "imageUrl": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Geste",
                "type": "n. m.",
                "def": "Mouvement du corps ou des mains, souvent expressif ou bienveillant.",
                "example": "Il a fait un geste amical de la main pour saluer.",
                "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "6. Vocabulaire : Entraide, Expression & Harmonie",
            "words": [
              "Aide",
              "Merci",
              "Voix",
              "Paix"
            ],
            "details": [
              {
                "word": "Aide",
                "type": "n. f.",
                "def": "Action de secourir, d assister ou de faciliter la tâche d autrui.",
                "example": "Merci beaucoup pour votre aide précieuse aujourd'hui.",
                "imageUrl": "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Merci",
                "type": "n. m.",
                "def": "Témoignage de reconnaissance (ex. adresser un grand merci).",
                "example": "Il lui a adressé un sincère merci pour son accueil.",
                "imageUrl": "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Voix",
                "type": "n. f.",
                "def": "Son produit par les cordes vocales humaines pour parler ou chanter.",
                "example": "Elle a une voix très douce et agréable à écouter.",
                "imageUrl": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Paix",
                "type": "n. f.",
                "def": "Tranquillité de l esprit ou état de concorde sans conflit.",
                "example": "Ce village de campagne respire le calme et la paix.",
                "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "7. Vocabulaire : Temps, Mesure & Existence",
            "words": [
              "Fois",
              "Part",
              "Mort"
            ],
            "details": [
              {
                "word": "Fois",
                "type": "n. f.",
                "def": "Occasion déterminée, moment où un événement se produit.",
                "example": "C'est la première fois que je viens à Paris.",
                "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Part",
                "type": "n. f.",
                "def": "Portion d'un tout partagée entre plusieurs personnes.",
                "example": "Tu veux une petite part de ce gâteau aux pommes ?",
                "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Mort",
                "type": "n. f.",
                "def": "Fin définitive de la vie d'un organisme vivant.",
                "example": "Le souvenir de ses grands-parents reste vivant malgré leur mort.",
                "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "8. Grammaire : Le genre des noms communs (Un / Une)",
            "question": "Complétez avec les bons articles indéfinis : « Dans la classe, il y a ______ professeur souriant et ______ poche avec des stylos. »",
            "options": [
              "un / une",
              "une / un",
              "des / une",
              "un / un"
            ],
            "correctIndex": 0,
            "explanation": "« Professeur » est un nom masculin (un professeur) et « poche » est un nom féminin (une poche)."
          },
          {
            "type": "quiz_drill",
            "title": "9. Grammaire : L alternance « nouveau / nouvelle » et « premier / première »",
            "question": "Quelle phrase est correctement accordée au féminin ?",
            "options": [
              "C'est la première fois que j'ouvre cette nouvelle boîte.",
              "C'est le premier fois que j'ouvre ce nouveau boîte.",
              "C'est la premier fois que j'ouvre cette nouvel boîte.",
              "C'est les première fois que j'ouvre ce nouvelle boîte."
            ],
            "correctIndex": 0,
            "explanation": "« Fois » et « boîte » sont féminins : on dit « la première fois » et « cette nouvelle boîte »."
          },
          {
            "type": "dialogue_view",
            "title": "10. Dialogue Modèle : Le premier cours de français",
            "context": "Lucas arrive pour son premier cours et fait la connaissance de madame Dubois et d'autres élèves.",
            "lines": [
              {
                "speaker": "Lucas",
                "text": "Bonjour madame ! Est-ce que je suis dans la bonne salle pour le cours de français ?"
              },
              {
                "speaker": "Madame Dubois",
                "text": "Bonjour jeune homme ! Oui, tout à fait. Je suis votre professeur. Bienvenue parmi nous !"
              },
              {
                "speaker": "Lucas",
                "text": "Un grand merci pour votre accueil ! Voici mon nouveau livre d'exercices."
              },
              {
                "speaker": "Madame Dubois",
                "text": "Très bien, prends une place libre sur la gauche. Les autres élèves sont déjà prêts."
              },
              {
                "speaker": "Lucas",
                "text": "Parfait. C'est la première fois que j'apprends le français, mais je suis très motivé !"
              },
              {
                "speaker": "Madame Dubois",
                "text": "C'est un plaisir d entendre une voix si enthousiaste. La leçon commence dans un instant !"
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "11. Mémorisation Multilingue : Les mots de la vie quotidienne",
            "instructions": "Associez chaque mot français à son équivalent multilingue.",
            "pairs": [
              {
                "id": "a1_ch5_nouveau",
                "fr": "Nouveau",
                "en": "New",
                "jp": "新しい (atarashii)",
                "cn": "新的 (xīn de)"
              },
              {
                "id": "a1_ch5_petit",
                "fr": "Petit",
                "en": "Small / Little",
                "jp": "小さい (chiisai)",
                "cn": "小的 (xiǎo de)"
              },
              {
                "id": "a1_ch5_livre",
                "fr": "Le livre",
                "en": "Book",
                "jp": "本 (hon)",
                "cn": "书 / 书籍 (shū)"
              },
              {
                "id": "a1_ch5_professeur",
                "fr": "Le professeur",
                "en": "Teacher / Professor",
                "jp": "先生 / 教授 (sensei)",
                "cn": "老师 / 教授 (lǎoshī)"
              },
              {
                "id": "a1_ch5_enfant",
                "fr": "L'enfant",
                "en": "Child",
                "jp": "子ども (kodomo)",
                "cn": "孩子 / 儿童 (háizi)"
              },
              {
                "id": "a1_ch5_merci",
                "fr": "Merci",
                "en": "Thank you",
                "jp": "ありがとう (arigatō)",
                "cn": "谢谢 (xièxie)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch_2_4",
        "title": "Module 4 : États, Disponibilité & Totalité",
        "level": "A1",
        "icon": "auto_awesome",
        "xp": 65,
        "description": "Maîtriser les 12 adjectifs fondamentaux : nouveau, pareil, petit, plein, premier, prêt, prochain, quoi, seul, tout, vert, vivant.",
        "steps": [
          {
            "type": "image_scene",
            "title": "1. Scène visuelle : Terrasse de café et marché aux fleurs",
            "imageUrl": "assets/scenes/marche_fleurs_cafe_pastel.jpg",
            "caption": "Une matinée animée dans un quartier parisien : un serveur prêt à servir un café bien plein, un petit vélo près d'un grand arbre vert et un marché aux fleurs très vivant.",
            "words": [
              "Nouveau",
              "Pareil",
              "Petit",
              "Plein",
              "Premier",
              "Prêt",
              "Prochain",
              "Seul",
              "Tout",
              "Vert",
              "Vivant"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "2. Vocabulaire : Nouveauté, Ordre & Préparation",
            "words": [
              "Nouveau",
              "Premier",
              "Prochain",
              "Prêt"
            ],
            "details": [
              {
                "word": "Nouveau",
                "type": "adj. m.",
                "def": "Récemment apparu, moderne ou inédit (fém. nouvelle, nouvel devant voyelle).",
                "example": "Voici mon nouveau cahier avec un stylo pour les cours.",
                "imageUrl": "assets/vocab/nouveau.jpg"
              },
              {
                "word": "Premier",
                "type": "adj. m.",
                "def": "Qui se place avant tous les autres dans le temps ou l'espace (fém. première).",
                "example": "Il a remporté la médaille d'or de la première place.",
                "imageUrl": "assets/vocab/premier.jpg"
              },
              {
                "word": "Prochain",
                "type": "adj. m.",
                "def": "Qui va arriver tout de suite après, très proche dans le temps (fém. prochaine).",
                "example": "Le panneau indique le quai pour le prochain train de Paris.",
                "imageUrl": "assets/vocab/prochain.jpg"
              },
              {
                "word": "Prêt",
                "type": "adj. m.",
                "def": "Disposé et préparé pour une action immédiate (fém. prête).",
                "example": "Elle a pris son sac et ses clés, elle est fin prête pour le voyage.",
                "imageUrl": "assets/vocab/pret.jpg"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "3. Vocabulaire : Mesure, Comparaison & Solitude",
            "words": [
              "Petit",
              "Plein",
              "Pareil",
              "Seul"
            ],
            "details": [
              {
                "word": "Petit",
                "type": "adj. m.",
                "def": "De dimension modeste, peu volumineux (fém. petite).",
                "example": "Ce petit chaton curieux tient facilement dans une tasse.",
                "imageUrl": "assets/vocab/petit.jpg"
              },
              {
                "word": "Plein",
                "type": "adj. m.",
                "def": "Rempli jusqu'au bord, totalement occupé (fém. pleine).",
                "example": "Ce verre transparent est bien plein d'eau fraîche avec des glaçons.",
                "imageUrl": "assets/vocab/plein.jpg"
              },
              {
                "word": "Pareil",
                "type": "adj. m.",
                "def": "Identique, semblable, de même nature ou apparence (fém. pareille).",
                "example": "Ces deux jolies tasses en céramique sont tout à fait pareilles.",
                "imageUrl": "assets/vocab/pareil.jpg"
              },
              {
                "word": "Seul",
                "type": "adj. m.",
                "def": "Sans compagnie, unique ou isolé (fém. seule).",
                "example": "Elle apprécie de lire tranquillement toute seule sur le banc du parc.",
                "imageUrl": "assets/vocab/seul.jpg"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "4. Vocabulaire : Vitalité, Couleur & Totalité",
            "words": [
              "Tout",
              "Vert",
              "Vivant",
              "Quoi"
            ],
            "details": [
              {
                "word": "Tout",
                "type": "adj. m.",
                "def": "Entier, dans son intégralité (fém. toute, pl. tous).",
                "example": "Nous avons partagé toute la tarte en famille.",
                "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Vert",
                "type": "adj. m.",
                "def": "De la couleur des feuilles fraîches et de l'herbe (fém. verte).",
                "example": "Le panneau du parc est d'un vert éclatant.",
                "imageUrl": "assets/vocab/vert.svg",
                "color": "rgb(22, 163, 74)"
              },
              {
                "word": "Vivant",
                "type": "adj. m.",
                "def": "Qui a de la vie, animé, actif et dynamique (fém. vivante).",
                "example": "Cette belle plante verte est très vivante et pleine d'énergie.",
                "imageUrl": "assets/vocab/vivant.jpg"
              },
              {
                "word": "Quoi",
                "type": "adj. m.",
                "def": "Mot interrogatif ou formule expressive (ex. un je-ne-sais-quoi de charme).",
                "example": "Elle s'interroge avec un grand sourire : mais quoi donc ?",
                "imageUrl": "assets/vocab/quoi.jpg"
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "5. Grammaire : Nouveauté et Place des Adjectifs",
            "question": "Complétez la phrase : « Lucas a acheté un ______ vélo et une ______ valise pour son voyage. »",
            "options": [
              "nouveau / nouvelle",
              "nouvel / nouveau",
              "nouvelle / nouveau",
              "nouveau / nouveau"
            ],
            "correctIndex": 0,
            "explanation": "« Vélo » est masculin (un nouveau vélo) et « valise » est féminin (une nouvelle valise)."
          },
          {
            "type": "quiz_drill",
            "title": "6. Grammaire : L'adjectif « tout / toute »",
            "question": "Choisissez la bonne forme : « Nous avons attendu pendant ______ la matinée au café. »",
            "options": [
              "toute",
              "tout",
              "tous",
              "toutes"
            ],
            "correctIndex": 0,
            "explanation": "« Matinée » est féminin singulier : on accorde avec « toute la matinée »."
          },
          {
            "type": "dialogue_view",
            "title": "7. Dialogue Modèle : À la terrasse d'un café",
            "context": "Julien et Sarah sont assis à la terrasse d'un café avant leur cours.",
            "lines": [
              {
                "speaker": "Julien",
                "text": "Tu prends un café aussi ?"
              },
              {
                "speaker": "Sarah",
                "text": "Oui, pareil pour moi, avec un peu de lait s'il te plaît."
              },
              {
                "speaker": "Julien",
                "text": "Ça marche. Tu as fini tes exercices pour le cours ?"
              },
              {
                "speaker": "Sarah",
                "text": "Oui, j'ai tout terminé hier soir. Et toi, tu es prêt ?"
              },
              {
                "speaker": "Julien",
                "text": "Presque ! J'ai juste un petit doute sur le premier exercice."
              },
              {
                "speaker": "Sarah",
                "text": "Montre-moi, on a encore dix minutes avant le prochain cours."
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "8. Mémorisation Multilingue : Les adjectifs de disponibilité et d'état",
            "instructions": "Associez chaque adjectif français à son équivalent multilingue.",
            "pairs": [
              {
                "id": "a1_ch2_mod4_nouveau",
                "fr": "Nouveau",
                "en": "New",
                "jp": "新しい (atarashii)",
                "cn": "新的 (xīn de)"
              },
              {
                "id": "a1_ch2_mod4_petit",
                "fr": "Petit",
                "en": "Small / Little",
                "jp": "小さい (chiisai)",
                "cn": "小的 (xiǎo de)"
              },
              {
                "id": "a1_ch2_mod4_plein",
                "fr": "Plein",
                "en": "Full",
                "jp": "いっぱいの (ippai no)",
                "cn": "满的 (mǎn de)"
              },
              {
                "id": "a1_ch2_mod4_pret",
                "fr": "Prêt",
                "en": "Ready",
                "jp": "準備ができた (junbi ga dekita)",
                "cn": "准备好的 (zhǔnbèi hǎo de)"
              },
              {
                "id": "a1_ch2_mod4_vert",
                "fr": "Vert",
                "en": "Green",
                "jp": "緑の (midori no)",
                "cn": "绿色的 (lǜsè de)"
              },
              {
                "id": "a1_ch2_mod4_vivant",
                "fr": "Vivant",
                "en": "Alive / Lively",
                "jp": "生きている / 活気のある (ikiteiru / kakki no aru)",
                "cn": "活着的 / 充满活力的 (huózhe de)"
              }
            ]
          }
        ]
      }
    ],
    "grammarLessonId": "a1-adjectifs-qualificatifs"
  },
  {
    "chapterId": "chap_3",
    "chapterNumber": 3,
    "chapterTitle": "Chapitre 3 : Famille et relations",
    "chapterSubtitle": "家族と人間関係 — 家庭与人际关系",
    "level": "A1",
    "year": 1,
    "icon": "groups",
    "color": "#2E7D32",
    "quests": [
      {
        "id": "quest_ch_3",
        "title": "Présenter sa Famille & ses Proches",
        "level": "A1",
        "icon": "groups",
        "xp": 55,
        "description": "Apprendre à nommer les membres de sa famille et parler de ses proches.",
        "steps": [
          {
            "type": "image_scene",
            "title": "1. Scène visuelle : Réunion de famille",
            "imageUrl": "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80",
            "caption": "Une famille réunie dans le jardin pour un repas dominical convivial.",
            "words": [
              "Les parents",
              "Le père",
              "La mère",
              "Le frère",
              "La sœur",
              "La famille"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "2. Les Membres du Foyer",
            "words": [
              "Les parents",
              "Le père",
              "La mère",
              "L'enfant"
            ],
            "details": [
              {
                "word": "Les parents",
                "type": "n. m. pl.",
                "def": "Le père et la mère d'une personne.",
                "example": "Mes parents habitent dans le sud de la France."
              },
              {
                "word": "Le père",
                "type": "n. m.",
                "def": "Homme qui a un ou plusieurs enfants.",
                "example": "Mon père travaille comme ingénieur à Paris."
              },
              {
                "word": "La mère",
                "type": "n. f.",
                "def": "Femme qui a un ou plusieurs enfants.",
                "example": "Ma mère enseigne les mathématiques au lycée."
              },
              {
                "word": "L'enfant",
                "type": "n. m. / f.",
                "def": "Fils ou fille par rapport aux parents.",
                "example": "Ils ont deux enfants, un garçon et une fille."
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "3. La Fratrie & les Amis",
            "words": [
              "Le frère",
              "La sœur",
              "L'ami(e)",
              "Le cousin"
            ],
            "details": [
              {
                "word": "Le frère",
                "type": "n. m.",
                "def": "Garçon ou homme né des mêmes parents.",
                "example": "J'ai un grand frère qui s'appelle Julien."
              },
              {
                "word": "La sœur",
                "type": "n. f.",
                "def": "Fille ou femme née des mêmes parents.",
                "example": "Ma petite sœur a dix ans et joue du violon."
              },
              {
                "word": "L'ami(e)",
                "type": "n.",
                "def": "Personne avec laquelle on partage une affection mutuelle.",
                "example": "Paul est mon meilleur ami depuis l enfance."
              },
              {
                "word": "Le cousin",
                "type": "n. m.",
                "def": "Fils de l'oncle ou de la tante.",
                "example": "Mon cousin habite à Bordeaux avec sa famille."
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "4. Grammaire : Les adjectifs possessifs",
            "question": "Complétez avec les bons adjectifs possessifs : « Voici ______ père, ______ mère et ______ frères. »",
            "options": [
              "mon / ma / mes",
              "ma / mon / mes",
              "son / sa / leurs",
              "le / la / les"
            ],
            "correctIndex": 0,
            "explanation": "Père est masculin singulier (mon), mère est féminin (ma), et frères est pluriel (mes)."
          },
          {
            "type": "dialogue_view",
            "title": "5. Dialogue Modèle : Regarder des photos de famille",
            "context": "Camille montre une photo de sa famille sur son téléphone à son camarade Maxime.",
            "lines": [
              {
                "speaker": "Maxime",
                "text": "C'est une très belle photo ! Ce sont tes parents au milieu ?"
              },
              {
                "speaker": "Camille",
                "text": "Oui, c'est mon père François et ma mère Hélène. Ils habitent à Rennes."
              },
              {
                "speaker": "Maxime",
                "text": "Et la fille à côté de toi avec les lunettes, qui est-ce ?"
              },
              {
                "speaker": "Camille",
                "text": "C'est Léa, ma grande sœur. Elle est médecin à Nantes."
              },
              {
                "speaker": "Maxime",
                "text": "Tu as aussi des frères ?"
              },
              {
                "speaker": "Camille",
                "text": "Non, je n'ai pas de frère, juste une sœur et deux cousins adorables !"
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "6. Mémorisation Multilingue : La famille",
            "instructions": "Associez chaque membre de la famille à sa traduction.",
            "pairs": [
              {
                "id": "a1_ch4_pere",
                "fr": "Le père",
                "en": "Father",
                "jp": "父 / お父さん (chichi / otōsan)",
                "cn": "父亲 / 爸爸 (fùqīn / bàba)"
              },
              {
                "id": "a1_ch4_mere",
                "fr": "La mère",
                "en": "Mother",
                "jp": "母 / お母さん (haha / okāsan)",
                "cn": "母亲 / 妈妈 (mǔqīn / māma)"
              },
              {
                "id": "a1_ch4_frere",
                "fr": "Le frère",
                "en": "Brother",
                "jp": "兄弟 / 兄 / 弟 (kyōdai)",
                "cn": "兄弟 / 哥哥 / 弟弟 (xiōngdì)"
              },
              {
                "id": "a1_ch4_soeur",
                "fr": "La sœur",
                "en": "Sister",
                "jp": "姉妹 / 姉 / 妹 (shimai)",
                "cn": "姐妹 / 姐姐 / 妹妹 (jiěmèi)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch_3_2",
        "title": "Module 2 : L'Arbre Généalogique & les Liens de Famille",
        "level": "A1",
        "icon": "account_tree",
        "xp": 70,
        "description": "Explorer l'arbre généalogique complet : parents, grands-parents (papi/mamie), oncles (tonton), tantes (tata), fratrie, neveux et nièces avec correspondances multilingues.",
        "steps": [
          {
            "type": "lesson",
            "title": "L'Arbre Généalogique de Lucas",
            "content": "**L'Arbre Généalogique de la Famille**\n\nBienvenue dans la famille de Lucas ! Pour bien comprendre les relations familiales, observons les trois générations qui composent son arbre généalogique.\n\n![Réunion de famille chaleureuse](https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80)\n\n### 👴 👵 Génération 1 : Les Grands-Parents\nAu sommet de l'arbre se trouvent les grands-parents. Ce sont les parents de nos parents :\n- **Le grand-père :** le père de mon père ou de ma mère. En famille, on l'appelle affectueusement **papi** (ou pépé).\n- **La grand-mère :** la mère de mon père ou de ma mère. En famille, on l'appelle affectueusement **mamie** (ou mémé).\n- Ensemble, ils forment **les grands-parents**.\n\n### 👨 👩 Génération 2 : Les Parents, Oncles et Tantes\nLa deuxième génération réunit les adultes qui élèvent les enfants :\n- **Le père (papa)** et **la mère (maman) :** ce sont **les parents**. Unis par le mariage, ils sont **le mari** (l'époux) et **la femme** (l'épouse).\n- **L'oncle (le tonton) :** le frère du père ou de la mère, ou le mari de la tante.\n- **La tante (la tata) :** la sœur du père ou de la mère, ou la femme de l'oncle.\n\n### 👦 👧 Génération 3 : La Fratrie, Neveux et Nièces\nLa troisième génération représente les enfants et petits-enfants :\n- **Le grand frère :** le frère plus âgé que moi (mon aîné).\n- **Le petit frère :** le frère plus jeune que moi (mon cadet).\n- **La grande sœur :** la sœur plus âgée que moi (mon aînée).\n- **La petite sœur :** la sœur plus jeune que moi (ma cadette).\n- **Le neveu :** le fils de mon frère ou de ma sœur.\n- **La nièce :** la fille de mon frère ou de ma sœur.\n- Par rapport aux grands-parents, les garçons sont **les petits-fils** et les filles sont **les petites-filles** (ensemble : **les petits-enfants**).\n\n### 📋 Schéma Récapitulatif des Liens de Parenté\n- Mon père + Ma mère = Mes parents\n- Le père de mon père = Mon papi (grand-père)\n- La mère de mon père = Ma mamie (grand-mère)\n- Le frère de mon père = Mon oncle (tonton)\n- La sœur de mon père = Ma tante (tata)\n- Le fils de ma sœur = Mon neveu\n- La fille de ma sœur = Ma nièce\n- Les enfants de mes enfants = Mes petits-enfants",
            "audioText": "Bienvenue dans la famille de Lucas. Pour bien comprendre les relations familiales, observons les trois générations qui composent son arbre généalogique. En haut de l'arbre se trouvent les grands-parents : le grand-père, que l'on appelle souvent papi, et la grand-mère, que l'on appelle mamie. La deuxième génération réunit les parents, les oncles et les tantes : le père, que l'on appelle papa, et la mère, que l'on appelle maman. Ce sont les parents, le mari et la femme. Le frère de papa ou de maman est l'oncle, ou le tonton. La sœur de papa ou de maman est la tante, ou la tata. Enfin, la troisième génération comprend la fratrie : le grand frère, le petit frère, la grande sœur et la petite sœur. Les enfants de mon frère ou de ma sœur sont mon neveu et ma nièce. Pour les grands-parents, nous sommes leurs petits-enfants, petits-fils et petites-filles."
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Les Parents & le Couple",
            "words": [
              "Le père (papa)",
              "La mère (maman)",
              "Les parents",
              "Le mari et la femme"
            ],
            "details": [
              {
                "word": "Le père (papa)",
                "type": "n. m.",
                "def": "Homme qui a un ou plusieurs enfants. Mot affectueux : papa.",
                "example": "Mon père s'appelle Thomas, et je l'appelle souvent papa.",
                "imageUrl": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "La mère (maman)",
                "type": "n. f.",
                "def": "Femme qui a donné naissance ou élève un enfant. Mot affectueux : maman.",
                "example": "Ma mère prépare le dîner avec maman et toute la famille.",
                "imageUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Les parents",
                "type": "n. m. pl.",
                "def": "Le père et la mère réunis au sein de la famille.",
                "example": "Mes parents travaillent tous les deux dans le centre de Lyon.",
                "imageUrl": "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=400&q=80"
              },
              {
                "word": "Le mari et la femme",
                "type": "loc. nom.",
                "def": "Deux personnes unies par le mariage (les époux).",
                "example": "Marc est le mari de Sophie, et Sophie est sa femme.",
                "imageUrl": "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=400&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Les Grands-Parents & Petits-Enfants",
            "words": [
              "Le grand-père (papi)",
              "La grand-mère (mamie)",
              "Les grands-parents",
              "Les petits-enfants"
            ],
            "details": [
              {
                "word": "Le grand-père (papi)",
                "type": "n. m.",
                "def": "Le père du père ou de la mère. Nom affectueux courant : papi.",
                "example": "Mon grand-père a 72 ans ; mon papi adore jardiner.",
                "imageUrl": "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "La grand-mère (mamie)",
                "type": "n. f.",
                "def": "La mère du père ou de la mère. Nom affectueux courant : mamie.",
                "example": "Ma grand-mère prépare d'excellents gâteaux ; merci mamie !",
                "imageUrl": "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Les grands-parents",
                "type": "n. m. pl.",
                "def": "Le grand-père et la grand-mère ensemble.",
                "example": "Nous rendons visite à nos grands-parents chaque dimanche.",
                "imageUrl": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Les petits-enfants",
                "type": "n. m. pl.",
                "def": "Les enfants des enfants (le petit-fils et la petite-fille).",
                "example": "Papi et mamie ont quatre petits-enfants adorables.",
                "imageUrl": "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=400&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Oncles, Tantes, Tonton & Tata",
            "words": [
              "L'oncle (tonton)",
              "La tante (tata)",
              "Le neveu",
              "La nièce"
            ],
            "details": [
              {
                "word": "L'oncle (tonton)",
                "type": "n. m.",
                "def": "Le frère du père ou de la mère. En famille, on dit souvent tonton.",
                "example": "Mon oncle Marc m'emmène au zoo ; c'est mon tonton préféré.",
                "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
              },
              {
                "word": "La tante (tata)",
                "type": "n. f.",
                "def": "La sœur du père ou de la mère. En famille, on dit souvent tata.",
                "example": "Ma tante Sophie habite à Nantes ; ma tata m'envoie des lettres.",
                "imageUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Le neveu",
                "type": "n. m.",
                "def": "Le fils de son frère ou de sa sœur.",
                "example": "Mon neveu Arthur a cinq ans et commence l'école.",
                "imageUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
              },
              {
                "word": "La nièce",
                "type": "n. f.",
                "def": "La fille de son frère ou de sa sœur.",
                "example": "Ma nièce Chloé adore dessiner avec ses feutres de couleur.",
                "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : La Fratrie — Les Frères",
            "words": [
              "Le frère",
              "Le grand frère",
              "Le petit frère",
              "Les enfants"
            ],
            "details": [
              {
                "word": "Le frère",
                "type": "n. m.",
                "def": "Garçon ou homme né des mêmes parents.",
                "example": "J'ai un frère qui s'appelle Julien.",
                "imageUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80"
              },
              {
                "word": "Le grand frère",
                "type": "loc. nom. m.",
                "def": "Frère plus âgé (le frère aîné).",
                "example": "Mon grand frère a 22 ans et étudie à l'université.",
                "imageUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Le petit frère",
                "type": "loc. nom. m.",
                "def": "Frère plus jeune (le frère cadet).",
                "example": "Mon petit frère a huit ans et joue au football au parc.",
                "imageUrl": "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=600&q=80"
              },
              {
                "word": "Les enfants",
                "type": "n. m. pl.",
                "def": "Fils et filles d'une famille par rapport à leurs parents.",
                "example": "Nos parents ont trois enfants : deux garçons et une fille.",
                "imageUrl": "assets/vocab/enfants_dessin.svg"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : La Fratrie — Les Sœurs",
            "words": [
              "La sœur",
              "La grande sœur",
              "La petite sœur",
              "La famille"
            ],
            "details": [
              {
                "word": "La sœur",
                "type": "n. f.",
                "def": "Fille ou femme née des mêmes parents.",
                "example": "Ma sœur joue très bien du piano.",
                "imageUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
              },
              {
                "word": "La grande sœur",
                "type": "loc. nom. f.",
                "def": "Sœur plus âgée (la sœur aînée).",
                "example": "Ma grande sœur travaille comme infirmière à l'hôpital.",
                "imageUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
              },
              {
                "word": "La petite sœur",
                "type": "loc. nom. f.",
                "def": "Sœur plus jeune (la sœur cadette).",
                "example": "Ma petite sœur regarde des dessins animés le samedi matin.",
                "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
              },
              {
                "word": "La famille",
                "type": "n. f.",
                "def": "Ensemble des personnes unies par des liens de parenté ou d'alliance.",
                "example": "Nous formons une famille très unie et chaleureuse.",
                "imageUrl": "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=400&q=80"
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "Compréhension : L'oncle et le tonton",
            "question": "D'après l'arbre généalogique, qui est « l'oncle » d'une personne ?",
            "options": [
              "Le père de ma mère.",
              "Le frère de mon père ou de ma mère (mon tonton).",
              "Le fils de mon frère.",
              "Le mari de ma fille."
            ],
            "correctIndex": 1,
            "explanation": "L'oncle (appelé familièrement « tonton ») est le frère de son père ou de sa mère, ou l'époux de sa tante."
          },
          {
            "type": "quiz_drill",
            "title": "Compréhension : Papi et mamie",
            "question": "Comment appelle-t-on les parents de nos parents en français familier et affectueux ?",
            "options": [
              "Mon cousin et ma cousine.",
              "Mon neveu et ma nièce.",
              "Mon papi et ma mamie.",
              "Mon tonton et ma tata."
            ],
            "correctIndex": 2,
            "explanation": "Le grand-père s'appelle couramment « papi » et la grand-mère s'appelle « mamie ». Ensemble, ce sont les grands-parents."
          },
          {
            "type": "quiz_drill",
            "title": "Compréhension : Le neveu et la nièce",
            "question": "Si ma sœur a un fils et une fille, qui sont-ils pour moi ?",
            "options": [
              "Le fils est mon neveu et la fille est ma nièce.",
              "Le fils est mon cousin et la fille est ma tante.",
              "Le fils est mon petit-fils et la fille est ma petite-fille.",
              "Le fils est mon tonton et la fille est ma tata."
            ],
            "correctIndex": 0,
            "explanation": "Le fils de son frère ou de sa sœur est son « neveu », et la fille est sa « nièce »."
          },
          {
            "type": "quiz_drill",
            "title": "Grammaire : Présenter sa famille au pluriel et au singulier",
            "question": "Complétez la phrase : « Voici ______ grand frère Thomas, ______ petite sœur Léa et ______ grands-parents. »",
            "options": [
              "ma / mon / mes",
              "son / sa / leur",
              "mon / mon / mes",
              "mon / ma / mes"
            ],
            "correctIndex": 3,
            "explanation": "On emploie « mon » devant un nom masculin singulier (mon grand frère), « ma » devant un nom féminin (ma petite sœur) et « mes » devant un nom pluriel (mes grands-parents)."
          },
          {
            "type": "dialogue_view",
            "title": "Dialogue Modèle : Les photos de famille de Lucas",
            "context": "Lucas montre les photos de sa famille sur son smartphone à son amie Sarah.",
            "lines": [
              {
                "speaker": "Sarah",
                "text": "Lucas, qui est ce monsieur avec des lunettes sur la photo ?"
              },
              {
                "speaker": "Lucas",
                "text": "C'est mon papi Henri ! Et à côté, c'est ma mamie Monique. Ce sont mes grands-parents."
              },
              {
                "speaker": "Sarah",
                "text": "D'accord ! Et l'homme avec le chapeau, c'est ton père ?"
              },
              {
                "speaker": "Lucas",
                "text": "Non, c'est mon oncle Marc, mon tonton préféré ! La dame à côté, c'est sa femme Sophie, ma tante."
              },
              {
                "speaker": "Sarah",
                "text": "Tu as aussi un petit frère ou une sœur ?"
              },
              {
                "speaker": "Lucas",
                "text": "Oui ! J'ai un petit frère, Léo, et une grande sœur, Emma. Emma a un fils, Arthur : c'est mon neveu !"
              },
              {
                "speaker": "Sarah",
                "text": "Quelle belle famille !"
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation Multilingue : Parents & Aïeux",
            "instructions": "Associez chaque membre de la famille à sa traduction trilingue.",
            "pairs": [
              {
                "id": "a1_ch3_pere_papa",
                "fr": "Le père (papa)",
                "en": "Father (Dad)",
                "jp": "父 / お父さん (chichi / otōsan)",
                "cn": "父亲 / 爸爸 (fùqīn / bàba)"
              },
              {
                "id": "a1_ch3_mere_maman",
                "fr": "La mère (maman)",
                "en": "Mother (Mom)",
                "jp": "母 / お母さん (haha / okāsan)",
                "cn": "母亲 / 妈妈 (mǔqīn / māma)"
              },
              {
                "id": "a1_ch3_parents",
                "fr": "Les parents",
                "en": "Parents",
                "jp": "両親 (ryōshin)",
                "cn": "父母 / 家长 (fùmǔ)"
              },
              {
                "id": "a1_ch3_grand_pere_papi",
                "fr": "Le grand-père (papi)",
                "en": "Grandfather (Grandpa)",
                "jp": "祖父 / おじいちゃん (sofu / ojīchan)",
                "cn": "祖父 / 爷爷 / 外公 (zǔfù / yéye)"
              },
              {
                "id": "a1_ch3_grand_mere_mamie",
                "fr": "La grand-mère (mamie)",
                "en": "Grandmother (Grandma)",
                "jp": "祖母 / おばあちゃん (sobo / obāchan)",
                "cn": "祖母 / 奶奶 / 外婆 (zǔmǔ / nǎinai)"
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation Multilingue : Oncles, Tantes, Mari & Femme",
            "instructions": "Associez chaque terme de parenté à sa traduction trilingue.",
            "pairs": [
              {
                "id": "a1_ch3_oncle_tonton",
                "fr": "L'oncle (tonton)",
                "en": "Uncle",
                "jp": "叔父 / おじさん (oji / ojisan)",
                "cn": "叔叔 / 舅舅 / 伯伯 (shūshu / jiùjiu)"
              },
              {
                "id": "a1_ch3_tante_tata",
                "fr": "La tante (tata)",
                "en": "Aunt",
                "jp": "叔母 / おばさん (oba / obasan)",
                "cn": "姑姑 / 阿姨 / 婶婶 (gūgu / āyí)"
              },
              {
                "id": "a1_ch3_mari",
                "fr": "Le mari (l'époux)",
                "en": "Husband",
                "jp": "夫 / 夫君 (otto / danna)",
                "cn": "丈夫 / 先生 (zhàngfu / xiānsheng)"
              },
              {
                "id": "a1_ch3_femme",
                "fr": "La femme (l'épouse)",
                "en": "Wife",
                "jp": "妻 / 奥さん (tsuma / okusan)",
                "cn": "妻子 / 太太 (qīzi / tàitai)"
              },
              {
                "id": "a1_ch3_grands_parents",
                "fr": "Les grands-parents",
                "en": "Grandparents",
                "jp": "祖父母 (sofubo)",
                "cn": "祖父母 (zǔfùmǔ)"
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation Multilingue : Frères & Sœurs",
            "instructions": "Associez chaque lien de fratrie à sa traduction trilingue.",
            "pairs": [
              {
                "id": "a1_ch3_grand_frere",
                "fr": "Le grand frère",
                "en": "Older brother",
                "jp": "兄 / お兄さん (ani / onīsan)",
                "cn": "哥哥 (gēge)"
              },
              {
                "id": "a1_ch3_petit_frere",
                "fr": "Le petit frère",
                "en": "Younger brother",
                "jp": "弟 (otōto)",
                "cn": "弟弟 (dìdi)"
              },
              {
                "id": "a1_ch3_grande_soeur",
                "fr": "La grande sœur",
                "en": "Older sister",
                "jp": "姉 / お姉さん (ane / onēsan)",
                "cn": "姐姐 (jiějie)"
              },
              {
                "id": "a1_ch3_petite_soeur",
                "fr": "La petite sœur",
                "en": "Younger sister",
                "jp": "妹 (imōto)",
                "cn": "妹妹 (mèimei)"
              },
              {
                "id": "a1_ch3_famille",
                "fr": "La famille",
                "en": "Family",
                "jp": "家族 (kazoku)",
                "cn": "家庭 / 家人 (jiātíng)"
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation Multilingue : Petits-Enfants, Neveux & Nièces",
            "instructions": "Associez chaque membre de la descendance à sa traduction trilingue.",
            "pairs": [
              {
                "id": "a1_ch3_neveu",
                "fr": "Le neveu",
                "en": "Nephew",
                "jp": "甥 (oi)",
                "cn": "侄子 / 外甥 (zhízi / wàishēng)"
              },
              {
                "id": "a1_ch3_niece",
                "fr": "La nièce",
                "en": "Niece",
                "jp": "姪 (mei)",
                "cn": "侄女 / 外甥女 (zhínǚ / wàishēngnǚ)"
              },
              {
                "id": "a1_ch3_petit_fils",
                "fr": "Le petit-fils",
                "en": "Grandson",
                "jp": "孫息子 / 孫 (mago-musuko)",
                "cn": "孙子 / 外孙 (sūnzi / wàisūn)"
              },
              {
                "id": "a1_ch3_petite_fille",
                "fr": "La petite-fille",
                "en": "Granddaughter",
                "jp": "孫娘 (mago-musume)",
                "cn": "孙女 / 外孙女 (sūnnǚ / wàisūnnǚ)"
              },
              {
                "id": "a1_ch3_enfants",
                "fr": "Les enfants",
                "en": "Children",
                "jp": "子供たち (kodomo-tachi)",
                "cn": "孩子们 (háizimen)"
              }
            ]
          }
        ]
      }
    ],
    "grammarLessonId": "a1-demonstratifs-possessifs"
  },
  {
    "chapterId": "chap_4",
    "chapterNumber": 4,
    "chapterTitle": "Chapitre 4 : Routine et temps",
    "chapterSubtitle": "日課と時間 — 日常与时间",
    "level": "A1",
    "year": 1,
    "icon": "schedule",
    "color": "#2E7D32",
    "quests": [
      {
        "id": "quest_ch_4",
        "title": "Raconter sa Journée & ses Horaires",
        "level": "A1",
        "icon": "schedule",
        "xp": 60,
        "description": "Apprendre à exprimer les moments de la journée et les actions quotidiennes de base.",
        "steps": [
          {
            "type": "image_scene",
            "title": "1. Scène visuelle : Le réveil du matin",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
            "caption": "Le soleil matinal éclaire la pièce ; une tasse de café chaud fume sur la table.",
            "words": [
              "Le matin",
              "Le réveil",
              "Le petit-déjeuner",
              "Le café",
              "Le soir",
              "L'heure"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "2. Les Moments de la Journée",
            "words": [
              "Le matin",
              "Le midi",
              "Le soir",
              "La nuit"
            ],
            "details": [
              {
                "word": "Le matin",
                "type": "n. m.",
                "def": "Première partie du jour, du lever du soleil jusqu'à midi.",
                "example": "Le matin, je bois toujours un verre d'eau fraîche."
              },
              {
                "word": "Le midi",
                "type": "n. m.",
                "def": "Le milieu du jour (12 heures) et le moment du déjeuner.",
                "example": "À midi, nous mangeons ensemble à la cantine."
              },
              {
                "word": "Le soir",
                "type": "n. m.",
                "def": "Fin du jour et début de la nuit.",
                "example": "Le soir, j'aime lire un roman au calme."
              },
              {
                "word": "La nuit",
                "type": "n. f.",
                "def": "Période entre le coucher et le lever du soleil.",
                "example": "La nuit est très paisible dans ce petit village."
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "3. Les Actions de la Routine",
            "words": [
              "Se réveiller",
              "Déjeuner",
              "Travailler",
              "Dormir"
            ],
            "details": [
              {
                "word": "Se réveiller",
                "type": "v. pron.",
                "def": "Sortir du sommeil le matin.",
                "example": "Je me réveille tous les jours à sept heures."
              },
              {
                "word": "Déjeuner",
                "type": "v. intr.",
                "def": "Prendre le repas de la mi-journée.",
                "example": "Les étudiants déjeunent souvent à la cafétéria."
              },
              {
                "word": "Travailler",
                "type": "v. intr.",
                "def": "Exercer son métier ou étudier avec régularité.",
                "example": "Elle travaille à la bibliothèque tous les après-midis."
              },
              {
                "word": "Dormir",
                "type": "v. intr.",
                "def": "Être en état de repos physique et mental.",
                "example": "Il est important de dormir au moins huit heures par nuit."
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "4. Grammaire : Verbes pronominaux au présent",
            "question": "Choisissez la bonne forme : « Pierre et moi, nous ______ tous les matins à sept heures. »",
            "options": [
              "nous levons",
              "se lèvent",
              "vous levez",
              "me lève"
            ],
            "correctIndex": 0,
            "explanation": "Avec le sujet « Pierre et moi » (équivalent de nous), le verbe pronominal se conjugue : « nous nous levons »."
          },
          {
            "type": "dialogue_view",
            "title": "5. Dialogue Modèle : Décrire son emploi du temps",
            "context": "Hugo et Emma comparent leurs journées types de la semaine.",
            "lines": [
              {
                "speaker": "Hugo",
                "text": "Emma, à quelle heure tu te lèves d habitude pendant la semaine ?"
              },
              {
                "speaker": "Emma",
                "text": "Je me réveille à six heures et demie, je prends un café et je pars vite."
              },
              {
                "speaker": "Hugo",
                "text": "Et à quelle heure commencent tes cours le matin ?"
              },
              {
                "speaker": "Emma",
                "text": "À huit heures pile. Et l'après-midi, je travaille jusqu'à seize heures."
              },
              {
                "speaker": "Hugo",
                "text": "Tu as une journée bien remplie ! Tu te couches tôt le soir ?"
              },
              {
                "speaker": "Emma",
                "text": "Oui, vers vingt-deux heures trente, je dors comme un bébé !"
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "6. Mémorisation Multilingue : Les moments de la journée",
            "instructions": "Associez chaque moment de la journée à sa traduction correspondante.",
            "pairs": [
              {
                "id": "a1_ch6_matin",
                "fr": "Le matin",
                "en": "Morning",
                "jp": "朝 / 午前 (asa / gozen)",
                "cn": "早晨 / 上午 (zǎochen / shàngwǔ)"
              },
              {
                "id": "a1_ch6_midi",
                "fr": "Le midi",
                "en": "Noon / Midday",
                "jp": "正午 / お昼 (shōgo / ohiru)",
                "cn": "中午 (zhōngwǔ)"
              },
              {
                "id": "a1_ch6_soir",
                "fr": "Le soir",
                "en": "Evening",
                "jp": "夕方 / 晩 (yūgata / ban)",
                "cn": "晚上 / 傍晚 (wǎnshang / bàngwǎn)"
              },
              {
                "id": "a1_ch6_nuit",
                "fr": "La nuit",
                "en": "Night",
                "jp": "夜 (yoru)",
                "cn": "夜晚 (yèwǎn)"
              }
            ]
          }
        ]
      }
    ],
    "grammarLessonId": "a1-present-indicatif"
  },
  {
    "chapterId": "chap_5",
    "chapterNumber": 5,
    "chapterTitle": "Chapitre 5 : Logement et quartier",
    "chapterSubtitle": "住まいと地域 — 住房与街区",
    "level": "A1",
    "year": 1,
    "icon": "home",
    "color": "#2E7D32",
    "quests": [
      {
        "id": "quest_ch_5",
        "title": "Décrire son Appartement & son Quartier",
        "level": "A1",
        "icon": "home",
        "xp": 65,
        "description": "Apprendre à décrire les pièces de son logement et les commodités de son quartier.",
        "steps": [
          {
            "type": "image_scene",
            "title": "1. Scène visuelle : L'appartement lumineux",
            "imageUrl": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
            "caption": "Un salon chaleureux et ensoleillé avec parquet, grande fenêtre et plantes vertes.",
            "words": [
              "L'appartement",
              "Le salon",
              "La cuisine",
              "La chambre",
              "L immeuble",
              "La fenêtre"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "2. Les Pièces du Logement",
            "words": [
              "L'appartement",
              "Le salon",
              "La cuisine",
              "La chambre"
            ],
            "details": [
              {
                "word": "L'appartement",
                "type": "n. m.",
                "def": "Ensemble de pièces d habitation dans un immeuble.",
                "example": "J'ai loué un charmant deux-pièces au troisième étage."
              },
              {
                "word": "Le salon",
                "type": "n. m.",
                "def": "Pièce principale pour se détendre et recevoir des invités.",
                "example": "Le salon est très lumineux grâce aux grandes baies vitrées."
              },
              {
                "word": "La cuisine",
                "type": "n. f.",
                "def": "Pièce équipée pour préparer et cuire les repas.",
                "example": "La cuisine possède un grand plan de travail moderne."
              },
              {
                "word": "La chambre",
                "type": "n. f.",
                "def": "Pièce calme où se trouve le lit pour dormir.",
                "example": "Ma chambre donne sur un joli jardin arboré."
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "3. Le Quartier & l Environnement",
            "words": [
              "Le quartier",
              "L immeuble",
              "Le balcon",
              "La rue"
            ],
            "details": [
              {
                "word": "Le quartier",
                "type": "n. m.",
                "def": "Partie d'une ville possédant son ambiance et ses commerces.",
                "example": "C'est un quartier piétonnier très animé le week-end."
              },
              {
                "word": "L immeuble",
                "type": "n. m.",
                "def": "Grand bâtiment urbain à plusieurs étages.",
                "example": "L immeuble dispose d'un ascenseur et d'un digicode."
              },
              {
                "word": "Le balcon",
                "type": "n. m.",
                "def": "Plateforme extérieure en saillie sur la façade.",
                "example": "Nous prenons le petit-déjeuner sur le balcon au printemps."
              },
              {
                "word": "La rue",
                "type": "n. f.",
                "def": "Voie de circulation bordée de bâtiments en ville.",
                "example": "La rue est bordée de platanes et de petits commerces."
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "4. Grammaire : « Il y a » et prépositions de lieu",
            "question": "Complétez la description : « Dans mon quartier, ______ un parc magnifique tout ______ de chez moi. »",
            "options": [
              "il y a / près",
              "c'est / loin",
              "il a / en face",
              "il est / avec"
            ],
            "correctIndex": 0,
            "explanation": "On emploie « il y a » pour constater la présence d'un lieu et « près de » pour exprimer la proximité."
          },
          {
            "type": "dialogue_view",
            "title": "5. Dialogue Modèle : Faire visiter son appartement",
            "context": "Julien fait visiter son nouvel appartement à son amie Manon.",
            "lines": [
              {
                "speaker": "Julien",
                "text": "Bienvenue chez moi Manon ! Entre, je t'en prie."
              },
              {
                "speaker": "Manon",
                "text": "Merci Julien ! Waouh, ton salon est spacieux et très lumineux !"
              },
              {
                "speaker": "Julien",
                "text": "Oui, et voici la cuisine américaine. Elle est toute équipée."
              },
              {
                "speaker": "Manon",
                "text": "C'est très pratique. Et tu as un balcon en plus ?"
              },
              {
                "speaker": "Julien",
                "text": "Oui, il donne sur la cour arrière. C'est calme, on n entend pas la rue."
              },
              {
                "speaker": "Manon",
                "text": "C'est un vrai coup de cœur, ton quartier a l'air formidable !"
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "6. Mémorisation Multilingue : Les pièces de la maison",
            "instructions": "Associez chaque pièce à sa traduction.",
            "pairs": [
              {
                "id": "a1_ch7_salon",
                "fr": "Le salon",
                "en": "Living room",
                "jp": "居間 / リビング (ima / ribingu)",
                "cn": "客厅 / 起居室 (kètīng)"
              },
              {
                "id": "a1_ch7_cuisine",
                "fr": "La cuisine",
                "en": "Kitchen",
                "jp": "台所 / キッチン (daidokoro / kitchin)",
                "cn": "厨房 (chúfáng)"
              },
              {
                "id": "a1_ch7_chambre",
                "fr": "La chambre",
                "en": "Bedroom",
                "jp": "寝室 / 部屋 (shinshitsu / heya)",
                "cn": "卧室 / 房间 (wòshì)"
              },
              {
                "id": "a1_ch7_immeuble",
                "fr": "L immeuble",
                "en": "Building / Apartment block",
                "jp": "建物 / マンション (tatemono / manshon)",
                "cn": "大楼 / 公寓楼 (dàlóu)"
              }
            ]
          }
        ]
      }
    ],
    "grammarLessonId": "a1-articles"
  },
  {
    "chapterId": "chap_6",
    "chapterNumber": 6,
    "chapterTitle": "Chapitre 6 : Ville et déplacements",
    "chapterSubtitle": "都市と移動 — 城市与出行",
    "level": "A1",
    "year": 1,
    "icon": "directions_subway",
    "color": "#2E7D32",
    "quests": [
      {
        "id": "quest_ch_6",
        "title": "Prendre les Transports & S orienter",
        "level": "A1",
        "icon": "directions_subway",
        "xp": 70,
        "description": "Apprendre à demander son chemin et utiliser les transports en commun en ville.",
        "steps": [
          {
            "type": "image_scene",
            "title": "1. Scène visuelle : La station de métro parisienne",
            "imageUrl": "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=900&q=80",
            "caption": "Entrée d'une bouche de métro style Art Nouveau dans une rue animée.",
            "words": [
              "Le métro",
              "La station",
              "Le billet",
              "Le bus",
              "La rue",
              "Le train"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "2. Les Transports en Commun",
            "words": [
              "Le métro",
              "Le bus",
              "La gare",
              "Le billet"
            ],
            "details": [
              {
                "word": "Le métro",
                "type": "n. m.",
                "def": "Train urbain souterrain rapide.",
                "example": "La ligne 1 du métro traverse tout Paris d est en ouest."
              },
              {
                "word": "Le bus",
                "type": "n. m.",
                "def": "Véhicule de transport en commun routier.",
                "example": "Le bus numéro 38 s'arrête juste devant le musée."
              },
              {
                "word": "La gare",
                "type": "n. f.",
                "def": "Bâtiment d'accès pour prendre les trains régionaux et nationaux.",
                "example": "Nous avons rendez-vous à la gare de Lyon à quatorze heures."
              },
              {
                "word": "Le billet",
                "type": "n. m.",
                "def": "Titre imprimé ou électronique validant le transport.",
                "example": "Pensez à composter votre billet avant de monter à bord."
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "3. Demander son Chemin",
            "words": [
              "Tourner",
              "Tout droit",
              "À gauche",
              "À droite"
            ],
            "details": [
              {
                "word": "Tourner",
                "type": "v. intr.",
                "def": "Changer de direction dans une rue.",
                "example": "Tournez à la première rue après la pharmacie."
              },
              {
                "word": "Tout droit",
                "type": "loc. adv.",
                "def": "Sans changer de direction, en ligne directe.",
                "example": "Continuez tout droit pendant deux cents mètres."
              },
              {
                "word": "À gauche",
                "type": "loc. adv.",
                "def": "Du côté opposé à la droite.",
                "example": "La boulangerie se trouve juste à gauche de la place."
              },
              {
                "word": "À droite",
                "type": "loc. adv.",
                "def": "Du côté opposé à la gauche.",
                "example": "Prenez la rue à droite après le feu tricolore."
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "4. Grammaire : Les prépositions avec les moyens de transport",
            "question": "Complétez la phrase : « Pour aller au bureau, je me déplace ______ métro et je finis le trajet ______ pied. »",
            "options": [
              "en / à",
              "à / en",
              "dans / par",
              "par / avec"
            ],
            "correctIndex": 0,
            "explanation": "On emploie « en » pour les véhicules fermés (en métro, en train, en bus) et « à » pour « à pied » et « à vélo »."
          },
          {
            "type": "dialogue_view",
            "title": "5. Dialogue Modèle : Demander son chemin à un passant",
            "context": "Un touriste aborde poliment une passante dans le centre-ville pour trouver l'office de tourisme.",
            "lines": [
              {
                "speaker": "Le touriste",
                "text": "Pardon madame, excusez-moi de vous déranger. Pour aller à l'office de tourisme, s'il vous plaît ?"
              },
              {
                "speaker": "La passante",
                "text": "Bonjour monsieur ! Ce n'est pas loin d'ici. Vous allez tout droit jusqu'au feu tricolore."
              },
              {
                "speaker": "Le touriste",
                "text": "D'accord, tout droit. Et ensuite ?"
              },
              {
                "speaker": "La passante",
                "text": "Au feu, vous tournez à gauche sur la grande avenue. L'office est juste en face de la mairie."
              },
              {
                "speaker": "Le touriste",
                "text": "C'est très clair, merci infiniment pour votre gentillesse !"
              },
              {
                "speaker": "La passante",
                "text": "Je vous en prie, bonne visite de notre ville !"
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "6. Mémorisation Multilingue : S orienter en ville",
            "instructions": "Associez chaque indication de direction à sa traduction.",
            "pairs": [
              {
                "id": "a1_ch8_toutdroit",
                "fr": "Tout droit",
                "en": "Straight ahead",
                "jp": "まっすぐ (massugu)",
                "cn": "一直走 / 笔直 (yīzhí zǒu)"
              },
              {
                "id": "a1_ch8_gauche",
                "fr": "À gauche",
                "en": "On the left",
                "jp": "左へ / 左側に (hidari e)",
                "cn": "向左 / 左边 (xiàng zuǒ)"
              },
              {
                "id": "a1_ch8_droite",
                "fr": "À droite",
                "en": "On the right",
                "jp": "右へ / 右側に (migi e)",
                "cn": "向右 / 右边 (xiàng yòu)"
              },
              {
                "id": "a1_ch8_gare",
                "fr": "La gare",
                "en": "Station / Train station",
                "jp": "駅 (eki)",
                "cn": "火车站 (huǒchēzhàn)"
              }
            ]
          }
        ]
      }
    ],
    "grammarLessonId": "a1-prepositions-lieu"
  },
  {
    "chapterId": "chap_7",
    "chapterNumber": 7,
    "chapterTitle": "Chapitre 7 : Le travail",
    "chapterSubtitle": "仕事と職業 — 工作与职业",
    "level": "A1",
    "year": 1,
    "icon": "work",
    "color": "#2E7D32",
    "grammarLessonId": "a1-present-indicatif",
    "quests": [
      {
        "id": "quest_ch_7",
        "title": "Module 1 : Enseignement, Médecine générale & Pharmacie",
        "level": "A1",
        "icon": "school",
        "xp": 60,
        "description": "Découvrir le vocabulaire de l enseignement, de la médecine générale et de la pharmacie.",
        "steps": [
          {
            "type": "image_scene",
            "title": "Scène visuelle : L école, le cabinet médical et l officine",
            "imageUrl": "",
            "caption": "Dans la ville, enseignants, médecins de famille et pharmaciens accompagnent les habitants au quotidien.",
            "words": [
              "Le professeur",
              "La professeure",
              "L instituteur",
              "L institutrice",
              "Le médecin",
              "Le médecin généraliste",
              "Le pharmacien",
              "La pharmacienne"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : L Enseignement et l Éducation",
            "words": [
              "Le professeur",
              "La professeure",
              "L instituteur",
              "L institutrice"
            ],
            "details": [
              {
                "word": "Le professeur",
                "type": "n. m.",
                "def": "Personne qui enseigne une discipline au collège, au lycée ou à l université.",
                "example": "Le professeur de français explique la règle de grammaire avec bienveillance.",
                "imageUrl": ""
              },
              {
                "word": "La professeure",
                "type": "n. f.",
                "def": "Femme qui enseigne une matière ou une discipline académique.",
                "example": "La professeure d histoire accueille ses nouveaux élèves en classe.",
                "imageUrl": ""
              },
              {
                "word": "L instituteur",
                "type": "n. m.",
                "def": "Enseignant dans une école primaire ou maternelle (professeur des écoles).",
                "example": "L instituteur apprend à lire et à écrire aux jeunes enfants.",
                "imageUrl": ""
              },
              {
                "word": "L institutrice",
                "type": "n. f.",
                "def": "Enseignante qui prend en charge une classe d école primaire.",
                "example": "L institutrice organise une belle sortie pédagogique au musée.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Médecine générale & Pharmacie",
            "words": [
              "Le médecin",
              "Le médecin généraliste",
              "Le pharmacien",
              "La pharmacienne"
            ],
            "details": [
              {
                "word": "Le médecin",
                "type": "n. m.",
                "def": "Professionnel titulaire du doctorat en médecine qui soigne les malades.",
                "example": "Je consulte un médecin dès les premiers signes de fièvre.",
                "imageUrl": ""
              },
              {
                "word": "Le médecin généraliste",
                "type": "n. m.",
                "def": "Médecin de premier recours qui assure le suivi médical global des patients.",
                "example": "Mon médecin généraliste m examine et me prescrit un traitement adapté.",
                "imageUrl": ""
              },
              {
                "word": "Le pharmacien",
                "type": "n. m.",
                "def": "Spécialiste diplômé qui délivre les médicaments et conseille les patients en officine.",
                "example": "Le pharmacien m explique comment prendre ce traitement après le repas.",
                "imageUrl": ""
              },
              {
                "word": "La pharmacienne",
                "type": "n. f.",
                "def": "Femme pharmacienne responsable qui délivre les ordonnances et conseille les clients.",
                "example": "La pharmacienne prépare la commande de médicaments pour demain matin.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "Grammaire : Exprimer sa profession sans article",
            "question": "Comment indique-t-on correctement sa profession en français avec le verbe être ?",
            "options": [
              "Je suis un professeur.",
              "Je suis professeur.",
              "Je fais de professeur.",
              "J ai professeur."
            ],
            "correctIndex": 1,
            "explanation": "En français standard, on n utilise pas d article indéfini devant un nom de métier après le verbe « être » : on dit « Je suis professeur » (et non « Je suis un professeur »)."
          },
          {
            "type": "dialogue_view",
            "title": "Dialogue Modèle : Présentations professionnelles",
            "context": "Deux professionnels de santé et d éducation font connaissance.",
            "lines": [
              {
                "speaker": "Thomas",
                "text": "Bonjour ! Moi, c est Thomas. Et vous, quel est votre travail ?"
              },
              {
                "speaker": "Éléonore",
                "text": "Bonjour Thomas ! Je suis professeure dans un collège. Et vous ?"
              },
              {
                "speaker": "Thomas",
                "text": "Je suis médecin généraliste dans un cabinet médical de quartier."
              },
              {
                "speaker": "Éléonore",
                "text": "C est formidable ! Ma sœur est pharmacienne juste en face de votre cabinet."
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation Multilingue : Éducation & Santé de proximité",
            "instructions": "Associez chaque métier à son équivalent multilingue.",
            "pairs": [
              {
                "id": "a1_c7_professeur",
                "fr": "Le professeur",
                "en": "Teacher / Professor",
                "jp": "教師 / 教授 (kyoushi / kyouju)",
                "cn": "教师 / 教授 (jiàoshī / jiàoshòu)"
              },
              {
                "id": "a1_c7_medecin",
                "fr": "Le médecin",
                "en": "Doctor / Physician",
                "jp": "医師 / 医者 (ishi / isha)",
                "cn": "医生 (yīshēng)"
              },
              {
                "id": "a1_c7_pharmacien",
                "fr": "Le pharmacien",
                "en": "Pharmacist",
                "jp": "薬剤師 (yakuzaishi)",
                "cn": "药剂师 (yàojìshī)"
              },
              {
                "id": "a1_c7_instituteur",
                "fr": "L instituteur",
                "en": "Primary school teacher",
                "jp": "小学校教諭 (shougakkou kyouyu)",
                "cn": "小学教师 (xiǎoxué jiàoshī)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch_7_2",
        "title": "Module 2 : Chirurgie, Urgences, Soins dentaires & Spécialistes",
        "level": "A1",
        "icon": "local_hospital",
        "xp": 60,
        "description": "Assimiler les noms des soignants hospitaliers, chirurgiens, dentistes, urgentistes, ambulanciers et spécialistes.",
        "steps": [
          {
            "type": "image_scene",
            "title": "Scène visuelle : L hôpital et le centre de soins",
            "imageUrl": "",
            "caption": "Aux urgences, en salle d opération et dans les cabinets spécialisés, les professionnels de santé interviennent avec réactivité.",
            "words": [
              "Le chirurgien",
              "La chirurgienne",
              "Le dentiste",
              "La dentiste",
              "L ostéopathe",
              "Le médecin urgentiste",
              "L ambulancier",
              "L ambulancière",
              "L infirmier",
              "L infirmière",
              "L aide-soignante",
              "L ophtalmologue",
              "Le cardiologue",
              "Le pneumologue",
              "Le gastroentérologue"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Chirurgie, Dentaire, Urgences & Ostéopathie",
            "words": [
              "Le chirurgien",
              "La chirurgienne",
              "Le dentiste",
              "L ostéopathe",
              "Le médecin urgentiste",
              "L ambulancier"
            ],
            "details": [
              {
                "word": "Le chirurgien",
                "type": "n. m.",
                "def": "Médecin spécialiste qui pratique des opérations chirurgicales au bloc opératoire.",
                "example": "Le chirurgien opère le patient à l hôpital avec une grande précision.",
                "imageUrl": ""
              },
              {
                "word": "La chirurgienne",
                "type": "n. f.",
                "def": "Femme médecin spécialiste des interventions opératoires.",
                "example": "La chirurgienne rassure les proches après le succès de l opération.",
                "imageUrl": ""
              },
              {
                "word": "Le dentiste",
                "type": "n. m. / f.",
                "def": "Praticien spécialiste de la santé bucco-dentaire qui soigne les dents et les gencives.",
                "example": "Le dentiste vérifie mes dents deux fois par an pour prévenir les caries.",
                "imageUrl": ""
              },
              {
                "word": "L ostéopathe",
                "type": "n. m. / f.",
                "def": "Thérapeute manuel qui traite les douleurs musculaires, articulaires et vertébrales par manipulations douces.",
                "example": "L ostéopathe soulage mon mal de dos grâce à des manipulations articulaires.",
                "imageUrl": ""
              },
              {
                "word": "Le médecin urgentiste",
                "type": "n. m. / f.",
                "def": "Médecin spécialiste de la prise en charge immédiate des urgences vitales et traumatologiques.",
                "example": "Le médecin urgentiste prend rapidement en charge les blessés à l arrivée au Samu.",
                "imageUrl": ""
              },
              {
                "word": "L ambulancier",
                "type": "n. m.",
                "def": "Professionnel qualifié qui assure le transport sanitaire et la surveillance des blessés et malades.",
                "example": "L ambulancier transporte le patient vers le centre hospitalier avec précaution.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Soins infirmiers & Médecins Spécialistes",
            "words": [
              "L infirmier",
              "L infirmière",
              "L aide-soignante",
              "L ophtalmologue",
              "Le cardiologue",
              "Le pneumologue",
              "Le gastroentérologue"
            ],
            "details": [
              {
                "word": "L infirmier",
                "type": "n. m.",
                "def": "Professionnel de santé dispensant les soins et appliquant les prescriptions médicales.",
                "example": "L infirmier vérifie la perfusion et surveille la tension artérielle du malade.",
                "imageUrl": ""
              },
              {
                "word": "L infirmière",
                "type": "n. f.",
                "def": "Femme soignante diplômée d État assurant la prise en charge des patients.",
                "example": "L infirmière fait la prise de sang avec douceur et professionnalisme.",
                "imageUrl": ""
              },
              {
                "word": "L aide-soignante",
                "type": "n. f.",
                "def": "Personne qui assiste l équipe soignante et aide les patients au quotidien.",
                "example": "L aide-soignante aide le patient âgé pour sa toilette et son repas.",
                "imageUrl": ""
              },
              {
                "word": "L ophtalmologue",
                "type": "n. m. / f.",
                "def": "Médecin spécialiste de la vision et des yeux.",
                "example": "L ophtalmologue examine ma vue et rédige une ordonnance pour des lunettes.",
                "imageUrl": ""
              },
              {
                "word": "Le cardiologue",
                "type": "n. m. / f.",
                "def": "Médecin spécialiste des maladies du cœur et de la circulation sanguine.",
                "example": "Le cardiologue analyse le tracé de l électrocardiogramme.",
                "imageUrl": ""
              },
              {
                "word": "Le pneumologue",
                "type": "n. m. / f.",
                "def": "Médecin spécialiste des poumons et de l appareil respiratoire.",
                "example": "Le pneumologue traite les affections des bronches et l asthme.",
                "imageUrl": ""
              },
              {
                "word": "Le gastroentérologue",
                "type": "n. m. / f.",
                "def": "Médecin spécialiste du tube digestif, de l estomac et du foie.",
                "example": "Le gastroentérologue conseille un bilan pour soulager les maux d estomac.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "Compréhension : Urgences et transport sanitaire",
            "question": "Quel professionnel assure le transport d urgence des blessés en véhicule médicalisé vers l hôpital ?",
            "options": [
              "Le comptable",
              "L ambulancier",
              "Le géomètre",
              "Le notaire"
            ],
            "correctIndex": 1,
            "explanation": "L ambulancier transporte les malades et blessés en ambulance vers les services d urgence."
          },
          {
            "type": "dialogue_view",
            "title": "Dialogue Modèle : À l arrivée aux urgences",
            "context": "L ambulancier transmet les informations médicales au médecin urgentiste.",
            "lines": [
              {
                "speaker": "L ambulancier",
                "text": "Bonjour docteur ! Nous amenons un patient qui souffre d une fracture du bras."
              },
              {
                "speaker": "Le médecin urgentiste",
                "text": "Bonjour ! Merci pour votre rapidité. Les constantes sont-elles stables ?"
              },
              {
                "speaker": "L ambulancier",
                "text": "Oui, le pouls et la tension sont normaux. L infirmière a déjà posé une attelle."
              },
              {
                "speaker": "Le médecin urgentiste",
                "text": "Parfait. Nous l emmenons en radiologie immédiatement."
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation Multilingue : Chirurgie, Soins & Urgences",
            "instructions": "Associez chaque professionnel de santé à sa traduction.",
            "pairs": [
              {
                "id": "a1_c7_chirurgien",
                "fr": "Le chirurgien",
                "en": "Surgeon",
                "jp": "外科医 (gekai)",
                "cn": "外科医生 (wàikē yīshēng)"
              },
              {
                "id": "a1_c7_dentiste",
                "fr": "Le dentiste",
                "en": "Dentist",
                "jp": "歯科医 (shikai)",
                "cn": "牙医 (yáyī)"
              },
              {
                "id": "a1_c7_osteo",
                "fr": "L ostéopathe",
                "en": "Osteopath",
                "jp": "オステオパシー施術師 (osuteopashii)",
                "cn": "整骨师 / 骨科理疗师 (zhěnggǔshī)"
              },
              {
                "id": "a1_c7_ambulancier",
                "fr": "L ambulancier",
                "en": "Ambulance driver / Paramedic",
                "jp": "救急隊員 (kyuukyuu tai-in)",
                "cn": "急救员 / 救护车司机 (jíjiùyuán)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch_7_3",
        "title": "Module 3 : Ingénierie, Architecture & Sciences",
        "level": "A1",
        "icon": "architecture",
        "xp": 60,
        "description": "Découvrir les métiers techniques, scientifiques et d architecture.",
        "steps": [
          {
            "type": "image_scene",
            "title": "Scène visuelle : Le bureau d études et le laboratoire",
            "imageUrl": "",
            "caption": "Dans le bureau d études d architecture et au laboratoire, chercheurs et ingénieurs conçoivent les projets de demain.",
            "words": [
              "L ingénieur",
              "L ingénieure",
              "L architecte",
              "Le géomètre",
              "Le technicien",
              "La technicienne",
              "Le chercheur",
              "La chercheuse",
              "Le scientifique",
              "La scientifique"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Conception & Mesure",
            "words": [
              "L ingénieur",
              "L ingénieure",
              "L architecte",
              "Le géomètre"
            ],
            "details": [
              {
                "word": "L ingénieur",
                "type": "n. m.",
                "def": "Professionnel technique hautement qualifié qui conçoit et développe des projets technologiques.",
                "example": "L ingénieur calcule la résistance du futur pont autoroutier.",
                "imageUrl": ""
              },
              {
                "word": "L ingénieure",
                "type": "n. f.",
                "def": "Femme ingénieur chargée de projets techniques ou industriels.",
                "example": "L ingénieure en informatique pilote le développement de la nouvelle application.",
                "imageUrl": ""
              },
              {
                "word": "L architecte",
                "type": "n. m. / f.",
                "def": "Concepteur de plans de bâtiments qui supervise la construction et l aménagement.",
                "example": "L architecte dessine les plans d un bâtiment écologique et lumineux.",
                "imageUrl": ""
              },
              {
                "word": "Le géomètre",
                "type": "n. m. / f.",
                "def": "Technicien qui mesure et délimite avec précision les terrains et parcelles foncières.",
                "example": "Le géomètre mesure le terrain avant le début des travaux de terrassement.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Recherche & Technique",
            "words": [
              "Le technicien",
              "La technicienne",
              "Le chercheur",
              "La chercheuse",
              "Le scientifique"
            ],
            "details": [
              {
                "word": "Le technicien",
                "type": "n. m.",
                "def": "Spécialiste qui assure la maintenance et le fonctionnement pratique d équipements.",
                "example": "Le technicien répare le matériel informatique dans l entreprise.",
                "imageUrl": ""
              },
              {
                "word": "La technicienne",
                "type": "n. f.",
                "def": "Femme experte technique qui contrôle les appareils et les installations.",
                "example": "La technicienne analyse les échantillons dans le laboratoire.",
                "imageUrl": ""
              },
              {
                "word": "Le chercheur",
                "type": "n. m.",
                "def": "Spécialiste qui mène des travaux scientifiques d investigation et de découverte.",
                "example": "Le chercheur découvre un nouveau vaccin grâce à ses expériences.",
                "imageUrl": ""
              },
              {
                "word": "La chercheuse",
                "type": "n. f.",
                "def": "Femme scientifique qui conduit des recherches approfondies.",
                "example": "La chercheuse publie ses résultats dans une revue internationale reconnue.",
                "imageUrl": ""
              },
              {
                "word": "Le scientifique",
                "type": "n. m.",
                "def": "Personne qui consacre son activité à l étude des sciences et à la méthode rationnelle.",
                "example": "Le scientifique étudie le climat pour mieux comprendre son évolution.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "Compréhension : Les métiers de la conception",
            "question": "Qui conçoit les plans des maisons et des édifices publics ?",
            "options": [
              "Le géomètre",
              "L architecte",
              "Le secrétaire",
              "Le comptable"
            ],
            "correctIndex": 1,
            "explanation": "L architecte est le professionnel qui conçoit et dessine les plans des bâtiments."
          },
          {
            "type": "dialogue_view",
            "title": "Dialogue Modèle : Sur le chantier de construction",
            "context": "L architecte et l ingénieure font le point sur l avancée des travaux.",
            "lines": [
              {
                "speaker": "L architecte",
                "text": "Bonjour Sophie ! Les plans de l étage sont validés par la mairie."
              },
              {
                "speaker": "L ingénieure",
                "text": "Excellente nouvelle ! Les calculs de structure sont prêts pour la pose du béton."
              },
              {
                "speaker": "L architecte",
                "text": "Parfait. Le géomètre a déjà délimité l accès pour les camions."
              },
              {
                "speaker": "L ingénieure",
                "text": "Tout se déroule selon le calendrier prévu, c est du très bon travail d équipe !"
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation Multilingue : Sciences & Conception",
            "instructions": "Reliez chaque profession technique ou scientifique à sa traduction.",
            "pairs": [
              {
                "id": "a1_c7_ingenieur",
                "fr": "L ingénieur",
                "en": "Engineer",
                "jp": "エンジニア / 技師 (enjinia / gishi)",
                "cn": "工程师 (gōngchéngshī)"
              },
              {
                "id": "a1_c7_architecte",
                "fr": "L architecte",
                "en": "Architect",
                "jp": "建築家 (kenchikuka)",
                "cn": "建筑师 (jiànzhùshī)"
              },
              {
                "id": "a1_c7_chercheur",
                "fr": "Le chercheur",
                "en": "Researcher",
                "jp": "研究者 (kenkyuusha)",
                "cn": "研究员 (yánjiūyuán)"
              },
              {
                "id": "a1_c7_scientifique",
                "fr": "Le scientifique",
                "en": "Scientist",
                "jp": "科学者 (kagakusha)",
                "cn": "科学家 (kēxuéjiā)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch_7_4",
        "title": "Module 4 : Administration, Droit & Gestion",
        "level": "A1",
        "icon": "business_center",
        "xp": 60,
        "description": "Apprendre le vocabulaire des employés de bureau, comptables, juristes et notaires.",
        "steps": [
          {
            "type": "image_scene",
            "title": "Scène visuelle : L entreprise et l étude notariale",
            "imageUrl": "",
            "caption": "Dans les bureaux modernes et les études juridiques, gestionnaires et juristes organisent la vie économique.",
            "words": [
              "L employé",
              "L employée",
              "Le secrétaire",
              "La secrétaire",
              "Le comptable",
              "La comptable",
              "L avocat",
              "L avocate",
              "Le notaire",
              "La notaire"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : L Entreprise et la Gestion",
            "words": [
              "L employé",
              "L employée",
              "Le secrétaire",
              "La secrétaire",
              "Le comptable"
            ],
            "details": [
              {
                "word": "L employé",
                "type": "n. m.",
                "def": "Salarié qui effectue un travail administratif ou commercial dans un bureau ou un magasin.",
                "example": "L employé de bureau classe les dossiers et répond aux courriels clients.",
                "imageUrl": ""
              },
              {
                "word": "L employée",
                "type": "n. f.",
                "def": "Femme salariée travaillant dans le secteur tertiaire ou administratif.",
                "example": "L employée de banque accueille les clients et les renseigne.",
                "imageUrl": ""
              },
              {
                "word": "Le secrétaire",
                "type": "n. m.",
                "def": "Professionnel chargé de la correspondance, des appels et des plannings d un service.",
                "example": "Le secrétaire fixe les rendez-vous de la directrice.",
                "imageUrl": ""
              },
              {
                "word": "La secrétaire",
                "type": "n. f.",
                "def": "Femme chargée des tâches administratives et de l accueil d une organisation.",
                "example": "La secrétaire médicale accueille les patients avec le sourire.",
                "imageUrl": ""
              },
              {
                "word": "Le comptable",
                "type": "n. m. / f.",
                "def": "Professionnel qui tient et vérifie les comptes financiers d une entreprise.",
                "example": "Le comptable prépare le bilan annuel de la société.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Le Droit et les Actes officiels",
            "words": [
              "L avocat",
              "L avocate",
              "Le notaire",
              "La notaire"
            ],
            "details": [
              {
                "word": "L avocat",
                "type": "n. m.",
                "def": "Juriste diplômé qui défend les intérêts de ses clients en justice et les conseille.",
                "example": "L avocat plaide avec éloquence devant le tribunal de grande instance.",
                "imageUrl": ""
              },
              {
                "word": "L avocate",
                "type": "n. f.",
                "def": "Femme juriste qui représente et défend les personnes en justice.",
                "example": "L avocate rédige un contrat de travail solide pour son client.",
                "imageUrl": ""
              },
              {
                "word": "Le notaire",
                "type": "n. m.",
                "def": "Officier public habilité à authentifier les actes officiels (ventes immobilières, successions).",
                "example": "Nous signons l acte d achat de notre maison chez le notaire.",
                "imageUrl": ""
              },
              {
                "word": "La notaire",
                "type": "n. f.",
                "def": "Femme officier ministériel chargée d officialiser les contrats et actes légaux.",
                "example": "La notaire vérifie chaque clause du contrat de mariage.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "Compréhension : Les rôles juridiques et administratifs",
            "question": "Devant quel professionnel officiel signe-t-on l acte authentique pour acheter un logement en France ?",
            "options": [
              "Le comptable",
              "Le notaire",
              "Le secrétaire",
              "Le géomètre"
            ],
            "correctIndex": 1,
            "explanation": "En France, le notaire est l officier public indispensable pour authentifier la vente d un bien immobilier."
          },
          {
            "type": "dialogue_view",
            "title": "Dialogue Modèle : Chez le notaire",
            "context": "Un couple finalise un contrat officiel avec leur notaire.",
            "lines": [
              {
                "speaker": "La notaire",
                "text": "Bonjour monsieur et madame Dupont. Vos pièces d identité sont conformes."
              },
              {
                "speaker": "M. Dupont",
                "text": "Bonjour maître. Le dossier pour l appartement est-il complet ?"
              },
              {
                "speaker": "La notaire",
                "text": "Tout est parfait. Ma secrétaire vous a préparé les copies authentiques."
              },
              {
                "speaker": "M. Dupont",
                "text": "Merci infiniment pour vos conseils avisés et votre rigueur."
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation Multilingue : Droit & Bureau",
            "instructions": "Reliez chaque terme professionnel à sa traduction.",
            "pairs": [
              {
                "id": "a1_c7_comptable",
                "fr": "Le comptable",
                "en": "Accountant",
                "jp": "会計士 (kaikeishi)",
                "cn": "会计师 (kuàijìshī)"
              },
              {
                "id": "a1_c7_avocat",
                "fr": "L avocat",
                "en": "Lawyer / Attorney",
                "jp": "弁護士 (bengoshi)",
                "cn": "律师 (lǜshī)"
              },
              {
                "id": "a1_c7_notaire",
                "fr": "Le notaire",
                "en": "Notary",
                "jp": "公証人 (koushounin)",
                "cn": "公证人 (gōngzhèngrén)"
              },
              {
                "id": "a1_c7_employe",
                "fr": "L employé",
                "en": "Employee / Office worker",
                "jp": "会社員 / 従業員 (kaishain / juugyouin)",
                "cn": "职员 / 员工 (zhíyuán / yuángōng)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch_7_5",
        "title": "Module 5 : Commerce, Vente & Marchés",
        "level": "A1",
        "icon": "storefront",
        "xp": 60,
        "description": "Découvrir les métiers du commerce : vendeurs, commerciaux, épiciers et maraîchers.",
        "steps": [
          {
            "type": "image_scene",
            "title": "Scène visuelle : Le magasin et le marché de plein vent",
            "imageUrl": "",
            "caption": "Dans les commerces du quartier et au marché local, commerçants et clients échangent avec convivialité.",
            "words": [
              "Le vendeur",
              "La vendeuse",
              "Le commercial",
              "La commerciale",
              "L épicier",
              "L épicière",
              "Le maraîcher",
              "La maraîchère",
              "Le caissier",
              "La caissière"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : La Vente & Le Commerce de détail",
            "words": [
              "Le vendeur",
              "La vendeuse",
              "Le commercial",
              "La commerciale"
            ],
            "details": [
              {
                "word": "Le vendeur",
                "type": "n. m.",
                "def": "Personne dont le travail est d accueillir, conseiller et vendre des marchandises aux clients.",
                "example": "Le vendeur de chaussures me conseille une pointure très confortable.",
                "imageUrl": ""
              },
              {
                "word": "La vendeuse",
                "type": "n. f.",
                "def": "Femme chargée du conseil client et de la vente en magasin.",
                "example": "La vendeuse m aide à choisir une jolie écharpe en laine.",
                "imageUrl": ""
              },
              {
                "word": "Le commercial",
                "type": "n. m.",
                "def": "Professionnel qui démarche de nouveaux clients et négocie des contrats pour son entreprise.",
                "example": "Le commercial voyage dans toute la région pour rencontrer ses partenaires.",
                "imageUrl": ""
              },
              {
                "word": "La commerciale",
                "type": "n. f.",
                "def": "Femme responsable des négociations commerciales et des ventes B2B ou B2C.",
                "example": "La commerciale présente nos nouveaux produits lors du salon professionnel.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Les Commerces de Proximité & Marchés",
            "words": [
              "L épicier",
              "L épicière",
              "Le maraîcher",
              "La maraîchère",
              "Le caissier"
            ],
            "details": [
              {
                "word": "L épicier",
                "type": "n. m.",
                "def": "Commerçant qui tient une épicerie de quartier avec des denrées alimentaires variées.",
                "example": "L épicier du coin de la rue est ouvert tard le soir pour dépanner les voisins.",
                "imageUrl": ""
              },
              {
                "word": "L épicière",
                "type": "n. f.",
                "def": "Femme qui gère une épicerie ou un magasin d alimentation de proximité.",
                "example": "L épicière propose des fruits de saison et des produits bio locaux.",
                "imageUrl": ""
              },
              {
                "word": "Le maraîcher",
                "type": "n. m.",
                "def": "Agriculteur qui cultive et vend des légumes frais directement au marché ou à la ferme.",
                "example": "Le maraîcher installe son étal de salades et de carottes fraîches dès l aube.",
                "imageUrl": ""
              },
              {
                "word": "La maraîchère",
                "type": "n. f.",
                "def": "Femme qui cultive et vend des légumes sur les marchés.",
                "example": "La maraîchère explique comment cuisiner ses courgettes du jardin.",
                "imageUrl": ""
              },
              {
                "word": "Le caissier",
                "type": "n. m.",
                "def": "Employé qui encaisse les règlements des clients à la caisse d un supermarché.",
                "example": "Le caissier scanne les articles rapidement avec le sourire.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "Compréhension : Métiers du marché",
            "question": "Comment appelle-t-on le producteur qui cultive et vend des légumes frais au marché ?",
            "options": [
              "Le notaire",
              "Le maraîcher",
              "Le technicien",
              "Le géomètre"
            ],
            "correctIndex": 1,
            "explanation": "Le maraîcher est le producteur spécialisé dans la culture et la vente des légumes."
          },
          {
            "type": "dialogue_view",
            "title": "Dialogue Modèle : Au marché du samedi",
            "context": "Un client achète des légumes frais au producteur maraîcher.",
            "lines": [
              {
                "speaker": "Le maraîcher",
                "text": "Bonjour monsieur ! Que désirez-vous aujourd hui ?"
              },
              {
                "speaker": "Le client",
                "text": "Bonjour ! Je voudrais un kilo de tomates et deux concombres bien frais."
              },
              {
                "speaker": "Le maraîcher",
                "text": "Voici, ils ont été cueillis ce matin dans mon champ."
              },
              {
                "speaker": "Le client",
                "text": "Merci beaucoup ! C est un plaisir d acheter directement au producteur."
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation Multilingue : Métiers de la vente",
            "instructions": "Associez chaque métier commercial à son équivalent multilingue.",
            "pairs": [
              {
                "id": "a1_c7_vendeur",
                "fr": "Le vendeur",
                "en": "Salesperson / Shop assistant",
                "jp": "店員 / 販売員 (ten-in / hanbai-in)",
                "cn": "售货员 / 销售员 (shòuhuòyuán)"
              },
              {
                "id": "a1_c7_commercial",
                "fr": "Le commercial",
                "en": "Sales representative",
                "jp": "営業担当者 (eigyou tantousha)",
                "cn": "业务员 / 销售代表 (yèwùyuán)"
              },
              {
                "id": "a1_c7_epicier",
                "fr": "L épicier",
                "en": "Grocer",
                "jp": "食料品店主 (shokuryouhin-tenshu)",
                "cn": "杂货店主 (záhuòdiàn zhǔ)"
              },
              {
                "id": "a1_c7_maraicher",
                "fr": "Le maraîcher",
                "en": "Market gardener",
                "jp": "野菜農家 / 青果商 (yasai nouka)",
                "cn": "菜农 (càinóng)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch_7_6",
        "title": "Module 6 : Métiers de bouche & Gastronomie",
        "level": "A1",
        "icon": "bakery_dining",
        "xp": 60,
        "description": "Découvrir les artisans de l alimentation : boulangers, pâtissiers, charcutiers et cuisiniers.",
        "steps": [
          {
            "type": "image_scene",
            "title": "Scène visuelle : La boulangerie et le restaurant",
            "imageUrl": "",
            "caption": "Dans les fournils et les cuisines de bistrot, les artisans préparent les trésors du patrimoine gastronomique français.",
            "words": [
              "Le boulanger",
              "La boulangère",
              "Le pâtissier",
              "La pâtissière",
              "Le charcutier",
              "La charcutière",
              "Le cuisinier",
              "La cuisinière",
              "Le serveur",
              "La serveuse"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : La Boulangerie et la Pâtisserie",
            "words": [
              "Le boulanger",
              "La boulangère",
              "Le pâtissier",
              "La pâtissière"
            ],
            "details": [
              {
                "word": "Le boulanger",
                "type": "n. m.",
                "def": "Artisan qui pétrit, façonne et cuit le pain, les baguettes et les viennoiseries.",
                "example": "Le boulanger commence sa fournée dès quatre heures du matin.",
                "imageUrl": ""
              },
              {
                "word": "La boulangère",
                "type": "n. f.",
                "def": "Femme qui fabrique le pain ou qui accueille les clients dans la boutique de boulangerie.",
                "example": "La boulangère me sert deux baguettes tradition bien dorées.",
                "imageUrl": ""
              },
              {
                "word": "Le pâtissier",
                "type": "n. m.",
                "def": "Artisan spécialiste de la confection des gâteaux, tartes, entremets et douceurs sucrées.",
                "example": "Le pâtissier prépare un superbe éclair au chocolat et une tarte aux fraises.",
                "imageUrl": ""
              },
              {
                "word": "La pâtissière",
                "type": "n. f.",
                "def": "Femme artisane spécialisée dans la création de desserts et de gâteaux fins.",
                "example": "La pâtissière décore un gâteau de mariage avec beaucoup de finesse.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : La Charcuterie et la Restauration",
            "words": [
              "Le charcutier",
              "La charcutière",
              "Le cuisinier",
              "La cuisinière",
              "Le serveur"
            ],
            "details": [
              {
                "word": "Le charcutier",
                "type": "n. m.",
                "def": "Artisan qui prépare et vend des spécialités à base de viande de porc et des plats traiteur.",
                "example": "Le charcutier propose un pâté de campagne maison primé au concours régional.",
                "imageUrl": ""
              },
              {
                "word": "La charcutière",
                "type": "n. f.",
                "def": "Femme artisane ou commerçante dans une charcuterie traiteur.",
                "example": "La charcutière me tranche du jambon blanc de qualité supérieure.",
                "imageUrl": ""
              },
              {
                "word": "Le cuisinier",
                "type": "n. m.",
                "def": "Professionnel qui prépare les plats et élabore les menus dans un restaurant.",
                "example": "Le cuisinier mijote une excellente blanquette de veau parfumée.",
                "imageUrl": ""
              },
              {
                "word": "La cuisinière",
                "type": "n. f.",
                "def": "Femme qui conçoit et prépare les recettes en cuisine de restaurant.",
                "example": "La cuisinière sélectionne uniquement des produits frais et locaux.",
                "imageUrl": ""
              },
              {
                "word": "Le serveur",
                "type": "n. m.",
                "def": "Employé de restaurant qui prend les commandes et apporte les plats à table.",
                "example": "Le serveur apporte notre commande d eau et le pain en salle.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "Compréhension : Les métiers gourmands",
            "question": "Quel artisan prépare les éclairs au chocolat, les tartes et les mille-feuilles ?",
            "options": [
              "Le charcutier",
              "Le pâtissier",
              "Le menuisier",
              "Le géomètre"
            ],
            "correctIndex": 1,
            "explanation": "Le pâtissier est l artisan expert dans la fabrication des gâteaux et desserts sucrés."
          },
          {
            "type": "dialogue_view",
            "title": "Dialogue Modèle : À la boulangerie-pâtisserie",
            "context": "Une cliente commande le dessert pour le déjeuner du dimanche.",
            "lines": [
              {
                "speaker": "La boulangère",
                "text": "Bonjour madame ! Que puis-je vous proposer aujourd hui ?"
              },
              {
                "speaker": "La cliente",
                "text": "Bonjour ! Deux baguettes bien cuites, et une tarte aux framboises, s il vous plaît."
              },
              {
                "speaker": "La boulangère",
                "text": "Très bon choix ! C est notre pâtissier qui l a terminée il y a une heure."
              },
              {
                "speaker": "La cliente",
                "text": "Parfait ! Ça fera un dessert délicieux pour notre repas de famille."
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation Multilingue : Métiers de bouche",
            "instructions": "Associez chaque artisan à son équivalent multilingue.",
            "pairs": [
              {
                "id": "a1_c7_boulanger",
                "fr": "Le boulanger",
                "en": "Baker",
                "jp": "パン職人 / パン屋 (pan-shokunin)",
                "cn": "面包师 (miànbāoshī)"
              },
              {
                "id": "a1_c7_patissier",
                "fr": "Le pâtissier",
                "en": "Pastry chef",
                "jp": "パティシエ / 菓子職人 (patishie)",
                "cn": "西点师 / 糕点师 (gāodiǎnshī)"
              },
              {
                "id": "a1_c7_charcutier",
                "fr": "Le charcutier",
                "en": "Pork butcher / Delicatessen maker",
                "jp": "シャルキュトリー職人 (sharukyutorii)",
                "cn": "熟食肉贩 (shúshí ròufàn)"
              },
              {
                "id": "a1_c7_cuisinier",
                "fr": "Le cuisinier",
                "en": "Cook / Chef",
                "jp": "料理人 / コック (ryourinin)",
                "cn": "厨师 (chúshī)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch_7_7",
        "title": "Module 7 : Bâtiment, Second œuvre & Dépannage",
        "level": "A1",
        "icon": "build",
        "xp": 60,
        "description": "Connaître les artisans indispensables de la maison : électriciens, plombiers, chauffagistes, serruriers.",
        "steps": [
          {
            "type": "image_scene",
            "title": "Scène visuelle : Les artisans dans la maison",
            "imageUrl": "",
            "caption": "Pour rénover une maison ou intervenir en urgence, les artisans qualifiés déploient leur savoir-faire technique.",
            "words": [
              "L électricien",
              "L électricienne",
              "Le plombier",
              "La plombière",
              "Le chauffagiste",
              "Le serrurier",
              "La serrurière",
              "Le peintre en bâtiment",
              "Le maçon"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Fluides, Énergie & Réseaux",
            "words": [
              "L électricien",
              "L électricienne",
              "Le plombier",
              "Le chauffagiste"
            ],
            "details": [
              {
                "word": "L électricien",
                "type": "n. m.",
                "def": "Artisan qui installe, répare et sécurise les réseaux électriques et les prises.",
                "example": "L électricien installe un nouveau disjoncteur aux normes.",
                "imageUrl": ""
              },
              {
                "word": "L électricienne",
                "type": "n. f.",
                "def": "Femme artisane qualifiée dans l installation de circuits électriques.",
                "example": "L électricienne vérifie tous les branchements du salon.",
                "imageUrl": ""
              },
              {
                "word": "Le plombier",
                "type": "n. m.",
                "def": "Artisan spécialisé dans les canalisations d eau, la robinetterie et les sanitaires.",
                "example": "Le plombier répare une fuite d eau sous l évier de la cuisine.",
                "imageUrl": ""
              },
              {
                "word": "Le chauffagiste",
                "type": "n. m. / f.",
                "def": "Technicien qui installe et entretient les chaudières, radiateurs et pompes à chaleur.",
                "example": "Le chauffagiste vient réviser la chaudière avant l arrivée de l hiver.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Sécurité, Finitions & Gros œuvre",
            "words": [
              "Le serrurier",
              "La serrurière",
              "Le peintre en bâtiment",
              "Le maçon"
            ],
            "details": [
              {
                "word": "Le serrurier",
                "type": "n. m.",
                "def": "Artisan qui fabrique, pose et débloque les serrures, verrous et clés.",
                "example": "Le serrurier m ouvre la porte en quelques minutes après la perte de mes clés.",
                "imageUrl": ""
              },
              {
                "word": "La serrurière",
                "type": "n. f.",
                "def": "Femme artisane qui installe des serrures de sécurité et des portes blindées.",
                "example": "La serrurière remplace le barillet de l entrée principale.",
                "imageUrl": ""
              },
              {
                "word": "Le peintre en bâtiment",
                "type": "n. m.",
                "def": "Artisan qui applique les peintures, revêtements muraux et enduits sur les façades ou intérieurs.",
                "example": "Le peintre en bâtiment applique une jolie couleur crème sur les murs du salon.",
                "imageUrl": ""
              },
              {
                "word": "Le maçon",
                "type": "n. m.",
                "def": "Ouvrier du bâtiment qui construit les murs, fondations et dalles en briques ou béton.",
                "example": "Le maçon élève un mur solide pour clôturer le jardin.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "Compréhension : Dépannage domestique",
            "question": "Quel artisan contacte-t-on en urgence si une canalisation fuit sous l évier ?",
            "options": [
              "Le serrurier",
              "Le plombier",
              "Le peintre en bâtiment",
              "Le notaire"
            ],
            "correctIndex": 1,
            "explanation": "Le plombier est l artisan expert des canalisations d eau et de la robinetterie."
          },
          {
            "type": "dialogue_view",
            "title": "Dialogue Modèle : Dépannage à domicile",
            "context": "Un habitant accueille l électricien pour réparer une panne de courant.",
            "lines": [
              {
                "speaker": "L habitant",
                "text": "Bonjour monsieur. Merci d être venu si vite ! Plus aucune prise ne marche dans la cuisine."
              },
              {
                "speaker": "L électricien",
                "text": "Bonjour ! Ne vous inquiétez pas, je vais examiner le tableau électrique général."
              },
              {
                "speaker": "L habitant",
                "text": "Pensez-vous qu il s agisse d un fusible grillé ?"
              },
              {
                "speaker": "L électricien",
                "text": "C est très probable. Je coupe le courant dix minutes pour effectuer la réparation en toute sécurité."
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation Multilingue : Métiers du bâtiment",
            "instructions": "Reliez chaque métier d artisanat à son équivalent multilingue.",
            "pairs": [
              {
                "id": "a1_c7_electricien",
                "fr": "L électricien",
                "en": "Electrician",
                "jp": "電気技師 (denki gishi)",
                "cn": "电工 (diàngōng)"
              },
              {
                "id": "a1_c7_plombier",
                "fr": "Le plombier",
                "en": "Plumber",
                "jp": "配管工 (haikankou)",
                "cn": "水暖工 / 水管工 (shuǐguǎngōng)"
              },
              {
                "id": "a1_c7_chauffagiste",
                "fr": "Le chauffagiste",
                "en": "Heating engineer",
                "jp": "暖房技術者 (danbou gijutsusha)",
                "cn": "暖通工程师 (nuǎntōng gōngchéngshī)"
              },
              {
                "id": "a1_c7_serrurier",
                "fr": "Le serrurier",
                "en": "Locksmith",
                "jp": "錠前屋 (joumaeya)",
                "cn": "锁匠 (suǒjiàng)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch_7_8",
        "title": "Module 8 : Métiers d art, Création & Musique",
        "level": "A1",
        "icon": "palette",
        "xp": 60,
        "description": "Découvrir les artistes et créateurs : sculpteurs, peintres, chanteurs, musiciens, décorateurs.",
        "steps": [
          {
            "type": "image_scene",
            "title": "Scène visuelle : L atelier d artiste et la salle de concert",
            "imageUrl": "",
            "caption": "Dans l atelier baigné de lumière et sur scène, les artistes expriment leur créativité et enchantent le public.",
            "words": [
              "L artiste",
              "Le sculpteur",
              "La sculptrice",
              "Le peintre",
              "Le chanteur",
              "La chanteuse",
              "Le musicien",
              "La musicienne",
              "Le décorateur",
              "La décoratrice"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Les Arts plastiques & Décoration",
            "words": [
              "L artiste",
              "Le sculpteur",
              "La sculptrice",
              "Le décorateur",
              "La décoratrice"
            ],
            "details": [
              {
                "word": "L artiste",
                "type": "n. m. / f.",
                "def": "Personne qui se consacre à l expression de la beauté, des formes ou des émotions.",
                "example": "L artiste expose ses nouvelles œuvres dans une galerie parisienne.",
                "imageUrl": ""
              },
              {
                "word": "Le sculpteur",
                "type": "n. m.",
                "def": "Artiste qui modèle ou taille l argile, la pierre, le bois ou le bronze pour créer des volumes.",
                "example": "Le sculpteur taille un bloc de marbre blanc avec son burin.",
                "imageUrl": ""
              },
              {
                "word": "La sculptrice",
                "type": "n. f.",
                "def": "Femme artiste qui réalise des sculptures en trois dimensions.",
                "example": "La sculptrice expose une statue monumentale dans le parc de la ville.",
                "imageUrl": ""
              },
              {
                "word": "Le décorateur",
                "type": "n. m.",
                "def": "Professionnel qui harmonise les espaces intérieurs, les couleurs, tissus et mobiliers.",
                "example": "Le décorateur réaménage le salon avec un style contemporain et chaleureux.",
                "imageUrl": ""
              },
              {
                "word": "La décoratrice",
                "type": "n. f.",
                "def": "Femme designer d espace qui sublime l aménagement des habitations ou boutiques.",
                "example": "La décoratrice choisit des luminaires design pour le hall d entrée.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Musique & Scène",
            "words": [
              "Le chanteur",
              "La chanteuse",
              "Le musicien",
              "La musicienne",
              "Le photographe"
            ],
            "details": [
              {
                "word": "Le chanteur",
                "type": "n. m.",
                "def": "Artiste qui interprète des chansons avec sa voix.",
                "example": "Le chanteur entonne une mélodie poétique sous les applaudissements du public.",
                "imageUrl": ""
              },
              {
                "word": "La chanteuse",
                "type": "n. f.",
                "def": "Femme artiste vocale qui chante sur scène ou en studio.",
                "example": "La chanteuse prépare son nouvel album de chansons françaises.",
                "imageUrl": ""
              },
              {
                "word": "Le musicien",
                "type": "n. m.",
                "def": "Artiste qui joue d un instrument de musique ou compose des morceaux.",
                "example": "Le musicien accorde sa guitare acoustique avant le concert.",
                "imageUrl": ""
              },
              {
                "word": "La musicienne",
                "type": "n. f.",
                "def": "Femme instrumentiste qui joue dans un groupe ou un orchestre symphonique.",
                "example": "La musicienne interprète un concerto au violon avec brio.",
                "imageUrl": ""
              },
              {
                "word": "Le photographe",
                "type": "n. m. / f.",
                "def": "Artiste ou professionnel qui capture des images avec un appareil photo.",
                "example": "Le photographe immortalise les portraits des artistes en coulisses.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "Compréhension : Métiers artistiques",
            "question": "Comment appelle-t-on l artiste qui façonne la terre, le marbre ou le bronze pour créer des statues ?",
            "options": [
              "Le sculpteur",
              "Le peintre en bâtiment",
              "Le comptable",
              "Le caissier"
            ],
            "correctIndex": 0,
            "explanation": "Le sculpteur est l artiste plasticien qui façonne des formes et statues en volume."
          },
          {
            "type": "dialogue_view",
            "title": "Dialogue Modèle : Rencontre avec une artiste",
            "context": "Un visiteur discute avec une sculptrice lors du vernissage de son exposition.",
            "lines": [
              {
                "speaker": "Le visiteur",
                "text": "Félicitations pour vos œuvres ! Êtes-vous artiste à plein temps ?"
              },
              {
                "speaker": "La sculptrice",
                "text": "Merci beaucoup ! Oui, je suis sculptrice sur bois et bronze depuis dix ans."
              },
              {
                "speaker": "Le visiteur",
                "text": "Combien de temps faut-il pour sculpter une telle pièce ?"
              },
              {
                "speaker": "La sculptrice",
                "text": "Il faut parfois plusieurs semaines de travail minutieux dans mon atelier."
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation Multilingue : Créateurs & Musiciens",
            "instructions": "Reliez chaque métier d art à son équivalent multilingue.",
            "pairs": [
              {
                "id": "a1_c7_sculpteur",
                "fr": "Le sculpteur",
                "en": "Sculptor",
                "jp": "彫刻家 (choukoku-ka)",
                "cn": "雕塑家 (diāosùjiā)"
              },
              {
                "id": "a1_c7_chanteur",
                "fr": "Le chanteur",
                "en": "Singer",
                "jp": "歌手 (kashu)",
                "cn": "歌手 (gēshǒu)"
              },
              {
                "id": "a1_c7_musicien",
                "fr": "Le musicien",
                "en": "Musician",
                "jp": "音楽家 / ミュージシャン (ongakuka)",
                "cn": "音乐家 (yīnyuèjiā)"
              },
              {
                "id": "a1_c7_decorateur",
                "fr": "Le décorateur",
                "en": "Decorator / Interior designer",
                "jp": "装飾家 / インテリアデザイナー (soushoku-ka)",
                "cn": "装饰设计师 (zhuāngshì shèjìshī)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch_7_9",
        "title": "Module 9 : Sécurité, Services publics & Nature",
        "level": "A1",
        "icon": "local_police",
        "xp": 60,
        "description": "Assimiler le vocabulaire des gendarmes, pompiers, postiers, agents d entretien et jardiniers.",
        "steps": [
          {
            "type": "image_scene",
            "title": "Scène visuelle : La caserne, la poste et les jardins de la ville",
            "imageUrl": "",
            "caption": "Dans l espace public, forces de l ordre, pompiers et agents de service assurent le bien-être et la tranquillité des habitants.",
            "words": [
              "Le gendarme",
              "Le policier",
              "La policière",
              "Le pompier",
              "Le postier",
              "La postière",
              "L agent d entretien",
              "Le jardinier",
              "La jardinière"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Sécurité & Secours",
            "words": [
              "Le gendarme",
              "Le policier",
              "La policière",
              "Le pompier",
              "La pompière"
            ],
            "details": [
              {
                "word": "Le gendarme",
                "type": "n. m.",
                "def": "Militaire assurant le maintien de l ordre public et la sécurité, notamment dans les zones rurales et routes nationales.",
                "example": "Le gendarme régule la circulation et veille sur la sécurité des usagers.",
                "imageUrl": ""
              },
              {
                "word": "Le policier",
                "type": "n. m.",
                "def": "Fonctionnaire civil chargé de la protection des citoyens et de l application des lois en zone urbaine.",
                "example": "Le policier patrouille dans les rues commerçantes pour rassurer la population.",
                "imageUrl": ""
              },
              {
                "word": "La policière",
                "type": "n. f.",
                "def": "Femme fonctionnaire de police assurant la sécurité publique.",
                "example": "La policière recueille la déposition d une victime au commissariat.",
                "imageUrl": ""
              },
              {
                "word": "Le pompier",
                "type": "n. m.",
                "def": "Sapeur-pompier qui combat les incendies et porte secours aux personnes en danger.",
                "example": "Les pompiers arrivent très rapidement avec leur camion rouge sirène allumée.",
                "imageUrl": ""
              },
              {
                "word": "La pompière",
                "type": "n. f.",
                "def": "Femme sapeur-pompier (ou sapeuse-pompière) intervenant en secours d urgence et lutte contre le feu.",
                "example": "La pompière secourt les habitants avec sang-froid et professionnalisme.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Distribution, Entretien & Nature",
            "words": [
              "Le postier",
              "La postière",
              "L agent d entretien",
              "Le jardinier",
              "La jardinière"
            ],
            "details": [
              {
                "word": "Le postier",
                "type": "n. m.",
                "def": "Facteur ou employé qui trie et distribue le courrier, les colis et les lettres.",
                "example": "Le postier dépose le courrier dans la boîte aux lettres chaque matin à vélo.",
                "imageUrl": ""
              },
              {
                "word": "La postière",
                "type": "n. f.",
                "def": "Femme factrice ou agente accueillant les usagers au bureau de poste.",
                "example": "La postière pèse mon paquet et me remet le reçu d affranchissement.",
                "imageUrl": ""
              },
              {
                "word": "L agent d entretien",
                "type": "n. m. / f.",
                "def": "Professionnel qui nettoie, désinfecte et maintient propres les locaux, écoles et bureaux.",
                "example": "L agent d entretien désinfecte soigneusement les salles de classe après les cours.",
                "imageUrl": ""
              },
              {
                "word": "Le jardinier",
                "type": "n. m.",
                "def": "Spécialiste qui entretient les pelouses, taille les haies et prend soin des fleurs des parcs.",
                "example": "Le jardinier arrose les massifs de roses du jardin public.",
                "imageUrl": ""
              },
              {
                "word": "La jardinière",
                "type": "n. f.",
                "def": "Femme professionnelle qui entretient les espaces verts municipaux ou privés.",
                "example": "La jardinière plante de superbes tulipes pour le printemps.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "Compréhension : Services publics et secours",
            "question": "Qui appelle-t-on en France en composant le 18 en cas d incendie ou de secours d urgence ?",
            "options": [
              "Le notaire",
              "Les pompiers",
              "L électricien",
              "Le géomètre"
            ],
            "correctIndex": 1,
            "explanation": "En France, le numéro 18 permet de joindre directement les sapeurs-pompiers."
          },
          {
            "type": "dialogue_view",
            "title": "Dialogue Modèle : Avec le facteur",
            "context": "Un riverain accueille la factrice venue livrer un colis recommandé.",
            "lines": [
              {
                "speaker": "La postière",
                "text": "Bonjour monsieur ! J ai un colis recommandé contre signature pour vous."
              },
              {
                "speaker": "Le riverain",
                "text": "Bonjour ! Merci beaucoup, je signe sur votre boîtier électronique ?"
              },
              {
                "speaker": "La postière",
                "text": "Exactement. Et voici également deux lettres pour votre foyer."
              },
              {
                "speaker": "Le riverain",
                "text": "Merci pour votre efficacité et bonne journée sur votre tournée !"
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation Multilingue : Services & Sécurité",
            "instructions": "Associez chaque métier de service public à sa traduction.",
            "pairs": [
              {
                "id": "a1_c7_pompier",
                "fr": "Le pompier",
                "en": "Firefighter",
                "jp": "消防士 (shouboushi)",
                "cn": "消防员 (xiāofángyuán)"
              },
              {
                "id": "a1_c7_gendarme",
                "fr": "Le gendarme",
                "en": "Gendarme / Police officer",
                "jp": "国家憲兵 (kokka kenpei)",
                "cn": "宪兵 (xiànbīng)"
              },
              {
                "id": "a1_c7_postier",
                "fr": "Le postier",
                "en": "Mail carrier / Postal worker",
                "jp": "郵便配達員 (yuubin haitetsuin)",
                "cn": "邮递员 (yóudìyuán)"
              },
              {
                "id": "a1_c7_jardinier",
                "fr": "Le jardinier",
                "en": "Gardener",
                "jp": "庭師 / 園芸家 (niwashi)",
                "cn": "园丁 (yuándīng)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch_7_10",
        "title": "Module 10 : Parler de son travail & Présenter sa profession",
        "level": "A1",
        "icon": "co_present",
        "xp": 75,
        "description": "Apprendre à décrire son activité professionnelle quotidienne, ses horaires et son lieu de travail.",
        "steps": [
          {
            "type": "image_scene",
            "title": "Scène visuelle : L environnement professionnel au quotidien",
            "imageUrl": "",
            "caption": "Au bureau, à l atelier ou en déplacement, chacun parle de ses horaires, de ses collègues et de ses tâches.",
            "words": [
              "Travailler",
              "Le bureau",
              "L entreprise",
              "L atelier",
              "L hôpital",
              "Le collègue",
              "Les horaires",
              "Le métier"
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Vocabulaire : Les Lieux et Notions du Travail",
            "words": [
              "Travailler",
              "Le bureau",
              "L entreprise",
              "Le collègue",
              "Les horaires"
            ],
            "details": [
              {
                "word": "Travailler",
                "type": "v. intr.",
                "def": "Exercer une activité professionnelle ou manuelle régulière contre rémunération.",
                "example": "Je travaille du lundi au vendredi de neuf heures à dix-sept heures.",
                "imageUrl": ""
              },
              {
                "word": "Le bureau",
                "type": "n. m.",
                "def": "Pièce où l on travaille ou meuble sur lequel on pose son ordinateur et ses dossiers.",
                "example": "Mon bureau se trouve au troisième étage d un immeuble moderne.",
                "imageUrl": ""
              },
              {
                "word": "L entreprise",
                "type": "n. f.",
                "def": "Organisation économique qui produit des biens ou des services.",
                "example": "Elle travaille dans une grande entreprise internationale.",
                "imageUrl": ""
              },
              {
                "word": "Le collègue",
                "type": "n. m. / f.",
                "def": "Personne qui travaille dans la même entreprise ou le même service.",
                "example": "Je déjeune avec mes collègues à midi à la cafétéria.",
                "imageUrl": ""
              },
              {
                "word": "Les horaires",
                "type": "n. m. pl.",
                "def": "Heures fixées pour le début et la fin de la journée de travail.",
                "example": "J ai des horaires réguliers : je commence à huit heures trente.",
                "imageUrl": ""
              }
            ]
          },
          {
            "type": "lesson",
            "title": "Guide pratique : Savoir décrire sa profession et son travail en français A1",
            "content": "Pour parler de son travail en français à l oral ou à l écrit, on utilise des structures simples et claires :\n\n**1. Dire sa profession :**\n- On utilise le verbe *être* sans article : *« Je suis ingénieur »*, *« Elle est avocate »*, *« Il est boulanger »*.\n- Pour demander la profession de quelqu un : *« Quelle est votre profession ? »* ou *« Qu est-ce que vous faites dans la vie ? »*.\n\n**2. Dire où l on travaille :**\n- *« Je travaille dans un hôpital »* (santé)\n- *« Je travaille dans une école »* (enseignement)\n- *« Je travaille dans un bureau / dans une entreprise »* (tertiaire)\n- *« Je travaille à mon compte / comme indépendant »* (artisanat ou libéral)\n\n**3. Décrire ses activités et ses horaires :**\n- *« Je commence à 8h et je finis à 17h. »*\n- *« Au quotidien, je soigne des patients / j accueille des clients / je répare des machines. »*\n- *« J aime mon métier parce qu il est utile et varié. »*",
            "audioText": "Pour parler de son travail en français, on utilise le verbe être sans article. Je suis ingénieur. Elle est avocate. On indique son lieu de travail : Je travaille dans un bureau, ou dans un hôpital. On précise ses horaires : Je commence à huit heures et je finis à dix-sept heures."
          },
          {
            "type": "quiz_drill",
            "title": "Grammaire : Poser une question sur le métier",
            "question": "Quelle formule est correcte et naturelle pour demander poliment le métier d une personne ?",
            "options": [
              "Quelle est votre profession ?",
              "Quoi faites-vous de métier ?",
              "Où est votre travail de personne ?",
              "Avez-vous métier ?"
            ],
            "correctIndex": 0,
            "explanation": "« Quelle est votre profession ? » ou « Qu est-ce que vous faites dans la vie ? » sont les questions standard en français."
          },
          {
            "type": "dialogue_view",
            "title": "Dialogue Modèle : Présenter son quotidien professionnel",
            "context": "Deux amis discutent de leur nouvel emploi autour d un café.",
            "lines": [
              {
                "speaker": "Nicolas",
                "text": "Alors Manon, comment se passe ton nouveau travail ?"
              },
              {
                "speaker": "Manon",
                "text": "Très bien ! Je suis comptable dans une entreprise d énergie."
              },
              {
                "speaker": "Nicolas",
                "text": "Quels sont tes horaires ? Tu travailles aussi le week-end ?"
              },
              {
                "speaker": "Manon",
                "text": "Non, seulement du lundi au vendredi. Mes collègues sont très sympathiques !"
              },
              {
                "speaker": "Nicolas",
                "text": "C est super ! Avoir une bonne équipe au bureau, c est précieux."
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation Multilingue : Parler du travail",
            "instructions": "Associez chaque expression clé du travail à sa traduction.",
            "pairs": [
              {
                "id": "a1_c7_travailler",
                "fr": "Travailler",
                "en": "To work",
                "jp": "働く (hataraku)",
                "cn": "工作 (gōngzuò)"
              },
              {
                "id": "a1_c7_bureau",
                "fr": "Le bureau",
                "en": "Office / Desk",
                "jp": "オフィス / 机 (ofisu / tsukue)",
                "cn": "办公室 / 办公桌 (bàngōngshì)"
              },
              {
                "id": "a1_c7_collegue",
                "fr": "Le collègue",
                "en": "Colleague / Coworker",
                "jp": "同僚 (douryou)",
                "cn": "同事 (tóngshì)"
              },
              {
                "id": "a1_c7_horaires",
                "fr": "Les horaires",
                "en": "Working hours / Schedule",
                "jp": "勤務時間 (kinmu jikan)",
                "cn": "工作时间 (gōngzuò shíjiān)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "chapterId": "chap_8",
    "chapterNumber": 8,
    "chapterTitle": "untitled",
    "chapterSubtitle": "untitled",
    "level": "A1",
    "year": 1,
    "icon": "help_outline",
    "color": "#2E7D32",
    "quests": [
      {
        "id": "quest_ch_8",
        "title": "untitled",
        "level": "A1",
        "icon": "help_outline",
        "xp": 0,
        "description": "",
        "steps": []
      }
    ]
  },
  {
    "chapterId": "chap_9",
    "chapterNumber": 9,
    "chapterTitle": "untitled",
    "chapterSubtitle": "untitled",
    "level": "A1",
    "year": 1,
    "icon": "help_outline",
    "color": "#2E7D32",
    "quests": [
      {
        "id": "quest_ch_9",
        "title": "untitled",
        "level": "A1",
        "icon": "help_outline",
        "xp": 0,
        "description": "",
        "steps": []
      }
    ]
  },
  {
    "chapterId": "chap_10",
    "chapterNumber": 10,
    "chapterTitle": "untitled",
    "chapterSubtitle": "untitled",
    "level": "A1",
    "year": 1,
    "icon": "help_outline",
    "color": "#2E7D32",
    "quests": [
      {
        "id": "quest_ch_10",
        "title": "untitled",
        "level": "A1",
        "icon": "help_outline",
        "xp": 0,
        "description": "",
        "steps": []
      }
    ]
  }
];
}
