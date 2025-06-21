const html = document.querySelector("html");
const boxDarkLight = document.getElementById("box-dark_light");
const body = document.querySelector("body");

boxDarkLight.addEventListener("click", () => {
  boxDarkLight.classList.toggle("dark");
  html.classList.toggle("dark");
  body.classList.toggle("dark");
});
