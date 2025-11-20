import { carousel, renderProductos} from "./carusel.js";
import { productosArcanas, productosInmortales, productosTesoros } from "./productos.js";


document.addEventListener("DOMContentLoaded", () => {
    renderProductos(productosArcanas, "#contenedor-arcanas")
    renderProductos(productosInmortales, "#contenedor-inmortales");
    renderProductos(productosTesoros, "#contenedor-tesoros");

    // Inicializar carruseles
    carousel("#contenedor-arcanas", ".prev-arcanas", ".next-arcanas");
    carousel("#contenedor-inmortales", ".prev-inmortales", ".next-inmortales");
    carousel("#contenedor-tesoros", ".prev-tesoros", ".next-tesoros");
})