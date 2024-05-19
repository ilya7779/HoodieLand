// document.addEventListener('scroll', function () {
//     if(scrollY >= 2000) {
//         mainBtn.classList.remove('hidden');
//     } else {
//         mainBtn.classList.add('hidden');
//     }
// });

const buttonUp = document.getElementById('footer__button-up');
buttonUp.addEventListener('click', function () {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})