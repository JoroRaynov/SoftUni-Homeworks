import { deleteById, getById } from '../api/getMemes.js';
import { getUserData } from '../api/util.js';
import { html } from '../lib.js';

const detailsTemplate = (meme, isOwner, onDelete) => html`
      <section id="meme-details">
            <h1>Meme Title: ${meme.title}</h1>
            <div class="meme-details">
                  <div class="meme-img">
                        <img alt="meme-alt" src=${meme.imageUrl} />
                  </div>
                  <div class="meme-description">
                        <h2>Meme Description</h2>
                        <p>${meme.description}</p>

                        ${isOwner
                              ? html`<a
                                            class="button warning"
                                            href="/edit/${meme._id}"
                                            >Edit</a
                                      >
                                      <button
                                            @click=${onDelete}
                                            class="button danger"
                                      >
                                            Delete
                                      </button> `
                              : ''}
                  </div>
            </div>
      </section>
`;

export async function detailsView(ctx) {
      const memeId = ctx.params.id;
      const user = getUserData();

      let currMemeInfo = await getById(memeId);
      let currMemeOwnerId = currMemeInfo._ownerId;

      let isOwner = user?.id == currMemeOwnerId;
      ctx.render(detailsTemplate(currMemeInfo, isOwner, onDelete));

      function onDelete() {
            console.log('clicked!');

            const choice = confirm(
                  'Are you sure you want to delete this meme?'
            );

            if (choice) {
                  console.log(memeId);
                  deleteById(memeId);
                  ctx.page.redirect('/memes');
            }
      }
}
