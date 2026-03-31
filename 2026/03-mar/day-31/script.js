class Food {
    constructor(type, glycemicIndex, category) {
        this.type = type;
        this.glycemicIndex = glycemicIndex;
        this.category = category;
    }
    get foodType() {
        return this.type;
    }
    get bloodGlucoseLevel() {
        return this.glycemicIndex;
    }
    get giCategory() {
        return this.category;
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

let quickOats = new Food("Quick oats", 62.5, "yellow");
// console.log(quickOats.printBloodGlucoseLevel());
// console.log(quickOats.printGICategory());

let hummus = new Food("Hummus", 55, "green");
// console.log(hummus.printBloodGlucoseLevel());
// console.log(hummus.printGICategory());

let quinoa = new Food("Quinoa", 55, "green" );

let wheatBread = new Food("Whole Grain Whole Wheat Bread", 62.5, "yellow");

const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content-heading"); 
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const quickOatsContent = document.createElement("div");
quickOatsContent.classList.add("content");
quickOatsContent.textContent = `${quickOats.type} has/have a glycemic index of ${quickOats.glycemicIndex}.`;

const hummusContent = document.createElement("div");
hummusContent.classList.add("content");
hummusContent.textContent = `${hummus.type} has/have a glycemic index of ${hummus.glycemicIndex}.`;

const quinoaContent = document.createElement("div");
quinoaContent.classList.add("content");
quinoaContent.textContent = `${quinoa.type} has/have a glycemic index of ${quinoa.glycemicIndex}`;

const wheatBreadContent = document.createElement("div");
wheatBreadContent.classList.add("content");
wheatBreadContent.textContent = `${wheatBread.type} has/have a glycemic index of ${wheatBread.glycemicIndex}`;

container.appendChild(quickOatsContent);
container.appendChild(hummusContent);
container.appendChild(quinoaContent);
container.appendChild(wheatBreadContent);
