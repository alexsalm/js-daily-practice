const heading = document.querySelector("h1");
const buttons = document.querySelectorAll("button");
const score = document.querySelector("div");
const span1 = document.createElement("span");

const humanChoice = function() {
    let humanInput = prompt("Enter your shape: ");
    if (humanInput.toLowerCase() === "rock") {
        return "rock";
    } else if (humanInput.toLowerCase() === "paper") {
        return "paper";
    } else if (humanInput.toLowerCase() === "scissors") {
        return "scissors";
    }
};

const computerChoice = function() {
    let choice = (Math.floor((Math.random() * 3)));

    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

let humanScore = 0;
let computerScore = 0;

function addToScore(a, b) {
    const runningScore = function(currentHumanScore, currentComputerScore) {
        span1.textContent = (`Human score: ${currentHumanScore} Computer score: ${currentComputerScore}`);
        score.appendChild(span1);
    };
    
    const displayWinner = function(humanScore, computerScore) {
        if (humanScore > computerScore) {
            heading.textContent = "The winner is human!";
        }
        else if (humanScore < computerScore) {
            heading.textContent = "The winner is computer";
        } 
        else {
            heading.textContent = "It's a tie!";
        }
    };
    
    if (a > b) {
        humanScore++;
    } else if (a < b) {
        computerScore++;
    }

    runningScore(humanScore, computerScore);
    
    if (humanScore == 5) {
        displayWinner(humanScore, computerScore);
        return;
    } else if (computerScore == 5) {
        displayWinner(humanScore, computerScore);
        return;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        addToScore(humanChoice, computerChoice);
    });
});