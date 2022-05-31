function nonDecreasingSubset(array) {

    let currentBiggest = 0;
    // let line = '';
    let newArr = [];


    for (let i = 0; i < array.length; i++) {
        if (array[i] >= currentBiggest) {
            currentBiggest = array[i];
            // line += currentBiggest + ' ';
            newArr.push(currentBiggest)
        }



    }
    console.log(newArr.join(' '));
}




nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])