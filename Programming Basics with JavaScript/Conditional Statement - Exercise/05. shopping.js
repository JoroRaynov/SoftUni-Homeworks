function shopping(input) {

    let budget = Number(input[0]);
    let broiVideoC = Number(input[1]);
    let broiProcesori = Number(input[2]);
    let broiRam = Number(input[3]);


    let priceVC = broiVideoC * 250;
    let priceProcesori = (priceVC * 0.35) * broiProcesori;
    let priceRam = (priceVC * 0.10) * broiRam;

    let totalPrice = priceVC + priceProcesori + priceRam;


    if (broiVideoC >= broiProcesori) {
        totalPrice = totalPrice * 0.85
    } else {
        totalPrice = totalPrice
    }

    let diff = Math.abs(budget - totalPrice).toFixed(2);


    if (budget >= totalPrice) {
        console.log(`You have ${diff} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff} leva more!`);
    }
}


shopping(["920.45",
    "3",
    "1",
    "1"
])