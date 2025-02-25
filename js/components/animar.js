const btnMenu = document.getElementById("btn-menu");
const menuMobile = document.getElementById("menu-mobile");
const bodyHidden = document.querySelector("body");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("ativo");
  menuMobile.classList.toggle("abrir");
  //body.style.overflow = menuMobile.classList.contains("abrir") ? "hidden" : "";

  if (menuMobile.classList.contains("abrir")) {
    bodyHidden.style.overflow = "hidden";
  } else {
    bodyHidden.style.overflow = "";
  }
});
