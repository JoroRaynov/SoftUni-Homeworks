function energyBooster(input) {

    let fruit = input[0];
    let sizeSet = input[1];
    let numSets = input[2];
    let price = 0;


    if (sizeSet === 'big'){

        switch (fruit) {
            case 'Watermelon':
                price = (28.70 * 5) * numSets;
                break;
            case 'Mango':
                price = (19.60 * 5) * numSets;
                break;
            case 'Pineapple':
                price = (24.80 * 5) * numSets;
                break;
            case 'Raspberry':
                price = (15.20 * 5) * numSets;
                break;

        }

    } else {
        switch(fruit){
            case 'Watermelon':
                price = (56 * 2) * numSets;
                break;
            case 'Mango':
                price = (36.660 * 2) * numSets;
                break;
            case 'Pineapple':
                price = (42.10 * 2) * numSets;
                break;
            case 'Raspberry':
                price = (20 * 2) * numSets;
                break;
        }
    }
if(price >= 400 && price <= 1000){
    price*=0.85
} else if(price > 1000){
    price /= 2
}

console.log(`${price.toFixed(2)} lv.`);
}
energyBooster(["Mango",
"big",
"8"])

