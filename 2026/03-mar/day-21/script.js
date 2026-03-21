class Food {
    constructor(type, glycemicIndex, category) {
        this.type = type;
        this.glycemicIndex = glycemicIndex;
        this.category = category;
    }
    printBloodGlucoseLevel() {
        console.log(`${this.type} have a glycemic index of ${this.glycemicIndex}`);
    }
    printGICategory() {
        console.log(`${this.type} have a glycemic index category of ${this.category}`);
        if (this.category == "red") {
            console.log(`This food has a high glycemic index`);
        } else if (this.category == "yellow") {
            console.log(`This food has a medium glycemic index`);
        } else {
            console.log(`This food has a low glycemic index`);
        }
    }
}

let instantOats = new Food("instant oats", 70, "red");
console.log(instantOats.printBloodGlucoseLevel());
console.log(instantOats.printGICategory());