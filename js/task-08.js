// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input
// и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount),
// которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount
// и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого,
// должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
const containerElem = document.querySelector('#boxes');

const inputElem = document.querySelector('#controls input');
const renderElem = document.querySelector('#controls button[data-action="render"]');
const destroyElem = document.querySelector('#controls button[data-action="destroy"]');

console.log(inputElem.value);
console.log(renderElem);
console.log(destroyElem);

let startSizeBox = 30;

function createBoxes(amount) {
    amount = Number(inputElem.value);
    console.log(amount);

    for (let i = 0; i < amount; i++) {
        const r = Math.floor(Math.random() * (256));
        const g = Math.floor(Math.random() * (256));
        const b = Math.floor(Math.random() * (256));
        const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

        let divElem = document.createElement('div');
        divElem.style.marginBottom = "10px";
        divElem.style.height = `${startSizeBox + 10*i}px`;
        divElem.style.width = `${startSizeBox + 10*i}px`;
        divElem.style.backgroundColor = color;
        divElem.style.borderWidth = "2px";
        divElem.style.borderColor = 'tomato';

        divElem.classList.add('new');
        containerElem.appendChild(divElem);
    }

    inputElem.value = "";
}

function destroyBoxes() {
    containerElem.innerHTML = "";
}

renderElem.addEventListener('click', createBoxes);
destroyElem.addEventListener('click', destroyBoxes);

