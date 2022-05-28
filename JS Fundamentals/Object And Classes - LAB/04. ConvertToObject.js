function convertToObject(objectAsString) {


    
    let parsed = JSON.parse(objectAsString);

    for (const key of Object.keys(parsed)) {
        console.log(`${key}: ${parsed[key]}`);
    }



}

let input = '{"name": "George", "age": 40, "town": "Sofia"}';
convertToObject(input)