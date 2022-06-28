const axios = require('axios');
const express = require('express');

const app = express();

app.listen('3000');

app.route('/').get((req, res) => {
  const url = 'https://api.github.com/users/amadeulee';
  const user = axios
    .get(url)
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(erro => console.log(erro));
});
