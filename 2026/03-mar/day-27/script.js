class Food {
    constructor(type, glycemicIndex, category) {
        this.type = type;
        this.glycemicIndex = glycemicIndex;
        this.category = category;
    }
    printBloodGlucoseLevel() {
        console.log(`${this.type} have a glycemic index of ${this.glycemicIndex}.`);
    }
    printGICategory() {
        console.log(`${this.type} are in the ${this.category} glycemic category.`);
        if (this.category == "red") {
            console.log(`${this.type} have a high glycemic index. Choose these LEAST often.`);
        } else if (this.category = "yellow") {
            console.log(`${this.type} have a medium glycemic index. Choose these LESS often.`);
        } else {
            console.log(`${this.type} have a low glycemic index. Choose these MOST often.`);
        }
    }
}

let quickOats = new Food("Quick oats", 70, "yellow");
console.log(quickOats.printBloodGlucoseLevel());
console.log(quickOats.printGICategory());