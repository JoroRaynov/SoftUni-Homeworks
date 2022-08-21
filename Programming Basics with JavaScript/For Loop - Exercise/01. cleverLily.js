function cleverLily(input){
    index = 0;
    let age = Number(input[index]);
    index++
    let washingmachinePrice = Number(input[index]);
    index++
    let toyPrice = Number(input[2]);
    index++
    let toyCounter = 0;
    let savedMoney = 0;
    let money = 10;

        for (let i = 1; i <= age; i++){
            if(i % 2 !== 0){
                toyCounter++
            } else {
                savedMoney += money;
                money += 10;
                savedMoney -= 1;
            }
        }
        savedMoney += toyCounter * toyPrice
        let diff = Math.abs(savedMoney - washingmachinePrice);
        if(savedMoney >= washingmachinePrice){
            console.log(`Yes! ${diff.toFixed(2)}`);

        } else {
            console.log(`No! ${diff.toFixed(2)}`);
        }
}cleverLily(["21",
"1570.98",
"3"])

