function solve(input) {

    let adressBook = {};

for (const line of input) {
    let [name, adress] = line.split(':');
    adressBook[name] = adress;

}
let sorted = Object.entries(adressBook);

sorted.sort((a,b) => a[0].localeCompare(b[0]));
// for (const name of sorted) {
//     console.log(`${name} -> ${adressBook[name]}`);
// }
// for (const item of sorted) {
//     console.log(item);
// }
console.log(sorted);
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
])