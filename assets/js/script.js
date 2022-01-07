
$(document).ready(function(){

    $('.ham-wrap'). click (function(){
        $('.header').toggleClass('mobile-menu-open');
    });
    
    $(window).on('load', function(){
        var winWidth = $(window).width();
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
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:1
            },
            1024:{
                items:1
            }
        }
    })

});