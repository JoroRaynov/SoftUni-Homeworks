function censoredWord(text, word) {
    
    // while(text.indexOf(word) !== -1) {
    //     text = text.replace(word, '*'.repeat(word.length));
    // }
   text = text.split(word)
   text = text.join('*'.repeat(word.length));
    console.log(text)
}
censoredWord('A small sentence with some words', 'small')
