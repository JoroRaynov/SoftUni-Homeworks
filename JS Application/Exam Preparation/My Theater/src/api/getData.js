import { del, get, post, put } from "./api.js";

export async function getAllTheatres() {
    return get('/data/theaters?sortBy=_createdOn%20desc&distinct=title')
}

export async function createTheater(title, date, author, imageUrl, description) {
    return post('/data/theaters', { title, date, author, imageUrl, description })
}

export async function getTheatreById(id) {
    return get('/data/theaters/' + id);
}

export async function updateTheater(id, title, date, author, imageUrl, description) {

    return put('/data/theaters/' + id, { title, date, author, imageUrl, description })
}

export async function removeTheater(id) {
    return del('/data/theaters/' + id)
}

export async function getUserTheaters(userId) {
    return get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function getAllLikes(theaterId) {
    return get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`)
}

export async function isUserHasLiked(theaterId, userId) {
    return get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export async function sendALike(theaterId) {
    return post('/data/likes', { theaterId })
}