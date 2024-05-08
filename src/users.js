// Imports small array of users
// Pretend it's an API request
const users = require("./data").default;

//Promise
function infoUser(users){
  return new Promise((resolve, reject) => {
    console.log(`Se estan buscando los usuarios: ${users}`);
    setTimeout(() => {
        console.log(`Usuarios encontrados: ${users} `);
        resolve(`Aqui estan los usuarios:${users}`);
    }, 4000);

})
}

// Fetches all users
const getUsers = () => {
  return users;
};

// Filters users by specific ID
function getUserById(id){
  return users.find((user) => user.id === id);
};

// test
// console.log(getUser(3));

module.exports = { getUserById, getUsers };

