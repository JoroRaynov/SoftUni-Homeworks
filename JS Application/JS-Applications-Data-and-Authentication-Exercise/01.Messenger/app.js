function attachEvents() {

    const url = 'http://localhost:3030/jsonstore/messenger';
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    const nameInput = document.querySelector('[name="author"]');
    const messageInput = document.querySelector('[name="content"]');
    const messageTxtArea = document.getElementById('messages');

    sendBtn.addEventListener('click', onSend);
    refreshBtn.addEventListener('click', onRefresh);

    async function onSend() {
        let name = nameInput.value;
        let msg = messageInput.value;
        nameInput.value = ''
        messageInput.value = ''
        try {
            if (name == '' || msg == '') {
                throw new Error('All fields required!');
            }
            const content = {
                author: name,
                content: msg
            }
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            });
            const responseData = await response.json();

        } catch (err) {
            alert(err.message);
        }
        refreshBtn.click()
    }


    async function onRefresh() {
        messageTxtArea.textContent = '';

        const response = await fetch(url);
        const responseData = await response.json();

        Object.values(responseData).map(x => {
            messageTxtArea.textContent += `${x.author}: ${x.content}\n`
        });
    }


}

attachEvents();