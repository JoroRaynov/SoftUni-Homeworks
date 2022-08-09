function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);
    let price = 0;

    switch (season) {
        case 'Spring':
            price = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            price = 4200;
            break;
        case 'Winter':
            price = 2600;
            break;
    }
    if (fisherman <= 6) {
        price = price * 0.90
    } else if (fisherman >= 7 && fisherman <= 11) {
        price = price * 0.85;
    } else {
        price = price * 0.75;
    }
    if (fisherman % 2 === 0 && season !== 'Autumn') {
        price = price * 0.95;
    }

    let diff = Math.abs(budget - price);

    if (budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
fishingBoat(["2000",
    "Winter",
    "13"
])
