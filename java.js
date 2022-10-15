
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

    
let Computer = 0;
let Player = 0;    
    
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
        return('Player wins');
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock'){
        return('Computer wins');
    } else {
        return('There has been a tie play again');
    }      
} 


function keepScore(playerSelection){
    if(Computer <= 5 || Player <= 5){
        Computer++;
        Player++; 
    }  
    
    if(gamePlay(playerSelection) == 'Computer wins'){
     console.log(Computer);
   } else console.log(Computer += 0);
   
    

    if(gamePlay(playerSelection) == 'Player wins'){
        console.log(Player);
    } else console.log(Player +=0);

       if(Player == 5){
        alert('Player wins');
       } else if(Computer == 5){
        alert('Computer wins');
       }

}
