function godzilaVsKong(input) {

    let budget = Number(input[0]);
    let countStatists = Number(input[1]);
    let priceClothingFor1 = Number(input[2]);

    let priceDecor = budget * 0.1;
    let priceClothing = priceClothingFor1 * countStatists;

    if (countStatists > 150) {
        priceClothing *= 0.9;
    }
    let totalCostMovie = priceDecor + priceClothing
    let diff = Math.abs(budget - totalCostMovie);
    if (priceDecor + priceClothing > budget) {

        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);

    }
}
godzilaVsKong(["20000", "120", "55.5"])