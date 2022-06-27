function coockingByNums(num, ...operations){
    
    let result = Number(num);
    

    let operation = {
        chop: function(num){
            return result = result /= 2;

        },
        dice: function(num){
            return result = Math.sqrt(result)
        },
        spice: function(num){
            return result += 1;
             
        },
        bake: function(num){
            return result *= 3;
        },
        fillet: function(num){
            let percent = result * 0.2;
            return result -= percent;
        }
    }
    for (const op of operations) {
       console.log(operation[op](result)) 
    }
}
coockingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet');