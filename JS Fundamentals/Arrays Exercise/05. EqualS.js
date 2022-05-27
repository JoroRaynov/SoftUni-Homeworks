function equalS(array) {
    let isIndex = false;

    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        if (i != 0) {

            for (let j = 0; j < i; j++) {
                leftSum += array[j]
            }
        }
        if (i != array.length - 1) {
            for (let r = i + 1; r < array.length; r++) {
                rightSum += array[r]
            }
        }
        if (leftSum == rightSum) {
            console.log(i);
            isIndex = true;
        }
    }
    if (!isIndex) {
        console.log('no');
    }
}




equalS([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])