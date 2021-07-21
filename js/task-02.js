const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulElem = document.querySelector('#ingredients')

const newArray = [];

ingredients.forEach(e => {
    const itemElem = document.createElement('li');
    itemElem.textContent = e;
    newArray.push(itemElem);
});

// console.log(newArray[0].textContent);

ulElem.append(...newArray);


