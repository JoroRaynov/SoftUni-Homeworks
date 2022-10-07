import { getAlbumById } from '../api/getData.js';
import { getUserData } from '../api/util.js';
import { html } from '../lib.js';

const detailsTemplate = (album, isOwner, user) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${album.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: $${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>${album.description}</p>
            </div>

            <!-- Only for registered user and creator of the album-->
            ${isOwner ? html`
            <div class="actionBtn">
                <a href="/details/${album._id}/edit" class="edit">Edit</a>
                <a href="/details/${album._id}/delete" class="remove">Delete</a>
            </div>
            ` : ''}

        </div>
    </div>
</section>

`

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const user = getUserData();
    const album = await getAlbumById(id)
    const isOwner = user?.id == album._ownerId
    ctx.render(detailsTemplate(album, isOwner, user))
}


//
