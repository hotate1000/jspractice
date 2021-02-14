'use strict'

// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     // console.log('処理完了');
//     resolve("処理完了");
//   },1000)
// });

// promise.then(hiki => console.log(hiki));

const url = 'https://qiita.com/api/v2/tags/javascript/items';
const btn = document.getElementById('btn');
const list = document.getElementById('list');

const createList = function(item) {
  const li = document.createElement('li');
  const a  = document.createElement('a');

  a.href         = item.url;
  li.textContent = item.title;

  a.appendChild(li);
  list.appendChild(a);
}

btn.addEventListener  ('click', function() {
  list.innerHTML = '';
  fetch(url)
  .then(data => data.json())
  .then(data => {
    data.forEach(item => createList(item))
  });
});



const gitUrl = 'https://api.github.com/search/repositories?q=javascript';
const gitBtn  = document.getElementById('gitBtn');
const gitList = document.getElementById('gitList');

const createGitList = function(item) {
  // const li = document.createElement('li');
  // const a  = document.createElement('a');
  const h2 = document.createElement('h2');
  // a.href   = item.gitUrl;
  // li.textContent = item.title;
  
  h2.textContent = '件数' + item.total_count;
  // a.appendChild(li);
  // githubList.appendChild(a);
  gitList.appendChild(h2);
}



gitBtn.addEventListener('click', () => {
  gitList.innerHTML = '';
  fetch(gitUrl)
  .then(data => data.json())
  .then(data => createGitList(data))
});

