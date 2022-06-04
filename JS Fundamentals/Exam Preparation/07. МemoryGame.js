function memoryGame(array) {
    let index = 0
    let elemento = array.shift().split(' ')
    let counter = 0
    let turnCounter = 0;
    let command = array[index++]
    let start = 0;
    for (let i = 0; i <= elemento.length; i++) {
        counter++
        if (array[i] === 'end') {
            break
        }
        let myIndexes = array[i].split(' ')
        let firstIndex = myIndexes[0]
        let secondIndex = myIndexes[1];
        if (firstIndex == secondIndex || firstIndex < 0 || secondIndex < 0 || firstIndex >= elemento.length || secondIndex >= elemento.length) {
            console.log('Invalid input! Adding additional elements to the board');
            let midleIndex = (elemento.length / 2);
            let word = `-${turnCounter}a`
            elemento.splice(midleIndex, 0, `-${i+1}a`)
            elemento.splice(midleIndex + 1, 0, `-${i+1}a`)

            continue;

        }

        for (let j = 0; j < 1; j++) {
            if (elemento[firstIndex] == elemento[secondIndex]) {
                console.log(`Congrats! You have found matching elements - ${elemento[j]}!`);
                elemento = elemento.filter(n => n != elemento[myIndexes[j]])

            } else {
                console.log('Try again!');
            }

        }
        if (elemento.length == 0) {
            return console.log(`You have won in ${counter} turns!`);
        }

    }
    if (elemento.length > 0) {
        console.log('Sorry you lose :(');
        console.log(elemento.join(' '));
    }
}



memoryGame([
        "a 2 4 a 2 4",
        "4 0",
        "0 2",
        "0 1",
        "0 1",
        "end"
    ]


)