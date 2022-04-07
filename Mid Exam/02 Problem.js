function problemTwo(array) {

    let names = array.shift().split(', ')
    let blackList = [];

    while (array[0] !== 'Report') {

        let tokens = array.shift().split(' ');
        let command = tokens[0];
        let value = tokens[1];
     
        if (command === 'Blacklist') {
            if (!names.includes(value)) {
                console.log(`${value} was not found.`);
            } else {
                console.log(`${value} was blacklisted.`);
                blackList.push(value);
                let myIndex = names.indexOf(value);
                names[myIndex] = 'Blacklisted'
            }
        } else if (command === 'Error'){
            if(value >= 0 && value < names.length){
               if(names[value] !== 'Blacklisted' && names[value] !== 'Lost'){
                   console.log(`${names[value]} was lost due to an error.`);
                //    let myIndex = names.indexOf(value);
                //    names.splice(myIndex, 1, ' Lost');
                   
                names[value] = 'Lost'
               }
            } 
        } else if (command === 'Change'){
            if(value >= 0 && value < names.length){
                console.log(`${names[value]} changed his username to ${tokens[2]}.`);
                names[value] = tokens[2];

            }
        }
    }

    let counterBlack = 0;
for (const name of names) {
    if(name === 'Blacklisted'){
        counterBlack++
    }
    
}
let counterLost = 0;
    for (const item of names) {
        if(item === 'Lost'){
            counterLost++
        }
    }
console.log(`Blacklisted names: ${counterBlack}`);
console.log(`Lost names: ${counterLost}`);
console.log(names.join(' '));
}
problemTwo(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])


