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

// DATA =========================================

// TODO: Change questions 
const questions = [
	{
		question: "1 - A",
		answers: [
			{ aText: "A", correct: true },
			{ aText: "B", correct: false },
			{ aText: "C", correct: false },
			{ aText: "D", correct: false },
		],
	},
	{
		question: "2 - B",
		answers: [
			{ aText: "A", correct: false },
			{ aText: "B", correct: true },
			{ aText: "C", correct: false },
			{ aText: "D", correct: false },
		],
	},
	{
		question: "3 - C",
		answers: [
			{ aText: "A", correct: false },
			{ aText: "B", correct: false },
			{ aText: "C", correct: true },
			{ aText: "D", correct: false },
		],
	},
	{
		question: "4 - D",
		answers: [
			{ aText: "A", correct: false },
			{ aText: "B", correct: false },
			{ aText: "C", correct: false },
			{ aText: "D", correct: true },
		],
	},
	{
		question: "5 - A",
		answers: [
			{ aText: "A", correct: true },
			{ aText: "B", correct: false },
			{ aText: "C", correct: false },
			{ aText: "D", correct: false },
		],
	},
];

var questionNum = 0;

var timeLeft = 10;

var numLocalStorage = localStorage.length;

// FUNCTIONS ====================================

// start game
function quizStart() {
	startScreen.classList.add("hidden");
	questionDiv.classList.remove("hidden");
	nextQuestion();
	countdown();
}

// next question
function nextQuestion() {
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
		nextQuestion();
	} else {
		// TODO: Make incorrect answer take time off
		// TODO: Red fade?
	}
}

// end game
function endGame() {
	questionDiv.classList.add("hidden");
	endScreen.classList.remove("hidden");

	timer.classList.add("hidden");
	var finalScore = timeLeft;
	endScore.textContent = finalScore;

	timeLeft = 0;

	var initials = prompt("Initials:");
	localStorage.setItem(
		"Score" + numLocalStorage,
		JSON.stringify({ initials: initials, score: finalScore })
	);
	addScore();
	showScores();
}

// add score
function addScore() {
	let scores = [];
	for (var i = 0; i < localStorage.length; i++) {
		scores.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
		let initials = scores[i].initials;
		let score = scores[i].score;
		var entry = document.createElement("li");
		entry.textContent = initials + ": " + score;
		scoreList.appendChild(entry);
	}
}

// show scores
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

	timeLeft = 10;
	questionNum = 0;

	timeDisplay.textContent = timeLeft;
}

// countdown timer
function countdown() {
	var timeCounter = setInterval(function () {
		if (timeLeft > 0) {
			timeDisplay.textContent = timeLeft;
			timeLeft--;
		} else {
			timeDisplay.textContent = 0;
			clearInterval(timeCounter);
			// TODO: When time reaches 0, end game.
		}
	}, 1000);
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
