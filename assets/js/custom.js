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
}
$(document).ready(function(){
  owlCarouselJs();
});