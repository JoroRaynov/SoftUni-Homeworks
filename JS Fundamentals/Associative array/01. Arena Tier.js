function arenaTier(input) {
    let gladiators = {};

    while (input[0] !== 'Ave Cesar') {
        let line = input.shift()
        if (line.includes('->')) {
            let [glad, technique, skill] = line.split(' -> ');

            if (gladiators[glad]) {
                gladiators[glad].skills += +skill;
                if (gladiators[glad].techniques[technique]) {
                    gladiators[glad].techniques[technique] = +skill;
                } else {
                    gladiators[glad].techniques[technique] = +skill;
                }
            } else {
                gladiators[glad] = {
                    techniques: {
                        [technique]: +skill
                    },
                    skills: +skill
                };
            }
        }
            

         else if (input[0].includes('vs')) {
            let tokens = input.shift()
        }


    }

console.log(gladiators);

}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Heal -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])
