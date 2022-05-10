function filterEmp(array, criteria) {

    let employees = JSON.parse(array);

    criteria = criteria.split('-');
    let [key, value] = criteria;
    let result = [];
    // let filter = employees.filter(emp => emp.includes(second));
    employees.forEach(employee => {

        if (employee[key] === value) {
            result.push({
                first_name: employee.first_name,
                last_name: employee.last_name,
                email: employee.email
            });
        }
    });

    for (let i = 0; i < result.length; i++) {
        let firstName = result[i].first_name;
        let secondName = result[i].last_name;
        let email = result[i].email;
        console.log(`${i}. ${firstName} ${secondName} - ${email}`);
    }
}
filterEmp(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female')