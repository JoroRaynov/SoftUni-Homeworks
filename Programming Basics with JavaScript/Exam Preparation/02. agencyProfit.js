function agencyProfit(input){

let name = input[0];
let adultTickets = Number(input[1]);
let kidsTickets = Number(input[2]);
let priceAdult = Number(input[3]);
let taxService = Number(input[4]);

let kidsPrice = priceAdult * 0.3 + taxService
let adults = priceAdult + taxService;

let totalPrice = ((kidsPrice * kidsTickets) + (adultTickets * adults)) * 0.2


console.log(`The profit of your agency from ${name} tickets is ${totalPrice.toFixed(2)} lv.`);


}
agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])
