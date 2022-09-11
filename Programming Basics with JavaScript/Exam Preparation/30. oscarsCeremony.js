function oscarsCeremony(input){

    let rentForHall = Number(input[0]);

    let priceFiguriens = rentForHall * 0.70;
    let keturing = priceFiguriens * 0.85;
    let sound = keturing / 2;
    var totalCosts = rentForHall + priceFiguriens + keturing + sound;

    console.log(`${totalCosts.toFixed(2)}`);



}
oscarsCeremony(["3500"])