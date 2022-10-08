import { html, render } from '../lib.js';
import { getUserData } from '../util.js';

const header = document.querySelector('header');

const guestNavTemplate = html` 
<li><a class="guest" href="/login">Login</a></li>
<li><a class="guest" href="/register">Register</a></li>
`


const userNavTemplate = html` 
<li><a href="/create">Create Postcard</a></li>
<li><a href="/logout">Logout</a></li>
`

const navigationTemplate = (user) => html` 
<nav>
    <section class="logo">
        <img src="/images/logo.png" alt="logo">
    </section>
    <ul>
        <li><a class="guest" href="/">Home</a></li>
        <li><a class="guest" href="/catalog">Dashboard</a></li>
        ${user ? userNavTemplate : guestNavTemplate}
    </ul>
</nav>
`

export function updateNavigation(ctx, next) {
    const user = getUserData();

    render(navigationTemplate(user), header);

    next()
}