export const carousel = (carouselSelector, prevSelector, nextSelector, step = 220, visible = 4) => {
    const carousel = document.querySelector(carouselSelector);
    const prev = document.querySelector(prevSelector);
    const next = document.querySelector(nextSelector);

    if (!carousel || !prev || !next) return;

    //ver una tarjeta en pantallas chicas
    if (window.innerWidth < 768) {
        visible = 1;
    } else {
        visible = visible ?? 4;
    }

    document.documentElement.style.setProperty("--visible", visible);

    const tarjetas = Array.from(carousel.querySelectorAll(".card"));
    const total = tarjetas.length;
    if (total === 0) return;

    const estilo = window.getComputedStyle(carousel);
    const gap = parseInt(estilo.columnGap || estilo.gap || 0);
    const cardWidth = tarjetas[0].offsetWidth + gap;

    let index = 0;
    let transitioning = false;

    const moverCarousel = (instant = false) => {
        carousel.style.transition = instant ? "none" : "transform 0.4s ease";
        carousel.style.transform = `translateX(-${index * cardWidth}px)`;
    };

    const avanzar = () => {
        if (transitioning) return;
        transitioning = true;

        index++;
        if (index > total - visible) index = 0; 

        moverCarousel();

        setTimeout(() => (transitioning = false), 400);
    };

    const retroceder = () => {
        if (transitioning) return;
        transitioning = true;

        index--;
        if (index < 0) index = total - visible; 

        moverCarousel();

        setTimeout(() => (transitioning = false), 400);
    };

    next.addEventListener("click", avanzar);
    prev.addEventListener("click", retroceder);

    //evento de scroll con mouse
    const viewport = carousel.parentElement;
    viewport.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (e.deltaY > 0 || e.deltaX > 0) avanzar();
        else retroceder();
    }, { passive: false });

    const recalcularVisible = () => {
        const nuevoVisible = window.innerWidth <768 ? 1 : 4;
        if (nuevoVisible !== visible) {
            visible = nuevoVisible;
            document.documentElement.style.setProperty("--visible", visible);

            index = 0;
            moverCarousel(true);
        }
    };
    window.addEventListener ("resize",recalcularVisible);
};

    




