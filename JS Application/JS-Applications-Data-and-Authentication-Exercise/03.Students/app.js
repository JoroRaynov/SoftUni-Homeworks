function students() {

    const fiNameInput = document.querySelector('[name="firstName"]');
    const lNameInput = document.querySelector('[name="lastName"]');
    const facNumberInput = document.querySelector('[name="facultyNumber"]');
    const gradeInput = document.querySelector('[name="grade"]');

    const submitBtn = document.getElementById('submit');

    const tbody = document.querySelector('#results tbody')
    const url = 'http://localhost:3030/jsonstore/collections/students';

    submitBtn.addEventListener('click', onSubmit);

    async function student() {
        tbody.innerHTML = '';
        const response = await fetch(url);

        const respData = await response.json();

        Object.values(respData).forEach(x => {
            
            let firstName = x.firstName;
            let lastName = x.lastName;
            let facultyNum = Number(x.facultyNumber);
            let grade = Number(x.grade);

            let tr = document.createElement('tr');
            tbody.appendChild(tr);

            const firstNameCell = tr.insertCell(0)
            firstNameCell.textContent = firstName;

            const lastNameCell = tr.insertCell(1);
            lastNameCell.textContent = lastName;

            const facultyNumberCell = tr.insertCell(2);
            facultyNumberCell.textContent = facultyNum;

            const gradeCell = tr.insertCell(3);
            gradeCell.textContent = grade;
        });

    }

    window.addEventListener('load', student)

    async function onSubmit(e) {
        e.preventDefault();
        const firstName = fiNameInput.value;
        const lastName = lNameInput.value;
        const facultyNumber = facNumberInput.value;
        const grade = gradeInput.value;

        fiNameInput.value = '';
        lNameInput.value = '';
        facNumberInput.value = '';
        gradeInput.value = '';
        try {
            if (firstName == '' || lastName == '' || facultyNumber == '' || grade == '') {
                throw new Error('All field required!');
            }
            const response = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    facultyNumber,
                    grade
                })
            });

            const resData = await response.json();
            student()

        } catch (err) {
            alert(err.message)
        }


    }
}
students()