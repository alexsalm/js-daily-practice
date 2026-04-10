const findTheOldest = function() {

};

const array = [1, 2, 3, 4];

const initialValue = 0;

// Syntax --> reduce(callBackFn, initialValue)
// On first call, accumulator is initialValue, otherwise it's array[0]
// On first call, currentValue is array[0] if initalValue is specified, otherwise it's array[1]
// 1) acc = 0, currentValue = 1, 2) acc = 1, currentValue = 2, 3) acc = 3, currentValue = 3, 4) acc = 6, currentValue = 4, 5) acc = 10
const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, 
initialValue,
);

console.log(sumWithInitial);