function reverseArrayOfNum(n, array){

array.length = n;

let result = array.reverse().join(' ')

console.log(result);
}
reverseArrayOfNum(4, [-1, 20, 99, 5]);