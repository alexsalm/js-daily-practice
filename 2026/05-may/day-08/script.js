const addCountryButton = document.querySelector(".add-country");
let countryArray = []; // starts off empty

document.addEventListener("DOMContentLoaded", function () {
	addCountryButton.addEventListener("click", function() {	
		textInputEventListener("keydown", (event) => {
			if (event.key === "Enter") {
				event.preventDefault();
				console.log("Enter was pressed");
				saveToLocalStorage();
			}
		})
		
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