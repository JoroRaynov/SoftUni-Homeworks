function storeProv(currStock, ordered) {

    let products = {};

    for (let i = 0; i < currStock.length; i += 2) {
        let product = currStock[i];
        let quantity = Number(currStock[i + 1]);
        products[product] = quantity;
    }

    for (let i = 0; i < ordered.length; i += 2) {
        let product = ordered[i];
        let quantity = Number(ordered[i + 1]);
        if (products[product] === undefined) {
            products[product] = quantity;

        } else {
            products[product] += quantity;
        }
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product]}`);

    }
}
storeProv([
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
)