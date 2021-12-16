// TODO: Sort High Scores or rename button

console.log("script.js loaded");
// DEPENDENCIES =================================
var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start-button");
var timeDisplay = document.getElementById("time-display");
var questionDiv = document.getElementById("question-div");

var timer = document.getElementById("timer");

var endScreen = document.getElementById("end-screen");
var endScore = document.getElementById("end-score");

var qTxt = document.getElementById("q-text");
var ansA = document.getElementById("ans-a");
var ansB = document.getElementById("ans-b");
var ansC = document.getElementById("ans-c");
var ansD = document.getElementById("ans-d");

var scoresButton = document.getElementById("scores-button");

var scoreScreen = document.getElementById("score-screen");
var scoreList = document.getElementById("score-list");

var homeButton = document.getElementById("home-button");

var body = document.getElementById("body");

// DATA =========================================

const questions = [
	{
		question: "What HTML tag is Javascript placed in?",
		answers: [
			{ aText: "script", correct: true },
			{ aText: "scripting", correct: false },
			{ aText: "js", correct: false },
			{ aText: "javascript", correct: false },
		],
	},
	{
		question: "which of these is the OR operator",
		answers: [
			{ aText: "&&", correct: false },
			{ aText: "||", correct: true },
			{ aText: "??", correct: false },
			{ aText: "**", correct: false },
		],
	},
	{
		question: "Which of these test strict equality?",
		answers: [
			{ aText: "=", correct: false },
			{ aText: "==", correct: false },
			{ aText: "===", correct: true },
			{ aText: "====", correct: false },
		],
	},
	{
		question: "What does NaN stand for?",
		answers: [
			{ aText: "National Action Network", correct: false },
			{ aText: "Null and Not", correct: false },
			{ aText: "Neigborhood Aware Network ", correct: false },
			{ aText: "Not a Number", correct: true },
		],
	},
	{
		question: "Which of these is not a scope in JS?",
		answers: [
			{ aText: "Universal Scope", correct: true },
			{ aText: "Global Scope", correct: false },
			{ aText: "Function Scope", correct: false },
			{ aText: "Block Scope", correct: false },
		],
	},
];

var questionNum = 0;

var timeLeft = 59;

var numLocalStorage = localStorage.length;

var scores = [];
// FUNCTIONS ====================================

// start game
function quizStart() {
	startScreen.classList.add("hidden");
	questionDiv.classList.remove("hidden");
	nextQuestion();
	startCountdown();
}

// next question
function nextQuestion() {
	// body.classList.remove("correct-ans")

	if (questionNum > questions.length - 1) {
		endGame();
	} else {
		var currentQuestion = questions[questionNum].question;
		var currentAnswers = questions[questionNum].answers;

		qTxt.innerHTML = currentQuestion;

		ansA.innerHTML = currentAnswers[0].aText;
		ansB.innerHTML = currentAnswers[1].aText;
		ansC.innerHTML = currentAnswers[2].aText;
		ansD.innerHTML = currentAnswers[3].aText;

		ansA.dataset.correct = currentAnswers[0].correct;
		ansB.dataset.correct = currentAnswers[1].correct;
		ansC.dataset.correct = currentAnswers[2].correct;
		ansD.dataset.correct = currentAnswers[3].correct;
	}
}

// question check
function checkAnswer(event) {
	if (event.target.dataset.correct === "true") {
		questionNum++;
		body.classList.add("correct-ans");
		setTimeout(() => {
			body.classList.remove("correct-ans");
		}, 1000);
		nextQuestion();
	} else {
		timeLeft = timeLeft - 5;
		body.classList.add("wrong-ans");
		setTimeout(() => {
			body.classList.remove("wrong-ans");
		}, 1000);
	}
}

// end game
function endGame() {
	numLocalStorage = localStorage.length;
	stopCountdown();
	questionDiv.classList.add("hidden");
	endScreen.classList.remove("hidden");
	var finalScore;
	if (timeLeft < 0) {
		finalScore = 0;
	} else {
		finalScore = timeLeft;
	}
	timer.classList.add("hidden");
	endScore.textContent = finalScore;
	var initials = prompt("Initials:");

	timeLeft = 0;
	newScore(initials, finalScore);
	showScores();
}

// add score
function buildScores() {
	for (var i = 0; i < localStorage.length; i++) {
		scores.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
	}

	for (let i = 0; i < scores.length; i++) {
		let initials = scores[i].initials;
		let score = scores[i].score;
		var entry = document.createElement("li");
		entry.textContent = initials + ": " + score;
		scoreList.appendChild(entry);
	}
}

function newScore(init, num) {
	localStorage.setItem(
		"Score" + numLocalStorage,
		JSON.stringify({ initials: init, score: num })
	);

	let initials = init;
	let score = num;
	var entry = document.createElement("li");
	entry.textContent = initials + ": " + score;
	scoreList.appendChild(entry);
}

function showScores() {
	startScreen.classList.add("hidden");
	endScreen.classList.add("hidden");
	scoreScreen.classList.remove("hidden");
}

// go home, reset game
function goHome() {
	scoreScreen.classList.add("hidden");
	startScreen.classList.remove("hidden");
	timer.classList.remove("hidden");

	timeLeft = 59;
	questionNum = 0;

	timeDisplay.textContent = timeLeft;
}

// countdown timer
var timeCounter;

function countdown() {
	timeCounter = setInterval(function () {
		if (timeLeft > 0) {
			timeDisplay.textContent = timeLeft;
			timeLeft--;
		} else {
			timeDisplay.textContent = 0;
			clearInterval(timeCounter);
			endGame();
		}
	}, 1000);
}

function startCountdown() {
	countdown();
}

function stopCountdown() {
	clearInterval(timeCounter);
}

// USER INTERACTIONS ============================
startButton.addEventListener("click", quizStart);
ansA.addEventListener("click", checkAnswer);
ansB.addEventListener("click", checkAnswer);
ansC.addEventListener("click", checkAnswer);
ansD.addEventListener("click", checkAnswer);
homeButton.addEventListener("click", goHome);
scoresButton.addEventListener("click", showScores);

// INITIALIZATION ===============================
buildScores();
console.log(scores);
