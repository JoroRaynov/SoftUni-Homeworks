function solve(input) {

    let message = input.shift();

    for (const line of input) {
        let tokens = line.split(':|:');
        let command = tokens[0];
        if (command === 'Reveal') {
            break;
        }
        if (command === 'InsertSpace') {
            let index = tokens[1];
            let leftPart = message.slice(0, index);
            let rightPart = message.slice(index);
            message = leftPart + ' ' + rightPart;
            console.log(message);

        } else if (command === 'Reverse') {
            let substr = tokens[1];
            let index = message.indexOf(substr);
            if (index === -1) {
                console.log('error');
            } else {
                let leftPart = message.slice(0, index);
                let rightPart = message.slice(index + substr.length);
                let toReverse = message.slice(index, index + substr.length).split('').reverse().join('');
                message = leftPart + rightPart + toReverse;
                console.log(message);
            }
        } else if (command === 'ChangeAll') {
            let pattern = tokens[1]
            let charForReplace = new RegExp(pattern, 'g');
            let replacer = tokens[2];
            message = message.replace(charForReplace, replacer)
            console.log(message);

        }
    }

    console.log(`You have a new text message: ${message}`);
}
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])