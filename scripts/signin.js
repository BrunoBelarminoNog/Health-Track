const formSignin = document.getElementById("form-signin");

let email;
let password;

function getInputsSignIn() {
  email = document.getElementById("email");
  password = document.getElementById("password");
  conection = document.getElementById("conection");
}

function compareValues(value1, value2) {
  return value1 === value2;
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
