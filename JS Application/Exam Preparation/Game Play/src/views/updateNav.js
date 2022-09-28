import { getUserData } from "../api/util.js";

const user = document.getElementById('user');
const guest = document.getElementById('guest');

export function updateNav(ctx, next) {

    const isLoggedIn = getUserData();
    if (isLoggedIn) {
        user.style.display = 'block';
        guest.style.display = 'none';
    } else {
        user.style.display = 'none';
        guest.style.display = 'block';
    }
    next()
}