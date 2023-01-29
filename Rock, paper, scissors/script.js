const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice, computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    switch (randomNumber) {
        case 1:
            computerChoice = 'rock'
            break;
        case 2:
            computerChoice = 'paper'
            break;
        case 3:
            computerChoice = 'scissors'
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult() {
    if (computerChoice === userChoice) {
        result = "Draw";
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "Win";
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "Lose";
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "Win";
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "Lose";
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "Win";
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "Lose";
    }
    resultDisplay.innerHTML = result;

    let color;
    switch (result) {
        case "Lose":
            color = "#EE4B2B";
            break;
        case "Win":
            color = "#228B22";
            break;
        case "Draw":
            color = "grey";
            break;
    }
    document.getElementById("result").style.color = color;
}