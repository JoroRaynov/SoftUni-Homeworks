function christmasTournament(input) {
    let days = Number(input[0]);
    let index = 1;

    let dayMoney = 0;
    let dayWin = 0;
    let dayLose = 0;

    for (let i = 1; i <= days; i++) {
        let loseCounter = 0;
        let winCounter = 0;
        let money = 0;
        let command = input[index++];
        while (command != 'Finish') {

            let desicion = input[index++];
            if (desicion === 'win') {
                money += 20
                winCounter++
                dayWin++

            } else {
                loseCounter++
                dayLose++

                money = money
            }
            command = input[index++]
        }
        if (winCounter > loseCounter) {
            money *= 1.10;
            dayMoney += money
        } else {
            dayMoney += money
        }
    }
    if (dayWin > dayLose) {
        dayMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${dayMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${dayMoney.toFixed(2)}`);
    }


}
christmasTournament(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])