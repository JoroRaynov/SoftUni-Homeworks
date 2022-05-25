function evenAndOddSubstraction(arr) {

    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);

        if (currentNum % 2 == 0) {
            sumEven += currentNum;
        } else {
            sumOdd += currentNum;
        }
    }
    let diff = sumEven - sumOdd;

    console.log(diff);

}

evenAndOddSubstraction([2,4,6,8,10])