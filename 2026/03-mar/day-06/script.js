class Rabbit {
    constructor(type, age) {
        this.type = type;
        this.age = age;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says "${line}".`);
    }

    printAge() {
        console.log(`The ${this.type} rabbit is ${this.age} years old`);
    }
}

let wiseRabbit = new Rabbit("wise", 99);
console.log(wiseRabbit.speak("stay optimistic"));
console.log(wiseRabbit.printAge());

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
console.log(Object.getPrototypeOf(wiseRabbit) == Rabbit.prototype);