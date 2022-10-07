const container = document.getElementById('errorBox');
const span = container.querySelector('span');



export function notify(msg) {

    span.textContent = msg;
    container.style.display = 'block';

    setTimeout(() => container.style.display = 'none', 3000)



}