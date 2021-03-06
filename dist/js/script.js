$(document).ready(function () {
    $(function () {
        $("a[href^='#prices']").click(function () {
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
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.partners__slider').slick({
        prevArrow: '<button type="button" class="slick-chevron-left"><i class="fas fa-angle-left    "></i></button>',
        nextArrow: '<button type="button" class="slick-chevron-right"><i class="fas fa-angle-right    "></i></button>',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
