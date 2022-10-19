import { del, get, post, put } from "./api.js";

export async function getAllOffers() {
    return get('/data/offers?sortBy=_createdOn%20desc')
}

export async function createOffer(title, imageUrl, category, description, requirements, salary) {

    return post('/data/offers', { title, imageUrl, category, description, requirements, salary })
}

export async function getOfferById(id) {
    return get('/data/offers/' + id)
}

export async function updateOffer(id, title, imageUrl, category, description, requirements, salary) {
    return put('/data/offers/' + id, { title, imageUrl, category, description, requirements, salary })
}

export async function removeOfferById(id) {
    return del('/data/offers/' + id)
}

export async function getTotalApplications(offerId) {
    return get(`/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`)
}

export async function userApps(offerId, userId) {
    return get(`/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export async function applyForOffer(offerId) {
    return post('/data/applications', { offerId })
}