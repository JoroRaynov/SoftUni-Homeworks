function graduation(input){
    let name = input[0];


    let index = 1;

    let counterGrade = 1;
    let sum = 0;
    let poor = 0;




    while(counterGrade < 12){
        let currentGrade = Number(input[index]);
        if(currentGrade >= 4){
            sum+=currentGrade
            counterGrade++

        } 
        if(poor > 1){
                console.log(`${name} has been excluded at ${counterGrade} grade`);
            }
        
        }
    }
    




graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
