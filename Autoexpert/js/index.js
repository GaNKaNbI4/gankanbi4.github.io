//-----BURGER MENU-------------------------------

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .header__menu, .header').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.menu__link').click(function(event) {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  });
});

// ----HEADER------------------------------------------------

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    if ((window.matchMedia('(max-width: 900px)')).matches) {
      document.getElementById('header').classList.add('scrollmob');
    } else {
      document.getElementById('header').classList.add('scroll');
    }
  } else {
    document.getElementById('header').classList.remove('scroll');
    document.getElementById('header').classList.remove('scrollmob');
  }
}



//-------SCROLL--------------------------------------

$(document).ready(function(){
  // Добавить плавную прокрутку до всех ссылок
  $("a").on('click', function(event) {

    // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
    if (this.hash !== "") {
      // Запретить поведение щелчка якоря по умолчанию
      event.preventDefault();

      // Хранить хэш
      var hash = this.hash;

      // Использование метода animate() jQuery для добавления плавной прокрутки страницы
      // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
        window.location.hash = hash;
      });
    } // Конец, если
  });
});


// ------PARALLAX----------------------------

var image = document.querySelectorAll('.details__item-image');
    if (window.matchMedia('(min-width: 650px)').matches) {
      var parallax = new simpleParallax(image, {
        orientation: 'down',
        scale: 1.3,
        delay: 0,
        customContainer: '.details__item'
      });
    }


// -----DROPDOWN------------------------------
let dropdown = document.querySelector('.dropdown');
const toggleMenu = () => {
  dropdown.classList.toggle('_active');
}

document.addEventListener('click', e => {
  let target = e.target;
  let its_dropdown = target == dropdown || dropdown.contains(target);
  let dropdown_is_active = dropdown.classList.contains('_active');
  if (its_dropdown || dropdown_is_active) {
    toggleMenu();
  }
});
