import { getPetById, donationByUser, totalDonations, sendDonations } from '../api/getter.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (pet, isOwner, totalDonation, donate, btn) => html` 
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${pet.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: ${Number(totalDonation) * 100}$</h4>
            </div>
            <!-- if there is no registered user, do not display div-->
            <div class="actionBtn">
                <!-- Only for registered user and creator of the pets-->
                ${isOwner ? html`
                <a href="/catalog/${pet._id}/edit" class="edit">Edit</a>
                <a href="/catalog/${pet._id}/delete" class="remove">Delete</a>` : ''}

                ${btn ? '' : html`<a href="/catalog/${pet._id}" @click=${donate} class="donate">Donate</a>`}
            </div>
        </div>
    </div>
</section>
`
export async function detailsView(ctx) {

    const petId = ctx.params.id;
    const user = await getUserData();

    const totalDonation = await totalDonations(petId);

    let isThisUserDonate = false;

    if (user) {
        isThisUserDonate = await donationByUser(petId, user.id);
    }

    const pet = await getPetById(petId);
    const petOwnerId = pet._ownerId;

    const isOwner = user?.id == petOwnerId;
    const btn = isOwner || isThisUserDonate || !user;

    ctx.render(detailsTemplate(pet, isOwner, totalDonation, donate, btn));

    async function donate() {
        await sendDonations(petId)
    }
}


//<!--(Bonus Part) Only for no creator and user--> 