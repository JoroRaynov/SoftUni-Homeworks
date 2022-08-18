function walking(input) {

    let target = 10000;

    index = 0;
    let command = input[index++];
    let totalSteps = 0;

    while (command !== 'Going home') {
        let steps = Number(command);
        totalSteps += steps;

        if (totalSteps >= target) {
            
            break;
        }
        command = input[index++];
    }
    if (command === 'Going home') {
        totalSteps += Number(input[index++]);
        let diff = Math.abs(totalSteps - target);
        if(totalSteps >= target){
            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
        }else {
            console.log(`${diff} more steps to reach goal.`);
        }
    }

}
walking(["1500", "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"
])
