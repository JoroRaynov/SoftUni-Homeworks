function poolDay(input){

let peoples = Number(input[0]);
let taxEnter = Number(input[1]);
let priceDeckChair = Number(input[2]);
let priceUmbrella = Number(input[3]);

let priceForEnter = peoples * taxEnter;
let countDeckChair = Math.ceil(peoples * 0.75);
let priceForDeckChair = countDeckChair * priceDeckChair;
let countUmbrella = Math.ceil(peoples / 2);
let umbrellaPrice = countUmbrella * priceUmbrella;

let totalPrice = priceForEnter + priceForDeckChair + umbrellaPrice;
console.log(`${totalPrice.toFixed(2)} lv.`);


}
poolDay(["50",
"6",
"8",
"4"])
