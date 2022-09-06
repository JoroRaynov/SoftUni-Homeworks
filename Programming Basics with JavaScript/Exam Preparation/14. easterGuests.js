function easterGuests(input){

    let guests = Number(input[0]);
    let budget = Number(input[1]);

    let numEasterBreads = Math.ceil(guests / 3);

    let numEggs = guests * 2;

    let priceEasterBread = numEasterBreads * 4;
    let pricEggs = numEggs * 0.45;

    let totalPrice = priceEasterBread + pricEggs;

    let diff = Math.abs(budget - totalPrice);

    if(budget >= totalPrice){
        console.log(`Lyubo bought ${numEasterBreads} Easter bread and ${numEggs} eggs.`);
        console.log(`He has ${diff.toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`); 
    }




}
easterGuests(["10",
"35"])
