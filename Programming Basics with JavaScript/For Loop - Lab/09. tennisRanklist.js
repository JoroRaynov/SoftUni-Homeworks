function tennisRanklist(input) {
    index = 0;
    let countTournirs = Number(input[index]);
    index++
    let startPoints = Number(input[index]);
    index++

    let points = 0;
    let countWin = 0;

    for (let i = 0; i < countTournirs; i++) {

        let currentTournir = input[index];
        index++

        if (currentTournir === 'W') {
            countWin++
            points += 2000;
        } else if (currentTournir === 'F') {
            points += 1200
        } else {
            points += 720;
        }

    }

    let finalPoints = 0;

    finalPoints = startPoints + points;
    let avgPoints = Math.floor(points / countTournirs);
    let percWinTurn = countWin / countTournirs * 100;

    console.log(`Final points: ${finalPoints}`);

    console.log(`Average points: ${avgPoints}`);
    console.log(`${percWinTurn.toFixed(2)}%`);

}
tennisRanklist(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"
])
