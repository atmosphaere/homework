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