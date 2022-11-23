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
    endGame();

};

/**
 * Checking result of game
 */

function result() {
    if (redChoice == '0' && blueChoice == '2') {
        resultMessage.innerHTML = "RED GOAL";
        resultMessage.style.color = '#940000';
        increaseRedScoreSpan();
     }
     else if (redChoice == '0' && blueChoice == '1') {
        resultMessage.innerHTML = "BLUE GOAL";
        resultMessage.style.color = 'blue';
        increaseBlueScoreSpan();
     }
     else if (redChoice == '1' && blueChoice == '0') {
        resultMessage.innerHTML = "RED GOAL";
        resultMessage.style.color = '#940000';
        increaseRedScoreSpan();
     }     
     else if (redChoice == '1' && blueChoice == '2') {
        resultMessage.innerHTML = "BLUE GOAL";
        resultMessage.style.color = 'blue';
        increaseBlueScoreSpan();
     }
     else if (redChoice == '2' && blueChoice == '1') {
        resultMessage.innerHTML = "RED GOAL";
        resultMessage.style.color = '#940000';
        increaseRedScoreSpan();
     } 
     else if (redChoice == '2' && blueChoice == '0') {
        resultMessage.innerHTML = "BLUE GOAL";
        resultMessage.style.color = 'blue';
        increaseBlueScoreSpan();
     } 
     else {
        resultMessage.innerHTML = "DRAW";
        resultMessage.style.color = 'black';
     }
}

/**
 * Increase scores based on the result of the game
 */

function increaseRedScoreSpan() {

    let pastScore = parseInt(document.getElementById('red-score').innerText);
    document.getElementById('red-score').innerText = ++pastScore;

}

function increaseBlueScoreSpan() {
    
    let oldScore = parseInt(document.getElementById('blue-score').innerText);
    document.getElementById('blue-score').innerText = ++oldScore;
    
}

/**
 * End game function for when one team scores 5 goals
 */

function endGame() {

   let redScore = parseInt(document.getElementById('red-score').innerText);
   let blueScore = parseInt(document.getElementById('blue-score').innerText);

   if (redScore === 5) {
      resultMessage.innerHTML = 'RED TEAM WINS';
      resultMessage.style.color = '#940000';
   } else if (blueScore === 5) {
      resultMessage.innerHTML = 'BLUE TEAM WINS';
      resultMessage.style.color = 'blue';
   }
}

/**
 * Event Listener for game reset
 */

document.getElementById('reset-btn').addEventListener('click', function() {

   gameReset();

});

/**
 * Reset the scores to 0 and restart game
 */

function gameReset() {

   redScoreSpan.innerText = '0';
   blueScoreSpan.innerText = '0';
   resultMessage.innerText = 'LET THE GAME BEGIN';
   resultMessage.style.css = 'black';

}