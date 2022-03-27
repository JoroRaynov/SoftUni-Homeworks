function arrayManipulator(array, comands) {

    for (let comand of comands) {

        let tokens = comand.split(' ');
        let currentComand = tokens.shift();
        tokens = tokens.map(Number);

        if (currentComand == 'add') {
            array.splice(tokens[0], 0, Number(tokens[1]));

        } else if (currentComand === 'addMany') {
            let myIndex = tokens.shift();
            array.splice(myIndex, 0, ...tokens)
        } else if (currentComand === 'contains') {
            let myIndex = array.indexOf(Number(tokens));
            console.log(myIndex);
        } else if (currentComand === 'remove') {
            array.splice(tokens, 1);
        } else if (currentComand === 'shift') {
            for (let i = 0; i < tokens; i++) {
                let firstEl = array.shift();
                array.push(firstEl);
            }
        } else if (currentComand === 'sumPairs') {
            let resArray = [];

            if (array.length % 2 !== 0) {
                array.push(0);
            }
            for (let index = 0; index < array.length; index += 2) {
                let sum = 0;
                sum += array[index] + array[index + 1];
                resArray.push(sum);
            }
            array = resArray;
        } else if (currentComand === 'print') {

            console.log(`[ ${array.join(', ')} ]`);
        }



    }

}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
)