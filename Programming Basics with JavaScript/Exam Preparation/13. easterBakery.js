function easterBakery(input) {

    let priceFlourForKilo = Number(input[0]);
    let flourInKilo = Number(input[1]);
    let sugerKilos = Number(input[2]);
    let numEggsShells = Number(input[3]);
    let yeast = Number(input[4]);

    let moneyFlour = flourInKilo * priceFlourForKilo;

    let priceSuger = priceFlourForKilo * 0.75;

    let priceEggsShell = priceFlourForKilo * 1.10;

    let priceOnePackYeast = priceSuger * 0.20;

    let moneySuger = priceSuger * sugerKilos;
    let moneyEggs = priceEggsShell * numEggsShells;
    let moneyYeast = yeast * priceOnePackYeast;

    let totalMoney = moneyFlour + moneySuger + moneyEggs + moneyYeast;
    console.log(totalMoney.toFixed(2));




}
easterBakery(["50", "10", "3.5", "6", "1"])