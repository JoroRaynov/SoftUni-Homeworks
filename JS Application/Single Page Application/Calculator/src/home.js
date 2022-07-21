const body = document.querySelector('body');
const years = document.getElementById('years');

export function showHome(){
    body.replaceChildren(years);
}