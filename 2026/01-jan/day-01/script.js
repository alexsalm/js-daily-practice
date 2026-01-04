const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function(event) {
    event.preventDefault();
    let currentItem = input.value;
    input.value = '';
    input.focus();

    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    span.textContent = currentItem;
    deleteButton.textContent = 'Delete';
    list.appendChild(listItem);

    deleteButton.addEventListener('click', function(event) {
        event.preventDefault();
        listItem.remove();
    });
});