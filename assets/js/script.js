/**
 * Declare constants for DOM and possible choices
 */

const buttons = document.getElementsByClassName('btn');
let redScoreSpan = document.getElementById('red-score');
let blueScoreSpan = document.getElementById('blue-score');

let resultMessage = document.getElementById('result-message');
let redChoice;
let blueChoice;

/**
 * Add buttons event listener
 */

for (let button of buttons) {

    button.addEventListener('click', function() {
        
        redChoice = this.getAttribute('data-choice');
        playGame(redChoice);
    });
}

/**
 * Main game with computer (blue team) choice randomly selected
 */

function playGame(redChoice) {

    blueChoice = Math.floor(Math.random() * 3);
    result();
    //endGame();

};

/**
 * Checking result of game
 */

function result() {
    if (redChoice == '0' && blueChoice == '2') {
        resultMessage.innerHTML = "RED GOAL";
        increaseRedScoreSpan();
     }
     else if (redChoice == '0' && blueChoice == '1') {
        resultMessage.innerHTML = "BLUE GOAL";
        increaseBlueScoreSpan();
     }
     else if (redChoice == '1' && blueChoice == '0') {
        resultMessage.innerHTML = "RED GOAL";
        increaseRedScoreSpan();
     }     
     else if (redChoice == '1' && blueChoice == '2') {
        resultMessage.innerHTML = "BLUE GOAL";
        increaseBlueScoreSpan();
     }
     else if (redChoice == '2' && blueChoice == '1') {
        resultMessage.innerHTML = "RED GOAL";
        increaseRedScoreSpan();
     } 
     else if (redChoice == '2' && blueChoice == '0') {
        resultMessage.innerHTML = "BLUE GOAL";
        increaseBlueScoreSpan();
     } 
     else {
        resultMessage.innerHTML = "DRAW";
     }
}

/**
 * Increase scores based on the result of the game
 */

function increaseRedScoreSpan() {

    let oldScore = parseInt(document.getElementById('red-score').innerText);
    document.getElementById('red-score').innerText = ++oldScore;

}

function increaseRedScoreSpan() {
    
    let oldScore = parseInt(document.getElementById('blue-score').innerText);
    document.getElementById('blue-score').innerText = ++oldScore;
    
}