function calc() {
    // TODO: sum = num1 + num2
    let numOne = document.getElementById('num1');
    let numTwo = document.getElementById('num2');
    let result = document.getElementById('sum');
    result.value = Number(numOne.value) + Number(numTwo.value);
}
