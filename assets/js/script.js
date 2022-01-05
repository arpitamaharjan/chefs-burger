
$(document).ready(function(){

	$(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.nav-bar').addClass('sticky')
        } else{
            $('.nav-bar').removeClass('sticky')
        }
    });
    
    $('.ham-wrap'). click (function(){
        $('.navbar').toggleClass('mobile-menu-open');
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