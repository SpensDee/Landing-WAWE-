$(function(){

    $('.menu__link, .header__scroll-icon, .footer__logo').on('click', function (e) {
        e.preventDefault();
        const id  = $(this).attr('href'),
          top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
      });

    $('.blog__slider').slick({
       dots: true,
       arrows: false
    });

    $('.menu__btn, .menu__link').on('click', function(){
        $('.header__nav').toggleClass('header--active');
    });

    const mixer = mixitup('.gallery__items', {
        animation: {
            duration: 938,
            nudge: true,
            reverseOut: false,
            effects: "fade translateZ(-15px) rotateX(-90deg) rotateY(-90deg)"
        }
    });

    fancybox-is-open
});


