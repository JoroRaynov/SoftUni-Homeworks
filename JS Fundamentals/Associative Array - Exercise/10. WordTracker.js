function solve(input) {
    let tokens = input.shift().split(' ');
    let collection = {};
    
    for (const word of tokens) {
        collection[word] = 0;
    }
    for (const word of input) {

        if (collection.hasOwnProperty(word)) {
            collection[word]++;
        }
    }
    let sorted = Object.entries(collection).sort((a, b) => b[1] - a[1]);
    for (const [word, qty] of sorted) {
        console.log(`${word} - ${qty}`);
    }
}
solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
])