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



