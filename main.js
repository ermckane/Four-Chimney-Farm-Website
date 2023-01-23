const headerNavButton = document.querySelector('.header-nav-button');

console.log(headerNavButton)

headerNavButton.addEventListener("click", () => {
    const isOpened = headerNavButton.getAttribute("aria-expanded");

    if (isOpened === "false") {
    headerNavButton.setAttribute("aria-expanded", "true");
    } else {
    headerNavButton.setAttribute("aria-expanded", "false");
    }
});
