const navToggle = document.querySelector('.nav-toggle')
const navMain = document.querySelector('.nav-main')
const navMainUl = document.querySelector('.nav-main ul')
const hamburger = document.querySelector('.hamburger')
const header = document.querySelector('.header')

// Menu hamburger toggle
navToggle.addEventListener('click', () => {
    navMain.classList.toggle('is-open')
    hamburger.classList.toggle('is-open')
});

// Sticky menu on scroll
window.addEventListener('scroll', () => {
    let docScroll = document.documentElement.scrollTop;

    if (docScroll > 50) {
        header.classList.add('sticky');
        navMainUl.classList.add('sticky-ul');
    } else {
        header.classList.remove('sticky');
        navMainUl.classList.remove('sticky-ul');
        
    }
})
