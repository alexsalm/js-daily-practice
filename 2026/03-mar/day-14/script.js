class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says "${line}"`);
    }
}

let wiseRabbit = new Rabbit("wise");
console.log(wiseRabbit.speak("You can do anything you set your mind to."));

let array1 = [1, 2, 3];

let array2 = [1, 2, -1];

function sumIsZero(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; i < array.length; j++) {
            if (array[i] + array[j] == 0) {
                return `${array[i]} + ${array[j]} is equal to 0`;
            }
        }
        return false;
    }
}

console.log(sumIsZero(array2));
console.log(sumIsZero(array1));
