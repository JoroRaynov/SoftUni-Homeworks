function theLift(array) {

    let peopleOnQueue = Number(array.shift())
    let vagons = array[0].split(' ').map(Number)
    let isHaveSpace = false;

    for (let i = 0; i < vagons.length; i++) {

        if (vagons[i] < 4) {

            let freeSpace = Math.abs(4 - vagons[i]);

            if (freeSpace > peopleOnQueue) {
                freeSpace = peopleOnQueue;
            }
            vagons[i] += freeSpace;
            peopleOnQueue -= freeSpace;
        }
        if (peopleOnQueue == 0) {
            break;
        }
    }

    for (let i = 0; i < vagons.length; i++) {
        if (vagons[i] < 4) {
            isHaveSpace = true;
            break;
        }

    }
    if (isHaveSpace) {
        console.log('The lift has empty spots!');
        console.log(vagons.join(' '));
    }
    if (!isHaveSpace && peopleOnQueue == 0) {
        console.log(vagons.join(' '));
    }

    if (peopleOnQueue > 0) {
        console.log(`There isn't enough space! ${peopleOnQueue} people in a queue!`);
        console.log(vagons.join(' '));
    }
}

theLift(["20", "0 0 0 0 0"])