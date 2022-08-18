function graduation(input) {
 
    let name = input[0];
 
    let counter = 1;
    let poor = 0;
    let sum = 0;
    let index = 1;
 
    while(counter <= 12){
     let currentGrade=Number(input[index]);
        if(currentGrade >= 4.00){
 
            sum += currentGrade;
            counter++
        }
        else{
            poor++
            if(poor > 1 ){
                console.log(`${name} has been excluded at ${counter} grade`);
 
                break;
 
            }
        }
 
        index++
        currentGrade=input[index];
 
 
    }
    if (counter == 13){
        sum /= 12;
       console.log(`${name} graduated. Average grade: ${sum.toFixed(2)}`);
 
    }
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
