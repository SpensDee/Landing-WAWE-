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

    fancybox-is-open
});


$(document).ready(function ($) {
    function animateElements() {
        $('.progressbar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 180,
                    thickness: 30,
                    emptyFill: "rgba(0,0,0, .2)",
                    fill: {
                        color: '#fb4f14'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text((stepValue*100).toFixed(1) + "%");
                }).stop();
            }
        });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
    // Variables
var viewport = $(window),
root = $('html'),
maxScroll;

// Bind events to window
viewport.on({
scroll: function() {
// Grab scroll position
var scrolled = viewport.scrollTop();

/**
 * Calculate our factor, setting it as the root `font-size`.
 *
 * Our factor is calculated by multiplying the ratio of the page scrolled by our base factor. The higher the base factor, the larger the parallax effect.
 */
root.css({ fontSize: (scrolled / maxScroll) * 50 });
},
resize: function() {
// Calculate the maximum scroll position
maxScroll = root.height() - viewport.height();
}
}).trigger('resize');