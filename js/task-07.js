const rangeElem = document.getElementById('font-size-control');
const textElem = document.getElementById('text');

rangeElem.addEventListener('input', (e) => {
    textElem.style.fontSize = `${Number(e.target.value)}px`;
});