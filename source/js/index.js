"Use strict";
  
window.addEventListener('load', function() {
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

function setButtonDisabled() {
    if (document.getElementById('agreement').getAttribute('disabled')) {
        document.querySelector('.submit__btn').disabled = true;
    }
}

setButtonDisabled();

const banner = document.querySelector('.banner');
const bannerTitle = document.querySelector('.banner__title');
const numberOfSlide = document.querySelector('.banner__slide-number');
const bannerSubtitle = document.querySelector('.banner__subtitle');
const switchButtons = document.querySelectorAll('.banner__switch-btn');

const slidesDB = [
    {   number: '01',
        title:'The ooh noo collection',
        subtitle: 'Designed in Slovenia',
        color: '#EEE4DB'
    },
    {   number: '02',
        title:'the funny collection',
        subtitle: 'Designed in Moldova',
        color: 'rgba(118, 194, 116, 0.5)'
    },
    {   number: '03',
        title:'the scary collection',
        subtitle: 'Designed in Serbia',
        color: 'rgba(192, 116, 194, 0.5)'
    },
    {   number: '04',
        title:'The teen collection',
        subtitle: 'Designed in Belarus',
        color: 'rgba(116, 157, 194, 0.5)'
    }
];

function switchSlideOfBanner(arr) {
    for (let i = 0; i < switchButtons.length; i++) { 
        switchButtons[i].addEventListener('click', function(e){ 
            switchButtons.forEach(button => {
                button.classList.remove('banner__switch-btn--active'); 
            });
            switchButtons[i].classList.add('banner__switch-btn--active');
            banner.style.backgroundColor = arr[i].color;
            numberOfSlide.textContent = arr[i].number;
            bannerTitle.textContent = arr[i].title;
            bannerSubtitle.textContent = arr[i].subtitle;
        }); 
    } 
}

switchSlideOfBanner(slidesDB);

    function createMapFrame() { 
        const map = document.querySelector('.contacts__map');
        console.log(map);

        let frame = document.createElement ('iframe');
        frame.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.0673967744356!2d-75.46284735602731!3d39.973677673270416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6edd853ef1c35%3A0x74b3c02c03f9f08f!2sDesign%20Life%20Kids!5e0!3m2!1sru!2sru!4v1678711702389!5m2!1sru!2sru");
        frame.setAttribute('style',"width: 100%; height: 100%; border:0;");
        frame.setAttribute('loading',"lazy");
        frame.setAttribute('title',"addresses of the DLK");
        map.appendChild(frame);
        
        console.log(frame);
    }
    createMapFrame(); 
});      
