const switchNav = document.querySelector('.fa-bars');
const nav = document.querySelector('.mainNav');

switchNav.addEventListener('click', () => {
  nav.classList.contains('active') ? nav.classList.remove('active') : nav.classList.add('active');
});
