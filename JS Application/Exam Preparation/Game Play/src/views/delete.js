import { deleteGame } from "../api/getData.js"

export async function onDelete(ctx) {
    console.log(ctx.params.id);
    const choice = confirm('Are you sure you want to delete this game?')
    if (choice) {
        deleteGame(ctx.params.id);
        ctx.page.redirect('/');
    }
}