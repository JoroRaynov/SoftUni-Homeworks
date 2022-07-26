function suppliesForSchool(input) {

    let penPack = Number(input[0]);
    let markersPack = Number(input[1]);
    let cleaninDetergent = Number(input[2]);

    let pricePensPack = penPack * 5.80;
    let priceMarkersPack = markersPack * 7.20;
    let priceDetergent = cleaninDetergent * 1.20;
    
    let totalPrice = (pricePensPack + priceMarkersPack + priceDetergent)
    let priceDiscount = totalPrice - (totalPrice * 0.25);
    console.log(priceDiscount);



}
suppliesForSchool(["2 ","3 ","4 ","25 "])