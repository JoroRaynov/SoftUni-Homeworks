import {
    date
} from './year.js'

const body = document.querySelector('body');
const dayCalendar = document.querySelectorAll('.daysCalendar');

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']



export function showMonth(y, e) {
    if (e.target.className == 'day') {
        let month = e.target.firstElementChild.textContent;
        let index = months.indexOf(month) + 1;
        let sectionElement = Array.from(dayCalendar).find(x => x.id == `month-${y}-${index}`)
        body.replaceChildren(sectionElement);
        sectionElement.querySelector('caption').addEventListener('click', date.bind(null, y));
    }
}