import { getUserData } from '../api/util.js';
import { checkDonationForSpecUser, deletePost, getById, totalDonationForPost } from '../api/getter.js';
import { html } from '../lib.js';

const detailsTemplate = (post, isOwner, onClick, totalDonations, isThisUserDonate) => html` 
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${post.imageUrl} alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: ${totalDonations}</p>

                <!--Edit and Delete are only for creator-->

                <div class="btns">
                    ${isOwner ? html`
                    <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                    <a href="/catalog/${post._id}" @click=${onClick} class="delete-btn btn">Delete</a>` : ''}
                    ${isThisUserDonate ? '' :  html`<a href="/catalog/${post._id}" class="donate-btn btn">Donate</a>`}
                </div>

            </div>
        </div>
    </div>
</section>
`



export async function detailsView(ctx) {
    const postId = ctx.params.id;
    const currUser = await getUserData();
    const isThisUserDonate = await checkDonationForSpecUser(postId, currUser.id);
    const totalDonations = await totalDonationForPost(postId)

    const post = await getById(postId);
    const currentPostOwnerId = post._ownerId


    const isOwner = currUser?.id == currentPostOwnerId;
    const donate = currUser && isOwner == false;
    //donate, totalDonations
    ctx.render(detailsTemplate(post, isOwner, onClick, totalDonations, isThisUserDonate));

    async function onClick() {
        const choice = confirm("Are you sure you want to delete this post?");

        if (choice) {
            await deletePost(postId)
            ctx.page.redirect('/catalog')
        }
    }


}

//<!-- ${donate ? html`<a href="/donate" class="donate-btn btn">Donate</a>` : ''} -->
