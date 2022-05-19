function train(array) {

    let wagons = array.shift().split(' ').map(Number)
    let capacity = array.shift();
    for (let index = 0; index < array.length; index++) {

        let comand = array[index].split(' ');

        if (comand[0] === 'Add') {
            wagons.push(comand[1]);

        } else {
            let passengers = Number(comand);

            for (let index = 0; index < wagons.length; index++) {
                if (wagons[index] + passengers <= capacity) {
                    wagons[index] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)