function amazingNumbers(num) {

    let numAsString = num.toString();

    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i])


    }

    let sumAsString = sum.toString();

    let result = sumAsString.includes('9')
if(result){
    console.log(`${num} Amazing? True`);
} else {
    console.log(`${num} Amazing? False`);
}

}
amazingNumbers(999);