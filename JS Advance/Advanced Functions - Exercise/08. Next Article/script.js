function getArticleGenerator(articles) {
    
        function next() {
            if (articles.length > 0) {
                let newEl = articles.shift();
    
                let article = document.createElement('article');
                article.textContent = newEl;
                document.querySelector('#content').appendChild(article);
            }
        }
    
        return next;
    }
