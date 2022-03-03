const formSignin = document.getElementById("form-signin");

let users;

let email;
let password;
let conection;

function getInputsSignIn() {
  email = document.getElementById("email");
  password = document.getElementById("password");
  conection = document.getElementById("conection");
}

function compareValues(value1, value2) {
  return value1 === value2;
}

function getUsersData() {
  let usersStorage = JSON.parse(localStorage.getItem("@healtht/users"));
  console.log("ok");
  if (!usersStorage) {
    usersStorage = null;
  }

  return usersStorage;
}

function verifyUserExists(email) {
  if (!users) {
    users = getUsersData();
  }

  if (users) {
    return users.filter((user) => user.email === email).length > 0;
  }

  return false;
}

function addUser(user) {
  if (!users) {
    users = getUsersData();
  }

  if (users) {
    users = [...users, user];
  } else {
    users = [user];
  }

  localStorage.setItem("@healtht/users", JSON.stringify(users));
}

function getUser(email) {
  if (!users) {
    users = getUsersData();
  }

  if (users) {
    return users.filter((user) => user.email === email)[0];
  }
}

formSignin.addEventListener("submit", (e) => {
  e.preventDefault();
  getInputsSignIn();

  const userExists = verifyUserExists(email.value);

  if (!userExists) {
    email.classList.add("input__error");

    const emailErrorMessage = document.querySelector("#email-error-msg > p");
    emailErrorMessage.innerHTML = "E-mail não cadastrado!";

    return;
  }

  const user = getUser(email.value);

  const isMatchPassword = compareValues(password.value, user.password);

  if (!isMatchPassword) {
    password.classList.add("input__error");

    const passwordErrorMessage = document.querySelector(
      "#password-error-msg > p"
    );
    passwordErrorMessage.innerHTML = "Senha inválida!";

    return;
  } else {
    password.classList.remove("input__error");

    const passwordErrorMessage = document.querySelector(
      "#password-error-msg > p"
    );
    passwordErrorMessage.innerHTML = "";
  }

  window.location.pathname = "/pages/dashboard.html";
});
