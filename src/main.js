let categories = [
  {
    nom: "Anatomie du cerveau",
    questions: [
      { 
        q: "Quel est l'organe principal du système nerveux central ?", 
        options: ["Le cœur", "Le cerveau", "Le foie", "Les poumons"], 
        correct: 1 
      },
      { 
        q: "Quelle structure relie les deux hémisphères cérébraux ?", 
        options: ["Le cervelet", "Le tronc cérébral", "Le corps calleux", "L'amygdale"], 
        correct: 2 
      },
      { 
        q: "Combien de lobes possède chaque hémisphère cérébral ?", 
        options: ["2", "3", "4", "5"], 
        correct: 2 
      }
    ]
  },
  {
    nom: "Neurones et synapses",
    questions: [
      { 
        q: "Quel type de cellule transmet l'influx nerveux ?", 
        options: ["Les neurones", "Les ostéocytes", "Les hépatocytes", "Les adipocytes"], 
        correct: 0 
      },
      { 
        q: "Comment s'appelle l'espace entre deux neurones ?", 
        options: ["Axone", "Synapse", "Dendrite", "Myéline"], 
        correct: 1 
      },
      { 
        q: "Quelle est la fonction principale de la myéline ?", 
        options: ["Ralentir l'influx", "Accélérer l'influx", "Arrêter l'influx", "Diviser l'influx"], 
        correct: 1 
      }
    ]
  },
  {
    nom: "Mémoire et apprentissage",
    questions: [
      { 
        q: "Quelle zone du cerveau est principalement impliquée dans la mémoire ?", 
        options: ["L'hippocampe", "Le bulbe rachidien", "Le cortex moteur", "Le thalamus"], 
        correct: 0 
      },
      { 
        q: "Quel type de mémoire permet de retenir des informations pendant quelques secondes ?", 
        options: ["Mémoire à long terme", "Mémoire sensorielle", "Mémoire de travail", "Mémoire procédurale"], 
        correct: 2 
      },
      { 
        q: "Quelle région est cruciale pour la formation de nouveaux souvenirs ?", 
        options: ["Le cervelet", "L'hippocampe", "Le bulbe olfactif", "La moelle épinière"], 
        correct: 1 
      }
    ]
  },
  {
    nom: "Neurotransmetteurs",
    questions: [
      { 
        q: "Quelle substance chimique est un neurotransmetteur bien connu ?", 
        options: ["Insuline", "Dopamine", "Collagène", "Hémoglobine"], 
        correct: 1 
      },
      { 
        q: "Quel neurotransmetteur est associé au plaisir et à la récompense ?", 
        options: ["Sérotonine", "GABA", "Dopamine", "Acétylcholine"], 
        correct: 2 
      },
      { 
        q: "Quel neurotransmetteur régule l'humeur et le sommeil ?", 
        options: ["Dopamine", "Sérotonine", "Noradrénaline", "Glutamate"], 
        correct: 1 
      }
    ]
  },
  {
    nom: "Fonctions cognitives",
    questions: [
      { 
        q: "Quelle zone contrôle principalement le langage parlé ?", 
        options: ["Aire de Broca", "Aire de Wernicke", "Cortex visuel", "Cervelet"], 
        correct: 0 
      },
      { 
        q: "Quel hémisphère est généralement dominant pour le langage ?", 
        options: ["Le droit", "Le gauche", "Les deux également", "Aucun"], 
        correct: 1 
      },
      { 
        q: "Quelle partie du cerveau contrôle l'équilibre et la coordination ?", 
        options: ["Le cortex", "Le thalamus", "Le cervelet", "L'hypothalamus"], 
        correct: 2 
      }
    ]
  }
];

let funFacts = [
  "Le cerveau humain contient environ 86 milliards de neurones !",
  "Le cerveau consomme environ 20% de l'énergie totale du corps.",
  "Les informations peuvent voyager dans le cerveau à plus de 400 km/h !",
  "Le cerveau adulte pèse environ 1,4 kg en moyenne.",
  "Chaque neurone peut être connecté à 10 000 autres neurones !"
];

let currentCategory = 0;
let currentQuestion = 0;
let answers = [];
let totalQuestions = 0;
let completedCategories = [];

// Sauvegarder la progression
function saveProgress() {
  var progress = {
    currentCategory: currentCategory,
    currentQuestion: currentQuestion,
    answers: answers,
    completedCategories: completedCategories
  };
  localStorage.setItem('quizProgress', JSON.stringify(progress));
}

// Charger la progression
function loadProgress() {
  var saved = localStorage.getItem('quizProgress');
  if (saved) {
    var progress = JSON.parse(saved);
    currentCategory = progress.currentCategory;
    currentQuestion = progress.currentQuestion;
    answers = progress.answers || [];
    completedCategories = progress.completedCategories || [];
    return true;
  }
  return false;
}

// Réinitialiser la progression
function resetProgress() {
  localStorage.removeItem('quizProgress');
  currentCategory = 0;
  currentQuestion = 0;
  answers = [];
  completedCategories = [];
}

// Aller à la page du quiz
function goToQuiz() {
  document.getElementById('homepage').style.display = 'none';
  document.getElementById('quizPage').style.display = 'block';
  
  // Vérifier s'il y a une progression sauvegardée
  var hasProgress = loadProgress();
  
  if (hasProgress) {
    // Reprendre là où on s'était arrêté
    init();
  } else {
    // Commencer un nouveau quiz
    init();
  }
}

