function solve(input) {

    let resources = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        if (!resources.hasOwnProperty(resource)) {
            resources[resource] = 0;
        }
        resources[resource] += quantity;
    }
    for (const [res, qty] of Object.entries(resources)) {
            console.log(res, '->', qty);
    }
}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])