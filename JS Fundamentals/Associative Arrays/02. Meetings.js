function solve(input) {

    let schedule = {};


    for (const line of input) {
        let [day, name] = line.split(' ');

        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const day in schedule) {
        console.log(`${day} -> ${schedule[day]}`);
    }
}


solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
])