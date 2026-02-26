function flatten(array) {
    let flattenedArray = [];
    for (let item of array) {
        flattenedArray = flattenedArray.concat(item);
    }
    return flattenedArray;
}

let arrayOfArrays = [[4, 5, 6], [1, 2, 3], [7, 8, 9]];

console.log(arrayOfArrays);
console.log(flatten(arrayOfArrays));

