/* ===========================================================================

                          Pre Loader                                          

==============================================================================*/

$(window).on('load', function(){
    $('#preloader_status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ===========================================================================

                          Owl carousel                                         

==============================================================================*/

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();           gives 3 - 3 slides show
//   });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:2,                                //default it will 3
        autoplay: true,                          //default it will false
        smartspeed: 750,                             //default it will 250
        loop: true,                                      //default false
        autoplayHoverPause: true,                           //default false      //slideshow has to stop when we place on it 
        dots: false,                                 //default true            //if u dont want dots
        nav: true,                           
        navText: ['<span><i class="fas fa-angle-double-left"></i></span>','<span><i class="fas fa-angle-double-right"></i></span>']   //if u want your own symbols/icons as arrows
        //for more features docs >> options >> find your fav

    });
  });