function solve(input) {

    let message = input.shift();

    for (const line of input) {
        let tokens = line.split(' ');
        let command = tokens[0];
        if (command === 'Finish') {
            break;
        }
        if (command === 'Replace') {
            let currChar = tokens[1];
            let newChar = tokens[2]
            message = message.replace(new RegExp(currChar, 'g'), newChar);
            console.log(message);
        } else if (command === 'Cut') {

            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if (startIndex >= 0 && startIndex < message.length && endIndex >= 0 && endIndex < message.length) {

                let leftSide = message.slice(0, startIndex);
                let rightSide = message.slice(endIndex + 1);
                message = leftSide + rightSide;
                console.log(message);
            } else {
                console.log('Invalid indices!');
            }

        } else if (command === 'Make') {
            let upperOrLoower = tokens[1];
            if (upperOrLoower === 'Upper') {
                message = message.toUpperCase();
                console.log(message);
            } else if (upperOrLoower === 'Lower') {
                message = message.toLowerCase();
                console.log(message);
            }
        } else if (command === 'Check') {
            let susbsr = tokens[1];
            if (message.includes(susbsr)) {
                console.log(`Message contains ${susbsr}`);
            } else {
                console.log(`Message doesn't contain ${susbsr}`);
            }
        } else if (command === 'Sum') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if (startIndex >= 0 && startIndex < message.length && endIndex >= 0 && endIndex < message.length) {
                let substring = message.slice(startIndex, endIndex + 1);
                let sumOfChar = 0;
                for (const ch of substring) {
                    let charAt = Number(ch.charCodeAt(0));
                    sumOfChar += charAt
                }
                console.log(sumOfChar);
            } else {
                console.log('Invalid indices!');
            }

        }
    }

}
solve(["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"
])
