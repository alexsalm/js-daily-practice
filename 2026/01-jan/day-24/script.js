let size = 16;
let grid = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        grid += "X";
    }
    grid += "\n";
}

console.log(grid);