function logIn() {
    document.getElementById('logout').style.display = 'none';
    document.getElementById('login').style.display = 'none';

    let url = 'http://localhost:3030/users/login';

    document.querySelector('form').addEventListener('submit', onSubmit);


    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const p = document.querySelector('.notification');
        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        }
        try {
            if (data.email == '' && data.password == '') {
                p.textContent = 'All fields are required!'
            } else if (data.password == '') {
                p.textContent = 'Password field is required!'
            } else if(data.email == ''){
                p.textContent = 'Email field is required!'
            }


            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application'
                },
                body: JSON.stringify(data)
            })
            if (response.ok == false) {
                let error = await response.json();
                throw new Error(error.message)
            }
            const respData = await response.json();
            sessionStorage.setItem('accessToken', respData.accessToken);
            
            window.location = 'http://127.0.0.1:49506/05.Fisher-Game/src/index.html'
        } catch (err) {
            alert(err.message);
        }

    }

   

}
logIn()