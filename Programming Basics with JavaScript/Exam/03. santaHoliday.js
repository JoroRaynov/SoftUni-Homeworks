function santaHoliday(input){

    let dayStay = Number(input[0]);
    
    let typeRoom = input[1];
    let opinion = input[2];
    let price = 0;
    let numNights = dayStay -1;
    switch(typeRoom){
        case 'room for one person':
            price = numNights * 18;
            break;
        case 'apartment':
            price = numNights * 25;
            if(dayStay < 10){
                price *= 0.7;
            } else if(dayStay >= 10 && dayStay <= 15){
                price *= 0.65;
            } else {
                price /= 2
            }
            break;
        case 'president apartment':
            price = numNights * 35;
            if(dayStay < 10){
                price *= 0.90;
            }else if(dayStay >= 10 && dayStay <= 15){
                price *= 0.85;
            }else {
                price *= 0.80;
            }
            break;
    }
    if(opinion === 'positive'){
        price *= 1.25
    } else if(opinion === 'negative'){
        price *= 0.9;
    }
    
    console.log(`${price.toFixed(2)}`);


}
santaHoliday(["30",
"president apartment",
"negative"])

