function solve(input) {
    let dict = {};

    for (const line of input) {
        let obj = JSON.parse(line);
        Object.assign(dict, obj);
    }
   let sorted = Object.keys(dict).sort((a, b) => a.localeCompare(b));
    for (const item of sorted) {
        let dictionary = dict[item];
        console.log(`Term: ${item} => Definition: ${dictionary}`);
    }
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])