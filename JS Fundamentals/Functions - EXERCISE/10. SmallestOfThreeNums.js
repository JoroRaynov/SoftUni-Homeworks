function smallestNum(numOne, numTwo, numThree) {

    let myArr = [numOne, numTwo, numThree]
  
    let smallestNum =  Number.MAX_SAFE_INTEGER

    for (let i = 0; i < myArr.length; i++) {

        if (myArr[i] < smallestNum) {
            smallestNum = myArr[i];
        }

    }

    console.log(smallestNum);

}
smallestNum(25, 21, 4)