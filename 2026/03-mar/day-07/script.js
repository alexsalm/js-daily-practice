class Rabbit {
    constructor(type, age, countryOfOrigin) {
        this.type = type;
        this.age = age;
        this.countryOfOrigin = countryOfOrigin;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says "${line}".`);
    }
    print(birthPlace) {
        console.log(`The ${this.type} rabbit was born in ${this.countryOfOrigin}.`);
    }
}

let wiseRabbit = new Rabbit("wise", 99, "Japan");
console.log(wiseRabbit.speak("stay optimistic"));
console.log(wiseRabbit.print());