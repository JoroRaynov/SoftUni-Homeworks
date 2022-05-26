function equalArrays(arr1, arr2) {

    let isIdentical = false
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            let currentNum = Number(arr1[i])
            sum += currentNum;
            isIdentical = true;
        } else {
            isIdentical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
        break;
        }  
    }
    if(isIdentical){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
   
equalArrays([1, 2, 3, 4, 5], [1, 2, 4, 4, 5])