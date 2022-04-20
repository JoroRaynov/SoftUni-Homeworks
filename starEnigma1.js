function solve(input) {

    let matchMsg = /@([A-Z][a-z]+)(?:[^@\-!:>]*)?:([\d]+)!(A|D)!(?:[^@\-!:>]*)?->(\d+)/
    let messege = Number(input.shift());
    let counterLetters = /[star]/gi;
    let decryptedMsg = [];
    let attacked = [];
    let destroyed = [];
    for (let i = 0; i < messege; i++) {
        let string = '';

        let cryptedMsg = input.shift();
        let cryptedMsgLength = cryptedMsg.match(counterLetters).length;
        if (cryptedMsgLength !== null) {
            cryptedMsg = cryptedMsg.split('');
            for (const char of cryptedMsg) {
                let charCode = char.charCodeAt(0) - cryptedMsgLength;
                string += String.fromCharCode(charCode);
            }
            decryptedMsg.push(string);
        }
    }
    for (const item of decryptedMsg) {
        let matched = item.match(matchMsg);
        if (matched) {

            if (item.includes('!A!')) {
                attacked.push(matched[1])
            } else if (item.includes('!D!')) {
                destroyed.push(matched[1]);
            }
        }
    }
    attacked = attacked.sort((a,b)=> a.localeCompare(b));
    destroyed = destroyed.sort((a,b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attacked.length}`);
    for (const item of attacked) {
        console.log(`-> ${item}`);
    }
    console.log(`Destroyed planets: ${destroyed.length}`);
    for (const item of destroyed) {
        console.log(`-> ${item}`);
    }
}
solve(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
])