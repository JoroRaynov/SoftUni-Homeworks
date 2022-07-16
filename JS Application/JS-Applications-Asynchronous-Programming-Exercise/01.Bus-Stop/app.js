function getInfo() {
    let inputId = document.getElementById('stopId');
    let divStopName = document.getElementById('stopName');
    let bussesUl = document.getElementById('buses');
    let url = 'http://localhost:3030/jsonstore/bus/businfo';
    
    let id = inputId.value;
    inputId.value = '';
    if (id == '') {
        return
    }
    bussesUl.innerHTML = '';
    fetch(`${url}/${id}`)
        .then(res => res.json())
        .then(data => {
            let tokens = Object.values(data);
            divStopName.textContent = tokens[1];
            Object.entries(tokens[0]).forEach(x => {
                let li = document.createElement('li');
                li.textContent = `Bus ${x[0]} arrives in ${x[1]} minutes`
                bussesUl.appendChild(li);
            });
        })
        .catch(err => {
            divStopName.textContent = 'Error'
        });
}