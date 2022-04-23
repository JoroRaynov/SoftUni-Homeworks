function cinemaVaucher(input) {

    let voucher = Number(input[0]);
    let index = 1;
    let command = input[index++];
    let counterTickets = 0;
    let counterAny = 0;
    let price = 0;


    while (command !== 'End') {
        let currentProduct = command;
        if (currentProduct.length > 8) {
            price = currentProduct.charCodeAt(0) + currentProduct.charCodeAt(1);
            voucher -= price;
            if (voucher > 0) {
                counterTickets++
            }
        } else if (currentProduct.length <= 8) {
            price = currentProduct.charCodeAt(0)
            voucher -= price;
            if (voucher > 0) {
                counterAny++
            }
        }
        if (voucher < 0) {

            console.log(`${counterTickets}`);
            console.log(`${counterAny}`);
            break;
        }
        command = input[index++]
    }
    if (command === 'End') {
        console.log(`${counterTickets}`);
        console.log(`${counterAny}`);

    }

}
cinemaVaucher(["300",
    "Captain Marvel",
    "popcorn",
    "Pepsi"
])