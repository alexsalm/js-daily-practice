class KnownRule {
    getRule() {
        return "Things that are equal to another thing are equal to each other";
    }
}

class SecretiveObject {
    #getSecret() {
        return "I ate all the dates";
    }
    interrogate(){
        let shallISayIt = this.#getSecret();
        return "never";
    }
}

class RandomSource {
    #max;
    constructor(max) {
        this.#max = max;
    }
    getNumber() {
        return Math.floor(Math.random() * this.#max);
    }
}

let getRandomNumber = new RandomSource(21);
console.log(getRandomNumber.getNumber());
console.log(getRandomNumber.getNumber());
console.log(getRandomNumber.getNumber());

let secret1 = new SecretiveObject();
console.log(secret1.interrogate());

let rule1 = new KnownRule;
console.log(rule1.getRule());