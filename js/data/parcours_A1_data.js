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
    "chapterTitle": "Chapitre 1 : Les premières bases du français",
    "chapterSubtitle": "フランス語の基礎 — 法语基础入门",
    "level": "A1",
    "year": 1,
    "icon": "school",
    "color": "#2E7D32",
    "quests": [
      {
        "id": "quest_ch1_alphabet",
        "title": "L'Alphabet Français (26 Lettres) & Formes d'Écriture",
        "level": "A1",
        "icon": "font_download",
        "xp": 75,
        "description": "Découvrir les 26 lettres de l'alphabet français, leur prononciation phonétique et la distinction entre écriture scripte et cursive.",
        "steps": [
          {
            "type": "lesson",
            "title": "Les 26 Lettres de l'Alphabet Français & leurs Deux Formes",
            "audioText": "L'alphabet français compte 26 lettres fondamentales. Il comprend six voyelles : A, E, I, O, U, Y, et vingt consonnes. En France, on utilise principalement deux styles d'écriture : l'écriture scripte, utilisée pour les caractères d'imprimerie, les livres, les journaux et les écrans, et l'écriture cursive, aussi appelée écriture attachée ou manuscrite, traditionnellement apprise dès l'école primaire pour écrire à la main rapidement et avec élégance.",
            "content": "L'alphabet français utilise l'alphabet latin et comporte **26 lettres fondamentales** :\n*フランス語のアルファベットはラテン文字を使用し、26の基本文字で構成されています。*\n\n- **6 voyelles** : A, E, I, O, U, Y\n  *6つの母音：A, E, I, O, U, Y*\n- **20 consonnes** : B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Z\n  *20の子音：B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Z*\n\n---\n\n### 🖋️ Écriture Scripte vs Écriture Cursive\n*ブロック体（活字体）と筆記体（続け字）*\n\nEn France et dans le monde francophone, deux modes d'écriture coexistent quotidiennement :\n*フランスおよびフランス語圏では、日常的に2つの書き方が共存しています。*\n\n1. **L'écriture scripte (d'imprimerie)** :\n   *ブロック体（活字体）：*\n   - Lettres détachées et droites.\n     *一文字ずつ離れた直立した文字です。*\n   - Utilisée dans les livres, la presse, les claviers d'ordinateur et les documents officiels à remplir en majuscules d'imprimerie.\n     *書籍、新聞、パソコンのキーボード、および大文字ブロック体での記入が求められる公的書類で使用されます。*\n   - Exemple majuscule : `A B C D E F G H I J K L M N O P Q R S T U V W X Y Z`\n   - Exemple minuscule : `a b c d e f g h i j k l m n o p q r s t u v w x y z`\n\n2. **L'écriture cursive (manuscrite ou « attachée »)** :\n   *筆記体（手書き文字・続け字）：*\n   - Lettres reliées entre elles de manière fluide par des boucles et des déliés sans lever la plume à chaque lettre.\n     *文字と文字を一字ごとにペンを離さず、ループやつなぎ線で滑らかに連結して書きます。*\n   - Enseignée obligatoirement dès l'école maternelle et primaire (CP). Elle permet une écriture manuscrite rapide, personnalisée et soignée pour les lettres, les examens scolaires et les notes personnelles.\n     *幼稚園・小学校（CP）から必修で教えられます。手紙、学校の試験、個人のノートを素早く、個性的かつ丁寧に手書きできます。*\n   - *Astuce didactique* : les majuscules cursives possèdent souvent des arabesques décoratives raffinées.\n     *学習のヒント：筆記体の大文字には洗練された優雅な装飾線（飾り）が多く見られます。*"
          },
          {
            "type": "vocab_drill",
            "title": "Lettre A : Nom et Prononciation",
            "words": [
              "A",
              "Avion"
            ],
            "details": [
              {
                "word": "A (a)",
                "type": "Lettre de l'alphabet [a]",
                "def": "Nom de la lettre : <strong>A</strong> [a].<br><em>A [ア] ： Avion（飛行機）の A</em>",
                "example": "Avion : comme dans Avion"
              },
              {
                "word": "Avion",
                "type": "Mot d'exemple [a.vjɔ̃]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>A</strong> (飛行機).<br><em>Avion（飛行機）</em>",
                "example": "En français : « Avion »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre B : Nom et Prononciation",
            "words": [
              "B",
              "Bateau"
            ],
            "details": [
              {
                "word": "B (b)",
                "type": "Lettre de l'alphabet [be]",
                "def": "Nom de la lettre : <strong>B</strong> [be].<br><em>B [ベ] ： Bateau（船）の B</em>",
                "example": "Bateau : comme dans Bateau"
              },
              {
                "word": "Bateau",
                "type": "Mot d'exemple [ba.to]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>B</strong> (船).<br><em>Bateau（船）</em>",
                "example": "En français : « Bateau »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre C : Nom et Prononciation",
            "words": [
              "C",
              "Cerise"
            ],
            "details": [
              {
                "word": "C (c)",
                "type": "Lettre de l'alphabet [se]",
                "def": "Nom de la lettre : <strong>C</strong> [se].<br><em>C [セ] ： Cerise（さくらんぼ）の C。</em><br><small style=\"color:var(--md-sys-color-primary);\">💡 Remarque phonétique : devant E et I, C se prononce [s] comme dans <em>Cerise</em> [sə.ʁiz] ou <em>Citron</em> [si.tʁɔ̃]. Devant A, O, U, il se prononce [k] comme dans <em>Café</em> [ka.fe].</small>",
                "example": "Cerise : comme dans Cerise"
              },
              {
                "word": "Cerise",
                "type": "Mot d'exemple [sə.ʁiz]",
                "def": "Exemple illustratif commençant par le son [s] de la lettre <strong>C</strong> (さくらんぼ・チェリー).<br><em>Cerise（さくらんぼ）</em>",
                "example": "En français : « La cerise »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre D : Nom et Prononciation",
            "words": [
              "D",
              "Départ"
            ],
            "details": [
              {
                "word": "D (d)",
                "type": "Lettre de l'alphabet [de]",
                "def": "Nom de la lettre : <strong>D</strong> [de].<br><em>D [デ] ： Départ（出発）の D</em>",
                "example": "Départ : comme dans Départ"
              },
              {
                "word": "Départ",
                "type": "Mot d'exemple [de.paʁ]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>D</strong> (出発).<br><em>Départ（出発）</em>",
                "example": "En français : « Départ »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre E : Nom et Prononciation",
            "words": [
              "E",
              "Melon"
            ],
            "details": [
              {
                "word": "E (e)",
                "type": "Lettre de l'alphabet [ə]",
                "def": "Nom de la lettre : <strong>E</strong> [ə].<br><em>E [ウ] ： 唇を軽く丸め、脱力して発音するフランス語の基本母音 [ə]（「Le」や「Melon」の e の音）。</em><br><small style=\"color:var(--md-sys-color-primary);\">💡 Précision phonétique : en français, la lettre E sans accent prend le son [ə] dans les petits mots comme <em>Le</em> [lə], <em>Je</em> [ʒə], ou dans <em>Melon</em> [mə.lɔ̃], <em>Demain</em> [də.mɛ̃]. Devant deux consonnes comme dans <em>escargot</em>, elle se prononce [ɛ] ouvert !</small>",
                "example": "Le mot « Le » [lə] ou « Melon » [mə.lɔ̃]"
              },
              {
                "word": "Melon",
                "type": "Mot d'exemple [mə.lɔ̃]",
                "def": "Exemple illustrant la lettre <strong>E</strong> avec son timbre neutre authentique [ə] (メロン).<br><em>Melon（メロン）</em>",
                "example": "En français : « Un melon »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre F : Nom et Prononciation",
            "words": [
              "F",
              "France"
            ],
            "details": [
              {
                "word": "F (f)",
                "type": "Lettre de l'alphabet [ɛf]",
                "def": "Nom de la lettre : <strong>F</strong> [ɛf].<br><em>F [エフ] ： France（フランス）の F</em>",
                "example": "France : comme dans France"
              },
              {
                "word": "France",
                "type": "Mot d'exemple [fʁɑ̃s]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>F</strong> (フランス).<br><em>France（フランス）</em>",
                "example": "En français : « France »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre G : Nom et Prononciation",
            "words": [
              "G",
              "Girafe"
            ],
            "details": [
              {
                "word": "G (g)",
                "type": "Lettre de l'alphabet [ʒe]",
                "def": "Nom de la lettre : <strong>G</strong> [ʒe].<br><em>G [ジェ] ： Girafe（キリン）の G。</em><br><small style=\"color:var(--md-sys-color-primary);\">💡 Remarque phonétique : devant E et I, G se prononce [ʒ] comme dans <em>Girafe</em> [ʒi.ʁaf] ou <em>Genou</em>. Devant A, O, U, il se prononce [ɡ] comme dans <em>Gare</em> [ɡaʁ].</small>",
                "example": "Girafe : comme dans Girafe"
              },
              {
                "word": "Girafe",
                "type": "Mot d'exemple [ʒi.ʁaf]",
                "def": "Exemple illustratif commençant par le son [ʒ] de la lettre <strong>G</strong> (キリン).<br><em>Girafe（キリン）</em>",
                "example": "En français : « La girafe »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre H : Nom et Prononciation",
            "words": [
              "H",
              "Hôtel"
            ],
            "details": [
              {
                "word": "H (h)",
                "type": "Lettre de l'alphabet [aʃ]",
                "def": "Nom de la lettre : <strong>H</strong> [aʃ].<br><em>H [アッシュ] ： Hôtel（ホテル）の H（フランス語ではHを発音しません！）</em>",
                "example": "Hôtel : comme dans Hôtel (le H est toujours muet à l'oral en français !)"
              },
              {
                "word": "Hôtel",
                "type": "Mot d'exemple [o.tɛl]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>H</strong> (ホテル（Hは無音）).<br><em>Hôtel（ホテル（Hは無音））</em>",
                "example": "En français : « Hôtel »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre I : Nom et Prononciation",
            "words": [
              "I",
              "Image"
            ],
            "details": [
              {
                "word": "I (i)",
                "type": "Lettre de l'alphabet [i]",
                "def": "Nom de la lettre : <strong>I</strong> [i].<br><em>I [イ] ： Image（画像・絵）の I</em>",
                "example": "Image : comme dans Image"
              },
              {
                "word": "Image",
                "type": "Mot d'exemple [i.maʒ]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>I</strong> (画像・絵).<br><em>Image（画像・絵）</em>",
                "example": "En français : « Image »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre J : Nom et Prononciation",
            "words": [
              "J",
              "Jour"
            ],
            "details": [
              {
                "word": "J (j)",
                "type": "Lettre de l'alphabet [ʒi]",
                "def": "Nom de la lettre : <strong>J</strong> [ʒi].<br><em>J [ジ] ： Jour（日）の J</em>",
                "example": "Jour : comme dans Jour"
              },
              {
                "word": "Jour",
                "type": "Mot d'exemple [ʒuʁ]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>J</strong> (日・一日).<br><em>Jour（日・一日）</em>",
                "example": "En français : « Jour »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre K : Nom et Prononciation",
            "words": [
              "K",
              "Kilo"
            ],
            "details": [
              {
                "word": "K (k)",
                "type": "Lettre de l'alphabet [ka]",
                "def": "Nom de la lettre : <strong>K</strong> [ka].<br><em>K [カ] ： Kilo（キロ）の K</em>",
                "example": "Kilo : comme dans Kilo"
              },
              {
                "word": "Kilo",
                "type": "Mot d'exemple [ki.lo]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>K</strong> (キロ).<br><em>Kilo（キロ）</em>",
                "example": "En français : « Kilo »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre L : Nom et Prononciation",
            "words": [
              "L",
              "Livre"
            ],
            "details": [
              {
                "word": "L (l)",
                "type": "Lettre de l'alphabet [ɛl]",
                "def": "Nom de la lettre : <strong>L</strong> [ɛl].<br><em>L [エル] ： Livre（本）の L</em>",
                "example": "Livre : comme dans Livre"
              },
              {
                "word": "Livre",
                "type": "Mot d'exemple [livʁ]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>L</strong> (本).<br><em>Livre（本）</em>",
                "example": "En français : « Livre »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre M : Nom et Prononciation",
            "words": [
              "M",
              "Monde"
            ],
            "details": [
              {
                "word": "M (m)",
                "type": "Lettre de l'alphabet [ɛm]",
                "def": "Nom de la lettre : <strong>M</strong> [ɛm].<br><em>M [エム] ： Monde（世界）の M</em>",
                "example": "Monde : comme dans Monde"
              },
              {
                "word": "Monde",
                "type": "Mot d'exemple [mɔ̃d]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>M</strong> (世界).<br><em>Monde（世界）</em>",
                "example": "En français : « Monde »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre N : Nom et Prononciation",
            "words": [
              "N",
              "Nuit"
            ],
            "details": [
              {
                "word": "N (n)",
                "type": "Lettre de l'alphabet [ɛn]",
                "def": "Nom de la lettre : <strong>N</strong> [ɛn].<br><em>N [エヌ] ： Nuit（夜）の N</em>",
                "example": "Nuit : comme dans Nuit"
              },
              {
                "word": "Nuit",
                "type": "Mot d'exemple [nɥi]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>N</strong> (夜).<br><em>Nuit（夜）</em>",
                "example": "En français : « Nuit »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre O : Nom et Prononciation",
            "words": [
              "O",
              "Orange"
            ],
            "details": [
              {
                "word": "O (o)",
                "type": "Lettre de l'alphabet [o]",
                "def": "Nom de la lettre : <strong>O</strong> [o].<br><em>O [オ] ： Orange（オレンジ）の O</em>",
                "example": "Orange : comme dans Orange"
              },
              {
                "word": "Orange",
                "type": "Mot d'exemple [ɔ.ʁɑ̃ʒ]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>O</strong> (オレンジ).<br><em>Orange（オレンジ）</em>",
                "example": "En français : « Orange »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre P : Nom et Prononciation",
            "words": [
              "P",
              "Paris"
            ],
            "details": [
              {
                "word": "P (p)",
                "type": "Lettre de l'alphabet [pe]",
                "def": "Nom de la lettre : <strong>P</strong> [pe].<br><em>P [ペ] ： Paris（パリ）の P</em>",
                "example": "Paris : comme dans Paris"
              },
              {
                "word": "Paris",
                "type": "Mot d'exemple [pa.ʁi]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>P</strong> (パリ).<br><em>Paris（パリ）</em>",
                "example": "En français : « Paris »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre Q : Nom et Prononciation",
            "words": [
              "Q",
              "Quatre"
            ],
            "details": [
              {
                "word": "Q (q)",
                "type": "Lettre de l'alphabet [ky]",
                "def": "Nom de la lettre : <strong>Q</strong> [ky].<br><em>Q [キュ] ： Quatre（4）の Q</em>",
                "example": "Quatre : comme dans Quatre"
              },
              {
                "word": "Quatre",
                "type": "Mot d'exemple [katʁ]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>Q</strong> (4（数字）).<br><em>Quatre（4（数字））</em>",
                "example": "En français : « Quatre »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre R : Nom et Prononciation",
            "words": [
              "R",
              "Rue"
            ],
            "details": [
              {
                "word": "R (r)",
                "type": "Lettre de l'alphabet [ɛʁ]",
                "def": "Nom de la lettre : <strong>R</strong> [ɛʁ].<br><em>R [エール] ： Rue（通り）の R（喉の奥を鳴らすフランス語独特のR）</em>",
                "example": "Rue : comme dans Rue (le R grasseyé français)"
              },
              {
                "word": "Rue",
                "type": "Mot d'exemple [ʁy]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>R</strong> (通り・道).<br><em>Rue（通り・道）</em>",
                "example": "En français : « Rue »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre S : Nom et Prononciation",
            "words": [
              "S",
              "Soleil"
            ],
            "details": [
              {
                "word": "S (s)",
                "type": "Lettre de l'alphabet [ɛs]",
                "def": "Nom de la lettre : <strong>S</strong> [ɛs].<br><em>S [エス] ： Soleil（太陽）の S</em>",
                "example": "Soleil : comme dans Soleil"
              },
              {
                "word": "Soleil",
                "type": "Mot d'exemple [sɔ.lɛj]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>S</strong> (太陽).<br><em>Soleil（太陽）</em>",
                "example": "En français : « Soleil »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre T : Nom et Prononciation",
            "words": [
              "T",
              "Train"
            ],
            "details": [
              {
                "word": "T (t)",
                "type": "Lettre de l'alphabet [te]",
                "def": "Nom de la lettre : <strong>T</strong> [te].<br><em>T [テ] ： Train（電車・列車）の T</em>",
                "example": "Train : comme dans Train"
              },
              {
                "word": "Train",
                "type": "Mot d'exemple [tʁɛ̃]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>T</strong> (電車・列車).<br><em>Train（電車・列車）</em>",
                "example": "En français : « Train »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre U : Nom et Prononciation",
            "words": [
              "U",
              "Univers"
            ],
            "details": [
              {
                "word": "U (u)",
                "type": "Lettre de l'alphabet [y]",
                "def": "Nom de la lettre : <strong>U</strong> [y].<br><em>U [ユ] ： Univers（宇宙・世界）の U（唇を丸めて発音する典型的なフランス語の音）</em>",
                "example": "Univers : comme dans Univers (son typique français, lèvres arrondies)"
              },
              {
                "word": "Univers",
                "type": "Mot d'exemple [y.ni.vɛʁ]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>U</strong> (宇宙・全世界).<br><em>Univers（宇宙・全世界）</em>",
                "example": "En français : « Univers »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre V : Nom et Prononciation",
            "words": [
              "V",
              "Voyage"
            ],
            "details": [
              {
                "word": "V (v)",
                "type": "Lettre de l'alphabet [ve]",
                "def": "Nom de la lettre : <strong>V</strong> [ve].<br><em>V [ヴェ] ： Voyage（旅）の V</em>",
                "example": "Voyage : comme dans Voyage"
              },
              {
                "word": "Voyage",
                "type": "Mot d'exemple [vwa.jaʒ]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>V</strong> (旅・旅行).<br><em>Voyage（旅・旅行）</em>",
                "example": "En français : « Voyage »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre W : Nom et Prononciation",
            "words": [
              "W",
              "Week-end"
            ],
            "details": [
              {
                "word": "W (w)",
                "type": "Lettre de l'alphabet [dubləve]",
                "def": "Nom de la lettre : <strong>W</strong> [dubləve].<br><em>W [ドゥーブルヴェ] ： 「二重のV」。Week-end（週末）の W</em>",
                "example": "Week-end : « double V », comme dans Week-end"
              },
              {
                "word": "Week-end",
                "type": "Mot d'exemple [wi.kɛnd]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>W</strong> (週末).<br><em>Week-end（週末）</em>",
                "example": "En français : « Week-end »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre X : Nom et Prononciation",
            "words": [
              "X",
              "Taxi"
            ],
            "details": [
              {
                "word": "X (x)",
                "type": "Lettre de l'alphabet [iks]",
                "def": "Nom de la lettre : <strong>X</strong> [iks].<br><em>X [イクス] ： Taxi（タクシー）の X</em>",
                "example": "Taxi : comme dans Taxi"
              },
              {
                "word": "Taxi",
                "type": "Mot d'exemple [tak.si]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>X</strong> (タクシー).<br><em>Taxi（タクシー）</em>",
                "example": "En français : « Taxi »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre Y : Nom et Prononciation",
            "words": [
              "Y",
              "Yeux"
            ],
            "details": [
              {
                "word": "Y (y)",
                "type": "Lettre de l'alphabet [igʁɛk]",
                "def": "Nom de la lettre : <strong>Y</strong> [igʁɛk].<br><em>Y [イグレック] ： 「ギリシャのI」。Yeux（目）の Y</em>",
                "example": "Yeux : « i grec », comme dans Yeux"
              },
              {
                "word": "Yeux",
                "type": "Mot d'exemple [jø]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>Y</strong> (目（複数形）).<br><em>Yeux（目（複数形））</em>",
                "example": "En français : « Yeux »"
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Lettre Z : Nom et Prononciation",
            "words": [
              "Z",
              "Zèbre"
            ],
            "details": [
              {
                "word": "Z (z)",
                "type": "Lettre de l'alphabet [zɛd]",
                "def": "Nom de la lettre : <strong>Z</strong> [zɛd].<br><em>Z [ゼッド] ： Zèbre（シマウマ）の Z</em>",
                "example": "Zèbre : comme dans Zèbre"
              },
              {
                "word": "Zèbre",
                "type": "Mot d'exemple [zɛbʁ]",
                "def": "Exemple illustratif commençant par ou contenant la lettre <strong>Z</strong> (シマウマ).<br><em>Zèbre（シマウマ）</em>",
                "example": "En français : « Zèbre »"
              }
            ]
          },
          {
            "type": "quiz_drill",
            "title": "Vérification : Caractéristiques de l'écriture cursive",
            "question": "Quelle est la particularité essentielle de l'écriture cursive telle qu'elle est enseignée et pratiquée en France ?<br><em>フランスで教えられ実践されている筆記体（écriture cursive）の本質的な特徴は何ですか？</em>",
            "options": [
              "Les lettres sont composées uniquement de chiffres et de symboles phonétiques.<br><em>文字は数字と発音記号のみで構成されている。</em>",
              "Les lettres sont attachées et reliées entre elles de façon continue sans lever la main.<br><em>手を離さずに文字同士が連続して連結されている。</em>",
              "Elle ne s'utilise qu'exclusivement sur les écrans d'ordinateur et de smartphone.<br><em>パソコンやスマートフォンの画面上でのみ使用される。</em>",
              "Elle est réservée aux inscriptions lapidaires et monuments anciens.<br><em>石碑や古代の記念碑の碑文専用である。</em>"
            ],
            "correctIndex": 1,
            "explanation": "L'écriture cursive, aussi appelée écriture attachée, relie les lettres d'un même mot de façon continue pour permettre une écriture manuscrite rapide et fluide.<br><em>筆記体（続け字）は、同じ単語の文字を連続して結びつけることで、素早く流れるような手書きを可能にします。</em>"
          },
          {
            "type": "quiz_drill",
            "title": "Vérification : Lettres et Voyelles de l'alphabet",
            "question": "Combien de voyelles fondamentales compte l'alphabet français ?<br><em>フランス語のアルファベットには基本母音が何個ありますか？</em>",
            "options": [
              "4 voyelles (A, E, I, O)<br><em>4つの母音 (A, E, I, O)</em>",
              "5 voyelles (A, E, I, O, U)<br><em>5つの母音 (A, E, I, O, U)</em>",
              "6 voyelles (A, E, I, O, U, Y)<br><em>6つの母音 (A, E, I, O, U, Y)</em>",
              "8 voyelles (A, E, I, O, U, Y, É, È)<br><em>8つの母音 (A, E, I, O, U, Y, É, È)</em>"
            ],
            "correctIndex": 2,
            "explanation": "L'alphabet français compte 6 voyelles de base : A, E, I, O, U et Y. Les lettres accentuées (é, è, ê, etc.) sont des variantes graphiques diacritées mais ne sont pas comptées comme des lettres supplémentaires dans l'alphabet de 26 lettres.<br><em>フランス語のアルファベットには6つの基本母音（A, E, I, O, U, Y）があります。アクセント付き文字（é, è, êなど）は綴りの変種であり、26文字のアルファベットにおいて独立した別文字としては数えられません。</em>"
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation : Nom des lettres particulières en français",
            "instructions": "Associez chaque lettre française au nom phonétique officiel par lequel on la désigne en l'épelant.\nフランス語の各文字を、文字を綴るときに呼ぶ正式な発音の名称と結びつけてください。",
            "pairs": [
              {
                "id": "alph_h",
                "fr": "H",
                "en": "Named 'Ache' [aʃ] - always silent",
                "jp": "H (アッシュ) [aʃ]",
                "cn": "字母 H (读音 ache [aʃ])"
              },
              {
                "id": "alph_w",
                "fr": "W",
                "en": "Named 'Double V' [dubləve]",
                "jp": "W (ドゥーブルヴェ) [dubləve]",
                "cn": "字母 W (读音 double V)"
              },
              {
                "id": "alph_y",
                "fr": "Y",
                "en": "Named 'I grec' (Greek I) [igʁɛk]",
                "jp": "Y (イグレック) [igʁɛk]",
                "cn": "字母 Y (读音 i grec)"
              },
              {
                "id": "alph_u",
                "fr": "U",
                "en": "Named 'U' [y] (tight rounded lips)",
                "jp": "U (ユ) [y]",
                "cn": "字母 U (闭唇发音 [y])"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch1_ponctuation",
        "title": "La Ponctuation, les Accents & Signes Typographiques",
        "level": "A1",
        "icon": "format_quote",
        "xp": 50,
        "description": "Identifier tous les signes de ponctuation, les accents français (aigu, grave, circonflexe), le tréma, la cédille et l'apostrophe.",
        "steps": [
          {
            "type": "lesson",
            "title": "Guide Exhaustif : Ponctuation, Diacritiques & Typographie Française",
            "audioText": "La ponctuation donne du rythme, du sens et de la vie à la phrase. En français, on distingue les signes de ponctuation de fin de phrase comme le point, le point d'interrogation et le point d'exclamation, les signes de pause comme la virgule, le point-virgule et les deux-points, ainsi que les signes auxiliaires comme les guillemets français, l'apostrophe et les points de suspension. De plus, les accents sur les voyelles modifient la prononciation ou distinguent des homophones essentiels.",
            "content": "La ponctuation et les signes diacritiques sont indispensables pour bien lire, prononcer et comprendre le français.\n*句読点（パンクチュエーション）と発音区別符号（アクセント記号）は、フランス語を正しく読み、発音し、理解するために不可欠です。*\n\n---\n\n### 1. Les Signes de Ponctuation Principaux\n*主要な句読点記号：*\n\n- **Le point (`.`)** : termine une phrase déclarative et marque une pause forte.\n  *ピリオド（.） ： 平叙文（普通の文）の終わりに置き、強い休止を示します。*\n- **La virgule (`,`)** : sépare des mots d'une énumération ou des propositions ; marque une courte pause sans couper la mélodie.\n  *カンマ（,） ： 単語の列挙や節を区切り、文のメロディを途切れさせずに短い休止を置きます。*\n- **Le point-virgule (`;`)** : sépare deux propositions indépendantes ayant un lien logique étroit.\n  *セミコロン（;） ： 論理的に密接な関係にある2つの独立した節を区切ります。*\n- **Les deux-points (`:`)** : introduisent une explication, une citation ou une énumération.\n  *コロン（:） ： 説明、引用、または箇条書きの列挙を導きます。*\n- **Le point d'interrogation (`?`)** : termine une phrase interrogative (intonation montante).\n  *疑問符・クエスチョンマーク（?） ： 疑問文の終わりに置き、語尾のイントネーションが上がります。*\n- **Le point d'exclamation (`!`)** : termine une phrase exclamative ou un ordre (surprise, admiration, colère).\n  *感嘆符・エクスクラメーションマーク（!） ： 感嘆文や命令文の終わりに置き、驚き・称賛・怒りなどを表します。*\n- **Les points de suspension (`...`)** (aussi appelés familièrement *« trois petits points »*) : indiquent une interruption, un sous-entendu ou une suite inachevée.\n  *リーダー・三重点（...） ： 会話の中断、含み（余韻）、または未完の続きを表します。*\n- **Les guillemets français (`« »`)** : encadrent les citations directes et les paroles de dialogue (avec un espace à l'intérieur).\n  *フランス式二重引用符・ギュメ（« »） ： 直接引用や対話の発言を囲みます（内側にスペースを入れます）。*\n- **L'apostrophe (`'`)** : marque l'**élision** d'une voyelle finale devant un mot commençant par une voyelle ou un H muet (*l'ami*, *c'est*, *j'habite*).\n  *アポストロフィ（'） ： 母音または無音のHで始まる単語の前で、末尾母音が脱落する「エリジオン（母音省略）」を示します。*\n- **Le trait d'union (`-`)** : unit deux mots composés (*grand-père*, *peut-être*) ou relie le verbe et le pronom inversé (*vas-tu ?*).\n  *ハイフン・トレデュニオン（-） ： 複合語を結びつけたり、倒置された動詞と代名詞をつなぎます。*\n\n---\n\n### 2. Les Accents & Signes Diacritiques\n*アクセント記号および発音区別符号：*\n\n- **L'accent aigu (`é`)** : se place uniquement sur le **E** et donne le son fermé [e] (*café, été, étudiant*).\n  *アクサン・テギュ（é） ： 文字「E」の上にのみ付き、狭い「エ」の音 [e] を作ります。*\n- **L'accent grave (`à, è, ù`)** :\n  *アクサン・グラーヴ（à, è, ù）：*\n  - Sur le E (`è`) : donne le son ouvert [ɛ] (*mère, père, frère*).\n    *Eの上（è） ： 口を横に広く開く「エ」の音 [ɛ] を作ります。*\n  - Sur le A et le U (`à, ù`) : distingue des homophones (*a* = verbe avoir vs *à* = préposition ; *ou* = ou bien vs *où* = lieu).\n    *AとUの上（à, ù） ： 同音異義語を区別します（a = 持つ vs à = 〜へ・〜に ； ou = または vs où = どこ）。*\n- **L'accent circonflexe (`â, ê, î, ô, û`)** (le « petit chapeau ») :\n  *アクサン・シルコンフレックス（^）（小さな帽子）：*\n  - Historiquement, il remplace un « s » disparu du vieux français (*hôpital* de *hospital*, *forêt* de *forest*, *château* de *castel*).\n    *歴史的には、古フランス語で失われた「s」の痕跡を示しています（例：hôpital ← hospital, forêt ← forest）。*\n  - Il allonge parfois la voyelle ou modifie son timbre (*pôle, fête*).\n    *母音の音色を変えたり、長く発音されることがあります。*\n- **Le tréma (`ë, ï, ü`)** :\n  *トレマ（¨）（分音符）：*\n  - Deux petits points placés sur une voyelle pour forcer sa prononciation séparée de la voyelle précédente (*naïf* [na-if] et non [nɛ], *Noël* [nɔ-ɛl], *coïncidence*).\n    *母音の上の2つの点で、直前の母音と合体させずに別々に独立して発音することを指示します（例：naïf は「ネフ」ではなく「ナ・イフ」）。*\n- **La cédille (`ç`)** :\n  *セディーユ（ç）（軟音符）：*\n  - Placée sous la lettre **C** devant les voyelles **A, O, U** pour lui donner le son doux [s] au lieu de [k] (*français, garçon, leçon, reçu*).\n    *母音 A, O, U の前の文字「C」の下に付け、本来の「カ行音 [k]」ではなく「サ行音 [s]」で発音させます。*\n\n---\n\n### 3. Règle Typographique Spécifique du Français : Les Espaces Insécables !\n*フランス語特有のタイポグラフィ規則：ノーブレークスペース（空白）！*\n\nEn typographie française soignée, tous les signes doubles (**`?`**, **`!`**, **`;`**, **`:`**, ainsi qu'après **`«`** et avant **`»`**) doivent être précédés d'un espace (espace insécable), contrairement à l'anglais !\n*丁寧なフランス語の表記では、英語と異なり、2つの要素からなる記号（?、!、;、:、および « の後と » の前）の直前に必ずスペース（改行禁止スペース）を挿入します！*"
          },
          {
            "type": "quiz_drill",
            "title": "Vérification : Rôle du tréma en français",
            "question": "À quoi sert le tréma (deux points au-dessus d'une voyelle, comme dans « Noël » ou « naïf ») ?<br><em>「Noël」や「naïf」のように母音の上に置かれる2つの点「トレマ（tréma）」の役割は何ですか？</em>",
            "options": [
              "À indiquer que le mot vient exclusivement de la langue anglaise.<br><em>その単語が英語由来であることを示すため。</em>",
              "À rendre la voyelle totalement muette à la lecture.<br><em>その母音を読まずに完全に無音化するため。</em>",
              "À séparer la prononciation de deux voyelles consécutives pour éviter qu'elles ne fusionnent.<br><em>連続する2つの母音が1つの音に融合するのを防ぎ、別々に発音させるため。</em>",
              "À transformer automatiquement le mot au pluriel.<br><em>単語を自動的に複数形に変換するため。</em>"
            ],
            "correctIndex": 2,
            "explanation": "Le tréma indique qu'il faut prononcer séparément la voyelle qui le porte de la voyelle précédente (ex: naïf se prononce na-if, et non « nef »).<br><em>トレマは、その記号が付いた母音を直前の母音から切り離し、独立して発音することを示します（例：naïf は「ネフ」ではなく「ナ・イフ」と発音）。</em>"
          },
          {
            "type": "quiz_drill",
            "title": "Vérification : Rôle de la cédille sous le C",
            "question": "Pourquoi écrit-on « français » et « leçon » avec une cédille sous la lettre C ?<br><em>なぜ「français」や「leçon」では文字Cの下にセディーユ（cédille）が付いているのですか？</em>",
            "options": [
              "Pour que le C se prononce [s] devant les voyelles A, O ou U.<br><em>母音A, O, Uの前でCを[s]（サ行音）と発音させるため。</em>",
              "Pour signaler une lettre majuscule au milieu d'un mot.<br><em>単語の途中にある大文字であることを示すため。</em>",
              "Pour indiquer que la syllabe est accentuée en fin de phrase.<br><em>文末でその音節を強く発音することを示すため。</em>",
              "Pour que le C se prononce [k] comme dans café.<br><em>café のようにCを[k]（カ行音）と発音させるため。</em>"
            ],
            "correctIndex": 0,
            "explanation": "Sans cédille, la lettre C suivie de A, O ou U se prononce [k] (ca, co, cu). La cédille permet de conserver le son doux [s] devant ces voyelles (ça, ço, çu).<br><em>セディーユがない場合、A, O, Uが続く文字Cは[k]と発音されます（ca, co, cu）。セディーユを付けることで、これらの母音の前でも柔らかい[s]の音（ça, ço, çu）を保つことができます。</em>"
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation : Les noms des signes de ponctuation et accents",
            "instructions": "Associez chaque signe typographique à son nom officiel en français.\n各句読点・記号を、フランス語の正式な名称と結びつけてください。",
            "pairs": [
              {
                "id": "sign_susp",
                "fr": "... (Points de suspension)",
                "en": "Ellipsis (... / three dots)",
                "jp": "三重点・省略符号 (...)",
                "cn": "省略号 (... / 三个点)"
              },
              {
                "id": "sign_guill",
                "fr": "« » (Guillemets français)",
                "en": "French quotation marks (« »)",
                "jp": "ギュメ・引用符 (« »)",
                "cn": "法语法式双书名引号 (« »)"
              },
              {
                "id": "sign_circ",
                "fr": "ˆ (Accent circonflexe)",
                "en": "Circumflex accent (chapeau)",
                "jp": "アクサン・シルコンフレックス (^) ",
                "cn": "长音符 / 帽子符 (^)"
              },
              {
                "id": "sign_cedille",
                "fr": "Ç (Cédille)",
                "en": "Cedilla (makes C sound like S)",
                "jp": "セディーユ (ç)",
                "cn": "软音符 (ç, 让 C 发 S 音)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch1_phonetique_1",
        "title": "Phonétique 1/3 : Le Système des Voyelles Orales & Nasales",
        "level": "A1",
        "icon": "graphic_eq",
        "xp": 50,
        "description": "Maîtriser la totalité des voyelles orales et nasales du français avec symboles de l'Alphabet Phonétique International (API).",
        "steps": [
          {
            "type": "lesson",
            "title": "Toutes les Voyelles du Français : Orales et Nasales",
            "audioText": "La prononciation du français repose sur une grande richesse de voyelles. On compte onze voyelles orales et quatre voyelles nasales majeures. Les voyelles orales sortent par la bouche seule, tandis que pour les voyelles nasales, l'air passe simultanément par la bouche et par le nez. Il est capital de bien distinguer le son U du son OU, ainsi que les quatre timbres nasaux.",
            "content": "Le français possède un système vocalique d'une grande précision. Contrairement à beaucoup de langues, chaque nuance de timbre modifie le sens du mot !\n*フランス語は極めて精密な母音体系を持っています。多くの言語と異なり、母音のわずかな音色の違いが単語の意味そのものを変化させます！*\n\n---\n\n### 1. Les 11 Voyelles Orales Fondamentales\n*11の基本口腔母音（口からのみ息が出る母音）：*\n\n| Son (API) | Graphies usuelles | Exemples audio | Particularité & Articulation |\n| :--- | :--- | :--- | :--- |\n| **[a]** | a, à, â | *Paris, table, là* | Bouche bien ouverte, langue plate.<br><em>口を大きく開き、舌を平らにして発音する澄んだ「ア」。</em> |\n| **[i]** | i, y, î | *Midi, livre, stylo* | Lèvres étirées en sourire, langue en avant.<br><em>口角を横にしっかり引き、笑顔の形で発音する「イ」。</em> |\n| **[u]** | ou, où, oû | *Bonjour, vous, où* | Son « OU ». Lèvres projetées très en avant et arrondies.<br><em>「ウ」の音。唇を前に強く突き出して丸めて発音。</em> |\n| **[y]** | u, û | *Tu, salut, musique, une* | **Son « U » typique**. Position de la langue sur [i], mais lèvres arrondies comme pour siffler. Ne pas confondre avec [u] (*tu* ≠ *tout*) !<br><em>フランス語特有の「ユ」。舌の位置は「イ」のまま、唇だけを口笛のように丸めます（tu と tout の違いに注意！）。</em> |\n| **[e]** | é, -er, -ez, -et | *Café, parler, chez, et* | **E fermé**. Lèvres très étirées en sourire.<br><em>狭い「エ」。口角を横に強く引いて発音します。</em> |\n| **[ɛ]** | è, ê, ai, ei | *Mère, fête, lait, reine* | **E ouvert**. Bouche plus ouverte que [e].<br><em>広い「エ」。[e] よりも口を縦に広く開けて発音します。</em> |\n| **[o]** | o, au, eau, ô | *Hôtel, beau, chaud, métro* | **O fermé**. Lèvres très arrondies en avant.<br><em>狭い「オ」。唇を前に小さく丸めて発音します。</em> |\n| **[ɔ]** | o, au (ouvert) | *Porte, soleil, robe* | **O ouvert**. Mâchoire légèrement descendue.<br><em>広い「オ」。下あごを少し下げて開いた「オ」を発音します。</em> |\n| **[ø]** | eu, œu (fermé) | *Deux, bleu, nœud, jeu* | Lèvres très en avant et arrondies, bouche peu ouverte.<br><em>狭い「ウ／エ」。唇を強く突き出して丸め、口の開きは小さめ。</em> |\n| **[œ]** | eu, œu (ouvert) | *Sœur, cœur, fleur, jeune* | Lèvres arrondies, bouche plus ouverte.<br><em>広い「ウ／エ」。唇を丸めたまま、口を大きめに開いて発音。</em> |\n| **[ə]** | e (caduc / muet) | *Le, premier, demain* | E central neutre et instable, souvent omis en parole fluide (*samedi* -> « samdi »).<br><em>曖昧母音（脱落しやすい e）。脱力した中央の母音で、日常会話ではしばしば省略されます。</em> |\n\n---\n\n### 2. Les 4 Voyelles Nasales (L'air passe par le nez et la bouche)\n*4つの鼻母音（息が口と鼻腔の両方を同時に通る母音）：*\n\nEn français, une voyelle suivie de **N** ou **M** forme une seule voyelle nasale :\n*フランス語では、母音に N または M が続くと1つの「鼻母音」になります：*\n\n1. **[ɑ̃] (AN / EN)** : *France, enfant, temps, chambre, dans*.\n   - Bouche bien ouverte, timbre grave.\n   *口を大きく縦に開けて発音する、低音で深みのある鼻母音「アン」。*\n2. **[ɔ̃] (ON / OM)** : *Bonjour, nom, maison, monde, ombre*.\n   - Lèvres très arrondies et serrées en avant, son profond.\n   *唇を前に強くすぼめて丸く突き出す深い鼻母音「オン」。*\n3. **[ɛ̃] (IN / IM / AIN / EIN)** : *Matin, simple, pain, train, plein, vin*.\n   - Bouche étirée en demi-sourire, son plus aigu et clair.\n   *口角を横に引いて微笑む形で発音する、明るく澄んだ鼻母音「アン／イン」。*\n4. **[œ̃] (UN / UM)** : *Un, lundi, parfum*.\n   - Proche de [ɛ̃] dans le français moderne parisien, lèvres plus arrondies.\n   *現代のパリ方言では [ɛ̃] に近くなっていますが、より唇を丸めて発音される鼻母音「アン／ウン」。*"
          },
          {
            "type": "quiz_drill",
            "title": "Distinction Auditive Cruciale : [u] (OU) vs [y] (U)",
            "question": "Dans quelle paire de phrases la différence de sens repose-t-elle sur l'opposition entre les sons [u] (ou) et [y] (u) ?<br><em>[u] (ou) と [y] (u) の音の違いによって文の意味が決定的に対立しているのはどの組み合わせですか？</em>",
            "options": [
              "« Il mange du pain » vs « Il boit du vin »<br><em>「彼はパンを食べる」vs「彼はワインを飲む」</em>",
              "« C'est tout » (son [u]) vs « C'est tu » (son [y])<br><em>「これですべてだ」vs「それは君だ（文法的に不自然）」</em>",
              "« Tu as bu » (son [y]) vs « Tu as bouilli »<br><em>「君は飲んだ」vs「君は沸騰させた」</em>",
              "« C'est son dessous » [u] vs « C'est son dessus » [y]<br><em>「それはその下側だ」[u] vs「それはその上側だ」[y]</em>"
            ],
            "correctIndex": 3,
            "explanation": "La distinction entre « dessous » [də.su] et « dessus » [də.sy] est un exemple classique où la confusion entre le son [u] et le son [y] inverse totalement la signification spatiale !<br><em>「dessous（下）」[də.su] と「dessus（上）」[də.sy] の区別は、[u] と [y] の混同によって空間的な意味が正反対になってしまう代表的な古典的例です！</em>"
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation : Reconnaître les voyelles nasales",
            "instructions": "Associez chaque mot français à la voyelle nasale API exacte qu'il contient.\n各フランス語の単語を、それに含まれる正確な国際音声記号（API）の鼻母音と結びつけてください。",
            "pairs": [
              {
                "id": "nas_an",
                "fr": "Enfant, France, Temps",
                "en": "Nasal vowel [ɑ̃] (an/en)",
                "jp": "鼻母音 [ɑ̃] (アン・エン)",
                "cn": "鼻化元音 [ɑ̃] (an/en)"
              },
              {
                "id": "nas_on",
                "fr": "Bonjour, Maison, Pont",
                "en": "Nasal vowel [ɔ̃] (on/om)",
                "jp": "鼻母音 [ɔ̃] (オン)",
                "cn": "鼻化元音 [ɔ̃] (on/om)"
              },
              {
                "id": "nas_in",
                "fr": "Matin, Train, Pain",
                "en": "Nasal vowel [ɛ̃] (in/ain)",
                "jp": "鼻母音 [ɛ̃] (アン/イン)",
                "cn": "鼻化元音 [ɛ̃] (in/ain/ein)"
              },
              {
                "id": "nas_un",
                "fr": "Un, Lundi, Parfum",
                "en": "Nasal vowel [œ̃] (un/um)",
                "jp": "鼻母音 [œ̃] (アン・ウン)",
                "cn": "鼻化元音 [œ̃] (un/um)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch1_phonetique_2",
        "title": "Phonétique 2/3 : Consonnes, Semi-voyelles & Lettres Muettes",
        "level": "A1",
        "icon": "record_voice_over",
        "xp": 50,
        "description": "Explorer le R grasseyé, le son CH, le J, les semi-voyelles [j], [w], [ɥ], et les règles majeures des consonnes muettes finales.",
        "steps": [
          {
            "type": "lesson",
            "title": "Consonnes Françaises, Semi-Voyelles & Piège des Lettres Muettes",
            "audioText": "Les consonnes françaises possèdent des caractéristiques bien précises. Le R français se prononce au fond de la gorge avec la luette. La lettre C et la lettre G changent de son selon la voyelle qui suit. La lettre S entre deux voyelles se prononce Z. Enfin, la grande particularité de l'orthographe française réside dans les consonnes finales : la plupart des consonnes écrites à la fin des mots ne se prononcent pas, sauf dans le mot mnémotechnique CARExFUL.",
            "content": "Le système consonantique français se caractérise par des oppositions claires et une règle capitale d'élision des lettres finales.\n*フランス語の子音体系は、明確な音の対立と、語尾文字を読まない（無音化する）極めて重要な規則によって特徴づけられます。*\n\n---\n\n### 1. Les Consonnes Remarquables\n*注目の重要子音：*\n\n- **Le « R » français [ʁ]** : se produit par vibration du voile du palais et de la luette au fond de la gorge (*Paris, rouge, merci*).\n  *フランス語の「R」[ʁ] ： 舌先ではなく、喉の奥（口蓋垂・のどちんこ）を震わせて息を摩擦させる特徴的な音です。*\n- **Le « CH » [ʃ]** : son continu doux comme dans *chocolat, chat, cher*.\n  *「CH」[ʃ] ： 静かにさせる「シー」のような柔らかい摩擦音（chocolat, chat）。*\n- **Le « J » et « G doux » [ʒ]** : son vibrant voisé comme dans *jour, jambon, voyage, genou*.\n  *「J」および「柔らかいG」[ʒ] ： 声帯を震わせる有声摩擦音（日本語の「ジ／ジュ」に近いが破裂させない音）。*\n- **La lettre « S »** :\n  *文字「S」の発音変化：*\n  - Entre deux voyelles : se prononce **[z]** voisé (*maison, poison, rose*).\n    *母音と母音の間にあるとき ： 濁った「ズ」の音 [z] になります（maison, poison, rose）。*\n  - En début de mot ou en double « ss » : se prononce **[s]** (*soleil, poisson, tasse*). Notez la différence vitale entre *poison* [z] (toxique) et *poisson* [s] (animal aquatique) !\n    *語頭や「ss」のとき ： 濁らない澄んだ「ス」の音 [s] になります。poison（毒）[z] と poisson（魚）[s] の決定的な違いに注意！*\n- **La lettre « C »** :\n  *文字「C」の発音規則：*\n  - Devant **E, I, Y** : se prononce **[s]** (*centre, cinéma, cycle*).\n    *E, I, Y の前 ： 柔らかい [s]（サ行音）になります。*\n  - Devant **A, O, U** : se prononce **[k]** (*café, cours, cuisine*).\n    *A, O, U の前 ： 硬い [k]（カ行音）になります。*\n- **La lettre « G »** :\n  *文字「G」の発音規則：*\n  - Devant **E, I, Y** : se prononce **[ʒ]** (*génial, girafe*).\n    *E, I, Y の前 ： 柔らかい [ʒ]（ジャ行音）になります。*\n  - Devant **A, O, U** : se prononce **[g]** dur (*gare, goût, guide*).\n    *A, O, U の前 ： 硬い [g]（ガ行音）になります。*\n\n---\n\n### 2. Les 3 Semi-Voyelles (Semi-Consonnes / Glides)\n*3つの半母音（半子音・渡り音）：*\n\n1. **[j] (Yod)** : son « y » comme dans *soleil, travail, payer, fille, bien*.\n   *「ヤ・ユ・ヨ」のような素早い渡り音（soleil, travail, bien）。*\n2. **[w]** : son « oué » comme dans *oui, ouest*, et surtout dans la combinaison **OI = [wa]** (*moi, toi, bonsoir, trois*).\n   *「ワ」のような音。特にフランス語の重要綴り「OI」は常に [wa]（ウワ）と発音されます。*\n3. **[ɥ]** : son spécifique français issu de « u », comme dans *huit, nuit, aujourd'hui, pluie*.\n   *フランス語特有の「ユ」の口の構えから素早く次の母音へ移行する音（huit, nuit）。*\n\n---\n\n### 3. La Règle d'Or des Consonnes Finales Muettes !\n*語尾の無音子音に関する黄金律！*\n\nEn règle générale, **les consonnes situées à la fin d'un mot français sont MUETTES** :\n*原則として、フランス語の単語の最後に置かれた子音文字は「発音しません（無音）」：*\n- Exemples : *grand* (le D ne s'entend pas), *petit* (le T ne s'entend pas), *temps* (P et S muets), *deux* (X muet), *parler* (R muet à l'infinitif en -er).\n  *例：grand（Dは読まない）、petit（Tは読まない）、temps（PとSは読まない）、deux（Xは読まない）。*\n\n✨ **L'exception mnémotechnique magique : « CaReFuL » (C, R, F, L)**\n*例外を覚える魔法の合言葉「CaReFuL（ケアフル）」（C, R, F, L）：*\nLa majorité des mots qui se terminent par **C, R, F, ou L** se prononcent à la fin :\n*語尾が C, R, F, L のいずれかで終わる単語の多くは、語尾の子音を発音します：*\n- **C** : *sac, avec, parc* （サック、アヴェック、パルク）\n- **R** : *mer, hiver, bonjour, pour* (sauf terminaison en `-er`) （メール、イヴェール、ボンジュール）\n- **F** : *neuf, chef, soif* （ヌフ、シェフ、ソワフ）\n- **L** : *hôtel, ciel, fil, journal* （オテル、シエル、フィル、ジュルナル）"
          },
          {
            "type": "quiz_drill",
            "title": "Vérification : Consonne finale muette",
            "question": "Dans lequel des mots suivants la consonne finale se prononce-t-elle obligatoirement à l'oral ?<br><em>次の単語のうち、語尾の子音を口頭で必ず発音しなければならないのはどれですか？</em>",
            "options": [
              "Un lit (avec la consonne finale 't')<br><em>Un lit（語尾の 't' は無音）</em>",
              "Un sac (avec la consonne finale 'c')<br><em>Un sac（CaReFuL規則：語尾の 'c' [k] を発音する）</em>",
              "Un chat (avec la consonne finale 't')<br><em>Un chat（語尾の 't' は無音）</em>",
              "Un bras (avec la consonne finale 's')<br><em>Un bras（語尾の 's' は無音）</em>"
            ],
            "correctIndex": 1,
            "explanation": "Dans « sac », le C final fait partie des consonnes de la règle C-R-F-L et se prononce [sak]. Dans lit, chat et bras, les consonnes finales t et s sont totalement muettes.<br><em>「sac」の末尾のCは C-R-F-L 規則に含まれ、[sak] と発音されます。lit, chat, bras の末尾子音 t と s は完全に無音です。</em>"
          },
          {
            "type": "quiz_drill",
            "title": "Vérification : La combinaison 'OI'",
            "question": "Comment se prononce phonétiquement la combinaison des lettres 'OI' dans les mots 'bonsoir', 'moi' et 'trois' ?<br><em>「bonsoir」「moi」「trois」における綴り「OI」は音声学的にどのように発音されますか？</em>",
            "options": [
              "Elle se prononce [oi] comme deux voyelles séparées.<br><em>2つの別々の母音として「オ・イ」と発音される。</em>",
              "Elle se prononce [wa] (semi-voyelle [w] + voyelle [a]).<br><em>半母音 [w] と母音 [a] が結合して「ワ」[wa] と発音される。</em>",
              "Elle se prononce [o] fermé comme dans hôtel.<br><em>hôtel のように狭い「オ」[o] と発音される。</em>",
              "Elle se prononce [u] comme dans bonjour.<br><em>bonjour のように「ウ」[u] と発音される。</em>"
            ],
            "correctIndex": 1,
            "explanation": "En français, le digramme 'OI' se prononce systématiquement [wa] (ex: moi [mwa], bonsoir [bɔ̃swaʁ], trois [tʁwa]).<br><em>フランス語において、綴り「OI」は例外なく常に [wa]（ワ）と発音されます。</em>"
          }
        ]
      },
      {
        "id": "quest_ch1_phonetique_3",
        "title": "Phonétique 3/3 : La Liaison, l'Élision, l'Enchaînement & l'Intonation",
        "level": "A1",
        "icon": "sync_alt",
        "xp": 50,
        "description": "Comprendre les liaisons obligatoires et interdites, le phénomène de l'élision avec l'apostrophe et le rythme syllabique musical du français.",
        "steps": [
          {
            "type": "lesson",
            "title": "Le Rythme Musical du Français : Liaison, Élision & Mélodie",
            "audioText": "Le français est une langue liée et fluide où les mots s'enchaînent harmonieusement sans coupure d'air. C'est le phénomène de la liaison et de l'enchaînement vocalique. Quand un mot se termine par une consonne muette et que le mot suivant commence par une voyelle ou un h muet, on prononce souvent la consonne finale pour créer un pont sonore. De même, l'élision supprime la voyelle finale de certains petits mots pour faciliter la prononciation.",
            "content": "Le français possède une fluidité acoustique unique au monde. Pour éviter les chocs entre deux voyelles consécutives (le hiatus), la langue utilise deux mécanismes clés : **la liaison** et **l'élision**.\n*フランス語は世界でも類を見ない流麗な音響の連続性を持っています。母音が連続して衝突すること（ヒアトゥス）を避けるため、言語は2つの鍵となる仕組み「リエゾン（連音）」と「エリジオン（母音省略）」を用います。*\n\n---\n\n### 1. La Liaison : Le pont sonore entre deux mots\n*リエゾン（連音）：2つの単語をつなぐ音の架け橋*\n\nLa liaison consiste à prononcer la consonne finale habituellement muette d'un mot lorsqu'elle est suivie d'un mot commençant par une **voyelle** ou un **H muet**.\n*リエゾンとは、通常は発音されない語尾の無音子音を、直後に「母音」または「無音のH」で始まる単語が続く場合に発音する現象です。*\n\n#### 🔗 Changement de son lors de la liaison :\n*リエゾンによる音の変化：*\n- Le **-S** ou **-X** se prononce **[z]** :\n  - *Les amis* -> prononcé `[le-za-mi]` （レ・ザミ）\n  - *Deux enfants* -> prononcé `[dø-zɑ̃-fɑ̃]` （ドゥ・ザンファン）\n- Le **-D** se prononce **[t]** :\n  - *Un grand homme* -> prononcé `[œ̃-gʁɑ̃-tɔm]` （アン・グラン・トム）\n- Le **-N** conserve la nasalité tout en ajoutant la consonne `[n]` :\n  - *Un ami* -> prononcé `[œ̃-na-mi]` （アン・ナミ）\n\n#### ⛔ Liaisons Obligatoires vs Liaisons Interdites\n*必須のリエゾン vs 禁止のリエゾン：*\n1. **Liaisons obligatoires** :\n   *絶対にリエゾンしなければならない場合：*\n   - Déterminant + Nom : *les‿élèves, un‿arbre, mon‿ami*. （限定詞 ＋ 名詞）\n   - Pronom + Verbe : *ils‿arrivent, on‿écoute, vous‿avez*. （代名詞 ＋ 動詞）\n   - Adjectif + Nom : *un petit‿appartement, de grands‿arbres*. （前置形容詞 ＋ 名詞）\n2. **Liaisons formellement interdites** :\n   *絶対にリエゾンしてはならない場合（禁止）：*\n   - **Après le mot « et »** : on ne fait JAMAIS la liaison après *et* (*un père et [pause] une mère*).\n     *接続詞「et（そして）」の後 ： 決してリエゾンしてはいけません！*\n   - Devant un **H aspiré** : *les / héros* (pas de liaison !), *les / haricots*.\n     *有気音のHの前 ： リエゾン禁止（les héros, les haricots）。*\n   - Entre le sujet nominal et le verbe : *Le train / arrive* (pas de liaison).\n     *名詞主語と動詞の間 ： リエゾン禁止。*\n\n---\n\n### 2. L'Élision : L'apostrophe salvatrice\n*エリジオン（母音省略）：アポストロフィによる短縮*\n\nLorsque certains petits mots d'une syllabe se terminant par **e** ou **a** (*le, la, de, je, me, te, se, ce, ne, que*) sont suivis d'une voyelle ou d'un H muet, la voyelle disparaît et se remplace par une apostrophe :\n*1音節の短い単語が母音または無音のHで始まる単語の前に来るとき、語尾の母音が脱落してアポストロフィ（'）に置き換わります：*\n- *L'étudiant* (au lieu de *Le étudiant*) （男子学生）\n- *J'habite* (au lieu de *Je habite*) （私は住んでいる）\n- *C'est* (au lieu de *Ce est*) （それは〜です）\n- *D'accord* (au lieu de *De accord*) （了解・同意）\n\n---\n\n### 3. L'Intonation & le Rythme Syllabique\n*イントネーションと音節リズム：*\nEn français, chaque syllabe a une durée égale (rythme isosyllabique). Il n'y a pas d'accent tonique lexical imprévisible : **l'accent tonique tombe toujours sur la dernière syllabe du groupe de mots** !\n*フランス語では、各音節が等しい長さで発音されます。強勢アクセントは単語ごとに位置が決まっているのではなく、常に句や文の「最後の音節」に置かれます！*\n- **Question totale** (Est-ce que... ?) : la voix monte à la fin ↗.\n  *全体疑問文（はい／いいえで答える質問）：語尾の音調が上がります ↗。*\n- **Phrase affirmative ou ordre** : la voix descend à la fin ↘.\n  *肯定文や命令文：語尾の音調が下がります ↘。*"
          },
          {
            "type": "quiz_drill",
            "title": "Vérification : La liaison obligatoire",
            "question": "Dans laquelle des propositions suivantes la liaison est-elle strictement obligatoire et se prononce avec le son [z] ?<br><em>次の選択肢のうち、リエゾンが厳格に必須であり、[z]（ズ）の音で発音されるものはどれですか？</em>",
            "options": [
              "« Un pain et un croissant »<br><em>「パン1つとクロワッサン1つ」（etの後はリエゾン禁止）</em>",
              "« Les enfants jouent »<br><em>「子どもたちが遊んでいる」（限定詞Lesと名詞enfantsの間の必須リエゾン [le-zɑ̃-fɑ̃]）</em>",
              "« Le garçon et la fille »<br><em>「男の子と女の子」（etの後はリエゾン禁止）</em>",
              "« Les haricots verts »<br><em>「さやいんげん」（有気音のHのためリエゾン禁止）</em>"
            ],
            "correctIndex": 1,
            "explanation": "Entre le déterminant « les » et le nom « enfants » commençant par une voyelle, la liaison en [z] est obligatoire : on prononce [le.zɑ̃.fɑ̃].<br><em>限定詞「les」と母音で始まる名詞「enfants」の間では、[z] の音でのリエゾンが文法上必須であり、[le.zɑ̃.fɑ̃]（レザンファン）と発音されます。</em>"
          },
          {
            "type": "quiz_drill",
            "title": "Vérification : Liaison formellement interdite",
            "question": "Après quel mot très fréquent la liaison est-elle strictement INTERDITE en français ?<br><em>フランス語において、その直後のリエゾンが厳格に「禁止」されている非常によく使われる単語はどれですか？</em>",
            "options": [
              "Après le mot « dans »<br><em>前置詞「dans」の後（リエゾン可能）</em>",
              "Après le mot « et » (conjonction de coordination)<br><em>等位接続詞「et（そして）」の後（リエゾン厳格禁止）</em>",
              "Après le pronom « vous »<br><em>代名詞「vous」の後（必須リエゾン）</em>",
              "Après le déterminant « les »<br><em>限定詞「les」の後（必須リエゾン）</em>"
            ],
            "correctIndex": 1,
            "explanation": "La liaison est formellement interdite après la conjonction « et » afin de préserver son rôle de disjonction logique dans la phrase.<br><em>接続詞「et」の後のリエゾンは、文構造における論理的な区切りを明確に保つため、固く禁じられています。</em>"
          }
        ]
      },
      {
        "id": "quest_ch1_nombres_operateurs",
        "title": "Savoir Compter (1 à 1 000 000 000) & Opérateurs Mathématiques",
        "level": "A1",
        "icon": "calculate",
        "xp": 65,
        "description": "Compter de 1 à 10, de 10 à 100, centaines, milliers, millions, milliards et maîtriser tous les symboles mathématiques et de prise de notes.",
        "steps": [
          {
            "type": "lesson",
            "title": "Le Système des Nombres Français : De l'Unité au Milliard",
            "audioText": "Apprendre à compter en français est indispensable pour donner son âge, son numéro de téléphone, faire ses courses, comprendre les prix et lire les statistiques. Le système français présente des particularités fascinantes, comme le système vicésimal pour 70, 80 et 90. Ensuite, la progression vers cent, mille, million et milliard suit des règles régulières d'accord et d'invariabilité.",
            "content": "Maîtriser les nombres permet d'exprimer l'heure, les prix, les dates, les statistiques et d'effectuer des calculs simples.\n*数字をマスターすることで、時間、価格、日付、統計を表現し、簡単な計算を行えるようになります。*\n\n---\n\n### 1. De 1 à 10 (Les Fondations)\n*1から10まで（基本の数）：*\n- **1** : un [œ̃] *（1・アン）*\n- **2** : deux [dø] *（2・ドゥ）*\n- **3** : trois [tʁwa] *（3・トロワ）*\n- **4** : quatre [katʁ] *（4・キャトル）*\n- **5** : cinq [sɛ̃k] *（5・サンク）*\n- **6** : six [sis] *（6・シス）*\n- **7** : sept [sɛt] (le « p » est muet) *（7・セット、Pは無音）*\n- **8** : huit [ɥit] *（8・ユイット）*\n- **9** : neuf [nœf] *（9・ヌフ）*\n- **10** : dix [dis] *（10・ディス）*\n\n---\n\n### 2. De 10 à 100 (Les Dizaines & la Spécificité 70-80-90)\n*10から100まで（十の位と、70・80・90の特殊体系）：*\n- **10** : dix [dis] *（10）*\n- **20** : vingt [vɛ̃] (G et T muets) -> 21 : vingt et un [vɛ̃-te-œ̃] *（20・ヴァント、21：ヴァン・テ・アン）*\n- **30** : trente [tʁɑ̃t] -> 31 : trente et un *（30・トラント）*\n- **40** : quarante [kaʁɑ̃t] *（40・カラント）*\n- **50** : cinquante [sɛ̃kɑ̃t] *（50・サンカント）*\n- **60** : soixante [swasɑ̃t] *（60・ソワサント）*\n- **70** : **soixante-dix** (60 + 10) -> 71 : soixante et onze, 72 : soixante-douze... *（70：60+10の考え方）*\n- **80** : **quatre-vingts** (4 × 20, avec un « s » à vingt) -> 81 : quatre-vingt-un (sans « s » et sans « et ») *（80：4×20の20進法体系、80にはsが付く）*\n- **90** : **quatre-vingt-dix** (4 × 20 + 10) -> 91 : quatre-vingt-onze, 92 : quatre-vingt-douze... *（90：4×20+10の考え方）*\n- **100** : cent [sɑ̃] *（100・ソン）*\n\n---\n\n### 3. De 100 à 1 000 (Les Centaines)\n*100から1000まで（百の位）：*\n- **100** : cent *（100）*\n- **200** : deux cents (prend un « s » s'il n'est suivi d'aucun autre nombre) *（200：後ろに数字が続かない場合はcentsとsが付く）*\n- **205** : deux cent cinq (invariable car suivi d'un chiffre) *（205：後ろに数字が続く場合はcentにsが付かない）*\n- **300** : trois cents *（300）*\n- **500** : cinq cents *（500）*\n- **1 000** : **mille** (**MILLE EST TOUJOURS STRICTEMENT INVARIABLE !** Jamais de « s » : *trois mille*, *dix mille*).\n  *1000（mille はどんな場合でも常に不変！決して複数形の s は付きません）*\n\n---\n\n### 4. De 1 000 à 1 000 000 000 (Les Grands Nombres)\n*1000から10億まで（巨大な数）：*\n- **10 000** : dix mille *（1万）*\n- **100 000** : cent mille *（10万）*\n- **1 000 000** : **un million** (nom commun qui s'accorde au pluriel : *deux millions*, *cinq millions d'euros*).\n  *100万（million は普通名詞なので複数形で s が付きます：200万 = deux millions）*\n- **1 000 000 000** : **un milliard** (10⁹, s'accorde aussi au pluriel : *trois milliards d'habitants*).\n  *10億（milliard も普通名詞なので複数形で s が付きます：30億 = trois milliards）*"
          },
          {
            "type": "lesson",
            "title": "Opérateurs Mathématiques & Symboles Pratiques de Prise de Notes",
            "audioText": "Les opérateurs mathématiques sont très utiles pour expliquer un calcul, lire une formule et prendre des notes rapidement à l'écrit. Voici comment prononcer et lire les opérations arithmétiques, les puissances, ainsi que les symboles de comparaison et de logique couramment employés par les étudiants francophones.",
            "content": "En cours, au travail ou dans la vie quotidienne, voici les termes exacts pour lire les opérations et utiliser les abréviations logiques utiles pour la prise de notes :\n*授業、職場、日常生活において、計算式を読み上げたり、効率的なノート作成に役立つ正確な表現と論理記号の一覧です：*\n\n---\n\n### 1. Les 4 Opérations Arithmétiques & Égalité\n*四則演算と等号：*\n\n| Symbole | Nom en français | Exemple écrit | Lecture à voix haute |\n| :---: | :--- | :--- | :--- |\n| **`+`** | Plus / L'addition<br><em>プラス／足し算</em> | `5 + 3 = 8` | « Cinq **plus** trois **égale** huit » (ou *« font huit »*)<br><em>5たす3は8</em> |\n| **`-`** | Moins / La soustraction<br><em>マイナス／引き算</em> | `10 - 4 = 6` | « Dix **moins** quatre **égale** six »<br><em>10ひく4は6</em> |\n| **`×`** ou **`*`** | Fois / Multiplié par<br><em>かける／掛け算</em> | `6 × 7 = 42` | « Six **fois** sept **égale** quarante-deux »<br><em>6かける7は42</em> |\n| **`/`** ou **`÷`** | Divisé par / La division<br><em>わる／割り算</em> | `20 / 4 = 5` | « Vingt **divisé par** quatre **égale** cinq »<br><em>20わる4は5</em> |\n| **`=`** | Égale / Font / Vaut<br><em>イコール／等しい</em> | `A = B` | « A **égale** B » ou « A **est égal à** B »<br><em>AはBに等しい</em> |\n\n---\n\n### 2. Les Puissances\n*累乗（べき乗）：*\n\n- **`xⁿ`** : **x puissance n**\n  - `2³` : « deux **puissance** trois » (ou « deux au cube ») = 8.<br><em>2の3乗（2の3乗は8）</em>\n  - `5²` : « cinq **au carré** » (ou « cinq puissance deux ») = 25.<br><em>5の2乗（5の平方・2乗は25）</em>\n  - `10⁶` : « dix **puissance** six » = un million.<br><em>10の6乗（100万）</em>\n\n---\n\n### 3. Symboles de Comparaison, Logique & Prise de Notes Rapide\n*比較記号・論理記号・速記用ノートシンボル：*\n\nCes symboles sont couramment employés par les francophones lors de prises de notes de cours, réunions ou synthèses :\n*これらの記号は、フランス語圏の学生や社会人が講義や会議で手早くメモを取る際に日常的に多用されます：*\n\n| Symbole | Signification en français | Exemple d'usage en prise de notes |\n| :---: | :--- | :--- |\n| **`>`** | **Supérieur à** / Plus grand que<br><em>より大きい</em> | `Prix > 100 €` (« Prix supérieur à 100 euros »)<br><em>価格は100ユーロ超</em> |\n| **`<`** | **Inférieur à** / Plus petit que<br><em>より小さい・未満</em> | `Délai < 2 jours` (« Délai inférieur à deux jours »)<br><em>期限は2日未満</em> |\n| **`≥`** (`>=`) | **Supérieur ou égal à**<br><em>以上</em> | `Âge ≥ 18 ans` (« Âge supérieur ou égal à 18 ans »)<br><em>年齢18歳以上</em> |\n| **`≤`** (`<=`) | **Inférieur ou égal à**<br><em>以下</em> | `Note ≤ 10` (« Note inférieure ou égale à 10 »)<br><em>点数は10点以下</em> |\n| **`≠`** (`!=`) | **Différent de** / N'est pas égal à<br><em>等しくない（ノットイコール）</em> | `A ≠ B` (« A est différent de B »)<br><em>AはBと異なる</em> |\n| **`∈`** | **Appartient à**<br><em>属する・要素である</em> | `x ∈ Équipe` (« x fait partie de / appartient à l'équipe »)<br><em>xはチームに所属</em> |\n| **`∉`** | **N'appartient pas à**<br><em>属さない</em> | `y ∉ Liste` (« y n'appartient pas à la liste »)<br><em>yはリスト外</em> |\n| **`⊂`** | **Inclus dans**<br><em>含まれる・部分集合</em> | `Groupe A ⊂ Projet` (« Le groupe A est inclus dans le projet »)<br><em>グループAは計画に含まれる</em> |\n| **`⊄`** | **Non inclus dans**<br><em>含まれない</em> | `Option ⊄ Contrat` (« Option non incluse dans le contrat »)<br><em>オプションは契約外</em> |\n| **`∃`** | **Il existe**<br><em>存在する</em> | `∃ une solution` (« Il existe une solution »)<br><em>解決策が存在する</em> |\n| **`∄`** | **Il n'existe pas**<br><em>存在しない</em> | `∄ d'erreur` (« Il n'existe pas d'erreur »)<br><em>誤りは存在しない</em> |"
          },
          {
            "type": "quiz_drill",
            "title": "Vérification : Le nombre 80 et sa règle d'accord",
            "question": "Comment écrit-on correctement en toutes lettres le nombre 80 puis le nombre 85 ?<br><em>数字の80、そして85は文字（綴り）でどのように正しく書かれますか？</em>",
            "options": [
              "quatre-vingt (80) et quatre-vingt-cinq (85)<br><em>80にsがなく誤り</em>",
              "quatre-vingts (80) et quatre-vingt-cinq (85)<br><em>80では20にsが付き、85では後ろに数字が続くためsが付かない（正解）</em>",
              "octante (80) et octante-cinq (85)<br><em>スイス等の方言表現</em>",
              "quatre-vingts (80) et quatre-vingts-cinq (85)<br><em>85の20にsが付いており誤り</em>"
            ],
            "correctIndex": 1,
            "explanation": "Dans 'quatre-vingts' (80), vingt prend un 's' car il est multiplié par 4 et termine le nombre. Dès qu'un autre chiffre suit, vingt redevient invariable : 'quatre-vingt-cinq' (85).<br><em>「quatre-vingts (80)」では、vingt が4倍され、かつ数の最後に来るため複数形の 's' が付きます。直後に別の数字が続く場合（例：quatre-vingt-cinq 85）、vingt は不変となり 's' は付きません。</em>"
          },
          {
            "type": "quiz_drill",
            "title": "Vérification : Lecture d'une puissance et prise de note",
            "question": "Comment se lit à l'oral l'expression « 2⁴ » et que signifie le symbole « ≠ » en prise de note ?<br><em>「2⁴」は口頭でどのように読まれ、記号「≠」はノートの速記で何を意味しますか？</em>",
            "options": [
              "« deux fois quatre » et « est équivalent à »<br><em>「2かける4」と「等しい」</em>",
              "« deux puissance quatre » et « différent de »<br><em>「2の4乗」と「〜と異なる（ノットイコール）」</em>",
              "« deux divisé par quatre » et « appartient à »<br><em>「2わる4」と「属する」</em>",
              "« deux virgule quatre » et « inférieur ou égal à »<br><em>「2コンマ4」と「以下」</em>"
            ],
            "correctIndex": 1,
            "explanation": "2⁴ se lit « deux puissance quatre » (= 16) et le symbole ≠ se lit « différent de ».<br><em>2⁴ は「deux puissance quatre（2の4乗）」と読み、記号 ≠ は「différent de（〜と異なる）」を意味します。</em>"
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation : Symboles de prise de notes et d'opérateurs",
            "instructions": "Associez chaque symbole mathématique ou de logique à sa transcription française exacte.\n各数学記号・論理記号を、その正確なフランス語表現と結びつけてください。",
            "pairs": [
              {
                "id": "symb_puiss",
                "fr": "x^n (xⁿ)",
                "en": "x to the power of n",
                "jp": "xのn乗 (x puissance n)",
                "cn": "x 的 n 次方 (x puissance n)"
              },
              {
                "id": "symb_diff",
                "fr": "≠",
                "en": "Different from / not equal to",
                "jp": "等しくない・ノットイコール (≠)",
                "cn": "不等于 (≠, différent de)"
              },
              {
                "id": "symb_appart",
                "fr": "∈",
                "en": "Belongs to (is an element of)",
                "jp": "属する・要素である (∈)",
                "cn": "属于 (∈, appartient à)"
              },
              {
                "id": "symb_existe",
                "fr": "∃",
                "en": "There exists",
                "jp": "存在する (∃)",
                "cn": "存在 (∃, il existe)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch1_chiffres_romains",
        "title": "Les Chiffres Romains & la Numérotation des Siècles",
        "level": "A1",
        "icon": "account_balance",
        "xp": 50,
        "description": "Comprendre les chiffres romains (I, V, X, L, C, D, M) et maîtriser leur usage incontournable en France pour les siècles et l'histoire.",
        "steps": [
          {
            "type": "lesson",
            "title": "Les Chiffres Romains : Déchiffrage & Règle Impérative des Siècles",
            "audioText": "En France, les chiffres romains font partie du quotidien culturel. On les emploie obligatoirement pour désigner les siècles, comme le dix-neuvième ou le vingt-et-unième siècle, mais aussi pour les noms de rois et de reines, sur les cadrans d'horloge de monuments historiques, et sur les plaques des arrondissements parisiens. Apprendre à les lire est une étape indispensable pour tout apprenant du français.",
            "content": "Bien que le système décimal arabe soit utilisé pour les opérations ordinaires, **la culture et la langue française exigent l'usage des chiffres romains dans plusieurs domaines majeurs** !\n*日常の計算にはアラビア数字が使用されますが、フランスの文化および正統なフランス語表記では、いくつかの重要な分野で「ローマ数字」の使用が義務付けられています！*\n\n---\n\n### 1. Les 7 Symboles Fondamentaux\n*7つの基本シンボル（記号）：*\n\n| Symbole | Valeur | Astuce mnémotechnique |\n| :---: | :---: | :--- |\n| **I** | 1 | Un trait<br><em>1本の直線</em> |\n| **V** | 5 | La main ouverte formant un V<br><em>手を開いたときの親指と人差し指のVサイン</em> |\n| **X** | 10 | Deux V superposés<br><em>上下に重ねられた2つのV</em> |\n| **L** | 50 | Cinquante<br><em>50（ラテン語由来）</em> |\n| **C** | 100 | **C**entum (Cent en latin)<br><em>Cent（百）の頭文字C</em> |\n| **D** | 500 | Cinq cents<br><em>500</em> |\n| **M** | 1 000 | **M**ille<br><em>Mille（千）の頭文字M</em> |\n\n---\n\n### 2. Comment composer et lire les nombres romains ?\n*ローマ数字の組み立て方と読み方：*\n\n1. **Règle additive** : une lettre placée à droite d'une lettre de valeur égale ou supérieure s'ajoute :\n   *加算規則 ： 同じかそれ以上の値を持つ文字の「右」に置かれた文字は足し算されます：*\n   - `VI` = 5 + 1 = 6\n   - `XI` = 10 + 1 = 11\n   - `XV` = 10 + 5 = 15\n   - `XX` = 10 + 10 = 20\n2. **Règle soustractive** : une lettre placée à gauche d'une lettre de valeur supérieure se soustrait :\n   *減算規則 ： より大きな値を持つ文字の「左」に置かれた文字は引き算されます：*\n   - `IV` = 5 - 1 = 4\n   - `IX` = 10 - 1 = 9\n   - `XL` = 50 - 10 = 40\n   - `XC` = 100 - 10 = 90\n   - `CD` = 500 - 100 = 400\n   - `CM` = 1000 - 100 = 900\n\n---\n\n### 3. Pourquoi les chiffres romains sont indispensables en France ?\n*なぜフランスにおいてローマ数字が不可欠なのか？*\n\n1. **La désignation obligatoire des SIÈCLES** :\n   *世紀（siècle）の表記における絶対的義務：*\n   - En français soigné, **un siècle s'écrit TOUJOURS en chiffres romains**, suivi de « ᵉ » ou « ᵉʳ » siècle :\n     *正統なフランス語において、世紀は「必ずローマ数字」で表記されます：*\n     - *Le XXIᵉ siècle* = le vingt-et-unième siècle (l'époque contemporaine). *（21世紀・現代）*\n     - *Le XXᵉ siècle* = le vingtième siècle (1901–2000). *（20世紀）*\n     - *Le XIXᵉ siècle* = le dix-neuvième siècle (la Révolution industrielle). *（19世紀・産業革命の時代）*\n     - *Le XVIIIᵉ siècle* = le dix-huitième siècle (le Siècle des Lumières). *（18世紀・啓蒙思想の世紀）*\n     - *Le Iᵉʳ siècle* = le premier siècle. *（1世紀）*\n2. **Les souverains et régimes politiques** :\n   *国王や君主の代数：*\n   - *Louis XIV* (Louis quatorze, le Roi-Soleil) *（ルイ14世・太陽王）*\n   - *François Iᵉʳ* (François premier) *（フランソワ1世）*\n   - *Henri IV* (Henri quatre) *（アンリ4世）*\n   - *Napoléon III* (Napoléon trois) *（ナポレオン3世）*\n3. **Les arrondissements de Paris** :\n   *パリの行政区（街角の標識）：*\n   - Sur les plaques murales de rue à Paris : *VIIIᵉ arrondissement*, *VIᵉ arrondissement*. *（パリ8区、パリ6区）*\n4. **Les chapitres de livres classiques et actes de théâtre** :\n   *文学作品の章や演劇の幕：*\n   - *Acte III, Scène II*. *（第3幕 第2場）*"
          },
          {
            "type": "quiz_drill",
            "title": "Vérification : Écriture et lecture des siècles",
            "question": "Comment s'écrit et se lit en français le siècle actuel dans lequel nous vivons (années 2001 à 2100) ?<br><em>私たちが生きている現在の世紀（2001年〜2100年）は、フランス語でどのように表記され読まれますか？</em>",
            "options": [
              "Le 21 siècle (en chiffres arabes)<br><em>アラビア数字での表記（フランス語の正式ルール違反）</em>",
              "Le XXIᵉ siècle (lu « le vingt-et-unième siècle »)<br><em>Le XXIᵉ siècle（正解：ローマ数字で表記され、「ヴァン・テ・ユニエム・シエクル」と読む）</em>",
              "Le XIXᵉ siècle (lu « le dix-neuvième siècle »)<br><em>19世紀</em>",
              "Le XIIᵉ siècle (lu « le douzième siècle »)<br><em>12世紀</em>"
            ],
            "correctIndex": 1,
            "explanation": "En français, les siècles s'écrivent impérativement en chiffres romains : nous vivons au XXIᵉ siècle (vingt-et-unième siècle : X + X + I = 21).<br><em>フランス語において、世紀は必ずローマ数字で書かれます。私たちは現在、第21世紀（XXIᵉ siècle：10 + 10 + 1 = 21）に生きています。</em>"
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation : Conversion des chiffres romains usuels",
            "instructions": "Associez chaque nombre en chiffres romains à sa valeur et son exemple historique français.\n各ローマ数字を、その数値およびフランス史上の代表例と結びつけてください。",
            "pairs": [
              {
                "id": "rom_xviii",
                "fr": "XVIIIᵉ siècle",
                "en": "18th century (Siècle des Lumières)",
                "jp": "18世紀 (ヴォルテール等の啓蒙思想の時代)",
                "cn": "18 世纪 (法国启蒙时代)"
              },
              {
                "id": "rom_xiv",
                "fr": "Louis XIV",
                "en": "Louis the 14th (The Sun King)",
                "jp": "ルイ14世 (太陽王)",
                "cn": "路易十四 (太阳王)"
              },
              {
                "id": "rom_ix",
                "fr": "IX",
                "en": "Value 9 (10 minus 1)",
                "jp": "数字の 9 (10 - 1)",
                "cn": "罗马数字 9 (10 减 1)"
              },
              {
                "id": "rom_xxi",
                "fr": "XXIᵉ siècle",
                "en": "21st century (Current era)",
                "jp": "21世紀 (現代)",
                "cn": "21 世纪 (当代)"
              }
            ]
          }
        ]
      },
      {
        "id": "quest_ch1_salutations",
        "title": "Saluer, Remercier & Premières Formules de Politesse",
        "level": "A1",
        "icon": "badge",
        "xp": 50,
        "description": "Apprendre à saluer, se présenter et utiliser les formules de politesse indispensables au quotidien.",
        "steps": [
          {
            "type": "image_scene",
            "title": "Scène visuelle : La première rencontre à l'université",
            "imageUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
            "caption": "Deux étudiants se rencontrent pour la première fois à l'université et font connaissance en français.",
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
            "title": "Vocabulaire Clé : Décliner son identité",
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
                "def": "Prénom personnel qui précède le nom de famille.<br><em>ファーストネーム・名（家族の姓の前に置かれる個人の名前）。</em>",
                "example": "Mon prénom est Thomas."
              },
              {
                "word": "Le nom",
                "type": "n. m.",
                "def": "Nom de famille officiel transmis par les parents.<br><em>ファミリーネーム・姓（両親から受け継ぐ公式の名字）。</em>",
                "example": "Mon nom de famille est Martin."
              },
              {
                "word": "La nationalité",
                "type": "n. f.",
                "def": "Appartenance juridique à un pays déterminé.<br><em>国籍（特定の国に対する法的な帰属）。</em>",
                "example": "Ma nationalité est française."
              },
              {
                "word": "Étudiant(e)",
                "type": "n. / adj.",
                "def": "Personne inscrite à l'université ou dans une école.<br><em>学生・大学生（高等教育機関に在籍する人）。</em>",
                "example": "Je suis étudiante à l'université de Lyon."
              }
            ]
          },
          {
            "type": "vocab_drill",
            "title": "Formules de Salutation & Accueil",
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
                "def": "Salutation polie employée pendant la journée.<br><em>こんにちは・おはようございます（日中の丁寧な挨拶）。</em>",
                "example": "Bonjour madame, comment allez-vous ?"
              },
              {
                "word": "Enchanté(e)",
                "type": "adj.",
                "def": "Formule chaleureuse quand on fait la connaissance de quelqu'un.<br><em>はじめまして・お会いできて光栄です（初対面時の丁寧な挨拶）。</em>",
                "example": "Enchanté de vous rencontrer !"
              },
              {
                "word": "Au revoir",
                "type": "loc. interj.",
                "def": "Formule usuelle pour prendre congé d'une personne.<br><em>さようなら・またお会いしましょう（別れ際の標準的な挨拶）。</em>",
                "example": "Au revoir et bonne journée !"
              },
              {
                "word": "Merci",
                "type": "interj.",
                "def": "Mot essentiel pour exprimer sa gratitude.<br><em>ありがとう・感謝いたします（感謝を伝える必須の言葉）。</em>",
                "example": "Merci beaucoup pour votre aide précieuse."
              }
            ]
          },
          {
            "type": "dialogue_view",
            "title": "Dialogue Modèle : Premier contact à la faculté",
            "context": "Lucas et Sarah se croisent dans le hall de l'université avant leur premier cours.",
            "lines": [
              {
                "speaker": "Lucas",
                "text": "Bonjour ! Je m'appelle Lucas. Et toi, comment tu t'appelles ?\nこんにちは！僕はリュカです。君の名前は何ですか？"
              },
              {
                "speaker": "Sarah",
                "text": "Bonjour Lucas ! Moi, c'est Sarah. Tu es étudiant ici en première année ?\nこんにちはリュカ！私はサラよ。ここで1年生の学生をしているの？"
              },
              {
                "speaker": "Lucas",
                "text": "Oui, exactement ! Je suis canadien et j'étudie l'histoire de l'art.\nうん、その通り！僕はカナダ人で、美術史を勉強しているんだ。"
              },
              {
                "speaker": "Sarah",
                "text": "Enchantée ! Moi je suis française, j'habite à Lyon depuis deux ans.\nはじめまして！私はフランス人で、リヨンに2年前から住んでいるの。"
              },
              {
                "speaker": "Lucas",
                "text": "Enchanté Sarah ! Le cours commence dans cinq minutes, on y va ensemble ?\nはじめましてサラ！授業が5分後に始まるけど、一緒に行かない？"
              },
              {
                "speaker": "Sarah",
                "text": "Avec plaisir, allons-y !\n喜んで、行きましょう！"
              }
            ]
          },
          {
            "type": "matching_drill",
            "title": "Mémorisation Multilingue : Les salutations et politesses",
            "instructions": "Associez chaque formule de politesse française à sa traduction.\nフランス語の各挨拶・丁寧表現を、対応する多言語訳と結びつけてください。",
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
