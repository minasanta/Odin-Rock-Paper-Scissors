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
            return 'You lose, Paper beats rock';
        else if(String(computerSelection) === 'Scissors')
            return 'You won, rock beats scissors';
        else
            return 'No one won';
    }
    else if (String(playerSelection).toUpperCase() === 'PAPER'){
        if(String(computerSelection) === 'Paper')
            return 'No one won';
        else if(String(computerSelection) === 'Scissors')
            return 'You lose, scissors beats paper';
        else
            return 'You won, paper beats rock';
    }
    else {
        if(String(computerSelection) === 'Paper')
            return 'You won, scissors beats paper';
        else if(String(computerSelection) === 'Scissors')
            return 'No one won';
        else
            return 'You lose, rock beats scissors';
    }
  }

function game () {
    for(let i=0;i<5;i++){
        let playerSelection = prompt('Enter your choice : ','rock');
        let computerSelection = computerPlay();
        console.log(`Your choice is ${playerSelection} and the computer choice is ${computerSelection} so : \n`)
        console.log(playRound(playerSelection, computerSelection));
    }    
}
game();