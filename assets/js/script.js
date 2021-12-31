
$(document).ready(function(){

	$(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.nav-bar').addClass('sticky')
        } else{
            $('.nav-bar').removeClass('sticky')
        }
    });

    /*$('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
    });*/

});