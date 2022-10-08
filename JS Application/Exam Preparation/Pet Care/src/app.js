import { logout } from './api/users.js';
import { render, page } from './lib.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { removePet } from './views/deleteHandler.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { updateNavigation } from './views/navigation.js';
import { registerView } from './views/register.js';

const main = document.getElementById('content');



page(updateNavigation);
page(decorateContent);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/catalog', catalogView);
page('/catalog/:id', detailsView);
page('/catalog/:id/edit', editView)
page('/catalog/:id/delete', removePet)
page('/create', createView);
page('/logout', logout);




page.start();




function decorateContent(ctx, next) {
    ctx.render = renderMain;

    next()
}


function renderMain(template) {
    render(template, main);
}

