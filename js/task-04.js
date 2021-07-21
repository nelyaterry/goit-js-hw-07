
const counterValue = document.querySelector('#value');
const incrBtn = document.querySelector('[data-action="increment"]');
const decrBtn = document.querySelector('[data-action="decrement"]');

const counter = {
  value: 0,

  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

incrBtn.addEventListener('click', () => {
  counter.increment();
  counterValue.textContent = counter.value;
});

decrBtn.addEventListener('click', () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});