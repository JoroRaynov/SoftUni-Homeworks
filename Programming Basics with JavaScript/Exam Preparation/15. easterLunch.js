function easterLunch(input){

    let easterBread = Number(input[0])
    let eggsShell   = Number(input[1]);
    let coockiesInKilo = Number(input[2]);

    let priceEasterBread = easterBread * 3.20;

    let priceEggsShell = eggsShell * 4.35;

    let priceCoockies = coockiesInKilo * 5.40;

    let eggsPaint = (eggsShell * 12) *0.15;

    let totalPrice = priceEasterBread + priceEggsShell + priceCoockies + eggsPaint;

    console.log(totalPrice.toFixed(2));

}

easterLunch(["3", "2", "3"]);
