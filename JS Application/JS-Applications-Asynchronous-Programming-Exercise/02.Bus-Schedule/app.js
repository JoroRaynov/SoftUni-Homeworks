function solve() {
    let departButton = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let spanInfo = document.querySelector('span.info');
    let stops = {
        next: 'depot'
    }

    function depart(e) {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${stops.next}`;
        fetch(url)
            .then(res => {
                if (res.status !== 200) {
                    spanInfo.textContent = 'Error';
                    departButton.disabled = true;
                    arriveBtn.disabled = true;
                }
                return res.json()
            })
            .then(data => {

                spanInfo.textContent = `Next stop ${data.name}`;
                stops = data;
            });
        departButton.disabled = true;
        arriveBtn.disabled = false;
    }

    function arrive() {

        spanInfo.textContent = `Arriving at ${stops.name}`;

        departButton.disabled = false;
        arriveBtn.disabled = true;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();