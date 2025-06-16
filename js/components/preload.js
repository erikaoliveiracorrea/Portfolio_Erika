document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("fade-out");
    }, 500); // tempo de espera para remover o preloader (em milissegundos)
  });
});
