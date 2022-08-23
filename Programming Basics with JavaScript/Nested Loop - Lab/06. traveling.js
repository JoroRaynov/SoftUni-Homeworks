function traveling(input){

    index = 0;
    let command = input[index++]
    


    while (command !== 'End'){
        let destination = command;
        let needBudget = Number(input[index++])
        let sum = 0;
        while (sum < needBudget){
            let money = Number(input[index++]);
            sum += money;
           
        }
        console.log(`Going to ${destination}!`);
        command = input[index++]
    }

}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
