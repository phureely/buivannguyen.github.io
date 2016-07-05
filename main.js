$(document).ready(function(){
    $('#header ul li a, #hire-me').click(function(){
        var targetElement = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(targetElement).offset().top}, 1000);
    });
});
