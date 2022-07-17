function lockedProfile() {

    let main = document.getElementById('main');
    let url = 'http://localhost:3030/jsonstore/advanced/profiles';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let n = 2;
            Object.values(data).forEach(p => {
                console.log(p);
                let divProfile = createEl('div', '', ['class', 'profile']);

                createEl('img', '', ['src', './iconProfile2.png', 'class', 'userIcon'], divProfile)
                createEl('label', 'Lock ', '', divProfile);
                let lock = createEl('input', '', ['type', 'radio', 'name', `user${n}Locked`, 'value', 'lock', 'checked', ''], divProfile);
                createEl('label', ' Unlock ', '', divProfile);
                let unlock = createEl('input', '', ['type', 'radio', 'name', `user${n}Locked`, 'value', 'unlock'], divProfile);
                createEl('br', '', '', divProfile);
                createEl('hr', '', '', divProfile);
                createEl('label', 'Username:', '', divProfile);
                createEl('input', '', ['type', 'text', 'name', `user${n}Username`, 'value', `${p.username}`, 'disabled', '', 'readonly', ''], divProfile);
                let divUserHiddenFields = createEl('div', '', ['id', `user${n}HiddenFields`]);
                createEl('hr', '', '', divUserHiddenFields);
                createEl('label', 'Email:', '', divUserHiddenFields);
                createEl('input', '', ['type', 'email', 'name', `user${n}Email`, 'value', `${p.email}`, 'disabled', '', 'readonly', ''], divUserHiddenFields);
                createEl('label', 'Age:', '', divUserHiddenFields);
                createEl('input', '', ['type', 'email', 'name', `user${n}Age`, 'value', `${p.age}`, 'disabled', '', 'readonly', ''], divUserHiddenFields)
                let showMoreBtn = createEl('button', 'Show more', '', divProfile)

                n++

                main.appendChild(divProfile);

                showMoreBtn.addEventListener('click', (e) => {

                    if (showMoreBtn.textContent == "Show more" && lock.checked === false) {
                        showMoreBtn.textContent = "Hide it";
                        divProfile.appendChild(divUserHiddenFields);
                    } else if (showMoreBtn.textContent == "Hide it" && lock.checked === false) {
                        showMoreBtn.textContent = "Show more";
                        divUserHiddenFields.remove();
                    }

                });
            });


        });


    function createEl(type, text, attributes = [], parent) {
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