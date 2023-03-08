window.addEventListener('DOMContentLoaded', function(){ 

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
});
