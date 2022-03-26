// Create Function to generate Rock Paper or Scissors for computer

let computerChoice = '';

function generateChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
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

// Take input from player and check to ensure it matches either rock, paper or scissors
let playerChoice = '';
let takeInput = () => {
    playerChoice = prompt('Choose Rock, Paper or Scissors: ').toLowerCase();
    if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
        takeInput();
    };
};

// Compare both choices and decalre the winner
let playerScore = 0;
let computerScore = 0;
let ties = 0;

function compareChoices(choice1, choice2) {
    if (choice1 === choice2) {
        ties++;
        alert(`Tie! Current Record (W-L-T): ${playerScore}-${computerScore}-${ties}`);
        console.log('Tie!');
    } else if (choice1 === 'rock') {
        if (choice2 === 'paper') {
            computerScore++;
            alert(`Computer Wins! Current Record (W-L-T): ${playerScore}-${computerScore}-${ties}`);
            console.log('Computer Wins!');
        } else {
            playerScore++;
            alert(`You Win! Current Record (W-L-T): ${playerScore}-${computerScore}-${ties}`);
            console.log('You Win!');
        }
    } else if (choice1 === 'paper') {
        if (choice2 === 'scissors') {
            computerScore++;
            alert(`Computer Wins! Current Record (W-L-T): ${playerScore}-${computerScore}-${ties}`);
            console.log('Computer Wins!');
        } else {
            playerScore++;
            alert(`You Win! Current Record (W-L-T): ${playerScore}-${computerScore}-${ties}`);
            console.log('You Win!');
        }
    } else {
        if (choice2 === 'rock') {
            computerScore++;
            alert(`Computer Wins! Current Record (W-L-T): ${playerScore}-${computerScore}-${ties}`);
            console.log('Computer Wins!');
        } else {
            playerScore++;
            alert(`You Win! Current Record (W-L-T): ${playerScore}-${computerScore}-${ties}`);
            console.log('You Win!');
        }
    };
};

// Create a function to run the game 5 times, showing the record after each round

function fiveRoundGame(func1, func2, func3) {
    for (let i = 0; i < 5; i++) {
        func1();
        func2();
        console.log(`Your Choice: ${playerChoice}`);
        console.log(`Computer's Choice: ${computerChoice}`);
        func3(playerChoice, computerChoice);
        console.log(`Current Record (W-L-T): ${playerScore}-${computerScore}-${ties}`);
    };
};

fiveRoundGame(generateChoice, takeInput, compareChoices);