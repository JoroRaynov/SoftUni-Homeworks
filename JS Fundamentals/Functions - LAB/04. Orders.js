function orders(product, quantity) {

    let coffeePrice = 1.50;
    let waterPrice = 1.00;
    let cokePrice = 1.40;
    let snacksPrice = 2.00;
    let totalPrice = 0; 
    if(product == 'coffee'){
        totalPrice = coffeePrice * quantity;
    } else if(product == 'water'){
        totalPrice = waterPrice * quantity;
    } else if (product == 'coke'){
        totalPrice = cokePrice * quantity;
    } else {
        totalPrice = snacksPrice * quantity;
    }

    console.log(totalPrice.toFixed(2));
}
orders('water', 5)