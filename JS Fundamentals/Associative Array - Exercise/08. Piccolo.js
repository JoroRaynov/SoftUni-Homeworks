function solve(input) {

    let parking = new Set();

    for (const item of input) {
        let tokens = item.split(', ');
        let [command, number] = tokens;
            if(command === 'IN'){
                parking.add(number);
            } else {
                parking.delete(number);
            }
    }
    if(parking.size === 0){
        console.log('Parking Lot is Empty');
    }
let sorted = Array.from(parking).sort();
sorted.forEach(x => console.log(x))
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)