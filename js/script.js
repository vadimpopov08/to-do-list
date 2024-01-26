const myButton = document.getElementById('myButton')
const nameInput = document.getElementById('nameInput')
const list = document.getElementById('list')
// if (nameInput.value = 'Ксения') {
//     myButton.addEventListener('click', (rug) => {
//         console.log('Это имя вводить в консоль нельзя, оно очень уродливое')
//     })
// }
myButton.addEventListener('click', (eve) => {
    let newCheck = document.createElement('input');
    newCheck.type = 'checkbox';
    newCheck.classList.add('check');

    const newLabel = document.createElement('label')
    newLabel.for = 'thing'

    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.textContent = nameInput.value;
    // Добавить кнопку для удаления элемента списка
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete')
    const bold = document.createElement('b');
    deleteButton.appendChild(bold)
    bold.textContent = '×';

    // Удаление элемента списка
    deleteButton.addEventListener('click', () => {
        list.removeChild(newItem)
    })
    newItem.appendChild(newCheck)
    newItem.append(newLabel)
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);
    // Событие change срабатывает по окончании изменения элемента
    newCheck.addEventListener('change', () => {
        console.log(newCheck.checked);
        // toggle - добавить класс, если его нет, и удалить класс, если он есть.
        newItem.classList.toggle('task-complete');
    })



    nameInput.value = '';
}
)
