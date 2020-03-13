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
    
  });