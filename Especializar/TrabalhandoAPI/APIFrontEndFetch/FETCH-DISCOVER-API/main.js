const url = 'http://localhost:5500/api';

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => (renderApiResult.textContent = JSON.stringify(data)))
    .catch(error => console.log(error));
}

//JSON stringify serve para pegar um objeto ou um json e transformar em texto simples para mostrar em HTML
// Para enviar como body tbm n podemos mandar direto como objeto, precisamos enviar como texto simples JSON stringify
function getUser() {
  fetch(`${url}/2`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      city.textContent = data.city;
      avatar.src = data.avatar;
    });
}

function addUser(newUser) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  })
    .then(response => response.json())
    .then(data => (alertApi.textContent = data))
    .catch(error => console.log(error));
}

function updateUser(updateUser) {
  fetch(`${url}/1`, {
    method: 'PUT',
    body: JSON.stringify(updateUser),
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
    .then(response => response.json())
    .then(data => (alertApi.textContent = data))
    .catch(error => console.log(error));
}

function deleteUser(userId) {
  fetch(`${url}/${userId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
    .then(response => response.json())
    .then(data => (alertApi.textContent = data))
    .catch(error => console.log(error));
}
const newUser = {
  name: 'Maria',
  avatar: 'http://picsum.photos/200/300',
  city: 'Goiania',
};

const updatedUser = {
  name: 'Joao Pe de Feijao',
  avatar: 'http://picsum.photos/200/300',
  city: 'Rio das cobras',
};

// addUser(newUser);
// updateUser(updatedUser);
deleteUser(3);
getUsers();
// getUser();
