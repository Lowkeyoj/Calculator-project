// Allows for random computer choice //

let X = .33;
let Y = .66;
let Z = .99;

function getComputerChoice() {
    if (Math.random() < Z && Math.random() > Y) {
        return ('Rock');
    } else if (Math.random() < Y && Math.random() > X) {
        return ('Paper');
    } else (Math.random() < X)
    return ('Scissors');
}

let Computer = 0;
let Player = 0;

//Runs the game with player input irregardless of upper or lowercase//

function gamePlay(playerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && getComputerChoice().toLowerCase() == 'scissors') {
        return ('Player wins');
    } else if (playerSelection.toLowerCase() == 'paper' && getComputerChoice().toLowerCase() == 'scissors') {
        return ('Computer wins');
    } else if (playerSelection.toLowerCase() == 'rock' && getComputerChoice().toLowerCase() == 'paper') {
        return ('Computer wins');
    } else if (playerSelection.toLowerCase() == 'scissors' && getComputerChoice().toLowerCase() == 'paper') {
        return ('Player wins');
    } else if (playerSelection.toLowerCase() == 'paper' && getComputerChoice().toLowerCase() == 'rock') {
        return ('Player wins');
    } else if (playerSelection.toLowerCase() == 'scissors' && getComputerChoice().toLowerCase() == 'rock') {
        return ('Computer wins');
    } else {
        return ('There has been a tie play again');
    }
}



//Test function calling the gamePlay(PlayerSelection) function keep score for first to five//

function keepScore(playerSelection) {
    if (Computer < 4 && Player < 4){


    if (gamePlay(playerSelection) == 'Computer wins') 
           console.log(Computer++);
       
    else if (gamePlay(playerSelection) == 'Player wins') 
                            console.log(Player++);
                            
        else console.log((Player += 0) && (Computer += 0))


                if (Player == 3) 
                alert('Player wins')
                                               
                if (Computer == 3) 
                alert('Computer wins')
                                                                        

 }

}

const div = document.querySelector('div');

const unordered = document.createElement('ul');
const list = document.createElement('li');

unordered.appendChild(list);
div.appendChild(unordered);

const bt1 = document.querySelector('#bt1');
const bt2 = document.querySelector('#bt2');
const bt3 = document.querySelector('#bt3');

bt1.onclick = () => keepScore('Rock');
bt2.onclick = () => keepScore('Paper');
bt3.onclick = () => keepScore('Scissors');