function mobileOperator(input) {

    let termOfContract = input[0];
    let typeContract = input[1];
    let addMobileInternet = input[2];
    let numMonthsForPayment = Number(input[3]);
    let price = 0;

    if (termOfContract === 'one')
        switch (typeContract) {
            case 'Small':
                price = numMonthsForPayment * 9.98;
                break;
            case 'Middle':
                price = numMonthsForPayment * 18.99;
                break;
            case 'Large':
                price = numMonthsForPayment * 25.98;
                break;
            case 'ExtraLarge':
                price = numMonthsForPayment * 35.99;
        } else {
            switch (typeContract) {
                case 'Small':
                    price = numMonthsForPayment * 8.58
                    break;
                case 'Middle':
                    price = numMonthsForPayment * 17.09;
                    break;
                case 'Large':
                    price = numMonthsForPayment * 23.59;
                    break;
                case 'ExtraLarge':
                    price = numMonthsForPayment * 31.79;
            }
        }
    let tax = price / numMonthsForPayment
    if (addMobileInternet === 'yes') {
        if (tax <= 10) {
            price += numMonthsForPayment * 5.5
        } else if (tax <= 30) {
            price += numMonthsForPayment * 4.35
        } else {
            price += numMonthsForPayment * 3.85
        }
    }
    if (termOfContract === 'two') {
        price *= 0.9625
    }
    console.log(`${price.toFixed(2)} lv.`);
}
mobileOperator(["two",
    "ExtraLarge",
    "yes",
    "20"
])