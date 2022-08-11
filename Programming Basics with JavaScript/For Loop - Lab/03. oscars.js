function oscars(input){
    index = 0;
    let actor = input[index];
    index++
    let points = Number(input[index]);
    index++
    let judges = Number(input[index]);
    index++
    let totalScore = 0;
    let isNotEnoughPoits = true;


    for (i = 0; i < judges; i++){
        let judgeName = input[index];
        index++
        totalScore = points + (judgeName.length * input[index]) / 2;
        index++
        points = totalScore
        

        if(totalScore > 1250.5) {
            isNotEnoughPoits = false;
     console.log(`Congratulations, ${actor} got a nominee for leading role with ${totalScore}`);
        break;
    }
}
 if(isNotEnoughPoits){
     let diff = Math.abs(1250.5 - totalScore);
     console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more`);

 }
 


}oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
