function safari(input){

    let budget = Number(input[0]);
    let neededLitersGas = Number(input[1]);
    let dayOfWeek = input[2];

    let priceForGas = neededLitersGas * 2.10;
    let guidePrice = 100;

    let totalNeededMoney = priceForGas + guidePrice;
     if(dayOfWeek === 'Saturday'){
         totalNeededMoney *= 0.90;
     } else if(dayOfWeek === 'Sunday'){
         totalNeededMoney *= 0.80
     }

let diff = Math.abs(budget - totalNeededMoney)
if(budget >= totalNeededMoney){
    console.log(`Safari time! Money left: ${diff.toFixed(2)} lv. `);
} else {
    console.log(`"Not enough money! Money needed: ${diff.toFixed(2)} lv."`);
}

}safari(["1000","10","Sunday"])
