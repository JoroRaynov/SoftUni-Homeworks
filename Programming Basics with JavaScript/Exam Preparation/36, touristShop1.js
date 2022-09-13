function touristShop1(input){

    let index = 0;
    let budget = Number(input[index++]);
    let command = input[index++];
    let counter = 0;
    let productsPrice = 0;

    while(command !== 'Stop'){
        counter++
        let product = command;
        let priceProduct = Number(input[index++]);
        
        if(counter % 3 === 0){
            priceProduct /= 2;
        }
       let diff = Math.abs(budget -= priceProduct);
        if(budget < 0){
            console.log("You don't have enough money!");
            console.log(`You need ${diff.toFixed(2)} leva!`);
            break;
        }
        
        productsPrice += priceProduct;
        command = input[index++];
    }
if(command === 'Stop'){
    console.log(`You bought ${counter} products for ${productsPrice.toFixed(2)} leva.`);
}
}
touristShop1(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"])

