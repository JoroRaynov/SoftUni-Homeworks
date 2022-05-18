function buildWall(array) {

    let myArray = [];

    while (array.length > 0) {
        
        for (let index = 0; index < array.length; index++) {
            if (array.includes(30)) {
                let theIndex = array.indexOf(30);
                array.splice(theIndex, 1);
            }
            
        }
        if(array.length == 0) break;
        if (array == 30 && array.length == 1) break;
        let sum = 0;
        for (let index = 0; index < array.length; index++) {
           

            if (array[index] < 30) {
                array[index] = array[index] + 1
                sum += 195
                

            }
        }
        myArray.push(sum)

    }
    let sum = 0;
    for (let cubics of myArray) {
        sum += cubics
    }

    let totalSum = sum * 1900

    console.log(myArray.join(', '));
    console.log(`${totalSum} pesos`);

}
buildWall([31,29])