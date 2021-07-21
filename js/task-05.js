const outputElem = document.querySelector('#name-output');

const inputElem = document.querySelector('#name-input');


inputElem.addEventListener('input', (e) => {
    outputElem.textContent = e.target.value.trim() || 'незнакомец';
})

// inputElem.addEventListener('input', () => {
//     inputElem.value ? outputElem.textContent = inputElem.value.trim() : outputElem.textContent = 'незнакомец';
// });


// inputElem.addEventListener('input', () => {
//     outputElem.textContent = inputElem.value.trim() || 'незнакомец';
// });