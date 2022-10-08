import { removeUserData, setUserData } from "../util.js";
import { get, post } from "./api.js";

export async function login(data) {
    const user = await post('/users/login', data);

    const userData = {
        email: user.email,
        id: user._id,
        accessToken: user.accessToken
    };
    setUserData(userData);
}


export async function register(data) {
    const user = await post('/users/register', data);

    const userData = {
        email: user.email,
        id: user._id,
        accessToken: user.accessToken
    };
    setUserData(userData);
    return user;
}


export function logout(ctx) {

    get('/users/logout');
    removeUserData('userData');
    ctx.page.redirect('/');
}