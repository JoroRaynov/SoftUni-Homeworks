function index() {

    let loadBtn = document.querySelector('.load');
    let logOut = document.getElementById('logout');
 
    let url = 'http://localhost:3030/users/logout';
    
    if (sessionStorage.accessToken === undefined) {
        logOut.style.display = 'none';
        // deleteBtns[0].disabled = true;
        // updateBtns[0].disabled = true;
    } else {
        console.log('OK!');

        document.querySelector('span').textContent = 'nice to see you again!'
        document.querySelector('#login').style.display = 'none';
        document.querySelector('#register').style.display = 'none';
        // document.querySelector('.add').disabled = false;
        logOut.addEventListener('click', logout)
    }

    async function logout() {

        let token = sessionStorage.getItem('accessToken');

        fetch(url, {
            headers: {
                'X-Authorization': token
            }
        });
        sessionStorage.removeItem('accessToken');


        window.location = 'http://127.0.0.1:49506/05.Fisher-Game/src/index.html'

    }
    loadBtn.addEventListener('click', render)
    async function render() {

        const response = await fetch('http://localhost:3030/data/catches');

        const responseData = await response.json();

        console.log(responseData);
    }


    // window.addEventListener('load', index)

}
index()