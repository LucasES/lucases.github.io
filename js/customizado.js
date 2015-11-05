


jQuery(function($) {
  "use strict";
/* ==============================================
   Countdown
=============================================== */
  // Create a countdown instance. Change the launchDay according to your needs.
  // The month ranges from 0 to 11. I specify the month from 1 to 12 and manually subtract the 1.
  // Thus the launchDay below denotes 7 May, 2014.
  var launchDay = new Date(2015, 10-1, 18);
  $('#timer').countdown({
  until: launchDay
  });


/* ==============================================
  Bx Slider
=============================================== */

  $('.bxslider').bxSlider({
      auto: true,
      pager:false,
      mode: 'fade',
      speed: 1500,
      pause:5000
      });

    /* ----------------------------------------------------------- */
   /*  Animation
   /* ----------------------------------------------------------- */
        new WOW().init();

   /* ==============================================
    Bactstretch js
=============================================== */
        $("#top").backstretch([
          "images/bx-slider/bg.jpg",
          "images/bx-slider/bg1.jpg",          
          "images/bx-slider/bg3.jpg",
          "images/bx-slider/bg4.jpg",
          "images/bx-slider/bg5.jpeg"
        ], {
            fade: 750,
            duration: 3000
        });   



});