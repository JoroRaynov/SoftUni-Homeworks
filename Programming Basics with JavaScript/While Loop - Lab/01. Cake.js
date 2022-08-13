function cake(input){
    let length = Number(input[0]);
    let weigth = Number(input[1]);
    let allCake = length * weigth;
    let index=2;
    let command = input[index++];
    let totalPieces =0;

    while(command !== 'STOP'){
        let pices = Number(command);
        totalPieces += pices;
        if(totalPieces >= allCake){
            let diff = Math.abs(totalPieces - allCake);
            console.log(`No more cake left! You need ${diff} pieces more.`);
            break;
        }
        command = input[index++];
    }
    if(command === 'STOP'){
        let diff = Math.abs(totalPieces - allCake);
        console.log(`${diff} pieces are left.`);
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

