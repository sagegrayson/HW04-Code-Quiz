console.log("script.js loaded");
// DEPENDENCIES =================================
var startButton = document.getElementById("start-button");
var timeDisplay = document.getElementById("time-display");

// DATA =========================================

// FUNCTIONS ====================================
// main game function
function quizMain() {
	countdown();
}

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
