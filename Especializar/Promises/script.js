// let status = false;

// const promise = new Promise((resolve, reject) => {
//   if (status) {
//     return resolve('pedido aceito');
//   }
//   return reject('pedido negado');
// });
// promise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(erro => console.log(erro))
//   .finally(() => console.log('promessa finalizada'));

// console.log('Aguardando');

// async function start() {
//   try {
//     const result = await promise;
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log('promessa finalizada');
//   }
// }
// start();

//MANEIRA Q FIZ PARA USAR FETCH COM ASYNC AWAIT
// async function start() {
//   try {
//     const user = await fetch('https://api.github.com/users/maykbrito');
//     const data = await user.json();
//     const repos = await fetch(data.repos_url);
//     const json = await repos.json();
//     console.log(json);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log('promise done');
//   }
// }

//MANEIRA OTIMIZADA
// async function start() {
//   try {
//     const user = 'https://api.github.com/users/maykbrito';
//     const data = await fetch(user).then(res => res.json());
//     const repos = await fetch(data.repos_url).then(r => r.json());
//     console.log(repos);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log('Promisee done');
//   }
// }
// start();

// import axios from 'axios';

//MANEIRA USANDO AXIOS EM ASYNC AWAIT
// async function start() {
//     try{
//       const url = 'https://api.github.com/users/maykbrito';
//       const user = await axios.get(url);
//       const repos = await axios.get(user.data.repos_url);
//       console.log(repos.data);
//     }catch(e){
//         console.log(e);
//     }finally{
//         console.log("Finalmente");
//     }
// }
// start()
