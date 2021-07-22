// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символо
// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.
// Если введено подходящее количество,
// то border инпута становится зеленым,
//    если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

const inputElem = document.querySelector('#validation-input');

const changeClass = (addClass, removeClass) => {
    inputElem.classList.add(addClass);
    inputElem.classList.remove(removeClass);
}


inputElem.addEventListener("blur", () => {
    if (inputElem.value.length === Number(inputElem.dataset.length)) {
        changeClass('valid', 'invalid'); 
    } else {
        changeClass('invalid', 'valid');  
    }
});



