/* ==========================================================================
   QUIZ : MOI, MON CERVEAU - VERSION FINALE AVEC ALTERNANCE QUESTION/RÉPONSE
   ========================================================================== */

const categories = [
  {
    nom: "Cerveau & activité intellectuelle",
    questions: [
      { 
        q: "Quelle activité intellectuelle vous semble la plus stimulante pour ton cerveau ?", 
        options: ["Lire un livre", "Jouer aux échecs", "Apprendre une langue", "Faire du théâtre"], 
        expl: "La science montre que les activités intellectuelles variées et stimulantes, comme la lecture, le jeu d’échecs, l’apprentissage des langues et le théâtre, sont particulièrement intéressantes pour le cerveau. Elles favorisent la plasticité cérébrale, la réserve cognitive et l’amélioration de multiples fonctions cognitives. Elles contribueraient ainsi à diminuer le risque de déclin cognitif."
      },
      { 
        q: "Parmi ces capacités cérébrales, laquelle souhaiteriez-vous renforcer ?", 
        options: ["La mémoire", "L’attention", "La créativité", "Le langage"], 
        expl: "" 
      },
      { 
        q: "Qu’est-ce qui vous motive le plus à faire des activités stimulantes ?", 
        options: ["Le plaisir d’apprendre", "L’envie de se dépasser", "Le bien-être mental", "Le maintien des capacités avec l’âge"], 
        expl: "Du point de vue des neurosciences, la motivation active les circuits de la récompense et facilite l’apprentissage. Une activité choisie par plaisir ou par intérêt stimule davantage le cerveau, renforce les connexions neuronales car elle permet de s'engager dans des tâches plus complexes et favorise la plasticité cérébrale, essentielle au maintien des capacités cognitives à tout âge."
      }
    ]
  },
  {
    nom: "Cerveau & activité physique",
    questions: [
      { 
        q: "Selon vous, quels effets l’activité physique a-t-elle sur votre cerveau ?", 
        options: ["Meilleure humeur", "Moins de stress", "Plus de concentration", "Meilleure mémoire"], 
        expl: "L’activité physique régulière améliore la mémoire, l’attention, les capacités de raisonnement et réflexion (aussi appelées fonctions exécutives) et la rapidité de traitement, chez l’enfant comme chez l’adulte et la personne âgée. Elle agit comme une neuroprotection, car elle retarde le vieillissement cérébral, réduit le risque de maladies neurodégénératives et protège contre le déclin cognitif. L’exercice réduit également les symptômes de dépression et d’anxiété, améliorant le bien- être psychologique et la résilience au stress."
      },
      { 
        q: "Quel type d’activité vous paraît le plus bénéfique pour ton cerveau ?", 
        options: ["Marche rapide", "Danse", "Vélo", "Yoga"], 
        expl: "Varier les types d’activité physique est l'idéal pour prendre soin au mieux de son cerveau. Les exercices dits « aérobiques », qui font travailler le cœur et la respiration, comme la marche rapide, le vélo, la natation, sont particulièrement bénéfiques. La danse a l’avantage de solliciter à la fois le corps, la mémoire, la coordination et l’attention. Ces activités peuvent être complétées par des exercices de renforcement musculaire et par des pratiques corps-esprit telles que le yoga ou le tai-chi."
      },
      { 
        q: "Selon vous, pourquoi les activités physiques sont-elles bonnes pour le cerveau ?", 
        options: ["Elles aident le cerveau à mieux s'oxygéner", "Elles déclenchent la libération de molécules qui apaisent l'anxiété", "Elles renforcent les défenses naturelles", "Elles permettent de créer de nouveaux neurones"], 
        expl: " L'exercice physique déclenche la production de facteurs neurotrophiques, des protéines essentielles à la survie et à la croissance des neurones. Par exemple, le BDNF, qui en fait partie, favorise la croissance de nouveaux neurones (neurogenèse) dans l’hippocampe, une région clé pour la mémoire et l’apprentissage. Cette molécule contribue également au renforcement des connexions neuronales, processus à la base de la plasticité cérébrale. D’autres molécules sont à l'origine de la création de nouveaux vaisseaux sanguins (angiogenèse), améliorant l'irrigation et le fonctionnement du cerveau. L'activité physique augmente également la libération de neurotransmetteurs comme la dopamine et la sérotonine, qui sont essentiels pour la motivation et la sensation de bien-être, ainsi que du GABA, qui apaise l'anxiété. Enfin, l’exercice réduit l’inflammation et le stress oxydatif, renforçant les défenses naturelles du cerveau et protégeant nos neurones."
      }
    ]
  },
  {
    nom: "Cerveau & alimentation",
    questions: [
      { 
        q: "Selon vous, de quoi a besoin principalement le cerveau pour bien fonctionner ?", 
        options: ["Les glucides", "Les bons lipides (oméga-3)", "L’eau", "Les vitamines et minéraux"], 
        expl: "Le cerveau est l'organe le plus gourmand du corps : bien qu'il ne représente que 2 % de votre masse, il consomme à lui seul environ 20 % de l'énergie (glucose) et de l'oxygène que nous absorbons. Cette consommation intense rend la qualité de votre alimentation directement vitale pour ses performances. Le cerveau fonctionne principalement avec du glucose. Les neurones ne pouvant pas le stocker, ils dépendent d'un apport constant via l’irrigation sanguine. La qualité des glucides ingérés influence directement votre concentration et votre énergie cognitive à court terme. Le cerveau est constitué à 50-60 % de lipides. Les Oméga-3 sont cruciaux car ils entrent directement dans la composition des membranes des neurones, assurant la fluidité et l'efficacité de la communication entre les neurones (la synapse). Il est également composé de 80% d’eau, essentielle à son bon fonctionnement."
      },
      { 
        q: "Selon vous, quelles sont les habitudes alimentaires à adopter pour aider le cerveau à bien fonctionner ?", 
        options: ["Bien s’hydrater", "Manger varié", "Limiter le sucre", "Manger à heures régulières"], 
        expl: " Une alimentation trop riche en graisses et en sucres favorise l’inflammation, le stress oxydatif et peut altérer la mémoire en seulement quelques jours. Par ailleurs, le moment des repas influence lui aussi la santé du cerveau. Manger en accord avec son rythme biologique, par exemple éviter les repas tardifs et ne pas sauter le petit-déjeuner, soutient la cognition et la plasticité cérébrale. L’hydratation est essentielle au bon fonctionnement cérébral. La déshydratation, même modérée, altère l’attention, la mémoire et l’humeur selon plusieurs études, surtout chez les enfants, les personnes âgées et les sportifs. Maintenir une bonne hydratation est donc aussi crucial pour prendre soin de son cerveau."
      },
      { 
        q: "Selon vous, quels aliments ont des effets bénéfiques sur le cerveau ?", 
        options: ["Les noix", "Le chocolat", "Le café", "Le poisson"], 
        expl: "Plusieurs aliments sont associés à des effets bénéfiques sur le cerveau, mais les preuves varient selon les études. Les noix, riches en acides gras insaturés, vitamines et antioxydants, sont souvent liées à une meilleure mémoire et à un risque réduit de déclin cognitif. Le poisson gras, contenant des oméga‑3 (DHA et EPA), est également associé à de meilleures fonctions cognitives et à une protection contre le déclin cérébral. Le chocolat noir, riche en flavanols, peut améliorer le flux sanguin cérébral et certaines fonctions cognitives, mais les résultats sont parfois inconsistants selon les doses et les populations. Le café, grâce à la caféine et aux antioxydants, peut favoriser l’attention et la rapidité de traitement, mais ses effets dépendent de la quantité consommée, de la sensibilité individuelle, et de la période de vie pendant laquelle la consommation de caféine a lieu ; certaines études suggèrent que ses effets peuvent différer selon qu’il est consommé jeune, à l’âge adulte ou à un âge avancé"
      }
    ]
  },
  {
    nom: "Cerveau & sommeil",
    questions: [
      { 
        q: "Selon vous, à quoi sert le sommeil pour le cerveau ?", 
        options: ["à éliminer ses déchets", "à réguler nos émotions", "à stocker nos souvenirs", "à booster nos fonctions cognitives"], 
        expl: "Durant le sommeil où l'activité cérébrale varie d'intensité, le cerveau trie les informations accumulées pendant la journée, renforce la mémoire et régule nos émotions. Le sommeil favorise aussi la créativité, la concentration et la prise de décision, en permettant au cerveau de créer de nouvelles connexions entre les idées. De plus, le cerveau assure aussi son entretien : il élimine les déchets accumulés dans la journée grâce à un système de drainage appelé système glymphatique, un processus indispensable à sa santé à long terme. En parallèle, il réajuste ses connexions neuronales : certaines se renforcent, d'autres s'atténuent, optimisant ainsi son fonctionnement et sa capacité d'apprentissage."
      },
      { 
        q: "Quelle est selon vous la conséquence principale d'un manque de sommeil ?", 
        options: ["Risque de déclin cognitif", "Vieillissement accéléré", "Mauvaise mémoire", "Risque de dépression"], 
        expl: "Des nuits trop courtes, irrégulières ou interrompues augmentent le risque de déclin cognitif et de maladies comme Alzheimer ou Parkinson. De plus, des études ont montré que l'insomnie chronique, était associée à des mauvaises performances cognitives et un vieillissement pathologique du cerveau. Même une seule nuit de privation de sommeil aurait des effets néfastes sur le cerveau ! Dormir moins que la durée recommandée (<6–7h) augmente significativement le risque de développer des symptômes dépressifs, avec un risque accru de 30 à 90% selon les études et les populations. Ce lien est observé chez les adolescents, les adultes, et les personnes âgées. Le risque augmente avec la persistance du manque de sommeil ou l’aggravation de la privation."
      },
      { 
        q: "D’après vous, le sommeil se divise en combien d'étapes ?", 
        options: ["1", "2", "3", "4"], 
        expl: "Le sommeil se compose de plusieurs étapes, qui se répètent en cycles pendant la nuit : - Sommeil léger : c’est le début du sommeil. Le corps se détend, la respiration ralentit, et le cerveau commence à trier les informations de la journée. -Sommeil profond : c’est le sommeil le plus réparateur. Le corps se régénère, les muscles se relâchent, et le cerveau nettoie les déchets et consolide la mémoire des faits et événements. - Sommeil paradoxal (REM) : c’est la phase des rêves. Elle aide à apprendre des compétences, à gérer les émotions et à consolider la mémoire liée aux expériences et aux apprentissages pratiques."
      }
    ]
  },
  {
    nom: "Cerveau & interactions sociales",
    questions: [
      { 
        q: "Qu’est-ce que vous remarquez en premier quand vous discutez avec quelqu’un ?", 
        options: ["Son expression du visage", "Le ton de sa voix", "Son langage corporel", "Son attitude générale"], 
        expl: "Des études scientifiques montrent que, dans une interaction sociale, les signaux du visage et surtout le regard sont traités très rapidement et attirent l’attention. Ainsi, de manière générale, quand on discute avec quelqu’un, le cerveau remarque d’abord le visage, surtout les yeux, puis le ton de voix et la posture. Ces informations aident à comprendre rapidement les émotions et les intentions de l’autre."
      },
      { 
        q: "Selon vous, pourquoi les interactions sociales sont-elles essentielles ?", 
        options: ["Développement cérébral", "Motivation", "Santé mentale", "Réduction du déclin cognitif"], 
        expl: "Chez l’enfant et l’adolescent, les interactions sociales précoces avec les parents et les pairs sont essentielles pour le développement des compétences sociales, émotionnelles et cognitives, ainsi que pour la maturation des réseaux neuronaux . Chez les adultes et les personnes âgées, la participation sociale est associée à un meilleur fonctionnement cognitif (mémoire, fonctions exécutives telles que la mémoire de travail par exemple) et à une réduction du risque de déclin cognitif. L’isolement social, le manque de soutien ou le stress social chronique sont associés à des altérations structurelles (réduction de la matière grise, modifications de la connectivité) et fonctionnelles (dysfonctionnement des réseaux émotionnels et cognitifs), ainsi qu’à un risque accru de troubles psychiatriques et de déclin cognitif."
      },
      { 
        q: "Que se passe-t-il dans votre cerveau quand vous voyez quelqu'un bailler ?", 
        options: ["Signal ignoré", "Neurones miroir activés", "Cortex moteur seul", "L'hippocampe enregistre"], 
        expl: "Quand vous voyez quelqu’un bâiller, il est possible que vous ayez aussi envie de bâiller. Cela s’explique en partie par les neurones miroir, qui activent dans votre cerveau les mêmes zones que si vous bailliez vous-mêmes. Ces neurones nous aident à comprendre et ressentir les actions et émotions des autres, ce qui explique pourquoi le bâillement peut être “contagieux”."
      }
    ]
  }
];

