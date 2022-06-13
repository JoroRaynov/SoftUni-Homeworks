function solve(input){

let toLower = input.toLowerCase().split(' ')
let result = new Map();

    for (const item of toLower) {
        
        if(result.has(item) == false){
            result.set(item, 1)
        } else {
            result.set(item, result.get(item)+1)
        }
       
    }
    let objToArr = Array.from(result);
    let arr = [];
    objToArr.forEach((word) => {
        if(word[1] % 2 !== 0){
            arr.push(word[0]);
        }
    });
    console.log(arr.join(' '));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')