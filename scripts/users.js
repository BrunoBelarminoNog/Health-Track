let users;

const USER_MOCK = {
  name: "John Doe",
  email: "john.doe@gmail.com",
  password: "Test@1234",
  birthday: "1991-12-19",
  height: 184,
  weight: 78,
  sedentary: 2,
  objectives: ["mind", "health"],
};

function getUsers() {
  let usersStorage = JSON.parse(localStorage.getItem("@healtht/users"));
  if (!usersStorage) {
    localStorage.setItem("@healtht/users", JSON.stringify([USER_MOCK]));
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

async function updateUser(updatedUser) {
  users = await getUsers();

  if (users.length > 0) {
    const index = users.findIndex((user) => user.email === updatedUser.email);
    users.splice(index, 1);
    users = [updatedUser, ...users];
  } else {
    users = [updatedUser];
  }

  await localStorage.setItem("@healtht/users", JSON.stringify(users));
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
