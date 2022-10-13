
let random = Math.random();  
let X = .33;
let Y = .66;
let Z = .99;

function getComputerChoice(){
 if (random < Z && random > Y) { return ('Rock');
} else if  (random < Y && random > X) {
 return ('Paper');
} else (random < X) 
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
    computerSelection = getComputerChoice();
 

function gamePlay(playerSelection,computerSelection){
  if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
    alert('');
  } 
}

