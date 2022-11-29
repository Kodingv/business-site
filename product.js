// Show Menu

const navMenu = document.getElementById('navMenu');
const navClose = document.getElementById('navClose');
const navToggle = document.getElementById('navToggle');


navToggle.addEventListener('click', () => {

  navMenu.classList.add('showMenu');

})

navClose.addEventListener('click', () => {

  navMenu.classList.remove('showMenu');

})





// Click Link, Remove show menu
const navLink = document.querySelectorAll('.navLink');

const actionLink = () => {

  const navMenu = document.getElementById('navMenu');

  navMenu.classList.remove('showMenu');

}

navLink.forEach(n => n.addEventListener('click', actionLink));





// Change Header Background
// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
const scrollHeader = () => {

  const header = document.getElementById('header');

  this.scrollY >= 20 ? header.classList.add('bgHeader') : header.classList.remove('bgHeader');

}

window.addEventListener('scroll', scrollHeader);


