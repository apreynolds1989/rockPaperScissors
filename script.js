// Create Function to generate Rock Paper or Scissors for computer

let computerChoice = '';

function generateChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);

    if (randomNum === 1) {
        computerChoice = 'rock';
        return computerChoice;
    } else if (randomNum === 2) {
        computerChoice = 'paper';
        return computerChoice;
    } else {
        computerChoice = 'scissors';
        return computerChoice;
    }

}

generateChoice();
console.log(computerChoice);

// Take input from player and check to ensure it matches either rock, paper or scissors
let playerChoice = '';
let takeInput = () => {
    playerChoice = prompt('Choose Rock, Paper or Scissors: ').toLowerCase();
    if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
        takeInput();
    };
};

takeInput();

console.log(playerChoice);

// Print Both Choices to Console

console.log(`Your Choice: ${playerChoice}`);
console.log(`Computer's Choice: ${computerChoice}`);

// Compare both choices and decalre the winner
let playerScore = 0;
let computerScore = 0;
let ties = 0;

function compareChoices(choice1, choice2) {
    if (choice1 === choice2) {
        ties++;
        console.log('Tie!');
    } else if (choice1 === 'rock') {
        if (choice2 === 'paper') {
            computerScore++;
            console.log('Computer Wins!');
        } else {
            playerScore++;
            console.log('You Win!');
        }
    } else if (choice1 === 'paper') {
        if (choice2 === 'scissors') {
            computerScore++;
            console.log('Computer Wins!');
        } else {
            playerScore++;
            console.log('You Win!');
        }
    } else {
        if (choice2 === 'rock') {
            computerScore++;
            console.log('Computer Wins!');
        } else {
            playerScore++;
            console.log('You Win!');
        }
    };
};

compareChoices(playerChoice, computerChoice);
console.log(`Current Record (W-L-T): ${playerScore}-${computerScore}-${ties}`);