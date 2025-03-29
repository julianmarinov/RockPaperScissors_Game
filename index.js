/*

In this project, I am going to practice conditionals in JavaScript, so I can hone my skills and feel confident taking them to the real world.

Rock paper scissors is a classic two player game.
Each player chooses either rock, paper, or scissors.
The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:
    - Rock destroys scissors.
    - Scissors cut paper.
    - Paper covers rock.
    - If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:
    - Get the user’s choice.
    - Get the computer’s choice.
    - Compare the two choices and determine a winner.
    - Start the program and display the results.

 */

const getUserChoice = (userInput) => {
// adding input validation to ensure the user input is not empty or null before processing
    if (!userInput) {
        console.log('Input cannot be empty. Please enter rock, paper, or scissors.');
        return;
    }
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Incorrect user input. Choice is neither rock, nor paper, nor scissors! Try again!');
    }
};

// Generate a random computer choice
const getComputerChoice = () => {
    let choice = '';
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 1) {
        choice = 'rock';
    } else if (randomNumber === 2) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    return choice;
}

// Determining who the winner is, based on the results. However, if the userChoice === 'bomb' it wins no matter what
function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') { // This is the secret cheat code implemented
        return ('You destroyed the computer!!!');
    }
    if (userChoice === computerChoice) {
        return ('The game was a TIE! Try again.');
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return ('The computer has paper, so it wins!');
        } else {
            return ('The computer has scissors, so you win!');
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return ('The computer has scissors, so it wins!');
        } else {
            return ('The computer has rock, so you win!');
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return ('The computer has rock, so it wins!');
        } else {
            return ('The computer has paper, so you win!');
        }
    }
}

function playGame() {
    let userChoice = getUserChoice('paper'); // Type here the user choice
    let computerChoice = getComputerChoice();
    console.log(`You chose ${userChoice} while the computer chose ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();