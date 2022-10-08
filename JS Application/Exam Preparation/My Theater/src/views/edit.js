import { getTheatreById, updateTheater } from '../api/getData.js';
import { html } from '../lib.js';

const editTemplate = (onSubmit, theater) => html`
<section id="editPage">
    <form @submit=${onSubmit} class="theater-form">
        <h1>Edit Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" .value=${theater.title}>
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${theater.date}>
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author" .value=${theater.author}>
        </div>
        <div>
            <label for="description">Theater Description:</label>
            <textarea id="description" name="description" placeholder="Description"
                .value=${theater.description}></textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" .value=${theater.imageUrl}>
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>`


export async function editView(ctx) {
    const id = ctx.params.id;
    const theater = await getTheatreById(id)
    ctx.render(editTemplate(onSubmit, theater));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const title = formData.get('title');
        const data = formData.get('date');
        const author = formData.get('author');
        const description = formData.get('description');
        const image = formData.get('imageUrl');


        if (title == '' || data == '' || author == '' || description == '' || image == '') {
            return alert('All fields are required!');
        }

        await updateTheater(id, title, data, author, image, description)
        e.target.reset();
        ctx.page.redirect(`/details/${id}`);
    }
}