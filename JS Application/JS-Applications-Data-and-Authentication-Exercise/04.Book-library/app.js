function solve() {
    const body = document.querySelector('body')
    const loadBooksBtn = document.getElementById('loadBooks');
    const form = document.querySelector('form');
    let form1;
    const baseUrl = 'http://localhost:3030/jsonstore/collections/books';
    const tbody = document.querySelector('tbody');
    
    form.addEventListener('submit', onSubmit);
    loadBooksBtn.addEventListener('click', onLoadBooks);

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        let title = formData.get('title');
        let author = formData.get('author');
       
        try {
            if (title == '' || author == '') {
                throw new Error('All fields are required!');
            }
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    author
                })
            });
            const responseData = await response.json();
            clear()
            loadBooksBtn.click();
            title = '';
        } catch (err) {
            alert(err.message);
        }
    }

    async function onLoadBooks() {
        tbody.innerHTML = '';
        const response = await fetch(baseUrl);

        const responseData = await response.json();
        Object.entries(responseData).forEach(x => {
            let id = x[0];
            let author = x[1].author;
            let title = x[1].title;

            let tr = document.createElement('tr');

            tbody.appendChild(tr);

            let titleCell = tr.insertCell(0);
            titleCell.textContent = title;

            let authorCell = tr.insertCell(1);
            authorCell.textContent = author;

            let buttons = tr.insertCell(2);

            let btnEdit = document.createElement('button');
            btnEdit.textContent = 'Edit';
            btnEdit.setAttribute('id', id)
            buttons.appendChild(btnEdit);

            let delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.setAttribute('id', id)
            buttons.appendChild(delBtn);

            delBtn.addEventListener('click', onDelete.bind(null, id));
            btnEdit.addEventListener('click', onEdit)
        })
    }
    async function onEdit(e) {
        let id = e.currentTarget.id;
        form1 = el('form', '', '', '');
        el('h3', 'Edit FORM', '', form1);
        el('label', 'TITLE', '', form1);
        let inputTitle = el('input', '', ['type', 'text', 'name', 'title', 'placeholder', 'Title...'], form1);
        inputTitle.value = e.currentTarget.parentNode.parentNode.children[0].textContent;
        el('label', 'AUTHOR', '', form1);
        let inputAuthor = el('input', '', ['type', 'text', 'name', 'author', 'placeholder', 'Author...'], form1);
        let btn = el('button', 'Save', '', form1);
        inputAuthor.value = e.currentTarget.parentNode.parentNode.children[1].textContent
        body.replaceChild(form1, form);

        btn.addEventListener('click', onSave.bind(null, id));



    }

    async function onSave(id, e) {
        e.preventDefault();

        let author = e.currentTarget.parentNode.children[4].value;
        let title = e.currentTarget.parentNode.children[2].value;
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                author,
                title
            })
        });
        const data = await response.json();
        loadBooksBtn.click();
        body.replaceChild(form, form1)
    }

    async function onDelete(id){

        await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },

        })
        loadBooksBtn.click();
    }

    function clear(){
        document.querySelector('[name="title"]').value = '';
        document.querySelector('[name="author"]').value = '';

    }
    function el(type, text, attributes, parent) {
        let element = document.createElement(type);
        element.textContent = text;

        for (let i = 0; i < attributes.length; i += 2) {
            element.setAttribute(attributes[i], attributes[i + 1]);
        }
        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }
}
solve()