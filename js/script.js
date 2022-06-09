$(window).scroll(function() {
    if ($(document).scrollTop() > 500) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  });

$(window).scroll(function() {
    if ($(document).scrollTop() > 350) {
      $('#icon').addClass('shopping');
    } else {
      $('#icon').removeClass('shopping');
    }
  });
  $(document).ready(function () {
    if ($(window).width() > 991){
    $('.navbar-light .d-menu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
        });
        }
    });
    AOS.init();

//廣告輪播圖

jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: true,
  margin: 10,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    425: {
      items: 2
    },

    600: {
      items: 2
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});

jQuery("#news").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 0,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>"
  ],

  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

  }
});

jQuery("#prod").owlCarousel({
  autoplay: true,
  rewind: true,
  margin: 10,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 2
    },
    425: {
      items: 2
    },

    600: {
      items: 2
    },
    768: {
      items: 3
    },
    1024: {
      items: 3
    },

    1366: {
      items: 3
    }
  }
});