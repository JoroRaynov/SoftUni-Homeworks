import { createIdeas } from '../../API/data.js';

const section = document.getElementById('createPage');
const form = section.querySelector('form');

form.addEventListener('submit', onCreate);

let ctx = null;

export function showCreate(context) {
      ctx = context;
      context.showSection(section);
}

async function onCreate(e) {
      e.preventDefault();

      const formData = new FormData(form);

      const title = formData.get('title');
      const description = formData.get('description');
      const img = formData.get('imageURL');

      await createIdeas({
            title,
            description,
            img,
      });
      form.reset();
      ctx.goTo('/catalog');
}
