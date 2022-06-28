const url = 'http://localhost:5500/api';

function getUsers() {
  axios
    .get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data);
    })
    .catch(error => console.log(error));
}

function addUser(newUser) {
  axios
    .post(url, newUser)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}

function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then(response => {
      userName.textContent = `nome: ${response.data.name}`;
      userCity.textContent = `cidade: ${response.data.city}`;
      userId.textContent = `id: ${response.data.id}`;
      userAvatar.src = response.data.avatar;
    })
    .catch(error => console.log(error));
}

function updateUser(id, updateUser) {
  axios
    .put(`${url}/${id}`, updateUser)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}

function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}

const newUser = {
  name: 'Joao Vitor',
  avatar: 'http://picsum.photos/200/300',
  city: 'New York',
};

const updatedUser = {
  name: 'Gabriela Vieira',
  avatar: 'http://picsum.photos/200/300',
  city: 'Buenos Aires',
};
getUsers();
// addUser(newUser);
getUser(5);
// updateUser(5, updatedUser);

deleteUser(3);
