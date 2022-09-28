import { getNewGames } from "../api/getData.js";
import { html } from "../lib.js";


const homeTemplate = (games) => html`
<section id="welcome-world">

    <div class="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero">

    <div id="home-page">
        <h1>Latest Games</h1>

        <!-- Display div: with information about every game (if any) -->
        ${games.length == 0 ? html`<p class="no-articles">No games yet</p>` :
         games.map(g => html`
        <div class="game">
            <div class="image-wrap">
                <img src=${g.imageUrl}>
            </div>
            <h3>${g.title}</h3>
            <div class="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div class="data-buttons">
                <a href="/details/${g._id}" class="btn details-btn">Details</a>
            </div>
        </div>
        `)}






        <!-- Display paragraph: If there is no games  -->

    </div>
</section>
`

export async function homeView(ctx) {

    const games = await getNewGames();
   const lastThree = games.slice(0, 3)
    ctx.render(homeTemplate(lastThree))
}