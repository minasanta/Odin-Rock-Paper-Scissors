function computerPlay(){
    let random = Math.floor(Math.random()*3) + 1;
    switch(random){
        case 1: return 'Rock';
        case 2: return 'Paper';
        case 3: return 'Scissors';
    }
}
function playRound(playerSelection, computerSelection) {
    if(String(playerSelection).toUpperCase() === 'ROCK'){
        if(String(computerSelection) === 'Paper')
            return 'c';
        else if(String(computerSelection) === 'Scissors')
            return 'p';
    }
    else if (String(playerSelection).toUpperCase() === 'PAPER'){
        if(String(computerSelection) === 'Paper')
            return;
        else if(String(computerSelection) === 'Scissors')
            return 'c';
        else
            return 'p';
    }
    else {
        if(String(computerSelection) === 'Paper')
            return 'p';
        else if(String(computerSelection) === 'Scissors')
            return;
        else
            return 'c';
    }
  }
let playerScore = 0;
let computerScore = 0;
let count = 0;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const pChoice = document.getElementById('ch');
function game(){
    if(rock)
{
    rock.addEventListener('click',() => {
        if(playRound('rock',computerPlay())=='c')
        {
            computerScore++;
            pChoice.textContent = 'Your choice is Rock and the computer choice is Paper so he wins';
        }
        else if(playRound('rock',computerPlay())=='p')
        {
            pChoice.textContent = 'Your choice is Rock and the computer choice is Scissors so you wins';
            playerScore++;
        }
        else
        {
            pChoice.textContent = 'You both choice Rock';
        }
    count++;
    textRounds.textContent = `number of rounds is ${count}`;
    inTextPlayer.textContent = `The player score is ${playerScore}`;
    inTextComputer.textContent = `The computer score is ${computerScore}`;
    if(count===5)
    {
        if(playerScore>computerScore)
            finalReslut.textContent = `The winner is the player`;
        else
            finalReslut.textContent = `The winner is the computer`;
        playerScore=0;
        computerScore=0;
        count= 0;
    }
    else
        {
            finalReslut.textContent = ``;
        }
});
}
if(paper)
{
    paper.addEventListener('click',() => {
        if(playRound('paper',computerPlay())=='c')
        {
            computerScore++;
            pChoice.textContent = 'Your choice is Paper and the computer choice is Scissors so he wins';
        }
        else if(playRound('paper',computerPlay())=='p')
        {
            playerScore++;
            pChoice.textContent = 'Your choice is Paper and the computer choice is Rock so you wins';
        }
        else
        {
            pChoice.textContent = 'You both choice Paper';
        }
        count++;
        textRounds.textContent = `number of rounds is ${count}`;
        inTextPlayer.textContent = `The player score is ${playerScore}`;
        inTextComputer.textContent = `The computer score is ${computerScore}`;
        if(count===5)
        {
            if(playerScore>computerScore)
                finalReslut.textContent = `The winner is the player`;
            else
                finalReslut.textContent = `The winner is the computer`;
            playerScore=0;
            computerScore=0;
            count= 0;
        }
        else
        {
            finalReslut.textContent = ``;
        }
});
}
if(scissors)
{
    scissors.addEventListener('click',() => {
        if(playRound('scissors',computerPlay())=='c')
        {
            pChoice.textContent = 'Your choice is Scissors and the computer choice is Rock so he wins';
            computerScore++;
        }
        else if(playRound('scissors',computerPlay())=='p')
        {
            playerScore++;
            pChoice.textContent = 'Your choice is Scissors and the computer choice is Paper so you wins';
        }
        else
        {
            pChoice.textContent = 'You both choice Scissors';
        }
        count++;
        textRounds.textContent = `number of rounds is ${count}`;
        inTextPlayer.textContent = `The player score is ${playerScore}`;
        inTextComputer.textContent = `The computer score is ${computerScore}`;
        if(count===5)
        {
            if(playerScore>computerScore)
                finalReslut.textContent = `The winner is the player`;
            else
                finalReslut.textContent = `The winner is the computer`;
            playerScore=0;
            computerScore=0;
            count= 0;
        }
        else
        {
            finalReslut.textContent = ``;
        }
});
}
}
const textRounds = document.querySelector('.rounds');
const inTextPlayer = document.querySelector('.player-score');
const divPlayer = document.getElementById('player');
const inTextComputer = document.querySelector('.computer-score');
const divComputer = document.getElementById('computer');
const divFinal = document.getElementById('final');
let finalReslut = document.createElement('p');
divFinal.appendChild(finalReslut);
game();