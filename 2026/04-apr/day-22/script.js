const myLEDColors = [
    "red", 
    "blue", 
    "amber", 
    "green", 
    "purple"
];

const generateColor = document.querySelector(".generateColor");

generateColor.addEventListener("click", function() {
    const randomColor = myLEDColors[(Math.floor(Math.random() * (myLEDColors.length)))];
    const textOnScreen = document.querySelector("#textOnScreen");
    textOnScreen.textContent = randomColor;
    console.log(`Random color: ${randomColor}`);

    let stringifiedColor = JSON.stringify(randomColor);
    console.log(`The color ${stringifiedColor} is now a JSON encoded string.`);
    console.log(`The same stringified color has now been parsed: ${JSON.parse(stringifiedColor)}`);

    let colorArray = [];
    let nameOfValue = "color-value";
    colorArray.push(stringifiedColor);
    localStorage.setItem(nameOfValue, colorArray);
});

const favFruits = [
    "blueberries",
    "strawberries",
    "bananas",
    "apples",
    "dates"
];

const generateFruit = document.querySelector(".generateFruit");

generateFruit.addEventListener("click", function() {
    const randomFruit = favFruits[(Math.floor(Math.random() * (favFruits.length)))];
    const fruitText = document.querySelector("#fruitText");
    fruitText.textContent = randomFruit;

    let stringifiedFruit = JSON.stringify(randomFruit);

    let fruitArray = [];
    let nameOfFruit = "fruit-value";
    fruitArray.push(stringifiedFruit);
    localStorage.setItem(nameOfFruit, fruitArray);
});