import { getAllGames } from '../api/getData.js';
import {html} from '../lib.js';

const allGamesTemplate = (games) => html `
<section id="catalog-page">
            <h1>All Games</h1>
            <!-- Display div: with information about every game (if any) -->
            ${games.length == 0 ? html `<h3 class="no-articles">No articles yet</h3>`:
            games.map(g => html `
            <div class="allGames">
                <div class="allGames-info">
                    <img src=${g.imageUrl}>
                    <h6>${g.category}</h6>
                    <h2>${g.title}</h2>
                    <a href="/details/${g._id}" class="details-button">Details</a>
                </div>

            </div>
            `)}
            

            <!-- Display paragraph: If there is no games  -->
            
        </section>
`

export async function allGamesView(ctx){


    const games = await getAllGames();
ctx.render(allGamesTemplate(games));

}