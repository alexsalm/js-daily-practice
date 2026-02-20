function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    } else {
        for (let i = start; i >= end; i+= step) {
            array.push(i);
        }
    }
    return array;
}

console.table(range(-10, 1));

function sum(arr) {
    let arrayToSum = arr;
    let result = arrayToSum.reduce((sum, current) => sum + current, 0);

    return result;
}

console.log(sum(range(-10,1)));