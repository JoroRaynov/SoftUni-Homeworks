function solve(input) {

    let name = input[0];
    let counter = 1;
    let index = 1;
    let sumRating = 0;
    let poorRating = 0;

    while (counter <= 12){
        let currentRating = Number(input[index]);
        if(currentRating >= 4){
            sumRating += currentRating
            counter++
        } else if(currentRating < 4){
            poorRating++
            if(poorRating > 1){
                console.log(`${name} has been excluded at ${counter} grade`);
                break;
            }
        }
        index++
        currentRating = Number(input[index]);
    }

    if(counter === 13){
        let avgRating = sumRating / 12
        console.log(`${name} graduated. Average grade: ${avgRating.toFixed(2)}`);
    }


    
}
solve(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])