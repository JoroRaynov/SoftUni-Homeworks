function coffeeMachine(input){

    let drink = input[0];
    let sugar = input[1];
    let countDrinks = Number(input[2]);
    let price = 0;

    switch(drink){
        case 'Espresso':
            if(sugar === 'Without'){
            price = countDrinks * 0.9;
            } else if (sugar === 'Normal'){
                price = countDrinks * 1;
            } else if (sugar === 'Extra'){
                price = countDrinks * 1.20;
            }
            break;
            case 'Cappuccino':
                if(sugar === 'Without'){
                    price = countDrinks * 1.00;
                    } else if (sugar === 'Normal'){
                        price = countDrinks * 1.20;
                    } else if (sugar === 'Extra'){
                        price = countDrinks * 1.60;
                    }
                    break;
                    case 'Tea':
                        if(sugar === 'Without'){
                            price = countDrinks * 0.5;
                            } else if (sugar === 'Normal'){
                                price = countDrinks * 0.6;
                            } else if (sugar === 'Extra'){
                                price = countDrinks * 0.7;
                            }
                            break;
    }
if(sugar === 'Without'){
price *= 0.65
}
if(drink === 'Espresso' && countDrinks >= 5){
    price *= 0.75;
} 
if(price > 15){
    price*= 0.80;
}
console.log(`You bought ${countDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`);
}
coffeeMachine(["Tea",
"Extra",
"3"])
