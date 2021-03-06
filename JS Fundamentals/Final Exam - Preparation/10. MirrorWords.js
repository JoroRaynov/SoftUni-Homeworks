function mirrorWords(words) {

    let pattern = /(#|@)([A-Za-z][A-Za-z]{2,})\1\1([A-Za-z][A-Za-z]{2,})\1/g;
    let matchedWords = [];
    let match = pattern.exec(words);
    let counter = 0;
    while (match !== null) {
        counter++
        let firstWord = match[2];
        let check = match[3].split('').reverse().join('');
        let secondWord = match[3]
        if (firstWord === check) {
            matchedWords.push(firstWord + ' <=> ' + secondWord);
        }
        match = pattern.exec(words);
    }

    if (counter < 1) {
        console.log('No word pairs found!');

    } else {
        console.log(`${counter} word pairs found!`);
    }
    if (matchedWords.length < 1) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(matchedWords.join(', '))
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])