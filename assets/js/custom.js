var $ = jQuery;
function owlCarouselJs(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
      }
  });
}
$(document).ready(function(){
  owlCarouselJs();
});

$('.owl-carousel.tour-owl').owlCarousel({
  loop: true,
    autoplay: true,
    items: 3,
  margin:20,
    stagePadding: 5,
    nav: true,
  center:false,
  dot:true,
  responsive:{
      0:{
          items:1
      },
      800:{
          items:3
      }
  }
})