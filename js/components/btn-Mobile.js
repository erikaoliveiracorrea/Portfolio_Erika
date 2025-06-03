const btnMenu = document.getElementById("btn-menu");
const menuMobile = document.getElementById("menu-mobile");
const bodyHidden = document.querySelector("body");
const btnListMobile = document.querySelectorAll("#menu-mobile a"); // Aqui você pode usar o ID ou a classe, ambos funcionam.

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("ativo");
  menuMobile.classList.toggle("abrir");
  if (menuMobile.classList.contains("abrir")) {
    bodyHidden.style.overflow = "hidden";
  } else {
    bodyHidden.style.overflow = "";
  }
});

btnListMobile.forEach((link) => {
  link.addEventListener("click", () => {
    btnMenu.classList.toggle("ativo"); // remove para garantir que o menu sempre feche
    menuMobile.classList.toggle("abrir");
    bodyHidden.style.overflow = "";
  });
});
