// Show Menu

const navMenu = document.getElementById('navMenu');
const navClose = document.getElementById('navClose');
const navToggle = document.getElementById('navToggle');

if(navToggle) {
  navToggle.addEventListener('click', () => {

    navMenu.classList.add('showMenu');

  })
}


if(navClose) {
  navClose.addEventListener('click', () => {

    navMenu.classList.remove('showMenu'); 

  })
}



// Click Link, Remove show-menu
const navLink = document.querySelectorAll('.navLink');

const actionLink = () => {

  const navMenu = document.getElementById('navMenu');

  navMenu.classList.remove('showMenu');

}

navLink.forEach(n => n.addEventListener('click', actionLink));





// Change Background Header
// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
const scrollHeader = () => {

  const header = document.getElementById('header');

  this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');

}

window.addEventListener('scroll', scrollHeader);



