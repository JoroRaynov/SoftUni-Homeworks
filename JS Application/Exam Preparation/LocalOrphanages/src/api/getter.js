import { get, post, put, del } from '../api/api.js'

export async function getAllPosts() {
    return await get('/data/posts?sortBy=_createdOn%20desc');
}


export async function getById(id) {
    return await get('/data/posts/' + id);
}

export async function makeDonation() {
    return await post('/data/donations')
}

export async function checkDonationForSpecUser(postId, userId) {
    return await get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export async function totalDonationForPost(postId) {
    return await get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`)
}

export async function createPost(data) {
    return await post('/data/posts', data)
}

export async function updatePost(id, data) {
    return await put('/data/posts/' + id, data)
}

export async function deletePost(id) {
    return await del('/data/posts/' + id)
}

export async function getAllUserPosts(userId) {
    return await get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}