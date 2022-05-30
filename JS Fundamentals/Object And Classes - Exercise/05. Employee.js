function solve(array) {
    
    let arr = []

    array.forEach(name => arr.push({
        name: name,
        personalNum: name.length,
    }));
    arr.forEach(obj => console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNum}`));

  
}

solve([

    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);