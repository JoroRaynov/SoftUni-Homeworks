import { removeOfferById } from "../api/getData.js";

export async function removeOffer(ctx) {

    const id = ctx.params.id;
    console.log(id);
    const choice = confirm('Are you sure you want to remove this offer?');
    if (choice) {
        removeOfferById(id);
        ctx.page.redirect('/dashboard')
    }
}