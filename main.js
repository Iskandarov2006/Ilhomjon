const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});


function tbn(){
  alert('Ma`lumotlarni to`g`ri kiritmagan bo`lsangiz arizangiz adminga yuborilmaydi!!  Arizani to`liq kiritganingizga ishonch hosil qildingizmi')
}