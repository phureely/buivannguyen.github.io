// $(window).on('load', function(){
// 	setTimeout(function(){
// 		$(window).scrollTop(0);
// 		$('#preloader').fadeOut('slow');
// 	}, 500);
// });
$(document).ready(function(){

	$('#navbar ul li a, #hire-me-btn').click(function(){
		var targetElement = $(this).attr('href');
		$('html, body').animate({ scrollTop: $(targetElement).offset().top}, 1000);
	});

	$('#slider *').hover(function(){
		$('.slider-control').stop().fadeIn();
	});
	$('#slider').mouseout(function(){
		$('.slider-control').stop().fadeOut();
	});

	$('#slider .slider-wrapper').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		variableWidth: true,
		centerMode: true,
		autoplay: true,
  		autoplaySpeed: 5000,
  		speed: 1000,
  		arrows : false,
	});
	$('#slider-prev').click(function(event){
		$('#slider .slider-wrapper').slick('slickPrev');
	});
	$('#slider-next').click(function(event){
		$('#slider .slider-wrapper').slick('slickNext');
	});

	$('#artists .artists-wrapper').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		centerMode: false,
		autoplay: true,
  		autoplaySpeed: 3000,
  		speed: 1000,
  		arrows : false,
	});

	$('.artist-more').click(function(){
		$('.artist-full').slideToggle();
	});

	// menu sidebar
	$('.acordion li ul').hide();
	$('.acordion li:first-child a').addClass('active');
	$('.acordion li:first-child ul').slideDown();
	$('.acordion > li > a').click(function(event){
		event.preventDefault();
		$('.acordion li ul').slideUp();
		$('.acordion > li > a').removeClass('active');
		$(this).addClass('active');
		$(this).next().slideDown();
	})
});
