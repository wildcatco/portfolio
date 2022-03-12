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

// Show "arrow up" button when scolling down
const arrowupBtn = document.querySelector('.arrow-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowupBtn.classList.add('visible');
  } else {
    arrowupBtn.classList.remove('visible');
  }
});

// Handle click on the "arrow up" button
arrowupBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Filtering projects
const categoryBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.work__projects .project');

categoryBtnContainer.addEventListener('click', (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  projectContainer.classList.add('anim-out');

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === 'all' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);

  // Activate category button
  [...categoryBtnContainer.children].forEach((categoryBtn) => {
    console.log(categoryBtn);
    categoryBtn.classList.remove('active');
  });
  event.target.classList.add('active');
});
