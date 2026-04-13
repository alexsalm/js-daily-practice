

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
    console.log(randomColor);
});