const customFeedbackQ2 = {
    "La mémoire": "<strong>Mémoire :</strong> Pour l’attention, un mini-exercice consiste à écouter un bruit ou une musique et identifier tous les sons que vous entendez. Cette pratique sollicite le cortex préfrontal et le cortex pariétal, zones impliquées dans le filtrage de l’information et la concentration, et aide à améliorer la vigilance dans les tâches quotidiennes.",
    "L’attention": "<strong>Attention :</strong> Pour l’attention, un mini-exercice consiste à écouter un bruit ou une musique et identifier tous les sons que vous entendez. Cette pratique sollicite le cortex préfrontal et le cortex pariétal, zones impliquées dans le filtrage de l’information et la concentration, et aide à améliorer la vigilance dans les tâches quotidiennes.",
    "La créativité": "<strong>Créativité :</strong> Si vous souhaitez renforcer la créativité, prenez 5 minutes pour imaginer de nouvelles utilisations pour un objet du quotidien. Ce type d’exercice active le cortex préfrontal et le réseau associatif, favorisant les connexions inédites entre idées et entraînant le cerveau à trouver des solutions originales.",
    "Le langage": "<strong>Langage :</strong> Pour le langage, un mini-jeu simple consiste à former le plus de mots possibles avec les lettres d’un mot choisi. Cela engage les aires du langage et les réseaux fronto-temporaux, et aide le cerveau à structurer le vocabulaire et améliorer la fluidité verbale."
};

