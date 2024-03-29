import { updatePost, getById } from '../api/getter.js';
import { html } from '../lib.js';

const editTemplate = (onSubmit, post) => html`
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <h1 class="title">Edit Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title" value="" .value=${post.title}>
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description" .value=${post.description}>
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl" .value=${post.imageUrl}>
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address" .value=${post.address}>
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone" .value=${post.phone}>
        </article>

        <input type="submit" class="btn submit" value="Edit Post">
    </form>
</section>
`

export async function editView(ctx) {
    const id = ctx.params.id
    const post = await getById(id);

    ctx.render(editTemplate(onSubmit, post))

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
        await updatePost(id, data)
        e.target.reset();
        ctx.page.redirect('/catalog/' + id)
    }
}