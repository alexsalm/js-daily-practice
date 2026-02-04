function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
}

// the new operator creates empty object and executes constructor, 
// returns newly created object
// alex binding holds reference to object instance itself
// references are pointers to values stored in variables
const alex = new Person("Alex");
alex.introduceSelf();

function City(name) {
    this.name = name;
    this.introduceCity = function () {
        console.log(`My favorite city is ${this.name}.`);
    };
}

const favoriteCity = new City("Amsterdam");
favoriteCity.introduceCity();

function Car(year, make, model) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.introduceCar = function () {
        console.log(`I drive a ${this.year} ${this.make} ${this.model}.`);
    };
}

const dailyDriver = new Car(2003, "Toyota", "Camry");
dailyDriver.introduceCar();

