let section = document.querySelector('.section');
let responsePromise = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    if (res.status !== 200) {
      return;
    }
    res.json().then(data => {
      data.forEach((item, i, arr) => {
        let div = document.createElement('div');
        for (const paragraphElement of div.className = 'paragraph') {
        }
        let h3 = document.createElement('h3');
        for (const titleElement of h3.className = 'title') {
        }
        let tex = document.createElement('p');
        for (const textElement of tex.className = 'text') {
        }
        section.appendChild(div);
        div.appendChild(h3);
        div.appendChild(tex);
        h3.innerHTML = item.title;
        tex.innerHTML = item.body;
      })
    });
  })
  .catch((err) => {
    console.error(err);
  });
