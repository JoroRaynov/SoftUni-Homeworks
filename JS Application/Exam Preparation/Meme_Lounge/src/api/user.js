import { get, post } from './api.js';
import { clearUserData, setUserData } from './util.js';

export async function login(email, password) {
      const result = await post('/users/login', { email, password });

      let userData = {
            id: result._id,
            email: result.email,
            username: result.username,
            gender: result.gender,
            accessToken: result.accessToken,
      };
      setUserData(userData);
}

export async function register(username, email, password, gender) {
      const result = await post('/users/register', {
            username,
            email,
            password,
            gender,
      });
      let userData = {
            id: result._id,
            email: result.email,
            username: result.username,
            gender: result.gender,
            accessToken: result.accessToken,
      };
      setUserData(userData);
      return result;
}

export function logout(ctx) {
      get('/users/logout');
      clearUserData();
      ctx.page.redirect('/');
}
