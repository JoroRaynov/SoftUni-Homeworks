function solve(text, word) {
    text = text.split(" ");
    let result = text.filter(x=> 
        x === word);
    
    console.log(result.length);

}
solve('This is a word and it also is a sentence',
    'is'
)