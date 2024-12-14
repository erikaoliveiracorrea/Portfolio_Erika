const form = document.getElementById("formulario");
form.addEventListener("submit", function (event) {
  form.submit();
  //event.preventDefault();
  alert("Mensagem Enviada!");
  form.reset();
});
