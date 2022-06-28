// function saida(data) {
//   data();
// }

// // saida(() => console.log(12345));

// setTimeout(() => console.log('Hello'), 0);
// console.log(123);

const https = require('https');
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2';

https.get(API, res => {
  console.log(res.statusCode);
});

console.log('Conectando API');
