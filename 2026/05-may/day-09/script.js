const addCountryButton = document.querySelector(".add-country");
let countryArray = []; // starts off empty

document.addEventListener("DOMContentLoaded", function () {
	addCountryButton.addEventListener("click", function() {	
		let textInput = document.getElementById('userInput').value;
		const textOnScreen = document.querySelector("#textOnScreen");
		textOnScreen.textContent = textInput;

		let stringifiedCountry = JSON.stringify(textInput);
		let nameOfCountry = "country-value";
		countryArray.push(stringifiedCountry);
		localStorage.setItem(nameOfCountry, countryArray);
	});	
});


function saveToLocalStorage() {
	let textInput = document.getElementById('userInput').value;
	const textOnScreen = document.querySelector("#textOnScreen");
	textOnScreen.textContent = textInput;

	let stringifiedCountry = JSON.stringify(textInput);
	let nameOfCountry = "country-value";
	countryArray.push(stringifiedCountry);
	localStorage.setItem(nameOfCountry, countryArray);
}