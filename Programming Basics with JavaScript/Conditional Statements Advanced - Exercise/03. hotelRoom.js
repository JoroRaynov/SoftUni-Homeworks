function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let priceStudio = 0;
    let priceApartment = 0;

    if (month === 'May' || month === 'October') {

        if (nights > 7 && nights <= 14) {
            priceStudio = (nights * 50) * 0.95;
            priceApartment = nights * 65;

        } else if (nights > 14) {
            priceStudio = (nights * 50) * 0.70
            priceApartment = (nights * 65) * 0.90;

        } else {
            priceStudio = nights * 50;
            priceApartment = nights * 65;
        }
    } else if (month === 'June' || month === 'September') {
        if (nights > 14) {
            priceStudio = (nights * 75.20) * 0.80;
            priceApartment = (nights * 68.70) * 0.90;
        } else {
            priceStudio = nights * 75.20;
            priceApartment = nights * 68.70;
        }
    } else if (month === 'July' || month === 'August') {
        if (nights > 14) {
            priceStudio = nights * 76;
            priceApartment = (nights * 77) * 0.90;
        } else {
            priceStudio = nights * 76;
            priceApartment = nights * 77;

        }

    }

   
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
hotelRoom(["August",
    "20"
])
