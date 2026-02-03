const person1 = {
    name: "Alex",
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`);
    },
};

const person2 = {
    name: "Deepti",
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`);
    },
};

const city1 = {
    population: 14,
    printPopulation() {
        console.log(`Tokyo has a population of ${this.population} million.`);
    },
};

