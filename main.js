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
  // section.scrollIntoView({ behavior: 'smooth' });
  const rect = section.getBoundingClientRect();
  window.scrollTo({ top: rect.top + window.scrollY - 30, behavior: 'smooth' });
});
