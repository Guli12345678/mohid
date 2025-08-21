document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".navbar__menu");
  const navCollection = document.querySelector(".navbar__collection");

  menuIcon.addEventListener("click", () => {
    navCollection.classList.toggle("active");
  });
});
