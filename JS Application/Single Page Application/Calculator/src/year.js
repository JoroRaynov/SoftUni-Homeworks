import {
    showHome
} from './home.js';
import {
    showMonth
} from './getMonth.js'

const body = document.querySelector('body');

const allYears = document.querySelectorAll('.monthCalendar');

export function date(year) {

    let currYear = Array.from(allYears).find(x => x.id === `year-${year}`);

    body.replaceChildren(currYear);

    currYear.querySelector('caption').addEventListener('click', showHome);

    let tbody = currYear.querySelector('tbody');
    tbody.addEventListener('click', showMonth.bind(null, year))
}
