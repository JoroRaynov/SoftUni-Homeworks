function addAndRemove(array){

    let newArr = []

for (let i = 0; i < array.length; i++) {

    if(array[i] == 'add'){
        newArr.push(i+1)
    } else if (array[i] == 'remove' && newArr.length > 0){
        newArr.length = newArr.length-1
    }

    
}
if(newArr.length < 1){
    console.log('Empty');
}
console.log(newArr.join(' '));
}
addAndRemove(['remove', 'remove', 'remove'])
