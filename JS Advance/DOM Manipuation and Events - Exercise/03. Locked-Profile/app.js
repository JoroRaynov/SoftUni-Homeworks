function lockedProfile() {
    let showMoreButtons = document.querySelectorAll('button');

    for (const button of showMoreButtons) {
        button.addEventListener('click', onClick);
    }

    function onClick(e) {
        let isLocked = e.target.parentNode.querySelector('input[value="lock"]').checked;
        let hidenF = e.target.parentNode.querySelector('div > div');

        if (!isLocked) {
            if (e.target.textContent === 'Show more') {
                e.target.textContent = 'Hide it';
                hidenF.style.display = 'block';
            } else {
                e.target.textContent = 'Show more';
                hidenF.style.display = 'none';
            }
        }
    }
}