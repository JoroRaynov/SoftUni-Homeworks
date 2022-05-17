function processOddNums(array) {

    let result = array.filter((x, i) => i % 2 != 0).map(i => i * 2).reverse().join(' ');
    console.log(result);

}
processOddNums([10, 15, 20, 25])