function computerStore(array) {

    let index = 0;
    let command = array[index++]
    let priceWithOutTaxes = 0;

    while (command != 'special' && command != 'regular') {

        let price = Number(command);
        command = array[index++];
        if (price < 0) {
            console.log('Invalid price!');
            continue;
        } else {
            priceWithOutTaxes += price;
        }
    }

    if (priceWithOutTaxes == 0) {
        return console.log('Invalid order!');

    }
    let taxes = priceWithOutTaxes * 0.2;
    let totalPriceWithTaxes = priceWithOutTaxes + taxes;

    if (command === 'special') {
        totalPriceWithTaxes *= 0.9;
    }

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${priceWithOutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
}
computerStore([0, 0, 0, 0, 0, 0,
    'regular'
])