function foodDelivery(input) {

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegieMenu = Number(input[2]);

    let priceChicken = chickenMenu * 10.35;
    let priceFish = fishMenu * 12.40;
    let priceVegie = 8.15 * vegieMenu
    let totalMenuPrice = priceChicken + priceFish + priceVegie;
    let priceDessert = totalMenuPrice * 0.2;

    let priceForOrder = totalMenuPrice + priceDessert + 2.50;

    console.log(priceForOrder);
}

foodDelivery(["2 ","4 ","3 "])