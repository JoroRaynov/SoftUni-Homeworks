function filmPremiere(input) {


    let nameProjection = input[0];
    let packageMovie = input[1];
    let countTickets = Number(input[2]);
    let price = 0;

    switch (nameProjection) {
        case 'John Wick':
            if (packageMovie === 'Drink') {
                price = countTickets * 12;
            } else if (packageMovie === 'Popcorn') {
                price = countTickets * 15;
            } else {
                price = countTickets * 19;
            }
            break;
        case 'Star Wars':
            if (packageMovie === 'Drink') {
                price = countTickets * 18;
            } else if (packageMovie === 'Popcorn') {
                price = countTickets * 25;
            } else {
                price = countTickets * 30;

            }
            break;
        case 'Jumanji':
            if (packageMovie === 'Drink') {
                price = countTickets * 9;
            } else if (packageMovie === 'Popcorn') {
                price = countTickets * 11;
            } else {
                price = countTickets * 14;

            }
            break;

    }

    if (nameProjection === 'Star Wars' && countTickets >= 4) {
        price *= 0.7;
    }
    if (nameProjection === 'Jumanji' && countTickets === 2) {
        price *= 0.85;
    }
    console.log(`Your bill is ${price.toFixed(2)} leva.`);
}
filmPremiere(["Jumanji",
"Menu",
"2"])

