function multiply(...numbers) {
    let result = 1;
    for (let number of numbers) {
        result = result * (number);
    }
    return result;
}

console.log(multiply(3, 2));