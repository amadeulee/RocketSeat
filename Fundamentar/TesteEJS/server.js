const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const person = { name: 'John', age: 20, school: 'University of Cambridge' };
  res.render('index', { John: person });
});

app.listen(8081);

console.log('Rodando o teste');
