$(document).ready(function(){
    $('#header ul li a').click(function(){
        var targetElement = $(this).attr('href');
        console.log(targetElement);
        $('html, body').animate({ scrollTop: $(targetElement).offset().top}, 1000);
    });
});