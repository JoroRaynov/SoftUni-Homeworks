function emojiDetector(text) {
    let someTxt = text.join('')
    let pattern = /([*]{2}|[:]{2})(?<emoji>[A-Z][a-z]{2,})\1/g
    let digits = someTxt.match(/\d+/g).join('');
    let matched = someTxt.match(pattern);
    let coolEmogi = [];
    // let find cool threshold
    let coolThreshold = 1;
    for (const char of digits) {
        coolThreshold *= Number(char);
    }
//check each match if is big from cool threshold push to coolEmogi
    for (const item of matched) {
        let totalCool = 0;
        let word = item.split(/[:\*]/g).join('');
        for (const ch of word) {
            let charAt = ch.charCodeAt(0);
            totalCool += charAt;
        }
        if (totalCool > coolThreshold) {
            coolEmogi.push(item)
        }
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${matched.length} emojis found in the text. The cool ones are:`);
    for (const line of coolEmogi) {
        console.log(line);

    }
}
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])