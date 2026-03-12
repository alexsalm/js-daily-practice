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

class Company {
    constructor(teamSize) {
        this.teamSize = teamSize;
    }
    getTeamSize() {
        return `Your team has ${this.teamSize} people.`;
    }
}

let company1 = new Company(21);
console.log(company1.getTeamSize());
console.log(company1.teamSize);

// Override derived property teamSize
company1.teamSize = 42;
console.log(company1.teamSize);