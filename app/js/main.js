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