const formContainer = document.querySelector('.header__search-mobile-form');
const headerSearchButton = document.querySelector('.header__search-btn');

function mobileFormHandler() {
    formContainer.classList.toggle('header__search-mobile-form--active')
}

headerSearchButton.addEventListener('click', mobileFormHandler)