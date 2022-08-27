function test1(arr){

    let line = '';

    for(let i = 0; i < arr.length; i++){

        const n = arr[i];
        line += n + ', ';
        
    }
    console.log(line);
    console.log(arr.join(', '))
    
}test1(['1', '2', '3']);