import { getUserData } from "../api/util.js";
import { html, render } from '../lib.js';

const header = document.querySelector('header');


const navTemplate = (isLoggedIn) => html`
    <nav>
        <img src="./images/headphones.png">
        <a href="/">Home</a>
        <ul>
            <!--All user-->
            <li><a href="/catalog">Catalog</a></li>
            <li><a href="/search">Search</a></li>
            <!--Only guest-->
            ${isLoggedIn ? html`<li><a href="/create">Create Album</a></li>
            <li><a href="/logout">Logout</a></li>`: html`
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>`}
    
            <!--Only user-->
    
        </ul>
    </nav>

`

export function updateNav(ctx, next) {

    const isLoggedIn = getUserData();
    render(navTemplate(isLoggedIn), header)
    next()
}