$(function () {
    
    "use strict";
	 /* smooth scroll
  -------------------------------------------------------*/
	  $.scrollIt({

		easing: 'swing',      // the easing function for animation
		scrollTime: 900,       // how long (in ms) the animation takes
		activeClass: 'active', // class given to the active nav element
		onPageChange: null,    // function(pageIndex) that is called when page is changed
		topOffset: -70,
		upKey: 38,                // key code to navigate to the next section
        downKey: 40          // key code to navigate to the previous section

	  });
	
	 var win = $(window);
           
  
    win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 100) {
            $(".navbar").addClass("navbar-colored");
        } else {
            $(".navbar").removeClass("navbar-colored");
        }
    });
	
	/* close navbar-collapse when a  clicked */
    $(".navbar-nav a").not('.dropdown-toggle').on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
	
	/* close navbar-collapse when a  clicked */
    $('.dropdown').on('click', function () {
        $(this).toggleClass("show");
    });
	
	/* scroll-top-btn */
	var  scrollButton = $('.scroll-top-btn .fa');
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 700) {  
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
	
    /* Click On scroll-top-btn */ 
    scrollButton.on('click', function () {
        $('html,body').animate({ scrollTop : 0 }, 1200);
    });
	
	/* wow */
	new WOW().init();
	
	/* counter */
	$('.count').counterUp({
        delay: 20,
        time: 1500
    });
	
	/* tabs in price-area section */
	$('.price-area ul.tabs li').on('click', function(){
		var myID = $(this).attr('id');
		$(this).addClass('active').siblings().removeClass('active');
		$('#' + myID + '-content').fadeIn(800).siblings().hide();
	});
	
	$('.price-area-2 ul.tabs li').on('click', function(){
		var myID = $(this).attr('id');
		$(this).addClass('active').siblings().removeClass('active');
		$('#' + myID + '-content').fadeIn(800).siblings().hide();
	});
     
	/* faqs section */
    $('.faqs .box h6').on("click", function (){
		$(this).toggleClass('blue orange').siblings().removeClass('orange').addClass('blue');
        $(this).next().slideToggle(500);
		$(".faqs .box p").not($(this).next()).slideUp(500); 
    });
	
	 $('.faqs-2 .box h6').on("click", function (){
		$(this).toggleClass('blue orange').siblings().removeClass('orange').addClass('blue');
        $(this).next().slideToggle(500);
		$(".faqs-2 .box p").not($(this).next()).slideUp(500); 
    });
 
	/* vision-area */
    $('.vision-area .owl-carousel').owlCarousel({
	    items: 1,
        loop: true,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 650,
	    dotsContainer: '.vision-dots'
    });
	
	/* how-work-2 */
    $('.how-work-2 .owl-carousel').owlCarousel({
	    items: 1,
        loop: true,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 650,
	    dotsContainer: '.how-dots'
    });
	
	/* testimonials */
	$('.testimonials .owl-carousel').owlCarousel({
	    items: 1,
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 700,
		mouseDrag: false,
		animateIn: 'fadeIn'
    });
	
	/* contact-area section */
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
	 	 
	 
});
$(document).ready(function(){
    $('.autoplay').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      dots: false,
      autoplaySpeed: 2000,
       responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
           dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
       dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:2,
          slidesToScroll: 2,
       dots: false
        }
      }
    ]
    });
});
$(window).on("load",function (){
	
     $('.load-wrapp').fadeOut(100);
      
});