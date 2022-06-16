function solve(text) {

    let result = [];
    text = text.split(' ');
    for (const word of text) {
        if (word.startsWith('#') && word.length > 1) {
            result.push(word.slice(1));
        }
    }
    let finalResult = [];
    for (const word of result) {
        let flag = true;

        for (let i = 0; i < word.length; i++) {
            let charCode = word.charCodeAt(i);
            if (!(charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123)) {
                flag = false
            }
        }
        if (flag) {

            finalResult.push(word);
        }
    }

    finalResult.forEach(x => console.log(x))
}
solve('Nowadays everyone uses # to tag a #679 word in #socialMedia')