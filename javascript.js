// create function getComputerChoice which randomly chooses Rock, Paper, or Scissors
function getComputerChoice() {
// create variable num will produce three distinct options (1, 2, and 3)
    let num = Math.floor(Math.random() * 3 + 1);
// assign Rock, Paper, and Scissors to each option
    if (num === 1) {
        return 'Rock'
    } if (num === 2) {
        return 'Paper'
    } else {return 'Scissors'}
}

// declare variables for starting scores and round number
    let playerScore = 0, computerScore = 0, roundNumber = 0;
// log starting scores of 0 in the console
    console.log(`Score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
// create function game() which allows you to play 5 rounds
function game() {  
    for (let i = 0; i <= 4; i++) {
        // create function playRound with parameters playerSelection and computerSelection (default = the function getComputerChoice)
        function playRound(playerSelection, computerSelection = getComputerChoice()) {
            // prompt the user for their input and assign it to variable playerSelection
            playerSelection = window.prompt("Choose your weapon! Rock? Paper? Or Scissors?", "");
            // make playerSelection case insensitive and store as variable playerSelectionSentCase
            restlowercase = playerSelection.slice(1).toLowerCase();
            firstcapital = playerSelection.charAt(0).toUpperCase();
            playerSelectionSentCase = firstcapital + restlowercase;
        
            // create an appropriate return message for all 9 possible cases of selections and increment the winner's score
            if (playerSelectionSentCase === 'Rock' && computerSelection === 'Paper') {
                computerScore++; 
                return 'You Lose! Paper beats Rock';
            } else if (playerSelectionSentCase === 'Rock' && computerSelection === 'Scissors') {
                playerScore++; 
                return 'You Win! Rock beats Scissors';       
            } else if (playerSelectionSentCase === 'Paper' && computerSelection === 'Rock') {
                playerScore++;
                return 'You Win! Paper beats Rock';       
            } else if (playerSelectionSentCase === 'Paper' && computerSelection === 'Scissors') {
                computerScore++; 
                return 'You Lose! Scissors beats Paper';       
            } else if (playerSelectionSentCase === 'Scissors' && computerSelection === 'Rock') {
                computerScore++; 
                return 'You Lose! Rock beats Scissors';       
            } else if (playerSelectionSentCase === 'Scissors' && computerSelection === 'Paper') {
                playerScore++; 
                return 'You Win! Scissors beats Paper';       
            } else {
                return `It's a draw! You both chose ${playerSelectionSentCase}`
            }
        }
        // increment the round number
        roundNumber++;
        // run one round; log the round number, result message, and updated scores
        result = playRound();
        console.log(`\nRound #${roundNumber}`);        
        console.log(result);
        console.log(`Score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
    } 

    // after 5 rounds have finished, declare a winner with an appropriate message; reset the scores and round number
    if (playerScore < computerScore) {
        playerScore = 0, computerScore = 0, roundNumber = 0;
        return "You lose! Sucks to suck!"
    } else if (playerScore > computerScore) {
        playerScore = 0, computerScore = 0, roundNumber = 0;
        return "You win! Take it easy on us champ!"
    } else {
        playerScore = 0, computerScore = 0, roundNumber = 0;
        return "You tied?"}
}
    