const heading = document.querySelector("h1");
const button = document.querySelector("button");
const score = document.querySelector("div");
const span1 = document.createElement("span");
const span2 = document.createElement("span");


let humanScore = 0;
let computerScore = 0;

function addToScore(a, b) {
    const runningScore = function(currentHumanScore, currentComputerScore) {
        span1.textContent = (`Human score: ${currentHumanScore}`);
        span2.textContent = (`Computer score: ${currentComputerScore}`);
        score.appendChild(span1, span2);
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

button.addEventListener('click', function(event) {
    event.preventDefault();
    addToScore(3, 1);
})