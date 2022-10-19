import { getUserData } from "../api/util.js";
import { html, render } from '../lib.js';

const header = document.querySelector('header');


const navTemplate = (isLoggedIn) => html`
    <a id="logo" href="/"><img id="logo-img" src="./images/logo.jpg" alt="" /></a>
    
    <nav>
        <div>
            <a href="/dashboard">Dashboard</a>
        </div>
    
        <!-- Logged-in users -->
        ${isLoggedIn ? html`
        <div class="user">
            <a href="/create">Create Offer</a>
            <a href="/logout">Logout</a>
        </div>
        ` : html`<div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>`}
    
        <!-- Guest users -->
    
    </nav>
`

export function updateNav(ctx, next) {

    const isLoggedIn = getUserData();
    render(navTemplate(isLoggedIn), header)
    next()
}