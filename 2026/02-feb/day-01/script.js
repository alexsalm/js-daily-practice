const city = {
    name: "Amsterdam",
    population: 1.2,
    country: "The Netherlands",
    introduceCity: function() {
        console.log(`My favorite city so far is ${this.name}. It has a population of roughly ${this.population} million and is located in ${this.country}.`);
    }
}