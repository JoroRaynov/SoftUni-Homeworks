function houseParty(array) {

    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        
        let tokens = array[i].split(' ');
        let name = tokens[0];

        if (tokens.length === 3) {
                if (!newArr.includes(name)) {
                newArr.push(name);
                } else {
                console.log(`${name} is already in the list!`);
                }

        } else if (tokens.length !== 3) {
                if (newArr.includes(name)) {
                let indexOfName = newArr.indexOf(name);
                newArr.splice(indexOfName, 1);
                } else {
                console.log(`${name} is not in the list!`);
            }
        }


    }
    console.log(newArr.join('\n'));
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);