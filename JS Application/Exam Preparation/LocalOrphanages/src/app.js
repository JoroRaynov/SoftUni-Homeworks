import { page } from '../src/lib.js';
import { render, html } from '../src/lib.js';
import { logout } from './api/users.js';
import { getUserData } from './api/util.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { myPostsView } from './views/myposts.js';
import { registerView } from './views/register.js';


const main = document.getElementById("main-content");

page(decorateContext);
page(updateNav);
page('/', homeView);
page('/catalog', homeView);
page('/catalog/:id', detailsView);
page('/create', createView);
page('/edit/:id', editView);
page('/login', loginView);
page('/logout', logout);
page('/register', registerView);
page('/myPosts', myPostsView)
page.start()







function decorateContext(ctx, next) {
    ctx.render = renderMain

    next();
}

function renderMain(templateResult) {
    render(templateResult, main)
}


function updateNav(ctx, next) {
    const user = getUserData();

    if (user) {
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
    next()
}