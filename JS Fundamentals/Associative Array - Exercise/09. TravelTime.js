function solve(input) {
    let collection = {};

    for (const line of input) {
        let [country, city, cost] = line.split(' > ');

        if (!collection.hasOwnProperty(country)) {

            collection[country] = new Map();
        }
        if (!collection[country].has(city)) {
            collection[country].set(city, cost)
        } else {
            let currCost = collection[country].get(city);

            if (currCost > cost) {
                collection[country].set(city, cost)
            }
        }

    }
    let sorted = Object.entries(collection).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [city, mapCollection] of sorted) {
        let resultStr = `${city} ->`;
        let sortedMap = Array.from(mapCollection.entries());
        sortedMap.sort((a, b) => a[1] - b[1]);
        for (const [el, value] of sortedMap) {
            resultStr += ` ${el} -> ${value}`;
        }
        console.log(resultStr);
    }

}
solve([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
])