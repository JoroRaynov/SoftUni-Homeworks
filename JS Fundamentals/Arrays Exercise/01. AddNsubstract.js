function solve(array){

    let newArray = [];
    let sumOriginal = array.reduce((a,b) => a + b, 0);

for (let i = 0; i < array.length; i++) {

    if(array[i] % 2 == 0){
        newArray.push(array[i] + i)
    } else {
        newArray.push(array[i] - i)
    }
 }
 let sumNewArray = newArray.reduce((a,b) => a + b, 0)
console.log(newArray);
console.log(sumOriginal);
console.log(sumNewArray);

}
solve([])
