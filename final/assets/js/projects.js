document.addEventListener("DOMContentLoaded", (event) => {
    const navbarOpen = document.getElementById('menu-toggle-button');
    const navbarClose = document.getElementById('close-nav-button')
    const hiddenNav = document.getElementById('shrunken-nav');
    navbarOpen.addEventListener("click", (event) => {
        hiddenNav.style.top = "0";
        navbarOpen.style.opacity = "0";
    });
    navbarClose.addEventListener("click", (event) => {
        hiddenNav.style.top = "-100%";
        navbarOpen.style.opacity = "1";
    });

});