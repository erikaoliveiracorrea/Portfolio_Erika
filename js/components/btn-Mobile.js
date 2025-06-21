const btnMenu = document.getElementById("btn-menu");
const menuMobile = document.getElementById("menu-mobile");
const taghtml = document.querySelector("html"); // <html>
const body = document.body;

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("ativo");
  menuMobile.classList.toggle("abrir");

  if (menuMobile.classList.contains("abrir")) {
    taghtml.style.overflow = "hidden"; // ← ESSENCIAL EM MOBILE
    body.style.overflow = "hidden";
  } else {
    taghtml.style.overflow = "";
    body.style.overflow = "";
  }
});

const btnListMobile = document.querySelectorAll("#menu-mobile a");
btnListMobile.forEach((link) => {
  link.addEventListener("click", () => {
    menuMobile.classList.remove("abrir");
    btnMenu.classList.remove("ativo");
    taghtml.style.overflow = "";
    body.style.overflow = "";
  });
});
