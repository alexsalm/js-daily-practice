const city = {
    name: "Amsterdam",
    population: 1.2,
    isAwesome: true,
};

function logProperty(propertyName) {
    console.log(city[propertyName]);
}

logProperty("name");
logProperty("population");
logProperty("isAwesome");