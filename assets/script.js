console.log("script.js loaded");
// DEPENDENCIES =================================
var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start-button");
var timeDisplay = document.getElementById("time-display");
var questionDiv = document.getElementById("question-div");

var qTxt = document.getElementById("q-text");
var ansA = document.getElementById("ans-a");
var ansB = document.getElementById("ans-b");
var ansC = document.getElementById("ans-c");
var ansD = document.getElementById("ans-d");

// DATA =========================================
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

// FUNCTIONS ====================================

// start game
function quizStart() {
	startScreen.classList.add("hidden");
	questionDiv.classList.remove("hidden");
	nextQuestion();
}

// next question
function nextQuestion() {
	if (questionNum > questions.length - 1) {
		endGame();
	} else {
		var currentQuestion = questions[questionNum].question;
		var currentAnswers = questions[questionNum].answers;
		console.log(questionNum);
		console.log(currentAnswers);
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
	console.log(event.target.dataset.correct);
	if (event.target.dataset.correct === "true") {
		questionNum++;
		nextQuestion();
	} else {
	}
}

// end game
function endGame() {
	console.log("game end");
}

// show scores
// play again

// countdown timer
function countdown() {
	var timeLeft = 10;

	var timeCounter = setInterval(function () {
		if (timeLeft > 0) {
			timeDisplay.textContent = timeLeft;
			timeLeft--;
		} else {
			timeDisplay.textContent = 0;
			clearInterval(timeCounter);
		}
	}, 1000);
}

// USER INTERACTIONS ============================
startButton.addEventListener("click", quizStart);
ansA.addEventListener("click", checkAnswer);
ansB.addEventListener("click", checkAnswer);
ansC.addEventListener("click", checkAnswer);
ansD.addEventListener("click", checkAnswer);

// INITIALIZATION ===============================
