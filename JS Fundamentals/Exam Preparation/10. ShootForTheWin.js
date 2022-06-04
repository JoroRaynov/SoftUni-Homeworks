function shootForTheWin(array) {

    let targets = array.shift().split(' ').map(Number)
    let currentIndex = Number(array.shift());
    let counter = 0;

    while (currentIndex !== 'End') {
        currentIndex = Number(currentIndex)
        let currTarget = targets[currentIndex];

        if (targets[currentIndex] === -1 || currentIndex < 0 || currentIndex >= targets.length) {
            currentIndex = array.shift();

            continue;

        } else {
            counter++
            targets[currentIndex] = -1;
            for (let index = 0; index < targets.length; index++) {
                if (targets[index] === -1) {
                    continue;

                } else {
                    if (targets[index] > currTarget) {
                        targets[index] -= currTarget;
                    } else if (targets[index] <= currTarget) {
                        targets[index] += currTarget;

                    }
                }

            }
        }
        currentIndex = array.shift();
    }

    console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);
}
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"
])