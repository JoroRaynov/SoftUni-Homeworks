function pirates(input) {

    let collection = {};


    while (input[0] !== 'Sail') {

        let line = input.shift().split('||');
        let city = line[0];
        let population = Number(line[1]);
        let gold = Number(line[2]);
        if (!collection.hasOwnProperty(city)) {

            collection[city] = {
                population,
                gold
            };
        } else {
            collection[city].population += population;
            collection[city].gold += gold
        }
    }
    input.shift();

    while (input[0] !== 'End') {
        let tokens = input.shift().split('=>');
        let command = tokens[0];
        let city = tokens[1];

        if (command === 'Plunder') {
            let people = Number(tokens[2]);
            let gold = Number(tokens[3]);
            collection[city].population -= people;
            collection[city].gold -= gold;
            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (collection[city].population <= 0 || collection[city].gold <= 0) {
                delete collection[city];
                console.log(`${city} has been wiped off the map!`);
            }
        } else if (command === 'Prosper') {
            let gold = Number(tokens[2]);
            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                collection[city].gold += gold;
                let goldWeHave = collection[city].gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${goldWeHave} gold.`);
            }

        }
    }
    let count = Object.keys(collection).length;
    if (count === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
        for (const [city, gP] of Object.entries(collection)) {
            console.log(`${city} -> Population: ${gP.population} citizens, Gold: ${gP.gold} kg`);

        }
    }

}

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
])