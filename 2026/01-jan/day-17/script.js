const heading = document.querySelector("h1");

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
        console.log("The winner is human!");
        return;
    } else if (computerScore == 5) {
        console.log("The winner is computer!");
        return;
    }
}

const horn = () => {
    return "Toot";
};

heading.textContent = horn();

addToScore(5, 1);
addToScore(1, 1);
addToScore(0, 4);
addToScore(1, 2);
addToScore(7, 6);
addToScore(4, 4);
addToScore(9, 3);
addToScore(3, 1);
addToScore(5, 2);