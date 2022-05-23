function result(sumOne, sumTwo, sumThree) {
    let firstsum = add(sumOne, sumTwo)
    let result = subtract(firstsum, sumThree)
    console.log(result);

    function add(a, b) {
        return a + b;
    }

    function subtract(sumOne, sumTwo) {
        return sumOne - sumTwo;
    }

}

result(42, 58, 100)
