function accountBalance(input) {
    let index = 0;

    let sum = input[index];


    let totalSum = 0;

    while (sum !== 'NoMoreMoney') {
        let inputAsNum = Number(sum)

        if (inputAsNum < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        totalSum += inputAsNum
        console.log(`Increase: ${inputAsNum.toFixed(2)}`);
        index++
        sum = input[index]


    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}
accountBalance(["120",
"45.55",
"-150"])

