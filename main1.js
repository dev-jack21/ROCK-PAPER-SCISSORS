const choices = ["rock", "paper", "scissors"];

const playerDisplay  = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "AI WINS!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "AI WINS!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "AI WINS!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice.toUpperCase()}`;
    computerDisplay.textContent = `Computer: ${computerChoice.toUpperCase()}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "yellowText");

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;

        case "AI WINS!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;

        case "IT'S A TIE!":
            resultDisplay.classList.add("yellowText");
            break;
    }
}
