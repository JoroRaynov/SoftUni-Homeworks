function passReset(input) {

    let password = input.shift();


    while (input[0] !== 'Done') {

        let tokens = input.shift().split(' ');
        let command = tokens[0];
        
        if (command === 'TakeOdd') {
            let currPass = '';
            for (let i = 1; i < password.length; i += 2) {
                currPass += password[i]
            }
            password = currPass;
            console.log(password);
        } else if (command === 'Cut') {
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);
            let leftSide = password.slice(0, index);
            let righSide = password.slice(index + length)
            password = leftSide + righSide
            console.log(password);
        } else if (command === 'Substitute') {
            let pattern = tokens[1]
            let toReplace = tokens[2];
            if (password.includes(pattern)) {

                password = password.split(pattern).join(toReplace);
                console.log(password);
            } else {
                console.log('Nothing to replace!');
            }

        }
    }

    console.log(`Your password is: ${password}`);
}
passReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
])