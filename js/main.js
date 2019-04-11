jQuery(document).ready(function ($) {

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  // Header fixed on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Real view height for mobile devices
  if (window.matchMedia("(max-width: 767px)").matches) {
    $('#intro').css({ height: $(window).height() });
  }

  // Initiate the wowjs animation library
  new WOW().init();

  // Initialize Venobox
  $('.venobox').venobox({
    bgcolor: '',
    overlayColor: 'rgba(6, 12, 34, 0.85)',
    closeBackground: '',
    closeColor: '#fff'
  });

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });



  // custom code

});

var mainApp = angular.module("mainApp", []);

mainApp.controller('scheduleController', function ($scope) {
  $scope.schedule = {
    day1: {
      events: [
        { "time": "9:00 AM", "title": "Check-In" },
        { "time": "9:30 AM", "title": "Workshop (SGDA)" },
        { "time": "10:15 AM", "title": "Opening Ceremony" },
        { "time": "10:30 AM", "title": "Begin Working" },
        { "time": "12:30 PM", "title": "Lunch" },
        { "time": "1:30 - 2:00 PM", "title": "Workshop (SGDA)" },
        { "time": "2:30 - 3:00 PM", "title": "Workshop (XRS)" },
        { "time": "3:30 - 4:00 PM", "title": "Workshop (SGDA)" },
        { "time": "4:30 - 5:00 PM", "title": "Workshop (XRS)" },
        { "time": "6:00 PM", "title": "Dinner" },
        { "time": "7:00 PM", "title": "Smash Ultimate Tournament" },
        { "time": "10:30 PM", "title": "Quiet Hours Begin" }
      ]
    },
    day2: {
      events: [
        { "time": "6:00 AM", "title": "Quiet Hours End" },
        { "time": "9:00 AM", "title": "Breakfast" },
        { "time": "10:30 AM", "title": "Stop Working / Submission Deadline" },
        { "time": "10:45 AM", "title": "Judging Begins" },
        { "time": "11:30 AM", "title": "Lunch" },
        { "time": "12:00 PM", "title": "Judging Over" },
        { "time": "12:15 PM", "title": "Finalist Announced" },
        { "time": "12:30 PM", "title": "Finalist Game Pitches" },
        { "time": "1:30 PM", "title": "Closing Ceremony" }
      ]
    }
  };
});
mainApp.controller('faqController', function ($scope) {
  $scope.FAQ = {
    entries: [
      { "q": "What is Got Game?", "a": "Got Game is a student led game jam where clubs such as Artificial Intelligence Society (AIS), Student Game Developer Alliance (SGDA), Extended Reality Society (XRS), and Makerspace come together to create an event where students can help each other in learning a new skill or showcasing a talent." },
      { "q": "Who can participate?", "a": "All students are welcome. This includes undergraduate students and graduate students." },
      { "q": "How big are teams?", "a": "Teams are usually composed of 2-4 people. No more than 4 people on a team. You can do it alone, but it'll be less fun." },
      { "q": "What if I don't have a team?", "a": "We’ll have a scheduled time for team creation after the opening ceremony." },
      { "q": "What should I bring?", "a": "Laptops, chargers, cell phones, and of course passion are all helpful. Other useful items include toiletries, a change of clothes, a pillow, some earplugs, an eye mask, a jacket, and... deodorant. Knives, firearms, and other dangerous things are not permitted at the event." },
      { "q": "How much does this event cost?", "a": "Got Game is 100% free for students. This includes WiFi, food, drinks, and miscellaneous swag for the entire jam." },
      { "q": "Are we allowed to build on past projects?", "a": "A Game Jam is an experience to build something new within a set amount of time. Therefore, you cannot work on past projects. However, using your own open-source or third-party libraries is fine, as long as the project is new." },
      { "q": "What is the theme of Got Game?", "a": "We will be announcing the theme of the game jam during the opening ceremony so stay tuned!" }
    ]
  };
})

mainApp.controller('introController', function ($scope){
  $scope.intro = {};
  $scope.intro.rightNow = function(){
    return new Date();
  }

  $scope.intro.isOpen = function(){
    return new Date('2019-03-23T00:00:00') > $scope.intro.rightNow();
  }
})

mainApp.controller('cFriendController', function($scope){
  $scope.diamondSponsors = [
    {"name": "Sector 5 Digital", "url": "http://www.sector5digital.com", "image": "sector5-big.jpg" , "background": "black"},
  ];
  $scope.goldSponsors = [
    {"name": "Boss Fight", "url": "http://bossfightentertainment.com/", "image": "boss-fight.svg", "background": "#191919"},
  ];
  $scope.sponsors = [
    {"name": "HTC Vive", "url" : "https://www.vive.com/us/", "image": "vive.png"},
    {"name": "Immosis", "url": "https://immosis.com/", "image": "immosis.png", "background": "black"},

  ];
})

mainApp.controller('aFriendController', function($scope){
  $scope.partners = [
    {"name": "XRS", "url": "https://xrsutd.org", "image": "XRS.png", "background": "#262626"},
    {"name": "Makerspace", "url": "https://utdmaker.space", "image": "Makerspace.png"},
    {"name": "SGDA", "url": "https://utdsgda.com", "image": "SGDA.png", "background": "light-grey"},
    {"name": "E-Club", "url": "https://utdeclub.com/", "image": "eclub.png"},
  ]
})
