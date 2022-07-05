function create(words) {

   let divEl = document.getElementById('content')
   for (const word of words) {

      let div = document.createElement('div');

      let p = document.createElement('p');

      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);

      div.addEventListener('click', (e) => {
         let test = e.target.children[0];
         test.style.display = 'block';
         console.log(test);
      })
      divEl.appendChild(div);
   }
}