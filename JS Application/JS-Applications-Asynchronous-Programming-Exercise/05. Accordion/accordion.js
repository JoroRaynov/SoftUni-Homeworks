function solution() {

    let baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let main = document.getElementById('main');

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            data.forEach(x => {
                console.log('??');
                console.log(data);
                let divAccordion = el('div', '', ['class', 'accordion'], main);

                let divHead = el('div', '', ['class', 'head'], divAccordion);

                el('span', `${x.title}`, '', divHead);
                let moreBtn = el('button', 'More', ['class', 'button', 'id', `${x._id}`], divHead);
                let divExtra = el('div', '', ['class', 'extra'], divAccordion);


                moreBtn.addEventListener('click', (e) => {
                    let id = e.currentTarget.id;
                    let idUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`

                    fetch(idUrl)
                        .then(res => res.json())
                        .then(data => {
                            el('p', `${data.content}`, '', divExtra);
                            if (moreBtn.textContent == 'More') {
                                moreBtn.textContent = 'Less'
                                divExtra.style.display = 'block'
                            } else {
                                moreBtn.textContent = 'More'
                                divExtra.style.display = 'none'
                            }
                        })
                });

            });
        });

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

solution()