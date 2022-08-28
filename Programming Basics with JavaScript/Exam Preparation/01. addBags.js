function addBags(input){

    let priceLuggage20KG = Number(input[0]);
    let kgLuggage = Number(input[1]);
    let daysUntilFly = Number(input[2]);
    let numLuggage = Number(input[3]);
    let price = 0;

    if(kgLuggage < 10){
        price = priceLuggage20KG * 0.20
    }else if(kgLuggage >= 10 && kgLuggage <= 20){
        price = priceLuggage20KG / 2;
    } else {
      price = priceLuggage20KG 
    }

if(daysUntilFly > 30){
    price= price * 1.10;
} else if(daysUntilFly >= 7 && daysUntilFly <= 30){
    price = price * 1.15;
} else {
    price = price * 1.40;
}
let totalPrice = price * numLuggage 
console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}
addBags(["30",
"18",
"15",
"2"])
