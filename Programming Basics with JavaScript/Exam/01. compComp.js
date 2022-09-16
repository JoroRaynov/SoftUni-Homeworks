function compComp(input){

let numComp = Number(input[0]);
let index = 1;
let complitetSells = 0

let avrgPC = 0;

for(let i = 0; i < numComp; i++){
    let num = Number(input[index++]);
    let rating = num % 10
    avrgPC+=rating
    let sells = (num - rating) / 10;
    if(rating === 2){
        complitetSells += 0

    } else if(rating === 3){
        complitetSells += sells / 2
        
    
    } else if(rating === 4){
        complitetSells += sells * 0.7;
       
    } else if(rating === 5){
        complitetSells += sells * 0.85
       
    } else if(rating === 6){
        
        complitetSells += sells;
    }
    
  
}
 let midRating = avrgPC / numComp
console.log(`${complitetSells.toFixed(2)}`);
console.log(`${midRating.toFixed(2)}`);
}
compComp(["2",
"204",
"206"])


