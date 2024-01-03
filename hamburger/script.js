const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

ham.addEventListener('click', function() {
    ham.classList.toggle('active');
    menu.classList.toggle('active');

});

document.addEventListener('click', (e) => {

    // Making a variable to check if the click is on the hamburger or not and doing the same for the navbar

    const isClickOnHamburger = ham.contains(e.target) || e.target === ham;
    const isClickOnNavMenu = menu.contains(e.target) || e.target === menu;

    // Giving condition to remove or close the hamburger button and the navbar if the click is oon any other place of the window.

    if (!isClickOnHamburger && !isClickOnNavMenu) {
        ham.classList.remove('active');
        menu.classList.remove('active');
    }
});