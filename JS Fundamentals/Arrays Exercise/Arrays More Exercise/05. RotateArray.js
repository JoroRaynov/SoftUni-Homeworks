function rotateArray (array){

let rotation = array.pop()
let newArr = [];


for (let i = 0; i < rotation; i++) {

    let lastEl = array.pop()
 
    array.unshift(lastEl);
    
}
console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4', '2'])