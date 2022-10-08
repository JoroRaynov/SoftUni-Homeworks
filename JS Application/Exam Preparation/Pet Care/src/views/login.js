import { login } from '../api/users.js';
import { html } from '../lib.js'
import { updateNavigation } from './navigation.js';


const loginTemplate = (onSubmit) => html` 
<section id="loginPage">
    <form @submit=${onSubmit} class="loginForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>
`

export function loginView(ctx, next) {

    ctx.render(loginTemplate(onSubmit));


    async function onSubmit(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));
        const data = {
            email: formData.email,
            password: formData.password
        }

        if (data.email == '' || data.password == '') {
            return alert('All fields are required!')
        }

        await login(data)
        ctx.page.redirect('/')
    }


}