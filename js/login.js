const btnNav = document.querySelector(".btnNav");
const nav = document.querySelector("nav");

btnNav.addEventListener("click", () => {
  nav.classList.toggle("show");
});
