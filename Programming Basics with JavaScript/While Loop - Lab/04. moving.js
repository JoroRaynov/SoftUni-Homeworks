function moving(input){

let width = Number(input[0]);
let length = Number(input[1]);
let height = Number(input[2]);
let freeSpace = width * length * height;
let index = 3;
let command = input[index++]
let sumBoxes = 0;

while (command !== 'Done'){
    let boxes = Number(command);
    sumBoxes+= boxes;

    if(sumBoxes >= freeSpace){
        let diff = Math.abs(sumBoxes - freeSpace);
        console.log(`No more free space! You need ${diff} Cubic meters more.`);
        break;
        }
        command = input[index++]

    }
    if(command === 'Done'){
        let diff = Math.abs(sumBoxes - freeSpace);
        console.log(`${diff} Cubic meters left.`);
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
