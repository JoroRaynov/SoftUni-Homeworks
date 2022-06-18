function plantDiscovery(input) {

    let collectionPlants = {};
    let plants = input.shift();


    for (let i = 0; i < plants; i++) {
        let tokens = input.shift().split('<->');
        let name = tokens[0];
        let rarity = tokens[1];
        collectionPlants[name] = {
            rarity,
            rating: []
        }
    }

    while (input[0] !== 'Exhibition') {
        let tokens = input.shift().split(/[\s:-]\s/);
        let command = tokens[0];
        let plantName = tokens[1].trim();
        let rating = Number(tokens[2]);
        if (collectionPlants.hasOwnProperty(plantName)) {
            if (command === 'Rate') {
                collectionPlants[plantName].rating.push(rating);
            } else if (command === 'Update') {
                collectionPlants[plantName].rarity = rating;
            } else if (command === 'Reset') {
                collectionPlants[plantName].rating.length = 0;
            }
        } else {
            console.log('error');

        }

    }
    console.log(`Plants for the exhibition:`);
    for (const item of Object.entries(collectionPlants)) {
        let name = item[0];
        let rarity = item[1].rarity;
        let rating = item[1].rating;
        if (rating == 0) {
            console.log(`- ${name}; Rarity: ${rarity}; Rating: 0.00`);
        } else {
            let averageP = rating.reduce((a, b) => a + b, 0) / rating.length;
            console.log(`- ${name}; Rarity: ${rarity}; Rating: ${(averageP).toFixed(2)}`);
        }
    }
}
plantDiscovery(["3",
    "Arnoldii<->0",
    "Woodii<->0",
    "Welwitschia<->0",
    "Rate: Woodii - 0",
    "Rate: Welwitschia - 0",
    "Rate: Arnoldii - 0",
    "Rate: Woodii - 0",
    "Update: Woodii - 0",
    "Reset: Arnoldii",
    "Reset: Woodii",
    "Exhibition"
])