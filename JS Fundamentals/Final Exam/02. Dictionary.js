function solve(input) {

    let wordAndDefinition = input[0].split(' | ');
    let onlyWords = input[1].split(' | ');
    let collection = {};
    let lastCommand = input.pop()

    for (const line of wordAndDefinition) {
        let tokens = line.split(': ');
        let word = tokens[0];
        let text = tokens[1];
        if (!collection.hasOwnProperty(word)) {
            collection[word] = [text]
        } else {
            collection[word].push(text);
        }
    }
    if (lastCommand === 'Test') {
        for (const word of onlyWords) {
            if (collection.hasOwnProperty(word)) {
                    console.log(`${word}:`);
                    for (const line of collection[word]) {
                        console.log(` -${line}`);
                    }
                }
            }
        } else if (lastCommand === 'Hand Over') {
            let words = Object.keys(collection);
            let result = '';
            for (const item of words) {
                result += item + ' ';
            }
            console.log(result.trimEnd());
    }
}
solve(["programmer: an animal, which turns coffee into code | developer: a magician",
"fish | domino",
"Hand Over"])
