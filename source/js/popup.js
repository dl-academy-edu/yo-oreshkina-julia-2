"Use strict";

const modalWindow = document.querySelector('.popup');
const overlay = document.querySelector('.popup__overlay');
const buttonModalWindow = document.querySelector('.banner__btn');
const buttonClosedModalWindow = document.querySelector('.popup__btn');
const inputName = document.querySelector('.form__input');

function openModalWindow() {
    buttonModalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    document.body.classList.add('no-scroll');
    inputName.focus();
    });
}

openModalWindow();

function closeModalWindow() {
    buttonClosedModalWindow.addEventListener('click', () => {
        modalWindow.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    });
    
    overlay.addEventListener('click', () => {
        modalWindow.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    });
    
    window.addEventListener('keydown', function(event) {
        if(event.code === "Escape" && !modalWindow.classList.contains('hidden')) {
            modalWindow.classList.add('hidden');
            document.body.classList.remove('no-scroll');
            buttonModalWindow.focus();
        }
    });
}

closeModalWindow();
