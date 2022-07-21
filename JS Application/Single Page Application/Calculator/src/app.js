import {
    showHome
} from './home.js';

import {
    date
} from './year.js';

const years = document.getElementById('years');

years.addEventListener('click', getDate);

showHome();

function getDate(e) {

    if (e.target.className == 'day') {
        let year = e.target.firstElementChild.textContent;
        date(year);
    }
}