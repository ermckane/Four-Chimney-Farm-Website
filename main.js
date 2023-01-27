const headerNavButton = document.querySelector('.header-nav-button');
const hamburgerNav = document.querySelector('#hamburger-nav')
const overlay = document.querySelector('.overlay')

console.log(headerNavButton)

headerNavButton.addEventListener("click", () => {
    const isOpened = headerNavButton.getAttribute("aria-expanded");

    if (isOpened === "false") {
    headerNavButton.setAttribute("aria-expanded", "true");
    hamburgerNav.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('aria-expanded', 'true');
    } else {
    headerNavButton.setAttribute("aria-expanded", "false");
    hamburgerNav.setAttribute("aria-expanded", "false");
    overlay.setAttribute("aria-expanded", "false");
    }
});
