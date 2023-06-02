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
function playRound(playerSelection, computerSelection) {
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


let weapon;
let result;

// create query selectors targeting the divs to contain previous choices
const computerChoiceImage = document.querySelector('.computerChoiceImage');
const playerChoiceImage = document.querySelector('.playerChoiceImage');

// define functions that will insert the correct images based on player and computer choices
function addPlayerChoice(weapon2) {
    if (weapon2 == 'Rock') {
        playerChoiceImage.src = "https://t4.ftcdn.net/jpg/00/83/38/71/360_F_83387150_FDI6pLrHG880an3NjgsU2B3iqTVtGMIL.jpg";
    } else if (weapon2 == 'Paper') {
        playerChoiceImage.src = "https://clipart-library.com/images/6cp5obEgi.jpg";
    } else if (weapon2 == 'Scissors') {
        playerChoiceImage.src = "https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-cute-red-scissors-clipart-png-image_5720189.png";
    }
}

function addComputerChoice(computerSelection) {
    if (computerSelection == 'Rock') {
        computerChoiceImage.src = "https://t4.ftcdn.net/jpg/00/83/38/71/360_F_83387150_FDI6pLrHG880an3NjgsU2B3iqTVtGMIL.jpg";
    } else if (computerSelection == 'Paper') {
        computerChoiceImage.src = "https://clipart-library.com/images/6cp5obEgi.jpg";
    } else if (computerSelection == 'Scissors') {
        computerChoiceImage.src = "https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-cute-red-scissors-clipart-png-image_5720189.png";
    }
}

// define function (and associated variables) to run a full round and update live round number and score
function runRound(weapon) {
    computerSelection = getComputerChoice();
    result = playRound(weapon, computerSelection);

    addPlayerChoice(weapon);
    addComputerChoice(computerSelection);

    if (playerScore < 5 && computerScore < 5) {
        round.textContent = `Next Round: Round ${roundNumber}`;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
        roundWinner.textContent = result;
    } else if (round.textContent.includes('Game Over')) {
        location.reload();
    } else {
        round.textContent = 'Game Over';
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
        roundWinner.textContent = result;
        if (computerScore > playerScore) {
            round.textContent += ': You lose!';
        } else if (playerScore > computerScore) {
            round.textContent += ': You win!';
        } else {round.textContent += ': You tied!'}
    } 
}


// add event listeners to listen for a click on each button and trigger 
rock.addEventListener('click', () => runRound('Rock'));
paper.addEventListener('click', () => runRound('Paper'));
scissors.addEventListener('click', () => runRound('Scissors'));