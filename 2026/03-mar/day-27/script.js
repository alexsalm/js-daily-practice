class Food {
    constructor(type, glycemicIndex, category) {
        this.type = type;
        this.glycemicIndex = glycemicIndex;
        this.category = category;
    }
    printBloodGlucoseLevel() {
        console.log(`${this.type} has/have a glycemic index of ${this.glycemicIndex}.`);
    }
    printGICategory() {
        console.log(`${this.type} is/are in the ${this.category} glycemic category.`);
        if (this.category == "red") {
            console.log(`${this.type} has/have a high glycemic index. Choose this/these LEAST often.`);
        } else if (this.category = "yellow") {
            console.log(`${this.type} has/have a medium glycemic index. Choose this/these LESS often.`);
        } else {
            console.log(`${this.type} has/have a low glycemic index. Choose this/these MOST often.`);
        }
    }
}

let quickOats = new Food("Quick oats", 70, "yellow");
console.log(quickOats.printBloodGlucoseLevel());
console.log(quickOats.printGICategory());

let hummus = new Food("Hummus", 55, "green");
console.log(hummus.printBloodGlucoseLevel());
console.log(hummus.printGICategory());