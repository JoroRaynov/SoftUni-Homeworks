function solve(input) {

    let schoolGrade = {};

    for (const line of input) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (!schoolGrade.hasOwnProperty(name)) {
            schoolGrade[name] = [];
        }

        let exist = schoolGrade[name];
        for (const grade of grades) {
            exist.push(grade);

        }
    }
    let sorted = Object.entries(schoolGrade);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    
    for (const [name, grade] of sorted) {
        let averageGrade = 0

        for (const grad of grade) {
            averageGrade += grad;
        }
        averageGrade /= grade.length
        console.log(`${name}: ${averageGrade.toFixed(2)}`);
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
])

// function solve(input) {

//     let obj = {};

//     for (let line of input) {
//         let [name, ...grades] = line.split(' ');
//         grades = grades.map(Number);

//         if (!obj.hasOwnProperty(name)) {
//             obj[name] = [];
//         }
//         let exist = obj[name];
//         for (const grade of grades) {
//             exist.push(grade);
//         }
//         obj[name] = exist;
//     }
//     let sorted = Object.entries(obj);
//     sorted.sort((a, b) => a[0].localeCompare(b[0]));

// for (const [name, grades] of sorted) {
//     let avgGrade = 0;
//     for (const grade of grades) {
//         avgGrade += grade;
//     }
//     avgGrade /= grades.length;
//     console.log(`${name}: ${avgGrade.toFixed(2)}`);
// }

// }
// solve(['Lilly 4 6 6 5',
//     'Tim 5 6',
//     'Tammy 2 4 3',
//     'Tim 6 6'
// // ])