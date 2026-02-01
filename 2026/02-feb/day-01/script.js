const city1 = {
    name: "Amsterdam",
    population: 1.2,
    country: "The Netherlands",
    introduceCity: function() {
        console.log(`My favorite city so far is ${this.name}. It has a population` + 
        ` of roughly ${this.population} million and is located in ${this.country}.`);
    }
}

const city2 = {
    name: "Tokyo",
    population: 14,
    country: "Japan",
    introduceCity() {
        console.log(`My second favorite city is ${this.name}. It has a population` +
        ` of about ${this.population} million in the city proper.`);
    }   
}

const person = {
    name: ["Alex", "Lopez"],
    age: 32,
};

function logProperty(propertyName) {
    console.log(person[propertyName]);
}

logProperty("name");
logProperty("age");