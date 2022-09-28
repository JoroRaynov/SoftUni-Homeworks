import { registerView } from './api/register.js';
import { logout } from './api/users.js';
import { page, render } from './lib.js';
import { allGamesView } from './views/allGames.js';
import { createView } from './views/create.js';
import { onDelete } from './views/delete.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { updateNav } from './views/updateNav.js';

const main = document.getElementById('main-content');

page(decorateContext);
page(updateNav);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logout);
page('/allgames', allGamesView);
page('/create', createView);
page('/details/:id', detailsView);
page('/details/:id/edit', editView);
page('/details/:id/delete', onDelete)
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    next();
}

function renderMain(template) {
    render(template, main);
}