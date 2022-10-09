"use strict"

const header__burger = document.querySelector('.header__burger');
const header__menu = document.querySelector('.header__menu');
const header__overlay = document.querySelector('.header__menu-overlay');


header__burger.addEventListener('click', () => {
    header__burger.classList.toggle('active');
    header__menu.classList.toggle('active');
    header__overlay.classList.toggle('active');

})

header__overlay.addEventListener('click', () => {
    header__burger.classList.remove('active');
    header__menu.classList.remove('active');
    header__overlay.classList.remove('active');
})



