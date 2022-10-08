import { getAllPets } from '../api/getter.js';
import { html } from '../lib.js';


const catalogTemplate = (pets) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${pets.length == 0 ? html`
        <div>
            <p class="no-pets">No pets in dashboard</p>
        </div> `
        : pets.map(p => html`
        <div class="animals-board">
            <article class="service-img">
                <img class="animal-image-cover" src=${p.image}>
            </article>
            <h2 class="name">${p.name}</h2>
            <h3 class="breed">${p.breed}</h3>
            <div class="action">
                <a class="btn" href="/catalog/${p._id}">Details</a>
            </div>
        </div>
        `)}
    </div>
</section>
`


export async function catalogView(ctx) {

    const pets = await getAllPets();

    ctx.render(catalogTemplate(pets))


}