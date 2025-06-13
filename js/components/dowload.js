const btnDownload = document.getElementById("btn-download");
btnDownload.addEventListener("click", (topNo) => {
  topNo.preventDefault();

  const curriculoURL = "ErikaOliveira-CV.pdf";

  const link = document.createElement("a");
  link.href = curriculoURL;
  link.download = "Erika-Oliveira-Curriculum.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
