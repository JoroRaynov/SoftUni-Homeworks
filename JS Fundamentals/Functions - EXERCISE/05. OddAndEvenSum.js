function oddAndEvenSum(num) {

    let numToStr = num.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numToStr.length; i++) {

        let currNum = Number(numToStr[i]);
        if (currNum % 2 == 0) {
            evenSum += currNum;
        } else {
            oddSum += currNum
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddAndEvenSum(3495892137259234)