function lowestPrice(array) {

    let arrProducts = [];

    for (const line of array) {
        let [town, product, price] = line.split(' | ');
        if (arrProducts.filter(x => x.product === product).length > 0) {

            let obj = arrProducts.find(x => x.product === product);
            
            if (obj.price > Number(price)) {
                obj.price = Number(price);
                obj.town = town;
            }
        } else {
            let obj = {
                product,
                price: Number(price),
                town
            };
            arrProducts.push(obj);
        }

        
    }
    
    for (const item of arrProducts) {
        console.log(`${item.product} -> ${item.price} (${item.town})`);
        
    }
}
lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);