function solve(word, text) {

    let sentence = word.toLowerCase();
    let textToLower = text.toLowerCase();
    let sentenceArr = textToLower.split(' ')


    if(sentenceArr.includes(sentence)){
        console.log(sentence);
       
    } else {
        console.log(`${word} not found!`);
    }

}
solve('python',
'JavaScript is the javascript bestpython programming language'
)