const funFacts = [
  "Le cerveau contient environ 86 milliards de neurones !",
  "Il consomme 20% de votre énergie totale.",
  "L'influx nerveux voyage à 400 km/h.",
  "Le cerveau est composé à 75% d'eau.",
  "Votre cerveau ne ressent pas la douleur !"
];

let currentCat = parseInt(localStorage.getItem('brain_cat')) || 0;
let currentQues = parseInt(localStorage.getItem('brain_ques')) || 0;
let completedCats = JSON.parse(localStorage.getItem('brain_done')) || [];
let isShowingExpl = false;
let lastSelectedOption = "";

window.onload = () => {
    if (localStorage.getItem('brain_cat') !== null) startQuiz();
};

window.startQuiz = function() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('quizPage').style.display = 'block';
    
    currentCat = 0;
    currentQues = 0;
    document.getElementById('currentCategoryTitle').textContent = categories[currentCat].nom;
    startQuestions(); 
};

window.prev = function() {
    // Cas 1 : Si on est sur l'écran d'explication, on revient à la question
    if (isShowingExpl) {
        displayQuestion();
        return;
    }

    // Cas 2 : Si on est à la première question de la toute première catégorie
    if (currentCat === 0 && currentQues === 0) {
        // Optionnel : Retour à l'accueil ou ne rien faire
        location.reload(); // Retour à l'accueil
        return;
    }

    // Cas 3 : Si on est à la première question d'une catégorie (sauf la 1ère)
    if (currentQues === 0) {
        currentCat--;
        // On se place à la dernière question de la catégorie précédente
        currentQues = categories[currentCat].questions.length - 1;
    } else {
        // Cas 4 : On recule simplement d'une question
        currentQues--;
    }

    save();
    displayQuestion();
};

