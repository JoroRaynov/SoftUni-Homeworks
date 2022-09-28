import { post } from './api.js';
import { clearUserData } from "./util.js";
import { get } from "./api.js";
import { setUserData } from "./util.js";

export async function login(email, password) {
    const user = await post('/users/login', { email, password });

    let userData = {
        id: user._id,
        email: user.email,
        accessToken: user.accessToken
    }
    setUserData(userData);
}

export async function register(email, password) {
    const user = await post('/users/register', { email, password });
    let userData = {
        id: user._id,
        email: user.email,
        accessToken: user.accessToken
    };

    setUserData(userData);
    return user;
}

export function logout(ctx) {
    get('/users/logout');
    clearUserData()
    ctx.page.redirect('/')
}