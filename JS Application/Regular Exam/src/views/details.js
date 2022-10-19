import { getOfferById, getTotalApplications, userApps, applyForOffer } from "../api/getData.js"
import { getUserData } from "../api/util.js";
import { html } from '../lib.js'

const detailsTemplate = (offer, isOWner, totalApp, permissionForAPply, apply) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${offer.imageUrl} alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${totalApp}</strong></p>

        <!--Edit and Delete are only for creator-->
        ${isOWner ? html` <div id="action-buttons">
            <a href="/details/${offer._id}/edit" id="edit-btn">Edit</a>
            <a href="/details/${offer._id}/delete" id="delete-btn">Delete</a>
        </div>` : ''}

        ${permissionForAPply ? html`<div id="action-buttons">
            <a href="/details/${offer._id}" id="apply-btn" @click=${apply}>Apply</a>
        </div>` : ''}

    </div>
</section>
`

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const user = getUserData()
    const offer = await getOfferById(id);

    const isOWner = user?.id == offer._ownerId

    const totalApp = await getTotalApplications(id);
    const userApp = await userApps(id, user.id);


    const permissionForAPply = !isOWner && user && !userApp;

    async function apply() {
        if (permissionForAPply) {
            await applyForOffer(id);
            ctx.page.redirect(`/details/${id}`)
        }
    }
    ctx.render(detailsTemplate(offer, isOWner, totalApp, permissionForAPply, apply));
}

