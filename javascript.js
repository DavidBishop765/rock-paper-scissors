// define function to randomly generate the computer's choice
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 + 1);
    if (num === 1) {
        return 'Rock'
    } if (num === 2) {
        return 'Paper'
    } else {return 'Scissors'}
}

// declare variables for use in function for single round
let playerScore = 0, 
    computerScore = 0, 
    roundNumber = 1,
    computerSelection,
    playerSelection,
    restlowercase,
    firstcapital,
    playerSelectionSentCase;

// define function to player a single round and return a result
function playRound(playerSelection, computerSelection = getComputerChoice()) {
    restlowercase = playerSelection.slice(1).toLowerCase();
    firstcapital = playerSelection.charAt(0).toUpperCase();
    playerSelectionSentCase = firstcapital + restlowercase;
    
    if (playerSelectionSentCase === 'Rock' && computerSelection === 'Paper') {
        computerScore++; 
        roundNumber++;
        return `You Lose! Paper beats Rock`;
    } else if (playerSelectionSentCase === 'Rock' && computerSelection === 'Scissors') {
        playerScore++; roundNumber++;
        return `You Win! Rock beats Scissors`;       
    } else if (playerSelectionSentCase === 'Paper' && computerSelection === 'Rock') {
        playerScore++; roundNumber++;
        return `You Win! Paper beats Rock`;       
    } else if (playerSelectionSentCase === 'Paper' && computerSelection === 'Scissors') {
        computerScore++; roundNumber++;
        return `You Lose! Scissors beats Paper`;       
    } else if (playerSelectionSentCase === 'Scissors' && computerSelection === 'Rock') {
        computerScore++; roundNumber++;
        return `You Lose! Rock beats Scissors`;       
    } else if (playerSelectionSentCase === 'Scissors' && computerSelection === 'Paper') {
        playerScore++; roundNumber++;
        return `You Win! Scissors beats Paper`;       
    } else {
        roundNumber++;
        return `It's a draw! You both chose ${playerSelectionSentCase}`;        
    } 
}

// declare variables targeting each element of the HTML
const round = document.querySelector('.round');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const roundWinner = document.querySelector('.para2');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');

// add text to display live round number and scores
round.textContent = `Next Round: Round ${roundNumber}`;
player.textContent = `Player Score: ${playerScore}`;
computer.textContent = `Computer Score: ${computerScore}`;

// define function (and associated variables) to run a full round and update live round number and score
let weapon;
let result;
function runRound(weapon) {
    result = playRound(weapon, computerSelection);
    roundWinner.textContent = result;

    if (playerScore < 5 && computerScore < 5) {
        round.textContent = `Next Round: Round ${roundNumber}`;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    } else if (playerScore == 5 || computerScore == 5) {
        if (round.textContent.includes('Game Over')) {
            location.reload();
        } else {
            round.textContent = `Game Over`;
            if (computerScore > playerScore) {
                round.textContent += ': You lose!';
            } else if (playerScore > computerScore) {
                round.textContent += ': You win!';
            } else {round.textContent += ': You tied!'
        }
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
        } 
    }
}

// add event listeners to listen for a click on each button and trigger 
rock.addEventListener('click', () => runRound('Rock'));
paper.addEventListener('click', () => runRound('Paper'));
scissors.addEventListener('click', () => runRound('Scissors'));