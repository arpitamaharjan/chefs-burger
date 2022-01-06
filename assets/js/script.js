
$(document).ready(function(){

    $('.ham-wrap'). click (function(){
        $('.header').toggleClass('mobile-menu-open');
    });
    
    $(window).on('load', function(){
        var winWidth = $(window).width();
        console.log(winWidth);
        if(winWidth < 1025) {
            $('.submenu > a').on('click', function(){
            $(this).parent().toggleClass('active');
            })
        }
    });

	$(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.header').addClass('sticky')
        } else{
            $('.header').removeClass('sticky')
        }
    });

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });

    $('.testimonial-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:2
            },
            1000:{
                items:1
            }
        }
    })

});