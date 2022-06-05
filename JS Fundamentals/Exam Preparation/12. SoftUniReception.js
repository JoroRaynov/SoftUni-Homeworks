function softUniReception(array) {

    let students = array.pop()
    array = array.map(Number)
    let employeeOne = array[0];
    let employeeTwo = array[1];
    let employeeThree = array[2];
    let hours = 0;
    let totalStudentPerHour = employeeOne + employeeTwo + employeeThree;

    while (students > 0) {
        hours++

        if (hours % 4 == 0) {
            continue;

        } else {
            students -= totalStudentPerHour;
        }
    }
console.log(`Time needed: ${hours}h.`);
}
softUniReception(['1','2','3','45'])