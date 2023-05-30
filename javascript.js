// create a function (getComputerChoice) that will randomly return either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 + 1);
    if (num === 1) {
        return 'Rock'
    } if (num ===2) {
        return 'Paper'
    } else {return 'Scissors'}
}

// Create function playGame() that plays a single round. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
    let a = 0, b = 0; a=a++;
    console.log(`Score:\nPlayer: ${a}\nComputer: ${b}`);
    function playRound(playerSelection, computerSelection = getComputerChoice()) {
        restlowercase = playerSelection.slice(1).toLowerCase();
        firstcapital = playerSelection.charAt(0).toUpperCase();
        playerSelectionSentCase = firstcapital + restlowercase;
        
        if (playerSelection === computerSelection) {
            console.log(`Score:\nPlayer: ${a}\nComputer: ${b}`);
            return `It's a draw! You both chose ${playerSelectionSentCase}`; 
        } else if (playerSelectionSentCase === 'Rock' && computerSelection === 'Paper') {
            b++;
            console.log(`Score:\nPlayer: ${a}\nComputer: ${b}`);
            return 'You Lose! Paper beats Rock';
        } else if (playerSelectionSentCase === 'Rock' && computerSelection === 'Scissors') {
            a++;
            console.log(`Score:\nPlayer: ${a}\nComputer: ${b}`);
            return 'You Win! Rock beats Scissors';       
        } else if (playerSelectionSentCase === 'Paper' && computerSelection === 'Rock') {
            a++;
            console.log(`Score:\nPlayer: ${a}\nComputer: ${b}`);
            return 'You Win! Paper beats Rock';       
        } else if (playerSelectionSentCase === 'Paper' && computerSelection === 'Scissors') {
            b++;
            console.log(`Score:\nPlayer: ${a}\nComputer: ${b}`);
            return 'You Lose! Scissors beats Paper';       
        } else if (playerSelectionSentCase === 'Scissors' && computerSelection === 'Rock') {
            b++;
            console.log(`Score:\nPlayer: ${a}\nComputer: ${b}`);
            return 'You Lose! Rock beats Scissors';       
        } else if (playerSelectionSentCase === 'Scissors' && computerSelection === 'Paper') {
            a++;
            console.log(`Score:\nPlayer: ${a}\nComputer: ${b}`);
            return 'You Win! Scissors beats Paper';       
        }
    }
    