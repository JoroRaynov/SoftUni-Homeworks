function carFactory(obj) {

    let engines = {
        SmallEngine: {
            power: 90,
            volume: 1800
        },
        normalEngine: {
            power: 120,
            volume: 2400
        },
        monsterEngine: {
            power: 200,
            volume: 3500
        }

    };
    let model = obj.model;

    if (obj.power <= 90) {
        obj.power = engines.SmallEngine

    } else if (obj.power > 90 && obj.power <= 120) {
        obj.power = engines.normalEngine
    } else if (obj.power > 120 && obj.power <= 200) {
        obj.power = engines.monsterEngine
    }

    let power = obj.power

    let carriage = {
        type: obj.carriage,
        color: obj.color
    }
    let wheelsSize = obj.wheelsize % 2 == 0 ? obj.wheelsize - 1 : obj.wheelsize;
    let wheels = [wheelsSize, wheelsSize, wheelsSize, wheelsSize];

    let result = {
        model: model,
        engine: power,
        carriage: carriage,
        wheels: wheels
    };
     return result

}
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})