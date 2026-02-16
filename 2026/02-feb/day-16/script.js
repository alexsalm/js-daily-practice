function range(start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for (let i = 0; i <= end; i += step) { array.push(i) };
    } else {
        for (let i = 0; i >= end; i += step) { array.push(i) };
    }
    return array;
}

console.table(range(0, 21));