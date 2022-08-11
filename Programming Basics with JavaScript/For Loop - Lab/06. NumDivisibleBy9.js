function numDivisibleBy9(input) {

    let start = Number(input[0]);
    let final = Number(input[1]);
    let sum = 0;
    let output = '';

    for (let i = start; i <= final; i++) {

        if (i % 9 === 0) {
            sum += i
            output += `${i} \n`;
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(output);

}
numDivisibleBy9(['100', '200'])