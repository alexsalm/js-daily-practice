const addCountryButton = document.querySelector(".add-country");
let countryArray = []; // starts off empty

addCountryButton.addEventListener("click", function() {	
	let textInput = document.getElementById('userInput').value;
	const textOnScreen = document.querySelector("#textOnScreen");
	textOnScreen.textContent = textInput;

	let stringifiedCountry = JSON.stringify(textInput);
	let nameOfCountry = "country-value";
	countryArray.push(stringifiedCountry);
	localStorage.setItem(nameOfCountry, countryArray);
});

addCountryButton.addEventListener("keydown", (event) => {
	let textInput = document.getElementById('userInput').value;
	const textOnScreen = document.querySelector("#textOnScreen");
	textOnScreen.textContent = textInput;

	let stringifiedCountry = JSON.stringify(textInput);
	let nameOfCountry = "country-value";
	countryArray.push(stringifiedCountry);
	localStorage.setItem(nameOfCountry, countryArray);
});