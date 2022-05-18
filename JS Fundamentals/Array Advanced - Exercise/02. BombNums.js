function bombNumbers(array, bombNums) {

    let bombNum = bombNums[0];
    let bombPower = bombNums[1];

    let indexOfBombNum = array.indexOf(bombNum);



    while (indexOfBombNum !== -1) {
        let areaForDetonationStart = Math.max(0, indexOfBombNum - bombPower);
        let stop = bombPower * 2 + 1;

        array.splice(areaForDetonationStart, stop);
        indexOfBombNum = array.indexOf(bombNum);
    }
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    console.log(sum);

}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [1, 2]

)