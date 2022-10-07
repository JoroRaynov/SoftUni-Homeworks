import { createMeme } from '../api/getMemes.js';
import { html } from '../lib.js';
import { notify } from './notify.js';

const createTemplate = onSubmit => html`
      <section id="create-meme">
            <form @submit=${onSubmit} id="create-form">
                  <div class="container">
                        <h1>Create Meme</h1>
                        <label for="title">Title</label>
                        <input id="title" type="text" placeholder="Enter Title" name="title" />
                        <label for="description">Description</label>
                        <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                        <label for="imageUrl">Meme Image</label>
                        <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl" />
                        <input type="submit" class="registerbtn button" value="Create Meme" />
                  </div>
            </form>
      </section>
`;

export function createView(ctx) {
      ctx.render(createTemplate(onSubmit));

      async function onSubmit(e) {
            e.preventDefault();

            let card = Object.fromEntries(new FormData(e.target));
            let data = {
                  title: card.title,
                  description: card.description,
                  imageUrl: card.imageUrl,
            };

            if (
                  data.title == '' ||
                  data.description == '' ||
                  data.imageUrl == ''
            ) {
                  return notify('All fields are required!');
            }

            await createMeme(data);
            ctx.page.redirect('/memes');
      }
}
