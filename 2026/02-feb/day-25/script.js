function flatten(array)  {
    let flattenedArray = []
    let arrayFlattener  = array.reduce((sum, current) => sum + current, 0);
    flattenedArray.push(arrayFlattener);

    return flattenedArray;
}

let arrayOfArrays = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
console.log(arrayOfArrays);
console.log(flatten(arrayOfArrays));