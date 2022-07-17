function attachEvents() {

    let loadPostsBtn = document.getElementById('btnLoadPosts');
    let selectPost = document.getElementById('posts');
    let viewBtn = document.getElementById('btnViewPost');

    let postTitle = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');
    let postCommentUl = document.getElementById('post-comments');

    let postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    loadPostsBtn.addEventListener('click', () => {
        fetch(postsUrl)
            .then(res => res.json())
            .then(data => {
                Object.values(data).forEach(x => {
                    el('option', `${x.title}`, ['value', `${x.id}`], selectPost);
                })
            })
    });

    viewBtn.addEventListener('click', () => {
        postCommentUl.innerHTML = '';

        let postId = selectPost.value;

        fetch(`${postsUrl}/${postId}`)
        .then(res => res.json())
        .then(data => {
            postTitle.textContent = `${data.title}`
            postBody.textContent = `${data.body}`
        });
        let commentsUrl = 'http://localhost:3030/jsonstore/blog/comments'
        fetch(commentsUrl)
        .then(res => res.json())
        .then(data => {
            Object.values(data).filter(x=> x.postId == postId).forEach(y=> {
                el('li', `${y.text}`,'', postCommentUl)
            });
        })
    });

    function el(type, text, attributes, parent) {
        let element = document.createElement(type)
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