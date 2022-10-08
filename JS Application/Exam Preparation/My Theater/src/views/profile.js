import { getUserTheaters } from '../api/getData.js';
import { getUserData } from '../api/util.js';
import { html } from '../lib.js';

const profileTemplate = (theaters, email) => html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${email}</h2>
    </div>
    <div class="board">
        <!--If there are event-->

        ${theaters.length == 0 ? html`
        <div class="no-events">
            <p>This user has no events yet!</p>
        </div>
        ` : html`
        ${theaters.map(t => html`
        <div class="eventBoard">
            <div class="event-info">
                <img src=${t.imageUrl}>
                <h2>${t.title}</h2>
                <h6>${t.date}</h6>
                <a href="/details/${t._id}" class="details-button">Details</a>
            </div>
        </div>
        `)}
        `}
        <!--If there are no event-->

    </div>
</section>
`


export async function profileView(ctx) {
    const user = getUserData();

    const theaters = await getUserTheaters(user.id);
    ctx.render(profileTemplate(theaters, user.email))
}