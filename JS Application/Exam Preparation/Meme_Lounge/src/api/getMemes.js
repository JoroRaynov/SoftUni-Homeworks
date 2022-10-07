import { get, post, put, del } from './api.js';

export async function getAllMemes() {
      return await get('/data/memes?sortBy=_createdOn%20desc');
}

export async function createMeme(data) {
      return await post('/data/memes', data);
}

export async function getById(id) {
      return await get('/data/memes/' + id);
}

export async function updateMeme(id, data) {
      return await put('/data/memes/' + id, data);
}

export async function deleteById(id) {
      return await del('/data/memes/' + id);
}

export async function userProfile(userId) {
      return await get(
            `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
      );
}


export async function allOwnerMemes() {
      return await get('/data/memes')
}