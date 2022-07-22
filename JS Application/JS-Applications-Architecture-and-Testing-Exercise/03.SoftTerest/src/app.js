import { initialize } from './router.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { logout } from '../API/users.js';
document.getElementById('view').remove();

const links = {
      '/': showHome,
      '/catalog': showCatalog,
      '/login': showLogin,
      '/register': showRegister,
      '/details': showDetails,
      '/create': showCreate,
      '/logout': onLogout,
      '/details': showDetails,
};

const router = initialize(links);
router.updateNav();

router.goTo('/');
function onLogout() {
      logout();

      router.updateNav();
      router.goTo('/');
}
