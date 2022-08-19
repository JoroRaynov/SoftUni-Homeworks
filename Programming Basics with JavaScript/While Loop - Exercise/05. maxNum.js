function maxNum(input) {
    let inputNum = input[0];

    let index = 1;
    let max = Number.MAX_SAFE_INTEGER

    while (inputNum !== 'Stop') {
        let currentNum = Number(inputNum);
        if (currentNum < max) {
            max = currentNum
        }
        inputNum = input[index];
        index++
    }
    console.log(max);
    
}
maxNum(["45",
"-20",
"7",
"99",
"Stop"])

