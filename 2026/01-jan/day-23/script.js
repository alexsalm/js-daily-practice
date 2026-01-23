const heading = document.querySelector("h1");
const buttons = document.querySelectorAll("button");
const score = document.querySelector("div");
const span1 = document.createElement("span");

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

function addToScore(humanAnswer, computerAnswer) {
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
    
    if (humanAnswer == "rock" && computerAnswer == "rock") {
        // It's a tie
    } else if (humanAnswer == "rock" && computerAnswer == "paper") {
        computerScore++;
    } else if (humanAnswer == "rock" && computerAnswer == "scissors") {
        humanScore++;
    } else if (humanAnswer == "paper" && computerAnswer == "rock") {
        humanScore++;
    } else if (humanAnswer == "paper" && computerAnswer == "paper") {
        // It's a tie
    } else if (humanAnswer == "paper" && computerAnswer == "scissors") {
        computerScore++;
    } else if (humanAnswer == "scissors" && computerAnswer == "rock") {
        computerScore++;
    } else if (humanAnswer == "scissors" && computerAnswer == "paper") {
        humanScore++;
    } else if (humanAnswer == "scissors" && computerAnswer == "scissors") {
        // It's a tie
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
        let clickedButton;
    
        if (button.id == "one") {
            clickedButton = "rock";
        } else if (button.id == "two") {
            clickedButton = "paper";
        } else if (button.id == "three") {
            clickedButton = "scissors";
        }
        let getComputerAnswer = computerChoice();
        console.log(`The computer chose ${getComputerAnswer}`);
        addToScore(clickedButton, getComputerAnswer);
    });
});