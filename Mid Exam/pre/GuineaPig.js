function GuineaPig(array) {
    array = array.map(Number);

    let foodInGrams = array.shift() * 1000;

    let hayInGrams = array.shift() * 1000;

    let coverInGrams = array.shift() * 1000;

    let pigWeight = array.shift() * 1000;

    let pupyCoverInEveryThirdDay = pigWeight / 3;

    let counter = 0;

    for (let index = 0; index < 30; index++) {
        counter++


        foodInGrams -= 300
        if (counter % 2 === 0) {
            let hay = foodInGrams * 0.05;
            hayInGrams -= hay;
        }
        if (counter % 3 === 0) {
            coverInGrams -= pupyCoverInEveryThirdDay;
        }
        if (foodInGrams <= 0 || hayInGrams <= 0 || coverInGrams <= 0) {
            return console.log("Merry must go to the pet store!");
        }
    }


let foodInKilo = foodInGrams / 1000;
let hayInKilo = hayInGrams / 1000;
let coverInKilo = coverInGrams / 1000;

console.log(`Everything is fine! Puppy is happy! Food: ${foodInKilo.toFixed(2)}, Hay: ${hayInKilo.toFixed(2)}, Cover: ${coverInKilo.toFixed(2)}.`);
}
GuineaPig(["9",
"5",
"5.2",
"1"])

