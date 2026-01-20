const heading = document.querySelector("h1");
const button = document.querySelector("button");
const score = document.querySelector("div");
const span = document.createElement("span");

let humanScore = 0;
let computerScore = 0;

function addToScore(a, b) {
    if (a > b) {
        humanScore++;
    } else if (a < b) {
        computerScore++;
    }

    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (humanScore == 5) {
        heading.textContent = "The winner is human!";
        return;
    } else if (computerScore == 5) {
        heading.textContent = "The winner is computer!";
        return;
    }
}

button.addEventListener('click', function(event) {
    event.preventDefault();
    let currentScore = addToScore(3, 1);
    span.textContent = currentScore;
    score.appendChild(span);
})