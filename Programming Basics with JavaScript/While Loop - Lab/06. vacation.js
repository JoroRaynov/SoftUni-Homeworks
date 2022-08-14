function vacation(input) {
    let index = 0;
    let needMoney = Number(input[index++]);
    let money = Number(input[index++]);

    let spendCounter = 0;
    let dayCounter = 0;

    while (money < needMoney) {
        dayCounter++
        let type = input[index++]; 
        let sum = Number(input[index++]);


        if (type === 'spend') {
            spendCounter++

            money -= sum;
            if (money < 0) {
                money = 0
            }

            if (spendCounter === 5) {
                console.log(`You can't save the money.`);
                console.log(`${dayCounter}`);
                break;
            }
        } else if (type === 'save') {
            money += sum;
            spendCounter = 0;
        }
        if (money >= needMoney) {
            console.log(`You saved the money for ${dayCounter} days.`);
            break;
        }
    }
}
vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])


