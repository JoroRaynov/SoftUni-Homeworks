function movieStar(input) {
    let index = 1;
    let budget = Number(input[0]);
    let totalBudget = Number(input[0]);
    let command = input[index++];
    let totalReward = 0



    while (command !== 'ACTION') {
        let name = command;
        let length = name.length;
        let reward = Number(input[index++])
        if (length > 15) {
            reward = budget * 0.2
            index--
        }
        totalReward += reward
        budget -= reward

        if (budget <= 0) {
            let diff = Math.abs(totalReward - totalBudget)
            console.log(`We need ${diff.toFixed(2)} leva for our actors.`);
            break;
        }

        command = input[index++]
    }

    if (budget > 0) {
        let diff = Math.abs(totalReward - totalBudget)
        console.log(`We are left with ${diff.toFixed(2)} leva.`);
    }



}
movieStar(["170000",
    "Ben Affleck",
    "40000.50",
    "Zahari Baharov",
    "80000",
    "Tom Hanks",
    "2000.99",
    "ACTION"
])
