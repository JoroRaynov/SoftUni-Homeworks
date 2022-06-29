function sorting(numbers){

    let sorted = numbers.slice().sort((a,b) => a-b);

    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if(i % 2 === 0){
            let shift = sorted.shift();
            result.push(shift)
            
        } else {
            let pop = sorted.pop();
            result.push(pop);
        }
    }
    return result;
}
sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);