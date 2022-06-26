function fruits(type, weightInGr, pricePerKilo){
    
    let weigthInKilo = weightInGr / 1000;

    let neededMoney = weigthInKilo * pricePerKilo;
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weigthInKilo.toFixed(2)} kilograms ${type}.`);
}
