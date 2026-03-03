class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  }
}

let newRabbit = new Rabbit("blue");

console.log(newRabbit);
console.log(newRabbit.speak("let's build"));
