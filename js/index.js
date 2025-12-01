import { carousel} from "./carusel.js";
import { menuHamburguesa } from "./menu.js";
import { renderResenas } from "./resenas.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";
import { renderProductos } from "./productos.js";

document.addEventListener("DOMContentLoaded", async () => {
    menuHamburguesa();
    
    fetch("./data/productos.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Error HTTP status;: ${res.status}`);
            }
            return res.json();
        })
            
        .then((data) => {
            // Renderizar cada categoría
            renderProductos(data.productosArcanas, "#contenedor-arcanas");
            renderProductos(data.productosInmortales, "#contenedor-inmortales");
            renderProductos(data.productosTesoros, "#contenedor-tesoros");

            // Inicializar carruseles DESPUÉS de renderizar
            carousel("#contenedor-arcanas", ".prev-arcanas", ".next-arcanas");
            carousel("#contenedor-inmortales", ".prev-inmortales", ".next-inmortales");
            carousel("#contenedor-tesoros", ".prev-tesoros", ".next-tesoros");
        })
 


    const carrito = obtenerCarrito();
    actualizarContador(carrito);
    renderResenas();
});
