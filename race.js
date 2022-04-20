function solve(input) {

    let namePattern = /[A-Za-z]+/g;
    let numPattern = /[0-9]/g;
    let objNames = {};
    let names = input.shift().split(', ');


    for (const name of names) {
        objNames[name] = 0;
    }
    while (input[0] !== 'end of race') {
        let distance = 0;
        let line = input.shift();
        let name = line.match(namePattern).join('');
        let nums = line.match(numPattern).map(Number)
        for (const num of nums) {
            
            distance += num;
        }
        if (objNames[name] !== undefined) {
            objNames[name] += distance;
        }
    }
    let sorted = Object.entries(objNames).sort((a,b) => b[1]-a[1]);
    if(sorted[0]){
        console.log('1st place: ' + sorted[0][0]);
    }
    if(sorted[1]){
        console.log('2nd place: ' + sorted[1][0]);
    }
    if(sorted[2]){
        console.log('3rd place: ' + sorted[2][0]);
    }
}
solve(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);