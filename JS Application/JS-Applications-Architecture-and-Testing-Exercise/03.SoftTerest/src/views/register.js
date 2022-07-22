import { register } from '../../API/users.js';

const section = document.getElementById('registerPage');
const form = section.querySelector('form');

form.addEventListener('submit', onRegister);
let ctx = null;
export function showRegister(context) {
      ctx = context;
      context.showSection(section);
}

async function onRegister(e) {
      e.preventDefault();

      const formData = new FormData(form);
      const email = formData.get('email');
      const password = formData.get('password');
      const rePass = formData.get('repeatPassword');
      if (password != rePass) {
            alert("Passwords don't match");
            return;
      }
      form.reset();
      register(email, password);
      ctx.updateNav();
      ctx.goTo('/');
}
