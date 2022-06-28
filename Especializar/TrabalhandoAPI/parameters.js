const express = require('express');

const app = express();

app.listen('3000');

app.use(express.json());

//BODY PARAMETERS
// app.route('/').post((req, res) => {
//   const { name, age } = req.body;
//   res.send(`Meu nome e ${name} e tenho ${age} anos`);
// });

// ROUTE PARAMETERS
// app.route('/').get((req, res) => {
//   res.send('Ola');
// });

// app.route('/:name').get((req, res) => {
//   res.send(req.params.name);
// });

// app.route('/sobre/:variavel').get((req, res) => {
//   res.send(req.params.variavel);
// });

//QUERY PARAMETERS - forma de mandar parametros para dentro da URL de acordo com variaveis que criamos diretamente na requisicao

app.route('/').get((req, res) => {
  res.send(req.query.nome);
});
