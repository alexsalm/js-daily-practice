const container = document.querySelector(".container");

let size = 16;
let grid = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        grid += "X";
        const div = document.createElement("div");
        div.classList.add("grid-square");
        container.appendChild(div);
    }
    grid += "\n";
}

console.log(grid);