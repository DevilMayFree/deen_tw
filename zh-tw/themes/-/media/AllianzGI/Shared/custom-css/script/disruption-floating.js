/* floating */
$(function () {
    $('.outter--li').click(function(){
        $('.outter--li').not(this).removeClass('active');
        $(this).toggleClass('active')
    });

    $('.floating--menu--inner .main--name span').click(function(){
        $('html, body').animate({
            scrollTop: $(".section-solution").offset().top
        }, 500);
    });
});
$(window).scroll(function () {
    var pageOffset = window.pageYOffset || document.documentElement.scrollTop
    if(pageOffset > 100){
        $('.floating--menu').show();
    } else {
        $('.floating--menu').hide();
    }
});