const btnDark = document.querySelector(".btn-dark");
const body = document.querySelector("body");
const textos = document.querySelectorAll(".boxTexto p");
const titulos = document.querySelectorAll(".title-section");
const email = document.querySelector(".arroba");

btnDark.addEventListener("click", () => {
  btnDark.classList.toggle("btn-dark_active");
  body.classList.toggle("body-dark_active");

  textos.forEach((p) => {
    p.style.color = p.style.color === "white" ? "black" : "white";
  });

  titulos.forEach((titulo) => {
    titulo.style.color =
      titulo.style.color === "goldenrod" ? "black" : "goldenrod";
  });
  if (email) {
    email.style.color = email.style.color === "white" ? "black" : "white";
  }
});
