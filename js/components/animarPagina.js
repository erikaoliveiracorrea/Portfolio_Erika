const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      intersectionObserver.unobserve(entry.target); // Remove o elemento após a animação
    }
  });
});

const elementos = document.querySelectorAll(".animate");

elementos.forEach((el) => intersectionObserver.observe(el));
