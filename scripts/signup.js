const formSignup = document.getElementById("form-signup");

let users;

let fullName;
let email;
let emailConfirm;
let password;
let passwordConfirm;
let date;
let lgpd;

function getInputsSignUp() {
  fullName = document.getElementById("full-name");
  email = document.getElementById("email");
  emailConfirm = document.getElementById("email-confirm");
  password = document.getElementById("password");
  passwordConfirm = document.getElementById("password-confirm");
  date = document.getElementById("birthday");
  lgpd = document.getElementById("lgpd");
}

function compareValues(value1, value2) {
  return value1 === value2;
}

function validatePassword(password) {
  const regex =
    /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
  const isValid = regex.test(password);

  return isValid && password.length >= 8;
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

formSignup.addEventListener("submit", function (e) {
  e.preventDefault();
  getInputsSignUp();

  const matchEmail = compareValues(email.value, emailConfirm.value);

  if (!matchEmail) {
    email.classList.add("input__error");
    emailConfirm.classList.add("input__error");

    const emailErrorMessage = document.querySelector("#email-error-msg > p");
    emailErrorMessage.innerHTML = "Emails diferentes!";

    const emailConfirmErrorMessage = document.querySelector(
      "#email-confirm-error-msg > p"
    );
    emailConfirmErrorMessage.innerHTML = "Emails diferentes!";
    return;
  } else {
    email.classList.remove("input__error");
    emailConfirm.classList.remove("input__error");

    const emailErrorMessage = document.querySelector("#email-error-msg > p");
    emailErrorMessage.innerHTML = "";

    const emailConfirmErrorMessage = document.querySelector(
      "#email-confirm-error-msg > p"
    );
    emailConfirmErrorMessage.innerHTML = "";
  }

  const passwordIsValid = validatePassword(password.value);

  if (!passwordIsValid) {
    password.classList.add("input__error");
    const passwordErrorMessage = document.querySelector(
      "#password-error-msg > p"
    );
    passwordErrorMessage.innerHTML =
      "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!";
    return;
  } else {
    password.classList.remove("input__error");
    const passwordErrorMessage = document.querySelector(
      "#password-error-msg > p"
    );
    passwordErrorMessage.innerHTML = "";
  }

  const matchPassword = compareValues(password.value, passwordConfirm.value);

  if (!matchPassword) {
    password.classList.add("input__error");
    passwordConfirm.classList.add("input__error");

    const passwordErrorMessage = document.querySelector(
      "#password-error-msg > p"
    );
    passwordErrorMessage.innerHTML = "Senhas diferentes!";

    const passwordConfirmErrorMessage = document.querySelector(
      "#password-confirm-error-msg > p"
    );
    passwordConfirmErrorMessage.innerHTML = "Senhas diferentes!";
    return;
  } else {
    password.classList.remove("input__error");
    passwordConfirm.classList.remove("input__error");

    const passwordErrorMessage = document.querySelector(
      "#password-error-msg > p"
    );
    passwordErrorMessage.innerHTML = "";

    const passwordConfirmErrorMessage = document.querySelector(
      "#password-confirm-error-msg > p"
    );
    passwordConfirmErrorMessage.innerHTML = "";
  }

  const userExists = verifyUserExists(email.value);

  if (userExists) {
    email.classList.add("input__error");
    emailConfirm.classList.remove("input__error");

    const emailErrorMessage = document.querySelector("#email-error-msg > p");
    emailErrorMessage.innerHTML = "E-mail vinculado a uma conta já existente.";

    const emailConfirmErrorMessage = document.querySelector(
      "#email-confirm-error-msg > p"
    );
    emailConfirmErrorMessage.innerHTML = "";
    return;
  } else {
    email.classList.remove("input__error");
    emailConfirm.classList.remove("input__error");

    const emailErrorMessage = document.querySelector("#email-error-msg > p");
    emailErrorMessage.innerHTML = "";

    const emailConfirmErrorMessage = document.querySelector(
      "#email-confirm-error-msg > p"
    );
    emailConfirmErrorMessage.innerHTML = "";
  }

  if (!lgpd.checked) {
    lgpd.classList.add("input__error");

    const lgpdErrorMessage = document.querySelector("#lgpd-error-msg > p");
    lgpdErrorMessage.innerHTML = "Por favor, revise e aceite nossos termos.";
    return;
  } else {
    lgpd.classList.remove("input__error");

    const lgpdErrorMessage = document.querySelector("#lgpd-error-msg > p");
    lgpdErrorMessage.innerHTML = "";
  }

  const user = {
    name: fullName.value,
    email: email.value,
    password: password.value,
    birthday: date.value,
  };

  addUser(user);
  window.location.pathname = "/pages/signin.html";
});
