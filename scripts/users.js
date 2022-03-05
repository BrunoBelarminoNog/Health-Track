let users;

const USER_MOCK = {
  name: "John Doe",
  email: "john.doe@gmail.com",
  password: "Test@1234",
  birthday: "1991-12-19",
};

function getUsers() {
  let usersStorage = JSON.parse(localStorage.getItem("@healtht/users"));
  if (!usersStorage) {
    usersStorage = [USER_MOCK];
  }

  return usersStorage;
}

function getUser(email) {
  users = getUsers();

  if (users) {
    return users.filter((user) => user.email === email)[0];
  }
}

function addUser(user) {
  users = getUsers();

  if (users) {
    users = [user, ...users];
  } else {
    users = [user];
  }

  localStorage.setItem("@healtht/users", JSON.stringify(users));
}

function updateUser(updatedUser) {
  users = getUsers();

  const index = users.findIndex((user) => user.email === updatedUser.email);

  users.splice(index, 1, updatedUser);
  localStorage.setItem("@healtht/users", JSON.stringify(users));
}

function verifyUserExists(email) {
  if (!users) {
    users = getUsers();
  }

  if (users) {
    return users.filter((user) => user.email === email).length > 0;
  }

  return false;
}
