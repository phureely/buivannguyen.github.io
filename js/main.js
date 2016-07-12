$(document).ready(function(){
    $.scrollSpeed(100, 800);
    $('#header ul li a, #hire-me').click(function(){
        var targetElement = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(targetElement).offset().top}, 1000);
    });
    $('#about ul').slick({
    	autoplay: true,
    	autoplaySpeed: 7000,
    	speed: 1500,
    	arrows: false
    });
    $('#about-slider-prev').click(function(event){
    	$('#about ul').slick('slickPrev');
    });
    $('#about-slider-next').click(function(event){
    	$('#about ul').slick('slickNext');
    });

    $('#images ul').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
	$('#images-slider-prev').click(function(event){
    	$('#images ul').slick('slickPrev');
    });
    $('#images-slider-next').click(function(event){
    	$('#images ul').slick('slickNext');
    });
    $('#images ul li a').click(function(event){
    	event.preventDefault();
    });
});
