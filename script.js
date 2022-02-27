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
function game(){
    if(rock)
{
    rock.addEventListener('click',() => {
        if(playRound('rock',computerPlay())=='c')
            computerScore++;
        else if(playRound('rock',computerPlay())=='p')
            playerScore++;
    count++;
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
    }
});
}
if(paper)
{
    paper.addEventListener('click',() => {
        if(playRound('paper',computerPlay())=='c')
            computerScore++;
        else if(playRound('paper',computerPlay())=='p')
            playerScore++;
    count++;
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
    }
});
}
if(scissors)
{
    scissors.addEventListener('click',() => {
        if(playRound('scissors',computerPlay())=='c')
            computerScore++;
        else if(playRound('scissors',computerPlay())=='p')
            playerScore++;
    count++;
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
    }
});
}
}game();
let inTextPlayer = document.createElement('p');
const divPlayer = document.getElementById('player');
divPlayer.appendChild(inTextPlayer);
let inTextComputer = document.createElement('p');
const divComputer = document.getElementById('computer');
divComputer.appendChild(inTextComputer);

const divFinal = document.getElementById('final');
let finalReslut = document.createElement('p');
divFinal.appendChild(finalReslut);