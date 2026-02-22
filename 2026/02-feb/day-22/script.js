function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
    if (step > 0) {
        for (let i = 0; i <= end; i += step) {
            array.push(i);
        }
    } else {
        for (let i = 0; i >= end; i += step) {
            array.push(i);
        }
    }
    return array;
}

function sum(array) {
    let result = array.reduce((sum, current) => sum + current, 0);
    return result;
}

console.log(sum(range(1, 10)));
