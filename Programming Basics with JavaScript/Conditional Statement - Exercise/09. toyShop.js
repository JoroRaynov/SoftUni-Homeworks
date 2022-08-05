function toyShop(input) {

    let priceExcursion = Number(input[0]);
    let countPuzzle = Number(input[1]);
    let countTalkingDolls = Number(input[2]);
    let countTeddyBear = Number(input[3]);
    let countMinions = Number(input[4]);
    let countTracks = Number(input[5]);

    let countToys = countPuzzle + countTalkingDolls + countTeddyBear + countMinions + countTracks

    let priceToys = countPuzzle * 2.60 + countTalkingDolls * 3 + countTeddyBear * 4.10 +
        countMinions * 8.20 + countTracks * 2;

        if (countToys >= 50) {
            priceToys = priceToys * 0.75
        }

    priceToys = priceToys * 0.9

    let difference = Math.abs(priceToys - priceExcursion);


    if (priceToys >= priceExcursion) {

        console.log(`Yes! ${difference.toFixed(2)} lv left.`);

    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
    }

}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])
