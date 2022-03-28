function solve(input) {

    let plants = {};
    let collection = input.shift();

    for (let i = 0; i < collection; i++) {
        let tokens = input.shift().split('<->');
        let [plant, rarity] = tokens;

        plants[plant] = {
            rarity,
            rating: []
        }
    }

    while (input[0] !== 'Exhibition') {
        let tokens = input.shift().split(/[:-]/);
        let command = tokens[0];
        let name = tokens[1].trim();
        let p1 = Number(tokens[2])
        if (plants.hasOwnProperty(name)) {
            if (command === 'Rate') {
                plants[name].rating.push(p1)
            } else if (command === 'Update'){
                plants[name].rarity = p1;
            } else if (command === 'Reset'){
                plants[name].rating.length = 0;
            }
        } else {
            console.log('error');
        }


    }
    console.log('Plants for the exhibition:');
    for (const item of Object.entries(plants)) {
        let name = item[0];
        let rarity = item[1].rarity;
        let rating = item[1].rating;

        if(rating == 0){
        console.log(`- ${name}; Rarity: ${rarity}; Rating: 0.00`);

        } else {
            let avgRating = rating.reduce((partialSum, a) => partialSum + a, 0) / rating.length;
        console.log(`- ${name}; Rarity: ${rarity}; Rating: ${avgRating.toFixed(2)}`);

        }
      
    }
}
solve(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])

