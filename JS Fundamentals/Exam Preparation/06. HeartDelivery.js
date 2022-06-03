function solve(input) {

    let houses = input.shift().split('@').map(Number);
    let cupidonIndex = 0;

    while (input[0] != 'Love!') {

        let tokens = input.shift().split(' ');

        let jump = Number(tokens[1]);

        cupidonIndex += jump;

        if (cupidonIndex >= houses.length) {
            cupid = 0;
        }

        if (houses[cupidonIndex] == 0) {
            console.log(`Place ${cupidonIndex} already had Valentine's day.`);
        } else {
            houses[cupidonIndex] -= 2;
            if (houses[cupidonIndex] == 0) {
                console.log(`Place ${cupidonIndex} had Valentine's day.`);
            }
        }

    }

    let missed = 0;
    for (let house of houses) {
        if(house > 0){
            missed++;
        }
    }
    console.log(`Cupid's last position was ${cupidonIndex}.`);
    if(missed > 0){
        console.log(`Cupid has failed ${missed} places.`);
    } else {
        console.log('Mission was successful.');
    }


}
solve(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);