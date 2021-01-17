$(document).ready(function () {
    $(function () {
        $("a[href^='#']").click(function () {
            var _href = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
            return false;
        });
    });

    $('.brands__slider').slick({
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: 'linear',
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 6,
        speed: 8000,
        swipe: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                }
            },
            {
                breakpoint: 600,
                settings: {

                }
            },
            {
                breakpoint: 480,
                settings: {

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.partners__slider').slick({
        prevArrow: '<button type="button" class="slick-chevron-left"><i class="fas fa-chevron-left    "></i></button>',
        nextArrow: '<button type="button" class="slick-chevron-right"><i class="fas fa-chevron-right    "></i></button>',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                }
            },
            {
                breakpoint: 600,
                settings: {

                }
            },
            {
                breakpoint: 480,
                settings: {

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.reviews__slider').slick({
        adaptiveHeight: true,
        arrows: false,
        dots: true,
        dotsClass: 'slick-round',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                }
            },
            {
                breakpoint: 600,
                settings: {

                }
            },
            {
                breakpoint: 480,
                settings: {

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
