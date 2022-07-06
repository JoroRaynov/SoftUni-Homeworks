function solve() {
	let tBodyElement = document.querySelector('tbody');
	let generateButtonElement = document.querySelectorAll('div > button');
	let textareaElements = document.querySelectorAll('div > textarea');
	let generateTextarea = textareaElements[0];
	let buyTextarea = textareaElements[1];
	

	generateButtonElement[1].addEventListener('click', onBuy)
	generateButtonElement[0].addEventListener('click', onGenerate);

	function onGenerate() {

		let json = JSON.parse(generateTextarea.value)
		console.log(generateTextarea.value);
		for (const furniture of json) {
			console.log(furniture);
		//here will append all td
		let tr = document.createElement('tr');

		let tdImg = document.createElement('td');
		tdImg.innerHTML = `<img src ="${furniture.img}">`;
		tr.appendChild(tdImg);

		let tdProduct = document.createElement('td');
		let pTag = document.createElement('p');
		pTag.textContent = furniture.name;
		tdProduct.appendChild(pTag);
		tr.appendChild(tdProduct);

		let tdPrice = document.createElement('td');
		let pPrice = document.createElement('p');
		pPrice.textContent = furniture.price;
		tdPrice.appendChild(pPrice);
		tr.appendChild(tdPrice);

		let tdDecFactor = document.createElement('td');
		let pDecFactor = document.createElement('p');
		pDecFactor.textContent = furniture.decFactor;
		tdDecFactor.appendChild(pDecFactor);
		tr.appendChild(tdDecFactor);

		let tdCkeck = document.createElement('td');
		let tdInput = document.createElement('input');
		tdInput.setAttribute("type", "checkbox");
		tdCkeck.appendChild(tdInput);
		tr.appendChild(tdCkeck);

		tBodyElement.appendChild(tr)
		generateTextarea.value = '';
		// console.log(tr);
	}
}

	function onBuy(e) {

		let decFactor = [];
		let totalPrice = 0;

		let allTr = document.querySelectorAll('tbody tr');
		let arrFurniture = [];
		let checedBoxCounter = 0;
		for (const box of allTr) {
			// arr.push(box)
			let chrckBox = box.querySelector('input');
			let boxChildrens = box.children;
			let nameOfFurniture = boxChildrens[1].textContent;
			let priceFurniture = Number(boxChildrens[2].textContent);
			let decorationFactor = Number(boxChildrens[3].textContent)
			if (chrckBox.checked === true) {
				checedBoxCounter++;
				arrFurniture.push(nameOfFurniture);

				totalPrice += priceFurniture;

				decFactor.push(decorationFactor);

			}

		}
			let averageDecFactor = decFactor.reduce((a, x) => a + x, 0) / decFactor.length;
			resultTxt = `Bought furniture: ${arrFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecFactor}`;
			buyTextarea.textContent = resultTxt;
		
	}

}