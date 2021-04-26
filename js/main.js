/*
document.addEventListener("DOMContentLoaded", function (event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(Element => {
        Element.addEventListener('click', switchModal);
    });

    closeBtn.addEventListener('click', switchModal);
});
  

document.addEventListener('keydown', function(event) {
    const modal = document.querySelector('.modal');
    if (event.key == 'Escape' || event.code === 27 ) {
    modal.classList.remove('modal--visible');
    }
});
*/

$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),   
        closeBtn = $('.modal__close');
        
    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible')
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible')
    });
    $(document).keyup(function (closeKey) {
        //27 = escape
        if(closeKey.which == 27 && modal.hasClass('modal--visible')){
            modal.toggleClass('modal--visible')
        }
    });
    $(document).click(function (closeKey) {
        if($(closeKey.target).is('.modal')){
            modal.toggleClass('modal--visible')
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.button__upward').fadeIn();
        } else {
            $('.button__upward').fadeOut();
        }
    });
    
    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('.button__upward').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    const swiper = new Swiper('.swiper1', {
        // Optional parameters
        loop: true,
        pagination: {
            el: '.pagination1',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.button-next1',
            prevEl: '.button-prev1',
        },
      });
      const next = $('.button-next1');
      const prev = $('.button-prev1');
      const bullets = $('.pagination1');

      next.css('left', prev.width() + 15 + bullets.width() + 15 );
      bullets.css('left',  prev.width() + 15);
    
      const mySwiper = new Swiper('.swiper2', {
        // Optional parameters
        loop: true,
        pagination: {
            el: '.pagination2',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.button-next2',
            prevEl: '.button-prev2',
        },

      });
      const myNext = $('.button-next2');
      const myPrev = $('.button-prev2');
      const myBullets = $('.pagination2');

      myNext.css('left', myPrev.width() + 15 + myBullets.width() + 15 );
      myBullets.css('left',  myPrev.width() + 15);


      new WOW().init();
});
