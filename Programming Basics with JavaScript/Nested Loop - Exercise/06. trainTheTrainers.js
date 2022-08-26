function trainTheTrainers(input){

    let jury = input[0];
    let index = 1;
    let command = input[index++]
    let sumOfGrade = 0;
    let counter = 0;


    while(command !== 'Finish'){
        
        let presentation = command;
        let temSumOfGrade = 0;
        for(let i = 0; i < jury; i++){
            counter++
            let grade = Number(input[index++])
            temSumOfGrade += grade;
            sumOfGrade += grade;

        }
        let avgTemGrade = temSumOfGrade / jury;
        console.log(`${presentation} - ${avgTemGrade.toFixed(2)}.`);
        
        command = input[index++]
    }
        let avgGrade = sumOfGrade / counter;

        console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);

}
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
