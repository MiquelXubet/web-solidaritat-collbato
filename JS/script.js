const toggleButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("header nav ul");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});
