function vacation(pplInGroup, typeGroup, dayOfTheWeek) {
    let price = 0;
    switch (typeGroup) {
        case 'Students':
            if (dayOfTheWeek === 'Friday') {
                price = pplInGroup * 8.45;
            } else if (dayOfTheWeek === 'Saturday') {
                price = pplInGroup * 9.80;
            } else if (dayOfTheWeek === 'Sunday') {
                price = pplInGroup * 10.46
            }
            break;
        case 'Business':
            if (dayOfTheWeek === 'Friday') {
                price = pplInGroup * 10.90;
            } else if (dayOfTheWeek === 'Saturday') {
                price = pplInGroup * 15.60;
            } else if (dayOfTheWeek === 'Sunday') {
                price = pplInGroup * 16;
            }
            break;
        case 'Regular':
            if (dayOfTheWeek === 'Friday') {
                price = pplInGroup * 15;
            } else if (dayOfTheWeek === 'Saturday') {
                price = pplInGroup * 20;
            } else if (dayOfTheWeek === 'Sunday') {
                price = pplInGroup * 22.50;
            }
            break;
    }
         if (typeGroup === 'Students' && pplInGroup >= 30) {
        price *= 0.85
    } else if (typeGroup === 'Business' && pplInGroup >= 100) {
        let priceForOne = price / pplInGroup;
        price -= (priceForOne * 10);
    } else if (typeGroup === 'Regular' && pplInGroup >= 10 && pplInGroup <= 20) {
        price *= 0.95;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(40, 'Regular', 'Saturday');