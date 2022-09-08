function fruitMarket(arg1, arg2, arg3, arg4, arg5){
let priceStrawberry = arg1;
let bananasInKilo = arg2;
let orangesInKilo = arg3;
let raspbrrryInKilo = arg4;
let strawBerryInKillo = arg5;

let raspberryPrice = priceStrawberry / 2;
let orangePrice = raspberryPrice * 0.6;
let bananasPrice = raspberryPrice * 0.2;

let sumForRaspberry = raspbrrryInKilo * raspberryPrice;
let sumForBananas = bananasInKilo * bananasPrice;
let sumForOranges = orangesInKilo * orangePrice;
let sumForStrawberry = strawBerryInKillo * priceStrawberry;

let totalNeededMoney = sumForRaspberry + sumForBananas + sumForOranges + sumForStrawberry;
console.log(totalNeededMoney.toFixed(2));
}
fruitMarket("48", "10", "3.3", "6.5", "1.7")