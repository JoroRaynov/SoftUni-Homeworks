function ladyBugs(array){

    let fieldSize = array.shift();
    let field = [];

    let index = array.shift().split(' ')

    //fill the array with zeros '0'
    for (let i = 0; i < fieldSize; i++) {
        field.push(0)

    }
    //fill the indexes with bugs
    for (let i = 0; i < index.length; i++) {
        
    if(field[index[i]] !== undefined) {
        field[index[i]] = 1;
    }
    }

    //move the bugs
    for (let i = 0; i < array.length; i++) {

        let command = array[i].split(' ')
        let myIndex = Number(command[0]);
        let direction = command[1];
        let flyLength = Number(command[2]);

        if(direction === 'right'){
            if(field[myIndex+flyLength] !== 1){
            field[myIndex+flyLength] = 1;
            field[myIndex] = 0;
            } else {
               continue;
            } 
           
        } else if (direction === 'left'){
            if(flyLength < 0){
                flyLength *= -1
                if(field[myIndex+flyLength] !== 1){
                    field[myIndex+flyLength] = 1;
                    field[myIndex] = 0;
                    } else {
                        flyLength += flyLength;
               field[myIndex + flyLength] = 1 
                field[myIndex] = 0;

                    }
               
            } else {
                field[myIndex-flyLength] = 1
                field[myIndex] = 0;
            }

        }
    }
field.length = fieldSize
console.log(field.join(' '));



}
ladyBugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]
)