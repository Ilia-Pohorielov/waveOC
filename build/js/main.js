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
$(".js-nav-title").click(function () {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.classList.remove("show");
        $(this).removeClass('rotate');
    } else {
        panel.style.maxHeight = panel.scrollHeight + "%";
        panel.classList.add("show");
        $(this).addClass('rotate');
    }
});
/* end accordion footer */

$('.js-mobile-menu').on('click', function () {
   $(this).toggleClass('active');
   $('.header-container').toggleClass('open');
});

$('.js-menu-close').on('click', function () {
    $('.js-mobile-menu').removeClass('active');
   $('.header-container').removeClass('open');
});