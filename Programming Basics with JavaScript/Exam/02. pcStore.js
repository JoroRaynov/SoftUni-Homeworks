function rudolf(input){

    let numDays = Number(input[0]);
    let food = Number(input[1]);
    let firstRudolf = Number(input[2]);
    let secondRudolf = Number(input[3]);
    let thirdRudolf = Number(input[4]);

    let foodFirts = numDays * firstRudolf;
    let foodSecond = numDays * secondRudolf;
    let foodThird = numDays * thirdRudolf;
    let totalNeedFood = foodFirts + foodSecond + foodThird

    let diff = Math.abs(totalNeedFood - food);
    if(food >= totalNeedFood){
        console.log(`${Math.floor(diff)} kilos of food left.`);
    }else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
   



}
rudolf(["5",
"10",
"2.1",
"0.8",
"11"])
