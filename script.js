let humanScore;
let computerScore;

function getComputerChoise(){
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function getHumanChoice(){
    let choice = prompt('Choose eihter rock, paper or scissors: ')
    return choice;
}

humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice){
    let winner;
    if(humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'paper'){
        console.log('You lose! Paper beats Rock.');
        winner = "comp";
    }
    else if(humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'scissors'){
        console.log('You win! Rock beats Scissors.');
        winner = "human";
    }
    else if(humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'rock'){
        console.log("It's a tie!");
        winner = "no winner";
    }
    else if(humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'paper'){
        console.log("It's a tie!");
        winner = "no winner";
    }
    else if(humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'scissors'){
        console.log("You lose! Scissors beat paper.");
        winner = "comp";
    }
    else if(humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'rock'){
        console.log('You win! Paper beats Rock.');
        winner = "human";
    }
    else if(humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'paper'){
        console.log("You win!. Scissors beat paper.");
        winner = "human";
    }
    else if(humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'scissors'){
        console.log("It's a tie!");
        winner = "no winner";
    }
    return winner;
}

function playGame(){
    let winner;
    for (let i = 0; i < 5; i++){
        winner = playRound(getHumanChoice(), getComputerChoise());
        if (winner === "comp"){
            computerScore++;
        }
        else if(winner === "human"){
            humanScore++;
        }
    }
    console.log(computerScore >= humanScore ? "You lost the game!" : "You won the game!");
}

playGame();