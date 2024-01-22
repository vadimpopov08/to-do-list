const myButton = document.getElementById('myButton')
const nameInput = document.getElementById('nameInput')
const list = document.getElementById('list')
myButton.addEventListener('click', (eve) => {
    const newItem = document.createElement('li');
    newItem.classList.add('item');


    newItem.textContent = nameInput.value;

    // Добавить кнопку для удаления элемента списка
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';

    // Удаление элемента списка
    deleteButton.addEventListener('click', () => {
        list.removeChild(newItem)
    })

    newItem.appendChild(deleteButton);
    list.appendChild(newItem);

    nameInput.value = '';
}
)
