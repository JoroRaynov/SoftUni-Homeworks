function sumFirstLast(array){

let firstEl = Number(array.shift());

let secondEl = Number(array.pop());

return firstEl + secondEl;


}
sumFirstLast(['5', '10'])