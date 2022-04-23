function aluminium(input) {

    let windows = Number(input[0]);
    let typeWindow = input[1];
    let delivery = input[2];
    let price = 0;

    
    if (windows > 10)
        switch (typeWindow) {

            case '90X130':
                price = windows * 110;
                if (windows > 30 && windows <= 60) {
                    price *= 0.95
                } else if (windows > 60) {
                    price *= 0.92
                }
                break;
            case '100X150':
                price = windows * 140;
                if (windows > 40 && windows <= 80) {
                    price *= 0.94;
                } else if (windows > 80) {
                    price *= 0.90
                }
                break;
            case '130X180':
                price = windows * 190
                if (windows > 20 && windows <= 50) {
                    price *= 0.93
                } else if (windows > 50) {
                    price *= 0.88
                }
                break;
            case '200X300':
                price = windows * 250;
                if (windows > 25 && windows <= 50) {
                    price *= 0.91
                } else if (windows > 50) {
                    price *= 0.86
                }
                break;


        }
    if (delivery === 'With delivery') {
        price += 60
    } else {
        price = price;
    }


    if (windows > 99) {
        price *= 0.96

    } else if (windows < 10) {
        console.log(`Invalid order`)
        return;
    }
    console.log(`${price.toFixed(2)} BGN`);
}
aluminium(["2",
    "130X180",
    "With delivery"
])