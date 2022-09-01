function divisionWithoutRemainder(input) {
    let index = 1;
    let nums = Number(input[0]);
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;


    for (let i = 1; i <= nums; i++) {

        let currentNum = Number(input[index++]);

        if (currentNum % 2 === 0) {
            counter2++
        } 
        if (currentNum % 3 === 0) {
            counter3++
        }
        if (currentNum % 4 === 0) {
            counter4++
        }
    }
let p2 = counter2 / nums * 100;
let p3 = counter3 / nums * 100;
let p4 = counter4 / nums * 100;
console.log(p2.toFixed(2) + '%');
console.log(`${p3.toFixed(2)}%`);
console.log(`${p4.toFixed(2)}%`);

}
divisionWithoutRemainder(["3",
"3",
"6",
"9"])

