function sameNumbers(num) {

    let truthOrFalse = '';

    let result = 0;

    let numbers = num.toString().split('').reverse().join('');
    
    if (num == numbers) {
        truthOrFalse = 'true';
        result = Array.from(numbers).reduce((a, b) => a + Number(b), 0);
    } else {
        truthOrFalse = 'false';
        result = Array.from(numbers).reduce((a, b) => a + Number(b), 0);
    }
    console.log(truthOrFalse);
    console.log(result);
}
sameNumbers(1234)