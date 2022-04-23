function bestplayer(input) {
    let index = 0;
    let command = input[index]
    index++
    let max = 0;
    let name = '';
    let goals = 0;

    while (command !== 'END') {
            let numGoals = Number(input[index++])
        if (goals >= 10) {
            console.log(`${name} is the best player!`);
            console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
            break;
        }
        if (numGoals > max) {
            max = numGoals
            name = command
            goals = numGoals
        }
        command = input[index++]
    }
    if (command === 'END') {

        if (goals >= 3) {
            console.log(`${name} is the best player!`);
            console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
        } else {
            console.log(`${name} is the best player!`);
            console.log(`He has scored ${goals} goals.`);
        }
    }
}
bestplayer(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])
