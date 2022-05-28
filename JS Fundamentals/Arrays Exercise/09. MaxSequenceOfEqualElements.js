function maxSeqOfEqEl(array){

    let result = [];

for (let i = 0; i < array.length; i++) {

    let arr = [array[i]];

    for (let j = i+1; j < array.length; j++) {
        if(array[i] == array[j]) {
            arr.push(array[j])
        } else {
            break;
        }
        
    }
    if(result.length < arr.length){
        result = arr;
    }
}
console.log(result.join(' '));

}
maxSeqOfEqEl([0, 1, 1, 5, 2, 2, 6, 3, 3])