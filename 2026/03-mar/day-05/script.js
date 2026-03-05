class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says "${line}"`);
  }
}

let wiseRabbit = new Rabbit("wise");
console.log(wiseRabbit.speak("study history"));
