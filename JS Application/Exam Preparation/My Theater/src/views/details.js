import { getAllLikes, getTheatreById, isUserHasLiked, sendALike } from '../api/getData.js';
import { getUserData } from '../api/util.js';
import { html } from '../lib.js';

const detailsTemplate = (theater, isOwner, totalLikes, permissionForLike, like) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${theater.title}</h1>
            <div>
                <img src=${theater.imageUrl} />
            </div>
        </div>

        <div class=" details">
            <h3>Theater Description</h3>
            <p>${theater.description}</p>
            <h4>Date: ${theater.date}</h4>
            <h4>Author: ${theater.author}</h4>
            ${isOwner ? html`
            <div class="buttons">
                <a class="btn-delete" href="/details/${theater._id}/delete">Delete</a>
                <a class="btn-edit" href="/details/${theater._id}/edit">Edit</a>
            </div>
            ` : ''}

            ${permissionForLike ? html`<a class="btn-like" href="/details/${theater._id}" @click=${like}>Like</a>`
        : ''}
            <p class="likes">Likes: ${totalLikes}</p>
        </div>
    </div>
</section>
`

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const user = getUserData();

    const totalLikes = await getAllLikes(id);
    const theater = await getTheatreById(id);
    const isOwner = user?.id == theater._ownerId;
    let isThisUserHasALike = '';
    if (user) {
        isThisUserHasALike = await isUserHasLiked(id, user.id);
    }
    const permissionForLike = !isOwner && user && isThisUserHasALike == 0;
    ctx.render(detailsTemplate(theater, isOwner, totalLikes, permissionForLike, like));

    async function like() {

        sendALike(id)
        ctx.page.redirect(`/details/${id}`)
    }
}


//
