function gladiatorExpenses(lostFights, helmPrice, swordPrice, shieldPrice, armorPrice) {

    let helmCounter = 0;
    let swordCounter = 0;
    let shieldCounter = 0;
    let armorCounter = 0;
    let gameCounter = 0;

    while (lostFights !== gameCounter) {
        gameCounter++
        if (gameCounter % 2 === 0) {
            helmCounter++
        }
        if (gameCounter % 3 === 0) {
            swordCounter++
        }
        if (gameCounter % 2 === 0 && gameCounter % 3 === 0) {
            shieldCounter++
            if (shieldCounter % 2 === 0) {
                armorCounter++
            }
        }
    }

    let priceForHelm = helmCounter * helmPrice;
    let priceForSword = swordCounter * swordPrice;
    let priceForShield = shieldCounter * shieldPrice;
    let priceForArmor = armorCounter * armorPrice;
    let total = priceForHelm + priceForSword + priceForShield + priceForArmor;
    
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);

}
gladiatorExpenses(23, 12.50, 21.50, 40, 200)