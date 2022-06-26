function GCD(firstNum, secondNum) {

    let result = 0;

    while (firstNum !== secondNum) {

        if (firstNum > secondNum) {
            firstNum -= secondNum;
            result = firstNum;
            
        } else {
            secondNum -= firstNum;
            result = secondNum;
        }
    }
    console.log(result);
}

GCD(2154, 458);