(function ($)
  { "use strict"
  
/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

/* 2. sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });
  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  

/* 3. slick Nav */
// mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };




/* 3. MainSlider-1 */
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
          var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
          doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
          var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
          doAnimations($animatingElements);
        });
        BasicSlider.slick({
          autoplay: true,
          autoplaySpeed: 3000,
          dots: false,
          fade: true,
          arrows: false,
          prevArrow: '<button type="button" class="slick-prev"><i class="ti-arrow-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="ti-arrow-right"></i></button>',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
        });

        function doAnimations(elements) {
          var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
              'animation-delay': $animationDelay,
              '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
              $this.removeClass($animationType);
            });
          });
        }
      }
      mainSlider();


 // Brand Active
    $('.brand-active').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 400,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });


/* 4. Testimonial Active*/
  var testimonial = $('.h1-testimonial-active');
      if(testimonial.length){
      testimonial.slick({
          dots: false,
          infinite: true,
          speed: 1000,
          autoplay:false,
          loop:true,
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrow:false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
              }
            }
          ]
        });
      }


/* 6. Nice Selectorp  */
  var nice_Select = $('select');
    if(nice_Select.length){
      nice_Select.niceSelect();
    }

/* 7. data-background */
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      });







})(jQuery);

(function ($) {
  "use strict";
  
  /*==================================================================
  [ Validate ]*/
  var name = $('.validate-input input[name="name"]');
  var email = $('.validate-input input[name="email"]');
  var subject = $('.validate-input input[name="subject"]');
  var message = $('.validate-input textarea[name="message"]');

  
  $('.validate-form').on('submit',function(e){

      e.preventDefault();
      var check = true;

      if($(name).val().trim() == ''){
          showValidate(name);
          check=false;
      }else{
        hideValidate(name);
      }

      if($(subject).val().trim() == ''){
          showValidate(subject);
          check=false;
      }else{
        hideValidate(subject);
      }


      if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
          showValidate(email);
          check=false;
      }else{
        hideValidate(email);
      }

      if($(message).val().trim() == ''){
          showValidate(message);
          check=false;
      }else{
        hideValidate(message);
      }
      
      if (check) {
          var xhttp = new XMLHttpRequest();
          
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              // document.getElementById("demo").innerHTML = this.responseText;
              $('#review-alert').show();
            }
          };
          var data = {name: $(name).val(), subject: $(subject).val(), email: $(email).val(), message: $(message).val()};
          xhttp.open("POST", "https://email-app-testtest.herokuapp.com/", true);
          // xhttp.open("POST", "http://localhost:9997", true);
          xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");    
          
          xhttp.send(JSON.stringify(data));
      }
      return false;
  });

  $('.alertHandler').on('click', function(){
    $('#review-alert').hide();
    name.val('');
    email.val('');
    subject.val('');
    message.val('');
  });

  $('.validate-form .input1').each(function(){
      $(this).focus(function(){
         hideValidate(this);
     });
  });

  function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).removeClass('alert-validate');
  }
  
  

})(jQuery);
