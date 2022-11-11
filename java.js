// Allows for random computer choice //
let X = 3;
let Y = 6;
let Z = 10;


function getComputerChoice() {
    if (Math.floor(Math.random() * 10) < Z && Math.floor(Math.random() * 10) > Y) {
        return ('Rock');
    } else if (Math.floor(Math.random() * 10) < Y && Math.floor(Math.random() * 10) > X) {
        return ('Paper');
    } else (Math.floor(Math.random() * 10) < X)
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
    } else return 'There has been a tie';
}

//Test function calling the gamePlay(PlayerSelection) function keep score for first to five//

function keepScore(playerSelection) {


     if (Player === 3) {
        alert('Player wins');
        list.innerHTML = `${Player} Player score`;
        list2.innerHTML = 'Game over refresh to play again player won this round'
    }
    else if (Computer === 3) {
        alert('Computer wins');
        list.innerHTML = `${Computer} Computer score`;
        list2.innerHTML = 'Game over refresh to play again computer won'
    }
    
    else if(gamePlay(playerSelection) == 'Computer wins')
        list.innerHTML = `${Computer++} Computer score`;

    else if (gamePlay(playerSelection) == 'Player wins')
        list.innerHTML = `${Player++} Player score`;

    else list.innerHTML = 'Its a tie play again';


}

const div = document.querySelector('div');

const unordered = document.createElement('ul');
const list = document.createElement('li');
const list2 = document.createElement('li');

unordered.appendChild(list2);
unordered.appendChild(list);
div.appendChild(unordered);
list.style.listStyleType = 'none';
list2.style.listStyleType = 'none';


const bt1 = document.getElementById('bt1');
const bt2 = document.getElementById('bt2');
const bt3 = document.getElementById('bt3');

let num1 = bt1.onclick = () => keepScore('Rock');;
let num2 = bt2.onclick = () => keepScore('Paper');;
let num3 = bt3.onclick = () => keepScore('Scissors');;

