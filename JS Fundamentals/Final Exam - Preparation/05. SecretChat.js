function solve(input) {

    let message = input.shift();

    for (const line of input) {
        let tokens = line.split(':|:');
        let command = tokens[0];
        if(command === 'Reveal'){
            console.log(`You have a new text message: ${message}`);
            break;
        }
        if (command === 'InsertSpace') {
            let index = Number(tokens[1]);

            let leftSide = message.slice(0, index);
            let rightSide = message.slice(index);
            message = leftSide + ' ' + rightSide;
            console.log(message);
        } else if (command === 'Reverse') {
            let substring = tokens[1];
            if (message.includes(substring)) {
                let index = Number(message.indexOf(substring));
                let reverse = message.slice(index, index + substring.length);
                let leftSide = message.slice(0, index);
                let rightSide = message.slice(index + substring.length);
                reverse = reverse.split('').reverse().join('');
                message = leftSide + rightSide + reverse;
                console.log(message);
            } else {
                console.log('error');
            }
        } else if(command === 'ChangeAll'){
            let substring = tokens[1];
            let replacement = tokens[2];
            message = message.replace(new RegExp(substring, 'g'), replacement);
            console.log(message);
        }

    }


}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])