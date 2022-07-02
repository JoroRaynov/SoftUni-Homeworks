function extractText() {
    // TODO
    let textElements = document.querySelector('ul').textContent;
    // textElements = textElements.textContent;
    let getEl = document.getElementById('result');
    getEl.textContent = textElements;
    console.log(getEl);
}