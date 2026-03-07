class Rabbit {
    constructor(type, age) {
        this.type = type;
        this.age = age;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says "${line}".`);
    }
}

let wiseRabbit = new Rabbit("wise", 99);
console.log(wiseRabbit.speak("stay optimistic"));