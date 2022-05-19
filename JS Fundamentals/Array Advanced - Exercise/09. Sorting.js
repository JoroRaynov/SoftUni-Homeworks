function sorting(array){

array.sort((a,b) => b-a);

let myArray = [];

    while(array.length != 0){
    let first = array.shift();
    let last = array.pop();
    myArray.push(first);
    myArray.push(last);

    }
console.log(myArray.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])