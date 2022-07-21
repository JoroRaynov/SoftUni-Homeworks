import {
    showHome
} from './home.js';

const body = document.querySelector('body');
const year = document.getElementById('year-2021');
const caption = year.querySelector('caption');
caption.addEventListener('click', showHome);

export function year2021() {

body.replaceChildren(year);

}