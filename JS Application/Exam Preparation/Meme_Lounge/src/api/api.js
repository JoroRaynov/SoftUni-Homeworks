import { notify } from '../views/notify.js';
import { clearUserData, getUserData } from './util.js';

const host = 'http://localhost:3030';

async function request(method, url, data) {
      let options = {
            method,
            headers: {},
      };

      if (data != undefined) {
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(data);
      }

      const userData = getUserData();
      if (userData) {
            options.headers['X-Authorization'] = userData.accessToken;
      }

      try {
            const res = await fetch(host + url, options);
            if (res.ok === false) {
                  if (res.status == 403) {
                        clearUserData();
                  }
                  const error = await res.json();
                  throw new Error(error.message);
            }

            if (res.status == 204) {
                  return res;
            } else {
                  return res.json();
            }
      } catch (err) {
            notify(err.message);
            throw err;
      }
}

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'delete');
