import { getUserData } from "../api/util.js";
import { html, render } from '../lib.js';

const header = document.querySelector('header');


const navTemplate = (isLoggedIn) => html`
    <nav>
        <a href="/">Theater</a>
        <ul>
            ${isLoggedIn ? html`
            <li><a href="/profile">Profile</a></li>
            <li><a href="/create">Create Event</a></li>
            <li><a href="/logout">Logout</a></li>
            ` : html`
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            `}
        </ul>
    </nav>

`

export function updateNav(ctx, next) {

    const isLoggedIn = getUserData();
    render(navTemplate(isLoggedIn), header)
    next()
}