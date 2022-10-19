import { getOfferById, updateOffer } from '../api/getData.js';
import { html } from '../lib.js';

const editTemplate = (onSubmit, offer) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="title" id="job-title" placeholder="Title" .value=${offer.title} />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value=${offer.imageUrl} />
            <input type="text" name="category" id="job-category" placeholder="Category" .value=${offer.category} />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"
                .value=${offer.description}></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50"
                .value=${offer.requirements}></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" .value=${offer.salary} />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`

export async function editView(ctx) {
    const id = ctx.params.id;

    const offer = await getOfferById(id);

    ctx.render(editTemplate(onSubmit, offer));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const title = formData.get('title').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const category = formData.get('category').trim();
        const description = formData.get('description').trim();
        const requirements = formData.get('requirements').trim();
        const salary = formData.get('salary').trim();


        if (title == '' || imageUrl == '' || category == '' || description == '' || requirements == '' || salary == '') {
            return alert('All fields are required!');
        }
        await updateOffer(id, title, imageUrl, category, description, requirements, salary);

        e.target.reset();
        ctx.page.redirect(`/details/${id}`)
    }
}