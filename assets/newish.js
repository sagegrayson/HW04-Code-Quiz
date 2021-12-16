// Old Pseudo

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


// try #2
// define current question 
// define questions as objects in an array.
// When the user clicks start, a timer starts counting down, the splash screen is hidden, and the first question is displayed.
// When the user clicks a button, check the id of the button
// if the id is correct, show correct and button. if the id is incorrect, show incorrect and remove time. 
// when next button is clicked, switch the question text and ids. 
// once the current question reaches the end of the array, stop the timer and show the final time.



{
localStorage.setItem(
    "Score" + numLocalStorage,
    JSON.stringify({ initials: initials, score: finalScore })
);
showScores();
addScore();
}

// add score
function buildScore() {
for (var i = 0; i < localStorage.length; i++) {
    scores.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
}
}

function addScore() {
let c = localStorage.length;
let initials = scores[c].initials;
let score = scores[c].score;
var entry = document.createElement("li");
entry.textContent = initials + ": " + score;
scoreList.appendChild(entry);
}

// show scores
function showScores() {
if (scores.length < 1) {
    addScore();
} else {
}

}