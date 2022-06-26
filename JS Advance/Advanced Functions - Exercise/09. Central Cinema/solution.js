
    function solve() {
        const input = {
            name: document.querySelector('#add-new input[placeholder="Name"]'),
            hall: document.querySelector('#add-new input[placeholder="Hall"]'),
            ticketPrice: document.querySelector('#add-new input[placeholder="Ticket Price"]')
        };
        const moviesSection = document.querySelector('#movies ul');
        const archiveSection = document.querySelector('#archive ul');
    
        const onScreenBtn = document.querySelector('body button');
        const clearBtn = document.querySelector('#archive > button:nth-child(3)');
        clearBtn.addEventListener('click', onClear);
    
        onScreenBtn.addEventListener('click', onScreen);
    
        function onScreen(ev) {
            ev.preventDefault();
    
            //are input fields filled & is ticketPrice field 
            if (input.name.value.length > 0
                && input.hall.value.length > 0
                && input.ticketPrice.value.length > 0
                && isNaN(Number(input.ticketPrice.value)) == false) {
                //keep input values
                let inputValues = {
                    name: input.name.value,
                    hall: input.hall.value,
                    ticketPrice: Number(input.ticketPrice.value)
                }
                //clear input fields
                input.name.value = '';
                input.hall.value = '';
                input.ticketPrice.value = '';
    
                //create li
                let li = createElement('li');
                moviesSection.appendChild(li);
                li.appendChild(createElement('span', inputValues.name));
                let liStrong = createElement('strong', `Hall: ${inputValues.hall}`);
                li.appendChild(liStrong);
                //create div
                let div = createElement('div');
                li.appendChild(div);
                div.appendChild(createElement('strong', (inputValues.ticketPrice).toFixed(2)));
                //create divInput
                let divInput = createElement('input');
                divInput.placeholder = 'Tickets Sold';
                div.appendChild(divInput);
    
                let btn = createElement('button', 'Archive');
                div.appendChild(btn);
                btn.addEventListener('click', onArchive);
    
                function onArchive() {
                    let boughtAmount = Number(divInput.value);
                    if (isNaN(boughtAmount) == false
                        && divInput.value.length > 0) {
                        archiveSection.appendChild(li);
                        liStrong.textContent = `Total amount: ${(boughtAmount * inputValues.ticketPrice).toFixed(2)}`;
                        li.appendChild(btn);
                        btn.textContent = 'Delete';
                        div.remove();
                        btn.removeEventListener('click', onArchive);
    
                        btn.addEventListener('click', onDelete);
    
                        function onDelete() {
                            li.remove();
                        }
                    }
                }
            }
        }
    
        function onClear(ev) {
            ev.preventDefault();
    
            Array.from(document.querySelectorAll('#archive ul li')).forEach(el => el.remove());
        }
    
        function createElement(type, content, className) {
            const element = document.createElement(type);
            if (content) {
                element.textContent = content;
            }
            if (className) {
                element.className = className;
            }
    
            return element;
        }
    }
