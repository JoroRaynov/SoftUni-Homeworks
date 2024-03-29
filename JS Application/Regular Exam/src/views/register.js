import { register } from '../api/users.js';
import { html } from '../lib.js';


const registerTemplate = (onSubmit) => html`

<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
        </form>
    </div>
</section>
`

export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));


    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('re-password');

        if (email == '' || password == '') {
            return alert('All fields are required!');
        }
        if (rePass !== password) {
            return alert('Passwords do not match!');
        }
        await register(email, password);
        e.target.reset();
        ctx.page.redirect('/dashboard');
    }
}