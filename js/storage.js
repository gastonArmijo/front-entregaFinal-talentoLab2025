const KEY = "carrito";

export const guardarCarrito = (carrito) => {
    localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarrito = () => {
    try {
        const data = localStorage.getItem(KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error("carrito corupto, reseteando...");
        localStorage.removeItem(KEY);
        return [];
    }
    //return JSON.parse(localStorage.getItem(KEY) || []);
};

export const vaciarCarritoStorage = () => {
    localStorage.removeItem(KEY);
};