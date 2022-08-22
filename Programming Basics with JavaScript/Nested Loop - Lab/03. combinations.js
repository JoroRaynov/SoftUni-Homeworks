function combinations(input){
    let n = Number(input[0])
    let counter = 0;

    for(let i = 0; i <= n; i++){
        for(let j = 0; j <= n; j++){
            for(let h = 0; h <= n; h++){
                result = i + j + h
                if(result === n){
                    counter++

                }
            }
        }
    }
console.log(counter);
}
combinations(['20'])