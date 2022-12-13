const containerMain = document.querySelectorAll('.section-item');
const listItem = document.querySelectorAll('.list-item');
const navigationMobile = document.querySelector('.navigation');
const burgerButton = document.querySelector('.burger-button');
const closeBurgerMenu = document.querySelector('.close-burger-menu');


setTimeout(() => {
    containerMain.forEach((element, index) => {
        if (index % 2 === 0) {
            element.style.right = 0;
            element.style.opacity = 1;
        } else {
            element.style.left = 0;
            element.style.opacity = 1;
        }
    })
}, 1000);

burgerButton.addEventListener('click', () => {
    navigationMobile.style.visibility = 'visible';
    navigationMobile.style.left = 0;
})

closeBurgerMenu.addEventListener('click', () => {
    navigationMobile.style.visibility = 'hidden';
})

listItem.forEach((element) => element.addEventListener('click', () => {
    navigationMobile.style.visibility = 'hidden';
}))