const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav__mobile");

menu.addEventListener("click", e=> {
    nav.classList.toggle("show");
    menu.classList.toggle("active");
})

