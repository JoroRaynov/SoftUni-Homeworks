function vetParking(input){

    let days = Number(input[0]);
    let hoursForDay = Number(input[1]);
    let totalSum = 0;
    

    for(let i = 1; i <= days; i++){
        let price = 0;
        for(let j = 1; j <= hoursForDay; j++){
            if(i % 2 === 0 && j % 2 !== 0){
                price += 2.50;
            } else if(i % 2 !== 0 && j % 2 === 0){
                price += 1.25;
            } else {
                price += 1.00;
            }
        }
        totalSum += price
        console.log(`Day: ${i} - ${price.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);


}
vetParking(["5", "2"])
