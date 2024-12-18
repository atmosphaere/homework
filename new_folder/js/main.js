let btn = document.querySelector('.menu-btn')

btn.addEventListener('click', function () {
    this.classList.toggle('is-active')
})

// BURGER 

document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.querySelector('.menu-btn');
    const mobileNav = document.querySelector('.header__nav');

    burgerButton.addEventListener('click', function () {
        if (!mobileNav.classList.contains('opened')) {
            // Открытие меню
            mobileNav.style.transition = 'max-height 0.6s linear';
            mobileNav.classList.add('opened');
        } else {
            // Закрытие меню
            mobileNav.classList.remove('opened');
            mobileNav.style.transition = '';  // Отключение перехода при закрытии
        }
    });
});

// MODAL

document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.querySelector('.header__button');
    const modalCancelBtn = document.querySelector('.modal__cancel');
    const modalWindow = document.querySelector('.modal__window');
    const body = document.body;

    openModalBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        body.classList.add('body-opened--modal');
    });

    modalCancelBtn.addEventListener('click', function () {
        closeModal();
    });

    document.addEventListener('click', function (event) {
        if (!modalWindow.contains(event.target)) {
            closeModal();
        }
    });

    function closeModal() {
        body.classList.remove('body-opened--modal');
    }
});

// COUNTRIES-SWITCH

document.querySelectorAll('.countries__item').forEach((item) => {
    item.addEventListener('click', function() {
        const tabGroupClass = this.dataset.tabgroup; 
        
        document.querySelectorAll('.countries__item').forEach((el) => {
            el.classList.remove('countries__item--active');
        });
        
        this.classList.add('countries__item--active');
        
        document.querySelectorAll('.tabs-group').forEach((tab) => {
            tab.classList.remove('tabs-group--active'); 
        });
        
        const activeTab = document.querySelector(`#${this.id}-content`); 
        if (activeTab) {
            activeTab.classList.add('tabs-group--active'); 
        }
    });
});

// VIDEO

document.querySelector('.play-button').addEventListener('click', function () {
    const iframe = document.getElementById('youtube-video');
    iframe.src += '&autoplay=1';
    this.style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
});

// ACCORDION

document.addEventListener('DOMContentLoaded', function () {
    const moduls = document.querySelectorAll('.program__modul');

    moduls.forEach(modul => {
        modul.addEventListener('click', () => {
            const list = modul.querySelector('.program__modul-list');

            if (!list.classList.contains('active')) {
                closeAllAccordions();
                list.classList.add('active');
                modul.classList.add('opened');
                modul.querySelector('.program__modul-button').setAttribute('aria-expanded', 'true');
            } else {
                list.classList.remove('active');
                modul.classList.remove('opened');
                modul.querySelector('.program__modul-button').setAttribute('aria-expanded', 'false');
            }
        });
    });

    function closeAllAccordions() {
        const openLists = document.querySelectorAll('.program__modul-list.active');

        openLists.forEach(list => {
            list.classList.remove('active');
            list.parentNode.classList.remove('opened');
            list.previousElementSibling.setAttribute('aria-expanded', 'false');
        });
    }
});


/// SWIPER__TEAM

document.addEventListener('DOMContentLoaded', () => {
    const teamGallerySwiper = new Swiper('.swiper-team', {
        slidesPerView: 2.8,
        loop: true,
        navigation: false,
        pagination: false,

        breakpoints: {
            650: {
                slidesPerView: 3.2,
            },
            801: {
                slidesPerView: 5,
            },
        }
    });
});


// SWIPER__EXPERTS

let swiper = new Swiper(".team__experts-gallery", {
    slidesPerView: 1.5,
    loop: true, 
    spaceBetween: 37,

    navigation: {
        nextEl: ".team__experts-navigation-next",
        prevEl: ".team__experts-navigation-prev",
    },

    breakpoints: {

        550: {
            slidesPerView: 2.5,
            spaceBetween: 37,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 68,
        },

        1151: {
            slidesPerView: 'auto',
            spaceBetween: 37,
        },
    },
});


// INT-TEL-INPUT 

const input = document.querySelector("#phone");
window.intlTelInput(input, {
    loadUtilsOnInit: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js",
});
