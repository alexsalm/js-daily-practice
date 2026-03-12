class RandomSource {
    #max;
    constructor(max) {
        this.#max = max;
    }
    getNumber() {
        return Math.floor(Math.random() * this.#max);
    }
}

let randomNumber = new RandomSource(10);

console.log(randomNumber.getNumber());
console.log(randomNumber.getNumber());

class PainPoint {
    #pain;
    constructor(pain) {
        this.#pain = pain;
    }
    getPainPoint() {
        return `Your pain point is ${this.#pain}.`;
    }
}

let customerPain = new PainPoint("high churn");
console.log(customerPain.getPainPoint());
console.log(customerPain.#this.pain);
