function catalogue(products) {
    let obj = {};

    for (const product of products) {
        let [name, price] = product.split(' : ');
        obj[name] = Number(price);
    }

    let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    let char = '';
    for (const item of sorted) {
        if (char !== item[0].charAt(0)) {
            char = item[0].charAt(0).toUpperCase();

            console.log(char);
        }
        console.log(`  ${item[0]}: ${item[1]}`);
    }
}
catalogue(['Banana : 2',
        'Rubics Cube: 5 ',
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10'
    ]


);