function travelAgency(input) {

    let city = input[0];
    let typePackage = input[1];
    let vip = input[2];
    let dayStay = Number(input[3]);
    let price = 0;

    if (dayStay > 7) {
        dayStay--
    } else if (dayStay < 1) {
        console.log(`Days must be positive number!`);
        return;
    }
    if (city === 'Bansko' || city === 'Borovets') {
        if (typePackage === 'withEquipment') {
            price = dayStay * 100;
            if (vip === 'yes') {
                price *= 0.9
            }
        } else {
            price = dayStay * 80;
            if (vip === 'yes') {
                price *= 0.95
            }
        }

    }
    if (city === 'Varna' || city === 'Burgas') {
        if (typePackage === 'noBreakfast') {
            price = dayStay * 100;
            if (vip === 'yes') {
                price *= 0.93
            }
        } else {
            price = dayStay * 130;
            if (vip === 'yes') {
                price *= 0.88
            }
        }

    }
    
    if (city !== 'Bansko' && city !== 'Borovets' && city !== 'Varna' && city !== 'Burgas') {
        console.log('Invalid input!');
        return;
    }
    if (typePackage !== 'noEquipment' && typePackage !== 'withEquipment' && typePackage !== 'noBreakfast' && typePackage !== 'withBreakfast') {
        console.log('Invalid input!');
        return;
    }
    console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
}


travelAgency(["Gabrovo",
"noBreakfast",
"no",
"3"])


