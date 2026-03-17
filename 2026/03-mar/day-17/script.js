class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says "${line}"`);
    }
}

let rabbit1 = new Rabbit("wise");
console.log(rabbit1.speak("it pays to be patient"));