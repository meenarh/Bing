const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("menu");

const hamburgerClose = document.querySelector(".hamburger-close");
const toggleHamburger = () => {
   menu.classList.add('.menu-animation-slideDown');

  menu.style.display = 'block';
  hamburgerClose.style.display = 'block';
  hamburger.style.display = 'none';

};

const toggleHamburgerClose = () => {
   menu.style.display = 'none';
   hamburgerClose.style.display = 'none';
   hamburger.style.display = 'block';
}
hamburger.addEventListener("click", toggleHamburger);
hamburgerClose.addEventListener('click', toggleHamburgerClose)