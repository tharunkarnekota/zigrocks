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
        autoplayHoverPause: true,                           //default false              //slideshow has to stop when we place on it 
        dots: false,                                           //default true                //if u dont want dots
        nav: true,                           
        navText: ['<span><i class="fas fa-angle-double-left"></i></span>','<span><i class="fas fa-angle-double-right"></i></span>']   //if u want your own symbols/icons as arrows
        //for more features docs >> options >> find your fav

    });
  });

  /* ===========================================================================

                          Progress Bars                                        

==============================================================================*/

// $(function(){                                    // shortform of document.ready function    
//       alert('I Am Working')                        // gives alert in starting of the page
// });

$(function(){
    /*  $("#progress-elements").waypoint(function(){         //gives alert when progress touch the top of screen while scrolling
          alert("reached your stop")
      });   */

    /*  $("#progress-elements").waypoint(function(){
        alert("reached your stop")
        this.destroy();
      },{
        offset: 'bottom-in-view'
      });  */

      $("#progress-elements").waypoint(function(){
        
        $(".progress-bar").each(function(){                  
          $(this).animate({                                              
            width: $(this).attr("aria-valuenow") + "%"
          }, 1000);
        });  
        this.destroy();
      },{
        offset: 'bottom-in-view'
      });

    /*  $(".progress-bar").each(function(){                                  // each function calls every individual progress 
        $(this).animate({                                               // instead of writing ".progress-bar" everytime, use 'this' 
              // width: '50%'                                        // we can give percentage manually  but applies to all
              //  width: $(this).attr("aria-valuenow")            //   it takes the length of animation in pixels of length , like in first case moves upto 95 px
              width: $(this).attr("aria-valuenow") + "%"            // here it takes in percentage now it moves given percentage
        }, 1000);
      });  */ 


});



/* ===========================================================================

                          Responsive - tabs                                         

==============================================================================*/

// $(function (){                                       
//   alert('testing');                                     //  To check the document.ready function is working , we use alert
// });

$(function (){
  $('#services-tabs').responsiveTabs({
    animation: 'slide'
});
});


/* ===========================================================================

                          isotope - portfolio                                         

==============================================================================*/

$(window).on('load', function(){           // this condition is ued beccause page has to open only after complete loading of images

    // init Isotope
    var $grid = $('.grid').isotope({                                // grid is the parent class
  
    });
    // filter items on button click
    $('.portfolio-buttons').on( 'click', 'button', function() {         //since portfolio-buttons is the class for all buttons

        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

        /* add active class */
        $('.portfolio-buttons').find('.active').removeClass('active');
        $(this).addClass('active');

    });

})


/* ===========================================================================

                          magnific popup                                         

==============================================================================*/

$(function(){
  $('.portfolio-item').magnificPopup({                 //portfolio is parent class
    delegate: 'a', // child items selector, by clicking on it popup will open // we use a [anchor text] in coding
    type: 'image',
    gallery:{
      enabled: true
    }
  });
});
