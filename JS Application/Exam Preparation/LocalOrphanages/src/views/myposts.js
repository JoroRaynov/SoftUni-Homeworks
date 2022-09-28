import { getAllUserPosts } from '../api/getter.js';
import { getUserData } from '../api/util.js';
import { html } from '../lib.js';


const myPostTemplate = (userPosts) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>

    <!-- Display a div with information about every post (if any)-->
    <div class="my-posts">
    ${userPosts.length == 0 ? html `<h1 class="title no-posts-title">You have no posts yet!</h1>` : 
        userPosts.map(p => html `
            <div class="post">
            <h2 class="post-title">${p.title}</h2>
            <img class="post-image" src=${p.imageUrl} alt="Material Image">
            <div class="btn-wrapper">
                <a href="/catalog/${p._id}" class="details-btn btn">Details</a>
            </div>
        </div>
        ` )}
        
    </div>

</section>
`

export async function myPostsView(ctx) {
    const user = await getUserData();
    const userPosts = await getAllUserPosts(user.id)
    ctx.render(myPostTemplate(userPosts))
}