const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const wrapper = document.querySelector('.wrapper');
const nav = document.querySelectorAll('.nav');
const body = document.getElementById('visible')



//functions 
function openToggle() {
    hamburger.classList.toggle('clicked');
    menu.classList.toggle('opened');
}

function removOverlay() {
    hamburger.classList.remove('clicked');
    menu.classList.remove('opened');
}

setTimeout(function () {
    wrapper.style.transform = "translateX(-3000px)"
    body.classList.add('visible')
}, 4500);

nav.forEach(link => {
    link.addEventListener('click', removOverlay);
})



//Event Listeners
hamburger.addEventListener('click', openToggle);


