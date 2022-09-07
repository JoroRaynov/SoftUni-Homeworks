function familyTrip(input){

let budget = Number(input[0]);
let nights = Number(input[1]);
let priceForNight = Number(input[2]);
let percAdditionalCosts = Number(input[3]);

let costsForNights = priceForNight * nights;

if(nights > 7){
    costsForNights *= 0.95;

}
let additionalCosts = (budget * percAdditionalCosts) / 100;
let totalNeedMoney = costsForNights + additionalCosts;

let diff = Math.abs(budget - totalNeedMoney);
if(totalNeedMoney <= budget){
    console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
} else {
    console.log(`${diff.toFixed(2)} leva needed.`);
}


}familyTrip(["500",
"7",
"66",
"15"])
