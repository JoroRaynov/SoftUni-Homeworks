function specialNumbers(n){

    for(let i = 1; i <= n; i++){
        
        
        
        let second = i % 10
        let first = parseInt(i / 10);
        let result = first + second;


        if(result === 5 || result === 7 || result === 11){
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        
       
        
    }

    
}
specialNumbers(20);
