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

let newCustomerPain = new PainPoint("low coordination across teams");
console.log(newCustomerPain.getPainPoint());

let customerPain3 = new PainPoint("decision fatigue");
console.log(customerPain3.getPainPoint());

