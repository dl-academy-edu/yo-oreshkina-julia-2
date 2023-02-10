window.addEventListener('DOMContentLoaded', function() {

const btnPlan = document.querySelector('.svg__button--left');
const btndream = document.querySelector('.svg__button--right');
const lines = document.querySelectorAll('.svg__desktop-line--left');
const sun = document.querySelector('.svg__desktop-sun');
const starOne = document.querySelector('.svg__star-one');
const starTwo = document.querySelector('.svg__star-two');
const starThree = document.querySelector('.svg__star-three');


function startAnimationDesktop() {
    btnPlan.addEventListener('click', () => {
        sun.classList.remove('svg__desktop-sun--show');
        lines.forEach(function(item) {
            item.classList.remove('svg__desktop-line--show');
        });
        setTimeout(function(){
            sun.classList.add('svg__desktop-sun--show');
            for (let i = 0; i < lines.length; i++) {
                lines[i].classList.add('svg__desktop-line--show');
            }
        }, 0);
    });
}

startAnimationDesktop();


function startAnimationStarfall() {
    btndream.addEventListener('click', () => {
        starOne.classList.toggle('svg__star-one--show');
        starTwo.classList.toggle('svg__star-two--show');
        starThree.classList.toggle('svg__star-three--show');
    });
}

startAnimationStarfall();
});