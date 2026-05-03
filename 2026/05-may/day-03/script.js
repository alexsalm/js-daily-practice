const addCountryButton = document.querySelector(".add-country");

addCountryButton.addEventListener("click", function() {
	let textInput = document.getElementById('userInput').value;
	const textOnScreen = document.querySelector("#textOnScreen");
	textOnScreen.textContent = textInput;

	let stringifiedCountry = JSON.stringify(textInput);
	let countryArray = []; // starts off empty
	let nameOfCountry = "country-value";
	countryArray.push(stringifiedCountry);
	localStorage.setItem(nameOfCountry, countryArray);
});



