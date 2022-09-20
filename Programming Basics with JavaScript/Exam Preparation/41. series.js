function series(input){
    let index = 1
    let budget = Number(input[0]);
    let serials = Number(input[index++])
    let totalPrice = 0;
    

    for(let i = 0; i < serials; i++){
        let nameSerial = input[index++];
        let priceSerial = Number(input[index++]);
        if(nameSerial === 'Thrones'){
            priceSerial /= 2;
        } else if(nameSerial === 'Lucifer'){
            priceSerial *= 0.6;
        } else if(nameSerial === 'Protector'){
            priceSerial *= 0.7;
        } else if(nameSerial === 'TotalDrama'){
            priceSerial *= 0.8;
        } else if(nameSerial === 'Area'){
            priceSerial *= 0.9
        }
        totalPrice += priceSerial;
        
        
    }
        
    let diff = Math.abs(totalPrice - budget)
    if(budget >= totalPrice){
        console.log(`You bought all the series and left with ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);

    }
}
series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])
