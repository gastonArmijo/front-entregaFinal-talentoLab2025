import { carousel, renderProductos} from "./carusel.js";
import { productosArcanas, productosInmortales, productosTesoros } from "./productos.js";
import { menuHamburguesa } from "./menu.js";

import { renderResenas } from "./resenas.js";

import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    menuHamburguesa();
    renderProductos(productosArcanas, "#contenedor-arcanas")
    renderProductos(productosInmortales, "#contenedor-inmortales");
    renderProductos(productosTesoros, "#contenedor-tesoros");

    // Inicializar carruseles
    carousel("#contenedor-arcanas", ".prev-arcanas", ".next-arcanas");
    carousel("#contenedor-inmortales", ".prev-inmortales", ".next-inmortales");
    carousel("#contenedor-tesoros", ".prev-tesoros", ".next-tesoros");

    const carrito = obtenerCarrito();
    actualizarContador(carrito);
    renderResenas();

})