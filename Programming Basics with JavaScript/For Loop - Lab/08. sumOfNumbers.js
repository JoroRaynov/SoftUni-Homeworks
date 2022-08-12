function sumOfNumbers(input){
    let ourInput = input[0];
    let sumOfDigits = 0;

    for(let i = 0; i < ourInput.lengthda; i++){
        let currentNumber = Number(ourInput[i])
     sumOfDigits += currentNumber;
     
    }
    console.log(`The sum of the digits is:${sumOfDigits}`);
}
sumOfNumbers(['564891'])