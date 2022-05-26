function swap(input){

let lastIndex = input.length - 1;

for(let i = 0; i < input.length / 2; i++){

    let temporary = input[i];

    input[i] = input[lastIndex - i];

    input[lastIndex - i] = temporary;

}
console.log(input.join(''));
}

swap(['a', 'b', 'c', 'd', 'e'])