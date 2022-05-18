function searchForANum(arrayOne, arrayTwo) {

    let arrayLength = arrayTwo.shift();

    let deleted = arrayTwo.shift();

    let searchedNum = arrayTwo.shift();

    arrayOne = arrayOne.slice(0, arrayLength);
    arrayOne.splice(0, deleted);

    let counter = 0;
    for (let item of arrayOne) {
        if (item === searchedNum) {
            counter++
        }
    }

    console.log(`Number ${searchedNum} occurs ${counter} times.`);


}
searchForANum([7, 1, 5, 8, 2, 7],
    [3, 1, 5]

)