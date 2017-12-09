/* begin sticky-menu */
var  menu = $(".js-sticky-menu"),
    h_menu = $(".js-sticky-menu").height();

$(window).scroll(function() {
    if ($(this).scrollTop() <= h_menu) {
        menu.css('top', '-' + $(this).scrollTop() + 'px');
    }
    if( $(this).scrollTop() > h_menu ) {
        menu.attr('style', '');
        menu.addClass('sticky');
    } else {
        menu.removeClass('sticky');
    }
});
/* end sticky-menu */

/* begin accordion footer */
if ($(window).width() <= 767) {
    $(window).on('resize', function () {
        $('.js-nav-title').click(function() {
            $(this).toggleClass("rotate");
            $(this).next("ul").slideToggle();
        });
    });
    $(window).on('load', function () {
        $('.js-nav-title').click(function() {
            $(this).toggleClass("rotate");
            $(this).next("ul").slideToggle();
        });
    });
}
/* end accordion footer */
/* begin mobile menu */
$('.js-mobile-menu').on('click', function () {
   $(this).toggleClass('active');
   $('.header-container').toggleClass('open');
});

$('.js-menu-close').on('click', function () {
    $('.js-mobile-menu').removeClass('active');
   $('.header-container').removeClass('open');
});
/* end mobile menu */
/* begin height block */
function heightEL(el) {
    var elH = el;
    var maxHeight = 0;
    for (var i = 0; i < elH.length; ++i) {
        elH[i].style.height = "";
        if (maxHeight < elH[i].clientHeight) {
            maxHeight = elH[i].clientHeight;
        }
    }
    for (var i = 0; i < elH.length; ++i) {
        elH[i].style.height = maxHeight + "px";
    }
}
heightEL($('.testimonial-item.height'));
heightEL($('.service-item .height'));
if ($(window).width() > 767) {
    $(window).on('resize', function () {
        heightEL($('.testimonial-item.height'));
        heightEL($('.service-item .height'));
    });
    $(window).on('load', function () {
        heightEL($('.testimonial-item.height'));
        heightEL($('.service-item .height'));
    });
}
/*end height block */
/*begin choosing mobile*/
if ($(window).width() <= 1050) {
    $(window).on('resize', function () {
        $('.title-service').click(function() {
            $(this).parents('.service-item').toggleClass("opened");
            $(this).next(".description").slideToggle();
        });
    });
    $(window).on('load', function () {
        $('.title-service').click(function() {
            $(this).parents('.service-item').toggleClass("opened");
            $(this).next(".description").slideToggle();
        });
    });
}
/*end hover choosing*/
/* begin initialize slick-slider */
$('.js-slider-testimonial').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
            }
        }
    ]
});
/* end initialize slick-slider */