class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  }
}

let newRabbit = new Rabbit("let's build");

console.log(newRabbit);
