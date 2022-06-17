function solve(words, text) {
    
    let tokens = words.split(', ');
    for (const word of tokens) {

        let template = '*'.repeat(word.length); 
        text = text.replace(template, word);
    }
console.log(text);
}
solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)