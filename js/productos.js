import { agregarAlCarrito } from "./funcionesCarrito.js";

export const renderProductos = (productos, contenedorSelector) => {
    const contenedor = document.querySelector(contenedorSelector);
    if (!contenedor) return;

    productos.forEach((p) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card");

        const img = document.createElement("img");
        img.src = `./${p.img}`;
        img.alt = p.nombre;

        const titulo = document.createElement("p");
        titulo.textContent = p.nombre;

        const precio = document.createElement("h3");
        precio.textContent = `$${p.precio}`;

        const boton = document.createElement("button");
        boton.classList.add("btn-carrito");
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {
            agregarAlCarrito(p);
        })

        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);
        contenedor.appendChild(tarjeta);
    });
};
