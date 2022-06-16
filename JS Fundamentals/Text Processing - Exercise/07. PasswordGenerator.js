function solve(array) {

    let STRING = array[0].concat(array[1]).split('')
    let ORANGE = array[2].toUpperCase();
    let result = [];
    let counter = 0;
    let vowelCount = 0;

    // "a", "e", "i", "o", "u"
    for (let i = 0; i < ORANGE.length; i++) {
        if (counter > STRING.length-1) {

            break;
        }
        let currChar = STRING[counter];
        if (vowelCount === ORANGE.length) {
            vowelCount = 0;
        }

        if (currChar === 'a' || currChar === 'e' || currChar === 'i' || currChar === 'o' || currChar === 'u') {
            STRING[counter] = ORANGE[vowelCount];
            vowelCount++
        }

        if (i == ORANGE.length - 1) {
            i = -1;
        }
        counter++
    }
    let pass = STRING.reverse().join('');

    console.log(`Your generated password is ${pass}`);
}
solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    )
