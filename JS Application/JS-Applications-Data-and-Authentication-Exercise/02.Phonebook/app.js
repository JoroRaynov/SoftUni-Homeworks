function attachEvents() {
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    const personInputEl = document.getElementById('person');
    const phoneInputEl = document.getElementById('phone');

    const phoneBookUl = document.getElementById('phonebook');

    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    loadBtn.addEventListener('click', onLoad);
    createBtn.addEventListener('click', onCreate);

    async function onLoad() {
        phoneBookUl.innerHTML = '';
        const res = await fetch(baseUrl);
        const resData = await res.json();

        Object.values(resData).forEach(x => {
            let li = el('li', `${x.person}:${x.phone}`, '', phoneBookUl);
            let btn = el('button', 'Delete', ['id', `${x._id}`], li);
            btn.addEventListener('click', onDelete)
        });
        if (phoneBookUl.textContent == '') {
            phoneBookUl.textContent = 'No phones available!';
        }
    }

    async function onDelete(e) {
        const id = e.currentTarget.id;
        await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        loadBtn.click()
    }

    async function onCreate() {
        let person = personInputEl.value;
        let phone = phoneInputEl.value;

        personInputEl.value = '';
        phoneInputEl.value = '';
        const info = {
            person,
            phone
        }
        try {
            if (person == '' || phone == '') {
                throw new Error('All field required');
            }
            await fetch(baseUrl, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(info)
            });
            loadBtn.click();

        } catch (err) {
            alert(err.message)
        }

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



attachEvents();