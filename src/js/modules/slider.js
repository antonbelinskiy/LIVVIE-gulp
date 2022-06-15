$(document).ready(function () {
    $('.hero-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    });
    $('.image-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    prevArrow: '<span class="icon slick-prev-arrow icon-arrow_r"></span>',
                    nextArrow: '<span class="icon slick-next-arrow icon-arrow_r"></span>',
                }
            },
        ]

    });
})
