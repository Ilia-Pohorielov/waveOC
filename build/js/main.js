$(document).ready(function () {
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
        $('.js-nav-title').click(function() {
            $(this).toggleClass("rotate");
            $(this).next("ul").slideToggle();
        });
    }
    /* end accordion footer */
    /* begin mobile menu */
    $('.js-mobile-menu').on('click', function () {
        $('body').css('overflow', 'hidden');
        $(this).toggleClass('active');
        $('.header-container').toggleClass('open');
    });

    $('.js-menu-close').on('click', function () {
        $('body').css('overflow', 'inherit');
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
    if ($(window).width() >= 767) {
        heightEL($('.testimonial-item.height'));
    }
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
        $('.title-service').click(function() {
            $(this).parents('.service-item').toggleClass("opened");
            $(this).next(".description").slideToggle();
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
                    infinite: true
                }
            }
        ]
    });
    /* end initialize slick-slider */
/*    $('.js-location').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
        var lat = Number($(this).attr('data-lat'));
        var lng = Number($(this).attr('data-lng'));
        initMap(lat, lng);
    });*/
    /* validation form */
    $('.js_validate [type="submit"]').on("click", function () {
        return validate($(this).parents(".js_validate"));
    });
    /* upload file */
/*    var file_input = $('#download-file');
    file_input.on('change',function(e) {
        var files = this.files;
        for(var i = 0; i < files.length; i++) {
            $('<div class="upload-link">'+files[i].name+'<div class="remove js-remove">X</div></div>').appendTo('.uploads');
        }
    });
    $('body').on('click', '.js-remove', function () {
        $(this).parent().remove();
    });*/
    /* initialize animation */
    var controller = new ScrollMagic.Controller();

    /* homepage animation trigger */
    new ScrollMagic.Scene({
        triggerElement: '.description-company',
        triggerHook: .7,
        reverse: false
    })
        .setClassToggle('.description-company', 'animated')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.why-control',
        triggerHook: .5,
        reverse: false
    })
        .setClassToggle('.why-control', 'animated')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.our-services:not(.page-services)',
        triggerHook: .5,
        reverse: false
    })
        .setClassToggle('.our-services:not(.page-services)', 'animated')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.block-linkedin',
        triggerHook: .8,
        reverse: false
    })
        .setClassToggle('.block-linkedin', 'animated')
        .addTo(controller);
    /* solutions animation trigger */
    new ScrollMagic.Scene({
        triggerElement: '.block-expectation',
        triggerHook: .8,
        reverse: false
    })
        .setClassToggle('.block-expectation', 'animated')
        .addTo(controller);
    /* project animation trigger */
    new ScrollMagic.Scene({
        triggerElement: '.block-team',
        triggerHook: .6,
        reverse: false
    })
        .setClassToggle('.block-team', 'animated')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.project-description',
        triggerHook: .6,
        reverse: false
    })
        .setClassToggle('.project-description', 'animated')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.block-benefits',
        triggerHook: .6,
        reverse: false
    })
        .setClassToggle('.block-benefits', 'animated')
        .addTo(controller);
    /* services animation trigger */
    new ScrollMagic.Scene({
        triggerElement: '.block-expertise',
        triggerHook: .7,
        reverse: false
    })
        .setClassToggle('.block-expertise', 'animated')
        .addTo(controller);
    /* about animation trigger */
    new ScrollMagic.Scene({
        triggerElement: '.block-philosophy',
        triggerHook: .6,
        reverse: false
    })
        .setClassToggle('.block-philosophy', 'animated')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.block-mission',
        triggerHook: .6,
        reverse: false
    })
        .setClassToggle('.block-mission', 'animated')
        .addTo(controller);
    /*zoom page for notebokk */
    if (window.screen.width === 1366) {
        $('html').attr('style','zoom: 0.78');
    } else if ( window.screen.width === 1280 ) {
        $('html').attr('style','zoom: 0.75');
    } else if (window.screen.width === 1248) {
        $('html').attr('style','zoom: 0.72');
    }
    /*hover for page 404 */
    $('.page-404 .image').on('mousemove', function (e) {
       $(this).css( {
           'background-position-x': (e.clientX / 15 )  + '%',
           'background-position-y': (e.clientY / 10 ) + '%'
        });
    });
});
/* initialize google map */
/*
function initMap(lat, lng) {
    var coordinates = { lat: lat||39.638664, lng: lng||-75.729024 };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 10
    });
    var marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: './images/logo_map.svg'
    });
    map.setOptions({styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]});
}*/
