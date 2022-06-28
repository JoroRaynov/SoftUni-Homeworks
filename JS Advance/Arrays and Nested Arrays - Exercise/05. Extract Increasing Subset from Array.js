function extractIncreasing(array) {

    let result = [];
    let biggestNum = 0;
    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        if (currentNum >= biggestNum) {
            biggestNum = currentNum;
            result.push(currentNum);
        }
    }
    return result;
}

// function extractIncreasingSequence(elements) {
//     let result =  elements.reduce((arr, element) => {
//         if (element >= (arr[arr.length - 1]) || elements[0]) {
//             arr.push(element)
//         }
        
//         return arr
//     }, [])
//     console.log(result[result.length-1]);
// }

// extractIncreasingSequence([20,25,6,30,40]);