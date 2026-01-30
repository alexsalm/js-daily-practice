const container = document.querySelector(".container");
const rowContainer = document.createElement("div");

// let size = 16;
// let grid = "";


// The nested loop is useful for organization/documentation,
// but it doesn't control the wrap behavior, flex-wrap is dynamic,
// it will wrap based on container width alone, not loop structure

// However, IMPORTANT: it creates the right number of items
// creates 256 divs (16 x 16), nested structure achieves that
function createGrid(size)   {
    let grid = "";
    let maxWidth = size;
    rowContainer.classList.add("row-container");
    
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < maxWidth; x++) {
            grid += "X";
            const div = document.createElement("div");
            div.classList.add("grid-square");
            rowContainer.appendChild(div);

            div.addEventListener('mouseover', (event) => {
                event.preventDefault();
                div.style.backgroundColor = "red";
            });
        }
        grid += "\n";
        container.appendChild(rowContainer);
        // go to new line here
    }

    console.log(grid);
}

function removeGrid() {
    container.replaceChildren();
}

createGrid(16);

const button = document.querySelector("button");

button.addEventListener("click", function(event) {
    event.preventDefault();
    let squaresPerSide = prompt("Enter number of quares per side for a new grid");
    removeGrid();
    createGrid(squaresPerSide);
});