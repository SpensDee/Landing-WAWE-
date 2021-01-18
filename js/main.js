$(function(){
    $('.blog__slider').slick({
       dots: true,
       arrows: false
    });

    $('.menu__btn').on('click', function(){
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


