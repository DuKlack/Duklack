const slideCount = document.querySelectorAll('.swiper-slide').length;
const swiper = new Swiper('.swiper', {
    loop: slideCount > 2,  // Loop only if slides > 2
    autoplay: {
        delay: 5000,  // 5 seconds
        disableOnInteraction: false,  
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});