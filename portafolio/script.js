// Este script hará que el menú desplegable se despliegue al hacer clic en el botón correspondiente.

const botonMenu = document.querySelector(".menu-button");
const menu = document.querySelector(".nav");

botonMenu.addEventListener("click", () => {
    menu.classList.toggle("show");
});