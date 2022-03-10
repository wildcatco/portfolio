'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

['scroll', 'load'].forEach((eventType) => {
  window.addEventListener(eventType, () => {
    if (window.scrollY > navbarHeight) {
      navbar.classList.add('navbar--dark');
    } else {
      navbar.classList.remove('navbar--dark');
    }
  });
});

// Hnadle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {
  const section = document.getElementById(event.target.dataset.section);
  if (section == null) {
    return;
  }
  const rect = section.getBoundingClientRect();
  window.scrollTo({ top: rect.top + window.scrollY - 30, behavior: 'smooth' });
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');

homeContactBtn.addEventListener('click', () => {
  const contact = document.getElementById('contact');
  contact.scrollIntoView({ behavior: 'smooth' });
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
const homeContainer = document.querySelector('.home__container');

window.addEventListener('scroll', () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});
