import { deletePet } from '../api/getter.js';

export async function removePet(ctx) {
    const petId = ctx.params.id;
    console.log(ctx.params.id);
    const choice = confirm('Are you sure you want to remove this card?')
    if (choice) {
        await deletePet(petId)
        ctx.page.redirect('/')
    }
}