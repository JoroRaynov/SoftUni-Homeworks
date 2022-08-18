function examPreparation(input){

    let index = 0;
    let bedRating = input[index];
    index++
    let command = input[index];
    index++

    let numExamp = 0;
    let countPoors = 0;
    let averageScore = 0;
    let lastExamp = '';
    let isEnough = false;

    while(command !== 'Enough'){
        let nameExamp = command;
        let ratingExamp = input[index++]
        averageScore += ratingExamp;
        numExamp++;
        lastExamp = nameExamp;

        if(ratingExamp <= 4){
            countPoors++
        } if(countPoors === bedRating){
            isEnough = true;
            console.log(`You need a break, ${countPoors} poor grades.`);
            break;

        }
        command = input[index++];
    } 
    let averageSC = averageScore / numExamp;
    if(!isEnough){
        console.log(`Average score: ${averageSC.toFixed(2)}`);
        console.log(`Number of problems: ${numExamp}`);
        console.log(`Last problem: ${lastExamp}`);
    }
    console.log(averageSC);


}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
