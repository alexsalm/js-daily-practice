const addCountryButton = document.querySelector(".add-country");
const addTodoItem = document.querySelector(".add-todo");
let countryArray = []; // starts off empty
let todoArray = [];

document.addEventListener("DOMContentLoaded", function () {
	addCountryButton.addEventListener("click", function() {	
		saveToLocalStorage();
	});	
	addTodoItem.addEventListener("click", function() {
		saveTodoToLocalStorage();
	});
});


function saveCountryToLocalStorage() {
	let textInput = document.getElementById('userInput').value;
	const textOnScreen = document.querySelector("#textOnScreen");
	textOnScreen.textContent = textInput;

	let stringifiedCountry = JSON.stringify(textInput);
	let nameOfCountry = "country-value";
	countryArray.push(stringifiedCountry);
	localStorage.setItem(nameOfCountry, countryArray);
}

function saveTodoToLocalStorage() {
	let todoInput = document.getElementById('todoList').value;
	const todoOnScreen = document.querySelector('#todoOnScreen');
	todoOnScreen.textContent = todoInput;

	let stringifiedTodo = JSON.stringify(todoInput);
	let nameOfTodo = "todo-value";
	todoArray.push(stringifiedTodo);
	localStorage.setItem(nameOfTodo, todoArray);
}