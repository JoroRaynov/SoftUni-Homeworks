function theImitGame(array) {

    let message = array.shift()

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split('|');

        if (command[0] === 'Decode') {
            return console.log(`The decrypted message is: ${message}`);
        }
        if (command[0] === 'Move') {
            let splited = message.split('');
            for (let i = 0; i < command[1]; i++) {
                let firstLetter = splited.shift();
                splited.push(firstLetter)
                message = splited.join('')
            }
        }
        if (command[0] === 'Insert') {
            let splited = message.split('');
            splited.splice(command[1], 0, command[2]);
            message = splited.join('');
        }

        if (command[0] === 'ChangeAll') {
            let splited = message.split('');
            for (let i = 0; i < message.length; i++) {
                if (splited[i] === command[1]) {
                    splited[i] = command[2];
                    message = splited.join('')
                }
            }
        }
    }
}
theImitGame([
    "aaaaaaaaaaaaaaaa",
    "ChangeAll|a|b",
    "Insert|0|abc",
    "Move|3",
    "Decode",
])