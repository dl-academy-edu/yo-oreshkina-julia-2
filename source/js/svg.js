window.addEventListener('DOMContentLoaded', function() {

const btnPlan = document.querySelector('.svg__button--left');
const btndream = document.querySelector('.svg__button--right');
const lines = document.querySelectorAll('.svg__notepad-line--left');
const sun = document.querySelector('.svg__notepad-sun');
const starOne = document.querySelector('.svg__star-one');
const starTwo = document.querySelector('.svg__star-two');
const starThree = document.querySelector('.svg__star-three');


function startAnimationNotepad() {
    btnPlan.addEventListener('click', () => {
        sun.classList.toggle('svg__notepad-sun--show');
        for (let i = 0; i < lines.length; i++) {
            lines[i].classList.toggle('svg__notepad-line--show');
        }
    });
}

startAnimationNotepad();


function startAnimationStarfall() {
    btndream.addEventListener('click', () => {
        starOne.classList.toggle('svg__star-one--show');
        starTwo.classList.toggle('svg__star-two--show');
        starThree.classList.toggle('svg__star-three--show');
    });
}

startAnimationStarfall();
});