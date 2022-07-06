function addItem() {
    let newItemEl = document.getElementById('newItemText');

    let newItemValue = document.getElementById('newItemValue');;

    let selectElement = document.getElementById('menu');

    let option = document.createElement('option');

    option.value = newItemValue.value;
    option.textContent = newItemEl.value;

    selectElement.appendChild(option);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}