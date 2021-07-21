const ulEl = document.querySelector('#categories');
console.log(`В списке ${ulEl.children.length} категории.`);

//В списке 3 категории.

const itemEl = document.querySelectorAll('.item');
itemEl.forEach(e => {
    console.log(`Категория: ${e.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${e.lastElementChild.children.length}`);
});

// Категория: Животные
// Количество элементов: 4