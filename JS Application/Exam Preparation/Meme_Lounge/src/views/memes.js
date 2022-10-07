import { getAllMemes } from '../api/getMemes.js';
import { html } from '../lib.js';

const memeTemplate = memes => html`
      <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                  ${memes.length == 0
                  ? html`<p class="no-memes">No memes in database.</p>`
                  : memes.map(
                  m => html`
                  <div class="meme">
                        <div class="card">
                              <div class="info">
                                    <p class="meme-title">
                                          ${m.title}
                                    </p>
                                    <img class="meme-image" alt="meme-img" src=${m.imageUrl} />
                              </div>
                              <div id="data-buttons">
                                    <a class="button" href="/memes/${m._id}">Details</a>
                              </div>
                        </div>
                  </div>
                  `
                  )}
                  <!-- Display : All memes in database ( If any ) -->
      
                  <!-- Display : If there are no memes in database -->
            </div>
      </section>
`;

export async function memeView(ctx) {
      const memes = await getAllMemes();
      ctx.render(memeTemplate(memes));
}
