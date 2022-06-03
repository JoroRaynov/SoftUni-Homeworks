function arrayModifier(array) {
    let index = 0;
    let numbers = array.shift().split(' ').map(Number);

    while (array[0] != 'end') {

        let tokens = array.shift().split(' ');
        let command = tokens.shift();
        tokens = tokens.map(Number);
        let firstIndex = tokens[0];
        let secondIndex = tokens[1];
        if (command === 'swap') {
            let temp = numbers[secondIndex];

            numbers[secondIndex] = numbers[firstIndex];
            numbers[firstIndex] = temp;
        } else if (command === 'multiply'){
            numbers[firstIndex] *= numbers[secondIndex];
        } else if (command === 'decrease'){
            for (let i = 0; i< numbers.length; i++) {
                numbers[i] -= 1;
            }
        }
    }
    console.log(numbers.join(', '));



}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
