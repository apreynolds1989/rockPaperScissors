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