let hamburguer = document.querySelector(".hamburguer")
let container = document.querySelector(".container")
let menu = document.querySelector(".menu")


hamburguer.addEventListener("click", function () {
    container.classList.toggle("show-menu")
})

menu.addEventListener("click", function () {
    container.classList.toggle("show-menu")
})

