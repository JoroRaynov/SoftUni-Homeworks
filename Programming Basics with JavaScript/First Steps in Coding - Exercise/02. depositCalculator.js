function depositCalculator(input){

    let depositAmaunt = Number(input[0]);
    let termOfDeposit = Number(input[1]);
    let yearPercentage = Number(input[2]);
    
    let earnInterest = depositAmaunt * (yearPercentage / 100);
    let interestMonth = earnInterest / 12
    let total = depositAmaunt + (termOfDeposit * interestMonth)

    let amount = depositAmaunt + termOfDeposit * ((depositAmaunt * yearPercentage)/ 12);
    

    console.log(total);

}
 depositCalculator(["200 " , "3 " , "5.7 "]);