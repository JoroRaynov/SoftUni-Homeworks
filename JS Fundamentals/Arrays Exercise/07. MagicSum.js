function msum(array, n){

for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
        if(array[i] + array[j] == n){
            console.log(`${array[i]} ${array[j]}`);
        } 
    }
    
    
}

}
msum([1, 7, 6, 2, 19, 23], 8)