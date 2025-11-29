export const renderResenas = () => {
    const contenedorResenas = document.getElementById("contenedor-resenas");

    fetch("./data/resenas.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Error HTTP status;: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            data.reviews.forEach(resena => {
                const tarjeta = document.createElement("article");
                tarjeta.classList.add("card-resena");

                tarjeta.style.borderLeftColor = resena.color;

                const nombreUsuario = document.createElement("h3");
                nombreUsuario.classList.add("nombre-usuario");
                nombreUsuario.textContent = resena.user;
                
                const comentario = document.createElement("p");
                comentario.classList.add("comentario");
                comentario.textContent = resena.review;

                const fecha = document.createElement("p");
                fecha.classList.add("fecha");
                fecha.textContent = resena.date   


                tarjeta.appendChild(nombreUsuario);
                tarjeta.appendChild(comentario);
                tarjeta.appendChild(fecha);

                contenedorResenas.appendChild(tarjeta);

            })
        })
}