function renderProgressSteps() {
  let container = document.getElementById('progressSteps');
  container.innerHTML = '';

  for (let i = 0; i < totalQuestions; i++) {
    let step = document.createElement('div');
    step.className = 'step';
    container.appendChild(step);
  }
}

function updateProgressSteps() {
  let steps = document.querySelectorAll('.progress-steps .step');

  steps.forEach(function(step, i) {
    step.classList.remove('active', 'completed');

    if (i < currentQuestion) step.classList.add('completed');
    if (i === currentQuestion) step.classList.add('active');
  });
}

function init() {
  updateCategoryDisplay();
  updateCategoryTitle();
  updateFunFact();
  loadCategory(currentCategory);
  displayQuestion();
  saveProgress();
}

function updateCategoryDisplay() {
  let items = document.querySelectorAll('.category-item');
  items.forEach(function(item, index) {
    item.textContent = categories[index].nom;
    item.classList.remove('active', 'completed');
    
    if (completedCategories.includes(index)) {
      item.classList.add('completed');
    } else if (index === currentCategory) {
      item.classList.add('active');
    }
  });
}

function updateCategoryTitle() {
  document.getElementById('currentCategory').textContent = categories[currentCategory].nom;
}

function loadCategory(index) {
  var category = categories[index];
  
  if (!answers || answers.length === 0) {
    answers = new Array(category.questions.length).fill(null);
  }
  totalQuestions = category.questions.length;

  renderProgressSteps();
  updateProgressSteps();
}

function updateFunFact() {
  let randomIndex = Math.floor(Math.random() * funFacts.length);
  document.getElementById('funFact').textContent = funFacts[randomIndex];
}

function displayQuestion() {
  let question = categories[currentCategory].questions[currentQuestion];
  
  document.getElementById('questionText').textContent = question.q;
  
  let container = document.getElementById('optionsContainer');
  container.innerHTML = '';
  
  for (let i = 0; i < question.options.length; i++) {
    let label = document.createElement('label');
    if (answers[currentQuestion] === i) label.className = 'selected';
    
    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'option';
    if (answers[currentQuestion] === i) radio.checked = true;
    radio.onclick = ((index) => () => selectOption(index))(i);
    
    label.appendChild(radio);
    label.appendChild(document.createTextNode(question.options[i]));
    container.appendChild(label);
  }
  
  updateNavDots();
  updateProgressSteps();

  // Gérer le bouton précédent
  let prevBtn = document.getElementById('prevBtn');
  if (currentQuestion === 0 && currentCategory === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  // Gérer le bouton suivant
  let nextBtn = document.getElementById('nextBtn');
  if (currentQuestion === totalQuestions - 1 && currentCategory === categories.length - 1) {
    nextBtn.textContent = 'Terminer';
  } else if (currentQuestion === totalQuestions - 1) {
    nextBtn.textContent = 'Rubrique suivante';
  } else {
    nextBtn.textContent = 'Suivant';
  }
}

function updateNavDots() {
  let dotsContainer = document.getElementById('navDots');
  dotsContainer.innerHTML = '';
  
  for (let i = 0; i < totalQuestions; i++) {
    let dot = document.createElement('span');
    dot.className = (i === currentQuestion) ? 'dot active' : 'dot';
    dot.onclick = ((index) => () => {
      currentQuestion = index;
      displayQuestion();
    })(i);
    dotsContainer.appendChild(dot);
  }
}

function selectOption(index) {
  answers[currentQuestion] = index;

  let container = document.getElementById('optionsContainer');
  let labels = container.querySelectorAll('label');
  labels.forEach(function(label, i) {
    label.classList.toggle('selected', i === index);
  });
  
  saveProgress();
}

function next() {
  if (currentQuestion < totalQuestions - 1) {
    // Question suivante dans la même rubrique
    currentQuestion++;
    updateProgressSteps();
    displayQuestion();
    saveProgress();
  } else if (currentCategory < categories.length - 1) {
    // Passer à la rubrique suivante
    completedCategories.push(currentCategory);
    currentCategory++;
    answers = new Array(categories[currentCategory].questions.length).fill(null);
    loadCategory(currentCategory);
    currentQuestion = 0;
    updateCategoryTitle();
    updateCategoryDisplay();
    updateFunFact();
    displayQuestion();
    saveProgress();
  } else {
    
    completedCategories.push(currentCategory);
    resetProgress();
    alert('Félicitations ! Vous avez terminé toutes les rubriques du quiz !');
    location.reload();
  }
}

function prev() {
  if (currentQuestion > 0) {
    
    currentQuestion--;
    updateProgressSteps();
    displayQuestion();
    saveProgress();
  } else if (currentCategory > 0) {
   
    currentCategory--;
    loadCategory(currentCategory);
    currentQuestion = totalQuestions - 1;
    updateCategoryTitle();
    updateCategoryDisplay();
    displayQuestion();
    saveProgress();
  }
}

window.onload = function() {
  
  var hasProgress = loadProgress();
  
  if (hasProgress) {
   
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('quizPage').style.display = 'block';
    init();
  } else {
   
    document.getElementById('homepage').style.display = 'flex';
    document.getElementById('quizPage').style.display = 'none';
  }
};