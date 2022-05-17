function negativeOrPositiveN(array){

    let result = [];

    for (const element of array) {
        if(element < 0){
            result.unshift(element);
            
        } else {
            result.push(element);
            

        }

    }
    for (const element of result) {
        console.log(element);
    }



}
negativeOrPositiveN(['3', '-2', '0', '-1'])