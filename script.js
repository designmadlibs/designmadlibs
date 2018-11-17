$('.nav li').on("click", function() {

	var className = $(this).attr('class');

	var target = $('#'+className)
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);

});


$('.back-to-top').on("click", function() {

	var target = $('.nav')
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);

});