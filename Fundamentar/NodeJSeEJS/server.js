const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  const items = [
    { title: 'A', message: 'Amadeu' },
    { title: 'B', message: 'Bianca' },
    { title: 'C', message: 'Carne' },
    { title: 'D', message: 'Dinossauro' },
    { title: 'E', message: 'Estranho' },
  ];

  const subtitle = 'Estou aprendendo EJS para aprimorar as coisas q sei';
  res.render('pages/index', { qualitys: items, subtitle: subtitle });
});

app.get('/sobre', function (req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('rodando');
