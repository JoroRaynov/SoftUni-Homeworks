import { logout } from './api/user.js';
import { getUserData } from './api/util.js';
import { page, render } from './lib.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { memeView } from './views/memes.js';
import { profileView } from './views/profile.js';
import { registerView } from './views/register.js';

const main = document.querySelector('main');

page(decorateContext);
page(updateNav);
page('/', homeView);
page('/memes', memeView);
page('/memes/:id', detailsView);
page('/edit/:id', editView);
page('/login', loginView);
page('/register', registerView);
page('/profile', profileView);
page('/create', createView);
page('/logout', logout);

page.start();

function decorateContext(ctx, next) {
      ctx.render = renderMain;

      next();
}

function renderMain(templateResult) {
      render(templateResult, main);
}

function updateNav(ctx, next) {
      const isLoggedIn = getUserData();
      if (isLoggedIn) {
            document.querySelector('.user').style.display = 'inline';
            document.querySelector('.guest').style.display = 'none';
            document.querySelector(
                  'div.user span'
            ).textContent = `Welcome, ${isLoggedIn.email}`;
      } else {
            document.querySelector('.user').style.display = 'none';
            document.querySelector('.guest').style.display = 'inline';
      }
      next();
}
