function solve(input) {
    let powerCards = {
        '1': 10,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };
    let type = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }
    let collection = {};

    for (const line of input) {

        let [name, cards] = line.split(': ');
        if (!collection.hasOwnProperty(name)) {
            collection[name] = new Set();

        }
        cards = cards.split(', ')
      
        for (const card of cards) {
            collection[name].add(card);
        }
    }
    
    for (const name in collection) {
        let cards = collection[name]
        let totalPower = 0;
        for (const card of cards) {
            let cardPower =powerCards[card[0]];
            let cardType = type[card.slice(-1)];
            totalPower += cardPower * cardType;
        }
        collection[name] = totalPower;
        // console.log(`${name}: ${totalPower}`);
    }
   console.log(collection);
}


solve([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
])