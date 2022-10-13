



function getComputerChoice(X, Y, Z){
 if (X, Y, Z) { return ('Rock');
} else if (X, Y) {
 return ('Paper');
} else (X) 
 return ('Scissors');
}


function getPlayerChoice(A, B, C){
 if (A, B, C) {
   return ('Rock'); 
 } else if (B, C) {
   return ('Paper'); 
 } else (C)
    return ('Scissors');
 }

 
let playerSelection = getPlayerChoice;
    computerSelection = getComputerChoice;
    
function gamePlay(playerSelection,computerSelection){
  if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
    alert('were onto something');
  } 
}


console.log(gamePlay('rock','paper'));
