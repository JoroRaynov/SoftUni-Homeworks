function solve(text) {
    let endResult = [];
    // text = text.split('')
    for (let i = 0; i < text.length; i++) {

        let currChar = text[i];
        if (currChar === currChar.toUpperCase()) {
            endResult.push(currChar); 
        } else if(currChar === currChar.toLowerCase()) {
            endResult[endResult.length - 1] += currChar
        }

    }

console.log(endResult.join(', '));
}
solve('ThisIsSoAnnoyingToDo')