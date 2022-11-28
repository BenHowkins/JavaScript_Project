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

}

/**
 * Checking result of game
 * 0 = Stick
 * 1 = Net
 * 2 = Puck 
 */

function result() {
    if (redChoice == '0' && blueChoice == '2') {
        resultMessage.innerText = `Red Team: STICK
        Vs.
        Blue Team: PUCK

        RED GOAL`;
        resultMessage.style.color = '#940000';
        increaseRedScoreSpan();
     }
     else if (redChoice == '0' && blueChoice == '1') {
        resultMessage.innerText = `Red Team: STICK
        Vs.
        Blue Team: NET
        
        BLUE GOAL`;
        resultMessage.style.color = 'blue';
        increaseBlueScoreSpan();
     }
     else if (redChoice == '1' && blueChoice == '0') {
        resultMessage.innerText = `Red Team: NET
        Vs.
        Blue Team: STICK
        
        RED GOAL`;
        resultMessage.style.color = '#940000';
        increaseRedScoreSpan();
     }     
     else if (redChoice == '1' && blueChoice == '2') {
        resultMessage.innerText = `Red Team: NET
        Vs.
        Blue Team: PUCK
        
        BLUE GOAL`;
        resultMessage.style.color = 'blue';
        increaseBlueScoreSpan();
     }
     else if (redChoice == '2' && blueChoice == '1') {
        resultMessage.innerText = `Red Team: PUCK
        Vs.
        Blue Team: NET
        
        RED GOAL`;
        resultMessage.style.color = '#940000';
        increaseRedScoreSpan();
     } 
     else if (redChoice == '2' && blueChoice == '0') {
        resultMessage.innerText = `Red Team: PUCK
        Vs.
        Blue Team: STICK
        
        BLUE GOAL`;
        resultMessage.style.color = 'blue';
        increaseBlueScoreSpan();
     } 
      else if (redChoice == '0' && blueChoice == '0') {
         resultMessage.innerText = `Red Team: STICK
         Vs.
         Blue Team: STICK
         
         DRAW`;
         resultMessage.style.color = 'black';
      }
      else if (redChoice == '1' && blueChoice == '1') {
         resultMessage.innerText = `Red Team: NET
         Vs.
         Blue Team: NET
         
         DRAW`;
         resultMessage.style.color = 'black';
      }
      else{
         resultMessage.innerText = `Red Team: PUCK
         Vs.
         Blue Team: PUCK
         
         DRAW`;
         resultMessage.style.color = 'black';
      }
}

/**
 * Increase scores based on the result of the game
 * If player wins red score increases,
 * computer wins blue score increases
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
 * Listens to see if a team has 5 points and gives an alert
 * saying the winner and sets the game back to 0-0
 */

function endGame() {

   let redScore = parseInt(document.getElementById('red-score').innerText);
   let blueScore = parseInt(document.getElementById('blue-score').innerText);

   if (redScore === 5) {
      alert('RED TEAM WINS, HOW ABOUT ANOTHER GAME?');
      gameReset();

   } else if (blueScore === 5) {
      alert ('BLUE TEAM WINS, HOW ABOUT ANOTHER GAME?');
      gameReset();
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
   resultMessage.style.color = 'black';

}