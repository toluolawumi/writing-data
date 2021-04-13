const fetch = require('node-fetch');
const fs = require('fs');

fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.text())
    .then((text) => {
        fs.writeFile('./result/posts.json', text, function (err) {
        if (err) throw err;
        console.log('Saved!');
      }) })
  