function showFunFact() {
    isShowingExpl = false;
    updateSidebar();
    document.getElementById('currentCategoryTitle').textContent = categories[currentCat].nom;
    document.getElementById('questionsScreen').style.display = 'none';
    document.getElementById('funFactScreen').style.display = 'block';
    // On récupère le fun fact correspondant à la catégorie
    document.getElementById('funFactText').textContent = funFacts[currentCat % funFacts.length];
}

window.startQuestions = function() {
    document.getElementById('funFactScreen').style.display = 'none';
    document.getElementById('questionsScreen').style.display = 'block';
    displayQuestion();
};

function displayQuestion() {
    document.getElementById('currentCategoryTitle').textContent = categories[currentCat].nom;
    isShowingExpl = false;
    lastSelectedOption = "";
    const data = categories[currentCat].questions[currentQues];
    
    document.getElementById('questionText').style.display = 'block';
    document.getElementById('optionsContainer').style.display = 'grid';
    document.getElementById('questionText').textContent = data.q;
    
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('nextBtn').textContent = "Suivant";
    
    const explBox = document.getElementById('explanationBox');
    explBox.style.display = 'none';
    explBox.innerHTML = '';

    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    data.options.forEach((opt) => {
        const label = document.createElement('label');
        label.className = "option-label";
        label.textContent = opt;
        label.tabIndex = 0; // Accessibilité : focusable au clavier
        
        // Sélection à la souris
        label.onclick = function() { selectOption(label, opt); };
        
        // Sélection au clavier (Entrée)
        label.onkeydown = function(e) {
            if (e.key === "Enter") selectOption(label, opt);
        };
        
        container.appendChild(label);
    });
    updateProgressUI();
}

