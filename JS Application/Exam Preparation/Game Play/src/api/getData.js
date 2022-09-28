import { del, get, post, put } from "./api.js";

export async function getNewGames() {
    return get('/data/games?sortBy=_createdOn%20desc&distinct=category')
}

export async function getAllGames() {
    return get('/data/games?sortBy=_createdOn%20desc')
}

export async function createGame(title, category, maxLevel, imageUrl, summary) {
    return post('/data/games', { title, category, maxLevel, imageUrl, summary });
}

export async function getAGameById(id) {
    return get('/data/games/' + id);
}


export async function updateGame(id, title, category, maxLevel, imageUrl, summary) {
    return put('/data/games/' + id, { title, category, maxLevel, imageUrl, summary })
}

export async function deleteGame(id) {
    return del('/data/games/' + id)
}

export async function getAllComments(gameId) {
    return get(`/data/comments?where=gameId%3D%22${gameId}%22`)
}

export async function sendComment(gameId, comment) {
    return post('/data/comments', { gameId, comment })
}