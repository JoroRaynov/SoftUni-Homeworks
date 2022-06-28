function addRemove(commands) {

    let result = [];

    for (let i = 0; i < commands.length; i++) {
        let currCommand = commands[i];

        if (currCommand === 'add') {

            result.push(i + 1);
        } else {
            result.pop();
        }
    }

    if (result.length === 0) {
        console.log('Empty');
        return;
    }

    console.log(result.join('\n'));
}
addRemove(['remove',
    'remove',
    'remove'
]);