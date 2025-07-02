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

humanScore = 0;
computerScore = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => playRound('Rock', getComputerChoise()));
paper.addEventListener('click', () => playRound('Paper', getComputerChoise()));
scissors.addEventListener('click', () => playRound('Scissors', getComputerChoise()));

const points = document.querySelector('.points');
const message = document.querySelector('.message');
message.textContent = "Choose Rock, Paper or Scissors to start the game!";
function playRound(humanChoice, computerChoice){
    let winner;
    if(humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'paper'){
        message.textContent = 'You lose! Paper beats Rock.';
        winner = "comp";
    }
    else if(humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'scissors'){
        message.textContent = 'You win! Rock beats Scissors.';
        winner = "human";
    }
    else if(humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'rock'){
        message.textContent = "It's a tie!";
        winner = "no winner";
    }
    else if(humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'paper'){
        message.textContent = "It's a tie!";
        winner = "no winner";
    }
    else if(humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'scissors'){
        message.textContent = "You lose! Scissors beat paper.";
        winner = "comp";
    }
    else if(humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'rock'){
        message.textContent = 'You win! Paper beats Rock.';
        winner = "human";
    }
    else if(humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'paper'){
        message.textContent = "You win! Scissors beat paper.";
        winner = "human";
    }
    else if(humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'scissors'){
        message.textContent = "It's a tie!";
        winner = "no winner";
    }
    else if(humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'rock'){
        message.textContent = "You lose! Rock beats Scissors.";
        winner = "comp";
    }

    if (winner === "human") {
        humanScore++;
    }
    else if (winner === "comp") {
        computerScore++;
    }
    points.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    if (humanScore === 5 || computerScore === 5){
        message.textContent = humanScore >= computerScore ? "You won the game!" : "Computer won the game!";
        humanScore = 0;
        computerScore = 0;
    }
    return winner;
}

