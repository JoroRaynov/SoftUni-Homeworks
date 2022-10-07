import { search } from '../api/getData.js';
import { getUserData } from '../api/util.js';
import { html } from '../lib.js';

const searchTemplate = (searchSong, song, user) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button class="button-list" @click=${searchSong}>Search</button>
    </div>

    <h2>Results:</h2>

    <!--Show after click Search button-->
    <div class="search-result">
        <!--If have matches-->
        ${song.length == 0 ? html`<p class="no-result">No result.</p>` : html`
        ${song.map(s => html`

        <div class="card-box">
            <img src=${s.imgUrl}>
            <div>
                <div class="text-center">
                    <p class="name">Name: ${s.name}</p>
                    <p class="artist">Artist: ${s.artist}</p>
                    <p class="genre">Genre: ${s.genre}</p>
                    <p class="price">Price: $${s.price}</p>
                    <p class="date">Release Date: ${s.releaseDate}</p>
                </div>
                ${user ? html`<div class="btn-group">
                    <a href="/details/" id="details">Details</a>
                </div>` : ''}
            </div>
        </div>`)}

        `}

        <!--If there are no matches-->

    </div>
</section>
`

export async function searchView(ctx) {

    const user = getUserData();

    async function searchSong() {
        const searchField = document.getElementById('search-input');

        const song = await search(searchField.value);
        if (song.length > 0) {

            ctx.render(searchTemplate(searchSong, song, user))
        }

    }
    ctx.render(searchTemplate(searchSong, []))
}