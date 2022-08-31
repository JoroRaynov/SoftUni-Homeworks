function careOfDog(input){

    let index = 0;
    let foodInKilos = Number(input[index++]);
    let foodInGR = foodInKilos * 1000;
    let command = input[index++];
    let totaleatedFood = 0;

    while(command !== 'Adopted'){
        let eatedFoodGR = Number(command);
        totaleatedFood += eatedFoodGR;
        command = input[index++]

    }
    let diff = Math.abs(foodInGR - totaleatedFood);

    if(totaleatedFood <= foodInGR){
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`);
    }
    


}
careOfDog(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])

