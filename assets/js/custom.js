var $ = jQuery;
function owlCarouselJs(){
    $('.card_slider').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            1280:{
                items:2
            },
        }
    });
    $('.tour_slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots: true,
        stagePadding: 12,
        responsive:{
            0:{
                items:1
            },
            980:{
                items:2
            },
            1280:{
                items:3
            },
        }
    });
}

$(document).ready(function(){
  owlCarouselJs();
});