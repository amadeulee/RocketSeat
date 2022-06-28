const express = require('express');

const app = express();

app.listen('3000');

// app.get('/', (req, res) => res.send('Hello'));
// app.get('/sobre', (req, res) => res.send('Hello sobre'));

// app.use(express.json());
// app.route('/').post((req, res) => res.send(req.body));

//Quando recebemos algo da API, precisamos falar que o que estamos recebendo eh um JSON, por isso usamos middleware, que eh a ponte entre requisicoes. Toda informacao que chegar na API vai passar pelo middleware
// app.use(express.json());
// let author = 'Johnathan';

// app.get('/', (req, res) => res.send(author));
// app.route('/').put((req, res) => {
//   author = req.body.author;
//   res.send(author);
// });

// app.route('/').delete((req, res) => {
//   res.send('Apagado');
// });
