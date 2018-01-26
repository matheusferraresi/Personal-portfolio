const navToggle = document.querySelector('.nav-toggle')
const navMain = document.querySelector('.nav-main')
const navMainUl = document.querySelector('.nav-main ul')
const hamburger = document.querySelector('.hamburger')
const header = document.querySelector('.header')
const mq = window.matchMedia( "(max-width: 990px)" )
const menuLinks = document.querySelectorAll('nav [href]')

// Menu hamburger toggle
navToggle.addEventListener('click', () => {
    navMain.classList.toggle('is-open')
    hamburger.classList.toggle('is-open')
});

// Sticky menu on scroll
if (!mq) {
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
}


// Change active class on menu itens
for (let i = 0; i < menuLinks.length; i++) {
    if (menuLinks[i].href === window.location.href) {
        menuLinks[i].classList.add('active');
    }
}
