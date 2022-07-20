function register() {

    const url = 'http://localhost:3030/users/register';

    document.querySelector('form').addEventListener('submit', onRegister);

    async function onRegister(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('rePass');

        try {
            if (email == '' || password == '') {
                throw new Error('All fields are required!')
            }
            if (rePass !== password) {
                throw new Error('Passwords don\'t match!')
            }

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (response.ok == false) {
                const error = response.json();
                throw new Error(error.message);
            }
            const responseData = response.json();
            sessionStorage.setItem('accessToken', responseData.accessToken);

            window.location = 'http://127.0.0.1:49506/05.Fisher-Game/src/index.html';
        } catch (err) {
            alert(err.message);
        }

    }


}
register()