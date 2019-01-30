$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	autoWidth: false,
  	items: 1,
  });
  
});

$(".btn-popup-js").onClick({
       'afterLoad': function() { $(".hideOnTouch").hide(); },
       'afterClose': function() { $(".hideOnTouch").show(); }
 });

