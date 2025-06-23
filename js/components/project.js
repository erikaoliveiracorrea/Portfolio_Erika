const btnDescription = document.querySelectorAll(
  ".wrapper-card .btn-description"
);

btnDescription.forEach((btn) => {
  btn.addEventListener("click", () => {
    const boxDescription = btn.parentElement.querySelector(".description");
    boxDescription.classList.toggle("show-description");

    const seta = btn.parentElement.querySelector(".img-seta");
    seta.classList.toggle("girar-seta");
  });
});
