function imitationGame(input) {

    let message = input.shift().split('');


    for (const line of input) {
        let tokens = line.split('|');
        let command = tokens[0];
        if(command === 'Decode'){
            console.log(`The decrypted message is: ${message.join('')}`);
            break;
        }
        if (command === 'Move') {
            let index = tokens[1];
            message = message.join('');

         let toMove =  message.slice(0, index);
         let rightSide = message.slice(index);

         message = rightSide + toMove
        //    for (let i = 0; i < moves; i++) {
        //     let firstLetter = message.shift();
        //     message.push(firstLetter);
        //    }
           message = message.split('');
        } else if (command === 'Insert'){
            let index = Number(tokens[1]);
            let value = tokens[2];
            message.splice(index, 0, value);
        } else if (command === 'ChangeAll'){
            let substring = tokens[1];
            let replacement = tokens[2];

             for (let i=0; i< message.length; i++) {
                 if(message[i] === substring){
                    message[i] = replacement;
                 }
                
             }
        }
    }
    
    
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])