function solve(input) {

    let storage = new Map();

    for (const line of input) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        let existing = 0;
        if(storage.has(product)) {
            existing = storage.get(product);
        } 

            storage.set(product, quantity + existing);
        


    }
    for (const item of storage) {
        let product = item[0];
        let quantity = item[1];
        console.log(`${product} -> ${quantity}`);
    }
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
])