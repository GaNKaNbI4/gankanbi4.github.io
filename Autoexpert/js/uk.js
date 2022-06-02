//-------ANIMATIONS--------------------------------

let animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems [index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 2;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        if(animItem.classList.contains('line__title') && !animItem.classList.contains('_active')) {
          Speak("Автотоварознавче дослідження");
        }
        animItem.classList.add('_active');
      } else {
        if(!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset (el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
  
}

var timer, fullText, currentOffset;

function Speak(text) {
    fullText = text;
    currentOffset = 0;
    timer = setInterval(onTick, 70);
}

function onTick() {
    currentOffset++;
    var text = fullText.substring(0, currentOffset);
    $(".line__title").html(text);
}

//----SEND EMAIL-----------------------------------

"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    if (error === 0) {
      let formData = new FormData (form);
      form.classList.add('_sending');
      
      let response = await fetch('sendmail_uk.php', {
        method: 'POST',
        body: formData
      });
      if(response.ok) {
        let result = await response.json ();
        alert(result.message);
        form.reset();
        form.classList.remove('_sending');
      } else {
        alert("Помилка");
        form.classList.remove('_sending');
      }
    } else {
      alert('Ви не заповнили необхідні поля');
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if(input.classList.contains('_email')) {
        if(emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  // Функция теста email
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});