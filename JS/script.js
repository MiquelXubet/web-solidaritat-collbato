const toggleButton = document.querySelector(".menu-toggle");
const overlay = document.querySelector(".menu-overlay");
const closeButton = document.querySelector(".menu-close");
const menuLinks = document.querySelectorAll(".menu-cuadro a");

toggleButton.addEventListener("click", () => {
  overlay.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Cerrar overlay al hacer click fuera del cuadro
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) overlay.style.display = "none";
});

// Cerrar overlay al hacer click en cualquier enlace y navegar arriba
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    overlay.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
