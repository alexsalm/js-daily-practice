const city = {
    name: "Amsterdam",
    population: 1.2,
    isAwesome: true,
};

// function logProperty(propertyName) {
//     console.log(city[propertyName]);
// }

// logProperty("name");
// logProperty("population");
// logProperty("isAwesome");

city.population = 14;
city["name"] = "Tokyo";

const person = {
    name: "Alex",
    age: 32,
};

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;