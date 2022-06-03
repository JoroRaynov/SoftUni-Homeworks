function counterStrike(array) {

    let health = Number(array.shift());
    let count = 0;


    while (array[0] !== 'End of battle') {

        let distance = array.shift();
        if (health < distance) {

            return console.log(`Not enough energy! Game ends with ${count} won battles and ${health} energy`);
        } else {
            count++
            health -= distance;
            if (count % 3 === 0) {
                health += count;
            }
        }

    }
    if (array[0] === 'End of battle') {
        console.log(`Won battles: ${count}. Energy left: ${health}`);
    }
}
counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"
])