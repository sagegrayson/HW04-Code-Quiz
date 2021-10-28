console.log("script.js loaded");
// DEPENDENCIES =================================
var startButton = document.getElementById("start-button");
var timeDisplay = document.getElementById("time-display");
const questions = [
	{
		question: "1 - A",
		answers: [
			{aText: "A", correct: true},
			{aText: "B", correct: false},
			{aText: "C", correct: false},
			{aText: "D", correct: false},

		]
	},
	{
		question: "2 - B",
		answers: [
			{aText: "A", correct: false},
			{aText: "B", correct: true},
			{aText: "C", correct: false},
			{aText: "D", correct: false},

		]
	},
	{
		question: "3 - C",
		answers: [
			{aText: "A", correct: false},
			{aText: "B", correct: false},
			{aText: "C", correct: true},
			{aText: "D", correct: false},

		]
	},
	{
		question: "4 - D",
		answers: [
			{aText: "A", correct: false},
			{aText: "B", correct: false},
			{aText: "C", correct: false},
			{aText: "D", correct: true},

		]
	},
	{
		question: "5 - A",
		answers: [
			{aText: "A", correct: true},
			{aText: "B", correct: false},
			{aText: "C", correct: false},
			{aText: "D", correct: false},

		]
	}
]


// DATA =========================================

// FUNCTIONS ====================================
// main game function
function quizMain() {
	countdown();
}

// next question
// end game
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
startButton.addEventListener("click", quizMain);

// INITIALIZATION ===============================
