function convertToJson(name, lastName, hairColor) {

    let person = {
        name,
        lastName,
        hairColor
    }

    let text = JSON.stringify(person);
    let parsed = JSON.parse(text);

    console.log(text);
    parsed.name = 'Georgi'
    parsed.lastName = 'Raynov'
    console.log(parsed);
    console.log(person);
    let parsePerson = JSON.stringify(parsed);

    console.log(parsePerson);
}

convertToJson('Peter', 'Smith', 'Blond');