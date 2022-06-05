function valentinesDay(array) {

    let houses = array.shift().split('@').map(Number);
    let indexOfCopid = 0;

    while (array[0] !== 'Love!') {

        let tokens = array.shift().split(' ');
        let jumpLenght = Number(tokens[1]);
        indexOfCopid += jumpLenght;

        if (indexOfCopid >= houses.length) {
            indexOfCopid = 0;
        }
        if (houses[indexOfCopid] === 0) {
            console.log(`Place ${indexOfCopid} already had Valentine's day.`);
        } else {
            houses[indexOfCopid] -= 2;
            if (houses[indexOfCopid] === 0) {
                console.log(`Place ${indexOfCopid} has Valentine's day.`);
            }
        }
    }

    console.log(`Cupid's last position was ${indexOfCopid}.`);
    
    let counter = 0;

    for (let index = 0; index < houses.length; index++) {
        if (houses[index] !== 0) {
            counter++
        }

    }
    if (counter === 0) {
        console.log("Mission was successful.");
    } else if (counter !== 0) {
        console.log(`Cupid has failed ${counter} places.`);
    }

}


valentinesDay(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"
])