function selectOption(element, text) {
    if (isShowingExpl) return;
    lastSelectedOption = text;
    document.querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));
    element.classList.add('selected');
    document.getElementById('nextBtn').style.display = 'block';
}

window.next = function() {
    const data = categories[currentCat].questions[currentQues];

    if (!isShowingExpl) {
        let text = (currentCat === 0 && currentQues === 1) ? customFeedbackQ2[lastSelectedOption] : data.expl;
        
        if (text) {
            isShowingExpl = true;
            document.getElementById('questionText').style.display = 'none';
            document.getElementById('optionsContainer').style.display = 'none';
            
            const explBox = document.getElementById('explanationBox');
            explBox.innerHTML = text;
            explBox.style.display = 'block';
            
            document.getElementById('nextBtn').textContent = "Continuer";
            return;
        }
    }
    goToNextStep();
};

function goToNextStep() {
    const isLastInCat = currentQues === categories[currentCat].questions.length - 1;

    if (!isLastInCat) {
        currentQues++;
        displayQuestion();
    } else if (currentCat < categories.length - 1) {
        // Fin de catégorie : on marque comme complété et on passe au FUN FACT de la suivante
        if (!completedCats.includes(currentCat)) completedCats.push(currentCat);
        currentCat++;
        currentQues = 0;
        save();
        showFunFact(); // On déclenche l'affichage du Fun Fact de la nouvelle catégorie
    } else {
        showNewsletter();
    }
    save();
}

function showNewsletter() {
    document.getElementById('quizPage').style.display = 'none';
    document.getElementById('newsletterPage').style.display = 'flex';
}

window.validateNewsletter = function() {
    const emailInput = document.getElementById('newsletterEmail');
    if (emailInput.value.includes('@') && emailInput.value.length > 5) {
        alert("Merci pour votre inscription !");
        localStorage.clear();
        location.reload();
    } else {
        alert("Veuillez entrer une adresse email valide.");
    }
};

function updateProgressUI() {
    const bar = document.getElementById('progressSteps');
    if (!bar) return;
    bar.innerHTML = '';
    const totalSteps = categories[currentCat].questions.length;
    for (let i = 0; i < totalSteps; i++) {
        const s = document.createElement('div');
        s.className = `step ${i === currentQues ? 'active' : ''} ${i < currentQues ? 'completed' : ''}`;
        bar.appendChild(s);
    }
}

function updateSidebar() {
    const items = document.querySelectorAll('.category-item');
    items.forEach((item, i) => {
        item.classList.toggle('active', i === currentCat);
        item.classList.toggle('completed', completedCats.includes(i));
    });
}

function save() {
    localStorage.setItem('brain_cat', currentCat);
    localStorage.setItem('brain_ques', currentQues);
    localStorage.setItem('brain_done', JSON.stringify(completedCats));
}