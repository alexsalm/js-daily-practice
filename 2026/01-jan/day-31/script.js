const person = {
    name: ["Alex", "Lopez"],
    age: 32,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};

const country = {
    name: "Netherlands",
    capital: "Amsterdam", 
    continent: "Europe",
    language: "Dutch",
    population: 18_000_000,
    introduceCountry: function () {
        console.log(`The ${this.name} is a country of roughly ${this.population} people. It is located in ${this.continent}. Its capital city is ${this.capital}`);
    }
};


