function solve(input) {

    let arr = [];

    for (const line of input) {
        let tokens = line.split(' / ');
        let [heroName, heroLevel, ...items] = tokens;
        heroLevel = Number(heroLevel)
        items = items.join('');
        arr.push({
            Hero: heroName,
            level: heroLevel,
            items: items
        })
    }
    let sorted = arr.sort((a, b) => a.level - b.level);

    for (const item of sorted) {
        console.log(`Hero: ${item.Hero}\nlevel => ${item.level}\nitems => ${item.items}`)
    }
}
solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    )
//     function solve(input) {

//         let array = [];

//     for (let i = 0; i < input.length; i++) {
//         let line = input[i].split(' / ');
//         let heroName = line[0];
//         let level = Number(line[1]);
//         let items = line[2];
//         array.push({
//             name: heroName,
//             level: level,
//             items: items
//         });
//     }
//     let sorted = array.sort((a,b)=> a.level - b. level);
   
//     sorted.forEach(x => {
//         console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items}`);
//     });
// }
// solve([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ])