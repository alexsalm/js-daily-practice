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

Rabbit.prototype.teeth = "small";
console.log(`rabbit1 has ${rabbit1.teeth} teeth`);

Rabbit.prototype.teeth = "long, sharp, and bloody";
console.log(`rabbit1 has ${rabbit1.teeth} teeth`);