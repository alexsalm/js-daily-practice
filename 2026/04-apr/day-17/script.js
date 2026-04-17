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

    let myColor = "myColor";
    localStorage.setItem(myColor, stringifiedColor);
});
