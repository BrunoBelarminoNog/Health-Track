const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const changeColors = () => {
  html.classList.toggle("theme-light");
  html.classList.toggle("theme-dark");
};

checkbox.addEventListener("change", changeColors);
