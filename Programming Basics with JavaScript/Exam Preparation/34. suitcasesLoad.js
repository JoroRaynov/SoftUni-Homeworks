    function suitcasesLoad(input) {
        let index = 0
        let capacity = Number(input[index++]);
        let command = input[index++];
    
        let counter = 0;
        while (command !== 'End') {
            let sizeCase = Number(command);
            counter++
    
            if (counter % 3 === 0) {
                sizeCase *= 1.10;
            
            }
            if (capacity <= sizeCase) {
                console.log('No more space!');
                counter--
                break;
            }
            
            capacity -= sizeCase;
            command = input[index++];
        }
    
        if (command === 'End') {
            console.log('Congratulations! All suitcases are loaded!');
        }
        console.log(`Statistic: ${counter} suitcases loaded.`);
    
    }
suitcasesLoad(["700.5",
"180",
"340.6",
"126",
"220"])
