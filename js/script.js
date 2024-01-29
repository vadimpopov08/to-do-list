const myButton = document.getElementById('myButton')
const nameInput = document.getElementById('nameInput')
const list = document.getElementById('list')
const wrapper = document.querySelector('.wrapper')
const overlayBefore = document.querySelector('.overlay::before')

myButton.addEventListener('click', (eve) => {

    if (nameInput.value == 'Ксения') {
        let newBan = document.createElement('div')
        newBan.classList = ('ban')
        newBan.textContent = 'Это имя вводить в строку нельзя, так как оно очень уродливое';
        wrapper.appendChild(newBan)
    }
    else {
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
            wrapper.classList.add('overlay');
            let modalWindow = document.createElement('div')
            modalWindow.classList.toggle('modal')
            wrapper.appendChild(modalWindow)
            let title = document.createElement('h2')
            title.classList.add('title')
            title.textContent = 'Подтвердите удаление'
            modalWindow.appendChild(title)
            let cancel = document.createElement('button')
            cancel.textContent = 'Отмена'
            let OK = document.createElement('button')
            OK.textContent = 'Удалить'
            let buttons = document.createElement('div')
            buttons.classList.add('btns')
            buttons.appendChild(cancel)
            buttons.appendChild(OK)
            modalWindow.appendChild(buttons)
            cancel.addEventListener('click', () => {
                modalWindow.style.display = 'none';
                wrapper.classList.toggle('overlay')
            })
            OK.addEventListener('click', () => {
                list.removeChild(newItem)
                modalWindow.style.display = 'none'
                wrapper.classList.toggle('overlay')
            })
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
})