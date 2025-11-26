export const menuHamburguesa = () => {
    const menuBtn = document.getElementById("menu-hamburguesa");
    const navLinks = document.getElementById("links-menu-hamburguesa");
    const links = navLinks.querySelectorAll("a");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        if(navLinks.classList.contains("active")){
            menuBtn.innerHTML = "X";
            menuBtn.setAttribute("aria-expanded", "true");
        } else {
            menuBtn.innerHTML = "☰";
            menuBtn.setAttribute("aria-expanded", "false");
        }
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuBtn.innerHTML = "☰";
            menuBtn.setAttribute("aria-expanded", "false");
        })
    })
}