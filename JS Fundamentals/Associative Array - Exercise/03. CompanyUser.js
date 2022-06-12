function solve(input) {
let employeeList = {};


for (const list of input) {
    let [company, userId] = list.split(' -> ');
    
    if(!employeeList.hasOwnProperty(company)){
        employeeList[company] = new Set();
    }
    employeeList[company].add(userId);
}

let sorted = Object.entries(employeeList).sort();
for (const [company, id] of sorted) {
    console.log(company);
    id.forEach((x)=> console.log('--',  x));
}
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    )