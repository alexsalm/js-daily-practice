function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
    }
    return array;
}

console.table(range(1, 10));

function sum(arr) {
    let summedArray = arr.reduce((sum, current) => sum + current, 0);
    return summedArray;
}

console.log(sum(range(1,10)));