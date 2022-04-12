function movingTarget(array) {

    let targets = array.shift().split(' ').map(Number);

    while (array[0] !== 'End') {

        let tokens = array.shift().split(' ');
        let command = tokens.shift();
        let myIndex = Number(tokens[0]);
        let power = Number(tokens[1]);

        if (command === 'Shoot') {
            if (myIndex >= targets.length || myIndex < 0) {
                continue;

            } else {
                targets[myIndex] -= power;
                if (targets[myIndex] <= 0) {
                    targets.splice(myIndex, 1);
                }
            }
        } else if (command === 'Add') {
            if (myIndex >= targets.length || myIndex < 0) {
                console.log('Invalid placement!');
                continue;
            } else {
                targets.splice(myIndex, 0, power);
            }
        } else if (command === 'Strike') {
            if (myIndex - power < 0 || myIndex + power >= targets.length) {
                console.log('Strike missed!');
                continue;
            } else {
                let removeLength = power * 2 + 1;
                targets.splice(myIndex - power, removeLength);
            }
        }


    }
    console.log(targets.join('|'));

}
movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"
])