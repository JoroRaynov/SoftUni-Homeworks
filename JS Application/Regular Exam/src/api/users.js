import { removeUserData, setUserData } from "./util.js";
import { get, post, put, del } from './api.js'
export async function login(email, password) {
    const result = await post('/users/login', { email, password });

    const userData = {
        email: result.email,
        id: result._id,
        accessToken: result.accessToken
    };
    setUserData(userData)
}


export async function register(email, password) {
    const result = await post('/users/register', { email, password });

    const userData = {
        email: result.email,
        id: result._id,
        accessToken: result.accessToken
    };
    setUserData(userData)
}

export async function logout(ctx) {
    get('/users/logout');
    removeUserData();
    ctx.page.redirect('/dashboard')
}