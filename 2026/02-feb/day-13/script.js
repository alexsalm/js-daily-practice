function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ??
                   find(current * 3, `(${history} * 3)`);  
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));

let number = 2;
if (number % 2 == 0) console.log("This number is even");

function isEven(wholeNumber) {
    if (wholeNumber == 0) return true;
    else if (wholeNumber == 1) return false;
    else if (wholeNumber < 0) return isEven(-wholeNumber);
    else return isEven(wholeNumber - 2);
}

console.log(isEven(75));
console.log(isEven(50));
console.log(isEven(-1));