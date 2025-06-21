const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      // Quando o elemento entra em área visível, adiciona a classe 'show'
      entrada.target.classList.add("show");

      // Para de observar esse elemento (animação só acontece uma vez)
      observador.unobserve(entrada.target);
    }
  });
});

// Seleciona todos os elementos com a classe 'animate'
const elementosParaAnimar = document.querySelectorAll(".animate");

// Começa a observar cada elemento
elementosParaAnimar.forEach((elemento) => {
  observador.observe(elemento);
});
