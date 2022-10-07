import { allOwnerMemes, getAllMemes, userProfile } from '../api/getMemes.js';
import { getUserData } from '../api/util.js';
import { html } from '../lib.js';

const profileTemplate = (user, ownerMemes) => html`<section id="user-profile-page" class="user-profile">
      <article class="user-info">
            <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender}.png" />
            <div class="user-content">
                  <p>Username: ${user.username}</p>
                  <p>Email: ${user.email}</p>
                  <p>My memes count: ${ownerMemes.length}</p>
            </div>
      </article>
      <h1 id="user-listings-title">User Memes</h1>
      <div class="user-meme-listings">
            ${ownerMemes == 0
                  ? html`<p class="no-memes">No memes in database.</p>`
                  : ownerMemes.map(
                          m => html`
            <!-- Display : All created memes by this user (If any) -->
            <div class="user-meme">
                  <p class="user-meme-title">${m.title}</p>
                  <img class="userProfileImage" alt="meme-img" src=${m.imageUrl} />
                  <a class="button" href="/memes/${m._id}">Details</a>
            </div>
            `
                    )}
      </div>
</section>`;
export async function profileView(ctx) {
      const user = getUserData();

      const allMeme = await userProfile(user.id);

      ctx.render(profileTemplate(user, allMeme));
}
