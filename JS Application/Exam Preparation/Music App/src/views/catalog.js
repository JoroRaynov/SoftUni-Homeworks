import { getAllAlbums } from '../api/getData.js';
import { getUserData } from '../api/util.js';
import { html } from '../lib.js';

const catalogTemplate = (albums, user) => html`
<section id="catalogPage">
    <h1>All Albums</h1>
    ${albums.length == 0 ? html`<p>No Albums in Catalog!</p>` : html`
    ${albums.map(a => html`
    <div class="card-box">
        <img src=${a.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${a.name}</p>
                <p class="artist">${a.artist}</p>
                <p class="genre">Genre: ${a.genre}</p>
                <p class="price">Price: $${a.price}</p>
                <p class="date">Release Date: ${a.releaseDate}</p>
            </div>
            ${user ? html`<div class="btn-group">
                <a href="/details/${a._id}" id="details">Details</a>
            </div>` : ''}
        </div>
    </div>
    `)}

    `}


    <!--No albums in catalog-->


</section>
`

export async function catalogView(ctx) {
    const user = getUserData();
    const albums = await getAllAlbums();
    ctx.render(catalogTemplate(albums, user));


}