let burger = document.querySelector('.header-burger');
const closeMenu = document.querySelector ('.header-burger-close');
let menu = document.querySelector('.header-nav ');
let menuLinks = menu.querySelectorAll('.header-link-item');
const header = document.querySelector('.header');
const headerHeights = header.offsetHeight;
document.querySelector(':root').style.setProperty('--header-heights', `${headerHeights}px`);
const serchOpen = document.querySelector('.header-open-menu');
const serch = document.querySelector('.header-button');
const serchClose = document.querySelector('.header-serch-close')
let tabsBtn = document.querySelectorAll ('.services-item-button');
let tabsItem = document.querySelectorAll ('.sevices-info');

tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e){ 
        const path =e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('services-item-button--active')});
    e.currentTarget.classList.add('services-item-button--active');

    tabsItem.forEach (function(element){element.classList.remove('services-info--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('services-info--active');
    })
});

document.addEventListener('DOMContentLoaded', () =>{
    const accordions =document.querySelectorAll('.one-question');

    accordions.forEach(el => {
        el.addEventListener('click' , (e) => {
            const self = e.currentTarget;
            const controll = self.querySelector('.one-question-button');
            const content = self.querySelector('.question-content');
            accordions.forEach(accordion => {
                if (
                    accordion.getAttribute('name') !== self.getAttribute('name')
                ){
                    accordion.classList.remove('open')
                }
            })
            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                controll.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
            } else {
                controll.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
            }
        })
    })
})


const swiper = new Swiper('.swiper', {

    loop: true,
    spaceBetween: 20,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        mousewheel: true,
        keyboard: true,
    },

    a11y: {
        paginationBulletMessage: 'Следующий слайд'
    }

});

serch.addEventListener('click', () => {

    serchOpen.classList.toggle('header-open-menu-visable')

})

serchClose.addEventListener('click', () => {

    serchOpen.classList.remove('header-open-menu-visable')

})

burger.addEventListener('click', () => {

    closeMenu.classList.add('header-burger--close')
    
    burger.classList.toggle('header-burger--active');

    menu.classList.toggle('header-nav--visable');

});


closeMenu.addEventListener('click', () => {

    closeMenu.classList.remove('header-burger--close')
    
    burger.classList.remove('header-burger--active');

    menu.classList.remove('header-nav--visable');

});


menuLinks.forEach(function(el){
    el.addEventListener('click', function () {

        burger.classList.remove('header-burger--active');

        menu.classList.remove('header-nav--visable');

        document.body.classList.remove('stop-scrool');
    })
})