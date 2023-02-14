const btnOpenedBurger = document.querySelector('.menu-btn--open');
const burgerMenu = document.querySelector('.header__burger');
const btnClosedBurger = document.querySelector('.menu-btn--close');

function openBurgerMenu() {
    btnOpenedBurger.addEventListener('click', () => {
        burgerMenu.classList.remove('visually-hidden');
        document.body.classList.add('no-scroll');
        btnClosedBurger.focus();
    });
}

openBurgerMenu();

function closeBurgerMenu() {
    btnClosedBurger.addEventListener('click', () => {
        burgerMenu.classList.add('visually-hidden');
        document.body.classList.remove('no-scroll');
    });
    
    window.addEventListener('keydown', function(event) {
        if(event.code === "Escape" && !burgerMenu.classList.contains('visually-hidden')) {
            burgerMenu.classList.add('visually-hidden');
            document.body.classList.remove('no-scroll');
        }
    });
}

closeBurgerMenu();
