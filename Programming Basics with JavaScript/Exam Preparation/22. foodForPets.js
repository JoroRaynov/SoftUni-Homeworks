function foodForPets(input){
let index = 0;
let days = Number(input[index++]);
let totalFood = Number(input[index++]);
let dogEaten = 0;
let catEaten = 0;
let coockies = 0;
let dayCounter = 0;
for (let i = 0; i < days; i++){
    let quantityDog = Number(input[index++])
    let quantityCat = Number(input[index++]);
    dayCounter++
    dogEaten += quantityDog
    catEaten += quantityCat
    
    if(dayCounter % 3 === 0){
        coockies += (quantityDog + quantityCat) * 0.1;

    }

}

let totalEaten = dogEaten + catEaten;
let percEatenfood = totalEaten / totalFood * 100;
let percEatenfromDog = dogEaten / totalEaten * 100;
let percEatenFromCat = catEaten / totalEaten * 100;

console.log(`Total eaten biscuits: ${Math.round(coockies)}gr.`);
console.log(`${percEatenfood.toFixed(2)}% of the food has been eaten.`);
console.log(`${percEatenfromDog.toFixed(2)}% eaten from the dog.`);
console.log(`${percEatenFromCat.toFixed(2)}% eaten from the cat.`);

}
foodForPets(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])
