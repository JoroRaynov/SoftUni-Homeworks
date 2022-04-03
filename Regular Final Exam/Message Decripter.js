function solve(input) {

// let pattern = /([\$|%])[A-Z][a-z]{2,}\1[\:]\s{1}\[\d+\]\|\[\d+\]\|\[\d+\]\|/g;
let pattern = /^([\$|%])[A-Z][a-z]{2,}\1[\:]\s{1}(\[\d+\]\|){3}$/g;

let totalLines = input.shift();
let digiPattern = /\d+/g;

    for (let i = 0; i < totalLines; i++) {
        let match = input[i].match(pattern);
        if(match !== null){
            let tokens = match.join('').split(': ');
            let word = tokens[0].split(/[%$]/g).join('');
            let digits = tokens[1].split(/[\[\]\|]/).join(',')
            let OnlyDig =digits.match(digiPattern).map(Number)
            let msg = '';
            for (const item of OnlyDig) {
                msg += String.fromCharCode(item)
            }
            console.log(`${word}: ${msg}`);
        } else {
            console.log('Valid message not found!');
        }
    }
}
solve(["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"
]);