class Person {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} says "${line}"`);
    }
}

let person1 = new Person("junior developer");
console.log(person1.speak("let's go solve some problems!"));
