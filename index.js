const menu_btn = document.querySelector('.menu-icon');
const nav_toggle = document.querySelector('.navigation');
menu_btn.addEventListener('click', function(){
   menu_btn.classList.toggle('is-active');
    nav_toggle.classList.toggle('is-active');
});