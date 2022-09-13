function treckingMania(input) {

    let groups = Number(input[0]);
    let index = 1;
    let musalaCounter = 0;
    let monblanCounter = 0;
    let kilimanjaroCounter = 0;
    let k2Counter = 0;
    let everestCounter = 0;
    let totalPpl = 0;

    for (let i = 0; i < groups; i++) {
        let pplInGroup = Number(input[index++]);
        totalPpl += pplInGroup;
        if (pplInGroup <= 5) {
            musalaCounter+=pplInGroup
        } else if (pplInGroup >= 6 && pplInGroup <= 12) {
            monblanCounter+=pplInGroup
        } else if (pplInGroup >= 13 && pplInGroup <= 25) {
            kilimanjaroCounter+= pplInGroup
        } else if (pplInGroup >= 26 && pplInGroup <= 40){
        k2Counter+= pplInGroup
        } else {
            everestCounter+= pplInGroup;
        }
}

    let percMusala = (musalaCounter / totalPpl) * 100;
    let percMonblan = (monblanCounter / totalPpl) * 100;
    let percKilimanjaro = (kilimanjaroCounter / totalPpl)* 100;
    let percK2 = (k2Counter / totalPpl) * 100;
    let percEverest = (everestCounter / totalPpl) *100;

    console.log(`${percMusala.toFixed(2)}%`);
    console.log(`${percMonblan.toFixed(2)}%`);
    console.log(`${percKilimanjaro.toFixed(2)}%`);
    console.log(`${percK2.toFixed(2)}%`);
    console.log(`${percEverest.toFixed(2)}%`);
}
treckingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])