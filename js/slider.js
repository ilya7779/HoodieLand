$(document).ready(function (){
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        easing: 'linear',
        infinite: true,
        initialSlide: 0,
        // autoplay: true,
        // autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchThreshold: 5,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
    });
});