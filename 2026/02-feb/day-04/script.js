function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
}

const alex = new Person("Alex");
alex.introduceSelf();



