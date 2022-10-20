// Allows for random computer choice //

 
let X = .33;
let Y = .66;
let Z = .99;

function getComputerChoice(){
 if (Math.random() < Z && Math.random() > Y) { return ('Rock');
} else if  (Math.random() < Y && Math.random() > X) {
 return ('Paper');
} else (Math.random() < X) 
 return ('Scissors');
}

//Allows from player to select either rock paper or scissors//
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

//Runs the game with player input irregardless of upper or lowercase//

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



let test = 'rock';
let    test2 = 'paper';
let    test3 = 'scissors'; 



//Test function calling the gamePlay(PlayerSelection) function to loop againt the computer for first to five//

function keepScore(){
    while(Computer <= 5 && Player <= 4 || Player <= 5 && Computer <= 4){

    if(gamePlay(test2) == 'Computer wins'){
     (Computer += 1)
     
   }else if(gamePlay(test2) == 'Player wins'){
        (Player += 1)
      
   }else {(Player += 0) && (Computer += 0)}
    
   
       
       if(Player == 5){
        alert('Player wins');
       } else if(Computer == 5){
        alert('Computer wins');
       }
       
       
    
    }

    

}