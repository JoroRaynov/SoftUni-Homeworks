function trackingMania(input) {

    index = 0;
    let countGroups = Number(input[index]);
    index++
    
    let totalPplInGroup = 0;

    let countMusala = 0;
    let countMonblan = 0;
    let countKilimanjaro = 0;
    let countK2 = 0;
    let countEverest = 0;


    for (i = 0; i < countGroups; i++) {
        let numPplInGroup = Number(input[index]);
        index++
        totalPplInGroup += numPplInGroup;
        if (numPplInGroup <= 5) {
            countMusala += numPplInGroup

        } else if (numPplInGroup >= 6 && numPplInGroup <= 12) {
            countMonblan += numPplInGroup

        } else if (numPplInGroup >= 13 && numPplInGroup <= 25) {
            countKilimanjaro += numPplInGroup;

        } else if (numPplInGroup >= 26 && numPplInGroup <= 40) {
            countK2 += numPplInGroup;
        } else {
            countEverest += numPplInGroup;
        }

    }
    let percMusala = (countMusala / totalPplInGroup) * 100;
    let percMonblan = (countMonblan / totalPplInGroup) * 100;
    let percKilimanjaro = (countKilimanjaro / totalPplInGroup) * 100;
    let percK2 = (countK2 / totalPplInGroup) * 100;
    let percEverest = (countEverest / totalPplInGroup) * 100;


    console.log(percMusala.toFixed(2) +'%');
    console.log(percMonblan.toFixed(2) + '%');
    console.log(percKilimanjaro.toFixed(2) + '%');
    console.log(percK2.toFixed(2) + '%');
    console.log(percEverest.toFixed(2) + '%');




}
trackingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"
])
