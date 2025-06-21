//---------------NÃO FUNCIONA!-------------------------
// const btnDescription = document.querySelectorAll(
//   ".wrapper-card .btn-description"
// );

// const boxDescription = document.querySelector(".wrapper-card .description");

// btnDescription.forEach((card) => {
//   card.addEventListener("click", () => {
//     boxDescription.classList.toggle("card-project");
//   });
// });

//-----------------------VERSÃO QUE FUNCIONA!----------------
// const btnDescription = document.querySelectorAll(".btn-description");

// btnDescription.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     // Localiza o .box-description mais próximo do botão clicado
//     const box = btn.closest(".box-description");
//     const description = box.querySelector(".description");

//     // Alterna a classe apenas neste elemento
//     description.classList.toggle("card-project");
//   });
// });

//----------------------VERSÃO MAIS SIMPLES---------------
const btnDescription = document.querySelectorAll(
  ".wrapper-card .btn-description"
);

btnDescription.forEach((btn) => {
  btn.addEventListener("click", () => {
    const boxDescription = btn.parentElement.querySelector(".description");
    boxDescription.classList.toggle("show-description");
  });
});
