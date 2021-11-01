// PSEUDO =======================================
// On webpage load
// 		Build header with high score button and timer
// 		Show start button and code Quiz
// On hsBbutton click
// 		Display out of line box [build an close button]
// 		check if local storage has scores
// 		Yes: Load high score local storage
// 		No: display no local high scores
// On startbutton click - start quiz
// Quiz functionality
//		hide start screen
// 		show question 1
// 		on answer click
// 			check which button was clicked
// 			check if that button is true
// 			if yes - add time and load next question
// 			if no - remove time and load next question
// 		redraw questions with new text buttons
// When time runs out or when quiz number is greater than the number of questions
// end quiz - show final time / questions left
// do math to take final score
// have text field to enter name
// combine into object and save to local storage / high scores

console.log("script.js loaded");
// DEPENDENCIES =================================
var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start-button");
var timeDisplay = document.getElementById("time-display");
var questionDiv = document.getElementById("question-div");

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

// FUNCTIONS ====================================
// main game function
function quizMain() {
	quizStart();
	countdown();
}
// start game
function quizStart() {
	startScreen.classList.add("hidden");
	questionDiv.classList.remove("hidden");
}

// next question
function nextQuestion() {
}


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
