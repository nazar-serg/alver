let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu__list');
let menuItem = document.querySelectorAll('.menu__link');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
})


menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})