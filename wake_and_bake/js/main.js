(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body-opened--menu')) {
            document.body.classList.add('body-opened--menu')
        } else {
            document.body.classList.remove('body-opened--menu')
        }

    }


    // 1. **Получение элементов**:
    // - `burgerIcon`: ищет ближайший элемент с классом `.burger-icon`, начиная с элемента, на который кликнули (`e.target`).
    // - `burgerNavLink`: ищет ближайший элемент с классом `.nav__link`, начиная с того же элемента.

    // 2. **Проверка нажатия**:
    // - Если ни `burgerIcon`, ни `burgerNavLink` не найдены (т.е. клик был не по нужному элементу), функция завершает выполнение.

    // 3. **Добавление или удаление класса**:
    // - Если класс `body-opened--menu` не существует на `document.body`, он добавляется.
    // - Если класс существует, он удаляется.

    // 4. **Media**:
    // - if (document.documentElement.clientWidth > 900) return  
    // - если условия выполняются, выполнение функции прерывается


    // TABS

    const tabControls = document.querySelector('.tab-control')
    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {
        const tabControl = e.target.closest('.tab-control__link')
        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeContent = document.querySelector('.tab-content--show')
        const activeControl = document.querySelector('.tab-control__link--active')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-control__link--active')) return

        if (activeControl) {
            activeControl.classList.remove('tab-control__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-control__link--active')
        tabContent.classList.add('tab-content--show')

    }



    // ACCORDION

    const accordionItems = document.querySelectorAll('.accordion-list__item');

    accordionItems.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault(); 
    
            const isOpened = item.classList.contains('accordion-list__item--opened');
    
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) { 
                    otherItem.classList.remove('accordion-list__item--opened'); 
                    const content = otherItem.querySelector('.accordion-list__content');
                    if (content) {
                        content.style.maxHeight = null; 
                    }
                }
            });

            if (!isOpened) {
                item.classList.add('accordion-list__item--opened'); 
                const content = item.querySelector('.accordion-list__content');
                if (content) {
                    content.style.maxHeight = content.scrollHeight + 'px'; 
                }
            } else {
                item.classList.remove('accordion-list__item--opened'); 
                const content = item.querySelector('.accordion-list__content');
                if (content) {
                    content.style.maxHeight = null; 
                }
            }
        });
    });

    // SLIDER-GALLERY 

    new Swiper('.gallery__slider', {

        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__prev',
            prevEl: '.gallery__next',
        },

        breakpoints: {
            601: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            }
        }

    });


    // SLIDER-TESTIMONIALS

new Swiper('.testimonials__slider', {

    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,

    navigation: {
        nextEl: '.testimonials__prev',
        prevEl: '.testimonials__next',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    breakpoints: {
        900: {
            slidesPerView: 1.5
        },
        
        1201: {
            slidesPerView: 2.1
        }
    }

});

    // INPUTS-MASK

    const telInputs = document.querySelectorAll('input[type="tel"]');
    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(telInputs);

})()


// MODAL
const closeModalBtn = document.querySelector('.modal__cancel');
const body = document.querySelector('.body');
const openModalBtn = document.querySelector('.about__img-button');
const modal = document.querySelector('.modal');

const modalOpen = () => {
    body.classList.add('body-opened--modal');
}

const modalClose = () => {
    body.classList.remove('body-opened--modal');
}

modal.addEventListener('click', (event) => {

    if (event.target === modal) {
        modalClose();
    }
});

closeModalBtn.addEventListener('click', modalClose);
openModalBtn.addEventListener('click', modalOpen);

