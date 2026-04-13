const ledColor = JSON.parse(localStorage.getItem("ledColor")) || [];

function saveToLocalStorage() {
    localStorage.setItem("ledColor", JSON.stringify(ledColor));
}

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