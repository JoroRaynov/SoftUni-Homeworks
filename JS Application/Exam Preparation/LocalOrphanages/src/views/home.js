import { getAllPosts } from '../api/getter.js';
import { html } from '../lib.js';

const homeTemplate = (posts) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>

    <!-- Display a div with information about every post (if any)-->
    <div class="all-posts">
        ${posts.length == 0 ? html `<h1 class="title no-posts-title">No posts yet!</h1>` : 
    posts.map(p => html`
        <div class="post">
            <h2 class="post-title">${p.title}</h2>
            <img class="post-image" src=${p.imageUrl} alt="Material Image">
            <div class="btn-wrapper">
                <a href="/catalog/${p._id}" class="details-btn btn">Details</a>
            </div>
        </div>`)}
       

    </div>

    <!-- Display an h1 if there are no posts -->
    
</section>
`

export async function homeView(ctx) {

    let posts = await getAllPosts();


    ctx.render(homeTemplate(posts))

}