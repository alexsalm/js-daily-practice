const addCountryButton = document.querySelector(".add-country");

addCountryButton.addEventListener("click", function() {
	let textInput = document.getElementById('userInput').value;
	const textOnScreen = document.querySelector("#textOnScreen");
	textOnScreen.textContent = textInput;
});
