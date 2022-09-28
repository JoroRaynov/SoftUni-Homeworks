import { createPost } from '../api/getter.js';
import { html } from '../lib.js';

const createTemplate = (onSubmit) => html` 
<section id="create-page" class="auth">
    <form @submit=${onSubmit} id="create">
        <h1 class="title">Create Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title">
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description">
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl">
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address">
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone">
        </article>

        <input type="submit" class="btn submit" value="Create Post">
    </form>
</section>
`

export function createView(ctx) {

    ctx.render(createTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));

        const data = {
            title: formData.title,
            description: formData.description,
            imageUrl: formData.imageUrl,
            address: formData.address,
            phone: formData.phone
        }
        if (data.title == '' || data.description == '' || data.imageUrl == '' || data.address == '' || data.phone == '') {
            return alert('All fields are required!')
        }
        await createPost(data)
        e.target.reset();
        ctx.page.redirect('/catalog')

    }
}