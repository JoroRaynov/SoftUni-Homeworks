function marin(input) {
    
    let index = 0;
    let badRating = Number(input[index++]);
    let nameExamp = input[index++]; // 1 input(money)
    let poorRating = 0;
    let totalRating = 0;
    let numExamp = 0;
    let lasExamp = '';

    while (nameExamp !== 'Enough') {
        let rating = Number(input[index]); // input 2
        totalRating += rating;
        numExamp++;
        lasExamp = nameExamp;
        if (rating <= 4) {
            poorRating++
            if (poorRating === badRating) {
                console.log(`You need a break, ${poorRating} poor grades.`);
                break;
            }

        }
        index++
        nameExamp = input[index++]//input 3
    }
    if (nameExamp === 'Enough') {
        let averageSC = totalRating / numExamp;
        console.log(`Average score: ${averageSC.toFixed(2)}`);
        console.log(`Number of problems: ${numExamp}`);
        console.log(`Last problem: ${lasExamp}`);

    }
}

marin(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

