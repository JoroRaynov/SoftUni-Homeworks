function sumOfTwoNumbers(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let num = Number(input[2]);
    let counter = 0;



    for (i = start; i <= end; i++) {
        for (j = start; j <= end; j++) {
            counter++
            let result = i + j;
            if (result === num) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${num})`);
                return;
            }
        }
    }
    console.log(`${counter} combinations - neither equals ${num}`);

}
sumOfTwoNumbers(["23",
    "24",
    "20"
])