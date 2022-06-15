function solve(word, start, count){

let end = start + count;

let result = word.substring(start, end);
console.log(result);

}
solve('ASentence', 1, 8)