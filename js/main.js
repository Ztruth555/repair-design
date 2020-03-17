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
    
    jQuery(function($){
      modal.mouseup(function (e){ 
          if (!modalHidden.is(e.target) && modalHidden.has(e.target).length === 0) { 
            modal.toggleClass('modal--visible'); 
          }
      });

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

      next.css('left', prev.width() + 10 + bullets.width() +10)
      bullets.css('left', prev.width() + 10)


    });
    
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

    new WOW().init();
    
  });