import { removeTheater } from "../api/getData.js";

export async function deleteTheatre(ctx) {
    const id = ctx.params.id;

    const choice = confirm('Are you sure you want to delete this theater?');
    if (choice) {
        await removeTheater(id);
        ctx.page.redirect('/profile')
    }
}