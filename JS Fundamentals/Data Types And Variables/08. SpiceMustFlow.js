function spiceMustFlow(startingYield){

    let dayCounter = 0;
    let mined = 0;
    while(startingYield >= 100){
    dayCounter++
    mined += startingYield;
    mined -= 26
    startingYield -= 10;
    
}
if(startingYield < 100 && dayCounter == 0){
    console.log(dayCounter);
console.log(mined);
} else {
    mined -=26
    console.log(dayCounter);
console.log(mined);
}
}
spiceMustFlow(111)