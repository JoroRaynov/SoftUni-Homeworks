function bonusScoringSystem(array) {

    array = array.map(Number);

    let students = array.shift();

    let lectures = array.shift();

    let bonus = array.shift();
    let tempArr = [];


    for (let i = 0; i < students; i++) {

        let totalBonus = array[i] / lectures * (5 + bonus);
        tempArr.push(totalBonus);
    }

    let maxBonus = tempArr.sort((a, b) => b - a);
    maxBonus = maxBonus[0];

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);

    for (let index = 0; index < tempArr.length; index++) {
        let totalBonus = array[index] / lectures * (5 + bonus);
        if (totalBonus === maxBonus) {
            return console.log(`The student has attended ${array[index]} lectures.`);
        }
    }

}
bonusScoringSystem([
    '0', '0', '30',
    '12', '19', '24',
    '16', '20'
])

// function solve(arr) {
//     let students = Number(arr.shift());
//     let lectures = Number(arr.shift());
//     let bonus = Number(arr.shift());

//     let bestStudent = [0];
//     for (let i = 0; i < students; i++) {
//         if ((Number(arr[i]) / lectures * (5 + bonus)) > bestStudent[0]) {
//             bestStudent.splice(0, bestStudent.length);
//             bestStudent.push((Number(arr[i]) / lectures * (5 + bonus)), arr[i]);
//         }

//     }

//     return `Max Bonus: ${Math.ceil(bestStudent[0])}.\nThe student has attended ${bestStudent.slice(-1)} lectures.`
// }