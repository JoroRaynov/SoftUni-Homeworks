import { removeAlbum } from "../api/getData.js";

export async function deleteAlbum(ctx) {
    const id = ctx.params.id;

    const choice = confirm('Are you sure you want to delete this album?');
    if (choice) {
        await removeAlbum(id);
        ctx.page.redirect('/catalog')
    }
}