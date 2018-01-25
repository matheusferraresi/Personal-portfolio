const navToggle = document.querySelector('.nav-toggle')
const navMain = document.querySelector('.nav-main')
const hamburger = document.querySelector('.hamburger')

navToggle.addEventListener('click', () => {
    navMain.classList.toggle('is-open')
    hamburger.classList.toggle('is-open')
});