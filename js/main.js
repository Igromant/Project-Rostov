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

      
      // Анимация
      new WOW().init();

      //Валидация
      $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            // строчное правило
            userName: {
                required:true,
                minlength: 2
            },
            userPhone: "required",
            // правило-объект (блок)
            userEmail: {
              required: true,
              email: true
            }
          },  //сообщения
          messages: {
            userName:{
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв"
            } ,
            userPhone: "Телефон обязателен",
            userEmail: {
              required: "Обязательно укажите Email",
              email: "Введите в формате name@domain.com"
            }
          },
          submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    alert('Форма отправлена, мы свяжемся с вами черезм 10 минут');
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                },
                error: function (response) {
                    console.error('Ошибка запроса' + response);
                }
            });
          }
      });


        // Маска для телефона

        $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___-__-__"});

        //Макет карты яндекс со значком

    // // Функция ymaps.ready() будет вызвана, когда
    // // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    // ymaps.ready(init);
    // function init(){
    //     // Создание карты.
    //     var myMap = new ymaps.Map("map", {
    //         // Координаты центра карты.
    //         // Порядок по умолчанию: «широта, долгота».
    //         // Чтобы не определять координаты центра карты вручную,
    //         // воспользуйтесь инструментом Определение координат.
    //         center: [55.76, 37.64],
    //         // Уровень масштабирования. Допустимые значения:
    //         // от 0 (весь мир) до 19.
    //         zoom: 7
    //     });
    // };
    /* ymaps.ready(function () {
         var myMap = new ymaps.Map('map', {
             center: [55.598283, 38.119129],
             zoom: 9
         }, {
             searchControlProvider: 'yandex#search'
         }),
          Создаём макет содержимого.
         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
             '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
         ),
         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
             hintContent: 'Наш офис',
             balloonContent: 'Вход со двора'
         }, {
              Опции.
              Необходимо указать данный тип макета.
             iconLayout: 'default#image',
              Своё изображение иконки метки.
             iconImageHref: 'img/coffee-shop.svg',
             // Размеры метки.
             iconImageSize: [32, 32],
             // Смещение левого верхнего угла иконки относительно
             // её "ножки" (точки привязки).
             iconImageOffset: [-5, -38]
         });
             myMap.geoObjects
                 .add(myPlacemark);
      }); */
});
