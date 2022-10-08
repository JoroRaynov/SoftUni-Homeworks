import { register } from '../api/users.js';
import { html } from '../lib.js';

const registerTemplate = (onSubmit) => html` 
<section id="registerPage">
    <form @submit=${onSubmit} class="registerForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="/login">here</a></span>
        </p>
    </form>
</section>
`

export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));
        const data = {
            email: formData.email.trim(),
            password: formData.password.trim()
        }
        if (data.email == '' || data.password == '') {
            return alert('All fields are required!');
        }
        if (formData.repeatPassword !== data.password) {
            return alert('Passwords don\'t match!');
        }

        await register(data);
        e.target.reset();
        ctx.page.redirect('/')



    }
}