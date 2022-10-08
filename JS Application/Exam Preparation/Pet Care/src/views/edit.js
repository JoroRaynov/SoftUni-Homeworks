import { getPetById, updatePet } from '../api/getter.js';
import { html } from '../lib.js';

const editTemplate = (onSubmit, pet) => html` 
<section id="editPage">
    <form @submit=${onSubmit} class="editForm">
        <img src="/images/editpage-dog.jpg">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" .value=${pet.name}>
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" .value=${pet.breed}>
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" .value=${pet.age}>
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" .value=${pet.weight}>
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" .value=${pet.image}>
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>
`

export async function editView(ctx) {
    const pet = await getPetById(ctx.params.id)
    ctx.render(editTemplate(onSubmit, pet));

    console.log(pet._id);
    async function onSubmit(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));


        const data = {
            name: formData.name,
            breed: formData.breed,
            age: formData.age,
            weight: formData.weight,
            image: formData.image
        }

        if (data.name == '' || data.breed == '' || data.age == '' || data.weight == '' || data.image == '') {
            return alert('All fields are required!')
        }
        await updatePet(pet._id, data);
        e.target.reset();
        ctx.page.redirect(`/catalog/${pet._id}`);

    }
}