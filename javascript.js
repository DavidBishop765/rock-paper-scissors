function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 + 1);
    if (num === 1) {
        return 'Rock'
    } if (num === 2) {
        return 'Paper'
    } else {return 'Scissors'}
}
let computerSelection;
let playerScore = 0, computerScore = 0, roundNumber = 1;
const round = document.querySelector('p');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const computerChoice = document.querySelector('.computerChoice');
const playerChoice = document.querySelector('playerChoice');

round.textContent = `Next Round: Round ${roundNumber}`;
player.textContent = `Player Score: ${playerScore}`;
computer.textContent = `Computer Score: ${computerScore}`;



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

const resultsLine = document.querySelector('para1');
const winner = document.querySelector('.winner');
const roundWinner = document.querySelector('.para2');
let weapon;
let result;

function runRound(weapon) {
    result = playRound(weapon, computerSelection);
    roundWinner.textContent = result;

    if (roundNumber <= 5) {
        round.textContent = `Next Round: Round ${roundNumber}`;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    } else if (roundNumber == 6) {
        round.textContent = `Game Over`;
        if (computerScore > playerScore) {
            round.textContent += ': You lose!';
        } else if (playerScore > computerScore) {
            round.textContent += ': You win!';
        } else {round.textContent += ': You tied!'};
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`; 
    } else {location.reload()}
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => runRound('Rock'));
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => runRound('Paper'));
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => runRound('Scissors'));