function equalArr(arrOne, arrTwo){

    
    let sum = 0;
    let count = 0;
    let bool = false;

    for (let i = 0; i < arrOne.length; i++) {
        count ++
        
        if(arrOne[i] === arrTwo[i]){
            bool = true;
            sum += Number(arrOne[i]);

        }  
      }

if(bool){
    console.log(`Arrays are identical. Sum: ${sum}`);
} else {
    console.log( `Arrays are not identical. Found difference at ${count} index`);
}

}
equalArr(['1','2','3','4','5'], ['1','2','4','4','5'])