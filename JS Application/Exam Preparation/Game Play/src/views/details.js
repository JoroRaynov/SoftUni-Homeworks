import { getAGameById, getAllComments, sendComment } from '../api/getData.js';
import { getUserData } from '../api/util.js';
import { html } from '../lib.js';

const detailsTemplate = (game, isOwner, comments, isAllowed, onSubmit) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">
            ${game.summary}
        </p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            <ul>
                <!-- list all comments for current game (If any) -->
                ${comments.length == 0 ? html ` <p class="no-comment">No comments.</p>` :
                    comments.map(c=> html `<li class="comment">
                    <p>Content: ${c.comment}</p>
                </li>`)}
            </ul>
        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${isOwner ? html`<div class="buttons">
            <a href="/details/${game._id}/edit" class="button">Edit</a>
            <a href="/details/${game._id}/delete" class="button">Delete</a>
        </div>` : ''}

    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    ${isAllowed ?  '' : html`
<article class="create-comment">
    <label>Add new comment:</label>
    <form @submit =${onSubmit} class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment">
    </form>
</article>
`}

</section>
`



export async function detailsView(ctx) {
    const id = ctx.params.id;
    const game = await getAGameById(id);
    const user = getUserData();
    const isOwner = user?.id == game._ownerId
    const comments = await getAllComments(id);
    const isAllowed = !user || isOwner;
    ctx.render(detailsTemplate(game, isOwner, comments, isAllowed, onSubmit));

    async function  onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);

        const comment = formData.get('comment');
        if(comment == ''){
            return alert('Please enter a comment!')
        }
         sendComment(id, comment);
         e.target.reset()
         ctx.page.redirect(`/details/${id}`)

    }
}

/*----------------------------------------------------------------
  <article class="create-comment">
        <label>Add new comment:</label>
        <form class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>*/