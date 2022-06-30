function iventory(array) {
    let arr = [];

    for (let line of array) {
        let [name, level, items] = line.split(' / ');
        items = items ? items.split(', ') : [];
        // let item = items.split(', ');
        level = Number(level);
        arr.push({
            name: name,
            level: level,
            items:items
        });
    }
    console.log(JSON.stringify(arr));
}
iventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / '
]);