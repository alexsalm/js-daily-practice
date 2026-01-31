const container = document.querySelector(".container");

// let size = 16;
// let grid = "";


// The nested loop is useful for organization/documentation,
// but it doesn't control the wrap behavior, flex-wrap is dynamic,
// it will wrap based on container width alone, not loop structure

// However, IMPORTANT: it creates the right number of items
// creates 256 divs (16 x 16), nested structure achieves that
function createGrid(size)   {
    let grid = "";
    
    for (let y = 0; y < size; y++) {
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        
        for (let x = 0; x < size; x++) {
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
    let limitNumber = 100;
    let squaresPerSide = prompt("Enter number of quares per side for a new grid");
    if (squaresPerSide > limitNumber) {
        console.log("The limit is 100 x 100");
        removeGrid();
        createGrid(16);
    }
    else {
        removeGrid();
        createGrid(squaresPerSide);
    }
});