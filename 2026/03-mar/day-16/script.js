class Diet {
    constructor(type, person) {
        this.type = type;
        this.person = person;
    }
    introduce() {
        console.log(`${this.person} follows the ${this.type} diet`);
    }
}

let diet1 = new Diet("Mediterranean", "Alex");
console.log(diet1.introduce());

let diet2 = new Diet("Paleo", "Joe");
console.log(diet2.introduce());