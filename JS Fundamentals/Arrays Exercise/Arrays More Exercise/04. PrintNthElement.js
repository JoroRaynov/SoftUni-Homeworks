function printNthElement(array) {


    let step = Number(array[array.length - 1]);

    array.length = array.length - 1;

    let newArr = []


    for (let i = 0; i < array.length; i += step) {
        newArr.push(array[i])
    }

    console.log(newArr.join(' '));

}