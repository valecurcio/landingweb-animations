const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');
const body = document.querySelector('body');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

//Animations
gsap.registerPlugin(ScrollTrigger)

gsap.from('.hero-text', {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

gsap.from('.services-text', {
    scrollTrigger: '.services-text',
    duration: 0.5,
    opacity: 1,
    x: -200,
    stagger: 0.12
});

gsap.from('.services-img', {
    scrollTrigger: '.services-text',
    duration: 1.2,
    opacity: 0,
    x: -250
});

gsap.from('.member-text', {
    scrollTrigger: '.member-text',
    duration: 1,
    opacity: 0,
    y: -200,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.team-animations', {
    scrollTrigger: '.team-animations',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.4
});

gsap.from('.email-animations', {
    scrollTrigger: '.email-animations',
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.25,
    delay: 0.6
});