/* ==========================================================================
   PROGRAMME COMPLET DE LANGUE FRANÇAISE : DU NIVEAU A1 AU C1+
   (Dataset exhaustif de 52 leçons, 332 questions interactives contextualisées)
   ========================================================================== */

window.grammarDataset = [
  // =========================================================================
  // NIVEAU A1 : DÉCOUVERTE (11 LEÇONS - 66 QUESTIONS)
  // =========================================================================
  {
    id: "a1-articles",
    title: "A1.1 Les Articles (Définis, Indéfinis, Partitifs)",
    level: "🟢 Niveau A1",
    levelCode: "A1",
    category: "grammaire",
    ruleTitle: "Les Articles en Français",
    ruleContent: `
      <p>En français, le nom est presque toujours précédé d'un article qui indique son genre (masculin/féminin) et son nombre (singulier/pluriel) :</p>
      <ul>
        <li><strong>Articles définis (élément connu/spécifique) :</strong> <i>le</i> (masc.), <i>la</i> (fém.), <i>l'</i> (devant voyelle ou h muet), <i>les</i> (pluriel). Ex: <i>le livre, la chaise, l'école, les enfants.</i></li>
        <li><strong>Articles indéfinis (élément non spécifié/comptable) :</strong> <i>un</i> (masc.), <i>une</i> (fém.), <i>des</i> (pluriel). Ex: <i>un stylo, une table, des étudiants.</i></li>
        <li><strong>Articles partitifs (quantité globale non comptable) :</strong> <i>du</i> (masc.), <i>de la</i> (fém.), <i>de l'</i> (devant voyelle), <i>des</i>. Ex: <i>Je bois du café, de l'eau et de la limonade.</i></li>
      </ul>
      <p><strong>Règle d'or à la négation absolue :</strong> <i>un, une, des, du, de la, de l'</i> deviennent <strong>de / d'</strong>. Ex: <i>Je ne bois pas de café.</i></p>
    `,
    questions: [
      {
        id: "a1-1-q1",
        prompt: "Le matin, je mange ___ pain avec ___ beurre et ___ confiture.",
        options: [
          "du / du / de la",
          "le / le / la",
          "un / un / une",
          "des / du / la"
        ],
        correct: 0,
        explanation: "Pour des aliments non comptables pris en quantité indéterminée, on utilise les partitifs : 'du' (masculin) et 'de la' (féminin)."
      },
      {
        id: "a1-1-q2",
        prompt: "Je ne prends jamais ___ sucre dans mon thé.",
        options: [
          "du",
          "de",
          "le",
          "un"
        ],
        correct: 1,
        explanation: "Après une négation absolue ('ne... jamais', 'ne... pas'), l'article partitif 'du' se transforme obligatoirement en 'de'."
      },
      {
        id: "a1-1-q3",
        prompt: "Regarde ! C'est ___ professeur d'histoire de ___ université de Paris.",
        options: [
          "le / l'",
          "un / un",
          "du / de la",
          "le / la"
        ],
        correct: 0,
        explanation: "On utilise l'article défini 'le' pour un professeur identifié et 'l'' devant le nom féminin 'université' commençant par une voyelle."
      },
      {
        id: "a1-1-q4",
        prompt: "Pour le dîner, nous achetons ___ poulet et ___ eau minérale.",
        options: [
          "du / de l'",
          "un / la",
          "le / de la",
          "du / d'"
        ],
        correct: 0,
        explanation: "'Du' s'emploie pour le poulet (quantité/partitif masculin) et 'de l'' devant le nom féminin 'eau' commençant par une voyelle."
      },
      {
        id: "a1-1-q5",
        prompt: "Elle a acheté ___ nouveau roman et ___ revues d'art.",
        options: [
          "un / des",
          "le / les",
          "du / de la",
          "un / de"
        ],
        correct: 0,
        explanation: "On utilise l'article indéfini comptable 'un' pour un roman masculin singulier et 'des' pour les revues au pluriel."
      },
      {
        id: "a1-1-q6",
        prompt: "Il n'y a plus ___ lait dans le réfrigérateur.",
        options: [
          "de",
          "du",
          "le",
          "un"
        ],
        correct: 0,
        explanation: "À la forme négative 'ne... plus', le partitif 'du' devient 'de'."
      }
    ]
  },
  {
    id: "a1-genre-nombre",
    title: "A1.2 Genre et Nombre des Noms",
    level: "🟢 Niveau A1",
    levelCode: "A1",
    category: "grammaire",
    ruleTitle: "Masculin/Féminin & Singulier/Pluriel",
    ruleContent: `
      <p><strong>Genre :</strong> En général, on ajoute un <i>-e</i> pour former le féminin (ex: <i>un étudiant → une étudiante</i>). Les terminaisons en <i>-eur/-euse, -teur/-trice, -ien/-ienne, -er/-ère</i> sont très fréquentes.</p>
      <p><strong>Nombre :</strong> On ajoute généralement un <i>-s</i> au pluriel (ex: <i>la fleur → les fleurs</i>). Les noms en <i>-s, -x, -z</i> ne changent pas (ex: <i>un nez → des nez, un prix → des prix</i>). Les noms en <i>-al</i> font souvent leur pluriel en <i>-aux</i> (ex: <i>un journal → des journaux</i>).</p>
    `,
    questions: [
      {
        id: "a1-2-q1",
        prompt: "Choisissez la forme plurielle correcte de 'un ami canadien' :",
        options: [
          "des amis canadiens",
          "des amis canadien",
          "les amis canadiennes",
          "un amis canadiens"
        ],
        correct: 0,
        explanation: "'Un' devient 'des', 'ami' prend un '-s' et l'adjectif 'canadien' prend la marque du pluriel masculin '-s'."
      },
      {
        id: "a1-2-q2",
        prompt: "Quel est le pluriel régulier de 'un journal régional' ?",
        options: [
          "des journaux régionaux",
          "des journals régionals",
          "des journaux régionals",
          "des journals régionaux"
        ],
        correct: 0,
        explanation: "Les noms et adjectifs en '-al' forment leur pluriel en '-aux' (un journal → des journaux, régional → régionaux)."
      },
      {
        id: "a1-2-q3",
        prompt: "Le féminin du nom 'un directeur attentif' est :",
        options: [
          "une directrice attentive",
          "une directeuse attentive",
          "une directrice attentife",
          "une directrice attentif"
        ],
        correct: 0,
        explanation: "Le suffixe '-teur' devient '-trice' (directrice) et l'adjectif en '-if' devient '-ive' (attentive)."
      },
      {
        id: "a1-2-q4",
        prompt: "Indiquez la phrase orthographiquement correcte au pluriel :",
        options: [
          "Ces voix sont très belles.",
          "Ces voixs sont très belles.",
          "Ces voix sont très beaux.",
          "Ces voixes sont très belles."
        ],
        correct: 0,
        explanation: "Le mot féminin 'une voix' se termine par '-x' au singulier et est donc invariable au pluriel : 'ces voix'."
      },
      {
        id: "a1-2-q5",
        prompt: "Quel est le féminin de 'un musicien italien' ?",
        options: [
          "une musicienne italienne",
          "une musicien italienne",
          "une musicienne italien",
          "une musicienne italiente"
        ],
        correct: 0,
        explanation: "Les noms et adjectifs en '-ien' doublent la consonne 'n' au féminin : '-ienne' (musicienne italienne)."
      },
      {
        id: "a1-2-q6",
        prompt: "Le pluriel du mot 'un tableau moderne' s'écrit :",
        options: [
          "des tableaux modernes",
          "des tableaus modernes",
          "des tableaux moderne",
          "des tableaus moderne"
        ],
        correct: 0,
        explanation: "Les noms terminés par '-eau' prennent un '-x' au pluriel (tableaux) et l'adjectif prend un '-s' (modernes)."
      }
    ]
  },
  {
    id: "a1-adjectifs-qualificatifs",
    title: "A1.3 Les Adjectifs Qualificatifs",
    level: "🟢 Niveau A1",
    levelCode: "A1",
    category: "grammaire",
    ruleTitle: "Accord et Place des Adjectifs",
    ruleContent: `
      <p>L'adjectif s'accorde en genre et en nombre avec le nom qu'il qualifie.</p>
      <p><strong>Place de l'adjectif :</strong></p>
      <ul>
        <li><strong>Après le nom (la majorité) :</strong> couleur, forme, nationalité, état, religion (ex: <i>une table ronde, une robe noire, un vin français</i>).</li>
        <li><strong>Avant le nom (adjectifs courts et très fréquents) :</strong> <i>beau, bon, grand, gros, jeune, joli, mauvais, nouveau, petit, vieux</i> (ex: <i>un grand appartement, une belle histoire</i>).</li>
      </ul>
    `,
    questions: [
      {
        id: "a1-3-q1",
        prompt: "Il habite dans une _____ maison _____.",
        options: [
          "grande / blanche",
          "blanche / grande",
          "grand / blanc",
          "grande / blanc"
        ],
        correct: 0,
        explanation: "'Grand' se place AVANT le nom (grande) et l'adjectif de couleur 'blanc' se place APRÈS le nom (blanche)."
      },
      {
        id: "a1-3-q2",
        prompt: "Nous avons rencontré un _____ homme très _____.",
        options: [
          "jeune / sympathique",
          "sympathique / jeune",
          "jeune / sympathiques",
          "jeunes / sympathique"
        ],
        correct: 0,
        explanation: "'Jeune' (court et fréquent) se place avant le nom, et 'sympathique' (qualificatif long) se place après."
      },
      {
        id: "a1-3-q3",
        prompt: "Devant un nom masculin singulier commençant par une voyelle, 'beau' et 'vieux' deviennent :",
        options: [
          "bel / vieil",
          "belle / vieille",
          "beaux / vieux",
          "bel / vieux"
        ],
        correct: 0,
        explanation: "Pour faciliter la liaison phonétique, on dit 'un bel appartement' et 'un vieil homme'."
      },
      {
        id: "a1-3-q4",
        prompt: "Ces étudiantes sont particulièrement _____ et _____.",
        options: [
          "sérieuses / attentives",
          "sérieux / attentifs",
          "sérieuse / attentive",
          "sérieuses / attentifs"
        ],
        correct: 0,
        explanation: "L'accord se fait au féminin pluriel avec le sujet 'ces étudiantes' : 'sérieuses' et 'attentives'."
      },
      {
        id: "a1-3-q5",
        prompt: "Elle porte une _____ écharpe _____.",
        options: [
          "jolie / rouge",
          "rouge / jolie",
          "joli / rouge",
          "jolie / rougee"
        ],
        correct: 0,
        explanation: "'Jolie' se place avant le nom et 'rouge' (couleur) se place après le nom."
      },
      {
        id: "a1-3-q6",
        prompt: "C'est un _____ arbre avec de _____ feuilles vertes.",
        options: [
          "bel / petites",
          "beau / petites",
          "bel / petits",
          "beau / petite"
        ],
        correct: 0,
        explanation: "'Arbre' commence par une voyelle masculine → 'bel arbre'. 'Feuilles' est féminin pluriel → 'petites feuilles'."
      }
    ]
  },
  {
    id: "a1-pronoms-sujets-toniques",
    title: "A1.4 Pronoms Sujets & Pronoms Toniques",
    level: "🟢 Niveau A1",
    levelCode: "A1",
    category: "grammaire",
    ruleTitle: "Je, Tu, Il / Moi, Toi, Lui, Elle",
    ruleContent: `
      <p><strong>Pronoms Sujets :</strong> <i>je, tu, il, elle, on, nous, vous, ils, elles</i> (obligatoires devant le verbe conjugué).</p>
      <p><strong>Pronoms Toniques :</strong> <i>moi, toi, lui, elle, nous, vous, eux, elles</i>.</p>
      <p>On utilise les pronoms toniques pour insister/mettre en relief (<i>Moi, je pense...</i>), après une préposition (<i>avec lui, chez eux, pour elle</i>), ou dans des réponses isolées sans verbe (<i>Qui veut du café ? - Moi !</i>).</p>
    `,
    questions: [
      {
        id: "a1-4-q1",
        prompt: "_____ , je préfère le thé, mais _____, il aime le café.",
        options: [
          "Moi / lui",
          "Je / il",
          "Me / il",
          "Moi / il"
        ],
        correct: 0,
        explanation: "On utilise les pronoms toniques 'Moi' et 'Lui' pour marquer l'opposition et mettre en relief les sujets."
      },
      {
        id: "a1-4-q2",
        prompt: "Ce soir, nous allons dîner chez _____.",
        options: [
          "eux",
          "ils",
          "leur",
          "les"
        ],
        correct: 0,
        explanation: "Après la préposition de lieu 'chez', on emploie obligatoirement le pronom tonique masculin pluriel 'eux'."
      },
      {
        id: "a1-4-q3",
        prompt: "Qui a préparé ce délicieux gâteau ? - C'est _____ !",
        options: [
          "elle",
          "la",
          "sa",
          "son"
        ],
        correct: 0,
        explanation: "Après la formule de présentation 'C'est...', on utilise le pronom tonique ('C'est elle !', 'C'est moi !')."
      },
      {
        id: "a1-4-q4",
        prompt: "Tu viens au cinéma avec _____ ce soir ?",
        options: [
          "nous",
          "on",
          "notre",
          "nos"
        ],
        correct: 0,
        explanation: "Après la préposition 'avec', on utilise le pronom tonique 'nous'."
      },
      {
        id: "a1-4-q5",
        prompt: "_____ aussi, vous partez en vacances en juillet ?",
        options: [
          "Vous",
          "Votre",
          "Vos",
          "Toi"
        ],
        correct: 0,
        explanation: "Le pronom tonique correspondant à la deuxième personne du pluriel 'vous' est également 'Vous'."
      },
      {
        id: "a1-4-q6",
        prompt: "Paul et Marc ? Je travaille souvent pour _____.",
        options: [
          "eux",
          "ils",
          "leur",
          "les"
        ],
        correct: 0,
        explanation: "Pour remplacer 'Paul et Marc' (masculin pluriel) après la préposition 'pour', on emploie 'eux'."
      }
    ]
  },
  {
    id: "a1-interrogation-base",
    title: "A1.5 La Phrase Interrogative",
    level: "🟢 Niveau A1",
    levelCode: "A1",
    category: "grammaire",
    ruleTitle: "Intonation, Est-ce que & Inversion",
    ruleContent: `
      <p>Il existe trois registres pour poser une question en français :</p>
      <ul>
        <li><strong>Familier (Intonation montante) :</strong> Sujet + Verbe + ? Ex: <i>Tu viens demain ?</i></li>
        <li><strong>Courant (Standard) :</strong> Est-ce que + Sujet + Verbe ? Ex: <i>Est-ce que tu viens demain ?</i></li>
        <li><strong>Soutenu (Inversion) :</strong> Verbe-Sujet ? Ex: <i>Viens-tu demain ?</i> (Ajout d'un <i>-t-</i> euphonique si nécessaire : <i>Aime-t-il le thé ?</i>).</li>
      </ul>
      <p><strong>Mots interrogatifs :</strong> <i>Où</i> (lieu), <i>Quand</i> (temps), <i>Comment</i> (manière), <i>Pourquoi</i> (cause), <i>Combien</i> (quantité), <i>Qui</i> (personne), <i>Que / Quoi</i> (chose).</p>
    `,
    questions: [
      {
        id: "a1-5-q1",
        prompt: "Formulez correctement la question soutenue : 'Où habite Paul ?'",
        options: [
          "Où Paul habite-t-il ?",
          "Où habite Paul-il ?",
          "Où est-ce que Paul habite-t-il ?",
          "Où Paul habite ?"
        ],
        correct: 0,
        explanation: "Dans l'inversion complexe avec un nom sujet, le nom reste en tête et on ajoute le pronom inversé avec le 't' euphonique : 'Où Paul habite-t-il ?'."
      },
      {
        id: "a1-5-q2",
        prompt: "_____ coûte ce billet de train pour Marseille ?",
        options: [
          "Combien",
          "Comment",
          "Pourquoi",
          "Quand"
        ],
        correct: 0,
        explanation: "On utilise l'adverbe interrogatif 'Combien' pour interroger sur un prix ou une quantité."
      },
      {
        id: "a1-5-q3",
        prompt: "_____ tu ne viens pas à la réunion ce matin ?",
        options: [
          "Pourquoi est-ce que",
          "Comment est-ce que",
          "Quand est-ce que",
          "Qui est-ce que"
        ],
        correct: 0,
        explanation: "'Pourquoi est-ce que' est la forme standard pour demander la cause ou la raison d'une absence."
      },
      {
        id: "a1-5-q4",
        prompt: "Choisissez la question correcte au registre standard :",
        options: [
          "Est-ce que vous parlez français ?",
          "Parlez vous français ?",
          "Est-ce que parlez-vous français ?",
          "Vous parlez-vous français ?"
        ],
        correct: 0,
        explanation: "Le registre standard emploie la structure 'Est-ce que' suivie de l'ordre normal sujet + verbe."
      },
      {
        id: "a1-5-q5",
        prompt: "_____ prends-tu pour aller au bureau chaque matin ?",
        options: [
          "Que",
          "Qui",
          "Où",
          "Pourquoi"
        ],
        correct: 0,
        explanation: "Le pronom interrogatif 'Que' (placé en tête avec inversion) désigne la chose ou le moyen de transport pris."
      },
      {
        id: "a1-5-q6",
        prompt: "À quelle heure part le train ? - Transformez avec inversion :",
        options: [
          "À quelle heure part-il ?",
          "À quelle heure il part-t-il ?",
          "À quelle heure est-ce part-il ?",
          "À quelle heure part train-il ?"
        ],
        correct: 0,
        explanation: "L'inversion simple du verbe et du pronom sujet donne : 'À quelle heure part-il ?'."
      }
    ]
  },
  {
    id: "a1-negation-simple",
    title: "A1.6 La Phrase Négative Simple",
    level: "🟢 Niveau A1",
    levelCode: "A1",
    category: "grammaire",
    ruleTitle: "Ne ... Pas & De à la négation",
    ruleContent: `
      <p>La négation simple en français se compose de deux éléments qui encadrent le verbe conjugué :</p>
      <p><strong>Sujet + ne (n') + Verbe + pas</strong> (ex: <i>Je ne comprends pas, Il n'aime pas le froid</i>).</p>
      <p><strong>Aux temps composés :</strong> <i>ne</i> et <i>pas</i> encadrent l'auxiliaire (ex: <i>Je n'ai pas mangé</i>).</p>
      <p><strong>Règle de transformation :</strong> Les articles indéfinis (<i>un, une, des</i>) et partitifs (<i>du, de la, des</i>) deviennent <strong>de / d'</strong> après la négation (ex: <i>J'ai une voiture → Je n'ai pas de voiture</i>). Exception : avec le verbe <i>être</i>, l'article ne change pas (<i>Ce n'est pas un problème</i>).</p>
    `,
    questions: [
      {
        id: "a1-6-q1",
        prompt: "Je _____ mange _____ viande le soir.",
        options: [
          "ne / pas de",
          "ne / pas du",
          "ne / pas de la",
          "n' / pas de"
        ],
        correct: 0,
        explanation: "Devant consonne, on utilise 'ne', puis 'pas de' car l'article partitif 'de la viande' devient 'de' à la forme négative."
      },
      {
        id: "a1-6-q2",
        prompt: "Nous _____ avons _____ compris la consigne.",
        options: [
          "n' / pas",
          "ne / pas",
          "n' / plus de",
          "ne / point"
        ],
        correct: 0,
        explanation: "Devant la voyelle de l'auxiliaire 'avons', 'ne' s'élide en 'n'' et encadre l'auxiliaire avec 'pas' : 'n'avons pas'."
      },
      {
        id: "a1-6-q3",
        prompt: "Ce _____ est _____ un exercice difficile.",
        options: [
          "n' / pas",
          "ne / pas",
          "n' / point",
          "ne / pas d'"
        ],
        correct: 0,
        explanation: "Avec le verbe 'être', l'article indéfini 'un' est conservé : 'Ce n'est pas un exercice difficile'."
      },
      {
        id: "a1-6-q4",
        prompt: "Transformez à la négation : 'Elle boit de l'eau gazeuse.'",
        options: [
          "Elle ne boit pas d'eau gazeuse.",
          "Elle ne boit pas de l'eau gazeuse.",
          "Elle n'boit pas d'eau gazeuse.",
          "Elle ne boit pas l'eau gazeuse."
        ],
        correct: 0,
        explanation: "L'article partitif 'de l'' devient 'd'' devant le nom 'eau' commençant par une voyelle : 'ne boit pas d'eau'."
      },
      {
        id: "a1-6-q5",
        prompt: "Ils ont des enfants ? - Non, ils _____ ont _____ .",
        options: [
          "n' / pas d'enfants",
          "ne / pas des enfants",
          "n' / pas des enfants",
          "ne / pas d'enfants"
        ],
        correct: 0,
        explanation: "Devant voyelle 'ont', 'ne' devient 'n'', et 'des enfants' devient 'd'enfants' à la négation."
      },
      {
        id: "a1-6-q6",
        prompt: "Vous _____ habitez _____ à Lyon ?",
        options: [
          "n' / pas",
          "ne / pas",
          "n' / pas de",
          "ne / point"
        ],
        correct: 0,
        explanation: "'Habitez' commence par un 'h' muet, ce qui exige l'élision 'n'habitez pas'."
      }
    ]
  },
  {
    id: "a1-prepositions-lieu",
    title: "A1.7 Les Prépositions de Lieu",
    level: "🟢 Niveau A1",
    levelCode: "A1",
    category: "grammaire",
    ruleTitle: "En, Au, Aux, À & Villes/Pays",
    ruleContent: `
      <p><strong>Villes :</strong> Toujours <strong>à</strong> (ex: <i>à Paris, à Tokyo, à Montréal</i>).</p>
      <p><strong>Pays et continents :</strong></p>
      <ul>
        <li><strong>Féminins (finissant par -e) ou commençant par une voyelle :</strong> <strong>en</strong> (ex: <i>en France, en Espagne, en Italie, en Iran</i>).</li>
        <li><strong>Masculins (finissant par une consonne ou autre voyelle) :</strong> <strong>au</strong> (ex: <i>au Canada, au Japon, au Portugal, au Maroc</i>).</li>
        <li><strong>Pluriels :</strong> <strong>aux</strong> (ex: <i>aux États-Unis, aux Pays-Bas, aux Philippines</i>).</li>
      </ul>
    `,
    questions: [
      {
        id: "a1-7-q1",
        prompt: "Cet été, nous partons d'abord ___ Italie, puis ___ Japon et enfin ___ États-Unis.",
        options: [
          "en / au / aux",
          "à / en / aux",
          "dans / au / dans les",
          "en / à / aux"
        ],
        correct: 0,
        explanation: "'Italie' est un pays féminin → 'en'. 'Japon' est masculin → 'au'. 'États-Unis' est pluriel → 'aux'."
      },
      {
        id: "a1-7-q2",
        prompt: "Mon frère habite ___ Londres et travaille ___ Royaume-Uni.",
        options: [
          "à / au",
          "en / au",
          "à / en",
          "au / au"
        ],
        correct: 0,
        explanation: "On utilise 'à' devant une ville ('à Londres') et 'au' devant un pays masculin ('au Royaume-Uni')."
      },
      {
        id: "a1-7-q3",
        prompt: "Elle est née ___ Iran, mais elle a grandi ___ France.",
        options: [
          "en / en",
          "au / en",
          "à / en",
          "en / à la"
        ],
        correct: 0,
        explanation: "'Iran' est un pays masculin commençant par une voyelle → 'en Iran'. 'France' est féminin → 'en France'."
      },
      {
        id: "a1-7-q4",
        prompt: "Ils passent leurs vacances ___ Portugal, ___ Lisbonne.",
        options: [
          "au / à",
          "en / à",
          "au / dans",
          "à / au"
        ],
        correct: 0,
        explanation: "'Portugal' est un nom de pays masculin → 'au Portugal', et 'Lisbonne' est une ville → 'à Lisbonne'."
      },
      {
        id: "a1-7-q5",
        prompt: "Nous allons faire un stage ___ Mexique au mois de mai.",
        options: [
          "au",
          "en",
          "à",
          "dans le"
        ],
        correct: 0,
        explanation: "Attention aux exceptions : 'Le Mexique', bien que finissant par un -e, est masculin → 'au Mexique' (comme 'au Mozambique')."
      },
      {
        id: "a1-7-q6",
        prompt: "Le sommet international se tient ___ Pays-Bas cette année.",
        options: [
          "aux",
          "en",
          "au",
          "à les"
        ],
        correct: 0,
        explanation: "'Pays-Bas' est un nom de pays au pluriel, il s'associe obligatoirement à la préposition contractée 'aux'."
      }
    ]
  },
  {
    id: "a1-demonstratifs-possessifs",
    title: "A1.8 Démonstratifs & Possessifs",
    level: "🟢 Niveau A1",
    levelCode: "A1",
    category: "grammaire",
    ruleTitle: "Ce, Cet, Cette, Ces / Mon, Ton, Son",
    ruleContent: `
      <p><strong>Adjectifs Démonstratifs :</strong></p>
      <ul>
        <li><i>ce</i> : masculin singulier devant consonne (ex: <i>ce livre</i>).</li>
        <li><i>cet</i> : masculin singulier devant voyelle ou h muet (ex: <i>cet homme, cet arbre</i>).</li>
        <li><i>cette</i> : féminin singulier (ex: <i>cette table, cette idée</i>).</li>
        <li><i>ces</i> : pluriel masculin et féminin (ex: <i>ces enfants, ces fleurs</i>).</li>
      </ul>
      <p><strong>Adjectifs Possessifs :</strong> <i>mon/ma/mes, ton/ta/tes, son/sa/ses, notre/nos, votre/vos, leur/leurs</i>. Devant un nom féminin commençant par une voyelle, <i>ma, ta, sa</i> deviennent <strong>mon, ton, son</strong> (ex: <i>mon amie, son école</i>).</p>
    `,
    questions: [
      {
        id: "a1-8-q1",
        prompt: "Regarde _____ bel oiseau dans _____ arbre !",
        options: [
          "ce / cet",
          "cet / ce",
          "ce / ce",
          "cette / cet"
        ],
        correct: 0,
        explanation: "'Bel' commence par une consonne → 'ce bel oiseau'. 'Arbre' est masculin commençant par une voyelle → 'cet arbre'."
      },
      {
        id: "a1-8-q2",
        prompt: "Julie va à la fête avec _____ amie espagnole.",
        options: [
          "son",
          "sa",
          "ses",
          "cette"
        ],
        correct: 0,
        explanation: "'Amie' est féminin mais commence par une voyelle, on remplace donc 'sa' par 'son' pour des raisons euphoniques."
      },
      {
        id: "a1-8-q3",
        prompt: "_____ veste et _____ gants appartiennent à Thomas.",
        options: [
          "Cette / ces",
          "Ce / ces",
          "Cet / ces",
          "Cette / ses"
        ],
        correct: 0,
        explanation: "'Veste' est un nom féminin singulier ('cette') et 'gants' est au pluriel ('ces')."
      },
      {
        id: "a1-8-q4",
        prompt: "Les étudiants ont oublié _____ ordinateurs dans _____ salle de classe.",
        options: [
          "leurs / leur",
          "leur / leur",
          "leurs / leurs",
          "ses / sa"
        ],
        correct: 0,
        explanation: "'Ordinateurs' est au pluriel → 'leurs', et 'salle' est au singulier → 'leur salle'."
      },
      {
        id: "a1-8-q5",
        prompt: "_____ hôtel est très confortable et _____ chambres sont spacieuses.",
        options: [
          "Cet / ses",
          "Ce / ses",
          "Cette / leurs",
          "Cet / leur"
        ],
        correct: 0,
        explanation: "'Hôtel' est masculin avec un h muet → 'Cet hôtel'. 'Chambres' est au pluriel → 'ses chambres'."
      },
      {
        id: "a1-8-q6",
        prompt: "Est-ce que c'est _____ adresse électronique personnelle ?",
        options: [
          "ton",
          "ta",
          "tes",
          "ce"
        ],
        correct: 0,
        explanation: "Devant le nom féminin 'adresse' commençant par une voyelle, on emploie 'ton' au lieu de 'ta'."
      }
    ]
  },
  {
    id: "a1-present-indicatif",
    title: "A1.9 Le Présent de l'Indicatif (Groupes & Verbes Clés)",
    level: "🟢 Niveau A1",
    levelCode: "A1",
    category: "conjugaison",
    ruleTitle: "1er, 2e, 3e groupe & Être, Avoir, Faire, Aller",
    ruleContent: `
      <p><strong>1er groupe (-er) :</strong> terminaisons <i>-e, -es, -e, -ons, -ez, -ent</i> (ex: <i>parler → je parle, nous parlons, ils parlent</i>).</p>
      <p><strong>2e groupe (-ir avec -issons) :</strong> <i>-is, -is, -it, -issons, -issez, -issent</i> (ex: <i>finir → nous finissons</i>).</p>
      <p><strong>Verbes irréguliers essentiels :</strong></p>
      <ul>
        <li><strong>Être :</strong> <i>suis, es, est, sommes, êtes, sont</i>.</li>
        <li><strong>Avoir :</strong> <i>ai, as, a, avons, avez, ont</i>.</li>
        <li><strong>Faire :</strong> <i>fais, fais, fait, faisons, faites, font</i>.</li>
        <li><strong>Aller :</strong> <i>vais, vas, va, allons, allez, vont</i>.</li>
      </ul>
    `,
    questions: [
      {
        id: "a1-9-q1",
        prompt: "Vous _____ du sport pendant que les enfants _____ au parc.",
        options: [
          "faites / vont",
          "faisez / vont",
          "faites / vas",
          "faisons / vont"
        ],
        correct: 0,
        explanation: "La 2e personne du pluriel de 'faire' est 'vous faites' (et non faisez !), et la 3e du pluriel d'aller est 'ils vont'."
      },
      {
        id: "a1-9-q2",
        prompt: "Nous _____ nos devoirs et nous _____ à l'examen.",
        options: [
          "finissons / réussissons",
          "finisons / réussisons",
          "finissons / réussissons",
          "finissons / réussit"
        ],
        correct: 0,
        explanation: "Les verbes du 2e groupe prennent l'infixe '-iss-' au pluriel : 'nous finissons', 'nous réussissons'."
      },
      {
        id: "a1-9-q3",
        prompt: "Ils _____ très heureux parce qu'ils _____ de bonnes nouvelles.",
        options: [
          "sont / ont",
          "ont / sont",
          "sommes / ont",
          "sont / sont"
        ],
        correct: 0,
        explanation: "'Ils sont' (verbe être au présent) et 'ils ont' (verbe avoir au présent)."
      },
      {
        id: "a1-9-q4",
        prompt: "Où _____ -tu et que _____ -vous faire ce week-end ?",
        options: [
          "vas / voulez",
          "vais / voulez",
          "vas / voulez-vous",
          "va / voulons"
        ],
        correct: 0,
        explanation: "'Tu vas' (verbe aller) et 'vous voulez' (verbe vouloir)."
      },
      {
        id: "a1-9-q5",
        prompt: "Elle _____ toujours la vérité à ses parents.",
        options: [
          "dit",
          "dis",
          "dites",
          "dise"
        ],
        correct: 0,
        explanation: "Le verbe 'dire' à la 3e personne du singulier au présent est 'elle dit'."
      },
      {
        id: "a1-9-q6",
        prompt: "Nous _____ le train de huit heures pour aller travailler.",
        options: [
          "prenons",
          "prennons",
          "prendons",
          "prenez"
        ],
        correct: 0,
        explanation: "Le verbe 'prendre' perd son 'd' et prend un seul 'n' à la première personne du pluriel : 'nous prenons'."
      }
    ]
  },
  {
    id: "a1-passe-recent-futur-proche",
    title: "A1.10 Passé Récent, Futur Proche & Impératif",
    level: "🟢 Niveau A1",
    levelCode: "A1",
    category: "conjugaison",
    ruleTitle: "Venir de + inf / Aller + inf / Ordres",
    ruleContent: `
      <p><strong>Passé récent (action accomplie juste avant) :</strong> Venir (conjugué au présent) + <strong>de</strong> + Infinitif. Ex: <i>Je viens de terminer mon café.</i></p>
      <p><strong>Futur proche (action imminente ou projet certain) :</strong> Aller (conjugué au présent) + Infinitif. Ex: <i>Nous allons partir en voyage.</i></p>
      <p><strong>Impératif présent (conseil ou ordre) :</strong> Seulement 3 personnes (<i>tu, nous, vous</i>). Les verbes en <i>-er</i> perdent le <i>-s</i> à la 2e personne du singulier (ex: <i>Parle ! Écoute !</i> mais <i>Finis ! Prends !</i>).</p>
    `,
    questions: [
      {
        id: "a1-10-q1",
        prompt: "Attention, le train _____ partir ! _____ vite !",
        options: [
          "va / Monte",
          "vient de / Montres",
          "va / Montes",
          "aller / Monte"
        ],
        correct: 0,
        explanation: "'Va partir' exprime le futur proche, et à l'impératif, les verbes en -er perdent le -s à la 2e personne : 'Monte !'."
      },
      {
        id: "a1-10-q2",
        prompt: "Nous _____ d'arriver à la gare il y a deux minutes.",
        options: [
          "venons",
          "allons",
          "venez",
          "venions"
        ],
        correct: 0,
        explanation: "Le passé récent se construit avec 'venir au présent + de + infinitif' : 'Nous venons d'arriver'."
      },
      {
        id: "a1-10-q3",
        prompt: "_____ cette porte et _____ vos manteaux !",
        options: [
          "Fermez / enlevez",
          "Fermez / enlèves",
          "Fermes / enlevez",
          "Fermer / enlever"
        ],
        correct: 0,
        explanation: "À l'impératif à la 2e personne du pluriel 'vous', les terminaisons régulières sont en '-ez' : 'Fermez', 'enlevez'."
      },
      {
        id: "a1-10-q4",
        prompt: "Demain soir, mes amis _____ assister à un concert.",
        options: [
          "vont",
          "viennent de",
          "allez",
          "ira"
        ],
        correct: 0,
        explanation: "Pour une action future prévue demain, on emploie le futur proche 'vont assister'."
      },
      {
        id: "a1-10-q5",
        prompt: "_____ tes légumes si tu veux grandir !",
        options: [
          "Mange",
          "Manges",
          "Manger",
          "Mangez"
        ],
        correct: 0,
        explanation: "À l'impératif singulier (tu), les verbes du 1er groupe en '-er' s'écrivent sans '-s' : 'Mange !'."
      },
      {
        id: "a1-10-q6",
        prompt: "Ne t'inquiète pas, je _____ de téléphoner au médecin, il arrive.",
        options: [
          "viens",
          "vais",
          "viendrais",
          "venais"
        ],
        correct: 0,
        explanation: "Le passé récent à la première personne est 'je viens de + infinitif'."
      }
    ]
  },
  {
    id: "a1-orthographe-accents-elision",
    title: "A1.11 Accents, Cédille & Élision",
    level: "🟢 Niveau A1",
    levelCode: "A1",
    category: "orthographe",
    ruleTitle: "É, È, Ê, Cédille (Ç) & Apostrophe",
    ruleContent: `
      <p><strong>L'accent aigu (é) :</strong> Son [e] fermé (ex: <i>été, café, vérité</i>).</p>
      <p><strong>L'accent grave (è, à, où) :</strong> Son [ɛ] ouvert (ex: <i>père, mère, frère</i>) ou distinction homophonique (<i>a/à, ou/où, la/là</i>).</p>
      <p><strong>L'accent circonflexe (â, ê, î, ô, û) :</strong> Trace souvent d'un ancien 's' disparu (ex: <i>forêt → forestier, hôpital → hospitalier</i>).</p>
      <p><strong>La cédille (ç) :</strong> Permet à la lettre 'c' de faire le son [s] devant les voyelles <i>a, o, u</i> (ex: <i>français, leçon, reçu</i>). Devant <i>e</i> et <i>i</i>, le 'c' fait déjà le son [s], donc pas de cédille (ex: <i>merci, océan</i>).</p>
      <p><strong>L'élision :</strong> Remplacement d'une voyelle finale par une apostrophe devant voyelle (<i>l'arbre, j'aime, qu'il</i>).</p>
    `,
    questions: [
      {
        id: "a1-11-q1",
        prompt: "Choisissez la graphie orthographique exacte :",
        options: [
          "Nous commençons notre leçon de français.",
          "Nous commencons notre lecon de francais.",
          "Nous commençons notre lecon de français.",
          "Nous commençons notre leçon de francais."
        ],
        correct: 0,
        explanation: "Devant 'o' et 'a', le 'c' a besoin d'une cédille pour se prononcer [s] : 'commençons', 'leçon', 'français'."
      },
      {
        id: "a1-11-q2",
        prompt: "Pourquoi le mot 'hôpital' porte-t-il un accent circonflexe sur le 'o' ?",
        options: [
          "Pour marquer la disparition historique du 's' (ancien français 'hospital').",
          "Pour indiquer que le mot est féminin.",
          "Pour allonger le son de la consonne 'p'.",
          "Parce qu'il s'agit d'un mot emprunté à l'anglais."
        ],
        correct: 0,
        explanation: "L'accent circonflexe rappelle la présence du 's' étymologique que l'on retrouve dans 'hospitalier' ou 'hospitalisation'."
      },
      {
        id: "a1-11-q3",
        prompt: "Complétez : '_____ vas-tu et _____ vas-tu ?'",
        options: [
          "Où / comment",
          "Ou / comment",
          "Où / commentç",
          "Ou / comment"
        ],
        correct: 0,
        explanation: "'Où' avec accent grave indique le lieu, alors que 'ou' sans accent est la conjonction de coordination de choix."
      },
      {
        id: "a1-11-q4",
        prompt: "Indiquez le mot qui NE DOIT PAS prendre de cédille :",
        options: [
          "merci",
          "garçon",
          "français",
          "façade"
        ],
        correct: 0,
        explanation: "Devant la voyelle 'i', la lettre 'c' se prononce déjà spontanément [s], la cédille est donc inutile et fautive."
      },
      {
        id: "a1-11-q5",
        prompt: "Quelle phrase illustre l'élision obligatoire correcte ?",
        options: [
          "J'adore l'histoire qu'il raconte.",
          "Je adore la histoire que il raconte.",
          "J'adore la histoire qu'il raconte.",
          "Je adore l'histoire que il raconte."
        ],
        correct: 0,
        explanation: "L'élision est obligatoire pour 'Je adore' → 'J'adore', 'la histoire' → 'l'histoire' et 'que il' → 'qu'il'."
      },
      {
        id: "a1-11-q6",
        prompt: "Complétez avec les accents adéquats : 'Mon p___re et mon fr___re habitent pr___s d'ici.'",
        options: [
          "père / frère / près",
          "pére / frére / prés",
          "pêre / frêre / pres",
          "père / frère / prés"
        ],
        correct: 0,
        explanation: "Les mots 'père', 'frère' et la préposition 'près' s'écrivent tous avec un accent grave (è)."
      }
    ]
  },

  // =========================================================================
  // NIVEAU A2 : ÉLÉMENTAIRE (10 LEÇONS - 60 QUESTIONS)
  // =========================================================================
  {
    id: "a2-pronoms-cod-coi",
    title: "A2.1 Pronoms Compléments (COD & COI)",
    level: "🟡 Niveau A2",
    levelCode: "A2",
    category: "grammaire",
    ruleTitle: "Me, Te, Le, La, Les / Lui, Leur",
    ruleContent: `
      <p><strong>Pronoms COD (Complément d'Objet Direct - sans préposition) :</strong></p>
      <p><i>me, te, le, la, l', nous, vous, les</i>. Ex: <i>Tu regardes le film ? - Oui, je le regarde.</i></p>
      <p><strong>Pronoms COI (Complément d'Objet Indirect avec la préposition 'à' pour une personne) :</strong></p>
      <p><i>me, te, lui (masc./fém. singulier), nous, vous, leur (pluriel)</i>. Ex: <i>Tu téléphones à ta sœur ? - Oui, je lui téléphone. Tu écris à tes amis ? - Oui, je leur écris.</i></p>
      <p><strong>Place du pronom :</strong> Le pronom se place toujours <strong>avant le verbe conjugué</strong> (ou avant l'auxiliaire au passé composé). À l'impératif affirmatif, il se place après le verbe avec un trait d'union (<i>Écoute-moi ! Donne-lui le livre !</i>).</p>
    `,
    questions: [
      {
        id: "a2-1-q1",
        prompt: "Tu as envoyé les invitations à tes collègues ? - Oui, je _____ ai envoyées ce matin.",
        options: [
          "les leur",
          "leur les",
          "les lui",
          "leur"
        ],
        correct: 0,
        explanation: "L'ordre des pronoms devant le verbe est COD (les) puis COI de 3e personne (leur) : 'je les leur ai envoyées'."
      },
      {
        id: "a2-1-q2",
        prompt: "Tu as téléphoné à ta mère hier soir ? - Oui, je _____ ai parlé pendant une heure.",
        options: [
          "lui",
          "la",
          "l'",
          "leur"
        ],
        correct: 0,
        explanation: "'Parler à quelqu'un' est un verbe à COI. On remplace 'à ma mère' par le pronom COI singulier 'lui'."
      },
      {
        id: "a2-1-q3",
        prompt: "Ces magnifiques fleurs ? Je _____ offre à ma fiancée.",
        options: [
          "les lui",
          "la lui",
          "lui les",
          "les leur"
        ],
        correct: 0,
        explanation: "'Ces fleurs' (COD = les) et 'à ma fiancée' (COI = lui) → 'Je les lui offre'."
      },
      {
        id: "a2-1-q4",
        prompt: "Ne _____ dis pas la vérité tout de suite, attends un peu !",
        options: [
          "lui",
          "le",
          "la",
          "l'"
        ],
        correct: 0,
        explanation: "'Dire à quelqu'un' se construit avec un COI : 'Ne lui dis pas'."
      },
      {
        id: "a2-1-q5",
        prompt: "Ce roman policier est passionnant, je _____ recommande vivement !",
        options: [
          "le te",
          "te le",
          "le lui",
          "toi le"
        ],
        correct: 1,
        explanation: "L'ordre des pronoms met la 2e personne 'te' avant le COD 'le' : 'je te le recommande'."
      },
      {
        id: "a2-1-q6",
        prompt: "À l'impératif affirmatif : 'Donne ce dossier à Marc !' devient :",
        options: [
          "Donne-le-lui !",
          "Donne-lui-le !",
          "Donne le lui !",
          "Le lui donne !"
        ],
        correct: 0,
        explanation: "À l'impératif affirmatif avec deux pronoms, l'ordre est Verbe-COD-COI reliés par des traits d'union : 'Donne-le-lui !'."
      }
    ]
  },
  {
    id: "a2-relatifs-simples",
    title: "A2.2 Pronoms Relatifs Simples (Qui, Que, Où, Dont)",
    level: "🟡 Niveau A2",
    levelCode: "A2",
    category: "grammaire",
    ruleTitle: "Qui (Sujet), Que (COD), Où (Lieu/Temps), Dont (Complément de De)",
    ruleContent: `
      <p>Les pronoms relatifs permettent de relier deux propositions sans répéter le nom antécédent :</p>
      <ul>
        <li><strong>Qui :</strong> Remplace le <strong>sujet</strong> (suivi d'un verbe). Ex: <i>L'homme qui parle est mon père.</i></li>
        <li><strong>Que (qu') :</strong> Remplace le <strong>COD</strong> (suivi d'un sujet + verbe). Ex: <i>Le livre que je lis est passionnant.</i></li>
        <li><strong>Où :</strong> Remplace un <strong>complément de lieu ou de temps</strong>. Ex: <i>La ville où j'habite ; le jour où nous sommes arrivés.</i></li>
        <li><strong>Dont :</strong> Remplace un <strong>complément introduit par 'de'</strong> (verbes comme <i>parler de, avoir besoin de, avoir envie de, se souvenir de</i> ou compléments du nom). Ex: <i>Le projet dont nous parlons est ambitieux.</i></li>
      </ul>
    `,
    questions: [
      {
        id: "a2-2-q1",
        prompt: "C'est l'écrivain _____ a reçu le prix Nobel et _____ tout le monde admire les œuvres.",
        options: [
          "qui / dont",
          "que / dont",
          "qui / que",
          "dont / que"
        ],
        correct: 0,
        explanation: "'Qui' est sujet de 'a reçu', et 'dont' remplace le complément du nom avec 'de' ('les œuvres de cet écrivain')."
      },
      {
        id: "a2-2-q2",
        prompt: "Le village _____ je suis né se trouve dans une région _____ attire beaucoup d'artistes.",
        options: [
          "où / qui",
          "que / qui",
          "où / que",
          "dont / où"
        ],
        correct: 0,
        explanation: "'Où' indique le lieu de naissance, et 'qui' est sujet du verbe 'attire'."
      },
      {
        id: "a2-2-q3",
        prompt: "Voici l'ordinateur _____ j'ai besoin pour terminer mon travail.",
        options: [
          "dont",
          "que",
          "qui",
          "où"
        ],
        correct: 0,
        explanation: "L'expression est 'avoir besoin de'. Le complément de 'de' est donc remplacé par le pronom relatif 'dont'."
      },
      {
        id: "a2-2-q4",
        prompt: "La tarte aux pommes _____ ma grand-mère a préparée est délicieuse.",
        options: [
          "que",
          "qui",
          "dont",
          "où"
        ],
        correct: 0,
        explanation: "'Que' est le pronom relatif COD qui complète 'a préparée' (sujet = ma grand-mère)."
      },
      {
        id: "a2-2-q5",
        prompt: "Je me souviens très bien du jour _____ nous nous sommes rencontrés.",
        options: [
          "où",
          "que",
          "quand",
          "dont"
        ],
        correct: 0,
        explanation: "Pour marquer le complément de temps après un nom comme 'le jour, l'année, le moment', on emploie 'où'."
      },
      {
        id: "a2-2-q6",
        prompt: "L'entreprise _____ il travaille propose d'excellentes conditions sociales.",
        options: [
          "où",
          "qui",
          "que",
          "dont"
        ],
        correct: 0,
        explanation: "'Où' remplace le complément de lieu 'dans cette entreprise'."
      }
    ]
  },
  {
    id: "a2-pronoms-en-y",
    title: "A2.3 Pronoms EN et Y",
    level: "🟡 Niveau A2",
    levelCode: "A2",
    category: "grammaire",
    ruleTitle: "EN (De / Quantités) & Y (À / Lieux)",
    ruleContent: `
      <p><strong>Le pronom EN :</strong></p>
      <ul>
        <li>Remplace un nom précédé d'un article partitif (<i>du, de la, des</i>) ou indéfini (<i>des</i>). Ex: <i>Tu bois du thé ? - Oui, j'en bois.</i></li>
        <li>Remplace un nom précédé d'une quantité ou d'un nombre (le nombre est répété à la fin). Ex: <i>Tu as trois frères ? - Oui, j'en ai trois.</i></li>
        <li>Remplace un complément introduit par 'de' avec une chose/idée. Ex: <i>Tu parles de ton travail ? - Oui, j'en parle.</i></li>
      </ul>
      <p><strong>Le pronom Y :</strong></p>
      <ul>
        <li>Remplace un complément de lieu (<i>à, en, dans, sur, chez</i>). Ex: <i>Tu vas à Paris ? - Oui, j'y vais.</i></li>
        <li>Remplace un complément introduit par 'à' avec une chose/idée. Ex: <i>Tu penses à ton avenir ? - Oui, j'y pense.</i></li>
      </ul>
    `,
    questions: [
      {
        id: "a2-3-q1",
        prompt: "Tu vas souvent au musée ? - Oui, j'___ vais souvent et j'___ apprécie beaucoup les expositions.",
        options: [
          "y / en",
          "en / y",
          "y / y",
          "en / les"
        ],
        correct: 0,
        explanation: "'Au musée' est un lieu introduit par 'à' → 'j'y vais'. 'Les expositions de ce musée' est un complément de nom avec 'de' → 'j'en apprécie les expositions'."
      },
      {
        id: "a2-3-q2",
        prompt: "Combien de tasses de café bois-tu par jour ? - J'_____ bois deux.",
        options: [
          "en",
          "y",
          "les",
          "la"
        ],
        correct: 0,
        explanation: "Pour exprimer une quantité chiffrée ('deux tasses de café'), on emploie le pronom 'en' en rappelant le nombre 'deux' en fin de phrase."
      },
      {
        id: "a2-3-q3",
        prompt: "Tu as déjà pensé à changer de carrière professionnelle ? - Oui, j'_____ pense souvent.",
        options: [
          "y",
          "en",
          "lui",
          "le"
        ],
        correct: 0,
        explanation: "'Penser à + chose/idée' est remplacé par le pronom adverbial 'y' ('j'y pense')."
      },
      {
        id: "a2-3-q4",
        prompt: "Est-ce qu'il reste du pain frais sur la table ? - Non, il n'_____ reste plus.",
        options: [
          "en",
          "y",
          "le",
          "lui"
        ],
        correct: 0,
        explanation: "Le partitif 'du pain' est remplacé par le pronom 'en' : 'il n'en reste plus'."
      },
      {
        id: "a2-3-q5",
        prompt: "Vous participez à ce projet humanitaire ? - Oui, nous _____ participons activement.",
        options: [
          "y",
          "en",
          "le",
          "lui"
        ],
        correct: 0,
        explanation: "'Participer à + chose' se remplace par 'y' ('nous y participons')."
      },
      {
        id: "a2-3-q6",
        prompt: "Il revient de vacances à Rome ? - Oui, il _____ revient tout juste ce matin.",
        options: [
          "en",
          "y",
          "le",
          "d'y"
        ],
        correct: 0,
        explanation: "'Revenir de + lieu' exprime la provenance avec 'de', ce qui exige le pronom 'en' ('il en revient')."
      }
    ]
  },
  {
    id: "a2-comparaison-superlatif",
    title: "A2.4 La Comparaison et le Superlatif",
    level: "🟡 Niveau A2",
    levelCode: "A2",
    category: "grammaire",
    ruleTitle: "Plus... que, Moins... que, Aussi... que / Meilleur vs Mieux",
    ruleContent: `
      <p><strong>La comparaison :</strong></p>
      <ul>
        <li><strong>Avec un adjectif/adverbe :</strong> <i>plus / aussi / moins + adjectif + que</i> (ex: <i>Paul est plus grand que Marc</i>).</li>
        <li><strong>Avec un nom :</strong> <i>plus de / autant de / moins de + nom + que</i> (ex: <i>Elle a autant de travail que moi</i>).</li>
        <li><strong>Avec un verbe :</strong> <i>verbe + plus / autant / moins + que</i> (ex: <i>Il travaille autant que son frère</i>).</li>
      </ul>
      <p><strong>Irréguliers clés :</strong></p>
      <ul>
        <li><i>Bon (adjectif) → Meilleur(e)(s)</i> (ex: <i>Ce vin est meilleur que l'autre</i>).</li>
        <li><i>Bien (adverbe) → Mieux</i> (ex: <i>Elle chante mieux que lui</i>).</li>
        <li><i>Le/La/Les meilleur(e)(s)</i> (Superlatif de bon) vs <i>Le mieux</i> (Superlatif de bien).</li>
      </ul>
    `,
    questions: [
      {
        id: "a2-4-q1",
        prompt: "Ce nouveau restaurant est _____ que l'ancien, et le chef cuisine _____ qu'avant.",
        options: [
          "meilleur / mieux",
          "mieux / meilleur",
          "plus bon / plus bien",
          "meilleur / meilleur"
        ],
        correct: 0,
        explanation: "'Meilleur' est le comparatif de l'adjectif 'bon' (qualifie le restaurant) et 'mieux' est le comparatif de l'adverbe 'bien' (qualifie le verbe cuisine)."
      },
      {
        id: "a2-4-q2",
        prompt: "En hiver, il y a _____ touristes qu'en été sur la côte d'Azur.",
        options: [
          "moins de",
          "moins",
          "aussi de",
          "meilleur"
        ],
        correct: 0,
        explanation: "Devant un nom ('touristes'), le comparatif de quantité exige la préposition 'de' : 'moins de... que'."
      },
      {
        id: "a2-4-q3",
        prompt: "Sophie gagne _____ d'argent que son collègue, mais elle a _____ d'heures de repos.",
        options: [
          "autant / plus",
          "aussi / plus",
          "autant / plus de",
          "autant de / aussi"
        ],
        correct: 0,
        explanation: "Devant un nom, on dit 'autant d'argent' et 'plus d'heures'."
      },
      {
        id: "a2-4-q4",
        prompt: "C'est _____ gâteau au chocolat que j'ai jamais mangé !",
        options: [
          "le meilleur",
          "le mieux",
          "le plus bon",
          "le plus bien"
        ],
        correct: 0,
        explanation: "Le superlatif de supériorité de l'adjectif 'bon' est 'le meilleur'."
      },
      {
        id: "a2-4-q5",
        prompt: "Après ces cours de français, il s'exprime beaucoup _____ à l'oral.",
        options: [
          "mieux",
          "meilleur",
          "plus bon",
          "le meilleur"
        ],
        correct: 0,
        explanation: "Pour qualifier la manière dont s'exécute le verbe 's'exprime', on utilise l'adverbe comparatif 'mieux'."
      },
      {
        id: "a2-4-q6",
        prompt: "Cette voiture est _____ rapide que le train sur ce trajet.",
        options: [
          "aussi",
          "autant",
          "autant de",
          "plus de"
        ],
        correct: 0,
        explanation: "Devant un adjectif ('rapide'), on exprime l'égalité avec l'adverbe 'aussi... que'."
      }
    ]
  },
  {
    id: "a2-negation-complexe",
    title: "A2.5 La Négation Complexe",
    level: "🟡 Niveau A2",
    levelCode: "A2",
    category: "grammaire",
    ruleTitle: "Ne... rien, Ne... personne, Ne... jamais, Ne... plus, Ne... aucun",
    ruleContent: `
      <p>La négation complexe remplace 'pas' par un terme spécifique :</p>
      <ul>
        <li><i>Ne ... jamais</i> (contraire de toujours, souvent). Ex: <i>Je ne fume jamais.</i></li>
        <li><i>Ne ... plus</i> (contraire de encore, toujours). Ex: <i>Il n'habite plus ici.</i></li>
        <li><i>Ne ... rien</i> (contraire de quelque chose, tout). Ex: <i>Je n'ai rien vu.</i> Peut être sujet : <i>Rien n'est facile.</i></li>
        <li><i>Ne ... personne</i> (contraire de quelqu'un, tout le monde). Ex: <i>Je n'ai vu personne.</i> Place particulière au passé composé : <i>personne</i> se place APRÈS le participe passé ! Peut être sujet : <i>Personne n'est venu.</i></li>
        <li><i>Ne ... aucun(e)</i> (exprime une quantité nulle avec un nom singulier). Ex: <i>Il n'a aucune idée.</i></li>
      </ul>
    `,
    questions: [
      {
        id: "a2-5-q1",
        prompt: "Tu as vu quelqu'un dans le couloir ? - Non, je n'ai vu _____ et il n'y a _____ bruit.",
        options: [
          "personne / aucun",
          "rien / aucun",
          "personne / pas de",
          "aucun / personne"
        ],
        correct: 0,
        explanation: "'Quelqu'un' a pour négation 'personne' (qui se place après le participe passé), et 'aucun bruit' marque l'absence totale avec le nom masculin singulier."
      },
      {
        id: "a2-5-q2",
        prompt: "Est-ce qu'il reste encore du café dans la cafetière ? - Non, il n'y en a _____ .",
        options: [
          "plus",
          "jamais",
          "rien",
          "personne"
        ],
        correct: 0,
        explanation: "'Ne... plus' est l'antonyme exact de 'encore'."
      },
      {
        id: "a2-5-q3",
        prompt: "Qu'est-ce qui se passe ? - Rassure-toi, _____ n'est grave !",
        options: [
          "rien",
          "personne",
          "aucun",
          "jamais"
        ],
        correct: 0,
        explanation: "En position de sujet, 'rien ne...' s'emploie pour désigner une chose ou un événement."
      },
      {
        id: "a2-5-q4",
        prompt: "Qui est venu frapper à la porte ? - _____ n'est venu.",
        options: [
          "Personne",
          "Rien",
          "Aucun",
          "Jamais"
        ],
        correct: 0,
        explanation: "En position de sujet pour désigner une personne, on emploie 'Personne ne...'."
      },
      {
        id: "a2-5-q5",
        prompt: "Au passé composé, choisissez la phrase correctement construite :",
        options: [
          "Je n'ai rencontré personne à la bibliothèque.",
          "Je n'ai personne rencontré à la bibliothèque.",
          "Je ne personne ai rencontré à la bibliothèque.",
          "Personne je n'ai rencontré à la bibliothèque."
        ],
        correct: 0,
        explanation: "Règle essentielle : au passé composé, 'personne' se place après le participe passé ('n'ai rencontré personne')."
      },
      {
        id: "a2-5-q6",
        prompt: "Elle est très déçue, elle n'a _____ envie de participer à ce voyage.",
        options: [
          "aucune",
          "aucun",
          "rien",
          "jamais"
        ],
        correct: 0,
        explanation: "'Envie' est un nom féminin singulier, on emploie donc l'adjectif indéfini négatif 'aucune'."
      }
    ]
  },
  {
    id: "a2-expression-temps",
    title: "A2.6 L'Expression du Temps",
    level: "🟡 Niveau A2",
    levelCode: "A2",
    category: "grammaire",
    ruleTitle: "Depuis, Pendant, En, Dans, Pour, Il y a",
    ruleContent: `
      <p><strong>Les marqueurs temporels essentiels :</strong></p>
      <ul>
        <li><strong>Depuis :</strong> Action commencée dans le passé et qui CONTINUE dans le présent (+ verbe au présent). Ex: <i>J'habite à Lyon depuis trois ans.</i></li>
        <li><strong>Pendant :</strong> Durée complète d'une action terminée ou habituelle. Ex: <i>J'ai vécu à Rome pendant deux ans.</i></li>
        <li><strong>Il y a :</strong> Moment précis dans le passé (+ verbe au passé composé). Ex: <i>Il est parti il y a dix minutes.</i></li>
        <li><strong>Dans :</strong> Moment futur où commencera l'action (+ verbe au futur). Ex: <i>Le train part dans dix minutes.</i></li>
        <li><strong>En :</strong> Temps nécessaire pour accomplir une action. Ex: <i>Il a fini ce test en 20 minutes.</i></li>
        <li><strong>Pour :</strong> Durée prévue d'un projet futur. Ex: <i>Je pars en stage pour six mois.</i></li>
      </ul>
    `,
    questions: [
      {
        id: "a2-6-q1",
        prompt: "J'étudie le français _____ six mois, mais je suis arrivé en France _____ deux semaines seulement.",
        options: [
          "depuis / il y a",
          "pendant / depuis",
          "il y a / dans",
          "depuis / pour"
        ],
        correct: 0,
        explanation: "'Depuis' s'associe au présent pour une action continue ('j'étudie depuis'), et 'il y a' marque un moment révolu dans le passé ('je suis arrivé il y a')."
      },
      {
        id: "a2-6-q2",
        prompt: "Ne partez pas, la conférence commence _____ un quart d'heure !",
        options: [
          "dans",
          "en",
          "depuis",
          "pendant"
        ],
        correct: 0,
        explanation: "'Dans' indique le délai avant le début d'une action future."
      },
      {
        id: "a2-6-q3",
        prompt: "Cet athlète d'exception court le 100 mètres _____ moins de dix secondes.",
        options: [
          "en",
          "dans",
          "pendant",
          "depuis"
        ],
        correct: 0,
        explanation: "'En' exprime la durée nécessaire et suffisante pour accomplir une performance."
      },
      {
        id: "a2-6-q4",
        prompt: "Nous avons habité au Canada _____ cinq ans avant de rentrer en France.",
        options: [
          "pendant",
          "depuis",
          "il y a",
          "en"
        ],
        correct: 0,
        explanation: "Pour une action totalement achevée dans le passé, on emploie 'pendant' avec le passé composé."
      },
      {
        id: "a2-6-q5",
        prompt: "Elle a réservé cet appartement à la mer _____ un mois complet cet été.",
        options: [
          "pour",
          "depuis",
          "en",
          "il y a"
        ],
        correct: 0,
        explanation: "'Pour' indique une durée projetée ou prévue à l'avance."
      },
      {
        id: "a2-6-q6",
        prompt: "Le directeur a signé ce contrat important _____ trois jours.",
        options: [
          "il y a",
          "depuis",
          "dans",
          "en"
        ],
        correct: 0,
        explanation: "'Il y a trois jours' situe un événement ponctuel accompli dans le passé."
      }
    ]
  },
  {
    id: "a2-passe-compose-imparfait-detail",
    title: "A2.7 Passé Composé & Imparfait dans le Récit",
    level: "🟡 Niveau A2",
    levelCode: "A2",
    category: "conjugaison",
    ruleTitle: "Actions Ponctuelles vs Description & Habitude",
    ruleContent: `
      <p>Dans un récit au passé, la distinction entre passé composé et imparfait est fondamentale :</p>
      <ul>
        <li><strong>L'Imparfait :</strong> Décor, cadre, description physique ou psychologique, météo, action en cours non délimitée dans le temps, habitude passée. Ex: <i>Il faisait beau, les oiseaux chantaient et je lisais tranquillement.</i></li>
        <li><strong>Le Passé Composé :</strong> Événement soudain, action ponctuelle qui fait avancer l'histoire, action délimitée avec début et fin précis. Ex: <i>Soudain, le téléphone a sonné et je me suis levé.</i></li>
      </ul>
      <p><strong>Accord du participe passé :</strong> Avec <i>Être</i>, accord obligatoire avec le sujet (<i>Elle est partie</i>). Avec <i>Avoir</i>, pas d'accord avec le sujet (<i>Elle a mangé</i>).</p>
    `,
    questions: [
      {
        id: "a2-7-q1",
        prompt: "Pendant que nous _____ tranquillement dans le parc, un orage violent _____ soudainement.",
        options: [
          "nous promenions / a éclaté",
          "nous sommes promenés / éclatait",
          "nous promenions / éclatait",
          "nous sommes promenés / a éclaté"
        ],
        correct: 0,
        explanation: "L'action continue en arrière-plan est à l'imparfait ('nous nous promenions') et l'événement soudain est au passé composé ('a éclaté')."
      },
      {
        id: "a2-7-q2",
        prompt: "Quand j'_____ enfant, nous _____ chaque été chez nos grands-parents en Bretagne.",
        options: [
          "étais / allions",
          "ai été / sommes allés",
          "étais / sommes allés",
          "ai été / allions"
        ],
        correct: 0,
        explanation: "L'état passé durable ('quand j'étais enfant') et l'habitude répétée ('chaque été') s'expriment à l'imparfait ('allions')."
      },
      {
        id: "a2-7-q3",
        prompt: "Hier à 18h, Marie _____ son manteau et _____ le bureau.",
        options: [
          "a mis / a quitté",
          "mettait / quittait",
          "a mis / quittait",
          "mettait / a quitté"
        ],
        correct: 0,
        explanation: "Il s'agit d'une succession d'actions ponctuelles et consécutives qui font avancer le récit au passé composé."
      },
      {
        id: "a2-7-q4",
        prompt: "Il _____ nuit et il _____ froid lorsque nous sommes arrivés au refuge.",
        options: [
          "faisait / faisait",
          "a fait / a fait",
          "faisait / a fait",
          "a fait / faisait"
        ],
        correct: 0,
        explanation: "La description du décor ambiant et de la météo dans le passé exige l'imparfait ('faisait nuit', 'faisait froid')."
      },
      {
        id: "a2-7-q5",
        prompt: "Elles _____ à l'heure à la gare, mais le train _____ dix minutes de retard.",
        options: [
          "sont arrivées / avait",
          "ont arrivé / a eu",
          "sont arrivé / avait",
          "arrivaient / a eu"
        ],
        correct: 0,
        explanation: "'Arriver' se conjugue avec l'auxiliaire être et s'accorde au féminin pluriel ('sont arrivées'), l'état du train est à l'imparfait ('avait')."
      },
      {
        id: "a2-7-q6",
        prompt: "Je lisais un livre passionnant quand mon ami m'_____ .",
        options: [
          "a appelé",
          "appelait",
          "a appele",
          "avait appelé"
        ],
        correct: 0,
        explanation: "L'appel téléphonique interrompt ponctuellement l'action de lecture en cours : passé composé obligatoire ('a appelé')."
      }
    ]
  },
  {
    id: "a2-futur-conditionnel-politesse",
    title: "A2.8 Futur Simple & Conditionnel de Politesse",
    level: "🟡 Niveau A2",
    levelCode: "A2",
    category: "conjugaison",
    ruleTitle: "Radical en -r- & Terminaisons",
    ruleContent: `
      <p><strong>Formation du Futur Simple :</strong> Infinitif (ou radical irrégulier en -r) + terminaisons de 'avoir' : <i>-ai, -as, -a, -ons, -ez, -ont</i>. Ex: <i>Je parlerai, nous finirons, ils partiront.</i></p>
      <p><strong>Formation du Conditionnel Présent :</strong> Même radical en -r que le futur + terminaisons de l'imparfait : <i>-ais, -ais, -ait, -ions, -iez, -aient</i>. Ex: <i>Je parlerais, nous voudrions.</i></p>
      <p><strong>Radicaux irréguliers majeurs (Futur et Conditionnel) :</strong></p>
      <ul>
        <li><i>Être → ser-</i> | <i>Avoir → aur-</i> | <i>Aller → ir-</i> | <i>Faire → fer-</i></li>
        <li><i>Pouvoir → pourr-</i> | <i>Vouloir → voudr-</i> | <i>Devoir → devr-</i> | <i>Savoir → saur-</i></li>
      </ul>
      <p><strong>Conditionnel de politesse :</strong> <i>Je voudrais un renseignement ; Pourriez-vous m'aider ?</i></p>
    `,
    questions: [
      {
        id: "a2-8-q1",
        prompt: "L'année prochaine, nous _____ en Italie et nous _____ beaucoup de photos.",
        options: [
          "irons / prendrons",
          "irions / prendrions",
          "allons / prendrons",
          "irons / prendrions"
        ],
        correct: 0,
        explanation: "Le futur simple de 'aller' à la 1re personne du pluriel est 'irons', et celui de 'prendre' est 'prendrons'."
      },
      {
        id: "a2-8-q2",
        prompt: "Pourriez-vous m'indiquer l'heure, s'il vous plaît ? - Quel est le mode et la valeur de 'Pourriez' ?",
        options: [
          "Conditionnel présent exprimant une demande polie.",
          "Futur simple exprimant une certitude absolue.",
          "Imparfait exprimant une habitude passée.",
          "Subjonctif présent exprimant un doute."
        ],
        correct: 0,
        explanation: "'Pourriez' est le conditionnel présent du verbe 'pouvoir' utilisé pour formuler une demande avec politesse et déférence."
      },
      {
        id: "a2-8-q3",
        prompt: "Quand tu seras diplômé, tu _____ trouver un emploi stimulant.",
        options: [
          "pourras",
          "pourrais",
          "pourra",
          "peux"
        ],
        correct: 0,
        explanation: "Après la conjonction temporelle 'quand' suivie du futur ('quand tu seras'), la principale est au futur simple ('tu pourras')."
      },
      {
        id: "a2-8-q4",
        prompt: "Bonjour Madame, je _____ réserver une table pour deux personnes ce soir.",
        options: [
          "voudrais",
          "voudrai",
          "veux",
          "voulais"
        ],
        correct: 0,
        explanation: "Le conditionnel de politesse 'je voudrais' est la formule usuelle pour commander ou réserver."
      },
      {
        id: "a2-8-q5",
        prompt: "Demain, ils _____ toute la vérité au tribunal.",
        options: [
          "sauront",
          "saurons",
          "savaient",
          "sauraient"
        ],
        correct: 0,
        explanation: "Le futur simple du verbe 'savoir' à la 3e personne du pluriel est 'ils sauront'."
      },
      {
        id: "a2-8-q6",
        prompt: "Si tu as froid, nous _____ allumer le chauffage.",
        options: [
          "pourrons",
          "pourrions",
          "pouvions",
          "pouvons"
        ],
        correct: 0,
        explanation: "Dans le système hypothétique du présent (Si + présent), la proposition principale se met au futur simple : 'nous pourrons'."
      }
    ]
  },
  {
    id: "a2-verbes-pronominaux",
    title: "A2.9 Les Verbes Pronominaux",
    level: "🟡 Niveau A2",
    levelCode: "A2",
    category: "conjugaison",
    ruleTitle: "Se lever, Se souvenir, S'endormir & Accord au Passé",
    ruleContent: `
      <p>Les verbes pronominaux se conjuguent avec un pronom réfléchi de la même personne que le sujet :</p>
      <p><i>je me, tu te, il/elle se, nous nous, vous vous, ils/elles se</i> (ex: <i>Je me réveille à 7h</i>).</p>
      <p><strong>Au Passé Composé :</strong> Ils se conjuguent TOUJOURS avec l'auxiliaire <strong>ÊTRE</strong> (ex: <i>Elle s'est levée tôt</i>).</p>
      <p><strong>Règle générale d'accord au passé :</strong> Le participe passé s'accorde avec le pronom réfléchi s'il est COD (<i>Elles se sont lavées</i>). Si le COD est placé après le verbe ou si le verbe est intransitif/COI, il n'y a pas d'accord (<i>Elles se sont lavé les mains ; Ils se sont téléphoné [téléphoner à]</i>).</p>
    `,
    questions: [
      {
        id: "a2-9-q1",
        prompt: "Hier matin, mes sœurs _____ très tôt pour partir en randonnée.",
        options: [
          "se sont réveillées",
          "se sont réveillé",
          "se ont réveillées",
          "se sont réveillés"
        ],
        correct: 0,
        explanation: "Les verbes pronominaux se conjuguent avec 'être' et le participe s'accorde au féminin pluriel avec le sujet 'mes sœurs' : 'se sont réveillées'."
      },
      {
        id: "a2-9-q2",
        prompt: "Elles se sont _____ les mains avant de passer à table.",
        options: [
          "lavé",
          "lavées",
          "lavés",
          "laver"
        ],
        correct: 0,
        explanation: "Le COD 'les mains' est placé APRÈS le verbe. Le pronom réfléchi 'se' est COI. Le participe passé 'lavé' reste donc invariable."
      },
      {
        id: "a2-9-q3",
        prompt: "À quelle heure _____ -vous couché hier soir ?",
        options: [
          "vous êtes",
          "vous avez",
          "êtes-vous",
          "avez-vous"
        ],
        correct: 0,
        explanation: "Au passé composé, la forme est 'vous vous êtes couché(s)' avec l'auxiliaire être."
      },
      {
        id: "a2-9-q4",
        prompt: "Paul et Claire se sont _____ pendant les vacances et se sont aussitôt _____ .",
        options: [
          "rencontrés / plu",
          "rencontré / plus",
          "rencontrés / plus",
          "rencontré / plu"
        ],
        correct: 0,
        explanation: "'Se rencontrer' (COD antéposé = accord 'rencontrés'), mais 'plaire à' (COI invariable = 'plu')."
      },
      {
        id: "a2-9-q5",
        prompt: "À l'impératif affirmatif, 'Tu te lèves' devient :",
        options: [
          "Lève-toi !",
          "Lèves-toi !",
          "Te lève !",
          "Lève-te !"
        ],
        correct: 0,
        explanation: "À l'impératif affirmatif, le verbe du 1er groupe perd son 's' et 'te' devient 'toi' relié par un trait d'union : 'Lève-toi !'."
      },
      {
        id: "a2-9-q6",
        prompt: "Ils se sont _____ pendant deux heures au téléphone.",
        options: [
          "parlé",
          "parlés",
          "parlée",
          "parler"
        ],
        correct: 0,
        explanation: "Le verbe 'parler' se construit avec la préposition 'à' (parler à quelqu'un), le pronom est donc COI et le participe reste invariable : 'parlé'."
      }
    ]
  },
  {
    id: "a2-orthographe-pluriels-homophones",
    title: "A2.10 Orthographe & Homophones A2",
    level: "🟡 Niveau A2",
    levelCode: "A2",
    category: "orthographe",
    ruleTitle: "A / À, On / Ont, Son / Sont, Et / Est, C'est / S'est",
    ruleContent: `
      <p>Les homophones grammaticaux ont la même prononciation mais des natures et orthographes distinctes :</p>
      <ul>
        <li><strong>a / à :</strong> <i>a</i> = verbe avoir (on peut dire <i>avait</i>) ; <i>à</i> = préposition invariable (avec accent).</li>
        <li><strong>on / ont :</strong> <i>on</i> = pronom sujet (on peut remplacer par <i>il</i>) ; <i>ont</i> = verbe avoir (on peut dire <i>avaient</i>).</li>
        <li><strong>son / sont :</strong> <i>son</i> = possessif (on peut dire <i>mon</i>) ; <i>sont</i> = verbe être (on peut dire <i>étaient</i>).</li>
        <li><strong>et / est :</strong> <i>et</i> = conjonction d'addition (on peut dire <i>et puis</i>) ; <i>est</i> = verbe être (on peut dire <i>était</i>).</li>
        <li><strong>c'est / s'est :</strong> <i>c'est</i> = démonstratif (<i>cela est</i>) ; <i>s'est</i> = forme pronominale (suivi d'un participe passé : <i>il s'est levé</i>).</li>
      </ul>
    `,
    questions: [
      {
        id: "a2-10-q1",
        prompt: "Thomas _____ blessé au genou _____ il ne peut plus courir.",
        options: [
          "s'est / et",
          "c'est / et",
          "s'est / est",
          "c'est / est"
        ],
        correct: 0,
        explanation: "'S'est blessé' est un verbe pronominal (se blesser au passé composé) et 'et' est la conjonction de coordination marquant la liaison."
      },
      {
        id: "a2-10-q2",
        prompt: "Les enfants _____ faim parce qu'_____ a marché toute la journée.",
        options: [
          "ont / on",
          "on / ont",
          "ont / ont",
          "on / on"
        ],
        correct: 0,
        explanation: "'Ont' est le verbe avoir (avaient faim), et 'on' est le pronom personnel indéfini sujet."
      },
      {
        id: "a2-10-q3",
        prompt: "Marc va ___ la pharmacie pour acheter le médicament de ___ grand-mère.",
        options: [
          "à / sa",
          "a / son",
          "à / son",
          "a / sa"
        ],
        correct: 0,
        explanation: "'À' est la préposition de lieu (impossible de dire 'avait') et 'sa' est l'adjectif possessif féminin s'accordant avec grand-mère."
      },
      {
        id: "a2-10-q4",
        prompt: "Ces livres _____ passionnants et leur auteur _____ très célèbre.",
        options: [
          "sont / est",
          "son / et",
          "sont / et",
          "son / est"
        ],
        correct: 0,
        explanation: "'Sont' (verbe être au pluriel : étaient) et 'est' (verbe être au singulier : était)."
      },
      {
        id: "a2-10-q5",
        prompt: "Regarde, _____ un magnifique tableau qu'il _____ procuré aux enchères.",
        options: [
          "c'est / s'est",
          "s'est / c'est",
          "c'est / c'est",
          "s'est / s'est"
        ],
        correct: 0,
        explanation: "'C'est' présente l'objet ('cela est un tableau') et 's'est procuré' est la forme pronominale au passé composé."
      },
      {
        id: "a2-10-q6",
        prompt: "Le professeur _____ expliqué la règle _____ tous les élèves présents.",
        options: [
          "a / à",
          "à / a",
          "a / a",
          "à / à"
        ],
        correct: 0,
        explanation: "'A expliqué' est l'auxiliaire avoir (avait expliqué) et 'à tous' est la préposition introduisant le COI."
      }
    ]
  },

  // =========================================================================
  // NIVEAU B1 : INTERMÉDIAIRE (10 LEÇONS - 60 QUESTIONS)
  // =========================================================================
  {
    id: "b1-double-pronominalisation",
    title: "B1.1 La Double Pronominalisation",
    level: "🟠 Niveau B1",
    levelCode: "B1",
    category: "grammaire",
    ruleTitle: "Ordre des Pronoms Multiples",
    ruleContent: `
      <p>Lorsqu'une phrase comporte deux pronoms compléments avant le verbe, ils suivent un ordre strict :</p>
      <p><strong>Ordre standard (devant le verbe) :</strong></p>
      <p>1. <i>me, te, se, nous, vous</i> ➔ 2. <i>le, la, les</i> ➔ 3. <i>lui, leur</i> ➔ 4. <i>y</i> ➔ 5. <i>en</i></p>
      <p>Exemples :</p>
      <ul>
        <li><i>Il me le donne.</i> (1 + 2)</li>
        <li><i>Je le lui prête.</i> (2 + 3)</li>
        <li><i>Elle leur en parle.</i> (3 + 5)</li>
        <li><i>Nous y en avons trouvé.</i> (4 + 5)</li>
      </ul>
      <p><strong>À l'Impératif Affirmatif :</strong> Verbe ➔ <i>le, la, les</i> ➔ <i>moi (m'), toi (t'), lui, nous, vous, leur</i> ➔ <i>y</i> ➔ <i>en</i> (ex: <i>Donne-le-moi ! Parle-lui-en !</i>).</p>
    `,
    questions: [
      {
        id: "b1-1-q1",
        prompt: "Tu as montré tes photos de vacances à tes amis ? - Oui, je _____ ai montrées hier soir.",
        options: [
          "les leur",
          "leur les",
          "les lui",
          "leur en"
        ],
        correct: 0,
        explanation: "L'ordre des pronoms de 3e personne devant le verbe est COD (les) puis COI (leur) : 'je les leur ai montrées'."
      },
      {
        id: "b1-1-q2",
        prompt: "Ce secret est important. Promets-moi que tu ne _____ diras à personne !",
        options: [
          "le lui",
          "lui le",
          "le leur",
          "lui en"
        ],
        correct: 0,
        explanation: "'Le' (COD représentant le secret) se place avant 'lui' (COI) : 'tu ne le lui diras'."
      },
      {
        id: "b1-1-q3",
        prompt: "Il y a des pommes dans le panier. S'il te plaît, donne-_____ !",
        options: [
          "-m'en",
          "-en-moi",
          "-les-moi",
          "-me-les"
        ],
        correct: 0,
        explanation: "À l'impératif affirmatif, 'moi' s'élide en 'm'' devant 'en' avec trait d'union : 'donne-m'en !'."
      },
      {
        id: "b1-1-q4",
        prompt: "Tu as parlé de ce projet à la directrice ? - Oui, je _____ ai déjà parlé ce matin.",
        options: [
          "lui en",
          "en lui",
          "la lui",
          "l'y"
        ],
        correct: 0,
        explanation: "'Lui' (COI à la directrice) se place avant 'en' (de ce projet) : 'je lui en ai parlé'."
      },
      {
        id: "b1-1-q5",
        prompt: "À l'impératif négatif, choisissez la phrase correcte :",
        options: [
          "Ne me le donne pas !",
          "Ne donne-le-moi pas !",
          "Ne le me donne pas !",
          "Ne me donne-le pas !"
        ],
        correct: 0,
        explanation: "À l'impératif négatif, les pronoms reprennent leur place et leur ordre standards avant le verbe : 'Ne me le donne pas !'."
      },
      {
        id: "b1-1-q6",
        prompt: "Nous voulons déposer nos affaires dans ce casier. - Vous pouvez _____ déposer en toute sécurité.",
        options: [
          "les y",
          "y les",
          "en y",
          "les en"
        ],
        correct: 0,
        explanation: "'Les' (COD nos affaires) précède 'y' (dans ce casier) avant l'infinitif : 'les y déposer'."
      }
    ]
  },
  {
    id: "b1-discours-indirect-present",
    title: "B1.2 Le Discours Indirect au Présent",
    level: "🟠 Niveau B1",
    levelCode: "B1",
    category: "conjugaison",
    ruleTitle: "Verbe introducteur au présent (Il dit que / demande si)",
    ruleContent: `
      <p>Quand le verbe introducteur est au présent (<i>Il dit, il demande, il affirme</i>), les temps des verbes de la subordonnée NE CHANGENT PAS. Seuls changent les pronoms, possessifs et personnes du verbe :</p>
      <ul>
        <li><strong>Phrase déclarative :</strong> <i>Il dit que...</i> (ex: <i>« Je pars » ➔ Il dit qu'il part</i>).</li>
        <li><strong>Question fermée (oui/non) :</strong> <i>Il demande si...</i> (ex: <i>« Tu viens ? » ➔ Il demande si je viens</i>).</li>
        <li><strong>Question avec mot interrogatif :</strong> <i>Il demande où/quand/comment...</i> (ex: <i>« Où habites-tu ? » ➔ Il demande où j'habite</i>).</li>
        <li><strong>« Qu'est-ce que » ➔ « ce que » :</strong> Ex: <i>« Qu'est-ce que tu fais ? » ➔ Il demande ce que je fais.</i></li>
        <li><strong>« Qu'est-ce qui » ➔ « ce qui » :</strong> Ex: <i>« Qu'est-ce qui t'inquiète ? » ➔ Il demande ce qui m'inquiète.</i></li>
        <li><strong>Impératif ➔ de + Infinitif :</strong> Ex: <i>« Écoute ! » ➔ Il me dit d'écouter.</i></li>
      </ul>
    `,
    questions: [
      {
        id: "b1-2-q1",
        prompt: "Paul me demande : « Qu'est-ce que tu penses de ce projet ? » ➔ Paul me demande _____ de ce projet.",
        options: [
          "ce que je pense",
          "qu'est-ce que je pense",
          "ce qui je pense",
          "que je pense"
        ],
        correct: 0,
        explanation: "'Qu'est-ce que' se transforme en 'ce que' au discours indirect avec changement de pronom ('je pense')."
      },
      {
        id: "b1-2-q2",
        prompt: "Le professeur ordonne aux élèves : « Ouvrez vos livres à la page 50 ! » ➔ Le professeur ordonne aux élèves _____ leurs livres à la page 50.",
        options: [
          "d'ouvrir",
          "qu'ils ouvrent",
          "d'ouvrent",
          "ouvrir"
        ],
        correct: 0,
        explanation: "L'impératif direct se transforme en 'de + infinitif' au discours indirect : 'd'ouvrir leurs livres'."
      },
      {
        id: "b1-2-q3",
        prompt: "Elle demande : « Est-ce que le train est à l'heure ? » ➔ Elle demande _____ à l'heure.",
        options: [
          "si le train est",
          "est-ce que le train est",
          "que le train est",
          "si le train soit"
        ],
        correct: 0,
        explanation: "Une question totale par 'est-ce que' se transforme en 'si + proposition' sans inversion."
      },
      {
        id: "b1-2-q4",
        prompt: "Marc me demande : « Qu'est-ce qui fait ce bruit étrange ? » ➔ Marc me demande _____ ce bruit étrange.",
        options: [
          "ce qui fait",
          "ce que fait",
          "qu'est-ce qui fait",
          "qui fait"
        ],
        correct: 0,
        explanation: "'Qu'est-ce qui' (sujet inanimé) devient 'ce qui' au discours indirect."
      },
      {
        id: "b1-2-q5",
        prompt: "Elle affirme : « Je serai présente à la conférence demain. » ➔ Elle affirme _____ à la conférence demain.",
        options: [
          "qu'elle sera présente",
          "qu'elle serait présente",
          "qu'elle est présente",
          "si elle sera présente"
        ],
        correct: 0,
        explanation: "Comme le verbe introducteur 'affirme' est au présent, le futur simple 'serai' est conservé à la 3e personne : 'sera'."
      },
      {
        id: "b1-2-q6",
        prompt: "Le policier demande au conducteur : « Où allez-vous ? » ➔ Le policier demande au conducteur _____ .",
        options: [
          "où il va",
          "où va-t-il",
          "où est-ce qu'il va",
          "que où il va"
        ],
        correct: 0,
        explanation: "Le mot interrogatif 'où' est conservé et la phrase retrouve l'ordre normal sujet + verbe ('il va')."
      }
    ]
  },
  {
    id: "b1-cause-consequence-but",
    title: "B1.3 Cause, Conséquence et But",
    level: "🟠 Niveau B1",
    levelCode: "B1",
    category: "grammaire",
    ruleTitle: "Parce que, Comme, Grâce à, Donc, Pour que (+ Subjonctif)",
    ruleContent: `
      <p><strong>L'expression de la cause :</strong></p>
      <ul>
        <li><i>Parce que :</i> Cause essentielle (milieu de phrase).</li>
        <li><i>Comme :</i> Cause mise en relief (TOUJOURS en tête de phrase). Ex: <i>Comme il pleuvait, nous sommes restés.</i></li>
        <li><i>Puisque :</i> Cause évidente ou connue de l'interlocuteur.</li>
        <li><i>Grâce à (+ nom) :</i> Cause positive (ex: <i>Grâce à ton aide</i>) vs <i>À cause de (+ nom) :</i> Cause négative/neutre.</li>
      </ul>
      <p><strong>L'expression de la conséquence :</strong> <i>Donc, alors, par conséquent, c'est pourquoi, si bien que (+ indicatif)</i>.</p>
      <p><strong>L'expression du but :</strong></p>
      <ul>
        <li><i>Pour / Afin de (+ infinitif) :</i> Si le sujet est le même. Ex: <i>Je travaille pour réussir.</i></li>
        <li><i>Pour que / Afin que (+ SUBJONCTIF) :</i> Si les sujets sont différents. Ex: <i>J'explique la règle pour que tu comprennes.</i></li>
      </ul>
    `,
    questions: [
      {
        id: "b1-3-q1",
        prompt: "_____ il n'avait pas ses clés, il a dû attendre dehors _____ sa femme rentre.",
        options: [
          "Comme / pour que",
          "Parce que / afin de",
          "Puisque / pour",
          "Grâce à / pour que"
        ],
        correct: 0,
        explanation: "'Comme' s'emploie obligatoirement en début de phrase pour introduire la cause, et 'pour que' introduit un but avec changement de sujet (+ subjonctif 'rentre')."
      },
      {
        id: "b1-3-q2",
        prompt: "Le projet a été un immense succès _____ l'engagement sans faille de toute l'équipe.",
        options: [
          "grâce à",
          "à cause de",
          "pour que",
          "parce que"
        ],
        correct: 0,
        explanation: "Pour introduire une cause aux conséquences bénéfiques et positives suivie d'un nom, on emploie 'grâce à'."
      },
      {
        id: "b1-3-q3",
        prompt: "Le vol a été annulé au dernier moment _____ de la tempête de neige.",
        options: [
          "à cause",
          "grâce",
          "en raison",
          "parce"
        ],
        correct: 0,
        explanation: "'À cause de' s'emploie devant un nom pour introduire une cause négative ou préjudiciable."
      },
      {
        id: "b1-3-q4",
        prompt: "J'ai imprimé le plan de la ville afin que vous ne vous _____ pas dans le centre historique.",
        options: [
          "perdiez",
          "perdez",
          "perdrez",
          "perdriez"
        ],
        correct: 0,
        explanation: "'Afin que' exige obligatoirement le subjonctif présent ('perdiez')."
      },
      {
        id: "b1-3-q5",
        prompt: "Il a oublié son passeport, _____ il n'a pas pu embarquer dans l'avion.",
        options: [
          "c'est pourquoi",
          "parce que",
          "comme",
          "afin que"
        ],
        correct: 0,
        explanation: "'C'est pourquoi' introduit la conséquence directe d'un fait précédemment énoncé."
      },
      {
        id: "b1-3-q6",
        prompt: "Elle s'entraîne intensivement tous les jours _____ remporter la médaille d'or.",
        options: [
          "afin de",
          "afin que",
          "parce que",
          "grâce à"
        ],
        correct: 0,
        explanation: "Comme le sujet de l'action est identique ('Elle'), on emploie 'afin de' suivi de l'infinitif."
      }
    ]
  },
  {
    id: "b1-hypothese-condition",
    title: "B1.4 Hypothèse et Condition (Si)",
    level: "🟠 Niveau B1",
    levelCode: "B1",
    category: "conjugaison",
    ruleTitle: "Les 3 Structures Fondamentales avec 'Si'",
    ruleContent: `
      <p>L'hypothèse avec <i>Si</i> obéit à une concordance stricte des temps :</p>
      <ol>
        <li><strong>Hypothèse réalisable dans le futur :</strong><br>
        <strong>Si + Présent ➔ Futur Simple (ou Présent / Impératif)</strong><br>
        Ex: <i>Si j'ai le temps demain, je viendrai te voir.</i> / <i>Si tu as faim, mange !</i></li>
        <li><strong>Hypothèse imaginaire ou potentielle dans le présent :</strong><br>
        <strong>Si + Imparfait ➔ Conditionnel Présent</strong><br>
        Ex: <i>Si je gagnais au loto, j'achèterais une grande maison.</i> (Mais je n'ai pas gagné).</li>
        <li><strong>Règle d'or absolue :</strong> JAMAIS de futur ni de conditionnel directement après <i>SI</i> ! (On ne dit jamais <i>*Si j'aurais</i> ni <i>*Si je serai</i>).</li>
      </ol>
    `,
    questions: [
      {
        id: "b1-4-q1",
        prompt: "Si nous _____ plus de temps libre, nous _____ apprendre une nouvelle langue.",
        options: [
          "avions / pourrions",
          "aurons / pourrons",
          "avions / pouvons",
          "aurions / pourrions"
        ],
        correct: 0,
        explanation: "Dans l'hypothèse imaginaire sur le présent : Si + Imparfait (avions) ➔ Conditionnel présent (pourrions). Jamais de conditionnel après Si !"
      },
      {
        id: "b1-4-q2",
        prompt: "Si tu _____ à l'avance, tu _____ un billet de train beaucoup moins cher.",
        options: [
          "réserves / obtiendras",
          "réserveras / obtiendras",
          "réserves / obtiendrais",
          "réservais / obtiendras"
        ],
        correct: 0,
        explanation: "Hypothèse réalisable : Si + Présent ('réserves') ➔ Futur simple ('obtiendras')."
      },
      {
        id: "b1-4-q3",
        prompt: "Si j'étais à votre place, je _____ immédiatement cette proposition avantageuse.",
        options: [
          "redirais",
          "accepterais",
          "accepterai",
          "accepte"
        ],
        correct: 1,
        explanation: "Structure 'Si + imparfait' (étais) ➔ la proposition principale se met au conditionnel présent ('accepterais')."
      },
      {
        id: "b1-4-q4",
        prompt: "Identifiez la phrase grammaticalement INCORRECTE :",
        options: [
          "Si j'aurais su, je ne serais pas venu.",
          "Si j'avais su, je ne serais pas venu.",
          "Si tu viens, appelle-moi.",
          "Si nous avions le choix, nous partirions."
        ],
        correct: 0,
        explanation: "La structure '*Si j'aurais su' est une faute majeure : après la conjonction 'si', on n'emploie jamais le conditionnel."
      },
      {
        id: "b1-4-q5",
        prompt: "Si le temps se maintient au beau fixe, nous _____ un pique-nique en forêt dimanche.",
        options: [
          "ferons",
          "ferions",
          "faisions",
          "aurons fait"
        ],
        correct: 0,
        explanation: "Si + présent ('se maintient') entraîne le futur simple ('ferons') dans la principale."
      },
      {
        id: "b1-4-q6",
        prompt: "Que ferais-tu si tu _____ invisible pendant vingt-quatre heures ?",
        options: [
          "devenais",
          "deviendrais",
          "deviendras",
          "deviens"
        ],
        correct: 0,
        explanation: "La proposition avec 'si' doit être à l'imparfait ('devenais') en accord avec le conditionnel de la principale ('que ferais-tu')."
      }
    ]
  },
  {
    id: "b1-voix-passive",
    title: "B1.5 La Voix Passive",
    level: "🟠 Niveau B1",
    levelCode: "B1",
    category: "grammaire",
    ruleTitle: "Être + Participe Passé (+ par/de)",
    ruleContent: `
      <p>La voix passive permet de mettre en valeur l'objet de l'action plutôt que son agent :</p>
      <p><strong>Structure :</strong> Sujet patient + Verbe <strong>ÊTRE (au temps de la voix active)</strong> + <strong>Participe Passé (accordé avec le sujet)</strong> + <strong>par / de + Complément d'agent</strong>.</p>
      <p>Exemples de concordance temporelle :</p>
      <ul>
        <li>Présent : <i>L'architecte conçoit le plan ➔ Le plan <strong>est conçu</strong> par l'architecte.</i></li>
        <li>Passé Composé : <i>L'architecte a conçu le plan ➔ Le plan <strong>a été conçu</strong> par l'architecte.</i></li>
        <li>Futur Simple : <i>L'architecte concevra le plan ➔ Le plan <strong>sera conçu</strong> par l'architecte.</i></li>
      </ul>
      <p><strong>Complément d'agent avec 'de' :</strong> Avec les verbes de sentiment ou de description (<i>aimé de, respecté de, entouré de, composé de</i>).</p>
    `,
    questions: [
      {
        id: "b1-5-q1",
        prompt: "Cette décision audacieuse _____ par le conseil municipal lors de la dernière réunion.",
        options: [
          "a été prise",
          "a été pris",
          "est prise",
          "avait pris"
        ],
        correct: 0,
        explanation: "Au passé composé passif, l'auxiliaire 'a été' s'associe au participe passé accordé au féminin singulier avec 'cette décision' : 'a été prise'."
      },
      {
        id: "b1-5-q2",
        prompt: "Ce professeur émérite est respecté et admiré _____ tous ses étudiants.",
        options: [
          "de",
          "par",
          "avec",
          "pour"
        ],
        correct: 0,
        explanation: "Avec les verbes de sentiment, d'estime ou d'état d'esprit (respecter, aimer, estimer), le complément d'agent s'introduit par 'de'."
      },
      {
        id: "b1-5-q3",
        prompt: "Transformez à la voix passive : 'Les ouvriers rénoveront cette gare l'année prochaine.'",
        options: [
          "Cette gare sera rénovée par les ouvriers l'année prochaine.",
          "Cette gare sera rénové par les ouvriers l'année prochaine.",
          "Cette gare est rénovée par les ouvriers l'année prochaine.",
          "Cette gare serait rénovée par les ouvriers l'année prochaine."
        ],
        correct: 0,
        explanation: "Le verbe actif est au futur simple ('rénoveront') ➔ passif 'sera rénovée' avec accord féminin singulier."
      },
      {
        id: "b1-5-q4",
        prompt: "Le musée historique est entouré _____ jardins magnifiquement entretenus.",
        options: [
          "de",
          "par",
          "avec",
          "pour"
        ],
        correct: 0,
        explanation: "Les verbes de disposition spatiale et de description (être entouré, être bordé, être couvert) se construisent avec la préposition 'de'."
      },
      {
        id: "b1-5-q5",
        prompt: "Toutes les candidatures _____ examinées avant la fin de la semaine.",
        options: [
          "seront",
          "serait",
          "ont",
          "auront"
        ],
        correct: 0,
        explanation: "Au futur simple passif à la 3e personne du pluriel, on emploie 'seront' + participe passé accordé au féminin pluriel ('examinées')."
      },
      {
        id: "b1-5-q6",
        prompt: "La Joconde a été peinte _____ Léonard de Vinci au XVIe siècle.",
        options: [
          "par",
          "de",
          "avec",
          "pour"
        ],
        correct: 0,
        explanation: "Pour une action matérielle et concrète de création artistique, le complément d'agent standard s'introduit par 'par'."
      }
    ]
  },
  {
    id: "b1-gerondif",
    title: "B1.6 Le Gérondif",
    level: "🟠 Niveau B1",
    levelCode: "B1",
    category: "conjugaison",
    ruleTitle: "En + Participe Présent (Manière, Temps, Condition)",
    ruleContent: `
      <p>Le gérondif est une forme verbale invariable qui associe la préposition <strong>EN</strong> au participe présent (radical de 'nous' au présent + <i>-ant</i>) :</p>
      <p>Ex: <i>Nous parlons ➔ en parlant | Nous finissons ➔ en finissant | Nous prenons ➔ en prenant</i>.</p>
      <p><strong>Trois irréguliers majeurs :</strong> <i>Être ➔ en étant | Avoir ➔ en ayant | Savoir ➔ en sachant</i>.</p>
      <p><strong>Règle d'or de syntaxe :</strong> Le sujet du gérondif DOIT ÊTRE OBLIGATOIREMENT le même que le sujet du verbe principal !</p>
      <p><strong>Valeurs du gérondif :</strong></p>
      <ul>
        <li><strong>Simultanéité temporelle :</strong> <i>Il écoute la radio en cuisinant.</i> (en même temps).</li>
        <li><strong>Manière / Moyen :</strong> <i>Elle a réussi en travaillant dur.</i> (comment ?).</li>
        <li><strong>Condition :</strong> <i>En faisant du sport, tu garderas la forme.</i> (= Si tu fais du sport).</li>
      </ul>
    `,
    questions: [
      {
        id: "b1-6-q1",
        prompt: "C'est _____ persévérant et _____ preuve de patience qu'il a décroché ce poste.",
        options: [
          "en / en faisant",
          "pour / faisant",
          "en / faisant",
          "en / par faire"
        ],
        correct: 0,
        explanation: "Le gérondif de moyen se forme avec 'en' + participe présent : 'en persévérant et en faisant'."
      },
      {
        id: "b1-6-q2",
        prompt: "Le gérondif irrégulier du verbe 'avoir' est :",
        options: [
          "en ayant",
          "en avont",
          "en sachant",
          "en étant"
        ],
        correct: 0,
        explanation: "Le participe présent et gérondif du verbe 'avoir' est irrégulier : 'en ayant'."
      },
      {
        id: "b1-6-q3",
        prompt: "Elle s'est tordu la cheville _____ du bus.",
        options: [
          "en descendant",
          "en descendu",
          "en descandant",
          "descendant"
        ],
        correct: 0,
        explanation: "Le gérondif de temps/circonstance se forme avec 'en' + radical 'descend-' + terminaison '-ant'."
      },
      {
        id: "b1-6-q4",
        prompt: "Quelle phrase respecte la règle d'identité de sujet du gérondif ?",
        options: [
          "En rentrant chez moi, j'ai croisé mon voisin dans l'escalier.",
          "En rentrant chez moi, mon chien a aboyé de joie.",
          "En regardant par la fenêtre, la pluie tombait sans arrêt.",
          "En cuisinant le dîner, le téléphone a sonné."
        ],
        correct: 0,
        explanation: "Dans 'En rentrant chez moi, j'ai croisé...', c'est bien 'je' qui rentre et qui croise le voisin. Les autres options créent une rupture de sujet fautive."
      },
      {
        id: "b1-6-q5",
        prompt: "_____ attentif aux explications du guide, vous comprendrez mieux l'histoire du château.",
        options: [
          "En étant",
          "En étendant",
          "En ayant",
          "En sachant"
        ],
        correct: 0,
        explanation: "Le gérondif du verbe 'être' est 'en étant'."
      },
      {
        id: "b1-6-q6",
        prompt: "Tu feras de grandes économies _____ ton vélo au lieu de ta voiture.",
        options: [
          "en utilisant",
          "en utilise",
          "utilisant",
          "en utiliser"
        ],
        correct: 0,
        explanation: "Le gérondif exprime ici le moyen et la condition : 'en utilisant ton vélo'."
      }
    ]
  },
  {
    id: "b1-pronoms-demonstratifs-possessifs",
    title: "B1.7 Pronoms Démonstratifs & Possessifs",
    level: "🟠 Niveau B1",
    levelCode: "B1",
    category: "grammaire",
    ruleTitle: "Celui, Celle, Ceux, Celles / Le mien, Le tien, Le sien",
    ruleContent: `
      <p><strong>Les Pronoms Démonstratifs (remplacent un nom déjà cité) :</strong></p>
      <ul>
        <li>Formes simples : <i>celui</i> (masc. sing.), <i>celle</i> (fém. sing.), <i>ceux</i> (masc. plur.), <i>celles</i> (fém. plur.). Toujours suivis de <i>de</i> ou d'un pronom relatif (<i>qui, que, dont, où</i>). Ex: <i>Je préfère celui de Pierre ; celle qui chante.</i></li>
        <li>Formes composées (distinction proximité / éloignement) : <i>celui-ci / celui-là, celle-ci / celle-là, ceux-ci / ceux-là, celles-ci / celles-là</i>.</li>
      </ul>
      <p><strong>Les Pronoms Possessifs :</strong></p>
      <p><i>le mien, la mienne, les miens, les miennes ; le tien... ; le sien... ; le nôtre, la nôtre, les nôtres ; le vôtre... ; le leur, la leur, les leurs</i>.</p>
    `,
    questions: [
      {
        id: "b1-7-q1",
        prompt: "Mon appartement est plus lumineux que _____ de Sophie, mais _____ a un balcon plus grand.",
        options: [
          "celui / le sien",
          "celle / le sien",
          "celui / la sienne",
          "ceux / le leur"
        ],
        correct: 0,
        explanation: "'Appartement' est masculin singulier ➔ pronom démonstratif 'celui de' et pronom possessif 'le sien'."
      },
      {
        id: "b1-7-q2",
        prompt: "Parmi toutes ces toiles exposées, quelles sont _____ que vous préférez ?",
        options: [
          "celles",
          "ceux",
          "celle",
          "celui"
        ],
        correct: 0,
        explanation: "'Toiles' est féminin pluriel, on emploie le pronom démonstratif 'celles que'."
      },
      {
        id: "b1-7-q3",
        prompt: "Vous avez vos billets d'entrée ? Nous, nous avons déjà composté _____ .",
        options: [
          "les nôtres",
          "le nôtre",
          "les nos",
          "les vôtres"
        ],
        correct: 0,
        explanation: "Le pronom possessif correspondant à 'nos billets' (masculin pluriel) est 'les nôtres' (avec accent circonflexe sur le o)."
      },
      {
        id: "b1-7-q4",
        prompt: "Je n'aime pas cette cravate rouge, je préfère plutôt _____ .",
        options: [
          "celle-ci",
          "celui-ci",
          "ceux-ci",
          "ceci"
        ],
        correct: 0,
        explanation: "'Cravate' est féminin singulier ➔ pronom démonstratif composé 'celle-ci'."
      },
      {
        id: "b1-7-q5",
        prompt: "Leur voiture consomme beaucoup moins de carburant que _____ .",
        options: [
          "la nôtre",
          "le nôtre",
          "les nôtres",
          "la notre"
        ],
        correct: 0,
        explanation: "'Voiture' est féminin singulier ➔ 'la nôtre' (attention à l'accent circonflexe sur le pronom possessif)."
      },
      {
        id: "b1-7-q6",
        prompt: "Ceux _____ travaillent avec rigueur obtiendront d'excellents résultats.",
        options: [
          "qui",
          "que",
          "dont",
          "où"
        ],
        correct: 0,
        explanation: "'Ceux' est ici le sujet du verbe 'travaillent', on utilise donc le pronom relatif sujet 'qui'."
      }
    ]
  },
  {
    id: "b1-subjonctif-present",
    title: "B1.8 Le Subjonctif Présent (Approfondissement)",
    level: "🟠 Niveau B1",
    levelCode: "B1",
    category: "conjugaison",
    ruleTitle: "Volonté, Obligation, Sentiment, Doute & Conjonctions",
    ruleContent: `
      <p>Le subjonctif exprime l'incertitude, le sentiment, la volonté, le doute ou la nécessité :</p>
      <p><strong>Formation régulière :</strong> Radical de 'ils' au présent de l'indicatif + terminaisons <i>-e, -es, -e, -ions, -iez, -ent</i> (ex: <i>ils viennent ➔ que je vienne, que nous venions</i>).</p>
      <p><strong>Irréguliers incontournables :</strong></p>
      <ul>
        <li><strong>Être :</strong> <i>sois, sois, soit, soyons, soyez, soient</i>.</li>
        <li><strong>Avoir :</strong> <i>aie, aies, ait, ayons, ayez, aient</i>.</li>
        <li><strong>Faire :</strong> <i>fasse, fasses, fasse, fassions, fassiez, fassent</i>.</li>
        <li><strong>Savoir :</strong> <i>sache, saches, sache, sachions, sachiez, sachent</i>.</li>
        <li><strong>Pouvoir :</strong> <i>puisse, puisses, puisse, puissions, puissiez, puissent</i>.</li>
        <li><strong>Aller :</strong> <i>aille, ailles, aille, allions, alliez, aillent</i>.</li>
      </ul>
      <p><strong>Déclencheurs fréquents :</strong> <i>Il faut que, je veux que, j'ai peur que, bien que, pour que, avant que</i>.</p>
    `,
    questions: [
      {
        id: "b1-8-q1",
        prompt: "Il est indispensable que vous _____ vos passeports et que vous _____ à l'heure à l'aéroport.",
        options: [
          "ayez / soyez",
          "avez / êtes",
          "ayiez / soyiez",
          "ayez / serez"
        ],
        correct: 0,
        explanation: "'Il est indispensable que' déclenche le subjonctif présent : 'que vous ayez' (avoir) et 'que vous soyez' (être)."
      },
      {
        id: "b1-8-q2",
        prompt: "Bien qu'il _____ de gros efforts, il n'arrive pas à surmonter cette difficulté.",
        options: [
          "fasse",
          "fait",
          "fera",
          "ferait"
        ],
        correct: 0,
        explanation: "La conjonction de concession 'bien que' exige systématiquement le subjonctif : 'qu'il fasse'."
      },
      {
        id: "b1-8-q3",
        prompt: "Je souhaite de tout cœur que tu _____ réussir ce concours d'entrée.",
        options: [
          "puisses",
          "peux",
          "pourras",
          "pourrais"
        ],
        correct: 0,
        explanation: "Le verbe de souhait et de volonté 'souhaiter que' régit le subjonctif présent : 'que tu puisses'."
      },
      {
        id: "b1-8-q4",
        prompt: "Mes parents ont peur que nous ne _____ en retard à la cérémonie.",
        options: [
          "soyons",
          "sommes",
          "serons",
          "serions"
        ],
        correct: 0,
        explanation: "L'expression du sentiment et de la crainte ('avoir peur que') exige le subjonctif : 'que nous soyons'."
      },
      {
        id: "b1-8-q5",
        prompt: "Il faut que nous _____ le musée avant qu'il ne _____ ses portes.",
        options: [
          "visitions / ferme",
          "visitons / ferme",
          "visitions / fermera",
          "visitons / fermerait"
        ],
        correct: 0,
        explanation: "'Il faut que' et la conjonction temporelle 'avant que' exigent tous deux le subjonctif présent ('visitions', 'ferme')."
      },
      {
        id: "b1-8-q6",
        prompt: "Je doute fort qu'elle _____ toute la vérité sur cet incident.",
        options: [
          "sache",
          "sait",
          "saura",
          "saurait"
        ],
        correct: 0,
        explanation: "'Douter que' exprime le doute explicite et demande obligatoirement le subjonctif présent du verbe savoir ('qu'elle sache')."
      }
    ]
  },
  {
    id: "b1-plus-que-parfait",
    title: "B1.9 Plus-que-parfait & Récit au Passé",
    level: "🟠 Niveau B1",
    levelCode: "B1",
    category: "conjugaison",
    ruleTitle: "Imparfait de Avoir/Être + Participe Passé (Antériorité)",
    ruleContent: `
      <p>Le Plus-que-parfait exprime une action accomplie dans le passé <strong>AVANT une autre action passée</strong> (antériorité dans le passé) :</p>
      <p><strong>Structure :</strong> Auxiliaire <strong>ÊTRE ou AVOIR à l'Imparfait</strong> + <strong>Participe Passé</strong>.</p>
      <p>Exemples :</p>
      <ul>
        <li><i>Quand je suis arrivé à la gare, le train <strong>était déjà parti</strong>.</i> (Le départ a eu lieu avant mon arrivée).</li>
        <li><i>Elle m'a rendu le livre que je lui <strong>avais prêté</strong>.</i> (Le prêt a eu lieu avant le retour).</li>
      </ul>
      <p><strong>Accords :</strong> Mêmes règles d'accord que pour le passé composé (accord avec le sujet avec <i>Être</i>, accord avec le COD antéposé avec <i>Avoir</i>).</p>
    `,
    questions: [
      {
        id: "b1-9-q1",
        prompt: "Lorsque la police est arrivée sur les lieux, les cambrioleurs _____ depuis longtemps.",
        options: [
          "s'étaient enfuis",
          "s'étaient enfui",
          "se sont enfuis",
          "s'enfuyaient"
        ],
        correct: 0,
        explanation: "L'action de s'enfuir est antérieure à l'arrivée de la police ➔ Plus-que-parfait avec accord du verbe essentiellement pronominal au masculin pluriel : 's'étaient enfuis'."
      },
      {
        id: "b1-9-q2",
        prompt: "Elle a enfin retrouvé la bague précieuse que sa grand-mère lui _____ pour ses vingt ans.",
        options: [
          "avait offerte",
          "avait offert",
          "a offert",
          "offrait"
        ],
        correct: 0,
        explanation: "Le don est antérieur au fait de retrouver (plus-que-parfait) et le COD 'que' (la bague) est antéposé ➔ accord féminin singulier : 'avait offerte'."
      },
      {
        id: "b1-9-q3",
        prompt: "Nous avons manqué le début du film parce que nous _____ bloqués dans les embouteillages.",
        options: [
          "avions été",
          "étions",
          "avons été",
          "aurions été"
        ],
        correct: 0,
        explanation: "Le fait d'avoir été bloqué est la cause antérieure au retard ➔ plus-que-parfait 'avions été'."
      },
      {
        id: "b1-9-q4",
        prompt: "Il m'a expliqué qu'il _____ toute la nuit pour finaliser son rapport.",
        options: [
          "avait travaillé",
          "a travaillé",
          "travaillait",
          "travaillerait"
        ],
        correct: 0,
        explanation: "L'action de travailler toute la nuit est accomplie et antérieure au moment de l'explication ➔ plus-que-parfait 'avait travaillé'."
      },
      {
        id: "b1-9-q5",
        prompt: "Dès que nous _____ nos valises, nous avons appelé un taxi pour l'aéroport.",
        options: [
          "avions bouclé",
          "avons bouclé",
          "bouclions",
          "aurions bouclé"
        ],
        correct: 0,
        explanation: "L'antériorité immédiate dans le passé s'exprime au plus-que-parfait : 'avions bouclé'."
      },
      {
        id: "b1-9-q6",
        prompt: "Marie était furieuse car son frère _____ son secret à toute la famille.",
        options: [
          "avait révélé",
          "a révélé",
          "révélait",
          "révélerait"
        ],
        correct: 0,
        explanation: "La révélation du secret est survenue avant la colère de Marie ➔ plus-que-parfait 'avait révélé'."
      }
    ]
  },
  {
    id: "b1-orthographe-adverbes-accord-avoir",
    title: "B1.10 Adverbes en -ment & Accord du COD avec Avoir",
    level: "🟠 Niveau B1",
    levelCode: "B1",
    category: "orthographe",
    ruleTitle: "Formation des Adverbes & Accord du Participe Passé avec Avoir",
    ruleContent: `
      <p><strong>Formation des adverbes en -ment :</strong></p>
      <ul>
        <li>Cas général : Féminin de l'adjectif + <i>-ment</i> (ex: <i>clair ➔ claire ➔ clairement, doux ➔ douce ➔ doucement</i>).</li>
        <li>Adjectifs finissant par une voyelle au masculin : Masculin + <i>-ment</i> (ex: <i>vrai ➔ vraiment, poli ➔ poliment, absolu ➔ absolument</i>).</li>
        <li>Adjectifs en <i>-ant</i> ➔ <strong>-amment</strong> (ex: <i>élégant ➔ élégamment, courant ➔ couramment</i>).</li>
        <li>Adjectifs en <i>-ent</i> ➔ <strong>-emment</strong> (ex: <i>évident ➔ évidemment, prudent ➔ prudemment</i>).</li>
      </ul>
      <p><strong>Règle d'or de l'accord avec l'auxiliaire AVOIR :</strong></p>
      <p>Le participe passé conjugué avec <i>Avoir</i> s'accorde en genre et en nombre avec le <strong>COD si et seulement si celui-ci est placé AVANT le verbe</strong> (avec les pronoms <i>le, la, les, que, quels, combien de</i>). Ex: <i>Les lettres que j'ai écrites.</i></p>
    `,
    questions: [
      {
        id: "b1-10-q1",
        prompt: "Cet avocat renommé s'exprime toujours très _____ et défend ses clients _____ .",
        options: [
          "éloquemment / ardemment",
          "éloquament / ardamment",
          "éloquemment / ardemment",
          "éloquement / ardement"
        ],
        correct: 0,
        explanation: "'Éloquent' (-ent) forme son adverbe en '-emment' et 'ardent' (-ent) en '-emment' : 'éloquemment' et 'ardemment'."
      },
      {
        id: "b1-10-q2",
        prompt: "Les superbes photos que nous avons _____ lors de notre voyage ont été primées.",
        options: [
          "prises",
          "pris",
          "prise",
          "prisese"
        ],
        correct: 0,
        explanation: "Avec l'auxiliaire 'avoir' (avons), le COD 'que' (qui remplace 'les superbes photos', féminin pluriel) est antéposé ➔ accord obligatoire : 'prises'."
      },
      {
        id: "b1-10-q3",
        prompt: "Quelle est l'orthographe exacte de l'adverbe dérivé de l'adjectif 'constant' ?",
        options: [
          "constamment",
          "constemment",
          "constantement",
          "constament"
        ],
        correct: 0,
        explanation: "Les adjectifs terminés par '-ant' forment leur adverbe en '-amment' avec double consonne 'mm' : 'constamment'."
      },
      {
        id: "b1-10-q4",
        prompt: "Combien de villes as-tu _____ pendant ton séjour en Europe ?",
        options: [
          "visitées",
          "visité",
          "visités",
          "visitee"
        ],
        correct: 0,
        explanation: "Le pronom interrogatif de quantité 'Combien de villes' (féminin pluriel) est placé avant le verbe ➔ accord : 'visitées'."
      },
      {
        id: "b1-10-q5",
        prompt: "L'adverbe correspondant à l'adjectif 'prudent' s'écrit :",
        options: [
          "prudemment",
          "prudamment",
          "prudentement",
          "prudement"
        ],
        correct: 0,
        explanation: "L'adjectif en '-ent' se transforme en '-emment' : 'prudemment'."
      },
      {
        id: "b1-10-q6",
        prompt: "Ces poires, je les ai _____ au marché ce matin.",
        options: [
          "achetées",
          "acheté",
          "achetés",
          "achetée"
        ],
        correct: 0,
        explanation: "Le pronom personnel COD 'les' (remplaçant 'ces poires', fém. plur.) est placé devant l'auxiliaire avoir ➔ accord : 'achetées'."
      }
    ]
  },

  // =========================================================================
  // NIVEAU B2 : AVANCÉ (10 LEÇONS - 80 QUESTIONS)
  // =========================================================================
  {
    id: "b2-pronoms-relatifs-composes",
    title: "B2.1 Pronoms Relatifs Composés (lequel, auquel, duquel)",
    level: "🔴 Niveau B2",
    levelCode: "B2",
    category: "grammaire",
    ruleTitle: "Lequel, Auquel, Duquel et leurs déclinaisons",
    ruleContent: `
      <p>Les pronoms relatifs composés s'emploient après une préposition pour remplacer des choses ou des personnes (pour les personnes, on peut aussi employer <i>qui</i> : <i>avec qui, pour qui</i>) :</p>
      <ul>
        <li><strong>Forme de base (avec prépositions simples comme avec, pour, sans, sur, sous, dans, vers) :</strong><br>
        <i>lequel</i> (masc. sing.), <i>laquelle</i> (fém. sing.), <i>lesquels</i> (masc. plur.), <i>lesquelles</i> (fém. plur.).<br>
        Ex: <i>La chaise sur laquelle je suis assis ; Le dossier pour lequel nous travaillons.</i></li>
        <li><strong>Formes contractées avec À (à + lequel) :</strong><br>
        <i>auquel</i> (masc. sing.), <i>à laquelle</i> (fém. sing.), <i>auxquels</i> (masc. plur.), <i>auxquelles</i> (fém. plur.).<br>
        Ex: <i>Le projet auquel je pense ; Les réunions auxquelles nous participons.</i></li>
        <li><strong>Formes contractées avec DE (de + lequel dans les locutions comme à côté de, au cours de, grâce à, à l'issue de) :</strong><br>
        <i>duquel</i> (masc. sing.), <i>de laquelle</i> (fém. sing.), <i>desquels</i> (masc. plur.), <i>desquelles</i> (fém. plur.).<br>
        Ex: <i>L'immeuble en face duquel j'habite ; La réunion à l'issue de laquelle nous déciderons.</i></li>
      </ul>
      <p><strong>Attention piège :</strong> Si la préposition est 'de' seule (sans locution prépositive), on utilise simplement <strong>dont</strong> (ex: <i>Le livre dont je parle</i>). Mais avec une locution (<i>à cause de, près de, le long de</i>), on emploie obligatoirement <i>duquel, de laquelle</i> !</p>
    `,
    questions: [
      {
        id: "b2-1-q1",
        prompt: "C'est une cause citoyenne noble pour _____ de nombreux bénévoles se mobilisent sans relâche.",
        options: [
          "laquelle",
          "auquelle",
          "duquel",
          "lesquelles"
        ],
        correct: 0,
        explanation: "La préposition simple 'pour' associée au nom féminin singulier 'une cause' exige le pronom relatif composé 'laquelle'."
      },
      {
        id: "b2-1-q2",
        prompt: "Les défis environnementaux _____ notre société contemporaine est confrontée exigent des solutions radicales.",
        options: [
          "auxquels",
          "desquels",
          "lesquels",
          "auxquelles"
        ],
        correct: 0,
        explanation: "'Être confronté à' exige la contraction avec 'à' + nom masculin pluriel ('les défis') ➔ 'auxquels'."
      },
      {
        id: "b2-1-q3",
        prompt: "Voici le parc d'entreprises au centre _____ a été érigée la nouvelle médiathèque municipale.",
        options: [
          "duquel",
          "dont",
          "auquel",
          "lequel"
        ],
        correct: 0,
        explanation: "Après la locution prépositive 'au centre de', 'dont' est interdit ; on doit employer le composé contracté 'duquel' (masculin singulier)."
      },
      {
        id: "b2-1-q4",
        prompt: "Les valeurs éthiques sur _____ repose notre démocratie ne sauraient être remises en cause.",
        options: [
          "lesquelles",
          "lesquels",
          "auxquelles",
          "desquelles"
        ],
        correct: 0,
        explanation: "'Reposer sur' (préposition simple 'sur') + nom féminin pluriel ('les valeurs') ➔ 'lesquelles'."
      },
      {
        id: "b2-1-q5",
        prompt: "La conférence internationale à l'issue _____ le traité sera signé réunira trente chefs d'État.",
        options: [
          "de laquelle",
          "duquel",
          "dont",
          "à laquelle"
        ],
        correct: 0,
        explanation: "La locution 'à l'issue de' + nom féminin singulier ('la conférence') impose la forme 'de laquelle'."
      },
      {
        id: "b2-1-q6",
        prompt: "Ce sont des propositions de loi innovantes _____ les députés ont refusé de souscrire.",
        options: [
          "auxquelles",
          "desquelles",
          "lesquelles",
          "dont"
        ],
        correct: 0,
        explanation: "'Souscrire à' régit la préposition 'à' ➔ 'à + lesquelles' = 'auxquelles' (féminin pluriel)."
      },
      {
        id: "b2-1-q7",
        prompt: "L'appartement près _____ un chantier bruyant a débuté est devenu difficile à louer.",
        options: [
          "duquel",
          "dont",
          "auquel",
          "lequel"
        ],
        correct: 0,
        explanation: "Après la locution 'près de', le pronom composé s'accorde au masculin singulier avec 'appartement' ➔ 'duquel'."
      },
      {
        id: "b2-1-q8",
        prompt: "Les arguments par _____ il a justifié sa démission ont convaincu l'ensemble du conseil d'administration.",
        options: [
          "lesquels",
          "lesquelles",
          "desquels",
          "auxquels"
        ],
        correct: 0,
        explanation: "Préposition simple 'par' + nom masculin pluriel ('les arguments') ➔ 'lesquels'."
      }
    ]
  },
  {
    id: "b2-discours-indirect-passe",
    title: "B2.2 Discours Indirect dans le Passé (Concordance des temps)",
    level: "🔴 Niveau B2",
    levelCode: "B2",
    category: "conjugaison",
    ruleTitle: "Règles de Concordance des Temps au Passé",
    ruleContent: `
      <p>Quand le verbe introducteur est au passé (<i>Il a dit, il déclarait, il a affirmé</i>), les temps de la subordonnée se décalent systématiquement dans le passé :</p>
      <ul>
        <li><strong>Présent ➔ Imparfait :</strong> <i>« J'habite à Lyon » ➔ Il a dit qu'il habitait à Lyon.</i></li>
        <li><strong>Passé Composé / Passé Simple ➔ Plus-que-parfait :</strong> <i>« J'ai envoyé le dossier » ➔ Il a dit qu'il avait envoyé le dossier.</i></li>
        <li><strong>Futur Simple ➔ Conditionnel Présent :</strong> <i>« Je viendrai demain » ➔ Il a promis qu'il viendrait le lendemain.</i></li>
        <li><strong>Futur Antérieur ➔ Conditionnel Passé :</strong> <i>« J'aurai fini à midi » ➔ Il a affirmé qu'il aurait fini à midi.</i></li>
        <li><strong>Imparfait / Plus-que-parfait / Conditionnel :</strong> RESTENT INCHANGÉS.</li>
      </ul>
      <p><strong>Modifications indispensables des marqueurs temporels :</strong></p>
      <p><i>aujourd'hui ➔ ce jour-là</i> | <i>hier ➔ la veille</i> | <i>demain ➔ le lendemain</i> | <i>la semaine prochaine ➔ la semaine suivante</i> | <i>en ce moment ➔ à ce moment-là</i>.</p>
    `,
    questions: [
      {
        id: "b2-2-q1",
        prompt: "Le directeur a annoncé hier : « Les résultats financiers dépasseront nos prévisions. » ➔ Le directeur a annoncé que les résultats financiers _____ leurs prévisions.",
        options: [
          "dépasseraient",
          "dépasseront",
          "dépassaient",
          "auraient dépassé"
        ],
        correct: 0,
        explanation: "Avec un verbe introducteur au passé ('a annoncé'), le futur simple ('dépasseront') devient obligatoirement un conditionnel présent ('dépasseraient')."
      },
      {
        id: "b2-2-q2",
        prompt: "Elle m'a confié : « J'ai déjà terminé la rédaction du rapport hier. » ➔ Elle m'a confié qu'elle _____ la rédaction du rapport _____ .",
        options: [
          "avait déjà terminé / la veille",
          "a déjà terminé / hier",
          "avait déjà terminé / hier",
          "terminait / le lendemain"
        ],
        correct: 0,
        explanation: "Le passé composé ('ai terminé') devient plus-que-parfait ('avait terminé') et le marqueur temporel 'hier' devient 'la veille'."
      },
      {
        id: "b2-2-q3",
        prompt: "Le maire a assuré : « Les travaux de voirie commenceront la semaine prochaine. » ➔ Le maire a assuré que les travaux _____ la semaine _____ .",
        options: [
          "commenceraient / suivante",
          "commenceront / prochaine",
          "commençaient / suivante",
          "auraient commencé / suivante"
        ],
        correct: 0,
        explanation: "Futur simple ➔ Conditionnel présent ('commenceraient') et 'la semaine prochaine' ➔ 'la semaine suivante'."
      },
      {
        id: "b2-2-q4",
        prompt: "Il m'a demandé avec insistance : « Est-ce que tu peux m'aider en ce moment ? » ➔ Il m'a demandé si je _____ l'aider _____ .",
        options: [
          "pouvais / à ce moment-là",
          "peux / en ce moment",
          "pourrais / ce jour-là",
          "puisse / à ce moment-là"
        ],
        correct: 0,
        explanation: "Présent ('peux') ➔ Imparfait ('pouvais') et 'en ce moment' ➔ 'à ce moment-là'."
      },
      {
        id: "b2-2-q5",
        prompt: "Les chercheurs ont affirmé : « Nous aurons publié nos conclusions avant la fin du trimestre. » ➔ Les chercheurs ont affirmé qu'ils _____ leurs conclusions avant la fin du trimestre.",
        options: [
          "auraient publié",
          "auront publié",
          "avaient publié",
          "publieraient"
        ],
        correct: 0,
        explanation: "Le futur antérieur ('aurons publié') se transpose en conditionnel passé ('auraient publié') lors du passage au discours indirect dans le passé."
      },
      {
        id: "b2-2-q6",
        prompt: "Marc m'a juré : « Je ne savais rien de cette affaire. » ➔ Marc m'a juré qu'il ne _____ rien de cette affaire.",
        options: [
          "savait",
          "avait su",
          "saurait",
          "sût"
        ],
        correct: 0,
        explanation: "L'imparfait du discours direct ('savais') reste inchangé à l'imparfait ('savait') au discours indirect."
      },
      {
        id: "b2-2-q7",
        prompt: "La ministre a promis aux syndicats : « Une nouvelle table ronde aura lieu demain matin. » ➔ La ministre a promis qu'une nouvelle table ronde _____ matin.",
        options: [
          "aurait lieu le lendemain",
          "aura lieu le lendemain",
          "avait lieu demain",
          "eût lieu le jour suivant"
        ],
        correct: 0,
        explanation: "Futur simple ('aura lieu') ➔ Conditionnel présent ('aurait lieu') et 'demain' ➔ 'le lendemain'."
      },
      {
        id: "b2-2-q8",
        prompt: "Il nous a demandé : « Qu'avez-vous décidé lors de votre dernière réunion ? » ➔ Il nous a demandé ce que nous _____ lors de notre réunion précédente.",
        options: [
          "avions décidé",
          "avons décidé",
          "décidions",
          "aurions décidé"
        ],
        correct: 0,
        explanation: "'Qu'avez-vous décidé' ➔ 'ce que nous avions décidé' (plus-que-parfait marquant l'antériorité)."
      }
    ]
  },
  {
    id: "b2-articulateurs-complexes",
    title: "B2.3 Articulateurs Logiques Complexes (Concession, Cause, But)",
    level: "🔴 Niveau B2",
    levelCode: "B2",
    category: "grammaire",
    ruleTitle: "Connecteurs argumentatifs formels et nuances",
    ruleContent: `
      <p>Au niveau B2, la maîtrise des articulateurs logiques est le critère majeur d'évaluation de la production écrite et orale :</p>
      <ul>
        <li><strong>Concession / Opposition :</strong><br>
        <i>Bien que / Quoique (+ Subjonctif)</i> | <i>En dépit de / Malgré (+ Nom)</i> | <i>Tandis que / Alors que (+ Indicatif)</i> | <i>Certes [...] néanmoins / toutefois / cependant</i>.</li>
        <li><strong>Cause nuancée :</strong><br>
        <i>Étant donné que / Dans la mesure où (+ Indicatif)</i> | <i>Faute de (+ Nom / Infinitif)</i> | <i>Sous prétexte que (+ Indicatif)</i>.</li>
        <li><strong>Conséquence rigoureuse :</strong><br>
        <i>Dès lors / Par voie de conséquence</i> | <i>De sorte que / Si bien que (+ Indicatif)</i> | <i>Au point de (+ Infinitif)</i>.</li>
        <li><strong>Condition & Restriction :</strong><br>
        <i>À condition que / Pourvu que (+ Subjonctif)</i> | <i>À moins que (+ Subjonctif + 'ne' explétif)</i>.</li>
      </ul>
    `,
    questions: [
      {
        id: "b2-3-q1",
        prompt: "_____ les conditions météorologiques soient exécrables, les sauveteurs poursuivent leurs recherches.",
        options: [
          "Bien que",
          "Malgré",
          "En dépit de",
          "Tandis que"
        ],
        correct: 0,
        explanation: "'Bien que' s'associe à une subordonnée au subjonctif ('soient'). 'Malgré' et 'en dépit de' ne s'emploient qu'avec un nom."
      },
      {
        id: "b2-3-q2",
        prompt: "Le projet a été rejeté par les riverains _____ concertation préalable de la part des élus.",
        options: [
          "faute de",
          "grâce à",
          "parce que",
          "de sorte que"
        ],
        correct: 0,
        explanation: "'Faute de' exprime la cause par manque ou carence ('faute de concertation')."
      },
      {
        id: "b2-3-q3",
        prompt: "Nous voterons cette motion d'accord, à moins que vous ne _____ le calendrier de mise en œuvre.",
        options: [
          "modifiiez",
          "modifiez",
          "modifierez",
          "modifieriez"
        ],
        correct: 0,
        explanation: "'À moins que' exige le subjonctif présent ('modifiiez' à la 2e personne du pluriel avec le double i)."
      },
      {
        id: "b2-3-q4",
        prompt: "L'inflation a progressé de 6 %, _____ le pouvoir d'achat des classes moyennes a fortement diminué.",
        options: [
          "de sorte que",
          "pour que",
          "bien que",
          "faute de quoi"
        ],
        correct: 0,
        explanation: "'De sorte que' suivi de l'indicatif ('a diminué') exprime la conséquence constatée dans les faits."
      },
      {
        id: "b2-3-q5",
        prompt: "Il refuse d'admettre ses erreurs _____ ses arguments ont été réfutés par l'ensemble des experts.",
        options: [
          "alors même que",
          "en dépit de",
          "afin que",
          "à condition que"
        ],
        correct: 0,
        explanation: "'Alors même que' (+ indicatif) introduit une opposition concessive forte entre deux faits réels."
      },
      {
        id: "b2-3-q6",
        prompt: "La municipalité accordera cette subvention _____ les comptes de l'association soient certifiés conformes.",
        options: [
          "pourvu que",
          "dès lors que",
          "puisque",
          "tandis que"
        ],
        correct: 0,
        explanation: "'Pourvu que' exprime la condition indispensable et régit le subjonctif présent ('soient')."
      },
      {
        id: "b2-3-q7",
        prompt: "_____ des réserves formulées par les syndicats, la direction a promulgué le nouvel accord d'entreprise.",
        options: [
          "En dépit",
          "Bien que",
          "Quoique",
          "Tandis que"
        ],
        correct: 0,
        explanation: "'En dépit de' s'emploie devant le groupe nominal 'des réserves formulées'."
      },
      {
        id: "b2-3-q8",
        prompt: "Il a agi de la sorte _____ la direction lui aurait donné son accord tacite.",
        options: [
          "sous prétexte que",
          "grâce à ce que",
          "pourvu que",
          "afin que"
        ],
        correct: 0,
        explanation: "'Sous prétexte que' introduit une cause contestée ou invoquée comme justification discutable."
      }
    ]
  },
  {
    id: "b2-hypothese-passe-regret",
    title: "B2.4 Hypothèse sur le Passé & Le Regret (Si + PQP ➜ Cond. Passé)",
    level: "🔴 Niveau B2",
    levelCode: "B2",
    category: "conjugaison",
    ruleTitle: "L'Irréel du Passé, le Regret & le Reproche",
    ruleContent: `
      <p>L'hypothèse sur le passé (irréel du passé) permet d'imaginer une issue différente à un événement déjà accompli et non modifiable :</p>
      <p><strong>Structure : Si + Plus-que-parfait ➔ Conditionnel Passé</strong></p>
      <p>Exemples :</p>
      <ul>
        <li><i>Si nous <strong>avions pris</strong> le train de 8h, nous <strong>serions arrivés</strong> à l'heure pour la réunion.</i> (Mais nous avons pris le train de 9h et nous étions en retard).</li>
        <li><i>Si tu m'<strong>avais prévenu</strong>, je t'<strong>aurais aidé</strong>.</i></li>
      </ul>
      <p><strong>Formation du Conditionnel Passé :</strong> Auxiliaire ÊTRE ou AVOIR au <strong>Conditionnel Présent</strong> (<i>aurais / serais</i>) + <strong>Participe Passé</strong>.</p>
      <p><strong>Expression du regret et du reproche :</strong></p>
      <ul>
        <li>Regret personnel : <i>J'aurais aimé assister à ce concert ; J'aurais dû travailler davantage.</i></li>
        <li>Reproche à autrui : <i>Tu aurais pu me téléphoner ! ; Vous auriez dû vérifier l'information.</i></li>
      </ul>
    `,
    questions: [
      {
        id: "b2-4-q1",
        prompt: "Si les secours _____ plus tôt sur les lieux du sinistre, ils _____ sauver le monument.",
        options: [
          "étaient intervenus / auraient pu",
          "seraient intervenus / avaient pu",
          "étaient intervenus / avaient pu",
          "seraient intervenus / auraient pu"
        ],
        correct: 0,
        explanation: "Structure de l'irréel du passé : Si + Plus-que-parfait ('étaient intervenus') ➔ Conditionnel passé ('auraient pu')."
      },
      {
        id: "b2-4-q2",
        prompt: "Quel dommage ! Tu _____ me prévenir de ton arrivée, je serais venu t'accueillir à l'aéroport.",
        options: [
          "aurais dû",
          "avais dû",
          "as dû",
          "aurais devoir"
        ],
        correct: 0,
        explanation: "'Tu aurais dû' (conditionnel passé du verbe devoir) exprime le reproche amical et le regret sur une occasion manquée."
      },
      {
        id: "b2-4-q3",
        prompt: "Si nous _____ de cette opportunité d'investissement, nous _____ d'importants bénéfices.",
        options: [
          "avions été informés / aurions réalisé",
          "aurions été informés / avions réalisé",
          "avions été informés / avions réalisé",
          "étions informés / aurions réalisé"
        ],
        correct: 0,
        explanation: "Si + plus-que-parfait passif ('avions été informés') ➔ conditionnel passé actif ('aurions réalisé')."
      },
      {
        id: "b2-4-q4",
        prompt: "J'_____ tellement _____ poursuivre mes études de médecine à l'époque !",
        options: [
          "aurais / aimé",
          "avais / aimé",
          "aurais / aimant",
          "serais / aimé"
        ],
        correct: 0,
        explanation: "'J'aurais aimé + infinitif' exprime le regret nostalgique rétrospectif."
      },
      {
        id: "b2-4-q5",
        prompt: "Sans ton intervention décisive, nous _____ certainement faillite lors de cette crise.",
        options: [
          "aurions fait",
          "avions fait",
          "ferions",
          "ayons fait"
        ],
        correct: 0,
        explanation: "L'ellipse de l'hypothèse 'Sans ton intervention' (= Si tu n'étais pas intervenu) régit le conditionnel passé ('aurions fait')."
      },
      {
        id: "b2-4-q6",
        prompt: "Si vous _____ plus rigoureusement les consignes de sécurité, cet incident ne _____ jamais _____ .",
        options: [
          "aviez respecté / ne se serait produit",
          "auriez respecté / ne se fût produit",
          "aviez respecté / ne s'était produit",
          "respectiez / ne se serait produit"
        ],
        correct: 0,
        explanation: "Si + plus-que-parfait ('aviez respecté') ➔ conditionnel passé pronominal avec être ('ne se serait produit')."
      },
      {
        id: "b2-4-q7",
        prompt: "Vous _____ pu faire un effort pour assister à la remise de diplôme de votre fille !",
        options: [
          "auriez",
          "aviez",
          "avez",
          "soyez"
        ],
        correct: 0,
        explanation: "'Vous auriez pu + infinitif' formule un reproche atténué au conditionnel passé."
      },
      {
        id: "b2-4-q8",
        prompt: "S'il avait fait beau le week-end dernier, nous _____ une excursion en montagne.",
        options: [
          "aurions fait",
          "avions fait",
          "ferions",
          "aurons fait"
        ],
        correct: 0,
        explanation: "Si + plus-que-parfait ('avait fait') ➔ conditionnel passé ('aurions fait')."
      }
    ]
  },
  {
    id: "b2-restriction-mise-en-relief",
    title: "B2.5 La Restriction & La Mise en Relief (Ne... que, C'est... qui/que)",
    level: "🔴 Niveau B2",
    levelCode: "B2",
    category: "grammaire",
    ruleTitle: "Structures clivées & Nuances restrictives",
    ruleContent: `
      <p><strong>La restriction avec 'Ne ... que' :</strong> Équivaut à <i>seulement</i> ou <i>uniquement</i>. 'Ne' se place avant le verbe et 'que' se place directement devant l'élément restreint (ex: <i>Il ne boit que de l'eau ; Nous ne partirons qu'à 18 heures</i>). Au passé composé : <i>Il n'a mangé qu'une pomme.</i></p>
      <p><strong>La Mise en Relief (Structures Clivées) :</strong></p>
      <ul>
        <li><strong>C'est ... qui (Met en relief le SUJET) :</strong> Ex: <i><strong>C'est</strong> le directeur <strong>qui</strong> a pris cette décision.</i> (Le verbe s'accorde avec l'élément mis en relief : <i>C'est moi qui <strong>suis</strong> responsable ; Ce sont eux qui <strong>ont</strong> gagné</i>).</li>
        <li><strong>C'est ... que (Met en relief un COD ou un complément circonstanciel) :</strong> Ex: <i><strong>C'est</strong> ce livre <strong>que</strong> je préfère ; <strong>C'est</strong> à Paris <strong>que</strong> nous nous sommes rencontrés.</i></li>
        <li><strong>Ce qui / Ce que / Ce dont ... c'est :</strong> Ex: <i><strong>Ce qui</strong> m'inquiète, <strong>c'est</strong> la hausse du chômage ; <strong>Ce dont</strong> nous avons besoin, <strong>c'est</strong> de concertation.</i></li>
      </ul>
    `,
    questions: [
      {
        id: "b2-5-q1",
        prompt: "C'est moi qui _____ la responsabilité de ce projet, et ce sont mes collaborateurs qui en _____ les mérites.",
        options: [
          "porte / recueillent",
          "porte / recueille",
          "portez / recueillent",
          "portes / recueille"
        ],
        correct: 0,
        explanation: "Dans 'C'est moi qui...', le verbe s'accorde avec le pronom tonique 'moi' (1re personne singulier = porte). Avec 'ce sont mes collaborateurs qui', le verbe est au pluriel (recueillent)."
      },
      {
        id: "b2-5-q2",
        prompt: "Il _____ consacre son temps libre _____ à la peinture et à la lecture d'essais philosophiques.",
        options: [
          "ne / qu'",
          "ne / pas",
          "n' / que",
          "ne / point"
        ],
        correct: 0,
        explanation: "'Ne... qu'' exprime la restriction exclusive équivalente à 'uniquement'."
      },
      {
        id: "b2-5-q3",
        prompt: "_____ me préoccupe au plus haut point dans ce dossier, _____ l'absence totale d'études d'impact.",
        options: [
          "Ce qui / c'est",
          "Ce que / c'est",
          "Ce dont / c'est",
          "Ce à quoi / c'est"
        ],
        correct: 0,
        explanation: "'Ce qui' est le sujet du verbe 'préoccupe', repris par la formule de clivage 'c'est'."
      },
      {
        id: "b2-5-q4",
        prompt: "C'est pour cette raison précise _____ nous avons décidé d'interjeter appel du jugement.",
        options: [
          "que",
          "qui",
          "dont",
          "où"
        ],
        correct: 0,
        explanation: "Pour mettre en relief un complément circonstanciel de cause ('pour cette raison'), on utilise 'C'est... que'."
      },
      {
        id: "b2-5-q5",
        prompt: "_____ nous avons le plus cruellement besoin aujourd'hui, c'est d'une réelle cohésion sociale.",
        options: [
          "Ce dont",
          "Ce qui",
          "Ce que",
          "Ce à quoi"
        ],
        correct: 0,
        explanation: "L'expression est 'avoir besoin de'. Le pronom relatif démonstratif est donc 'Ce dont'."
      },
      {
        id: "b2-5-q6",
        prompt: "Ce _____ nous aspirons tous, c'est à une paix durable et équitable.",
        options: [
          "à quoi",
          "de quoi",
          "dont",
          "ce qui"
        ],
        correct: 0,
        explanation: "Le verbe 'aspirer' se construit avec 'à' (aspirer à quelque chose) ➔ 'Ce à quoi nous aspirons'."
      },
      {
        id: "b2-5-q7",
        prompt: "Ce sont les associations citoyennes qui _____ l'alerte sur la dégradation du cadre de vie.",
        options: [
          "ont donné",
          "a donné",
          "ont donnés",
          "avait donné"
        ],
        correct: 0,
        explanation: "Le sujet mis en relief 'les associations citoyennes' est au pluriel ➔ 'ont donné'."
      },
      {
        id: "b2-5-q8",
        prompt: "Le train ne partira _____ dix heures demain matin.",
        options: [
          "qu'à",
          "que à",
          "qu'en",
          "pas que"
        ],
        correct: 0,
        explanation: "Élision obligatoire de 'que' devant la préposition 'à' ➔ 'qu'à dix heures'."
      }
    ]
  },
  {
    id: "b2-indicatif-vs-subjonctif",
    title: "B2.6 Indicatif ou Subjonctif ? (Opinion, doute, après que/avant que)",
    level: "🔴 Niveau B2",
    levelCode: "B2",
    category: "conjugaison",
    ruleTitle: "Verbes d'Opinion, Conjonctions Temporelles & Certitude vs Doute",
    ruleContent: `
      <p>L'arbitrage entre Indicatif (monde réel/certain) et Subjonctif (monde possible/incertain) est le pivot stylistique du B2 :</p>
      <ul>
        <li><strong>Verbes d'opinion et de déclaration (Penser, croire, estimer, être sûr) :</strong><br>
        - À la forme affirmative ➔ <strong>INDICATIF</strong>. Ex: <i>Je pense qu'il <strong>est</strong> honnête.</i><br>
        - À la forme négative ou interrogative avec inversion ➔ <strong>SUBJONCTIF</strong>. Ex: <i>Je ne pense pas qu'il <strong>soit</strong> honnête ; Pensez-vous qu'il <strong>puisse</strong> réussir ?</i></li>
        <li><strong>Conjonctions temporelles :</strong><br>
        - <i>Avant que ➔ SUBJONCTIF</i> (fait non encore accompli). Ex: <i>Avant qu'il ne <strong>parte</strong>.</i><br>
        - <i>Après que ➔ INDICATIF</i> (fait accompli dans la réalité). Ex: <i>Après qu'il <strong>est parti</strong> / <strong>a fini</strong>.</i></li>
        <li><strong>Espérer que :</strong> Toujours suivi de l'<strong>INDICATIF</strong> (futur ou présent), JAMAIS du subjonctif ! Ex: <i>J'espère qu'il <strong>viendra</strong>.</i></li>
      </ul>
    `,
    questions: [
      {
        id: "b2-6-q1",
        prompt: "Je suis persuadé qu'il _____ raison, mais je ne pense pas qu'il _____ convaincre l'assemblée.",
        options: [
          "a / puisse",
          "ait / peut",
          "ait / puisse",
          "a / peut"
        ],
        correct: 0,
        explanation: "La certitude affirmative ('Je suis persuadé') régit l'indicatif ('a'), tandis que l'opinion négative ('je ne pense pas') exige le subjonctif ('puisse')."
      },
      {
        id: "b2-6-q2",
        prompt: "Nous sommes allés boire un café après que la réunion _____ .",
        options: [
          "s'est terminée",
          "se soit terminée",
          "se termine",
          "serait terminée"
        ],
        correct: 0,
        explanation: "Règle grammaticale stricte : 'Après que' exprime un fait accompli et exige l'indicatif ('s'est terminée') et non le subjonctif !"
      },
      {
        id: "b2-6-q3",
        prompt: "J'espère sincèrement que vous _____ un excellent séjour parmi nous.",
        options: [
          "passerez",
          "passiez",
          "passeriez",
          "passassiez"
        ],
        correct: 0,
        explanation: "'Espérer que' se construit toujours avec l'indicatif (le futur simple 'passerez'), jamais avec le subjonctif."
      },
      {
        id: "b2-6-q4",
        prompt: "Pensez-vous réellement que cette réforme _____ applicable sans heurts ?",
        options: [
          "soit",
          "est",
          "sera",
          "serait"
        ],
        correct: 0,
        explanation: "Dans une interrogation avec inversion de verbe d'opinion ('Pensez-vous que'), le subjonctif ('soit') est requis car l'affirmation est mise en doute."
      },
      {
        id: "b2-6-q5",
        prompt: "Il est indéniable que cette mesure _____ de nombreux emplois.",
        options: [
          "créera",
          "crée",
          "créât",
          "créerait"
        ],
        correct: 0,
        explanation: "'Il est indéniable que' exprime une certitude absolue incontestable ➔ indicatif (futur simple 'créera' ou présent)."
      },
      {
        id: "b2-6-q6",
        prompt: "Il semble qu'il _____ de graves désaccords au sein de l'équipe dirigeante.",
        options: [
          "y ait",
          "y a",
          "y aura",
          "y aurait"
        ],
        correct: 0,
        explanation: "'Il semble que' exprime une apparence incertaine et exige le subjonctif ('y ait'), à la différence de 'il me semble que' qui prend l'indicatif."
      },
      {
        id: "b2-6-q7",
        prompt: "Dépêchons-nous de terminer avant que la nuit ne _____ .",
        options: [
          "tombe",
          "tombera",
          "tombe-t-elle",
          "est tombée"
        ],
        correct: 0,
        explanation: "'Avant que' se réfère à un événement non encore advenu et impose le subjonctif présent ('tombe')."
      },
      {
        id: "b2-6-q8",
        prompt: "Croyez-vous qu'elle _____ capable de surmonter cette épreuve ?",
        options: [
          "soit",
          "est",
          "sera",
          "serait"
        ],
        correct: 0,
        explanation: "L'inversion interrogative du verbe croire met la proposition en doute ➔ subjonctif ('soit')."
      }
    ]
  },
  {
    id: "b2-conditionnel-passe-subjonctif-passe",
    title: "B2.7 Conditionnel Passé & Subjonctif Passé",
    level: "🔴 Niveau B2",
    levelCode: "B2",
    category: "conjugaison",
    ruleTitle: "Information non confirmée & Antériorité du subjonctif",
    ruleContent: `
      <p><strong>1. Le Conditionnel Passé de distanciation journalistique :</strong></p>
      <p>Permet de rapporter une information non vérifiée ou sous réserve de confirmation officielle (très fréquent dans la presse B2) :</p>
      <p>Ex: <i>Selon nos sources, un accord <strong>aurait été trouvé</strong> cette nuit entre les négociateurs. L'accident <strong>aurait fait</strong> deux blessés légers.</i></p>
      <p><strong>2. Le Subjonctif Passé (Antériorité par rapport au verbe principal) :</strong></p>
      <p><strong>Structure :</strong> Auxiliaire ÊTRE ou AVOIR au <strong>Subjonctif Présent</strong> (<i>aie, aies, ait, ayons, ayez, aient / sois, sois, soit...</i>) + <strong>Participe Passé</strong>.</p>
      <p>Ex: <i>Je doute qu'il <strong>ait terminé</strong> son travail avant midi. Je suis ravi que vous <strong>soyez venus</strong>.</i></p>
    `,
    questions: [
      {
        id: "b2-7-q1",
        prompt: "Selon une source diplomatique proche du dossier, le ministre _____ sa démission ce matin.",
        options: [
          "aurait présenté",
          "a présenté",
          "avait présenté",
          "ait présenté"
        ],
        correct: 0,
        explanation: "Le conditionnel passé exprime ici une information journalistique sous réserve de confirmation officielle ('aurait présenté')."
      },
      {
        id: "b2-7-q2",
        prompt: "Je regrette vivement que vous n'_____ pas _____ à notre invitation samedi dernier.",
        options: [
          "ayez / répondu",
          "avez / répondu",
          "auriez / répondu",
          "aviez / répondu"
        ],
        correct: 0,
        explanation: "'Regretter que' exige le subjonctif, et comme l'action est accomplie dans le passé, on emploie le subjonctif passé : 'ayez répondu'."
      },
      {
        id: "b2-7-q3",
        prompt: "D'après les premiers éléments de l'enquête, le feu _____ d'origine criminelle.",
        options: [
          "aurait été",
          "a été",
          "avait été",
          "soit"
        ],
        correct: 0,
        explanation: "Information hypothétique rapportée au conditionnel passé pour marquer la prudence journalistique."
      },
      {
        id: "b2-7-q4",
        prompt: "Bien que l'équipe _____ toutes ses forces dans la bataille, la victoire lui a échappé.",
        options: [
          "ait jeté",
          "a jeté",
          "aurait jeté",
          "avait jeté"
        ],
        correct: 0,
        explanation: "'Bien que' + action antérieure achevée dans le passé = subjonctif passé ('ait jeté')."
      },
      {
        id: "b2-7-q5",
        prompt: "Il est surprenant que les autorités n'_____ pas _____ de mesures plus tôt.",
        options: [
          "aient / pris",
          "ont / pris",
          "auraient / pris",
          "avaient / pris"
        ],
        correct: 0,
        explanation: "L'appréciation 'Il est surprenant que' + antériorité passée régit le subjonctif passé ('aient pris')."
      },
      {
        id: "b2-7-q6",
        prompt: "Un violent séisme _____ ressenti cette nuit au large des côtes sans faire de dégâts majeurs.",
        options: [
          "aurait été",
          "a été",
          "avait été",
          "eût été"
        ],
        correct: 0,
        explanation: "Formule journalistique de précaution au conditionnel passé passif ('aurait été ressenti')."
      },
      {
        id: "b2-7-q7",
        prompt: "C'est le plus bel hommage qu'on lui _____ jamais _____ de son vivant.",
        options: [
          "ait / rendu",
          "a / rendu",
          "aurait / rendu",
          "avait / rendu"
        ],
        correct: 0,
        explanation: "Après un superlatif relatif ('le plus bel hommage que'), le subjonctif passé ('ait rendu') est de rigueur pour marquer l'accompli."
      },
      {
        id: "b2-7-q8",
        prompt: "Je doute fort qu'ils _____ réussi sans l'intervention de leur mentor.",
        options: [
          "aient",
          "ont",
          "auraient",
          "avaient"
        ],
        correct: 0,
        explanation: "Doute sur une action passée accomplie ➔ subjonctif passé 'aient réussi'."
      }
    ]
  },
  {
    id: "b2-participe-present-adjectif-verbal",
    title: "B2.8 Participe Présent & Adjectif Verbal",
    level: "🔴 Niveau B2",
    levelCode: "B2",
    category: "conjugaison",
    ruleTitle: "Forme verbale invariable en -ant vs Adjectif accordé",
    ruleContent: `
      <p>La distinction orthographique et syntaxique entre Participe Présent et Adjectif Verbal est un point de grammaire avancée fondamental :</p>
      <ul>
        <li><strong>Le Participe Présent (Valeur de verbe - Invariable) :</strong><br>
        Se termine toujours par <i>-ant</i>. Il peut avoir un COD, un complément circonstanciel ou être à la forme négative. Ex: <i>Des personnes <strong>négligeant</strong> leurs devoirs ; Une femme <strong>parlant</strong> trois langues.</i></li>
        <li><strong>L'Adjectif Verbal (Valeur d'adjectif qualificatif - S'ACCORDE) :</strong><br>
        S'accorde en genre et en nombre avec le nom. Ex: <i>Des paroles <strong>négligentes</strong> ; Une attitude <strong>provocante</strong>.</i></li>
      </ul>
      <p><strong>Différences orthographiques fréquentes :</strong></p>
      <ul>
        <li>Participe présent en <i>-ant</i> vs Adjectif verbal en <i>-ent</i> : <i>différant / différent, émergeant / émergent, excellant / excellent, négligeant / négligent, précédant / précédent</i>.</li>
        <li>Participe en <i>-quant / -guant</i> vs Adjectif en <i>-cant / -gant</i> : <i>communiquant / communicatif (ou communicant), convainquant / convaincant, naviguant / navigant, fatiguant / fatigant</i>.</li>
      </ul>
    `,
    questions: [
      {
        id: "b2-8-q1",
        prompt: "Des arguments particulièrement _____ et des preuves matérielles _____ tout doute ont emporté la décision.",
        options: [
          "convaincants / excluant",
          "convainquants / excluant",
          "convaincants / excluants",
          "convainquants / excluante"
        ],
        correct: 0,
        explanation: "'Convaincants' est adjectif verbal (orthographe en -cant, accord masculin pluriel) et 'excluant' est participe présent avec COD ('tout doute', donc invariable en -ant)."
      },
      {
        id: "b2-8-q2",
        prompt: "Les conclusions du rapport _____ les débats parlementaires sont consultables en ligne.",
        options: [
          "précédant",
          "précédent",
          "précédents",
          "précédante"
        ],
        correct: 0,
        explanation: "'Précédant' a une valeur verbale avec son COD ('les débats parlementaires'), c'est un participe présent invariable se terminant par '-ant'."
      },
      {
        id: "b2-8-q3",
        prompt: "Cette décision a été prise lors de la séance _____ du conseil municipal.",
        options: [
          "précédente",
          "précédante",
          "précédent",
          "précédant"
        ],
        correct: 0,
        explanation: "'Précédente' est l'adjectif verbal accordé au féminin singulier avec 'la séance'."
      },
      {
        id: "b2-8-q4",
        prompt: "C'est un travail intellectuel extrêmement _____ qui exige une concentration continue.",
        options: [
          "fatigant",
          "fatiguant",
          "fatigants",
          "fatiguants"
        ],
        correct: 0,
        explanation: "L'adjectif verbal s'écrit 'fatigant' (sans 'u'), tandis que le participe présent s'écrit 'fatiguant' (avec 'u')."
      },
      {
        id: "b2-8-q5",
        prompt: "Des entreprises _____ dans le secteur des énergies renouvelables ont été primées.",
        options: [
          "excellant",
          "excellent",
          "excellents",
          "excellantes"
        ],
        correct: 0,
        explanation: "'Excellant' est ici le participe présent invariable du verbe exceller, complété par 'dans le secteur'."
      },
      {
        id: "b2-8-q6",
        prompt: "Ces jeunes diplômés ont présenté des dossiers tout à fait _____ .",
        options: [
          "excellents",
          "excellants",
          "excellent",
          "excellantes"
        ],
        correct: 0,
        explanation: "'Excellents' est l'adjectif verbal accordé au masculin pluriel avec 'des dossiers' (orthographe en -ent)."
      },
      {
        id: "b2-8-q7",
        prompt: "En _____ les consignes élémentaires de sécurité, ces usagers ont provoqué un accident.",
        options: [
          "négligeant",
          "négligent",
          "négligents",
          "négligeants"
        ],
        correct: 0,
        explanation: "Après la préposition 'en', on forme le gérondif avec le participe présent invariable en '-ant' : 'en négligeant'."
      },
      {
        id: "b2-8-q8",
        prompt: "Il a été sanctionné pour son comportement professionnel _____ .",
        options: [
          "négligent",
          "négligeant",
          "négligents",
          "négligeante"
        ],
        correct: 0,
        explanation: "L'adjectif verbal s'écrit 'négligent' (en -ent) s'accordant avec 'comportement'."
      }
    ]
  },
  {
    id: "b2-connecteurs-nuance-mise-en-relief",
    title: "B2.9 Connecteurs d'Argumentation, Nuance & Rhétorique B2",
    level: "🔴 Niveau B2",
    levelCode: "B2",
    category: "grammaire",
    ruleTitle: "Structures Argumentatives Majeures, Concession & Clivages Rhétoriques",
    ruleContent: `
      <p>Pour exceller en production écrite et orale, l'argumentation doit être structurée par des formules de haut niveau :</p>
      <ul>
        <li><strong>Concession dialectique :</strong><br>
        <i>Certes, [...] néanmoins / toutefois / cependant</i> ➔ Admettre temporairement une objection avant de développer sa réfutation.<br>
        <i>Force est de constater que...</i> ➔ Poser un fait incontestable avec autorité.<br>
        <i>Il n'en demeure pas moins que...</i> ➔ Réaffirmer sa thèse centrale au-delà des réserves.</li>
        <li><strong>Focalisation et transition :</strong><br>
        <i>À cet égard / À ce propos</i> ➔ Chaînage logique anaphorique.<br>
        <i>Quant à / Pour ce qui est de (+ nom)</i> ➔ Déplacement thématique ciblé.<br>
        <i>Non seulement [...] mais également / mais encore...</i> ➔ Addition cumulative emphatique.</li>
        <li><strong>Mise en relief rhétorique (Cleft sentences) :</strong><br>
        <i>Ce qui m'interpelle au premier chef, c'est...</i> | <i>Ce à quoi nous devons veiller, c'est...</i></li>
      </ul>
    `,
    questions: [
      {
        id: "b2-9-q1",
        prompt: "_____ le coût initial de cette transition écologique soit substantiel, _____ les bénéfices à long terme sont inestimables.",
        options: [
          "Certes / néanmoins",
          "Bien que / toutefois",
          "Puisque / néanmoins",
          "Tandis que / cependant"
        ],
        correct: 0,
        explanation: "La structure 'Certes... néanmoins' est la formule royale de concession dialectique en production orale et écrite."
      },
      {
        id: "b2-9-q2",
        prompt: "_____ que les mesures incitatives actuelles n'ont pas suffi à résorber la précarité énergétique.",
        options: [
          "Force est de constater",
          "Il est force de constater",
          "Constatant la force",
          "Forcé de constater"
        ],
        correct: 0,
        explanation: "La locution figée 'Force est de constater que...' s'emploie pour poser un constat lucide et incontestable."
      },
      {
        id: "b2-9-q3",
        prompt: "Cette réforme est _____ injuste socialement, _____ inefficace sur le plan économique.",
        options: [
          "non seulement / mais encore",
          "non seulement / et aussi",
          "pas seulement / et encore",
          "soit / soit"
        ],
        correct: 0,
        explanation: "La structure d'addition emphatique est 'non seulement [...] mais encore / mais également'."
      },
      {
        id: "b2-9-q4",
        prompt: "Bien que des progrès aient été accomplis, il _____ que le chômage des jeunes reste préoccupant.",
        options: [
          "n'en demeure pas moins",
          "ne reste pas moins",
          "n'en est pas moins",
          "ne demeure moins"
        ],
        correct: 0,
        explanation: "La formule soutenue exacte est 'il n'en demeure pas moins que...' pour affirmer la persistance d'une vérité."
      },
      {
        id: "b2-9-q5",
        prompt: "Le télétravail réorganise notre rapport à l'espace urbain. _____ , la création de tiers-lieux constitue une avancée majeure.",
        options: [
          "À cet égard",
          "Quant à",
          "Faute de quoi",
          "Sous prétexte que"
        ],
        correct: 0,
        explanation: "'À cet égard' assure une liaison logique directe avec le point précis qui vient d'être énoncé."
      },
      {
        id: "b2-9-q6",
        prompt: "Ce qui m'interpelle _____ , c'est l'absence totale de consultation démocratique des riverains.",
        options: [
          "au premier chef",
          "en premier ordre",
          "au premier rang",
          "à première vue"
        ],
        correct: 0,
        explanation: "L'expression soutenue 'au premier chef' signifie en priorité absolue ou au plus haut point."
      },
      {
        id: "b2-9-q7",
        prompt: "_____ aux conséquences écologiques du projet, elles ont été largement sous-estimées par le promoteur.",
        options: [
          "Quant",
          "Quand",
          "Qu'en",
          "Camps"
        ],
        correct: 0,
        explanation: "'Quant à' (avec un 't') s'emploie pour isoler un thème particulier ('Quant aux conséquences')."
      },
      {
        id: "b2-9-q8",
        prompt: "Tout bien _____ , les avantages de cette mesure surpassent nettement ses inconvénients temporaires.",
        options: [
          "pesé",
          "peser",
          "pesant",
          "pesée"
        ],
        correct: 0,
        explanation: "La locution conclusive figée s'écrit 'Tout bien pesé' (ou 'Tout bien considéré')."
      }
    ]
  },
  {
    id: "b2-orthographe-accords-pronominaux-couleurs",
    title: "B2.10 Accords Complexes (Participe passé COD, Pronominaux, Tout)",
    level: "🔴 Niveau B2",
    levelCode: "B2",
    category: "orthographe",
    ruleTitle: "Cas Particuliers d'Accords et Pièges Orthographiques B2",
    ruleContent: `
      <p><strong>1. Participe Passé des Verbes Pronominaux :</strong></p>
      <ul>
        <li>Verbes essentiellement pronominaux (qui n'existent pas sans le 'se') ➔ Accord systématique avec le sujet. Ex: <i>Elles se sont <strong>enfuies</strong> ; Ils se sont <strong>souvenus</strong>.</i></li>
        <li>Verbes réfléchis/réciproques : Le participe s'accorde avec le COD s'il est avant (<i>Les mains qu'elle s'est <strong>lavées</strong></i>) ; aucun accord si le COD est après (<i>Elle s'est <strong>lavé</strong> les mains</i>) ou si le pronom est COI (<i>Ils se sont <strong>succédé</strong>, ils se sont <strong>parlé</strong>, ils se sont <strong>souri</strong></i>).</li>
      </ul>
      <p><strong>2. Adjectifs de Couleur :</strong></p>
      <ul>
        <li>Adjectifs simples ➔ S'accordent (<i>des robes <strong>bleues</strong>, des yeux <strong>verts</strong></i>).</li>
        <li>Adjectifs dérivés de noms (fruits, fleurs, pierres) ➔ INVARIABLES (<i>des chemises <strong>marron</strong>, des vestes <strong>orange</strong>, des foulards <strong>noisette</strong></i>). Exceptions : <i>rose, fauve, mauve, pourpre, écarlate</i> s'accordent.</li>
        <li>Adjectifs composés de deux mots ➔ TOUJOURS INVARIABLES (<i>des yeux <strong>bleu clair</strong>, des pulls <strong>vert foncé</strong></i>).</li>
      </ul>
      <p><strong>3. L'adverbe TOUT :</strong> Invariable (<i>tout émus</i>), sauf devant un adjectif féminin commençant par une consonne ou un h aspiré où il s'accorde par euphonie (<i>toute honteuse, toutes contentes</i>).</p>
    `,
    questions: [
      {
        id: "b2-10-q1",
        prompt: "Les deux reines se sont _____ pendant des décennies et se sont _____ des lettres acerbes.",
        options: [
          "succédé / envoyé",
          "succédées / envoyées",
          "succédé / envoyées",
          "succédées / envoyé"
        ],
        correct: 2,
        explanation: "'Se succéder' est intransitif (succéder à ➔ COI = invariable 'succédé'). Dans 'se sont envoyées des lettres', si le COD 'des lettres' est après, 'envoyé' reste invariable, mais si les lettres sont le COD antéposé, on accorde. Ici 'des lettres' est après ➔ 'envoyé'."
      },
      {
        id: "b2-10-q2",
        prompt: "Elle portait de magnifiques chaussures _____ et une veste _____ .",
        options: [
          "marron / vert foncé",
          "marrons / verte foncée",
          "marron / verte foncée",
          "marrons / vert foncé"
        ],
        correct: 0,
        explanation: "'Marron' (nom de fruit utilisé comme couleur) est invariable. 'Vert foncé' est un adjectif de couleur composé, donc totalement invariable."
      },
      {
        id: "b2-10-q3",
        prompt: "Elles sont restées _____ surprises et _____ honteuses de leur méprise.",
        options: [
          "tout / toute",
          "toutes / toute",
          "tout / tout",
          "toutes / toutes"
        ],
        correct: 0,
        explanation: "Devant voyelle ('surprises'), l'adverbe 'tout' est invariable. Devant consonne ou h aspiré féminin ('honteuses'), 'tout' s'accorde par euphonie ➔ 'toute honteuse'."
      },
      {
        id: "b2-10-q4",
        prompt: "Les difficultés que nous nous sommes _____ d'aplanir ont disparu.",
        options: [
          "efforcés",
          "efforcé",
          "efforcées",
          "efforcée"
        ],
        correct: 0,
        explanation: "'S'efforcer' est essentiellement pronominal ➔ le participe passé s'accorde toujours avec le sujet 'nous' (masculin pluriel) : 'efforcés'."
      },
      {
        id: "b2-10-q5",
        prompt: "Ils se sont _____ la main lors de la signature de l'accord.",
        options: [
          "serré",
          "serrée",
          "serrés",
          "serrer"
        ],
        correct: 0,
        explanation: "Le COD 'la main' est placé après le verbe. Le pronom 'se' est COI. Le participe reste invariable : 'serré'."
      },
      {
        id: "b2-10-q6",
        prompt: "Les mains qu'ils se sont _____ étaient chaleureuses.",
        options: [
          "serrées",
          "serré",
          "serrés",
          "serrée"
        ],
        correct: 0,
        explanation: "Ici, le COD 'qu'' (qui remplace 'les mains', féminin pluriel) est placé AVANT le verbe ➔ accord obligatoire : 'serrées'."
      },
      {
        id: "b2-10-q7",
        prompt: "Des tissus aux teintes _____ et des rubans _____ ornaient la salle de réception.",
        options: [
          "bleu marine / mauves",
          "bleues marines / mauves",
          "bleu marine / mauve",
          "bleues marine / mauve"
        ],
        correct: 0,
        explanation: "'Bleu marine' (couleur composée) est invariable. 'Mauve' fait partie des exceptions de noms de fleurs qui s'accordent comme de vrais adjectifs ('mauves')."
      },
      {
        id: "b2-10-q8",
        prompt: "Ces deux candidats se sont _____ lors du débat télévisé d'hier soir.",
        options: [
          "souri",
          "souris",
          "sourie",
          "sourirent"
        ],
        correct: 0,
        explanation: "'Sourire' est un verbe transitif indirect (sourire à quelqu'un). Le pronom 'se' est COI, le participe passé est donc toujours invariable : 'souri'."
      }
    ]
  },

  // =========================================================================
  // NIVEAU C1 : EXPERT & AUTONOMIE (11 LEÇONS - 66 QUESTIONS)
  // =========================================================================
  {
    id: "c1-inversion-stylistique-structures",
    title: "C1.1 Inversion Stylistique & Structures Littéraires",
    level: "🟣 Niveau C1",
    levelCode: "C1",
    category: "conjugaison",
    ruleTitle: "Inversion du Sujet après Adverbes Initiaux & Incises",
    ruleContent: `
      <p>L'inversion stylistique du sujet confère au discours écrit une élégance académique remarquable :</p>
      <ul>
        <li><strong>Après certains adverbes en tête de phrase :</strong><br>
        <i>À peine, peut-être, sans doute, aussi, toujours est-il que, tout au plus, encore</i>.<br>
        Ex: <i>À peine fut-il entré que l'assemblée se tut ; Sans doute a-t-il commis une erreur ; Aussi avons-nous décidé de suspendre la séance.</i></li>
        <li><strong>Dans les propositions relatives après un verbe intransitif :</strong><br>
        Ex: <i>Le jour où commencèrent les négociations ; La maison où habitait mon grand-père.</i></li>
        <li><strong>Dans les propositions incises de dialogue :</strong><br>
        Ex: <i>« La vérité, affirma le témoin, finira par éclater. »</i></li>
      </ul>
    `,
    questions: [
      {
        id: "c1-1-q1",
        prompt: "À peine _____ -il franchi le seuil de l'hémicycle que les applaudissements _____ .",
        options: [
          "eut / retentirent",
          "a / retentirent",
          "eut / ont retenti",
          "avait / retentissaient"
        ],
        correct: 0,
        explanation: "'À peine' en tête de phrase impose l'inversion du sujet, traditionnellement associée au passé antérieur ('eut-il franchi') et au passé simple ('retentirent')."
      },
      {
        id: "c1-1-q2",
        prompt: "Le rapport d'enquête contenait des lacunes manifestes ; aussi _____ une contre-expertise indépendante.",
        options: [
          "avons-nous sollicité",
          "nous avons sollicité",
          "avons sollicité nous",
          "nous sollicitons"
        ],
        correct: 0,
        explanation: "L'adverbe de liaison 'aussi' en tête de proposition principale signifie 'c'est pourquoi' et entraîne l'inversion obligatoire du pronom sujet : 'aussi avons-nous sollicité'."
      },
      {
        id: "c1-1-q3",
        prompt: "Sans doute _____ -il d'autres perspectives lors du prochain sommet international.",
        options: [
          "émergera-t",
          "émergera",
          "émergerait-t",
          "émergeait"
        ],
        correct: 0,
        explanation: "'Sans doute' en début de phrase entraîne l'inversion avec le 't' euphonique : 'émergera-t-il'."
      },
      {
        id: "c1-1-q4",
        prompt: "Voici le village historique où _____ les plus grands maîtres de l'impressionnisme.",
        options: [
          "vécurent",
          "ont vécu",
          "vivaient",
          "avaient vécu"
        ],
        correct: 0,
        explanation: "Dans une subordonnée relative introduite par 'où', l'inversion du sujet nominal long ('les plus grands maîtres...') est une figure de style courante."
      },
      {
        id: "c1-1-q5",
        prompt: "Encore _____ -il que les parties prenantes consentent à des compromis réciproques.",
        options: [
          "faut",
          "faudra",
          "faudrait",
          "fallait"
        ],
        correct: 0,
        explanation: "La locution 'Encore faut-il que...' exige l'inversion du verbe falloir et régit le subjonctif ('consentent')."
      },
      {
        id: "c1-1-q6",
        prompt: "Peut-être _____ -nous sous-estimé l'ampleur des réticences populaires face à cette mesure.",
        options: [
          "avons",
          "avions",
          "aurons",
          "ayons"
        ],
        correct: 0,
        explanation: "'Peut-être' en tête de phrase entraîne l'inversion du sujet : 'Peut-être avons-nous sous-estimé'."
      }
    ]
  },
  {
    id: "c1-ne-expletif",
    title: "C1.2 Le 'Ne' Explétif",
    level: "🟣 Niveau C1",
    levelCode: "C1",
    category: "grammaire",
    ruleTitle: "Le 'Ne' Stylistique sans Valeur Négative",
    ruleContent: `
      <p>Le <strong>'ne' explétif</strong> est une particule purement stylistique qui n'a AUCUN SENS NÉGATIF (la phrase reste affirmative). Il s'emploie dans le registre soutenu après certains déclencheurs :</p>
      <ul>
        <li><strong>Verbes de crainte ou d'empêchement (à la forme affirmative) :</strong><br>
        <i>Craindre que, avoir peur que, redouter que, empêcher que, éviter que</i>.<br>
        Ex: <i>Je crains qu'il <strong>ne</strong> pleuve.</i> (= J'ai peur qu'il pleuve, et non pas qu'il ne pleuve pas !).</li>
        <li><strong>Conjonctions temporelles et comparatives :</strong><br>
        <i>Avant que, à moins que, de peur que, plus... que, moins... que, autre... que</i>.<br>
        Ex: <i>Partez avant qu'il <strong>ne</strong> soit trop tard ; Il est plus compétent que je <strong>ne</strong> le pensais.</i></li>
      </ul>
      <p><strong>Règle d'or :</strong> Le 'ne' explétif ne s'accompagne JAMAIS de 'pas' !</p>
    `,
    questions: [
      {
        id: "c1-2-q1",
        prompt: "Les autorités sanitaires redoutent que le virus _____ se propage rapidement dans les écoles.",
        options: [
          "ne",
          "ne pas",
          "pas",
          "ne point"
        ],
        correct: 0,
        explanation: "Après les verbes de crainte affirmatifs ('redouter que'), on emploie le 'ne' explétif seul sans négation ('ne se propage')."
      },
      {
        id: "c1-2-q2",
        prompt: "Les conséquences financières de cette crise sont bien plus dévastatrices que nous _____ l'avions anticipé.",
        options: [
          "ne",
          "pas",
          "n'en",
          "rien"
        ],
        correct: 0,
        explanation: "Après un comparatif d'inégalité ('plus... que'), le 'ne' explétif s'insère élégamment dans la proposition subordonnée."
      },
      {
        id: "c1-2-q3",
        prompt: "Prenez garde à ce que cette démarche _____ nuise à vos relations diplomatiques.",
        options: [
          "ne",
          "ne pas",
          "pas",
          "rien"
        ],
        correct: 0,
        explanation: "'Prendre garde à ce que' (= veiller à éviter que) régit le subjonctif avec le 'ne' explétif."
      },
      {
        id: "c1-2-q4",
        prompt: "Nous devons agir promptement avant qu'une crise irréversible _____ éclate.",
        options: [
          "n'",
          "n'ait",
          "ne pas",
          "pas"
        ],
        correct: 0,
        explanation: "Après 'avant que', l'élision donne 'n'' explétif devant voyelle : 'n'éclate'."
      },
      {
        id: "c1-2-q5",
        prompt: "Dans la phrase 'Je crains qu'il ne vienne', le locuteur :",
        options: [
          "A peur que la personne vienne.",
          "A peur que la personne ne vienne pas.",
          "Est certain que la personne refuse de venir.",
          "Interdit à la personne de venir."
        ],
        correct: 0,
        explanation: "Le 'ne' étant explétif (sans valeur négative), la phrase signifie exactement 'J'ai peur qu'il vienne'."
      },
      {
        id: "c1-2-q6",
        prompt: "Il s'est comporté tout autrement que je _____ l'aurais imaginé.",
        options: [
          "ne",
          "pas",
          "n'y",
          "rien"
        ],
        correct: 0,
        explanation: "Après l'adverbe d'altérité 'autrement que', le 'ne' explétif s'emploie au registre soutenu."
      }
    ]
  },
  {
    id: "c1-nominalisation-journalistique",
    title: "C1.3 La Nominalisation Stylistique",
    level: "🟣 Niveau C1",
    levelCode: "C1",
    category: "grammaire",
    ruleTitle: "Transformation de Verbes en Noms & Titres de Presse",
    ruleContent: `
      <p>La nominalisation consiste à remplacer une proposition verbale par un syntagme nominal dense et concis. C'est l'armature du style journalistique et administratif français :</p>
      <ul>
        <li><strong>Suffixes nominaux fréquents :</strong><br>
        <i>-tion / -ation :</i> augmenter ➔ <i>augmentation</i>, détruire ➔ <i>destruction</i>.<br>
        <i>-ment :</i> licencier ➔ <i>licenciement</i>, effondrer ➔ <i>effondrement</i>.<br>
        <i>-age :</i> recycler ➔ <i>recyclage</i>, déraper ➔ <i>dérapage</i>.<br>
        <i>-ure :</i> fermer ➔ <i>fermeture</i>, rompre ➔ <i>rupture</i>.<br>
        <i>-ance / -ence :</i> persévérer ➔ <i>persévérance</i>, émerger ➔ <i>émergence</i>.</li>
      </ul>
      <p>Exemple de transformation : <i>Parce que le chômage a baissé ➔ Grâce à la <strong>baisse du chômage</strong></i>.</p>
    `,
    questions: [
      {
        id: "c1-3-q1",
        prompt: "Transformez en titre nominal journalistique : 'Le musée du Louvre a rouvert ses portes après trois mois de travaux.'",
        options: [
          "Réouverture du musée du Louvre après trois mois de travaux",
          "Le musée du Louvre rouvrant ses portes après trois mois",
          "La réouvraison du musée du Louvre après trois mois",
          "Pour la réouverture du musée du Louvre trois mois après"
        ],
        correct: 0,
        explanation: "Le nom dérivé du verbe rouvrir est 'réouverture', permettant un titre percutant sans verbe conjugué."
      },
      {
        id: "c1-3-q2",
        prompt: "Quel est le nom abstrait dérivé du verbe 'disparaître' ?",
        options: [
          "La disparition",
          "Le disparaîtement",
          "La disparitance",
          "Le disparage"
        ],
        correct: 0,
        explanation: "'Disparaître' donne le nom féminin régulier 'la disparition'."
      },
      {
        id: "c1-3-q3",
        prompt: "Transformez : 'Bien que la production ait ralenti' ➔ 'En dépit du _____ de la production'.",
        options: [
          "ralentissement",
          "ralentage",
          "ralentance",
          "ralentition"
        ],
        correct: 0,
        explanation: "Le verbe 'ralentir' forme son substantif en '-ment' : 'le ralentissement'."
      },
      {
        id: "c1-3-q4",
        prompt: "Le nom dérivé exprimant l'action de 'défaillir' est :",
        options: [
          "La défaillance",
          "Le défaillissement",
          "La défaillition",
          "Le défaillage"
        ],
        correct: 0,
        explanation: "'Défaillir' donne le substantif 'la défaillance'."
      },
      {
        id: "c1-3-q5",
        prompt: "Nominalisez : 'On a découvert de nouveaux gisements sous-marins.'",
        options: [
          "Découverte de nouveaux gisements sous-marins",
          "Découvrant des nouveaux gisements sous-marins",
          "La découvrance de nouveaux gisements sous-marins",
          "Découvrir des gisements sous-marins nouveaux"
        ],
        correct: 0,
        explanation: "Le verbe 'découvrir' donne le substantif féminin 'la découverte'."
      },
      {
        id: "c1-3-q6",
        prompt: "Quel est le nom dérivé exact du verbe 'accroître' ?",
        options: [
          "L'accroissement",
          "L'accroissance",
          "L'accroistage",
          "L'accroition"
        ],
        correct: 0,
        explanation: "'Accroître' forme son substantif avec le suffixe '-ment' : 'l'accroissement'."
      }
    ]
  },
  {
    id: "c1-subtilites-prepositions-transitivite",
    title: "C1.4 Subtilités des Prépositions & Transitivité",
    level: "🟣 Niveau C1",
    levelCode: "C1",
    category: "conjugaison",
    ruleTitle: "Verbes à double construction & régie prépositive complexe",
    ruleContent: `
      <p>Au niveau C1, la maîtrise des régies verbales et des nuances prépositives distingue le locuteur expert :</p>
      <ul>
        <li><strong>Changements de sens selon la préposition :</strong><br>
        - <i>Assister à :</i> Être présent (<i>assister à un concert</i>) vs <i>Assister qqn :</i> Aider (<i>assister un malade</i>).<br>
        - <i>Penser à :</i> Avoir à l'esprit (<i>Je pense à toi</i>) vs <i>Penser de :</i> Avoir une opinion sur (<i>Que pensez-vous de ce film ?</i>).<br>
        - <i>Servir à :</i> Utilité (<i>Ça sert à ouvrir les bouteilles</i>) vs <i>Servir de :</i> Fonction de substitution (<i>Cette boîte me sert de table</i>) vs <i>Se servir de :</i> Utiliser (<i>Je me sers d'un couteau</i>).</li>
        <li><strong>Verbes transitifs directs souvent confondus :</strong><br>
        <i>Pallier quelque chose</i> (sans 'à' ! On dit <i>pallier les difficultés</i> et non <i>*pallier aux difficultés</i>) ; <i>Se rappeler quelque chose</i> (COD) vs <i>Se souvenir DE quelque chose</i> (COI).</li>
      </ul>
    `,
    questions: [
      {
        id: "c1-4-q1",
        prompt: "Les nouvelles dispositions budgétaires visent à _____ les défaillances du système.",
        options: [
          "pallier",
          "pallier à",
          "se pallier de",
          "pallier avec"
        ],
        correct: 0,
        explanation: "Règle académique majeure : le verbe 'pallier' est transitif direct (il régit un COD sans préposition 'à'). On dit 'pallier les défaillances'."
      },
      {
        id: "c1-4-q2",
        prompt: "Je _____ parfaitement cet été inoubliable que nous avions passé ensemble en Provence.",
        options: [
          "me rappelle",
          "me rappelle de",
          "me souviens",
          "me rappelle à"
        ],
        correct: 0,
        explanation: "'Se rappeler' est transitif direct ('se rappeler quelque chose'), contrairement à 'se souvenir de'."
      },
      {
        id: "c1-4-q3",
        prompt: "Durant toute la cérémonie, il a _____ le président de séance dans ses fonctions protocolaires.",
        options: [
          "assisté",
          "assisté à",
          "assisté de",
          "assisté pour"
        ],
        correct: 0,
        explanation: "'Assister quelqu'un' (transitif direct) signifie aider, seconder une personne."
      },
      {
        id: "c1-4-q4",
        prompt: "Cette vieille commode en chêne nous _____ de table de travail provisoire.",
        options: [
          "sert",
          "sert à",
          "se sert",
          "sert pour"
        ],
        correct: 0,
        explanation: "'Servir de + nom' signifie tenir lieu de, remplir le rôle de."
      },
      {
        id: "c1-4-q5",
        prompt: "Que _____ -vous _____ cette nouvelle proposition gouvernementale ?",
        options: [
          "pensez / de",
          "pensez / à",
          "pensez / sur",
          "pensez / pour"
        ],
        correct: 0,
        explanation: "Pour solliciter un avis ou un jugement critique sur quelque chose, on emploie 'penser de'."
      },
      {
        id: "c1-4-q6",
        prompt: "Le médiateur a réussi à _____ les deux parties adverses avant l'audience.",
        options: [
          "concilier",
          "concilier à",
          "concilier de",
          "se concilier à"
        ],
        correct: 0,
        explanation: "'Concilier' est transitif direct : concilier deux personnes ou deux points de vue."
      }
    ]
  },
  {
    id: "c1-emplois-stylistiques-temps-narratifs",
    title: "C1.5 Emplois Stylistiques des Temps & Modes",
    level: "🟣 Niveau C1",
    levelCode: "C1",
    category: "conjugaison",
    ruleTitle: "Futur Historique, Imparfait de Rupture & Conditionnel Journalistique",
    ruleContent: `
      <p>Au niveau C1, les temps verbaux dépassent leur valeur chronologique brute pour assumer des fonctions rhétoriques :</p>
      <ul>
        <li><strong>Le Futur Historique / Biographique :</strong> Énonce un fait historique déjà accompli pour lui donner une dynamique de destinée inéluctable. Ex: <i>Napoléon naît en Corse en 1769 ; il <strong>mourra</strong> en exil à Sainte-Hélène en 1821.</i></li>
        <li><strong>L'Imparfait de Rupture (ou pittoresque) :</strong> Remplace un passé simple pour fixer un événement soudain avec solennité. Ex: <i>Cinq minutes plus tard, l'avion <strong>s'écrasait</strong> sur la colline.</i></li>
        <li><strong>Le Conditionnel d'atténuation oratoire :</strong> Permet d'avancer une thèse avec une politesse philosophique exquise. Ex: <i>On <strong>saurait</strong> difficilement contester cette analyse.</i></li>
      </ul>
    `,
    questions: [
      {
        id: "c1-5-q1",
        prompt: "Victor Hugo publie Les Misérables en 1862 ; il _____ quelques années plus tard en figure tutélaire de la République.",
        options: [
          "s'éteindra",
          "s'éteignait",
          "s'éteignit",
          "s'était éteint"
        ],
        correct: 0,
        explanation: "Le 'futur historique' ou de perspective biographique ('s'éteindra') met en scène le destin historique accompli."
      },
      {
        id: "c1-5-q2",
        prompt: "Le train roulait à vive allure quand, soudain, la locomotive _____ de la voie.",
        options: [
          "déraillait",
          "a déraillé",
          "déraillera",
          "avait déraillé"
        ],
        correct: 0,
        explanation: "L'imparfait de rupture ('déraillait') est un procédé stylistique littéraire qui dramatise l'événement soudain."
      },
      {
        id: "c1-5-q3",
        prompt: "Nul ne _____ prétendre détenir le monopole de la vérité sur cette question philosophique.",
        options: [
          "saurait",
          "saura",
          "savait",
          "sût"
        ],
        correct: 0,
        explanation: "'Nul ne saurait + infinitif' est une formule au conditionnel de distanciation exprimant l'impossibilité morale avec élégance."
      },
      {
        id: "c1-5-q4",
        prompt: "Le président signa le décret ; trois mois plus tard, la loi _____ en vigueur sur tout le territoire.",
        options: [
          "entrait",
          "entra",
          "entrera",
          "serait entrée"
        ],
        correct: 0,
        explanation: "L'imparfait narratif de bilan ('entrait') fige l'événement historique avec force."
      },
      {
        id: "c1-5-q5",
        prompt: "Molière crée Le Tartuffe en 1664 ; il _____ l'une des pièces les plus jouées au monde.",
        options: [
          "deviendra",
          "devenait",
          "devint",
          "était devenu"
        ],
        correct: 0,
        explanation: "L'emploi du futur historique ('deviendra') projette l'œuvre dans sa postérité historique."
      },
      {
        id: "c1-5-q6",
        prompt: "On _____ penser que les leçons de l'histoire suffiraient à prévenir de tels égarements.",
        options: [
          "aimerait",
          "aimera",
          "aima",
          "eût aimé"
        ],
        correct: 0,
        explanation: "Le conditionnel de modestie et d'espoir nuancé 'On aimerait penser...' est typique du style argumentatif soutenu."
      }
    ]
  },
  {
    id: "c1-subjonctif-imparfait-plus-que-parfait",
    title: "C1.6 Subjonctif Imparfait & Plus-que-parfait",
    level: "🟣 Niveau C1",
    levelCode: "C1",
    category: "conjugaison",
    ruleTitle: "La Concordance Classique des Temps au Subjonctif",
    ruleContent: `
      <p>Dans la langue littéraire et soutenue, la concordance des temps au subjonctif s'applique lorsque la principale est au passé :</p>
      <ul>
        <li><strong>Subjonctif Imparfait (action simultanée dans le passé) :</strong><br>
        Formé sur le passé simple (3e personne) + terminaisons <i>-sse, -sses, -^t, -ssions, -ssiez, -ssent</i>.<br>
        Ex: <i>Il fallait qu'il <strong>partît</strong> à l'aube ; Je ne pensais pas que vous <strong>fussiez</strong> si nombreux.</i></li>
        <li><strong>Subjonctif Plus-que-parfait (action antérieure dans le passé) :</strong><br>
        Auxiliaire au Subjonctif Imparfait + Participe Passé.<br>
        Ex: <i>Bien qu'il <strong>eût terminé</strong> son discours, nul n'applaudit.</i></li>
      </ul>
    `,
    questions: [
      {
        id: "c1-6-q1",
        prompt: "Le roi exigea que l'ambassadeur se _____ sans délai devant la cour.",
        options: [
          "présentât",
          "présenta",
          "présente",
          "présenterait"
        ],
        correct: 0,
        explanation: "Au subjonctif imparfait (3e personne du singulier des verbes en -er), la forme prend un accent circonflexe sur le 'a' : 'qu'il se présentât'."
      },
      {
        id: "c1-6-q2",
        prompt: "Quoiqu'elle _____ avertie du danger, elle décida de poursuivre son ascension.",
        options: [
          "fût",
          "fut",
          "soit",
          "serait"
        ],
        correct: 0,
        explanation: "Le subjonctif imparfait du verbe être à la 3e personne du singulier s'écrit 'fût' (avec accent circonflexe), contrairement au passé simple 'fut' (sans accent)."
      },
      {
        id: "c1-6-q3",
        prompt: "Il était impératif que nous _____ connaissance de ces documents avant l'audience.",
        options: [
          "prissions",
          "prenions",
          "prendrions",
          "prîmes"
        ],
        correct: 0,
        explanation: "Le subjonctif imparfait du verbe prendre à la 1re personne du pluriel est 'que nous prissions'."
      },
      {
        id: "c1-6-q4",
        prompt: "Bien qu'il _____ de son mieux, il ne put inverser le cours des événements.",
        options: [
          "eût fait",
          "a fait",
          "avait fait",
          "aurait fait"
        ],
        correct: 0,
        explanation: "Le subjonctif plus-que-parfait littéraire ('eût fait') marque l'antériorité dans le passé littéraire."
      },
      {
        id: "c1-6-q5",
        prompt: "Je ne croyais pas qu'il _____ possible de surmonter un tel obstacle.",
        options: [
          "fût",
          "fut",
          "serait",
          "était"
        ],
        correct: 0,
        explanation: "Après la négation du verbe croire au passé, le subjonctif imparfait littéraire donne 'fût possible'."
      },
      {
        id: "c1-6-q6",
        prompt: "Elle craignait que vous ne _____ trop tard à la réunion.",
        options: [
          "vinssiez",
          "veniez",
          "viendriez",
          "vintes"
        ],
        correct: 0,
        explanation: "Le subjonctif imparfait du verbe venir à la 2e personne du pluriel est 'que vous vinssiez'."
      }
    ]
  },
  {
    id: "c1-passe-anterieur-temps-surcomposes",
    title: "C1.7 Le Passé Antérieur & Temps Surcomposés",
    level: "🟣 Niveau C1",
    levelCode: "C1",
    category: "conjugaison",
    ruleTitle: "L'Antériorité Immédiate du Récit Littéraire & Oral Expressif",
    ruleContent: `
      <p><strong>1. Le Passé Antérieur :</strong></p>
      <p>S'emploie dans les subordonnées temporelles après <i>dès que, aussitôt que, quand, lorsque, après que</i> pour marquer une action immédiatement antérieure à un <strong>Passé Simple</strong> :</p>
      <p><strong>Structure :</strong> Auxiliaire au <strong>Passé Simple</strong> + <strong>Participe Passé</strong>.</p>
      <p>Ex: <i>Dès qu'il <strong>eut franchi</strong> la porte, il <strong>poussa</strong> un cri de stupeur ; Quand ils <strong>furent arrivés</strong>, la fête <strong>commença</strong>.</i></p>
      <p><strong>2. Les Temps Surcomposés (français parlé soutenu) :</strong></p>
      <p>Ex: <i>Dès qu'il a eu fini, il est parti.</i> (Marque l'achèvement absolu avant une autre action au passé composé).</p>
    `,
    questions: [
      {
        id: "c1-7-q1",
        prompt: "Aussitôt que le ministre _____ son allocution, la foule _____ des applaudissements nourris.",
        options: [
          "eut achevé / fit entendre",
          "avait achevé / a fait entendre",
          "eut achevé / a fait entendre",
          "acheva / avait fait entendre"
        ],
        correct: 0,
        explanation: "Le passé antérieur ('eut achevé') marque l'antériorité immédiate par rapport au passé simple de la proposition principale ('fit entendre')."
      },
      {
        id: "c1-7-q2",
        prompt: "Dès que les voyageurs _____ au sommet, une tempête de neige se déclencha.",
        options: [
          "furent arrivés",
          "étaient arrivés",
          "ont été arrivés",
          "seraient arrivés"
        ],
        correct: 0,
        explanation: "Avec le verbe arriver (auxiliaire être au passé simple), le passé antérieur masculin pluriel est 'furent arrivés'."
      },
      {
        id: "c1-7-q3",
        prompt: "Lorsque la nuit _____ , les troupes reprirent leur progression silencieuse.",
        options: [
          "fut tombée",
          "était tombée",
          "fut tombé",
          "a été tombée"
        ],
        correct: 0,
        explanation: "Le passé antérieur de tomber (féminin singulier) est 'fut tombée'."
      },
      {
        id: "c1-7-q4",
        prompt: "Dès qu'il _____ eu terminé son café, il quitta précipitamment le bistrot.",
        options: [
          "a",
          "eut",
          "avait",
          "aura"
        ],
        correct: 0,
        explanation: "Le passé surcomposé oral 'dès qu'il a eu terminé' associe l'auxiliaire au passé composé."
      },
      {
        id: "c1-7-q5",
        prompt: "Après qu'ils _____ leurs affaires, ils prirent congé de leurs hôtes.",
        options: [
          "eurent rassemblé",
          "eussent rassemblé",
          "avaient rassemblé",
          "auraient rassemblé"
        ],
        correct: 0,
        explanation: "Après que + Passé antérieur à la 3e personne du pluriel : 'eurent rassemblé'."
      },
      {
        id: "c1-7-q6",
        prompt: "Quand le général _____ ses ordres, les soldats s'élancèrent à l'assaut.",
        options: [
          "eut donné",
          "avait donné",
          "a donné",
          "donnât"
        ],
        correct: 0,
        explanation: "Antériorité immédiate avec le passé simple 's'élancèrent' ➔ passé antérieur 'eut donné'."
      }
    ]
  },
  {
    id: "c1-typographie-regles-espaces",
    title: "C1.8 Règles Typographiques Françaises",
    level: "🟣 Niveau C1",
    levelCode: "C1",
    category: "orthographe",
    ruleTitle: "Espaces Insécables, Ponctuation Haute & Guillemets Français",
    ruleContent: `
      <p>La typographie française obéit à des normes strictes de mise en page et d'espacement :</p>
      <ul>
        <li><strong>Ponctuation double (haute) :</strong> Le point-virgule (<i>;</i>), les deux-points (<i>:</i>), le point d'interrogation (<i>?</i>) et le point d'exclamation (<i>!</i>) sont précédés d'une <strong>espace insécable</strong> et suivis d'une espace sécable.</li>
        <li><strong>Ponctuation simple (basse) :</strong> La virgule (<i>,</i>) et le point (<i>.</i>) sont collés au mot précédent et suivis d'une espace.</li>
        <li><strong>Guillemets français :</strong> On utilise les chevrons « » avec espace insécable à l'intérieur (ex: <i>« Bonjour ! »</i>).</li>
        <li><strong>Majuscules accentuées :</strong> En français, les majuscules DOIVENT conserver leurs accents (ex: <i>À l'attention de, ÉTAT, ÎLE</i>).</li>
      </ul>
    `,
    questions: [
      {
        id: "c1-8-q1",
        prompt: "Quelle ligne respecte scrupuleusement les règles typographiques françaises ?",
        options: [
          "« Que pensez-vous de cette décision ? » demanda-t-il.",
          "\"Que pensez-vous de cette décision?\" demanda-t-il.",
          "«Que pensez-vous de cette décision?» demanda-t-il.",
          "« Que pensez-vous de cette décision? » demanda-t-il."
        ],
        correct: 0,
        explanation: "En français, on emploie les guillemets en chevrons « » avec une espace insécable après l'ouvrant et avant le fermant, et une espace avant le point d'interrogation."
      },
      {
        id: "c1-8-q2",
        prompt: "Les majuscules en français doivent-elles porter les accents ?",
        options: [
          "Oui, les accents ont une valeur distinctive obligatoire sur les majuscules (ex: É, À, È).",
          "Non, la typographie française interdit formellement les accents sur les majuscules.",
          "Uniquement sur la lettre 'E' en début de phrase.",
          "Seulement dans les textes manuscrits."
        ],
        correct: 0,
        explanation: "L'Académie française et l'Imprimerie Nationale rappellent que l'accentuation des majuscules est obligatoire pour éviter les contresens."
      },
      {
        id: "c1-8-q3",
        prompt: "Quel signe de ponctuation N'EST PAS précédé d'une espace insécable en français ?",
        options: [
          "La virgule (,)",
          "Les deux-points (:)",
          "Le point d'exclamation (!)",
          "Le point-virgule (;)"
        ],
        correct: 0,
        explanation: "La virgule et le point simple sont immédiatement accolés au mot qui les précède sans espace."
      },
      {
        id: "c1-8-q4",
        prompt: "Indiquez l'entête administrative correctement accentuée :",
        options: [
          "À L'ATTENTION DU DIRECTEUR GÉNÉRAL",
          "A L'ATTENTION DU DIRECTEUR GENERAL",
          "A L'ATTENTION DU DIRECTEUR GÉNÉRAL",
          "À L'ATTENTION DU DIRECTEUR GENERAL"
        ],
        correct: 0,
        explanation: "Toutes les majuscules doivent être accentuées : 'À L'ATTENTION DU DIRECTEUR GÉNÉRAL'."
      },
      {
        id: "c1-8-q5",
        prompt: "Quel est le rôle d'une « espace insécable » ?",
        options: [
          "Empêcher qu'un signe de ponctuation ne soit rejeté seul au début de la ligne suivante.",
          "Augmenter artificiellement le nombre de mots d'un essai.",
          "Masquer les fautes d'orthographe dans un traitement de texte.",
          "Indiquer la fin définitive d'un paragraphe."
        ],
        correct: 0,
        explanation: "L'espace insécable lie deux éléments typographiques pour qu'ils restent ensemble sur la même ligne lors du saut de ligne."
      },
      {
        id: "c1-8-q6",
        prompt: "Les points de suspension (...) doivent être :",
        options: [
          "Collés au mot qui précède, sans espace avant, et suivis d'une espace.",
          "Précédés et suivis d'une espace insécable.",
          "Toujours remplacés par quatre points d'affilée.",
          "Séparés par des tirets cadratins."
        ],
        correct: 0,
        explanation: "Les points de suspension sont collés au mot qui précède et toujours au nombre strict de trois."
      }
    ]
  },
  {
    id: "c1-majuscules-institutions-nationalites",
    title: "C1.9 Majuscules & Minuscules Spécifiques",
    level: "🟣 Niveau C1",
    levelCode: "C1",
    category: "orthographe",
    ruleTitle: "Noms d'Habitants, Langues, Institutions & Géographie",
    ruleContent: `
      <p>L'emploi des majuscules en français suit des règles de distinction précises :</p>
      <ul>
        <li><strong>Nationalités et habitants :</strong><br>
        - Majuscule quand il s'agit d'un <strong>nom de personne / peuple</strong> : <i>Les Français, un Canadien, les Parisiens</i>.<br>
        - Minuscule quand il s'agit d'un <strong>adjectif</strong> ou du <strong>nom de la langue</strong> : <i>Le peuple français ; la langue française ; il parle espagnol.</i></li>
        <li><strong>Organismes uniques et institutions :</strong><br>
        - <i>l'État, l'Église (l'institution), le Conseil d'État, l'Académie française, la République</i>.</li>
        <li><strong>Points cardinaux :</strong><br>
        - Majuscule pour désigner une région géographique : <i>Le pôle Nord, l'hémisphère Sud, vivre dans le Midi</i>.<br>
        - Minuscule pour indiquer une direction : <i>Marcher vers le nord ; habiter au sud de Paris.</i></li>
      </ul>
    `,
    questions: [
      {
        id: "c1-9-q1",
        prompt: "Choisissez la phrase orthographiquement et typographiquement exacte :",
        options: [
          "Ce diplomate français s'exprime dans un français impeccable devant les délégués Français.",
          "Ce diplomate français s'exprime dans un français impeccable devant les délégués français.",
          "Ce diplomate Français s'exprime dans un Français impeccable devant les délégués français.",
          "Ce diplomate français s'exprime dans un Français impeccable devant les délégués Français."
        ],
        correct: 1,
        explanation: "'Diplomate français' est adjectif (minuscule), 'un français impeccable' est la langue (minuscule) et 'délégués français' est adjectif (minuscule)."
      },
      {
        id: "c1-9-q2",
        prompt: "Indiquez la phrase qui exige une majuscule au nom désignant l'habitant :",
        options: [
          "Les Canadiens ont accueilli chaleureusement les visiteurs étrangers.",
          "Les citoyens canadiens ont voté lors des élections fédérales.",
          "Elle adore la gastronomie canadienne et le sirop d'érable.",
          "Ils apprennent à parler le canadien dans cette école."
        ],
        correct: 0,
        explanation: "Dans 'Les Canadiens ont accueilli...', le mot est le nom substantif désignant les habitants, il prend donc obligatoirement une majuscule."
      },
      {
        id: "c1-9-q3",
        prompt: "Dans quel cas le point cardinal doit-il porter une majuscule ?",
        options: [
          "Le dialogue économique entre les pays du Nord et ceux du Sud.",
          "Le vent souffle fort depuis le sud-ouest ce matin.",
          "Notre maison se trouve à deux kilomètres au sud de la ville.",
          "Ils se dirigent vers le nord en suivant la boussole."
        ],
        correct: 0,
        explanation: "Les points cardinaux prennent une majuscule lorsqu'ils désignent des entités géopolitiques ou des régions globales (le Nord / le Sud)."
      },
      {
        id: "c1-9-q4",
        prompt: "Complétez : 'La _____ française est garantie par les institutions de l'_____.'",
        options: [
          "République / État",
          "république / état",
          "République / état",
          "république / État"
        ],
        correct: 0,
        explanation: "'République' et 'État' désignant les institutions souveraines prennent la majuscule institutionnelle."
      },
      {
        id: "c1-9-q5",
        prompt: "Quelle phrase comporte une majuscule FAUTIVE ?",
        options: [
          "Elle étudie l'Histoire de la Langue Anglaise.",
          "Elle étudie l'histoire de la langue anglaise.",
          "Elle a rencontré des Anglais très sympathiques.",
          "Elle habite en Angleterre."
        ],
        correct: 0,
        explanation: "Les noms de langues ('anglaise') et les disciplines courantes s'écrivent avec des minuscules."
      },
      {
        id: "c1-9-q6",
        prompt: "Choisissez la graphie exacte pour le musée célèbre de Paris :",
        options: [
          "le musée du Louvre",
          "le Musée du louvre",
          "Le Musée Du Louvre",
          "le musée Du Louvre"
        ],
        correct: 0,
        explanation: "Dans les dénominations d'édifices publics, le mot générique 'musée' reste en minuscule et le nom propre 'Louvre' prend la majuscule."
      }
    ]
  },
  {
    id: "c1-accords-participe-passe-extremes",
    title: "C1.10 Accords du Participe Passé (Cas Extrêmes : fait/laissé + inf, En)",
    level: "🟣 Niveau C1",
    levelCode: "C1",
    category: "conjugaison",
    ruleTitle: "Fait/Laissé + Infinitif, Pronom 'EN' & Verbes Impersonnels",
    ruleContent: `
      <p>Les cas d'accord du participe passé les plus ardus du français :</p>
      <ul>
        <li><strong>Fait + Infinitif :</strong> Le participe passé de <i>faire</i> suivi d'un infinitif est <strong>TOUJOURS INVARIABLE</strong> (ex: <i>Ces maisons, je les ai <strong>fait</strong> construire</i>).</li>
        <li><strong>Laissé + Infinitif :</strong> Selon l'Académie (et les rectifications de 1990), <i>laissé</i> suivi d'un infinitif peut rester invariable (ex: <i>Elle s'est <strong>laissé</strong> convaincre</i>).</li>
        <li><strong>Pronom EN antéposé :</strong> Le participe passé précédé du pronom <i>en</i> reste <strong>INVARIABLE</strong> (ex: <i>Des poires, j'en ai <strong>mangé</strong></i> [et non mangées]).</li>
        <li><strong>Verbes impersonnels :</strong> Le participe passé d'un verbe impersonnel est toujours <strong>INVARIABLE</strong> (ex: <i>Les fortes chaleurs qu'il y a <strong>eu</strong> cet été</i>).</li>
        <li><strong>Participe passé suivi d'un infinitif (autre que faire) :</strong> S'accorde si le COD placé avant <strong>fait l'action</strong> de l'infinitif (<i>Les musiciens que j'ai <strong>entendus</strong> jouer</i>), mais ne s'accorde pas si le COD <strong>subit l'action</strong> (<i>Les chansons que j'ai <strong>entendu</strong> chanter</i>).</li>
      </ul>
    `,
    questions: [
      {
        id: "c1-10-q1",
        prompt: "Ces superbes maquettes d'architecte, je les ai _____ fabriquer par un atelier spécialisé.",
        options: [
          "fait",
          "faites",
          "faits",
          "faite"
        ],
        correct: 0,
        explanation: "Règle absolue : 'fait' suivi d'un infinitif est TOUJOURS invariable, quelle que soit la place et le genre du COD."
      },
      {
        id: "c1-10-q2",
        prompt: "Des lettres d'encouragement ? Nous en avons _____ des centaines ce matin.",
        options: [
          "reçu",
          "reçues",
          "reçus",
          "reçue"
        ],
        correct: 0,
        explanation: "Lorsque le COD qui précède le verbe est le pronom neutre 'en', le participe passé reste invariable : 'en avons reçu'."
      },
      {
        id: "c1-10-q3",
        prompt: "Les violentes intempéries qu'il y a _____ ont endommagé la toiture du bâtiment.",
        options: [
          "eu",
          "eues",
          "eus",
          "eue"
        ],
        correct: 0,
        explanation: "Le participe passé des verbes impersonnels ('il y a eu', 'il a fallu', 'il a fait chaud') est toujours strictement invariable."
      },
      {
        id: "c1-10-q4",
        prompt: "Les actrices que j'ai _____ répéter sur scène étaient époustouflantes.",
        options: [
          "vues",
          "vu",
          "vus",
          "vue"
        ],
        correct: 0,
        explanation: "Le COD antéposé 'les actrices' FAIT l'action de répéter (ce sont elles qui répètent) ➔ accord au féminin pluriel : 'vues'."
      },
      {
        id: "c1-10-q5",
        prompt: "La pièce de théâtre que j'ai _____ jouer hier soir était captivante.",
        options: [
          "entendu",
          "entendue",
          "entendus",
          "entendues"
        ],
        correct: 0,
        explanation: "Le COD antéposé 'la pièce' ne joue pas elle-même, elle est jouée par les acteurs (elle subit l'action) ➔ le participe reste invariable : 'entendu'."
      },
      {
        id: "c1-10-q6",
        prompt: "Elle s'est _____ séduire par la beauté sauvage de ces paysages volcaniques.",
        options: [
          "laissé",
          "laissée",
          "laissés",
          "laisser"
        ],
        correct: 0,
        explanation: "Devant un infinitif ('séduire'), 'laissé' est invariable car le sujet subit l'action de l'infinitif."
      }
    ]
  },
  {
    id: "c1-ecriture-nombres-ponctuation-stylistique",
    title: "C1.11 Écriture des Nombres & Ponctuation Stylistique",
    level: "🟣 Niveau C1",
    levelCode: "C1",
    category: "orthographe",
    ruleTitle: "Trait d'union, Vingt/Cent, Nombres Ordinaux & Tiret Cadratin",
    ruleContent: `
      <p><strong>1. Règles d'accord de Vingt et Cent :</strong></p>
      <ul>
        <li>Prennent un <i>-s</i> s'ils sont <strong>multipliés ET non suivis</strong> d'un autre nombre (ex: <i>quatre-vingts euros ; six cents pages</i>).</li>
        <li>Restent <strong>invariables</strong> s'ils sont suivis d'un autre nombre (ex: <i>quatre-vingt-trois euros ; six cent cinquante pages</i>) ou employés comme numéro d'ordre (ex: <i>page quatre-vingt ; l'an huit cent</i>).</li>
        <li><strong>Mille :</strong> Est TOUJOURS strictement invariable (ex: <i>trois mille personnes</i>). <i>Million</i> et <i>milliard</i> sont des noms et s'accordent (<i>deux millions d'euros</i>).</li>
      </ul>
      <p><strong>2. Rectifications orthographiques de 1990 :</strong> On peut désormais lier tous les éléments d'un nombre composé par des traits d'union (ex: <i>deux-cent-cinquante-trois</i>).</p>
      <p><strong>3. Le Tiret Cadratin (—) :</strong> Utilisé pour introduire les répliques de dialogue ou pour isoler une incise narrative majeure.</p>
    `,
    questions: [
      {
        id: "c1-11-q1",
        prompt: "Choisissez l'écriture chiffrée en lettres exacte pour '480 euros' :",
        options: [
          "quatre cent quatre-vingts euros",
          "quatre cents quatre-vingt euros",
          "quatre cent quatre-vingt euros",
          "quatre cents quatre-vingts euros"
        ],
        correct: 0,
        explanation: "'Cent' n'est pas au pluriel car suivi d'un autre nombre. 'Vingt' est multiplié par quatre (4 x 20) et n'est suivi d'aucun nombre ➔ prend un '-s' : 'quatre-vingts'."
      },
      {
        id: "c1-11-q2",
        prompt: "Indiquez la transcription orthographique correcte pour '800 pages' :",
        options: [
          "huit cents pages",
          "huit cent pages",
          "huit-cent pages",
          "huits cents pages"
        ],
        correct: 0,
        explanation: "'Cent' est multiplié par huit et termine le nombre sans être suivi d'un autre chiffre ➔ prend un '-s' : 'huit cents pages'."
      },
      {
        id: "c1-11-q3",
        prompt: "Complétez : 'Ce manuscrit ancien a été rédigé en l'an huit _____ .'",
        options: [
          "cent",
          "cents",
          "cents-ans",
          "centes"
        ],
        correct: 0,
        explanation: "Lorsqu'il indique une date, un millésime ou un numéro d'ordre (le huit-centième an), 'cent' reste invariable : 'l'an huit cent'."
      },
      {
        id: "c1-11-q4",
        prompt: "Quelle proposition est orthographiée sans aucune faute ?",
        options: [
          "Trois mille personnes ont défilé sur deux kilomètres.",
          "Trois milles personnes ont défilé sur deux kilomètres.",
          "Trois mille personnes ont défilées sur deux kilomètres.",
          "Trois-milles personnes ont défilé sur deux kilomètres."
        ],
        correct: 0,
        explanation: "'Mille' est un adjectif numéral invariable (ne prend jamais de 's')."
      },
      {
        id: "c1-11-q5",
        prompt: "Complétez : 'Le coût estimé des travaux s'élève à quatre _____ d'euros.'",
        options: [
          "millions",
          "million",
          "milles",
          "millions-d'"
        ],
        correct: 0,
        explanation: "'Million' est un substantif, il prend la marque du pluriel : 'quatre millions d'euros'."
      },
      {
        id: "c1-11-q6",
        prompt: "Quel signe typographique est spécifiquement employé pour encadrer une incise solennelle ou ouvrir les répliques d'un dialogue ?",
        options: [
          "Le tiret cadratin (—)",
          "Le trait d'union (-)",
          "Le double slash (//)",
          "L'astérisque (*)"
        ],
        correct: 0,
        explanation: "Le tiret cadratin (—) est le signe noble de la typographie littéraire française pour les dialogues et incises."
      }
    ]
  }
];
