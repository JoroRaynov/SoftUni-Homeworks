function loadingBar(number) {


    let line = ['[..........]'];
    let lineSplited = line[0].split('')

    let rotation = number / 10;
    for (let i = 0; i < rotation; i++) {

        lineSplited[i + 1] = '%'

    }

    if (number === 0) {
        console.log(`${number}% ${line}`)
        console.log('Still loading...')
    } else if (number === 100) {
        console.log(`${number}% Complete!`)
        console.log(`${lineSplited.join('')}`);
    } else {
        console.log(`${number}% ${lineSplited.join('')}`);
        console.log('Still loading...');
    }

}

loadingBar(0)