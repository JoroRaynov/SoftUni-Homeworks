window.addEventListener("load", solve);

function solve() {
  let makeElement = document.getElementById('make');
  let modelElement = document.getElementById('model');
  let yearElement = document.getElementById('year');
  let fuelTypeElement = document.getElementById('fuel');
  let originalCostElement = document.getElementById('original-cost');
  let sellingPriceElement = document.getElementById('selling-price');
  let profit = document.getElementById('profit');

  let tableBody = document.getElementById('table-body');
  let soldCars = document.getElementById('cars-list');


  let publishButton = document.getElementById('publish');

  publishButton.addEventListener("click", (e) => {
    e.preventDefault();
    let make = makeElement.value;
    let model = modelElement.value;
    let year = yearElement.value;
    let fuel = fuelTypeElement.value;
    let originalCost = originalCostElement.value;
    let sellingPrice = sellingPriceElement.value;

    if (make == '' || model == '' || year == '' || fuel == '' || originalCost == '' || sellingPrice < originalCost) {
      return;
    }
    makeElement.value = '';
    modelElement.value = '';
    yearElement.value = '';
    fuelTypeElement.value = '';
    originalCostElement.value = '';
    sellingPriceElement.value = '';

    let tr = document.createElement('tr');
    tr.classList.add('row');
    el('td', `${make}`, tr);
    el('td', `${model}`, tr);
    el('td', `${year}`, tr);
    el('td', `${fuel}`, tr);
    el('td', `${originalCost}`, tr);
    el('td', `${sellingPrice}`, tr);

    let td = document.createElement('td');

    let editButton = document.createElement('button');
    editButton.className = 'action-btn edit';
    editButton.textContent = 'Edit';

    let sellButton = document.createElement('button');
    sellButton.className = 'action-btn sell';
    sellButton.textContent = 'Sell';

    td.appendChild(editButton);
    td.appendChild(sellButton);

    tr.appendChild(td);

    tableBody.appendChild(tr);


    editButton.addEventListener('click', () => {
      makeElement.value = make;
      modelElement.value = model;
      yearElement.value = year;
      fuelTypeElement.value = fuel;
      originalCostElement.value = originalCost;
      sellingPriceElement.value = sellingPrice;
      tr.remove();
    });


    sellButton.addEventListener('click', () => {
      let difference = sellingPrice - originalCost;
      tr.remove();
      let liList = document.createElement('li');
      liList.classList.add('each-list');
      el('span', `${make} ${model}`, liList);
      el('span', `${year}`, liList);
      el('span', `${difference}`, liList);

      soldCars.appendChild(liList);
      let totalProfit = (Number(profit.textContent) +Number(difference)).toFixed(2);
      profit.textContent = totalProfit;
    })

  });




  function el(type, text, parent) {
    let element = document.createElement(type);
    element.textContent = text;
    if (parent) {
      parent.appendChild(element);
    }

  }
}