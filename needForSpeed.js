function needForSpeed(input) {

    let cars = input.shift();
    let garage = {};


    for (let i = 0; i < cars; i++) {
        let tokens = input.shift().split('|');
        let [car, mileage, fuel] = tokens;
        mileage = Number(mileage);
        fuel = Number(fuel);
        garage[car] = {
            mileage,
            fuel
        };
    }

    for (const line of input) {
        let tokens = line.split(' : ');
        let command = tokens[0];
        if (command === 'Stop') {
            break;
        }
        if (command === 'Drive') {
            let car = tokens[1];
            let distance = Number(tokens[2]);
            let fuel = Number(tokens[3]);
            if (garage[car].fuel < fuel) {
                console.log("Not enough fuel to make that ride");
            } else {
                garage[car].mileage += distance;
                garage[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (garage[car].mileage >= 100000) {
                    delete garage[car];
                    console.log(`Time to sell the ${car}!`);
                }
            }
        } else if (command === 'Refuel') {
            let car = tokens[1];
            let toFill = Number(tokens[2]);
            let fill = Number(Math.min((75 - garage[car].fuel), toFill));
            garage[car].fuel += fill;
            console.log(`${car} refueled with ${fill} liters`);

        } else if (command === 'Revert') {
            let car = tokens[1];
            let mileage = Number(tokens[2]);
            garage[car].mileage -= mileage;
            if (garage[car].mileage > 10000) {
                console.log(`${car} mileage decreased by ${mileage} kilometers`);
            } else if (garage[car].mileage < 10000) {
                garage[car].mileage = 10000;
            }
        }
    }
    for (const [car, statistics] of Object.entries(garage)) {
        console.log(`${car} -> Mileage: ${statistics.mileage} kms, Fuel in the tank: ${statistics.fuel} lt.`);
    }
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])