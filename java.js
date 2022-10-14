
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
        return('Player wins');
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors'){
        return('Computer wins');
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper'){
        return('Computer wins');
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper'){
        return('Player wins');
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'){
        return('Player  wins');
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock'){
        return('Computer wins');
    } else {
        return('There has been a tie play again');
    }
}  



let test = 'Rock'    
let Q = 0;
let W = 0;
let I = 0;

function keepScore(){
return gamePlay(test);
 }


let automaticGamplay = keepScore();

