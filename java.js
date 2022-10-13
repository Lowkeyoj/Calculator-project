
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
 

function gamePlay(playerSelection){
    if(playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors'){
        console.log('Player wins');
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors'){
        console.log('Computer wins');
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper'){
        console.log('Computer wins');
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper'){
        console.log('Player wins');
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'){
        console.log('Player  wins');
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock'){
        console.log('Computer wins');
    } else {
        console.log('There has been a tie play again');
    }
}  

console.log(gamePlay('Rock'));