// import Swiper from 'swiper/bundle';
//
// new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//
//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },
//
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     // And if we need scrollbar
//     // scrollbar: {
//     //     el: '.swiper-scrollbar',
//     // },
// });
// console.log('dddddddddddddd');
new Swiper('.swiper', {
    touchRatio: 2,
    mousewheel: {
      sensitivity: 3,
    },
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    // autoplay: {
    //     delay: 2000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    // },
    speed: 500,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
        },
    //     992: {
    //         slidesPerView: 4,
    //     },
    }
});