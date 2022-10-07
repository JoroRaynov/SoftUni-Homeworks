import { page, render } from './lib.js';
import { updateNav } from './views/updateNav.js';
import { logout } from './api/users.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/homeview.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { catalogView } from './views/catalog.js';
import { deleteAlbum } from './views/delete.js';
import { searchView } from './views/search.js';

const main = document.getElementById('main-content');

page(decorateContext);
page(updateNav);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logout);
page('/catalog', catalogView)
page('/create', createView);
page('/details/:id', detailsView);
page('/details/:id/edit', editView);
page('/details/:id/delete', deleteAlbum);
page('/search', searchView);
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    next();
}

function renderMain(template) {
    render(template, main);
}