import { del, get, post, put } from "./api.js";

export async function getAllAlbums() {
    return get('/data/albums?sortBy=_createdOn%20desc&distinct=name')
}

export async function createAlbum(name, imgUrl, price, releaseDate, artist, genre, description) {
    return post('/data/albums', { name, imgUrl, price, releaseDate, artist, genre, description })
}

export async function getAlbumById(id) {
    return get('/data/albums/' + id)
}

export async function updateAlbum(id, name, imgUrl, price, releaseDate, artist, genre, description) {
    return put('/data/albums/' + id, { name, imgUrl, price, releaseDate, artist, genre, description })
}
export async function removeAlbum(id) {
    return del('/data/albums/' + id)
}

export async function search(query) {
    query = encodeURIComponent(query);
    return get(`/data/albums?where=name%20LIKE%20%22${query}%22`)
}