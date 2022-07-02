function sumTable() {
let element = document.querySelectorAll('tr td:nth-child(2) ');
let sum = Array.from(element);
let lastEl = sum.pop();
sum = sum.reduce((x, y) => x + Number(y.textContent), 0);
// let result = document.getElementById('sum');
lastEl.textContent = sum;
}