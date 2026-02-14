function isEven(number) {
    if (number == 0) return true;
    else if (number == 1) return false;
    else if (number < 0) return isEven(-number); 
    else return isEven(number - 2);
}

console.log(isEven(75));
console.log(isEven(60));
console.log(isEven(-1));

function makePositive(numero) {
    return -numero;
}

console.log(makePositive(-2));

console.log(isEven(10));

