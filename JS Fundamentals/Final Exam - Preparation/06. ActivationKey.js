function solve(input) {

    let rawActivationKey = input.shift();

    for (const line of input) {
        let tokens = line.split('>>>');
        let command = tokens[0];
        if (command === 'Generate') {
            console.log(`Your activation key is: ${rawActivationKey}`);
        }
        if (command === 'Contains') {
            let substring = tokens[1];
            if (rawActivationKey.includes(substring)) {
                console.log(`${rawActivationKey} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (command === 'Flip') {
            let upperOrLower = tokens[1];
            let startIndex = tokens[2];
            let endIndex = tokens[3];
            let leftSide = rawActivationKey.slice(0, startIndex);
            let rightSide = rawActivationKey.slice(endIndex);
            let tochange = rawActivationKey.substring(startIndex, endIndex);
            if (upperOrLower === 'Lower') {
                tochange = tochange.toLowerCase();
                rawActivationKey = leftSide + tochange + rightSide;
                console.log(rawActivationKey);
            } else if (upperOrLower === 'Upper') {
                tochange = tochange.toUpperCase();
                rawActivationKey = leftSide + tochange + rightSide;
                console.log(rawActivationKey);
            }

        } else if (command === 'Slice') {
            let startIndex = tokens[1];
            let endIndex = tokens[2];
            let leftSide = rawActivationKey.slice(0, startIndex);
            let rightSide = rawActivationKey.slice(endIndex);
            rawActivationKey = leftSide + rightSide;
            console.log(rawActivationKey);
        }

    }


}
solve(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
])