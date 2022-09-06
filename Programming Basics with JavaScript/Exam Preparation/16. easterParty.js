function easterParty(input) {

    let guests = Number(input[0]);
    let priceForOne = Number(input[1]);
    let budget = Number(input[2]);

    if (guests >= 10 && guests <= 15) {
        priceForOne *= 0.85;
    } else if (guests > 15 && guests <= 20) {
        priceForOne *= 0.8;
    } else if (guests > 20) {
        priceForOne *= 0.75
    }

    let neededMoney = priceForOne * guests;
    let priceCake = budget * 0.10;

    let totalNeededMoney = neededMoney + priceCake;
    let diff = Math.abs(budget - totalNeededMoney);
    
    if (budget >= totalNeededMoney) {
        console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${diff.toFixed(2)} leva needed.`);
    }

}
easterParty(["18", "30", "450"])