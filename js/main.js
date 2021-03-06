/*
document.addEventListener("DOMContentLoaded", function(event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible')
    }

    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });

    closeBtn.addEventListener('click', switchModal);

}); 
*/

// модальное окно 

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closelBtn = $('.modal__close'),
      modalHidden = $('.modal__dialog');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closelBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  $(document).on('keydown', function (event) {
    if (event.code == 'Escape') {
      $('.modal__form')[0].reset();
      $('div.invalid').remove();
      $('.modal__form').find('.invalid').removeClass('invalid');
      modal.removeClass('modal--visible');
    }
  });

  var ajaxSuccessModal = $('.ajax-success'),
      ajaxSuccessModalBtn = $('[data-toggle=ajax-success-close]'),
      ajaxSuccessModalcloseBtn = $('.ajax-success__close');

      ajaxSuccessModalcloseBtn.on('click', function () {
        ajaxSuccessModal.removeClass('ajax-success--visible');
      });
      $(document).on('keydown', function (event) {
        if (event.code == 'Escape') {
          ajaxSuccessModal.removeClass('ajax-success--visible');
      }
    });
  
  jQuery(function($){
    modal.mouseup(function (e){ 
        if (!modalHidden.is(e.target) && modalHidden.has(e.target).length === 0) { 
          modal.toggleClass('modal--visible'); 
        }
  });
    
    // Slider

    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bullets.width() +30)
    bullets.css('left', prev.width() + 20)

    new WOW().init();


  });
  
  // Кнопка вверх

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('#upbutton').is(':hidden')) {
            $('#upbutton').css({opacity : 1}).fadeIn('slow');
        }
    } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
  });
  $('#upbutton').click(function() {
      $('html, body').stop().animate({scrollTop : 0}, 800);
  });

  // Валидация формы Modal

  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required:true,
        minlength: 17
      },
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      },
      modalCheckbox: "required"
    }, 
    errorClass: "invalid",
    errorElement: "em",
    // сообщения
    messages: {
      userName: {
        required:"Имя обязательно",
        minlength: "Длина имени 2-15 символов",
        maxlength: "Длина имени 2-15 символов"
      } ,
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Введите корректный номер"
      },
      modalCheckbox: "Поставьте галочку",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    },
    submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        // alert('Форма отправлена, мы свяжемся с вами через 10 минут');
        $(form)[0].reset();
        modal.removeClass('modal--visible');
        ajaxSuccessModal.addClass('ajax-success--visible');
        // document.location.href = "thanks.html";
      },
      error: function (response) {  
        console.error('Ошибка запроса ' + response);
        ym('61399507', 'reachGoal', 'button'); return true;
      }
    });
    }
  });

  // Валидация формы footer

  $('.footer__form').validate({
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      footerCheckbox: "required",
      userQuestion: {
        required: true,
      }
    },
    errorClass: "invalid",
    errorElement: "div",
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Длина имени 2-15 символов",
        maxlength: "Длина имени 2-15 символов"
      },
      userPhone:{
        required: "Телефон обязателен",
        minlength: "Введите корректный номер"
      },
      footerCheckbox: "Нажмите, чтобы согласиться",
      userQuestion: {
        required: "Обязательно напишите вопрос",
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          // alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          ajaxSuccessModal.addClass('ajax-success--visible');
          // document.location.href = "thanks.html";
        },
        // error: function (response) {  
        //   console.error('Ошибка запроса ' + response);
        // }
      });
      }
  });

  // Валидация формы control

  $('.control__form').validate({
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      controlCheckbox: "required"
    },
    errorClass: "invalid",
    errorElement: "blockquote",
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Длина имени 2-15 символов",
        maxlength: "Длина имени 2-15 символов"
      },
      userPhone:{
        required: "Телефон обязателен",
        
      },
      controlCheckbox: "Поставьте галочку"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          // alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          ajaxSuccessModal.addClass('ajax-success--visible');
          // document.location.href = "thanks.html";
        },
        // error: function (response) {  
        //   console.error('Ошибка запроса ' + response);
        // }
      });
      }
  });

  // Маска для номера телефона

  $('[type=tel]').mask('+7(900) 000-00-00', {placeholder: "Ваш номер телефона:"});

  // Плавный переход по якорынм ссылкам

  $("#menu, #footer-menu, #hero, #menu-nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 110}, 1500);
  });

  });
  
  // Видео с сайта

  var player;

  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '460',
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': videoPlay,
      }
    })
  })

  function videoPlay(event) { 
    event.target.playVideo();
  }

  // Создание Yandex-карты

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244900, 39.723128],
            zoom: 16
          }, {
            searchControlProvider: 'yandex#search'
        });
        myMap.behaviors.disable("scrollZoom");
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        })


    myMap.geoObjects
        .add(myPlacemark);
});
