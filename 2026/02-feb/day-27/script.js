let arrayOfArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function flattenArray(array) {
    let newArray = [];
    for (let item of array) {
        newArray = newArray.concat(item);
    }
    return newArray;
}

console.log(flattenArray(arrayOfArrays));