$(function(){
    $('.blog__slider').slick({
       dots: true
    });

    const mixer = mixitup('.gallery__items', {
        animation: {
            duration: 938,
            nudge: true,
            reverseOut: false,
            effects: "fade translateZ(-15px) rotateX(-90deg) rotateY(-90deg)"
        }
    });
});