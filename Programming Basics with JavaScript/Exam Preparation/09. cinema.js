function cinema(input) {
    let index = 1;
    let capacity = Number(input[0]);
    let command = input[index++];
    let peopleCounter = 0;
    let totalIncome = 0


    while (command !== 'Movie time!') {
        let sum = 0;
        let countPeople = Number(command);
        peopleCounter += countPeople;
        sum = countPeople * 5

        if (countPeople % 3 === 0) {
            sum -= 5
        }
        
        if (peopleCounter > capacity) {
            console.log('The cinema is full.');
            break;
        }
        totalIncome += sum
        command = input[index++]
    }
    let seatsLeft = capacity - peopleCounter;
    if (command === 'Movie time!') {
        console.log(`There are ${seatsLeft} seats left in the cinema.`);
    }
    console.log(`Cinema income - ${totalIncome} lv.`);
}
cinema(["50",
    "10",
    "15",
    "15",
    "10",
    "9"])