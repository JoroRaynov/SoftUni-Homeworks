function solve(input){

let result = '';

    for (const item of input) {
        if(result[result.length-1] !== item){
            result += item;
        }
    }
console.log(result);
}
solve('aaaaabbbbbcdddeeeedssaa')